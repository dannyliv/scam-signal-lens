import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-490",
  "inputSha256": "61e2a607d51b3c55bf0267745a70ad2bad260a7560916a3ba2553413bef7f4ad",
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
      "text": "ID#5377"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 55,
      "text": "estafeta® Querido Luis Tienes (1) mensaje de nosotros. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 55,
      "end": 102,
      "text": "Por favor, haz clic en confirmar para abrirlo. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 102,
      "end": 249,
      "text": "Su código de seguimiento: 998877665 Continuar ➢ ¡Programe su entrega y suscríbase a nuestras notificaciones para evitar que esto vuelva a suceder! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 249,
      "end": 319,
      "text": "Programar entrega ahora Gracias por su pronta atención a este asunto. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 319,
      "end": 345,
      "text": "Esperamos su confirmación."
    }
  ],
  "passA": {
    "requestSha256": "dd124400646b6c152a99e9e9e13f1eb1ef7a7646d21b2c5bfcda6564c088d203",
    "capturedAt": "2026-09-20T23:46:36.196Z",
    "elapsedMs": 171.13504199997988,
    "successfulAttemptElapsedMs": 170.4132919999829,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.2
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
          "noul": 0.64
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.37
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.23,
            "sender_supplied": 0.75,
            "independently_established": 0
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 3563,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "28547026c44a08bb7347af8e4c58a6851c6b9647fdc228ebd445f2340000244d",
    "capturedAt": "2026-09-20T23:46:36.357Z",
    "elapsedMs": 159.23375000001397,
    "successfulAttemptElapsedMs": 157.6237919999985,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.01,
            "subject:2": 0,
            "subject:1": 0,
            "NONE": 0.04,
            "subject:0": 0.01,
            "body:2": 0.51,
            "body:3": 0.42,
            "body:4": 0.01
          },
          "confidence": 0.45
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.93,
            "subject:2": 0,
            "body:1": 0.01,
            "subject:1": 0,
            "subject:0": 0.01,
            "NONE": 0.03,
            "body:2": 0.01,
            "body:3": 0.01,
            "body:4": 0
          },
          "confidence": 0.92
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "subject:2": 0,
            "body:1": 0.06999999999999999,
            "subject:1": 0,
            "subject:0": 0,
            "NONE": 0.9,
            "body:2": 0.02,
            "body:3": 0.01,
            "body:4": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 1879,
        "output_tokens": 306
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 331.89420899999095,
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
    "seq": 2407,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-490",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:36.025Z",
    "offsetMs": 0.512416999990819
  },
  {
    "seq": 2408,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-490",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:36.196Z",
    "offsetMs": 171.13529199999175,
    "elapsedMs": 170.4132919999829,
    "outcome": "success"
  },
  {
    "seq": 2409,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-490",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:36.199Z",
    "offsetMs": 173.84908399998676
  },
  {
    "seq": 2410,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-490",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:36.356Z",
    "offsetMs": 331.80595899999025,
    "elapsedMs": 157.6237919999985,
    "outcome": "success"
  },
  {
    "seq": 2411,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-490",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:36.357Z",
    "offsetMs": 331.9195419999887,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9121c4a22eef411bbf96c24594391e6cf2a9b2e6a2125c808ec0fb0a7f8a9dae";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2408},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2410},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2411}} as const;
export const projectionSha256 = "fde6c1d3e44df1579287af53f09ab76f3ebf15403c1302c782a6dac143e52e7f";
