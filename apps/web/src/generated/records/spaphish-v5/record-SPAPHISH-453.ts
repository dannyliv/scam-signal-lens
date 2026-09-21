import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-453",
  "inputSha256": "6e964e2adff432a16fb17e003461f63c07edf8c727d14da9232cc303d252df8c",
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
      "end": 46,
      "text": "Solicitud de trámite número PO01GMANRX223100L7"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 132,
      "text": "Estimado Cliente Agradecemos tu preferencia y en atención a la solicitud ingresada de Reembolso, anexamos al presente su respuesta. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 132,
      "end": 270,
      "text": "Si el tipo de pago de tu tramite es cheque favor de pasar a recoger el cheque después de 2 o 3 días de recibida la presente notificación. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 270,
      "end": 360,
      "text": "No es necesario responder este correo, ya que ha sido generado por un sistema automático. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 360,
      "end": 785,
      "text": "Reembolsos Salud y Bienestar Protección Capital América www.pca-seguros.com Únete a Proyecto Verde No imprimas este mensaje a menos que sea indispensable Aviso de confidencialidad: La información contenida en este mensaje es confidencial, restringida y está destinada únicamente para el uso de la persona a quien se le  dirige, se notifica que se encuentra prohibida cualquier difusión, distribución o copia de este mensaje. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 785,
      "end": 878,
      "text": "Si ha recibido esta comunicación o copia por error,  bórrelo y comuníquese con el remitente. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 878,
      "end": 984,
      "text": "Este correo tiene fines meramente informativos, por lo que no es fuente de obligaciones para el remitente."
    }
  ],
  "passA": {
    "requestSha256": "7d7f0bcab4d523e4eb8c30694c89883d5bcc0626681767eccbdb2c945fbf723c",
    "capturedAt": "2026-09-20T23:46:24.065Z",
    "elapsedMs": 123.88270799999009,
    "successfulAttemptElapsedMs": 121.39108299999498,
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
          "noul": 0.06
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
          "noul": 0.85
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.52
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
            "informational": 0.35,
            "mixed_or_unclear": 0.01,
            "active_request": 0.64
          },
          "confidence": 0.52
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0.08,
            "no_sensitive_action": 0.87,
            "sender_supplied": 0.04
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 3682,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "2ca88d366cb9a9c7dba777047cedb346988014cd0061489db22ee5e208778524",
    "capturedAt": "2026-09-20T23:46:24.170Z",
    "elapsedMs": 103.2197500000184,
    "successfulAttemptElapsedMs": 100.87116700000479,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0.2,
            "body:5": 0,
            "body:1": 0.78,
            "body:4": 0.01,
            "body:3": 0.01,
            "body:0": 0
          },
          "confidence": 0.74
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.02,
            "body:2": 0.02,
            "NONE": 0.14,
            "body:5": 0,
            "body:1": 0.08,
            "body:4": 0.01,
            "body:3": 0.36,
            "body:0": 0.37
          },
          "confidence": 0.28
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0.18,
            "body:5": 0,
            "body:1": 0.79,
            "body:4": 0.02,
            "body:3": 0.01,
            "body:0": 0
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 2314,
        "output_tokens": 282
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 229.5654579999973,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 2225,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-453",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:23.943Z",
    "offsetMs": 1.9162910000013653
  },
  {
    "seq": 2226,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-453",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:24.065Z",
    "offsetMs": 123.88570800001617,
    "elapsedMs": 121.39108299999498,
    "outcome": "success"
  },
  {
    "seq": 2227,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-453",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:24.069Z",
    "offsetMs": 127.80858300000546
  },
  {
    "seq": 2228,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-453",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:24.170Z",
    "offsetMs": 229.30862500000512,
    "elapsedMs": 100.87116700000479,
    "outcome": "success"
  },
  {
    "seq": 2229,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-453",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:24.171Z",
    "offsetMs": 229.62866600000416,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a1d358a7bb8ac46b3ca890adca6f1b404324bce2cb5f86510cd00519b477c007";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2226},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2228},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2229}} as const;
export const projectionSha256 = "9a2f61e50901417faa203735aa06722583ff71c967698bad321a51d516a03125";
