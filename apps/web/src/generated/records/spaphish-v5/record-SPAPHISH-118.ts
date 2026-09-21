import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-118",
  "inputSha256": "d7b19cbb6f971d67d02c665cac943a2c4e752f9b1d0aa71c7dfc5f2e831d49cf",
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
      "text": "¿cómo fue su experiencia de compra?"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 18,
      "text": "¿Cómo le pareció? "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 18,
      "end": 49,
      "text": "Gracias por comprar con Apple. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 49,
      "end": 141,
      "text": "Cuéntenos cómo fue su experiencia al hacer su pedido, incluso si todavía no lo ha recibido. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 141,
      "end": 217,
      "text": "¡Responda la encuesta y podrá ganar un dispositivo de Apple cuando termine! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 217,
      "end": 238,
      "text": "Responder la encuesta"
    }
  ],
  "passA": {
    "requestSha256": "d38152f2f2d33b13950c29ce850df84528670c3341d9f6cfea93609d9af92c18",
    "capturedAt": "2026-09-20T23:44:29.036Z",
    "elapsedMs": 129.22070800000074,
    "successfulAttemptElapsedMs": 127.77129099999729,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.08
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.81
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.05
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.66,
            "sender_supplied": 0.32,
            "mixed_or_unknown": 0.02,
            "independently_established": 0
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 3490,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "21d87ac97cd674de115d52794e4b2d42e411b221f42d71d54802df22cff5afc2",
    "capturedAt": "2026-09-20T23:44:29.147Z",
    "elapsedMs": 108.86558299999888,
    "successfulAttemptElapsedMs": 107.55716699999903,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.14,
            "body:2": 0.01,
            "body:1": 0.82,
            "body:3": 0.02,
            "body:4": 0.01,
            "body:0": 0
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 739,
        "output_tokens": 86
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 240.14308399999572,
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 578,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-118",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:28.907Z",
    "offsetMs": 0.9184169999934966
  },
  {
    "seq": 579,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-118",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:29.036Z",
    "offsetMs": 129.2219169999953,
    "elapsedMs": 127.77129099999729,
    "outcome": "success"
  },
  {
    "seq": 580,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-118",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:29.038Z",
    "offsetMs": 131.7054999999964
  },
  {
    "seq": 581,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-118",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:29.146Z",
    "offsetMs": 239.79824999999983,
    "elapsedMs": 107.55716699999903,
    "outcome": "success"
  },
  {
    "seq": 582,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-118",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:29.147Z",
    "offsetMs": 240.20920899999328,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "596f4133f8c989b1e576b2dd1113e6b4ec75d84434fd28c442e590b420136958";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":579},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":581},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":582}} as const;
export const projectionSha256 = "faa89d87ab108c07104ddcd1aa493cbacc1d0846754ff55d02d7b7a42f146ffd";
