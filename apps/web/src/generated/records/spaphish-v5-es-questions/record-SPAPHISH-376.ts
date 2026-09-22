import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-376",
  "inputSha256": "37a350c4fbd6970490d59b158c236ef6234ec88dbc072e6626de45ab6967113e",
  "questionBundleSha256": "9631a5b623f8c05b491dc5a5f67ab9b62e5b1898446a722339eaa0c16a40af8b",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "42e51b1f7b8706dae7188d0d3fa8c6ac83b855b21f393196bd63bc16d4b91d93",
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
    "requestSha256": "11981b140f8cfc54bfc7a5e7e4f620942bb39a72c2b565422e33bc4d4fd0b37a",
    "capturedAt": "2026-09-22T03:55:42.427Z",
    "elapsedMs": 599.7510749999783,
    "successfulAttemptElapsedMs": 598.1922770000529,
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
          "noul": 0.16
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.95
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.94
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.21
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.04
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.75,
            "sender_supplied": 0.21,
            "mixed_or_unknown": 0.04
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 5079,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "1562c595d81128b3b6466d585bca68fa73f956a30ada98790e83e9e047142dd9",
    "capturedAt": "2026-09-22T03:55:42.956Z",
    "elapsedMs": 527.0468509999919,
    "successfulAttemptElapsedMs": 525.4008179999655,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:3": 0,
            "NONE": 0.02,
            "body:4": 0,
            "subject:1": 0,
            "body:1": 0,
            "body:2": 0.01,
            "body:9": 0.01,
            "body:0": 0.04,
            "body:5": 0.78,
            "subject:0": 0,
            "body:10": 0.09,
            "body:6": 0,
            "body:8": 0,
            "body:7": 0.05
          },
          "confidence": 0.75
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:3": 0,
            "NONE": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:1": 0,
            "body:2": 0,
            "body:9": 0.52,
            "body:0": 0.23,
            "body:5": 0,
            "subject:0": 0,
            "body:10": 0,
            "body:6": 0,
            "body:7": 0,
            "body:8": 0.25
          },
          "confidence": 0.48
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0,
            "subject:0": 0.01,
            "body:4": 0,
            "subject:1": 0,
            "body:1": 0.06,
            "body:9": 0,
            "body:2": 0,
            "body:0": 0,
            "body:5": 0.03,
            "NONE": 0.68,
            "body:8": 0,
            "body:6": 0,
            "body:10": 0.15,
            "body:7": 0.07
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 2659,
        "output_tokens": 440
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1128.9170010000234,
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
    "seq": 1841,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-376",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:41.828Z",
    "offsetMs": 1.192444999993313
  },
  {
    "seq": 1842,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-376",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:42.427Z",
    "offsetMs": 599.751483,
    "elapsedMs": 598.1922770000529,
    "outcome": "success"
  },
  {
    "seq": 1843,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-376",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:42.430Z",
    "offsetMs": 602.7873200000031
  },
  {
    "seq": 1844,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-376",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:42.956Z",
    "offsetMs": 1128.6232060000184,
    "elapsedMs": 525.4008179999655,
    "outcome": "success"
  },
  {
    "seq": 1845,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-376",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:42.956Z",
    "offsetMs": 1128.9813670000294,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e2d038e05a8e39eec89e92af52639e976af43ac0d9cdf7e1029728a054a67681";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1842},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1844},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1845}} as const;
export const projectionSha256 = "cf7683e4fae50a1a016cbf9d070a891c435c227c00b01625548734cee068228a";
