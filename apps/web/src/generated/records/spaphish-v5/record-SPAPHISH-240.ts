import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-240",
  "inputSha256": "55621b2f7b40c048e8cd16fc7640172509a9b826caf7faf5494824134208ab88",
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
      "end": 47,
      "text": "ÚLTIMA ALERTA: ¡TODAS TUS FOTOS SERÁN BORRADAS!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 314,
      "text": "de iCloud proporcionado por Apple, que permite a los usuarios almacenar sus datos, como fotos, vídeos, documentos y más, en los servidores de Apple y puede acceder a ellos desde cualquier dispositivo de usuario Actualizar mi pago El equipo de iCloud El Equipo iCloud iCloud es un servicio proporcionado por Apple. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 314,
      "end": 529,
      "text": "Darse de baja Derechos de autor 2025 El anunciante no gestiona su suscripción Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 123 Ficción St Ste 687#2043, Villa Protegida, CA, 90210"
    }
  ],
  "passA": {
    "requestSha256": "34490d7b610000ae8773dd0bb9ea4ff64f4d40a3a94c0ffd9a3b37cab3b0e273",
    "capturedAt": "2026-09-20T23:45:10.787Z",
    "elapsedMs": 157.24204199999804,
    "successfulAttemptElapsedMs": 155.58166699999128,
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
          "noul": 0.31
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.68
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.92
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.39
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.19
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.02,
            "mixed_or_unclear": 0.05,
            "active_request": 0.93,
            "educational_or_quoted": 0
          },
          "confidence": 0.9
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.12,
            "mixed_or_unknown": 0.04,
            "independently_established": 0,
            "sender_supplied": 0.84
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 3598,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "86f90ec5f9f2a7014282ba7354f617f2d8a6696010c9301fcb274b912f876dbe",
    "capturedAt": "2026-09-20T23:45:10.948Z",
    "elapsedMs": 158.73783299999195,
    "successfulAttemptElapsedMs": 152.25762499999837,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "body:0": 0.47,
            "subject:0": 0,
            "NONE": 0.52
          },
          "confidence": 0.36
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.01,
            "body:0": 0.88,
            "subject:0": 0,
            "NONE": 0.11
          },
          "confidence": 0.83
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:1": 0,
            "body:0": 0.01,
            "NONE": 0.01,
            "subject:0": 0.98
          },
          "confidence": 0.97
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.01,
            "body:0": 0.94,
            "subject:0": 0,
            "NONE": 0.05
          },
          "confidence": 0.91
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.07,
            "body:0": 0.03,
            "subject:0": 0.01,
            "NONE": 0.89
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 2716,
        "output_tokens": 278
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 317.9960839999985,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "subject:0"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 1173,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-240",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:10.631Z",
    "offsetMs": 1.1198749999894062
  },
  {
    "seq": 1174,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-240",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:10.787Z",
    "offsetMs": 157.24283399998967,
    "elapsedMs": 155.58166699999128,
    "outcome": "success"
  },
  {
    "seq": 1175,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-240",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:10.791Z",
    "offsetMs": 161.0431249999965
  },
  {
    "seq": 1176,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-240",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:10.947Z",
    "offsetMs": 317.8223749999888,
    "elapsedMs": 152.25762499999837,
    "outcome": "success"
  },
  {
    "seq": 1177,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-240",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:10.948Z",
    "offsetMs": 318.03574999999546,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6174bf9c4ad39fa5aa9cd80abf468bbe9e38b4bed5d5fb808f7531e65d409012";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1174},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1176},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1177}} as const;
export const projectionSha256 = "06b230166b44213ac3a0d344de4adbd81c7aeb8800d19c234d949829807b290f";
