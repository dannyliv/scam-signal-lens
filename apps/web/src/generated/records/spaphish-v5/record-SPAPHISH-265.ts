import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-265",
  "inputSha256": "7dae7c5f0b41e976d2ead9cc7cf5447e95b9cd9d617a874fbec11ac05cbcad43",
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
      "end": 39,
      "text": "Cotización Laboratorio Médico del Chopo"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 117,
      "text": "Adjunto al presente correo encontrar la cotizacin solicitada al Centro de Informacin de Laboratorio Mdico del Chopo. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 117,
      "end": 262,
      "text": "Es importante que el da que acuda a nuestra sucursal lleve consigo el nmero de cotizacin y siga las instrucciones de preparacin para su estudio. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 262,
      "end": 386,
      "text": "Consulte las promociones que Laboratorio Mdico del Chopo tiene para usted en www.chopo.com.mx Porque tu salud es lo primero."
    }
  ],
  "passA": {
    "requestSha256": "2722b654b6a1c9e49b2c3ed832cc923fc79d0b9b63565d50a8386cf03448537b",
    "capturedAt": "2026-09-20T23:45:21.056Z",
    "elapsedMs": 220.83087499999965,
    "successfulAttemptElapsedMs": 219.07325000000128,
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
          "noul": 0.13
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.79
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.52
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.11,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 0.89
          },
          "confidence": 0.85
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.06,
            "mixed_or_unknown": 0,
            "independently_established": 0.01,
            "no_sensitive_action": 0.93
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3527,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "4b8c9174ad2f6fcc2b31e264e2e1e23818d8d18ea03132a5e5a8d0bb513979f2",
    "capturedAt": "2026-09-20T23:45:21.236Z",
    "elapsedMs": 177.5482500000071,
    "successfulAttemptElapsedMs": 175.40837499999907,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.21,
            "subject:0": 0.05,
            "body:1": 0.51,
            "NONE": 0.2,
            "body:2": 0.03
          },
          "confidence": 0.4
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.01,
            "subject:0": 0,
            "body:1": 0.77,
            "body:2": 0.12,
            "NONE": 0.1
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 1183,
        "output_tokens": 136
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 401.0268340000039,
  "derived": {
    "concern": "few_warning_signs",
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
        "status": "not_requested",
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
        "status": "selected",
        "segmentId": "body:1"
      },
      "analyzer_instruction": {
        "status": "not_requested",
        "segmentId": null
      }
    },
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1298,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-265",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:20.836Z",
    "offsetMs": 1.1720839999907184
  },
  {
    "seq": 1299,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-265",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:21.056Z",
    "offsetMs": 220.83091699999932,
    "elapsedMs": 219.07325000000128,
    "outcome": "success"
  },
  {
    "seq": 1300,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-265",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:21.060Z",
    "offsetMs": 224.6571249999979
  },
  {
    "seq": 1301,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-265",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:21.236Z",
    "offsetMs": 400.8015000000014,
    "elapsedMs": 175.40837499999907,
    "outcome": "success"
  },
  {
    "seq": 1302,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-265",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:21.236Z",
    "offsetMs": 401.08024999999907,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e18aa7395036a70a2e9fb70d5640bd8c16f8cb92a1a5c555f5f3e70043ffa745";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1299},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1301},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1302}} as const;
export const projectionSha256 = "b81fa57f3fc5a51926da197e32769ffa51c91614097c6db125c869ca53964a2c";
