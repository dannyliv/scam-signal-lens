SPAPHISH DATASET – DATA DICTIONARY AND TECHNICAL SPECIFICATIONS
===============================================================

1. DATASET OVERVIEW
===================
SpaPhish is a curated corpus of 1,395 Spanish-language emails designed for phishing detection and
social-engineering analysis. The dataset integrates raw message content with technical metadata
and psychological annotations grounded in Ana Ferreira’s persuasion principles.

2. TECHNICAL SPECIFICATIONS
===========================
- Total Records: 1,395
- Total Columns: 47
- Class Distribution (Label):
    - 0 (Legitimate): 664 records
    - 1 (Phishing): 731 records
- Temporal Coverage: 2014-06-07 to 2025-10-27

3. DATA DICTIONARY
==================

IDENTIFICATION AND CONTENT
- hash: Unique alphanumeric identifier for each email record.
- subject: Raw subject line of the email.
- body: Full email message content in plain text.
- date: Message reception date stored as a string. A large subset of records contains parseable
        dates that can be normalized for temporal analysis.

TECHNICAL AND STRUCTURAL METADATA
- url_count: Total number of hyperlinks extracted from the message body (range: 0–117).
- urls: List of URLs found within the email content.
- attachments_count: Total number of files attached to the email (range: 0–29).
- attachments_types: List of file extensions for all attachments.
- attachments_total_size: Combined size of all attachments in bytes.
- attachments_sizes: Individual file sizes for each attachment.
- hops_count: Number of network relay hops extracted from email headers (range: 0–19).
- Label: Binary class indicator where 1 denotes phishing and 0 denotes legitimate communication.

ANA FERREIRA PRINCIPLES OF PERSUASION (PSYCHOLOGICAL LAYER)
Each persuasion dimension is annotated independently by three human annotators (A, B, and C)
using binary values (0 or 1), together with a consolidated consensus column.

- authority / _A, _B, _C:
  Indicates impersonation of authority figures, institutions, or trusted brands.
- social_proof / _A, _B, _C:
  Indicates references to peer behavior or collective participation to induce compliance.
- liking_similarity_deception / _A, _B, _C:
  Indicates the use of affinity, personalization, or similarity-based deception.
- commitment_integrity_reciprocation / _A, _B, _C:
  Indicates appeals to prior commitments or reciprocity obligations.
- distraction / _A, _B, _C:
  Indicates emotional or cognitive triggers (e.g., urgency, fear, rewards) intended to bypass
  critical evaluation.

QUALITATIVE RATIONALE
- justif_*: Free-text justification fields in which annotators document the reasoning and evidence
            supporting each psychological annotation. This layer is designed to support
            interpretability and Explainable AI (XAI) research.

4. USAGE AND REPRODUCTION
=========================
The dataset is distributed as a UTF-8 encoded, semicolon-separated CSV file. Consolidated persuasion labels are recommended for benchmarking, while per-annotator columns enable inter-annotator agreement analysis and methodological studies on annotation variability.