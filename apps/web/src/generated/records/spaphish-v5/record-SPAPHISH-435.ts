import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-435",
  "inputSha256": "35110273f14fa3d649d4c25d1d3fa5afcf8c11f12af95cb24496b9fff031fcb0",
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
      "end": 31,
      "text": "No pudimos completar su entrega"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 91,
      "text": "Su paquete UP20100444152CH está detenido en la oficina de correos debido a cargos impagos. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 91,
      "end": 287,
      "text": "Si no se paga el envío en 48 horas, el paquete será devuelto confirmar ahora _________________ Sent to ricardo.lopez@dominioficticio.net Unsubscribe: http://securitydata.activehosted.com/proc.php?"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 287,
      "end": 401,
      "text": "nl=1&c=5&m=7&s=a6597d807aac9f58ed9cac408c0e47db&act=unsub compsoe, 10 avenida de la privacidad, 4232 zürich, Suiza"
    }
  ],
  "passA": {
    "requestSha256": "6b3c7bf1add138529964efd4696e91c57ff222830b8acf0e2b75884623cdb88a",
    "capturedAt": "2026-09-20T23:46:18.170Z",
    "elapsedMs": 204.59095800001523,
    "successfulAttemptElapsedMs": 203.05299999998533,
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
          "noul": 0.48
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.9
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.07
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.75
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.42
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.43
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.12
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.06,
            "sender_supplied": 0.91,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 3580,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "2b6dbbac6ba3e39e0aff17dcc06551145b0e7d452c3425624e0ed1a999942054",
    "capturedAt": "2026-09-20T23:46:18.315Z",
    "elapsedMs": 143.555583999987,
    "successfulAttemptElapsedMs": 141.87066700001014,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.61,
            "body:0": 0.01,
            "subject:0": 0,
            "NONE": 0.38,
            "body:2": 0
          },
          "confidence": 0.51
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.97,
            "body:0": 0.02,
            "NONE": 0.01,
            "subject:0": 0,
            "body:2": 0
          },
          "confidence": 0.96
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "body:0": 0,
            "NONE": 0,
            "subject:0": 0,
            "body:2": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.06,
            "body:0": 0.78,
            "subject:0": 0.03,
            "NONE": 0.13,
            "body:2": 0
          },
          "confidence": 0.73
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.33,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.67,
            "body:2": 0
          },
          "confidence": 0.58
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.59,
            "body:0": 0.16,
            "subject:0": 0,
            "NONE": 0.25,
            "body:2": 0
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 3125,
        "output_tokens": 394
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 349.71166699999594,
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
        "segmentId": "body:1"
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
        "status": "selected",
        "segmentId": "body:0"
      },
      "verification_bypass": {
        "status": "low_confidence",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "low_confidence",
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
    "seq": 2135,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-435",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:17.966Z",
    "offsetMs": 1.1714579999970738
  },
  {
    "seq": 2136,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-435",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:18.170Z",
    "offsetMs": 204.59249999999884,
    "elapsedMs": 203.05299999998533,
    "outcome": "success"
  },
  {
    "seq": 2137,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-435",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:18.172Z",
    "offsetMs": 206.9497080000001
  },
  {
    "seq": 2138,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-435",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:18.314Z",
    "offsetMs": 349.3303329999908,
    "elapsedMs": 141.87066700001014,
    "outcome": "success"
  },
  {
    "seq": 2139,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-435",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:18.315Z",
    "offsetMs": 349.7966669999878,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "907b5e90a169b8e91db5cd93af14a477a88bede04b151c8e7774af44518ca15a";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2136},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2138},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2139}} as const;
export const projectionSha256 = "fe275e8c76a9daff81f2a3c464ac766d5a6fe726dea0fddde45c9f8d61ac57b8";
