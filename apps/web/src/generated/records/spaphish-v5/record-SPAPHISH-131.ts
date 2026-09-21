import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-131",
  "inputSha256": "45f1cfa28aa1fc79a71db6e93c2fd48301d794e5d08961643c3be41e6d27b642",
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
      "end": 29,
      "text": "100% Protegido, 50% del costo"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 46,
      "text": "McAfee Su computadora puede estar en peligro. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 46,
      "end": 62,
      "text": "Esté protegido. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 62,
      "end": 140,
      "text": "Sin protección, su computadora corre peligro de sufrir virus y otros malware. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 140,
      "end": 161,
      "text": "MANTÉNGASE PROTEGIDO!"
    }
  ],
  "passA": {
    "requestSha256": "b7b56d1b6afa81175818020fde1998fa1f01431d03965e522191e7b046192d5d",
    "capturedAt": "2026-09-20T23:44:33.006Z",
    "elapsedMs": 136.25283399999898,
    "successfulAttemptElapsedMs": 135.35287500000413,
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
          "noul": 0.5
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.82
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.41
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.17
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
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
            "informational": 0.12,
            "mixed_or_unclear": 0.01,
            "active_request": 0.87
          },
          "confidence": 0.84
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.96,
            "sender_supplied": 0.02
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3478,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "08c093c3912111ea708b8569f32988fd3fb196a15784b72489b52250d6966f9d",
    "capturedAt": "2026-09-20T23:44:33.168Z",
    "elapsedMs": 157.8117079999938,
    "successfulAttemptElapsedMs": 156.20516700000007,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.49,
            "body:3": 0.02,
            "NONE": 0.45,
            "body:2": 0,
            "body:0": 0,
            "body:1": 0.04
          },
          "confidence": 0.37
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0.03,
            "body:3": 0.37,
            "NONE": 0.04,
            "body:2": 0.5,
            "body:0": 0.06,
            "subject:0": 0
          },
          "confidence": 0.4
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0.01,
            "NONE": 0.88,
            "body:2": 0,
            "body:1": 0.01,
            "body:0": 0.1
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 1409,
        "output_tokens": 221
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 298.19366699999955,
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
        "status": "low_confidence",
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 642,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-131",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:32.870Z",
    "offsetMs": 0.5489579999994021
  },
  {
    "seq": 643,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-131",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:33.006Z",
    "offsetMs": 136.25199999999313,
    "elapsedMs": 135.35287500000413,
    "outcome": "success"
  },
  {
    "seq": 644,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-131",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:33.010Z",
    "offsetMs": 140.97074999999313
  },
  {
    "seq": 645,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-131",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:33.167Z",
    "offsetMs": 297.85008299999754,
    "elapsedMs": 156.20516700000007,
    "outcome": "success"
  },
  {
    "seq": 646,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-131",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:33.168Z",
    "offsetMs": 298.2872919999936,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "903759726d6fc1d1367484e32c3eb34e50989d79b381b52472a46af5f78b3103";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":643},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":645},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":646}} as const;
export const projectionSha256 = "c8b2d34e417b4307d4fe77b7e9d9a28d0a56d633198bb49178fcf0e48067c61f";
