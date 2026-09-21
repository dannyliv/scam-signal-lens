import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const corpusDir = resolve(root, 'data/corpora');
const provenanceDir = resolve(root, 'data/provenance');
const sourceDir = resolve(root, 'data/sources/spaphish-v5');
const sourceCsv = resolve(sourceDir, 'Spaphish dataset - DiB.csv');
const seedPath = process.env.SCAM_SIGNAL_LENS_SEED_PATH ?? resolve(provenanceDir, 'demo-25-original.json');
const sourceUrl = 'https://data.mendeley.com/datasets/hz2d6gz7pc/5';
const licenseUrl = 'https://creativecommons.org/licenses/by/4.0/';
const retrievalDate = '2026-09-20';
const selectionSeed = 'scam-signal-lens-spaphish-v5-balanced-500-2026-09-20';
const redactions = [{
  exampleId: 'SPAPHISH-397',
  sourceRecordId: 'cd1fee0cac571659996cfa1d54d459a699fd3a67a1f9d67857751a792c25bab2',
  field: 'input.body',
  parameterName: 'token',
  reason: 'credential-like password-reset token in preserved upstream message text',
  replacement: '[REDACTED_PASSWORD_RESET_TOKEN]',
  previousInputSha256: '9cb900c752150f7465c928e59d792ffed54641717fd3b093025f1a0a5d6127ad',
  newInputSha256: 'a97b8c345ea10e4e1721bf5b40af3a81c7e11c9d3e8d548a62d2e505fbc3baa2'
}];
const postCaptureExclusion = {
  kind: 'authorized_post_capture_exclusion',
  sourceDatasetId: 'spaphish-v5',
  excludedExampleIds: ['SPAPHISH-088'],
  reason: 'Pass B ended with HTTP 400 after the authorized diagnostic request budget; cause unresolved, excluded after capture by explicit publication authorization',
  sourceExpectedCount: 500
};

const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const normalize = (value) => value.replace(/\r\n/g, '\n');
const sortObject = (value) => Array.isArray(value) ? value.map(sortObject) : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map((key) => [key, sortObject(value[key])])) : value;
const stableJson = (value) => `${JSON.stringify(sortObject(value), null, 2)}\n`;
const canonicalJson = (value) => JSON.stringify(sortObject(value));

function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (quoted) {
      if (char === '"') {
        if (text[index + 1] === '"') { field += '"'; index += 1; } else quoted = false;
      } else field += char;
    } else if (char === '"') quoted = true;
    else if (char === ',') { row.push(field); field = ''; }
    else if (char === '\n') { row.push(field.endsWith('\r') ? field.slice(0, -1) : field); rows.push(row); row = []; field = ''; }
    else field += char;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function quantiles(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return Object.fromEntries([0, 0.5, 0.9, 0.95, 0.99, 1].map((q) => [`p${q * 100}`, sorted[Math.floor((sorted.length - 1) * q)]]));
}

function isEligibleSourceRow(row) {
  const subject = normalize(row.subject);
  const body = normalize(row.body);
  return (row.Label === '0' || row.Label === '1') && row.hash !== '' && body !== '' && subject.length <= 300 && body.length <= 8000;
}

function pickDeterministically(rows, label) {
  return rows
    .filter((row) => row.Label === label && isEligibleSourceRow(row))
    .map((row) => ({ row, rank: sha256(`${selectionSeed}:${label}:${row.hash}`) }))
    .sort((left, right) => left.rank.localeCompare(right.rank) || left.row.hash.localeCompare(right.row.hash))
    .slice(0, 250)
    .map(({ row }) => row);
}

function redactSelectedInput(row, exampleId) {
  const redaction = redactions.find((item) => item.exampleId === exampleId && item.sourceRecordId === row.hash);
  if (!redaction) return { subject: row.subject === '' ? null : normalize(row.subject), body: normalize(row.body), userContext: '' };
  const original = normalize(row.body);
  const matches = [...original.matchAll(/([?&]token=)[A-Za-z0-9._~-]+/g)];
  if (matches.length !== 1) throw new Error(`Expected exactly one token query value for ${exampleId}`);
  return { subject: row.subject === '' ? null : normalize(row.subject), body: original.replace(/([?&]token=)[A-Za-z0-9._~-]+/, `$1${redaction.replacement}`), userContext: '' };
}

const benignThemes = [
  ['Quarterly benefit enrollment', 'Enrollment window reminder', 'The benefits portal is open through Friday. Review your current selections in the employee portal, then save only if you want to make a change.', 'Uses the established employee portal and asks for an optional review.'],
  ['Clinic appointment reminder', 'Reminder about your Tuesday appointment', 'This is a reminder of your appointment at Harbor Clinic on Tuesday at 10:30. If you need to reschedule, call the number already listed in your patient portal.', 'Provides a routine reminder and directs the recipient to an existing channel.'],
  ['Library hold available', 'Your requested title is ready for pickup', 'Your hold is available at the Northside Library service desk until October 14. Bring your library card when you visit; no online action is required.', 'States a pickup deadline without requesting credentials or payment.'],
  ['Team meeting change', 'Wednesday planning meeting moved', 'The Wednesday planning meeting will start at 2:00 in Room Cedar. The calendar invitation has been updated for everyone on the project.', 'Communicates a scheduling change without asking the recipient to disclose information.'],
  ['Utility usage statement', 'Your monthly energy statement is ready', 'Your September statement is ready in the account portal. This message is for notification only; payment choices remain available from your normal account page.', 'Notifies about a statement and points to the normal account portal.'],
  ['Travel itinerary update', 'Your itinerary now includes a gate assignment', 'Your itinerary shows Gate C12 for the flight to Denver. Check the airline app on the day of travel because gate assignments can change.', 'Provides travel information and recommends an established app.'],
  ['Software maintenance notice', 'Scheduled maintenance this Saturday', 'The project tracker will be unavailable from 01:00 to 03:00 Saturday for maintenance. Save unfinished work before the maintenance window begins.', 'Gives an operational notice with no request for secrets or payment.'],
  ['Order delivery notice', 'Your desk lamp was delivered', 'Your order was marked delivered to the building reception at 14:18. If it is not there, open the order page from your purchase history to request help.', 'Reports a delivery and uses purchase history for support.'],
  ['Payroll document availability', 'Your pay statement is available', 'Your current pay statement is available in the payroll portal. We do not send pay statement attachments by email.', 'Sets a clear portal boundary and includes no credential request.'],
  ['Account password notice', 'Password updated successfully', 'Your account password was updated at 09:42 from a device you approved. If this was unexpected, use the security page you normally visit to review recent activity.', 'Describes a completed event and directs the recipient to a familiar security page.'],
  ['One time code delivery', 'Your requested sign in code', 'Use this code only in the sign in screen you opened: 482917. Do not share it with anyone, including support staff.', 'Delivers a requested code and explicitly says not to share it.'],
  ['Invoice received', 'Invoice INV-2048 received for review', 'We received invoice INV-2048 and routed it to Accounts Payable. The vendor will receive an update through the procurement system.', 'Acknowledges receipt without asking for payment or banking changes.'],
  ['School permission form', 'Field trip form due next week', 'The science museum permission form is due next Thursday. A paper copy is in your student folder and the school office can answer questions.', 'Uses routine school process and offers an established contact path.'],
  ['Subscription renewal receipt', 'Receipt for your annual renewal', 'Your annual membership renewed using the payment method already on file. The receipt is available in your account history.', 'Confirms an already completed renewal and directs to account history.'],
  ['Security training notice', 'Recognize unexpected verification requests', 'This month\'s security lesson shows examples of fake verification emails. Do not reply to a message that asks you to send a password or one time code.', 'Educational content warns against credential collection.'],
  ['Facilities update', 'Elevator inspection on floor five', 'The floor five elevator will be inspected between 08:00 and 11:00 Thursday. Use the east elevator during that window.', 'Provides a location and timing update only.'],
  ['Health plan explanation', 'Your explanation of benefits is ready', 'A new explanation of benefits is available for a recent visit. It is not a bill. Review it in the health plan portal if you would like details.', 'Clarifies that it is not a payment request and uses the plan portal.'],
  ['Vendor catalog update', 'New office supply catalog published', 'The updated supply catalog is available in the internal purchasing system. Existing approval rules still apply before an order is placed.', 'Shares a catalog update and retains normal approvals.'],
  ['Package pickup code', 'Locker pickup code for your order', 'Your locker pickup code is 7134. Enter it only at the locker when collecting the order you placed yesterday.', 'Supplies a physical pickup code tied to the recipient\'s order.'],
  ['Volunteer shift reminder', 'Saturday garden shift reminder', 'You are scheduled for the community garden at 09:00 Saturday. Reply to the coordinator in the volunteer directory if your availability changed.', 'Reminds the recipient of a known volunteer shift and directory contact.'],
  ['Research survey invitation', 'Optional campus services survey', 'The university is collecting optional feedback about campus services. The survey is available from the student dashboard and takes about five minutes.', 'Offers an optional survey through a known dashboard.'],
  ['Document collaboration', 'Comments requested on the project brief', 'The project brief is ready for comments in the shared workspace. Please add suggestions by Thursday so the team can prepare the final draft.', 'Requests ordinary collaboration in a shared workspace.'],
  ['Tax document availability', 'Your tax statement is available', 'Your tax statement is now available in the payroll portal. For your protection, this email does not contain an attachment or a login link.', 'Uses a portal-only delivery practice and avoids links.'],
  ['Warranty registration confirmation', 'Warranty registration confirmed', 'Your appliance warranty registration is complete. Keep this message with your purchase records; no further action is needed.', 'Confirms completion and requires no action.'],
  ['Community event update', 'Venue change for the neighborhood meeting', 'The neighborhood meeting will be held at the Riverside Community Center instead of the library. The agenda remains the same.', 'Communicates a venue change without a sensitive request.'],
  ['Expense report status', 'Expense report submitted for approval', 'Your expense report ER-883 has been submitted to your manager. You can view its status in the expense system.', 'Reports a workflow state and points to the system of record.'],
  ['Device return instructions', 'Laptop return appointment confirmed', 'Your equipment return appointment is confirmed for Friday at 13:00. Bring the issued laptop and charger to the service desk.', 'Gives logistical instructions with no account or payment action.'],
  ['Donation receipt', 'Thank you for your recent contribution', 'Thank you for your contribution. Your receipt is stored in your donor account and can be downloaded for your records.', 'Acknowledges a completed donation and uses an existing account.'],
  ['Food delivery receipt', 'Receipt for your lunch order', 'Your lunch order was delivered at 12:06. The receipt and item list are in your order history.', 'Confirms a completed delivery and uses order history.'],
  ['Building access update', 'Visitor entrance temporarily closed', 'Use the south entrance for visitors this afternoon while the main entrance door is repaired. Staff badge access is unchanged.', 'Shares a physical access update only.'],
  ['Account recovery education', 'How account recovery works', 'If you lose access to your account, start recovery from the sign in page. Support will never ask you to read a verification code over the phone.', 'Educational notice explicitly rejects code sharing.'],
  ['Course registration reminder', 'Registration opens Monday', 'Course registration opens Monday at 07:00 in the student system. Review the course catalog before you register.', 'Provides a routine registration notice through the student system.'],
  ['Insurance policy document', 'Updated policy document available', 'An updated policy document is ready in your customer account. Your coverage remains active unless you receive a separate mailed notice.', 'Provides document availability without asking for immediate action.'],
  ['Calendar invitation', 'Invitation: design review at 11:00', 'You have been invited to a design review at 11:00 Friday. Accept or decline from the calendar service you already use.', 'Uses the normal calendar workflow.'],
  ['Phone plan summary', 'Your data usage summary', 'You used 72 percent of your monthly data allowance. You can review plan options in the carrier app if you want to make a change.', 'Provides usage information and makes account changes optional.'],
  ['New hire orientation', 'Orientation checklist for Monday', 'Orientation begins at 09:00 Monday in the training room. Bring photo identification for building access; human resources will collect forms in person.', 'Gives onboarding logistics and keeps form collection in person.'],
  ['Maintenance work order', 'Work order completed', 'The maintenance request for the conference room light was completed this morning. Reply through the facilities portal if the issue returns.', 'Closes a known work order and gives an established support route.'],
  ['Parcel delay explanation', 'Your shipment is delayed by weather', 'Your shipment is delayed because of regional weather. The estimated delivery date is visible in the order page; no action is required from you.', 'Explains a delay and states that no action is needed.'],
  ['Bank statement ready', 'Your monthly statement is ready', 'Your monthly statement is available in online banking. For security, open the banking app directly instead of using email links.', 'Uses direct app access and gives a security reminder.'],
  ['Conference registration', 'Your conference registration is confirmed', 'Your registration for the October research conference is confirmed. Your badge pickup instructions will appear in the event portal next week.', 'Confirms a registration and uses the event portal for logistics.'],
  ['Prescription pickup reminder', 'Prescription ready for pickup', 'Your prescription is ready at the pharmacy counter. Contact the pharmacy through the number on your prescription label if you have questions.', 'Provides a pickup notice and established phone reference.'],
  ['Service outage resolved', 'Email delivery incident resolved', 'This morning\'s email delivery issue has been resolved. Messages sent during the incident were queued automatically.', 'Reports resolution and no requested action.'],
  ['Training completion record', 'Training completion recorded', 'Your annual safety training was recorded as complete. A certificate is available in the learning portal for your records.', 'Confirms completion and offers a certificate in a known portal.'],
  ['Museum ticket reminder', 'Your museum tickets are ready', 'Your tickets are available in the ticketing account you used at purchase. Bring the barcode from that account when you arrive.', 'Uses the purchase account and provides arrival instructions.']
];

const phishingThemes = [
  ['Account hold notice', 'Action needed for your account', 'We detected a problem with your account. Send your username, password, and current verification code by reply so we can remove the hold today.', 'Requests credentials and a verification code by reply.'],
  ['Refund claim', 'Claim your unused refund now', 'You have an unclaimed refund. Pay a small processing charge with your card number and security code before the refund window closes.', 'Requests card details to obtain a claimed refund.'],
  ['Remote support request', 'Computer infection requires remote repair', 'A technician found harmful activity on your computer. Install the remote support tool from the attached instructions and give the technician control immediately.', 'Pressures the recipient to install remote access software.'],
  ['Invoice bank change', 'Urgent change to payment instructions', 'Our bank account changed this morning. Cancel the scheduled invoice payment and send it to the new account details below before the transfer cutoff.', 'Attempts to redirect an unusual payment route under urgency.'],
  ['Prize advance fee', 'You were selected for a cash award', 'Your award is ready. Purchase gift cards totaling 300 dollars to cover release fees, then email the card numbers to the claims desk.', 'Requests gift cards as an advance fee for a prize.'],
  ['Payroll update request', 'Payroll record needs immediate correction', 'Reply with your employee number, payroll password, and bank routing number so we can correct a direct deposit problem before tonight\'s run.', 'Requests payroll credentials and banking details by email.'],
  ['Package customs fee', 'Delivery cannot continue without a fee', 'Your parcel is held at customs. Submit your card details through the enclosed form within two hours or the package will be discarded.', 'Uses urgency to seek card details for an alleged delivery fee.'],
  ['Executive request', 'Confidential request from leadership', 'I am in a meeting and cannot talk. Buy four digital gift cards, scratch the backs, and send me the codes before anyone else is told.', 'Uses secrecy and gift card codes to request payment.'],
  ['Password expiry threat', 'Password expires today', 'Your password will be disabled in 30 minutes. Reply with your current password and a new password so the help desk can update it.', 'Requests current and new passwords through email.'],
  ['Tax refund claim', 'Final notice about your tax refund', 'To receive your tax refund, confirm your full card number and online banking password in the secure reply form before midnight.', 'Requests card and banking credentials for a refund.'],
  ['Charity appeal', 'Emergency donation needed tonight', 'Families need immediate help after the storm. Send a wire transfer confirmation and your online banking login so our finance volunteer can process it.', 'Uses urgency to solicit a wire transfer and bank login.'],
  ['Cloud storage threat', 'Files scheduled for deletion', 'Your stored files will be deleted today. Verify your identity by sending your account password and the code from your authenticator.', 'Threatens loss to collect a password and authenticator code.'],
  ['Job offer fee', 'You are approved for remote work', 'Your position is approved once you pay the equipment enrollment fee by cryptocurrency. Send the transaction receipt to reserve the role.', 'Requires cryptocurrency payment before employment begins.'],
  ['Vendor portal request', 'Supplier portal verification required', 'The supplier portal is under review. Enter your company login, password, and finance approval code in the attached worksheet.', 'Requests credentials and an approval code through an attachment.'],
  ['Credit card alert', 'Card activity must be verified', 'We blocked a charge. Reply with your card number, expiration date, security code, and one time code to release the account.', 'Collects full card data and a one time code by reply.'],
  ['Misdirected payment', 'Please reroute today\'s payment', 'The invoice payment was sent to the wrong account. Use the new beneficiary details below and do not call the number on the invoice because the line is busy.', 'Directs a payment change and discourages independent verification.'],
  ['Inheritance offer', 'Estate funds await your assistance', 'A distant relative left funds in your name. Pay the legal filing charge by wire today and send a photo of your identification to begin release.', 'Requests an advance wire fee and identity document.'],
  ['Social media recovery', 'Confirm ownership of your profile', 'Your profile will be removed unless you send your password and the code we texted you. Our recovery team needs both within fifteen minutes.', 'Uses an account removal threat to obtain password and code.'],
  ['Medical bill refund', 'Refund available from your recent visit', 'We owe you a medical refund. Reply with your bank account number, routing number, and date of birth to receive it this afternoon.', 'Uses a refund pretext to seek banking and identity details.'],
  ['Loan approval', 'Loan funds ready after verification', 'Your loan is approved. Buy a prepaid card for the insurance deposit and email the card number so funds can be released.', 'Requires a prepaid card payment before loan funds.'],
  ['Document signature trap', 'Signature needed before account closure', 'Open the attached document, enable editing, and enter your email password when prompted to prevent your account from closing.', 'Combines an attachment instruction with a password request.'],
  ['Travel cancellation threat', 'Reservation will be cancelled shortly', 'Your reservation is at risk. Send your card security code and the confirmation code from your phone so we can keep the booking active.', 'Uses a cancellation threat to solicit card data and a phone code.'],
  ['Investment solicitation', 'Guaranteed return available today', 'Transfer funds to the private wallet listed below before the market window closes. Keep this opportunity confidential while we reserve your allocation.', 'Requests a cryptocurrency transfer with secrecy and urgency.'],
  ['Help desk impersonation', 'We need to verify your workstation', 'Our help desk needs your network password and the number shown in your authentication app to finish a security scan.', 'Impersonates support to request a password and authentication code.'],
  ['Donation receipt correction', 'Your donation record needs a card update', 'Your contribution receipt cannot be issued until you reply with the card number used, its security code, and your billing password.', 'Collects card details and a password under a receipt pretext.'],
  ['Legal demand', 'Final legal notice requires payment', 'Avoid a court filing by buying gift cards for the settlement amount and sending photographs of the codes before 17:00.', 'Threatens legal consequences to demand gift card codes.'],
  ['Security audit demand', 'Mandatory audit response', 'To pass the audit, send your administrative login and temporary access code directly to the auditor mailbox below.', 'Requests privileged credentials and a temporary access code.'],
  ['Crypto account warning', 'Withdrawal blocked until verification', 'Your withdrawal is blocked. Transfer a verification deposit to the listed wallet and provide your account password to unlock it.', 'Requests both a cryptocurrency deposit and password.'],
  ['Mobile carrier alert', 'SIM transfer request detected', 'Stop the transfer by replying with your account PIN, password, and the latest verification code sent to your phone.', 'Requests account PIN, password, and phone verification code.'],
  ['Student grant offer', 'Grant release requires a fee', 'Your student grant was approved. Pay the application release fee with gift cards and send the codes before the funding list closes.', 'Demands gift cards as a condition for grant funding.'],
  ['Procurement bypass', 'Use this private purchasing method', 'The usual procurement system is unavailable. Send the purchase amount by wire to the account below and delete this email after payment.', 'Bypasses normal purchasing with wire instructions and secrecy.'],
  ['Email quota warning', 'Mailbox will stop receiving mail', 'Your mailbox quota is full. Reply with your email password and current one time code so we can expand storage immediately.', 'Uses a quota threat to collect email credentials and a code.'],
  ['Customer survey reward', 'Exclusive survey reward waiting', 'Complete the survey by sending your card number and security code to confirm where we should send the reward.', 'Uses a reward promise to ask for card details.'],
  ['Insurance cancellation', 'Policy cancellation can still be stopped', 'Reply with your policy password, date of birth, and bank card security code before noon to stop cancellation.', 'Pressures for password, identity details, and a card security code.'],
  ['Account manager request', 'Manager needs a quick confidential favor', 'I cannot access the payment system. Send a wire transfer to the attached beneficiary and do not verify this request with anyone until I call.', 'Requests a wire transfer and suppresses verification.'],
  ['Messaging app verification', 'Your messaging account needs verification', 'Send the six digit sign in code you received and your account password so our verification bot can restore service.', 'Requests a sign in code and password.'],
  ['Subscription refund', 'Refund processing is nearly complete', 'Send your card security code and online banking login to finish the refund before the case closes automatically.', 'Uses a refund deadline to request card and banking credentials.'],
  ['Airport fee demand', 'Travel document fee due now', 'Your boarding document requires a payment today. Purchase a voucher and reply with the voucher number to avoid a travel ban.', 'Demands a voucher code under a travel threat.'],
  ['Supplier takeover', 'New remittance account', 'All future invoices must use the new remittance account below. Do not use the supplier portal because it is being upgraded.', 'Attempts to change remittance details and bypasses the portal.'],
  ['Account investigation', 'Investigation requires your cooperation', 'We are investigating suspicious activity. Send a scan of your identification, your password, and the next verification code you receive.', 'Requests identity documentation, a password, and a future code.'],
  ['Online marketplace notice', 'Buyer payment requires a release fee', 'A buyer paid for your listing. Pay the release fee by cryptocurrency and send the wallet receipt before the payment expires.', 'Uses an alleged buyer payment to demand cryptocurrency.'],
  ['Family emergency request', 'Please help me immediately', 'I am stranded and cannot call. Buy gift cards and send the numbers in reply so I can pay for transportation without alerting anyone.', 'Uses an emergency and secrecy story to request gift card codes.'],
  ['Password manager warning', 'Vault access will be suspended', 'Confirm your master password and recovery code in reply within ten minutes to keep the vault active.', 'Requests master password and recovery code under urgency.'],
  ['Domain renewal threat', 'Domain name will be released today', 'Your domain registration expires today. Send the registrar password and card security code in reply so we can prevent another buyer from taking it.', 'Uses an expiry threat to collect a registrar password and card security code.']
];

const benignAdditionalThemes = [
  ['Childcare schedule', 'New afternoon pickup procedure', 'Beginning Monday, after-school pickup will use the west gate. Families already approved for pickup do not need to complete another form.', 'Explains a routine pickup procedure without collecting information.'],
  ['Parking permit', 'Parking permit renewal opens next month', 'Parking permit renewal opens in the campus portal next month. Your current permit remains valid through its printed date.', 'Gives a future renewal notice through an established portal.'],
  ['Printer service', 'Printer maintenance completed', 'The third-floor printer is back in service after maintenance. Print jobs submitted during the outage were not saved.', 'Reports service restoration and no requested action.'],
  ['Pet appointment', 'Reminder for annual pet visit', 'Your pet has an annual wellness visit scheduled next Wednesday. Please bring the vaccination card you already keep with your records.', 'Provides an appointment reminder without seeking credentials.'],
  ['Team leave calendar', 'Holiday leave calendar published', 'The holiday leave calendar is available on the intranet. Discuss coverage changes with your manager during the normal planning meeting.', 'Shares a planning document and normal process.'],
  ['Book club update', 'Book club selection for November', 'The November book club selection is listed in the community newsletter. Borrowing copies from the library remains free.', 'Announces a community selection with no sensitive request.'],
  ['Network notice', 'Guest network password rotated', 'The guest wireless password was rotated for the meeting rooms. Ask the front desk in person when you arrive if you need it.', 'Uses an in-person method for a shared facility password.'],
  ['Lab safety', 'Lab access reminder', 'Please wear the required safety equipment before entering the chemistry lab. The safety checklist is posted at the entrance.', 'Provides physical safety instructions only.'],
  ['Apartment maintenance', 'Water service interruption', 'Water service will pause from 10:00 to noon while a valve is replaced. Building staff do not need to enter individual apartments.', 'Gives a maintenance time window and sets an entry expectation.'],
  ['Event waitlist', 'You moved from the event waitlist', 'A seat is available for the workshop. Confirm attendance from the event account you used to join the waitlist.', 'Uses the original event account for confirmation.'],
  ['Payroll correction complete', 'Payroll correction has been processed', 'The approved correction to your hours has been processed. The change will appear on the next regular pay statement.', 'Reports a completed payroll correction without collecting data.'],
  ['Meeting recording', 'Recording available for review', 'The town hall recording is available in the internal video library. Captions and the written transcript are posted beside it.', 'Shares an internal recording resource.'],
  ['Credit union bulletin', 'Branch holiday hours', 'The credit union branch will close early Friday for the holiday. Online banking availability is unchanged.', 'Communicates hours and no account action.'],
  ['Equipment reservation', 'Camera reservation confirmed', 'Your camera reservation is confirmed for Saturday. Pick it up at the media desk with the reservation number from your library account.', 'Confirms a reservation and uses the associated account.'],
  ['Fitness class', 'Class location changed', 'The evening yoga class will meet in Studio Two because of floor repairs. Your existing registration remains active.', 'Changes a location without requiring information.'],
  ['Warranty service visit', 'Technician visit confirmed', 'A technician visit is confirmed for Thursday afternoon. The service request number is available in your appliance account.', 'Confirms a booked visit and references the account record.'],
  ['Holiday package hours', 'Package room holiday schedule', 'The package room will close at 16:00 on the holiday eve. Items already logged will remain secure until the next business day.', 'Provides hours and assurance about already logged items.'],
  ['Photo archive', 'Shared photo archive updated', 'The project photo archive now includes last week\'s event. Add captions in the shared folder if you attended.', 'Invites normal collaboration in a shared folder.'],
  ['Restaurant booking', 'Table reservation reminder', 'Your dinner reservation is set for 19:00 Friday. Contact the restaurant using the number from your reservation confirmation if plans change.', 'Gives a reservation reminder and established contact route.'],
  ['Repair estimate', 'Estimate ready for review', 'The repair estimate is ready in the service portal. You can approve, decline, or ask a question there at your convenience.', 'Makes review optional through a normal portal.'],
  ['Mailroom delivery', 'Registered letter received', 'A registered letter for you is at the mailroom. Bring your employee badge to collect it during service hours.', 'Provides physical collection instructions.'],
  ['Neighborhood patrol', 'Community patrol schedule', 'The volunteer patrol schedule is posted on the neighborhood board. It is informational and does not request donations or account details.', 'Clearly states informational community content.'],
  ['Records retention', 'Records retention reminder', 'Please place completed project records in the shared archive by month end. The records team will handle final retention classification.', 'Requests ordinary document filing.'],
  ['Hotel confirmation', 'Your hotel confirmation is available', 'Your hotel confirmation is available in the travel booking account used for the reservation. Check in at the desk with identification.', 'Uses the booking account and routine check in.'],
  ['Garden irrigation', 'Irrigation testing tomorrow', 'The garden irrigation system will be tested at dawn tomorrow. Avoid the east path until the test ends.', 'Provides a site safety notice.'],
  ['Lab results notice', 'Results posted to your portal', 'Your routine lab results are posted to the patient portal. A clinician will contact you separately if follow up is needed.', 'Uses a patient portal and avoids interpreting results by email.'],
  ['Student loan education', 'Understanding repayment options', 'The financial aid office is hosting an information session about repayment options. Sign up through the student events page if interested.', 'Offers optional education through a known events page.'],
  ['Invoice approval reminder', 'Approval reminder for open invoice', 'Invoice INV-441 remains in the procurement queue for review. Approve it only after checking the purchase order in the usual system.', 'Reinforces normal verification before approval.'],
  ['Software license notice', 'License renewal completed', 'The design software license renewal is complete. Continue signing in through the company single sign on page.', 'Confirms a renewal and directs users to normal sign in.'],
  ['Board agenda', 'Agenda for Tuesday board meeting', 'The board agenda and supporting documents are available in the governance workspace. Printed copies will also be available at the meeting.', 'Shares governance documents through a workspace.'],
  ['Recycling collection', 'Collection day moved this week', 'Recycling collection will occur Thursday instead of Wednesday because of the holiday. No account update is required.', 'Communicates a local service schedule.'],
  ['Course feedback', 'Optional feedback form', 'Your instructor invites optional feedback about the course. Use the learning system survey link you already see after class.', 'Offers optional feedback in the existing learning system.'],
  ['Insurance claim update', 'Claim status updated', 'Your claim status changed to under review. Any requested documents will appear in your secure claim portal.', 'Reports status and keeps document requests in a portal.'],
  ['Warehouse delivery', 'Receiving dock schedule', 'The receiving dock will accept deliveries from 08:00 to 15:00 Friday. Drivers should use the posted entrance signage.', 'Provides operational logistics only.'],
  ['Account security digest', 'Weekly account activity digest', 'Your weekly activity digest is ready in the account center. It lists recent sign ins but does not require a response.', 'Provides account information without solicitation.'],
  ['Community class', 'Registration opens for cooking class', 'Registration opens tomorrow for the community cooking class. Payment is made in person at the recreation desk after registration.', 'Describes an in-person payment process.'],
  ['Vehicle service', 'Vehicle service completed', 'Your scheduled vehicle service is complete. The inspection report is in the dealership account used to book the visit.', 'Confirms a service and uses an existing booking account.'],
  ['Public transit notice', 'Route 14 detour this weekend', 'Route 14 will use a detour this weekend because of road work. The transit app will show the temporary stops.', 'Shares public route information.'],
  ['Training room booking', 'Training room reservation updated', 'Your training room reservation moved to Room Maple. The meeting time and attendee list remain unchanged.', 'Updates a room reservation.'],
  ['Alumni newsletter', 'October alumni newsletter', 'The October newsletter is available on the alumni site. It includes event dates and volunteer stories.', 'Shares a newsletter without requests for account details.'],
  ['Water quality report', 'Annual water quality report published', 'The annual water quality report is available on the municipal information page. Printed copies can be requested from city hall.', 'Publishes a public report with an offline option.'],
  ['Staff directory update', 'Directory photo update available', 'You can update your directory photo during open office hours next week. The request is optional.', 'Offers an optional in-person update.'],
  ['Accessibility update', 'Accessibility review completed', 'The website accessibility review is complete and the updated help guide is on the intranet. Report issues through the standard help form.', 'Reports an internal update and normal support channel.'],
  ['Package insurance education', 'How delivery protection works', 'Delivery protection details are available in the order help center. Do not send card information by email to change coverage.', 'Educational notice rejects email card collection.']
];

const phishingAdditionalThemes = [
  ['Payroll tax threat', 'Tax form problem requires reply', 'Your tax form will be rejected unless you email your payroll password and bank account number before the filing deadline.', 'Uses a filing threat to request password and bank details.'],
  ['Password reset relay', 'Reply with your reset code', 'We sent a password reset code to your phone. Forward the code and your current password so our agent can finish the reset.', 'Requests a reset code and password.'],
  ['Unpaid toll notice', 'Toll debt will increase today', 'Pay the toll debt with a prepaid voucher and send the voucher number in reply before penalties are added.', 'Demands a prepaid voucher under a penalty threat.'],
  ['Vendor fraud alert', 'Vendor record needs an urgent update', 'To keep invoices moving, reply with the vendor portal login and bank authorization token for a record update.', 'Requests portal credentials and authorization token.'],
  ['Gift delivery claim', 'Gift shipment needs verification', 'A gift shipment is waiting. Enter your card number and security code in reply to verify the delivery address.', 'Seeks card details using a gift delivery story.'],
  ['Court summons scare', 'Respond before the court deadline', 'Avoid a warrant by wiring the settlement amount today. Do not discuss the notice with local staff until payment is complete.', 'Threatens legal action and discourages verification.'],
  ['Hotel loyalty alert', 'Points will expire tonight', 'Keep your loyalty points by sending the account password and the verification number from your phone before midnight.', 'Uses expiring points to obtain password and verification code.'],
  ['IT migration request', 'Mailbox migration needs credentials', 'The email migration team needs your password and authenticator code to move your mailbox before service stops.', 'Impersonates IT to request credentials.'],
  ['Late fee waiver', 'Late fee can be waived today', 'Send your card details and online banking password now to receive a one time waiver of the late fee.', 'Offers a fee waiver to collect card and bank credentials.'],
  ['Donation matching fraud', 'Company match requires a payment card', 'Your donation can be matched if you provide a card number, security code, and payroll login in reply.', 'Requests card and payroll credentials for a donation match.'],
  ['Airport lost baggage', 'Baggage release fee required', 'Your bag was found. Pay a release fee with cryptocurrency and email the transaction reference within one hour.', 'Demands cryptocurrency for alleged baggage release.'],
  ['Benefits card warning', 'Benefits card will be deactivated', 'Reply with the card number, PIN, and the code from your phone to stop deactivation before lunch.', 'Requests card number, PIN, and phone code.'],
  ['Loan servicing change', 'New servicing account takes effect now', 'Make this month\'s loan payment by wire to the new account below. Do not use the existing payment page.', 'Redirects a payment away from the established page.'],
  ['Recruiter equipment scam', 'Equipment purchase must happen today', 'Buy equipment from our listed seller with gift cards and send the codes so your remote position can start.', 'Demands gift cards for supposed job equipment.'],
  ['Cloud sharing request', 'Shared file requires a login confirmation', 'Open the attached file and enter your email password to view it. Complete this within twenty minutes before access is removed.', 'Requests an email password through an attachment.'],
  ['Account closure threat', 'Final account closure notice', 'Send your account PIN and password to prevent immediate closure. Support cannot accept calls about this urgent case.', 'Requests PIN and password while blocking verification.'],
  ['Charity receipt fraud', 'Receipt correction needs bank verification', 'Reply with your routing number and online banking password so we can correct the donation receipt.', 'Uses a receipt correction to seek banking credentials.'],
  ['Telephone provider scam', 'Service interruption scheduled', 'Prevent disconnection by sending your mobile account PIN and the current texted code to our service desk.', 'Uses a service threat to collect PIN and code.'],
  ['Government grant fraud', 'Grant application moved to final review', 'Pay the final review charge by wire and send your identity document scan to receive the grant release number.', 'Requests an advance wire fee and identity document.'],
  ['Auction payment fraud', 'Auction payment is awaiting release', 'The buyer paid already. Send a cryptocurrency deposit to release your sale proceeds before the buyer cancels.', 'Requests cryptocurrency before alleged proceeds release.'],
  ['Merchant dispute scam', 'Dispute will close without verification', 'Reply with your card number, CVV, password, and current authentication code to keep the dispute open.', 'Requests card data, password, and authentication code.'],
  ['Security camera scam', 'Camera access requires remote repair', 'A security camera is compromised. Install the attached remote utility and give our operator the access code.', 'Requests remote access software and an access code.'],
  ['School debt fraud', 'School balance must be settled today', 'Pay the outstanding school balance with gift cards and send the codes before the student record is locked.', 'Demands gift cards under a school record threat.'],
  ['Investment account freeze', 'Investment access is frozen', 'Unfreeze the account by emailing your trading password and the six digit code from your authentication app.', 'Requests trading credentials and an authentication code.'],
  ['Printer support fraud', 'Printer license needs remote activation', 'Install the support session tool and allow remote control so we can activate the printer license today.', 'Requests remote control under a license pretext.'],
  ['Travel visa fraud', 'Visa processing fee is due', 'Buy a prepaid voucher for the visa processing fee and email the voucher number before your application is cancelled.', 'Demands a voucher under a visa cancellation threat.'],
  ['Invoice attachment fraud', 'Open invoice attachment immediately', 'Enable content in the attached invoice and sign in with your finance account to view the revised payment details.', 'Uses an attachment to seek finance credentials.'],
  ['Benefit overpayment', 'Overpayment recovery needs your bank login', 'We must return a benefits overpayment. Send your bank login and password so the refund team can deposit it.', 'Requests bank login for an alleged refund.'],
  ['Account validation demand', 'Validation team needs your code', 'Our validation team needs the next sign in code you receive plus your password to keep your account active.', 'Requests a future sign in code and password.'],
  ['Property tax fraud', 'Property tax relief claim expires', 'Pay the enrollment fee by cryptocurrency and reply with the transaction reference to keep your tax relief claim.', 'Requests cryptocurrency for a relief claim.'],
  ['Delivery address fraud', 'Address correction needs card check', 'To correct the delivery address, reply with your card number and security code before the parcel returns to sender.', 'Seeks card details under a delivery threat.'],
  ['Executive travel favor', 'Private travel favor needed', 'I am boarding now. Wire the travel advance to the account below and keep the request between us.', 'Uses executive impersonation, wire transfer, and secrecy.'],
  ['Password policy threat', 'Policy violation detected', 'Send your network password and temporary MFA code now or your workstation will be disconnected.', 'Threatens disconnection to request credentials.'],
  ['Loyalty redemption fraud', 'Redeem your points with a fee', 'Pay the redemption fee with a gift card and email the number so we can unlock your points.', 'Requests gift card payment for rewards.'],
  ['Legal refund fraud', 'Settlement refund needs a filing fee', 'Wire the filing fee to our legal account and send a copy of your identification so we can release the settlement.', 'Requests wire payment and identity material for a settlement.'],
  ['Secure message fraud', 'Encrypted message requires your password', 'The secure message cannot open until you email your password and the code from your authenticator.', 'Requests password and authenticator code.'],
  ['Subscription termination threat', 'Service ends unless you verify', 'Keep the service active by replying with your payment card details and account password before the hour ends.', 'Requests payment card details and password under urgency.'],
  ['Bank manager impersonation', 'Manager approval required now', 'Your manager approved a confidential transfer. Complete the wire and do not contact the manager because she is unavailable.', 'Uses impersonation and blocks verification of a wire request.'],
  ['Medical insurance fraud', 'Coverage review needs verification', 'Reply with your insurance password, date of birth, and bank card security code to avoid losing coverage.', 'Requests insurance password, identity data, and card security code.'],
  ['Device warranty fraud', 'Warranty claim needs a deposit', 'Send a cryptocurrency deposit to start the warranty claim, then give us remote access to inspect the device.', 'Requests cryptocurrency and remote access.'],
  ['Student account fraud', 'Student account will be locked', 'Send your campus password and the verification code you just received to prevent the lock.', 'Requests a campus password and verification code.'],
  ['Mail forwarding fraud', 'Forwarding service needs confirmation', 'Confirm forwarding by replying with your card number and online account password within thirty minutes.', 'Uses mail forwarding to seek card and account credentials.'],
  ['Vendor rebate fraud', 'Rebate check needs a processing fee', 'Pay the processing fee with prepaid cards and email the numbers to receive the vendor rebate check.', 'Requests prepaid card codes before a rebate.'],
  ['Identity audit fraud', 'Identity audit requires documents now', 'Send your password, identity document, and banking verification code to the audit mailbox immediately.', 'Requests password, identity documents, and banking code.']
];

function authoredExtra(theme, index, label) {
  const [title, subject, body, rationale] = theme;
  return {
    id: `AI${label === 'benign' ? 'B' : 'P'}${String(index + 1).padStart(3, '0')}`,
    datasetId: 'ai-email-200-v1',
    title,
    language: 'en',
    input: { channel: 'email', subject, body, userContext: '' },
    groundTruth: { label, labelSource: 'synthetic_author', rationale },
    provenance: {}
  };
}

function buildAiCorpus(seed) {
  const seedExamples = seed.examples.map((example) => ({
    id: `AI${example.authorLabel === 'scam' ? 'P' : 'B'}SEED${example.id.slice(1)}`,
    datasetId: 'ai-email-200-v1',
    title: example.title,
    language: 'en',
    input: { channel: 'email', subject: example.input.subject === null ? null : normalize(example.input.subject), body: normalize(example.input.body), userContext: normalize(example.input.userContext ?? '') },
    groundTruth: { label: example.authorLabel === 'scam' ? 'phishing' : 'benign', labelSource: 'synthetic_author', rationale: normalize(example.annotation?.rationale ?? 'Original synthetic teaching scenario.') },
    provenance: { originalSeedIds: [example.id] }
  }));
  const benignSeedCount = seedExamples.filter((example) => example.groundTruth.label === 'benign').length;
  const phishingSeedCount = seedExamples.filter((example) => example.groundTruth.label === 'phishing').length;
  const benign = benignThemes.concat(benignAdditionalThemes).slice(0, 100 - benignSeedCount).map((theme, index) => authoredExtra(theme, index, 'benign'));
  const phishing = phishingThemes.concat(phishingAdditionalThemes).slice(0, 100 - phishingSeedCount).map((theme, index) => authoredExtra(theme, index, 'phishing'));
  return [...seedExamples, ...benign, ...phishing].sort((left, right) => left.id.localeCompare(right.id));
}

async function main() {
  await Promise.all([mkdir(corpusDir, { recursive: true }), mkdir(provenanceDir, { recursive: true })]);
  if (seedPath !== resolve(provenanceDir, 'demo-25-original.json')) await copyFile(seedPath, resolve(provenanceDir, 'demo-25-original.json'));
  const seedRaw = await readFile(seedPath, 'utf8');
  const seed = JSON.parse(seedRaw);
  const aiExamples = buildAiCorpus(seed);
  const sourceRaw = await readFile(sourceCsv, 'utf8');
  const rawRows = parseCsv(sourceRaw.replace(/^\uFEFF/, ''));
  const headers = rawRows.shift();
  const rows = rawRows.map((cells, index) => ({ index: index + 2, ...Object.fromEntries(headers.map((header, cellIndex) => [header, cells[cellIndex] ?? ''])) }));
  const selectedBenign = pickDeterministically(rows, '0');
  const selectedPhishing = pickDeterministically(rows, '1');
  const selected = [...selectedBenign, ...selectedPhishing].sort((left, right) => left.hash.localeCompare(right.hash));
  const spaphishExamples = selected.map((row, index) => ({
    id: `SPAPHISH-${String(index + 1).padStart(3, '0')}`,
    datasetId: 'spaphish-v5',
    title: `Spanish source email ${String(index + 1).padStart(3, '0')}`,
    language: 'es',
    input: { channel: 'email', ...redactSelectedInput(row, `SPAPHISH-${String(index + 1).padStart(3, '0')}`) },
    groundTruth: { label: row.Label === '1' ? 'phishing' : 'benign', labelSource: 'source_dataset' },
    provenance: { sourceRecordId: row.hash }
  }));
  const lengths = rows.map((row) => ({ subject: normalize(row.subject).length, body: normalize(row.body).length }));
  const exclusions = rows.filter((row) => !isEligibleSourceRow(row)).map((row) => {
    const subjectLengthUtf16 = normalize(row.subject).length;
    const bodyLengthUtf16 = normalize(row.body).length;
    const reasons = [
      !['0', '1'].includes(row.Label) ? 'invalid_source_label' : null,
      row.hash === '' ? 'missing_source_record_id' : null,
      bodyLengthUtf16 === 0 ? 'empty_body' : null,
      subjectLengthUtf16 > 300 ? 'subject_exceeds_300_utf16' : null,
      bodyLengthUtf16 > 8000 ? 'body_exceeds_8000_utf16' : null
    ].filter(Boolean);
    return { sourceRecordId: row.hash, csvRow: row.index, subjectLengthUtf16, bodyLengthUtf16, reasons };
  });
  const sourceCounts = Object.fromEntries(['0', '1'].map((label) => [label, rows.filter((row) => row.Label === label).length]));
  const selectionManifest = {
    version: '1.0.0', datasetId: 'spaphish-v5', sourceUrl, retrievalDate, selection: { algorithm: 'sha256_rank_v1', seed: selectionSeed, fixedBeforeInference: true, perLabel: 250, labelMapping: { '0': 'benign', '1': 'phishing' } },
    sourceCsvSha256: sha256(sourceRaw), selected: selected.map((row) => ({ sourceRecordId: row.hash, label: row.Label === '1' ? 'phishing' : 'benign', rank: sha256(`${selectionSeed}:${row.Label}:${row.hash}`) })),
    sourceCounts: Object.fromEntries(['0', '1'].map((label) => [label, rows.filter((row) => row.Label === label).length])),
    eligibleCounts: Object.fromEntries(['0', '1'].map((label) => [label, rows.filter((row) => row.Label === label && isEligibleSourceRow(row)).length])),
    exclusions: exclusions.map((row) => ({ ...row, disposition: 'excluded_before_selection' })),
    selectedInputSha256: Object.fromEntries(spaphishExamples.map((example) => [example.provenance.sourceRecordId, sha256(canonicalJson(example.input))])),
    redactions: { ledger: 'data/provenance/spaphish-v5-redactions.json', count: redactions.length, entries: redactions.map(({ exampleId, sourceRecordId, field, parameterName, reason, replacement, previousInputSha256, newInputSha256 }) => ({ exampleId, sourceRecordId, field, parameterName, reason, replacement, previousInputSha256, newInputSha256 })) }
  };
  const aiEnvelope = { version: '1.0.0', metadata: { datasetId: 'ai-email-200-v1', language: 'en', provenanceKind: 'ai_authored', counts: { benign: 100, phishing: 100, total: 200 }, originalSeed: { preservedPath: 'data/provenance/demo-25-original.json', byteSha256: sha256(seedRaw), includedScenarioIds: seed.examples.map((example) => example.id) }, preparation: { lineEndingNormalization: 'CRLF normalized to LF in corpus fields only', inputLimitsUtf16: { subject: 300, body: 8000, userContext: 2000 } } }, examples: aiExamples };
  const spaphishEnvelope = { version: '1.0.0', metadata: { datasetId: 'spaphish-v5', language: 'es', provenanceKind: 'third_party_dataset', upstream: { title: 'SpaPhish: A Spanish Dataset for Phishing and Psychological Pattern Detection', release: 5, doi: '10.17632/hz2d6gz7pc.5', url: sourceUrl, retrievalDate, license: 'CC BY 4.0', licenseUrl, creators: 'Bustio-Martinez et al.', modifications: 'Selected a deterministic balanced subset before inference, normalized CRLF to LF in subject and body, redacted one credential-like password-reset token value while retaining its URL parameter name, retained source label and hash only as separate provenance, and omitted other source annotations from model input.' }, sourceFiles: { csv: { localPath: 'data/sources/spaphish-v5/Spaphish dataset - DiB.csv', sha256: sha256(sourceRaw) }, schema: { path: 'data/sources/spaphish-v5/dataset_schema.json', sha256: sha256(await readFile(resolve(sourceDir, 'dataset_schema.json'))) }, readme: { path: 'data/sources/spaphish-v5/README.txt', sha256: sha256(await readFile(resolve(sourceDir, 'README.txt'))) } }, sourceInventory: { rows: rows.length, sourceLabelCounts: sourceCounts, eligibleLabelCounts: Object.fromEntries(['0', '1'].map((label) => [label, rows.filter((row) => row.Label === label && isEligibleSourceRow(row)).length])), labelMapping: { '0': 'benign', '1': 'phishing' }, emptySubjects: rows.filter((row) => row.subject === '').length, emptyBodies: rows.filter((row) => row.body === '').length, malformedRows: rawRows.filter((cells) => cells.length !== headers.length).length, uniqueSourceHashes: new Set(rows.map((row) => row.hash)).size, duplicateSubjectBodyRows: rows.length - new Set(rows.map((row) => `${row.subject}\u0000${row.body}`)).size, lengthsUtf16: { subject: quantiles(lengths.map((length) => length.subject)), body: quantiles(lengths.map((length) => length.body)), overLimits: { subjectOver300: exclusions.filter((row) => row.reasons.includes('subject_exceeds_300_utf16')).length, bodyOver8000: exclusions.filter((row) => row.reasons.includes('body_exceeds_8000_utf16')).length } } }, selectionManifest: 'data/provenance/spaphish-v5-selection-manifest.json', selection: { algorithm: 'sha256_rank_v1', seed: selectionSeed, fixedBeforeInference: true, counts: { benign: selectedBenign.length, phishing: selectedPhishing.length, total: selected.length }, sourceSubsetDescription: '500-email balanced sample from SpaPhish v5.' }, preparation: { lineEndingNormalization: 'CRLF normalized to LF in corpus fields only', inputLimitsUtf16: { subject: 300, body: 8000, userContext: 2000 }, exclusionsLedger: 'data/provenance/spaphish-v5-selection-manifest.json', redactionsLedger: 'data/provenance/spaphish-v5-redactions.json' } }, examples: spaphishExamples };
  const publicSpaExamples = spaphishExamples.filter((example) => !postCaptureExclusion.excludedExampleIds.includes(example.id));
  const publicSpaEnvelope = { version: '1.0.0', metadata: { ...spaphishEnvelope.metadata, counts: { benign: 250, phishing: 249, total: 499 }, publicationProjection: { ...postCaptureExclusion, parentCorpusSha256: sha256(canonicalJson(spaphishEnvelope)), ledger: 'data/provenance/spaphish-v5-public-499-exclusion.json' }, selection: { ...spaphishEnvelope.metadata.selection, counts: { benign: 250, phishing: 249, total: 499 }, sourceSubsetDescription: '499-email public subset from the frozen SpaPhish v5 selection after one authorized post-capture evidence exclusion.' } }, examples: publicSpaExamples };
  function assertCorpus(envelope, expected) {
    const { examples } = envelope;
    const labels = Object.fromEntries(['benign', 'phishing'].map((label) => [label, examples.filter((example) => example.groundTruth.label === label).length]));
    const ids = new Set(examples.map((example) => example.id));
    const inputs = new Set(examples.map((example) => stableJson(example.input)));
    const invalid = examples.filter((example) => example.input.channel !== 'email' || example.input.body.length === 0 || (example.input.subject?.length ?? 0) > 300 || example.input.body.length > 8000 || example.input.userContext.length > 2000);
    if (examples.length !== expected.total || labels.benign !== expected.benign || labels.phishing !== expected.phishing || ids.size !== examples.length || inputs.size !== examples.length || invalid.length) throw new Error(`Corpus validation failed for ${envelope.metadata.datasetId}: ${JSON.stringify({ examples: examples.length, labels, ids: ids.size, inputs: inputs.size, invalid: invalid.length })}`);
  }
  assertCorpus(aiEnvelope, { total: 200, benign: 100, phishing: 100 });
  assertCorpus(spaphishEnvelope, { total: 500, benign: 250, phishing: 250 });
  assertCorpus(publicSpaEnvelope, { total: 499, benign: 250, phishing: 249 });
  await writeFile(resolve(corpusDir, 'ai-email-200-v1.json'), stableJson(aiEnvelope));
  await writeFile(resolve(corpusDir, 'spaphish-v5.json'), stableJson(publicSpaEnvelope));
  await writeFile(resolve(provenanceDir, 'spaphish-v5-selection-manifest.json'), stableJson(selectionManifest));
  await writeFile(resolve(provenanceDir, 'spaphish-v5-redactions.json'), stableJson({ version: '1.0.0', datasetId: 'spaphish-v5', purpose: 'public credential-like token redaction ledger', redactions }));
  await writeFile(resolve(provenanceDir, 'spaphish-v5-public-499-exclusion.json'), stableJson({ version: '1.0.0', datasetId: 'spaphish-v5', ...postCaptureExclusion, sourceCorpusSha256: sha256(canonicalJson(spaphishEnvelope)), publishedCorpusSha256: sha256(canonicalJson(publicSpaEnvelope)), excluded: [{ exampleId: 'SPAPHISH-088', label: 'phishing', sourceRecordId: publicSpaExamples.find((example) => example.id === 'SPAPHISH-088')?.provenance.sourceRecordId ?? spaphishExamples.find((example) => example.id === 'SPAPHISH-088')?.provenance.sourceRecordId, inputSha256: 'b8f6bf952cb3056c609ee65827bb42c4c9cf592c0febab8ca85cdec5e93afa7a', plannedPassBRequestSha256: '30f3a83c978468a92a79449b357cac5c9200999bbf5d2597e18f6b10dedf6d20', evidencePassStatus: 'failed', disposition: 'excluded_from_public_projection_after_capture' }] }));
  console.log(JSON.stringify({ ai: aiExamples.length, spaphish: publicSpaExamples.length, sourceEligible: selectionManifest.eligibleCounts, excluded: exclusions.length, postCaptureExcluded: postCaptureExclusion.excludedExampleIds }, null, 2));
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
