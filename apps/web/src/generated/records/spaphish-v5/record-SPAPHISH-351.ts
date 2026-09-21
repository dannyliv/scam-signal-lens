import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-351",
  "inputSha256": "18f5f14228ff14013326f46a31e67096208e4f17b7cb4a995fb1c6fcca142c68",
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
      "end": 79,
      "text": "Ezequiela Miguelina -Tu paquete de FedEx está esperando – Completa tu entrega ."
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 79,
      "end": 81,
      "text": "📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 52,
      "text": "Notificación de entrega ¡Su paquete está en camino! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 52,
      "end": 105,
      "text": "Se entregará (1) paquete a su dirección en Portugal. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 105,
      "end": 175,
      "text": "Use el código a continuación para rastrear su paquete en tiempo real. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 175,
      "end": 262,
      "text": "Planifique su entrega y manténgase informado con nuestras notificaciones instantáneas. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 262,
      "end": 316,
      "text": "Nos aseguramos de que su entrega sea rápida y segura. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 316,
      "end": 500,
      "text": "Rastree su envío Rastree su paquete de manera rápida y sencilla: Número de seguimiento: [998877665544] Si no desea recibir más correos de este tipo, haga clic aquí para darse de baja. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 500,
      "end": 547,
      "text": "Política de privacidad | Términos y condiciones"
    }
  ],
  "passA": {
    "requestSha256": "6a404957568ea353b7d96a775e51d91e51d044f0208202841519cb69b12e8923",
    "capturedAt": "2026-09-20T23:45:50.627Z",
    "elapsedMs": 130.17708400000993,
    "successfulAttemptElapsedMs": 128.7589169999992,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.19
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.74
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.11
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.81,
            "informational": 0.19,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.74
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0.19,
            "no_sensitive_action": 0.81,
            "independently_established": 0
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 3586,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "95015f879cb7423f2ef044bcdb06de962d903ba634f9e1b69e776107f468de53",
    "capturedAt": "2026-09-20T23:45:50.850Z",
    "elapsedMs": 221.14183299998695,
    "successfulAttemptElapsedMs": 219.74666599999182,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.46,
            "body:1": 0.01,
            "subject:1": 0,
            "body:6": 0,
            "body:0": 0.04,
            "subject:0": 0.28,
            "body:3": 0.01,
            "body:2": 0.02,
            "body:5": 0.01,
            "body:4": 0.17
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 974,
        "output_tokens": 111
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 352.94229199999245,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1719,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-351",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:50.498Z",
    "offsetMs": 0.943874999997206
  },
  {
    "seq": 1720,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-351",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:50.627Z",
    "offsetMs": 130.1782089999906,
    "elapsedMs": 128.7589169999992,
    "outcome": "success"
  },
  {
    "seq": 1721,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-351",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:50.629Z",
    "offsetMs": 132.50783400000364
  },
  {
    "seq": 1722,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-351",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:50.849Z",
    "offsetMs": 352.74083399999654,
    "elapsedMs": 219.74666599999182,
    "outcome": "success"
  },
  {
    "seq": 1723,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-351",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:50.850Z",
    "offsetMs": 353.00304199999664,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fc09959cd969a006a26c01fc0187a2c203eeebe15573ec1a29db225d03e8df8c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1720},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1722},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1723}} as const;
export const projectionSha256 = "66d4eaadf4624eebc4b4f3af41478c2d9a4ce3d2c57298fd99284cddbc75a31c";
