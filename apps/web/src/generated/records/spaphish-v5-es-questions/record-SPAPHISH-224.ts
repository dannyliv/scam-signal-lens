import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-224",
  "inputSha256": "e0bed8ea850e5c072840e2bd63f7115ee4ec501e24f4b523da7be1f89fd440f4",
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
    "requestSha256": "b23380a91813474fef8deb0a456d56a665adb8e89751d738763b688c6f8c6de1",
    "capturedAt": "2026-09-22T03:52:38.731Z",
    "elapsedMs": 623.8406729999697,
    "successfulAttemptElapsedMs": 622.4363879999728,
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
          "noul": 0.27
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
            "active_request": 0.34,
            "informational": 0.66,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.53
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "no_sensitive_action": 1,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5009,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "c7713d5bf35530c039efa5b2b8655e09280b3a34aefd2cbbac4dc8bd028784b0",
    "capturedAt": "2026-09-22T03:52:39.264Z",
    "elapsedMs": 531.4749069999671,
    "successfulAttemptElapsedMs": 530.0355869999621,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0,
            "subject:0": 0.01,
            "body:9": 0.05,
            "body:10": 0,
            "body:1": 0,
            "body:5": 0,
            "body:0": 0,
            "body:11": 0,
            "body:6": 0,
            "body:3": 0.18,
            "NONE": 0.68,
            "body:2": 0.05,
            "body:12": 0,
            "body:4": 0.01,
            "body:8": 0.01
          },
          "confidence": 0.65
        }
      },
      "usage": {
        "input_tokens": 1082,
        "output_tokens": 159
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1156.9674989999621,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
    "seq": 1091,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-224",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:38.108Z",
    "offsetMs": 1.0691679999581538
  },
  {
    "seq": 1092,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-224",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:38.731Z",
    "offsetMs": 623.840562999947,
    "elapsedMs": 622.4363879999728,
    "outcome": "success"
  },
  {
    "seq": 1093,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-224",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:38.733Z",
    "offsetMs": 626.2852779999957
  },
  {
    "seq": 1094,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-224",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:39.264Z",
    "offsetMs": 1156.7786389999674,
    "elapsedMs": 530.0355869999621,
    "outcome": "success"
  },
  {
    "seq": 1095,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-224",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:39.264Z",
    "offsetMs": 1157.0097099999548,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8f032659b55e25ae1a931459db2689a80e10d3a48f7a09feecb3cdfe268ac93c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1092},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1094},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1095}} as const;
export const projectionSha256 = "b0aea20249bac9e0a3050dbdd5036fe9b1bb794f8d9aba2a866331186b7ea586";
