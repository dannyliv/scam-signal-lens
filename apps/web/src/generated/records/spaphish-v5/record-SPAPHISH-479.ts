import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-479",
  "inputSha256": "bed5837872b26134f56194a2381863a7ff557675c9354c32869251f85e0f6a92",
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
      "end": 64,
      "text": "Pablito! - Has ganado un televisor Samsung Qled TV 🎁____ID#1782"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 24,
      "text": "Walmart ✲ ¡Felicidades! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 24,
      "end": 113,
      "text": "Televisor Samsung Qled Este correo electrónico es nuestra carta oficial de confirmación. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 113,
      "end": 127,
      "text": "¡Felicidades! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 127,
      "end": 188,
      "text": "Has sido seleccionado para obtener una recompensa exclusiva. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 188,
      "end": 277,
      "text": "Tu nombre ha sido elegido para un Televisor Samsung Qled completamente nuevo de Walmart! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 277,
      "end": 465,
      "text": "CONTINUAR GRATIS» Si ya no deseas recibir estos correos electrónicos, puedes cancelar tu suscripción haciendo clic aquí o escribiendo a 780 Industrial Dr Ste.1-5055 Pleasant Hill, CA 94523"
    }
  ],
  "passA": {
    "requestSha256": "fff1a23b5434dc039a93fe8246d11dc2da28dab8dc4d5ade3363c72defcba7fd",
    "capturedAt": "2026-09-20T23:46:32.712Z",
    "elapsedMs": 156.86249999998836,
    "successfulAttemptElapsedMs": 155.34795900000609,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.23
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.13
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.13
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.26
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.24
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.1
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.55,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.44
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 3564,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "682b9d1a59a5a28b909121217d78e17032e146ea7f55431a08c7ee4b6a8b7c0a",
    "capturedAt": "2026-09-20T23:46:32.888Z",
    "elapsedMs": 172.63587500000722,
    "successfulAttemptElapsedMs": 169.10879200001364,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:4": 0,
            "body:2": 0,
            "NONE": 0.95,
            "body:5": 0.05,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0
          },
          "confidence": 0.94
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.75,
            "body:4": 0.03,
            "body:2": 0,
            "NONE": 0.03,
            "body:5": 0.01,
            "body:0": 0.18000000000000002,
            "subject:0": 0,
            "body:3": 0
          },
          "confidence": 0.7
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.02,
            "body:4": 0,
            "NONE": 0.96,
            "body:2": 0,
            "body:5": 0.02,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0
          },
          "confidence": 0.96
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:2": 0,
            "NONE": 0.78,
            "body:4": 0.01,
            "body:5": 0.21000000000000002,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 2335,
        "output_tokens": 370
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 333.3647500000079,
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
        "status": "none_selected",
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
        "status": "selected",
        "segmentId": "body:1"
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "none_selected",
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
    "seq": 2353,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-479",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:32.556Z",
    "offsetMs": 1.1226250000181608
  },
  {
    "seq": 2354,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-479",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:32.712Z",
    "offsetMs": 156.86062500000116,
    "elapsedMs": 155.34795900000609,
    "outcome": "success"
  },
  {
    "seq": 2355,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-479",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:32.718Z",
    "offsetMs": 162.9812090000196
  },
  {
    "seq": 2356,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-479",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:32.888Z",
    "offsetMs": 332.99520900001517,
    "elapsedMs": 169.10879200001364,
    "outcome": "success"
  },
  {
    "seq": 2357,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-479",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:32.888Z",
    "offsetMs": 333.4327920000069,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "324dbf480e7d1ef036958449ee1e1b743c6d81560d132470418132ddc9e1412e";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2354},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2356},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2357}} as const;
export const projectionSha256 = "a299dc790891f50cbd08710fba1182a71207f8d7e50dc1ea55e8c3c8e5aee34d";
