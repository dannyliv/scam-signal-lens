import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-324",
  "inputSha256": "ac305d20d3c8059dff0db5992ed5ee63326475a805037928c8cab051fa76ec34",
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
      "end": 106,
      "text": "𝐇𝐞𝐦𝐨𝐬 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐝𝐨 𝐩𝐨𝐧𝐞𝐫𝐧𝐨𝐬 𝐞𝐧 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐨 𝐜𝐨𝐧 𝐮𝐬𝐭𝐞𝐝, ¡𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐚!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 50,
      "text": "SERVICIO ENTREGA ¡ENTREGA DEL PAQUETE SUSPENDIDO! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 50,
      "end": 280,
      "text": "Estado: Detenido en el centro de distribución (cargo aduanero pendiente) Se puede aplicar una tarifa de envío Su código de seguimiento: 77665544332 Programe La Entrega Ahora darse de baja El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 280,
      "end": 413,
      "text": "Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 1234 Calle Comercial, Ste 500 #600, Dallas TX 75201"
    }
  ],
  "passA": {
    "requestSha256": "d5a148673fa7f13da8131ee1bb2598fddbc3d8613da6d143afa21be122aae03d",
    "capturedAt": "2026-09-20T23:45:40.899Z",
    "elapsedMs": 163.45870899999863,
    "successfulAttemptElapsedMs": 161.27412500001083,
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
          "noul": 0.13
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.69
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.84
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.64
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.38
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.46
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.01,
            "informational": 0,
            "active_request": 0.99,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.2,
            "sender_supplied": 0.77,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 3660,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "3177afac42fcc355e1dff8a951a4cf3cd9ffad07f8e952ea7b0584a95bcd9a8d",
    "capturedAt": "2026-09-20T23:45:41.128Z",
    "elapsedMs": 226.89591700000165,
    "successfulAttemptElapsedMs": 224.62149999999383,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.14,
            "body:1": 0.86,
            "body:2": 0
          },
          "confidence": 0.82
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.05,
            "body:0": 0.09,
            "NONE": 0.01,
            "body:1": 0.85,
            "body:2": 0
          },
          "confidence": 0.81
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.03,
            "body:0": 0.38,
            "NONE": 0.41,
            "body:1": 0.17,
            "body:2": 0.01
          },
          "confidence": 0.26
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.02,
            "body:0": 0,
            "NONE": 0.92,
            "body:1": 0.04,
            "body:2": 0.02
          },
          "confidence": 0.91
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.21,
            "body:1": 0.79,
            "body:2": 0
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 3153,
        "output_tokens": 328
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 393.7920840000006,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 1584,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-324",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:40.736Z",
    "offsetMs": 1.5654999999969732
  },
  {
    "seq": 1585,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-324",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:40.898Z",
    "offsetMs": 163.46062499999243,
    "elapsedMs": 161.27412500001083,
    "outcome": "success"
  },
  {
    "seq": 1586,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-324",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:40.903Z",
    "offsetMs": 168.1402090000047
  },
  {
    "seq": 1587,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-324",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:41.128Z",
    "offsetMs": 393.4426669999957,
    "elapsedMs": 224.62149999999383,
    "outcome": "success"
  },
  {
    "seq": 1588,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-324",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:41.128Z",
    "offsetMs": 393.8590839999961,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5c5149dc9a56689c5f789f8b230959ee058b167aa0feb129216491fc106498cd";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1585},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1587},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1588}} as const;
export const projectionSha256 = "6f9836d4ec8a990b4aa93f81037a28210d5136e1007eaa8463637ff24c38a18e";
