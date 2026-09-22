import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-458",
  "inputSha256": "ac57bbfb1720987ac12b75f97a43130c1d2bf63beb30fbf75730db13d36c7adc",
  "questionBundleSha256": "9631a5b623f8c05b491dc5a5f67ab9b62e5b1898446a722339eaa0c16a40af8b",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "42e51b1f7b8706dae7188d0d3fa8c6ac83b855b21f393196bd63bc16d4b91d93",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "subject:0",
      "source": "subject",
      "start": 0,
      "end": 19,
      "text": "Alerta de seguridad"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 50,
      "text": "[image: Google] Nuevo inicio de sesión en Windows\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 50,
      "end": 51,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 51,
      "end": 170,
      "text": "rPerez@dominioficticio.net Hemos detectado un nuevo inicio de sesión en tu cuenta de Google en un dispositivo Windows. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 170,
      "end": 218,
      "text": "Si has sido tú, no es necesario que hagas nada. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 218,
      "end": 271,
      "text": "De lo contrario, te ayudaremos a proteger la cuenta. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 271,
      "end": 334,
      "text": "Comprobar actividad https://accounts.google.com/AccountChooser?"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 334,
      "end": 428,
      "text": "Email=rPerez@dominioficticio.net&continue=https://myaccount.google.com/alert/nt/1761529542133?"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 428,
      "end": 706,
      "text": "rfn%3D325%26rfnc%3D1%26eid%3D-3060872370786294977%26et%3D0 También puedes ver toda la actividad de seguridad en https://myaccount.google.com/notifications Te hemos enviado este correo electrónico para informarte de cambios importantes en tu cuenta y en los servicios de Google. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 706,
      "end": 780,
      "text": "© 2025Google LLC, 1600 Amphitheatre Parkway, Ciudad Central, CA 90210, USA"
    }
  ],
  "passA": {
    "requestSha256": "3434e9a477a87fa4779cfa78ac66aa91c085eb05b3754f838bdbf2cd098cd739",
    "capturedAt": "2026-09-22T03:57:18.803Z",
    "elapsedMs": 607.6450059999479,
    "successfulAttemptElapsedMs": 606.2246020000894,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.21
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.8
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.13
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0.34,
            "informational": 0.66
          },
          "confidence": 0.54
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.62,
            "sender_supplied": 0.37,
            "independently_established": 0,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 5128,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "8bb02ad3ddd09713f64ee3e8924ea69b9cb5ed03ae66bb6ad23588be6a5b1d87",
    "capturedAt": "2026-09-22T03:57:19.368Z",
    "elapsedMs": 564.1545540000079,
    "successfulAttemptElapsedMs": 562.074934000033,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0.11,
            "body:5": 0.12,
            "NONE": 0.75,
            "body:8": 0,
            "body:6": 0,
            "body:1": 0,
            "body:0": 0,
            "subject:0": 0.01,
            "body:2": 0,
            "body:3": 0.01,
            "body:7": 0
          },
          "confidence": 0.71
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:4": 0.33,
            "body:5": 0.01,
            "NONE": 0.22,
            "body:8": 0.1,
            "body:6": 0,
            "body:1": 0,
            "body:0": 0.09,
            "subject:0": 0.02,
            "body:2": 0.2,
            "body:3": 0,
            "body:7": 0.03
          },
          "confidence": 0.26
        }
      },
      "usage": {
        "input_tokens": 1989,
        "output_tokens": 239
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1173.5329759999877,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "payment_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "none_selected",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "not_requested",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "not_requested",
        "segmentId": null
      },
      "remote_access_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unrealistic_reward": {
        "status": "not_requested",
        "segmentId": null
      },
      "independent_verification_path": {
        "status": "not_requested",
        "segmentId": null
      },
      "analyzer_instruction": {
        "status": "not_requested",
        "segmentId": null
      }
    },
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2249,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-458",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:18.196Z",
    "offsetMs": 1.1781769999070093
  },
  {
    "seq": 2250,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-458",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:18.802Z",
    "offsetMs": 607.6455679999199,
    "elapsedMs": 606.2246020000894,
    "outcome": "success"
  },
  {
    "seq": 2251,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-458",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:18.806Z",
    "offsetMs": 610.8544209999964
  },
  {
    "seq": 2252,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-458",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:19.368Z",
    "offsetMs": 1173.2748450000072,
    "elapsedMs": 562.074934000033,
    "outcome": "success"
  },
  {
    "seq": 2253,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-458",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:19.368Z",
    "offsetMs": 1173.5879739999073,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b26d9744db7135d9a42388c557a5a36f0d7ba0c96d73884caf8bed14c8b1078c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2250},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2252},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2253}} as const;
export const projectionSha256 = "4c88410f2a69a5bcf13dd9adadaf600230c4139065fecf316705bcf50314d878";
