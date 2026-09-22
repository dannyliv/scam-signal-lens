import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-460",
  "inputSha256": "62166231fe7f81f9f12fdcede1d422fe890fdfc9c22f44bd979ef0b7df1b2390",
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
      "end": 179,
      "text": "ricardo.sanchez@dominioficticio.com Hemos detectado un nuevo inicio de sesión en tu cuenta de Google en un dispositivo Windows. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 179,
      "end": 227,
      "text": "Si has sido tú, no es necesario que hagas nada. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 227,
      "end": 280,
      "text": "De lo contrario, te ayudaremos a proteger la cuenta. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 280,
      "end": 343,
      "text": "Comprobar actividad https://accounts.google.com/AccountChooser?"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 343,
      "end": 446,
      "text": "Email=ricardo.sanchez@dominioficticio.com&continue=https://myaccount.google.com/alert/nt/1705179182000?"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 446,
      "end": 723,
      "text": "rfn%3D325%26rfnc%3D1%26eid%3D7511754660732115439%26et%3D0 También puedes ver toda la actividad de seguridad en https://myaccount.google.com/notifications Te hemos enviado este correo electrónico para informarte de cambios importantes en tu cuenta y en los servicios de Google. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 723,
      "end": 798,
      "text": "© 2024 Google LLC, 1600 Amphitheatre Parkway, Ciudad Central, CA 90210, USA"
    }
  ],
  "passA": {
    "requestSha256": "4bb559bb961d64979ca1a90d721454706aafe10fc01722b9ff0ebcc444146ac2",
    "capturedAt": "2026-09-22T03:57:21.182Z",
    "elapsedMs": 660.3041220000014,
    "successfulAttemptElapsedMs": 658.7283090000274,
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
          "noul": 0.23
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.1
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.63,
            "active_request": 0.37,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.51
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.6,
            "sender_supplied": 0.39,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 5132,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "70217f02164568733aefd3938d410d31ee15c614dc9b115f49f00e478104130a",
    "capturedAt": "2026-09-22T03:57:21.695Z",
    "elapsedMs": 511.3002429999178,
    "successfulAttemptElapsedMs": 509.93168599996716,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0.15,
            "body:6": 0,
            "body:8": 0,
            "body:5": 0.12,
            "NONE": 0.72,
            "body:7": 0,
            "body:2": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0.01,
            "body:1": 0
          },
          "confidence": 0.68
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:4": 0.33,
            "body:6": 0,
            "body:5": 0.02,
            "body:8": 0.11,
            "body:7": 0.05,
            "NONE": 0.21,
            "body:2": 0.2,
            "body:0": 0.05,
            "subject:0": 0.02,
            "body:3": 0.01,
            "body:1": 0
          },
          "confidence": 0.26
        }
      },
      "usage": {
        "input_tokens": 2001,
        "output_tokens": 239
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1174.4831499999855,
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
    "seq": 2259,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-460",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:20.522Z",
    "offsetMs": 1.229793000034988
  },
  {
    "seq": 2260,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-460",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:21.181Z",
    "offsetMs": 660.3056820000056,
    "elapsedMs": 658.7283090000274,
    "outcome": "success"
  },
  {
    "seq": 2261,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-460",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:21.185Z",
    "offsetMs": 664.0188880000496
  },
  {
    "seq": 2262,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-460",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:21.695Z",
    "offsetMs": 1174.2065939999884,
    "elapsedMs": 509.93168599996716,
    "outcome": "success"
  },
  {
    "seq": 2263,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-460",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:21.696Z",
    "offsetMs": 1174.5488220000407,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e2a7ad178dccc7e606b6fc528ea275a4d82e6becf82e44ae57ca52df327e624a";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2260},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2262},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2263}} as const;
export const projectionSha256 = "2754bcdcfabd54af1a05f6d5c63244e5cf3e2d4096e036e7f7435c95b43f9630";
