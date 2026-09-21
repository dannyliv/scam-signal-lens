import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-033",
  "inputSha256": "0304a499a001f0d3f0ec2b9c0b87b7a0f28869683cbbd6380c77dad30aefa3fc",
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
      "end": 114,
      "text": "Pablito - Nos gustaría ofrecerle una oportunidad única para recibir una Taladro DeWalt completamente nueva ID#2578"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 18,
      "text": "¡Responde y Gana! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 18,
      "end": 138,
      "text": "• Obtén un • Taladro DeWalt ¡Has sido seleccionado para participar en nuestro Programa de Fidelidad de MANERA GRATUITA! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 138,
      "end": 194,
      "text": "Solo te tomará un minuto obtener este increíble premio. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 194,
      "end": 213,
      "text": "¡Consíguelo Ahora! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 213,
      "end": 277,
      "text": "If you no longer wish to receive these emails, unsubscribe here."
    }
  ],
  "passA": {
    "requestSha256": "442c2a24d4951254a7b277d96356f65f9bcb609611da9c3e891ae44385e1cb84",
    "capturedAt": "2026-09-20T23:44:02.163Z",
    "elapsedMs": 188.56095800000003,
    "successfulAttemptElapsedMs": 186.92912500000057,
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
          "noul": 0.16
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.09
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.42
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.27
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.17
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.17
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.11
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
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
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.41,
            "no_sensitive_action": 0.58,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.44
        }
      },
      "usage": {
        "input_tokens": 3521,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "79e09b1758abd61fc163916df2218c58ad6f15264c232e2e1f7490f860674615",
    "capturedAt": "2026-09-20T23:44:02.278Z",
    "elapsedMs": 111.65083400000003,
    "successfulAttemptElapsedMs": 109.98716599999898,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0.01,
            "body:2": 0.02,
            "body:0": 0.02,
            "body:3": 0.9,
            "NONE": 0.05,
            "body:4": 0,
            "body:1": 0
          },
          "confidence": 0.88
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:2": 0,
            "body:0": 0,
            "body:3": 0,
            "NONE": 0.85,
            "body:1": 0.13,
            "body:4": 0.01
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 1210,
        "output_tokens": 167
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 304.16058300000077,
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
        "segmentId": "body:3"
      },
      "authority_claim": {
        "status": "none_selected",
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
    "seq": 159,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-033",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:01.975Z",
    "offsetMs": 1.008458000000246
  },
  {
    "seq": 160,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-033",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:02.163Z",
    "offsetMs": 188.5610830000005,
    "elapsedMs": 186.92912500000057,
    "outcome": "success"
  },
  {
    "seq": 161,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-033",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:02.167Z",
    "offsetMs": 193.24974999999904
  },
  {
    "seq": 162,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-033",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:02.278Z",
    "offsetMs": 303.93179099999907,
    "elapsedMs": 109.98716599999898,
    "outcome": "success"
  },
  {
    "seq": 163,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-033",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:02.278Z",
    "offsetMs": 304.2086249999993,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a2606f13befeeb5c96786c73789c0f6aaf66dde499503724a9f2d40a1b1e417a";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":160},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":162},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":163}} as const;
export const projectionSha256 = "b666ca8863f5924c3851856bd7a1b37d18fd44240004c878a35bf8ed7ee74481";
