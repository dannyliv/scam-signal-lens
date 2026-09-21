import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-182",
  "inputSha256": "61fbf6e94035312608c8c99b485f752fb1173ad88cb386c3c2431580a5019356",
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
      "end": 56,
      "text": "Missxtranger, Has ganado una Caja Misteriosa de Amazon🎉"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 47,
      "text": "amazon Caja Misteriosa De Amazon ¡Felicidades! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 47,
      "end": 125,
      "text": "¡Has sido elegido para participar en nuestro programa de fidelización GRATIS! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 125,
      "end": 140,
      "text": "confirma ahora!"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 140,
      "end": 196,
      "text": "darse de baja El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 196,
      "end": 335,
      "text": "Si prefieres no recibir más comunicaciones, por favor date de baja aquí Or write to: 128 Willow Crest Rd Ste 402#5912, Northwood, VT, 05744"
    }
  ],
  "passA": {
    "requestSha256": "5127ca6ff47b64e4166008dea700d3c60ce96084b29a585f095ffdcb3763a009",
    "capturedAt": "2026-09-20T23:44:49.890Z",
    "elapsedMs": 133.85424999999668,
    "successfulAttemptElapsedMs": 132.12966700000106,
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
          "noul": 0.12
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.12
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.38
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.53
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.27
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.24
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.1
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.99,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.51,
            "sender_supplied": 0.48
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 3537,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "6486922af96dbf25715136d2baa2e1e34a62bcfcebecf79326a4012ff805f1be",
    "capturedAt": "2026-09-20T23:44:50.268Z",
    "elapsedMs": 375.45091700000194,
    "successfulAttemptElapsedMs": 373.5445420000033,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.94,
            "body:4": 0,
            "body:3": 0,
            "body:1": 0,
            "NONE": 0.06,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.93
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:4": 0.01,
            "body:3": 0.05,
            "body:1": 0.3,
            "NONE": 0.6,
            "subject:0": 0.01,
            "body:0": 0.02
          },
          "confidence": 0.52
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.11,
            "body:4": 0.01,
            "body:3": 0.01,
            "body:1": 0,
            "NONE": 0.87,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.85
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.16,
            "body:4": 0,
            "body:3": 0,
            "body:1": 0,
            "NONE": 0.84,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 2126,
        "output_tokens": 335
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 512.5793749999939,
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
        "segmentId": "body:2"
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
        "status": "none_selected",
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
    "seq": 891,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-182",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:49.757Z",
    "offsetMs": 1.081624999998894
  },
  {
    "seq": 892,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-182",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:49.890Z",
    "offsetMs": 133.8556249999965,
    "elapsedMs": 132.12966700000106,
    "outcome": "success"
  },
  {
    "seq": 893,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-182",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:49.894Z",
    "offsetMs": 138.01374999999825
  },
  {
    "seq": 894,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-182",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:50.268Z",
    "offsetMs": 512.2948340000003,
    "elapsedMs": 373.5445420000033,
    "outcome": "success"
  },
  {
    "seq": 895,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-182",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:50.268Z",
    "offsetMs": 512.6421669999982,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a73b889b1fc83f7b5737151146b0c0053c3ca759d275f44216c50b53e1b34a94";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":892},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":894},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":895}} as const;
export const projectionSha256 = "fa7818925255da8d35a474ded60d1da74afbcc7a567afc155f825b9770e67249";
