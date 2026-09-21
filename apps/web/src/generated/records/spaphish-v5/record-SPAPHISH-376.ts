import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-376",
  "inputSha256": "37a350c4fbd6970490d59b158c236ef6234ec88dbc072e6626de45ab6967113e",
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
      "end": 28,
      "text": "Pablito -¡Oferta exclusiva! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 28,
      "end": 85,
      "text": "Dale a tu cocina el toque Ninja que se merece🍗🔥 ID#6700"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 65,
      "text": "¡Oferta por tiempo limitado – Consigue tu Freidora Ninja ahora!  "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 65,
      "end": 137,
      "text": "Transforma tu cocina con la Freidora Ninja – ¡Exclusiva en Sam’s Club!  "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 137,
      "end": 176,
      "text": "Ebook de recetas gratis con tu compra! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 176,
      "end": 259,
      "text": "Crujiente, saludable y rápido – ¡Cocina tus platillos favoritos con menos aceite!  "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 259,
      "end": 322,
      "text": "Di adiós a las comidas grasosas y hola a la fritura sin culpa. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 322,
      "end": 374,
      "text": "¡Ordena ya — exclusivo para clientes de Sam’s Club! "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 374,
      "end": 405,
      "text": "Envío rápido y stock limitado. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 405,
      "end": 519,
      "text": "“¡Una de las mejores mejoras que he hecho en mi cocina!” – Andrea M., Compradora Verificada  ¡Quiero mi Freidora! "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 519,
      "end": 534,
      "text": "⏳ ¡Apresúrate! "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 534,
      "end": 589,
      "text": "Pocos quedan – ¡Consigue la tuya antes que se agoten!  "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 589,
      "end": 651,
      "text": "Reserva Ahora ✅ Confiado por cientos de miembros de Sam’s Club"
    }
  ],
  "passA": {
    "requestSha256": "86b3c85bbc80c093332043a11b1a463b30287fadd8d06b1a12ee1b5d42ea982f",
    "capturedAt": "2026-09-20T23:45:58.533Z",
    "elapsedMs": 158.352332999988,
    "successfulAttemptElapsedMs": 156.14450000000943,
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
          "noul": 0.08
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.96
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.33
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.08,
            "no_sensitive_action": 0.78,
            "independently_established": 0.01,
            "sender_supplied": 0.13
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 3629,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "30098f63991129d66129fd9e9df9193776af8b849507661a5493a76a6892368b",
    "capturedAt": "2026-09-20T23:45:58.697Z",
    "elapsedMs": 161.57629199999792,
    "successfulAttemptElapsedMs": 159.61716700000397,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:1": 0,
            "NONE": 0.01,
            "body:4": 0,
            "subject:1": 0,
            "body:10": 0.09,
            "body:2": 0.02,
            "body:6": 0,
            "body:9": 0,
            "body:7": 0.02,
            "body:0": 0.07,
            "body:3": 0,
            "body:5": 0.79,
            "body:8": 0,
            "subject:0": 0
          },
          "confidence": 0.77
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:1": 0,
            "NONE": 0,
            "body:4": 0,
            "body:10": 0,
            "subject:1": 0,
            "body:2": 0,
            "body:6": 0,
            "body:9": 0.6,
            "body:7": 0,
            "body:0": 0.15,
            "body:3": 0,
            "body:5": 0,
            "body:8": 0.25,
            "subject:0": 0
          },
          "confidence": 0.56
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:1": 0.08,
            "subject:0": 0.01,
            "body:4": 0,
            "body:10": 0.43,
            "body:2": 0,
            "subject:1": 0,
            "body:6": 0,
            "body:9": 0,
            "body:7": 0.06,
            "body:0": 0,
            "body:3": 0,
            "body:5": 0.14,
            "body:8": 0,
            "NONE": 0.28
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 2349,
        "output_tokens": 443
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 322.29633399999875,
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
        "segmentId": "body:5"
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1843,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-376",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:58.376Z",
    "offsetMs": 1.700875000009546
  },
  {
    "seq": 1844,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-376",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:58.533Z",
    "offsetMs": 158.35220900000422,
    "elapsedMs": 156.14450000000943,
    "outcome": "success"
  },
  {
    "seq": 1845,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-376",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:58.536Z",
    "offsetMs": 161.81770900000993
  },
  {
    "seq": 1846,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-376",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:58.696Z",
    "offsetMs": 322.0386670000007,
    "elapsedMs": 159.61716700000397,
    "outcome": "success"
  },
  {
    "seq": 1847,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-376",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:58.697Z",
    "offsetMs": 322.34858400000667,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d083bdf1eb4c54629c2a2f6a9139ef5a5b2d9b76f002296402ae8f5a0aab1702";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1844},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1846},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1847}} as const;
export const projectionSha256 = "24efb70d604f3ee5c061bb7c911c552c391feedf27949448cb5541e2d3214900";
