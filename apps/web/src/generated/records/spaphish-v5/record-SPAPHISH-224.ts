import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-224",
  "inputSha256": "e0bed8ea850e5c072840e2bd63f7115ee4ec501e24f4b523da7be1f89fd440f4",
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
      "end": 36,
      "text": "Avances en el desarrollo de la tesis"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 28,
      "text": "Buenos días, tarde o noche.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 28,
      "end": 29,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 29,
      "end": 100,
      "text": "Con base en las observaciones y recomendaciones sobre el protocolo de \n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 100,
      "end": 173,
      "text": "tesis y la presentación realizada con los profesores de la academia, se \n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 173,
      "end": 242,
      "text": "delimitó el alcance y objetivo a cubrir durante el desarrollo de la \n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 242,
      "end": 314,
      "text": "tesis, en este sentido se realizaron cambios sobre el documento, mismo \n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 314,
      "end": 385,
      "text": "que tendrá un incremento durante este proceso con la finalidad de una \n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 385,
      "end": 402,
      "text": "mejora continua. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 402,
      "end": 458,
      "text": "Por tal motivo, agradezco la atención prestada y quedo \n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 458,
      "end": 511,
      "text": "al pendiente de sus observaciones y recomendaciones.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 511,
      "end": 512,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 512,
      "end": 513,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 513,
      "end": 531,
      "text": "Saludos cordiales,"
    }
  ],
  "passA": {
    "requestSha256": "3f7cb8b1fd4f079295140a742b1910b590e0fa1e400fe26d3ac1622a0c0543d4",
    "capturedAt": "2026-09-20T23:45:05.881Z",
    "elapsedMs": 170.15275000000838,
    "successfulAttemptElapsedMs": 168.5214580000029,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.01
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.02
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.23
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.78,
            "active_request": 0.22
          },
          "confidence": 0.7
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0,
            "no_sensitive_action": 1,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3559,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "c2aeb997a5bc7808e431759bf05aec4d42df67795a97a3e35497ac4679103452",
    "capturedAt": "2026-09-20T23:45:06.005Z",
    "elapsedMs": 122.2854159999988,
    "successfulAttemptElapsedMs": 120.50208400000702,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:9": 0.02,
            "body:3": 0.36,
            "body:1": 0,
            "body:8": 0.01,
            "body:4": 0,
            "body:2": 0.03,
            "subject:0": 0.01,
            "NONE": 0.5700000000000001,
            "body:12": 0,
            "body:0": 0,
            "body:10": 0,
            "body:5": 0,
            "body:11": 0,
            "body:7": 0
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 982,
        "output_tokens": 159
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 294.53208400000585,
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
    "seq": 1095,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-224",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:05.712Z",
    "offsetMs": 1.1102499999979045
  },
  {
    "seq": 1096,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-224",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:05.881Z",
    "offsetMs": 170.15491700000712,
    "elapsedMs": 168.5214580000029,
    "outcome": "success"
  },
  {
    "seq": 1097,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-224",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:05.884Z",
    "offsetMs": 173.19012500000827
  },
  {
    "seq": 1098,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-224",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:06.005Z",
    "offsetMs": 294.32537500000035,
    "elapsedMs": 120.50208400000702,
    "outcome": "success"
  },
  {
    "seq": 1099,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-224",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:06.005Z",
    "offsetMs": 294.58312500000466,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d793dac2f8292b9d8e87a0f5d4bd6c9bed0224000f86de4914471890c5f96f86";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1096},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1098},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1099}} as const;
export const projectionSha256 = "1c29c09e20fabbfc22e521c42587ca2f87ddc570cefbf08b344e5908e7ff4f61";
