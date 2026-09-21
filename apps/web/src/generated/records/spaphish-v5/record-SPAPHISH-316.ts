import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-316",
  "inputSha256": "692464ee31b0175f1bc8d98457e5059b0cc0014efc8b3505bc9bbe1597e4dc6a",
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
      "end": 38,
      "text": "Pablito - Tienes (1) mensaje nuestro. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 38,
      "end": 74,
      "text": "Ábrelo haciendo clic a continuación."
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 74,
      "end": 85,
      "text": "📦 🚚 ..357"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 79,
      "text": "FedEx Paquete esperando ser entregado Tienes (1) Paquete pendiente de entrega. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 79,
      "end": 116,
      "text": "Canjea tu código para ver y recibir. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 116,
      "end": 247,
      "text": "Programe una fecha de entrega y regístrese para recibir nuestras alertas de calendario para asegurarse de que no vuelva a suceder! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 247,
      "end": 366,
      "text": "Ingrese la información de entrega Donde el hoy se encuentra con el futuro 1234567 continuar>> click here to Unsubscribe"
    }
  ],
  "passA": {
    "requestSha256": "55337bbea01f8af9ed80f3df00d7c107aad8805588cf4e61fa4bfd06405cfdea",
    "capturedAt": "2026-09-20T23:45:38.217Z",
    "elapsedMs": 195.91820899999584,
    "successfulAttemptElapsedMs": 193.8360420000099,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.57
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.27
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.08
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.4
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.39
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.05,
            "sender_supplied": 0.94,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3549,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ef87f4934e8f9a175d9075a90e7217557e8111ca3fe5e2451522ba66a20bc7eb",
    "capturedAt": "2026-09-20T23:45:38.370Z",
    "elapsedMs": 151.14070800000627,
    "successfulAttemptElapsedMs": 149.27979199998663,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:1": 0,
            "body:2": 0,
            "NONE": 0.22,
            "subject:2": 0,
            "subject:0": 0,
            "body:3": 0.23,
            "body:0": 0,
            "body:1": 0.55
          },
          "confidence": 0.48
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:2": 0.02,
            "NONE": 0.59,
            "subject:2": 0,
            "subject:0": 0,
            "body:3": 0.39,
            "body:0": 0,
            "body:1": 0
          },
          "confidence": 0.52
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:1": 0.03,
            "body:2": 0.5,
            "NONE": 0.32,
            "subject:2": 0,
            "subject:0": 0,
            "body:3": 0.08,
            "body:0": 0.05,
            "body:1": 0.02
          },
          "confidence": 0.42
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.01,
            "subject:1": 0,
            "NONE": 0.17,
            "subject:2": 0,
            "subject:0": 0.03,
            "body:3": 0.01,
            "body:0": 0.78,
            "body:1": 0
          },
          "confidence": 0.74
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0.08,
            "body:2": 0.01,
            "NONE": 0.86,
            "subject:2": 0,
            "subject:0": 0,
            "body:3": 0.04,
            "body:0": 0,
            "body:1": 0.01
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 2707,
        "output_tokens": 461
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 349.19887500000186,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
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
    "seq": 1545,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-316",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:38.022Z",
    "offsetMs": 1.4543339999945601
  },
  {
    "seq": 1546,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-316",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:38.216Z",
    "offsetMs": 195.91999999999825,
    "elapsedMs": 193.8360420000099,
    "outcome": "success"
  },
  {
    "seq": 1547,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-316",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:38.219Z",
    "offsetMs": 198.8672499999957
  },
  {
    "seq": 1548,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-316",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:38.369Z",
    "offsetMs": 348.7816670000029,
    "elapsedMs": 149.27979199998663,
    "outcome": "success"
  },
  {
    "seq": 1549,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-316",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:38.370Z",
    "offsetMs": 349.2756669999944,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9bfd7b7341eac11958f769689076ca57289ac6934b8731f7ac68b823e0bf5fc5";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1546},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1548},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1549}} as const;
export const projectionSha256 = "6953ca6c739e9939eb26b8e54ca4f6df1a1b58456aa5454a1bd22ed7985f46d4";
