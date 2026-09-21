import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-372",
  "inputSha256": "4c0a5e88d45ec9bd77d7581f991f0422d8b7e9e3e579a26b8c1b28dead8bdfbf",
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
      "end": 41,
      "text": "VIOLACIÓN DE DERECHOS DE AUTOR - 55955659"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 138,
      "text": "Señores Instituto Aurora Central Campus Villa Aurora: Recientemente recibimos una queja concerniente a una de sus publicaciones/campañas. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 138,
      "end": 263,
      "text": "Otro usuario ha hecho una reclamación de derechos de autor sobre una de las imágenes utilizadas en su muro de publicaciones. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 263,
      "end": 379,
      "text": "Con el fin de evitar el retiro de su contenido, asegúrese de eliminar dicha imagen dentro de los siguientes 2 días. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 379,
      "end": 434,
      "text": "Ver imagen Gracias, Equipo Legal y de Derechos de Autor"
    }
  ],
  "passA": {
    "requestSha256": "bae8e082680ddf7abc2c021a0c5bffc7e0da82826295048731681dcb0f260744",
    "capturedAt": "2026-09-20T23:45:57.370Z",
    "elapsedMs": 167.04041699999652,
    "successfulAttemptElapsedMs": 164.8804999999993,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.26
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.01,
            "no_sensitive_action": 0.99,
            "mixed_or_unknown": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3540,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "cf332a84f448234e7b3495a44b78fc12ff85efa69e70e567be8ae0fc438cf86f",
    "capturedAt": "2026-09-20T23:45:57.496Z",
    "elapsedMs": 124.53495799998927,
    "successfulAttemptElapsedMs": 122.73870800000441,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:3": 0,
            "NONE": 0,
            "body:2": 1,
            "body:1": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.04,
            "body:3": 0.95,
            "NONE": 0,
            "body:2": 0.01,
            "body:1": 0
          },
          "confidence": 0.93
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:3": 0,
            "NONE": 0.91,
            "body:2": 0.09,
            "body:1": 0
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 1661,
        "output_tokens": 225
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 293.74279200000456,
  "derived": {
    "concern": "verify_first",
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
        "status": "selected",
        "segmentId": "body:2"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:3"
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 1823,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-372",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:57.204Z",
    "offsetMs": 1.5958340000070166
  },
  {
    "seq": 1824,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-372",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:57.370Z",
    "offsetMs": 167.038584000009,
    "elapsedMs": 164.8804999999993,
    "outcome": "success"
  },
  {
    "seq": 1825,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-372",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:57.373Z",
    "offsetMs": 170.10400000000664
  },
  {
    "seq": 1826,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-372",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:57.496Z",
    "offsetMs": 293.3835420000105,
    "elapsedMs": 122.73870800000441,
    "outcome": "success"
  },
  {
    "seq": 1827,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-372",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:57.497Z",
    "offsetMs": 293.8311250000115,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e2634d59bb5323426a5b66225cbf36304ad22737406cffa06862538cb9322728";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1824},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1826},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1827}} as const;
export const projectionSha256 = "2e2d34999e5a92c8446cb57b0a1458852a367f021299ac86eedc007cb8f37b75";
