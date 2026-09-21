import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-417",
  "inputSha256": "b3659afcbb3e7665ce2322106db7d54ceda17506a40cb94d3acb748f7046cb34",
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
      "end": 57,
      "text": "Pablito - Tienes (1) paquete esperando ser entregado 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 57,
      "end": 106,
      "text": "Usa tu código para rastrearlo y recibirlo ___🚚. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 106,
      "end": 113,
      "text": "ID#4274"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 65,
      "text": "estafeta® Querido Julián Herrera Tienes (1) mensaje de nosotros. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 65,
      "end": 112,
      "text": "Por favor, haz clic en confirmar para abrirlo. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 112,
      "end": 259,
      "text": "Su código de seguimiento: 732518944 Continuar ➢ ¡Programe su entrega y suscríbase a nuestras notificaciones para evitar que esto vuelva a suceder! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 259,
      "end": 329,
      "text": "Programar entrega ahora Gracias por su pronta atención a este asunto. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 329,
      "end": 355,
      "text": "Esperamos su confirmación."
    }
  ],
  "passA": {
    "requestSha256": "cd4e0561da03f682651cb77b5a2373715ec0e13ac9f19fc811bf135fdb49c37e",
    "capturedAt": "2026-09-20T23:46:11.908Z",
    "elapsedMs": 152.41574999998556,
    "successfulAttemptElapsedMs": 149.9427920000162,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.19
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.66
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.35
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.75,
            "independently_established": 0,
            "no_sensitive_action": 0.23,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 3565,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "0ac7bc72e8c6429f561cedab9011094e5073a178ac7242604077eb9b27d5ae91",
    "capturedAt": "2026-09-20T23:46:12.134Z",
    "elapsedMs": 223.4454170000099,
    "successfulAttemptElapsedMs": 221.1797920000099,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.03,
            "body:3": 0.33,
            "body:0": 0,
            "subject:2": 0,
            "body:2": 0.62,
            "subject:1": 0,
            "subject:0": 0,
            "body:4": 0.01,
            "body:1": 0.01
          },
          "confidence": 0.58
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.03,
            "body:3": 0.01,
            "body:0": 0.93,
            "subject:2": 0,
            "body:2": 0.01,
            "body:4": 0,
            "subject:0": 0.01,
            "subject:1": 0,
            "body:1": 0.01
          },
          "confidence": 0.92
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.88,
            "body:3": 0.01,
            "body:0": 0,
            "subject:2": 0,
            "body:2": 0.03,
            "subject:1": 0.01,
            "subject:0": 0,
            "body:4": 0,
            "body:1": 0.07
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 1887,
        "output_tokens": 306
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 378.23829099998693,
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
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 2046,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-417",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:11.757Z",
    "offsetMs": 1.8237910000025295
  },
  {
    "seq": 2047,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-417",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:11.908Z",
    "offsetMs": 152.41520799999125,
    "elapsedMs": 149.9427920000162,
    "outcome": "success"
  },
  {
    "seq": 2048,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-417",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:11.912Z",
    "offsetMs": 156.14245799998753
  },
  {
    "seq": 2049,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-417",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:12.133Z",
    "offsetMs": 377.98520799999824,
    "elapsedMs": 221.1797920000099,
    "outcome": "success"
  },
  {
    "seq": 2050,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-417",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:12.134Z",
    "offsetMs": 378.29954099998577,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "30171fb36516c703b49d46532d99c1a9326416df1a293d2cc7af9fcc15c43d2d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2047},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2049},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2050}} as const;
export const projectionSha256 = "7df915dad94617948e3fe493f71bab637442911937960d01d55b82a2e09e90b9";
