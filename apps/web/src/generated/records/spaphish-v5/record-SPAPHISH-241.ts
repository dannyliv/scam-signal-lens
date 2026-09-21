import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-241",
  "inputSha256": "7b06dbb9be47123e7204c7156254a2d8d7b0c763ec96df290f04281ae9e024f7",
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
      "end": 30,
      "text": "Error en la reunión programada"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 33,
      "text": "Hola, carlos.mendez@corpmail.com\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 33,
      "end": 80,
      "text": ": Hemos encontrado un problema con su reunión. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 80,
      "end": 210,
      "text": "Revise sus configuraciones a continuación: Revisar la configuración Revise su configuración para ingresar o rechazar una reunión. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 210,
      "end": 254,
      "text": "Gracias por elegir Zoom. - El equipo de Zoom"
    }
  ],
  "passA": {
    "requestSha256": "17e2805c3e4cd29f6cf9b1d1670c7bf4cd4f04b53d01004e50914db4b7169164",
    "capturedAt": "2026-09-20T23:45:11.130Z",
    "elapsedMs": 180.36650000000373,
    "successfulAttemptElapsedMs": 179.36149999999907,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.15
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.17
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0.97,
            "educational_or_quoted": 0,
            "informational": 0.03
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.04,
            "no_sensitive_action": 0.87,
            "sender_supplied": 0.08,
            "independently_established": 0.01
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 3490,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "7f404d6001fac4b51c86a3b16ecad4d2c37aa287abbaafeaf9a144507a2a8c3e",
    "capturedAt": "2026-09-20T23:45:11.274Z",
    "elapsedMs": 142.7041659999959,
    "successfulAttemptElapsedMs": 140.89245800000208,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:3": 0.9,
            "subject:0": 0,
            "NONE": 0.02,
            "body:1": 0.07,
            "body:2": 0.01,
            "body:0": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 725,
        "output_tokens": 77
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 325.53300000001036,
  "derived": {
    "concern": "few_warning_signs",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
        "status": "selected",
        "segmentId": "body:3"
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1178,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-241",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:10.949Z",
    "offsetMs": 0.6659160000126576
  },
  {
    "seq": 1179,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-241",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:11.129Z",
    "offsetMs": 180.36679100000765,
    "elapsedMs": 179.36149999999907,
    "outcome": "success"
  },
  {
    "seq": 1180,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-241",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:11.133Z",
    "offsetMs": 183.87604100001045
  },
  {
    "seq": 1181,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-241",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:11.274Z",
    "offsetMs": 325.40641600001254,
    "elapsedMs": 140.89245800000208,
    "outcome": "success"
  },
  {
    "seq": 1182,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-241",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:11.274Z",
    "offsetMs": 325.570166000005,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0ef3e5c672feec6d9eaeafe78864af1f3f1b3804db04c96b764aceb33e627766";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1179},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1181},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1182}} as const;
export const projectionSha256 = "59e827eca8c903637b1cce3215c65b16f4ac6d104f36091ed904b3b79c1fb115";
