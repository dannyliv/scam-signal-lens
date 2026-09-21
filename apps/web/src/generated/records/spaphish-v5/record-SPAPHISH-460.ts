import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-460",
  "inputSha256": "62166231fe7f81f9f12fdcede1d422fe890fdfc9c22f44bd979ef0b7df1b2390",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
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
    "requestSha256": "1d559d6654539166d566e97a417d90c956ec1d78857062bfb02f9343358ae3ac",
    "capturedAt": "2026-09-20T23:46:26.306Z",
    "elapsedMs": 126.21737500000745,
    "successfulAttemptElapsedMs": 123.88441700002295,
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
          "noul": 0.04
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
          "noul": 0.22
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.24
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
            "informational": 0.62,
            "active_request": 0.37,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.49
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.41,
            "independently_established": 0.02,
            "no_sensitive_action": 0.56
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 3682,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "72a743142ae9f814c7187687525e292a0ee1dd8e1cb4b77026ca4c78bb0d5ff4",
    "capturedAt": "2026-09-20T23:46:26.477Z",
    "elapsedMs": 169.26520799999707,
    "successfulAttemptElapsedMs": 167.52391700001317,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:6": 0,
            "body:4": 0.17,
            "NONE": 0.68,
            "body:1": 0,
            "body:8": 0,
            "body:7": 0,
            "body:5": 0.12,
            "body:0": 0,
            "body:3": 0.01,
            "body:2": 0.01
          },
          "confidence": 0.65
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0.02,
            "body:6": 0,
            "body:7": 0.1,
            "NONE": 0.19,
            "body:4": 0.15,
            "body:8": 0.18,
            "body:1": 0,
            "body:5": 0.01,
            "body:0": 0.12,
            "body:3": 0,
            "body:2": 0.23
          },
          "confidence": 0.16
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:6": 0.02,
            "body:7": 0.15,
            "body:1": 0,
            "body:4": 0,
            "body:8": 0,
            "NONE": 0.42,
            "body:0": 0,
            "body:5": 0.39,
            "body:3": 0.01,
            "body:2": 0.01
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 2431,
        "output_tokens": 359
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 296.98487500002375,
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
        "status": "low_confidence",
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
        "status": "low_confidence",
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
    "seq": 2260,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-460",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:26.182Z",
    "offsetMs": 1.7467080000205897
  },
  {
    "seq": 2261,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-460",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:26.306Z",
    "offsetMs": 126.21704200000386,
    "elapsedMs": 123.88441700002295,
    "outcome": "success"
  },
  {
    "seq": 2262,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-460",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:26.309Z",
    "offsetMs": 128.7618749999965
  },
  {
    "seq": 2263,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-460",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:26.477Z",
    "offsetMs": 296.8679580000171,
    "elapsedMs": 167.52391700001317,
    "outcome": "success"
  },
  {
    "seq": 2264,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-460",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:26.477Z",
    "offsetMs": 297.01150000002235,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "793692fd95f37877448d448a9d1d051345cd085f0e7ad7f40ddbf332537af19f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2261},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2263},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2264}} as const;
export const projectionSha256 = "111e0f9230cd7b4219f62b11a9769aea72df1cf024142938603d9984dc07cff8";
