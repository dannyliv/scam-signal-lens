import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-147",
  "inputSha256": "4d9cfd3f513602110b42c5d344500c030ecc3400f6fcf76abb44baccdfe0e33e",
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
      "end": 35,
      "text": "Sobre curso de Ataques Cibernéticos"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 15,
      "text": "Hola chicos!!!\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 15,
      "end": 16,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 16,
      "end": 59,
      "text": "Qué gusto volver a tener clases con uds!!! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 59,
      "end": 232,
      "text": "Esta vez estaremos tomando un curso de cibeseguridad, ataques cibernéticos y aunque el temario dice una cosa, tenemos flexibilidad para tocar otros temas que nos interesen.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 232,
      "end": 233,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 233,
      "end": 332,
      "text": "Este correo es, además de para saludarlos, ponernos de acuerdo en qué días podemos tomar la clase. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 332,
      "end": 492,
      "text": "Independientemente del horario que nos asigne la UHISA, por cuestiones de tiempo y demás, debemos organizar entre nosotros un horario que nos funcione a todos. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 492,
      "end": 570,
      "text": "Para esto les pido que creemos un grupo de whatsapp para ponernos de acuerdo. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 570,
      "end": 680,
      "text": "Mi número es 55 1234 5678 y bueno, debemos organizar esto cuanto antes para no perder tiempo y no atrasarnos.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 680,
      "end": 681,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 681,
      "end": 777,
      "text": "Cualquier cosa, me tienen acá en el correo en lo que organizamos el grupo y nos ponemos al día.\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 777,
      "end": 778,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 778,
      "end": 786,
      "text": "Saludos!"
    }
  ],
  "passA": {
    "requestSha256": "bc2934dd8ac222f42f3150919f333dd227b4864c9005778c57509ffff42585e0",
    "capturedAt": "2026-09-20T23:44:37.548Z",
    "elapsedMs": 220.98983399999997,
    "successfulAttemptElapsedMs": 219.7260000000024,
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
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.65
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.45
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.22
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
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
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.35,
            "sender_supplied": 0.65,
            "independently_established": 0
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 3635,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "2c14e07b280afa31d295919cba3bbe6d81335c0fd75cb58583e4e73d7445ea2f",
    "capturedAt": "2026-09-20T23:44:37.699Z",
    "elapsedMs": 149.05420800000138,
    "successfulAttemptElapsedMs": 147.24324999999953,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:4": 0,
            "body:6": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:9": 0,
            "body:5": 0,
            "body:8": 0.99,
            "body:12": 0,
            "body:10": 0,
            "body:7": 0,
            "NONE": 0.01,
            "body:2": 0,
            "body:3": 0,
            "body:1": 0,
            "body:11": 0
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:4": 0,
            "body:6": 0.55,
            "subject:0": 0,
            "body:0": 0,
            "body:9": 0,
            "body:8": 0,
            "body:5": 0.01,
            "body:12": 0,
            "body:10": 0,
            "body:7": 0.04,
            "NONE": 0.36,
            "body:2": 0.02,
            "body:3": 0.02,
            "body:1": 0,
            "body:11": 0
          },
          "confidence": 0.5
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:4": 0,
            "body:6": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:9": 0,
            "body:8": 0.44,
            "body:5": 0,
            "body:12": 0,
            "body:10": 0.03,
            "body:7": 0.33,
            "NONE": 0.2,
            "body:2": 0,
            "body:3": 0,
            "body:11": 0,
            "body:1": 0
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 2405,
        "output_tokens": 480
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 372.66958400000294,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
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
        "segmentId": "body:8"
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
        "status": "low_confidence",
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
    "seq": 719,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-147",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:37.327Z",
    "offsetMs": 0.8335839999999735
  },
  {
    "seq": 720,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-147",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:37.548Z",
    "offsetMs": 220.99216700000397,
    "elapsedMs": 219.7260000000024,
    "outcome": "success"
  },
  {
    "seq": 721,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-147",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:37.551Z",
    "offsetMs": 224.18666700000176
  },
  {
    "seq": 722,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-147",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:37.699Z",
    "offsetMs": 372.143458999999,
    "elapsedMs": 147.24324999999953,
    "outcome": "success"
  },
  {
    "seq": 723,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-147",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:37.699Z",
    "offsetMs": 372.77012500000274,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6737eada02eb8995a3aba13a6eab5f6964698cafbc7b1bef46bc35c58e1d84bb";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":720},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":722},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":723}} as const;
export const projectionSha256 = "1e76f3f54475b0394f0a09b186c4116f47d5c529e697d6e4c2e96f1567a97534";
