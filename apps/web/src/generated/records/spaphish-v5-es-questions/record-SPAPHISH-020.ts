import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-020",
  "inputSha256": "b39da743e56e97a0571431303339fe268dab22c81497a6e903f78186043ec67e",
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
      "end": 34,
      "text": "Recomendaciones Nutricionales CMT "
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 65,
      "text": "Buen día le envío las recomendaciones respecto a la alimentación\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 65,
      "end": 66,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 66,
      "end": 75,
      "text": "M. en A. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 75,
      "end": 158,
      "text": "Sofía Ríos Durán Departamento de Nutrición Hospital de Especialidades Central S.C. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 158,
      "end": 173,
      "text": "Ext 2104 y 2105"
    }
  ],
  "passA": {
    "requestSha256": "4361f98e65635803e44a57359cbb10b7ed3948e88d3f7d00bc1c1da783628a11",
    "capturedAt": "2026-09-22T03:48:34.129Z",
    "elapsedMs": 629.1543810000003,
    "successfulAttemptElapsedMs": 628.5179250000001,
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
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.19
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
            "informational": 0.99,
            "active_request": 0.01,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.01,
            "no_sensitive_action": 0.99
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 4941,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "6c08abced5b0258682e3adb16b40adb2e3502c045e0e52548d8a390d0c38cb83",
    "capturedAt": "2026-09-22T03:48:34.690Z",
    "elapsedMs": 559.8641040000002,
    "successfulAttemptElapsedMs": 559.0216680000012,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.01,
            "NONE": 0.02,
            "body:3": 0.97,
            "body:4": 0,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 841,
        "output_tokens": 86
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1190.3871740000031,
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
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 94,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-020",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:33.500Z",
    "offsetMs": 0.37559500000133994
  },
  {
    "seq": 95,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-020",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:34.129Z",
    "offsetMs": 629.1540650000024,
    "elapsedMs": 628.5179250000001,
    "outcome": "success"
  },
  {
    "seq": 96,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-020",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:34.130Z",
    "offsetMs": 630.7808470000018
  },
  {
    "seq": 97,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-020",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:34.690Z",
    "offsetMs": 1190.2149180000015,
    "elapsedMs": 559.0216680000012,
    "outcome": "success"
  },
  {
    "seq": 98,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-020",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:34.690Z",
    "offsetMs": 1190.4230940000016,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "865b7061bc0b2445cec86cbd479f51c2c2914db02c327ade3aaaa1ad45c40bde";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":95},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":97},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":98}} as const;
export const projectionSha256 = "985f921d7724788633b2e96d719e30dc4e4d4c97ea63c06a4e13f20620063e97";
