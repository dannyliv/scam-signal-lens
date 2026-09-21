import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-458",
  "inputSha256": "ac57bbfb1720987ac12b75f97a43130c1d2bf63beb30fbf75730db13d36c7adc",
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
    "requestSha256": "7a969072a21b0da7f9fa3ac8f4dce61edd369946ca0acfbb9da9bb99c8e8e10e",
    "capturedAt": "2026-09-20T23:46:25.508Z",
    "elapsedMs": 148.81191700001364,
    "successfulAttemptElapsedMs": 147.48137499997392,
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
          "noul": 0.24
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.78
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
          "noul": 0.25
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
            "mixed_or_unclear": 0.01,
            "active_request": 0.36,
            "informational": 0.63
          },
          "confidence": 0.51
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.54,
            "independently_established": 0.01,
            "sender_supplied": 0.44,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 3678,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "955fa16ae36e6a1395e6f1e29e1ef0d00a24b288dd84177d4d4071a6149027f6",
    "capturedAt": "2026-09-20T23:46:25.683Z",
    "elapsedMs": 172.1816659999895,
    "successfulAttemptElapsedMs": 169.38045799999963,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0,
            "body:2": 0,
            "subject:0": 0.01,
            "body:3": 0.01,
            "body:1": 0,
            "body:6": 0,
            "body:0": 0,
            "body:7": 0,
            "NONE": 0.74,
            "body:4": 0.14,
            "body:5": 0.1
          },
          "confidence": 0.7
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:8": 0.15,
            "body:2": 0.29,
            "subject:0": 0.02,
            "body:3": 0,
            "body:1": 0,
            "body:6": 0,
            "body:0": 0.11,
            "body:7": 0.1,
            "NONE": 0.19,
            "body:4": 0.13,
            "body:5": 0.01
          },
          "confidence": 0.23
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0,
            "body:2": 0.01,
            "subject:0": 0,
            "body:3": 0.01,
            "body:1": 0,
            "body:6": 0.03,
            "body:0": 0,
            "body:7": 0.16,
            "NONE": 0.4,
            "body:4": 0,
            "body:5": 0.39
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 2415,
        "output_tokens": 359
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 324.12049999999,
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
    "seq": 2250,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-458",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:25.360Z",
    "offsetMs": 0.9286670000001322
  },
  {
    "seq": 2251,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-458",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:25.507Z",
    "offsetMs": 148.80958400000236,
    "elapsedMs": 147.48137499997392,
    "outcome": "success"
  },
  {
    "seq": 2252,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-458",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:25.512Z",
    "offsetMs": 153.8279169999878
  },
  {
    "seq": 2253,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-458",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:25.682Z",
    "offsetMs": 323.75954199998523,
    "elapsedMs": 169.38045799999963,
    "outcome": "success"
  },
  {
    "seq": 2254,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-458",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:25.683Z",
    "offsetMs": 324.2045419999922,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f959a8fd7df8bde976017c6cc313a5cfe8ed2cd958bdea27040055c8640ec28d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2251},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2253},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2254}} as const;
export const projectionSha256 = "1a2a5398ebfd770628ea5fb43e3a459cd1795c5c5eb4370d92793f1cf9e3b5ce";
