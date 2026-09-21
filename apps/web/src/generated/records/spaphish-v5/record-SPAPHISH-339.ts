import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-339",
  "inputSha256": "d868e511de34ce7bf4b5800394391347f9aa26e4d7af73cdbfed2230c31a0f61",
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
      "end": 82,
      "text": "Ezequiela Miguelina -  🎁⏱️Completa una breve encuesta y recibe un regalo gratis. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 82,
      "end": 89,
      "text": "ID#5621"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 61,
      "text": "MAPFRE ¡Responde una breve encuesta y gana un regalo gratis! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 61,
      "end": 269,
      "text": "Kit de Emergencia para el Coche Tienes la oportunidad de recibir un completo kit de seguridad para tu vehículo, cortesía de MAPFRE. ricardo RESPONDE Y GANA Haz clic aquí para reclamar tu regalo ¡Felicidades! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 269,
      "end": 386,
      "text": "Has sido seleccionado entre un grupo limitado de personas para recibir un exclusivo Kit de Emergencia para el Coche. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 386,
      "end": 481,
      "text": "Para obtener tu regalo, solo debes responder algunas preguntas sobre tu experiencia con MAPFRE."
    }
  ],
  "passA": {
    "requestSha256": "b35b8d3ef417d84247314271a676a7b9b16ebf674357b530cce9650547b3e7df",
    "capturedAt": "2026-09-20T23:45:46.313Z",
    "elapsedMs": 178.0053329999937,
    "successfulAttemptElapsedMs": 176.14725000000908,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.27
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.32
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
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
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.26,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.73
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 3570,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4e89fad0b30174c316cf92a5fc5d430d03e4e95281c43a1624601be02925f491",
    "capturedAt": "2026-09-20T23:45:46.476Z",
    "elapsedMs": 160.01966600000742,
    "successfulAttemptElapsedMs": 158.01604200000293,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "NONE": 0.92,
            "body:0": 0,
            "subject:0": 0,
            "subject:1": 0,
            "body:3": 0.08,
            "body:1": 0
          },
          "confidence": 0.89
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:0": 0.01,
            "NONE": 0.15,
            "body:3": 0,
            "body:2": 0.47,
            "subject:1": 0,
            "subject:0": 0.34,
            "body:1": 0.03
          },
          "confidence": 0.38
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.78,
            "NONE": 0.03,
            "body:3": 0.04,
            "body:2": 0.03,
            "subject:1": 0,
            "subject:0": 0,
            "body:1": 0.12
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 1833,
        "output_tokens": 249
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 341.0667500000127,
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
        "status": "none_selected",
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
    "seq": 1659,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-339",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:46.136Z",
    "offsetMs": 1.3575420000124723
  },
  {
    "seq": 1660,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-339",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:46.312Z",
    "offsetMs": 178.00587500000256,
    "elapsedMs": 176.14725000000908,
    "outcome": "success"
  },
  {
    "seq": 1661,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-339",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:46.316Z",
    "offsetMs": 181.96966700001212
  },
  {
    "seq": 1662,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-339",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:46.475Z",
    "offsetMs": 340.61870800000906,
    "elapsedMs": 158.01604200000293,
    "outcome": "success"
  },
  {
    "seq": 1663,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-339",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:46.476Z",
    "offsetMs": 341.1900830000086,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8e9f5f9bf800d43affe59b4a61b086b5b9913142e7dead692277c0e91b00a72d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1660},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1662},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1663}} as const;
export const projectionSha256 = "66194c10c7d72670c929d3699d4b0f72cbd4cf4c12c1fd941b3352ab23015a3b";
