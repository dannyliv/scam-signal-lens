import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-425",
  "inputSha256": "5908b69e0dd7b08d49115c7a41dc0f57ceecddc81a153f26ac3ecc919bfc3769",
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
      "end": 44,
      "text": "Instrucciones para restablecer su contraseña"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 16,
      "text": "POSGRADOS CITEC\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 16,
      "end": 74,
      "text": "Centro de Formación e Innovación en Tecnologías Digitales\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 74,
      "end": 75,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 75,
      "end": 99,
      "text": "Reestablecer contraseña\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 99,
      "end": 100,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 100,
      "end": 128,
      "text": "Hola Marcos Ortega Salinas.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 128,
      "end": 129,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 129,
      "end": 209,
      "text": "Se ha solicitado cambiar su contraseña; puede hacerlo usando el botón de abajo.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 209,
      "end": 276,
      "text": "Si usted no solicitó este cambio, simplemente ignore este mensaje. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 276,
      "end": 355,
      "text": "Su contraseña no se modificará a menos que presione el botón y cree una nueva.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 355,
      "end": 356,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 356,
      "end": 375,
      "text": "Cambiar contraseña\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 375,
      "end": 376,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 376,
      "end": 386,
      "text": "Contacto:\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 386,
      "end": 390,
      "text": "Av. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 390,
      "end": 411,
      "text": "Monte Real 214, Col. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 411,
      "end": 422,
      "text": "Los Cedros\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 422,
      "end": 448,
      "text": "Tlalpan, Ciudad de México\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 448,
      "end": 463,
      "text": "(55) 4872 3600\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 463,
      "end": 488,
      "text": "posgrados@citecdigital.mx"
    }
  ],
  "passA": {
    "requestSha256": "7d9fed99c073e830ad0596d84b437ad939630f6a75aaa59376b3d4b04d38b41b",
    "capturedAt": "2026-09-22T03:56:39.400Z",
    "elapsedMs": 667.0328779999982,
    "successfulAttemptElapsedMs": 665.4955349999946,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.1
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
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.09
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.16
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.01,
            "active_request": 0.99,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "independently_established": 0.01,
            "sender_supplied": 0.65,
            "no_sensitive_action": 0.32
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 5022,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "96c9fbf64b87c4db4b6550944a9ad6c8f43326fb2931b35596b410cd3ea3273e",
    "capturedAt": "2026-09-22T03:56:39.910Z",
    "elapsedMs": 507.2094550000038,
    "successfulAttemptElapsedMs": 505.5215789999929,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "body:6": 0,
            "body:9": 0,
            "body:19": 0.01,
            "body:12": 0,
            "subject:0": 0,
            "body:7": 0.14,
            "body:8": 0,
            "body:15": 0,
            "body:3": 0.02,
            "body:16": 0,
            "body:0": 0.48,
            "NONE": 0.05,
            "body:10": 0,
            "body:18": 0,
            "body:11": 0.01,
            "body:5": 0,
            "body:14": 0,
            "body:17": 0,
            "body:4": 0,
            "body:1": 0.29000000000000004,
            "body:13": 0
          },
          "confidence": 0.44
        }
      },
      "usage": {
        "input_tokens": 1210,
        "output_tokens": 231
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1177.6768240000238,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
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
        "status": "not_requested",
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
    "seq": 2084,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-425",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:38.734Z",
    "offsetMs": 1.2974839999806136
  },
  {
    "seq": 2085,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-425",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:39.400Z",
    "offsetMs": 667.0328159999917,
    "elapsedMs": 665.4955349999946,
    "outcome": "success"
  },
  {
    "seq": 2086,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-425",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:39.404Z",
    "offsetMs": 671.4620529999956
  },
  {
    "seq": 2087,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-425",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:39.910Z",
    "offsetMs": 1177.3573210000177,
    "elapsedMs": 505.5215789999929,
    "outcome": "success"
  },
  {
    "seq": 2088,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-425",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:39.910Z",
    "offsetMs": 1177.744255000027,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "64a5d9a7cf9ce2fa3bad63cad4e6cabd1f7559a4ed31cc8da4934b7dfa12ffd4";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2085},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2087},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2088}} as const;
export const projectionSha256 = "ef0752e9226b78fa4aeb032b4b3dc6872af75cb8c08a66c46f9afc57ab0c3e66";
