import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-139",
  "inputSha256": "27ad9bc10f7847b72862dfdef36dcd3ee4c9381cee0dca710f5dbc6d8790733b",
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
      "end": 37,
      "text": "Citatorio Judicial [FEBLZZMJWOX4FY95]"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 108,
      "text": "La contraseña para el archivo PDF es: teresita@hotmail.com Adjunto: archivo PDF del CFDI que usted solicitó."
    }
  ],
  "passA": {
    "requestSha256": "c709517c2733553431bce37f270fa5008fec2efbcf80cf796cd316dc9f8426eb",
    "capturedAt": "2026-09-20T23:44:35.256Z",
    "elapsedMs": 166.2879999999932,
    "successfulAttemptElapsedMs": 164.51841699999932,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.62
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0.01,
            "active_request": 0.15,
            "educational_or_quoted": 0,
            "informational": 0.84
          },
          "confidence": 0.78
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.39,
            "independently_established": 0.01,
            "sender_supplied": 0.58
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 3466,
        "output_tokens": 351
      }
    }
  },
  "passB": {
    "requestSha256": "d547753ac87bacd46153b5c56f22e94a2fb7331d2822fed049e7322af3de6642",
    "capturedAt": "2026-09-20T23:44:35.396Z",
    "elapsedMs": 138.3851250000007,
    "successfulAttemptElapsedMs": 137.2018750000061,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "NONE": 0.17,
            "subject:0": 0.8,
            "body:0": 0.03
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 635,
        "output_tokens": 50
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 306.231458000002,
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
        "segmentId": "subject:0"
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
    "seq": 682,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-139",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:35.091Z",
    "offsetMs": 1.205708000001323
  },
  {
    "seq": 683,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-139",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:35.256Z",
    "offsetMs": 166.29133300000103,
    "elapsedMs": 164.51841699999932,
    "outcome": "success"
  },
  {
    "seq": 684,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-139",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:35.258Z",
    "offsetMs": 168.2890830000033
  },
  {
    "seq": 685,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-139",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:35.396Z",
    "offsetMs": 305.9893329999977,
    "elapsedMs": 137.2018750000061,
    "outcome": "success"
  },
  {
    "seq": 686,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-139",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:35.396Z",
    "offsetMs": 306.30504199999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "caba569b47c75c90dfe85a9068d1d840f13513b3786ec3600e193ea0aa0764d4";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":683},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":685},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":686}} as const;
export const projectionSha256 = "0ee88a48bb208d3d514b9d0dcbd9a0e6838781b7328d2ff28a2cc20cfba26bc7";
