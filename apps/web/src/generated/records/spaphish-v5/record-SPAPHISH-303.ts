import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-303",
  "inputSha256": "3371493803c52fd6b094bba29e1b01fe3d2691623ce1c850b149e93e0b3027a8",
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
      "end": 52,
      "text": "¡Confirma tus pasos ahora para completar tu entrega!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 62,
      "text": "¡Este mensaje fue enviado por alguien ajeno a la Universidad! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 62,
      "end": 138,
      "text": "****************************************************************************"
    }
  ],
  "passA": {
    "requestSha256": "b764346a930d80f9f9269fe65d6fbe7502a1c041953e65215673ffaf0083f4a5",
    "capturedAt": "2026-09-20T23:45:33.491Z",
    "elapsedMs": 195.22241699999722,
    "successfulAttemptElapsedMs": 192.62783300000592,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.16
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.2
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.09
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.76
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.36
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.26
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.12
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.13
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.18,
            "educational_or_quoted": 0.01,
            "active_request": 0.77,
            "mixed_or_unclear": 0.04
          },
          "confidence": 0.69
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.63,
            "sender_supplied": 0.21,
            "independently_established": 0,
            "mixed_or_unknown": 0.16
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 3449,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "43c82122d3ed8f740e7a294e27d4c90805a42fe59cf419b93387e8d9184e424a",
    "capturedAt": "2026-09-20T23:45:33.648Z",
    "elapsedMs": 154.28295900000376,
    "successfulAttemptElapsedMs": 152.05520799999067,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:1": 0,
            "body:0": 0,
            "NONE": 0.02,
            "subject:0": 0.98
          },
          "confidence": 0.97
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:0": 0.03,
            "NONE": 0.79,
            "subject:0": 0.18
          },
          "confidence": 0.72
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:0": 0.02,
            "NONE": 0.83,
            "subject:0": 0.15
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 1210,
        "output_tokens": 169
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 352.55895799999416,
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
        "segmentId": "subject:0"
      },
      "authority_claim": {
        "status": "none_selected",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 1483,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-303",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:33.297Z",
    "offsetMs": 1.696957999985898
  },
  {
    "seq": 1484,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-303",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:33.491Z",
    "offsetMs": 195.22262499999488,
    "elapsedMs": 192.62783300000592,
    "outcome": "success"
  },
  {
    "seq": 1485,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-303",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:33.495Z",
    "offsetMs": 199.7176669999899
  },
  {
    "seq": 1486,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-303",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:33.648Z",
    "offsetMs": 352.3857919999864,
    "elapsedMs": 152.05520799999067,
    "outcome": "success"
  },
  {
    "seq": 1487,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-303",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:33.648Z",
    "offsetMs": 352.59587499999907,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "eda769b630ced7e527d9f4b98c021fbce9d4a7880ebdcc894cd5437b4fb6e29e";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1484},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1486},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1487}} as const;
export const projectionSha256 = "609801c0c9d831981403d81d390854a4eb4ad2187ddfeaa95cd17feadc96058d";
