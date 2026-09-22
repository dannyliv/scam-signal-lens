import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-448",
  "inputSha256": "3f6d2dbb3d4b3b7f63f9db95ec319d30dd58e49c347487dd18567a1db61b09cd",
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
      "end": 59,
      "text": "Pancracio, ¡No Te Lo Pierdas: Grandes Recompensas Terminan!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 66,
      "text": "Pablito, Pedido #486837004-13 Confirmado Click above to show image"
    }
  ],
  "passA": {
    "requestSha256": "bc53d027973300adb8e38f8e9564c14edb0045e084d0ff67ba8e1166760362a1",
    "capturedAt": "2026-09-22T03:57:07.102Z",
    "elapsedMs": 621.8798219999298,
    "successfulAttemptElapsedMs": 620.3487190000014,
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
          "noul": 0.08
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.08
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.81
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.31
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.15
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
          "noul": 0.16
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0,
            "informational": 0.08,
            "active_request": 0.91
          },
          "confidence": 0.88
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.76,
            "sender_supplied": 0.22
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 4919,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "6bc6d07a1095bccd75035f5169975a9dc270e6bf5c66914fba82d2bbde455531",
    "capturedAt": "2026-09-22T03:57:07.698Z",
    "elapsedMs": 595.0553170000203,
    "successfulAttemptElapsedMs": 593.1722210000735,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "NONE": 0.01,
            "subject:0": 0.99,
            "body:0": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.83,
            "subject:0": 0.01,
            "body:0": 0.16
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 1144,
        "output_tokens": 95
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1218.3069760000799,
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
        "status": "selected",
        "segmentId": "subject:0"
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
    "seq": 2199,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-448",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:06.481Z",
    "offsetMs": 1.2894550000783056
  },
  {
    "seq": 2200,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-448",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:07.102Z",
    "offsetMs": 621.8802259999793,
    "elapsedMs": 620.3487190000014,
    "outcome": "success"
  },
  {
    "seq": 2201,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-448",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:07.105Z",
    "offsetMs": 624.4731829999946
  },
  {
    "seq": 2202,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-448",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:07.698Z",
    "offsetMs": 1218.1239380000625,
    "elapsedMs": 593.1722210000735,
    "outcome": "success"
  },
  {
    "seq": 2203,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-448",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:07.699Z",
    "offsetMs": 1218.3571500000544,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a562bf7dc327aac81d0d46a2688489725f620531290eb58ff3e1fd06eaf91f07";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2200},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2202},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2203}} as const;
export const projectionSha256 = "67086c3497ad014ead71f638b6b4d364780572965ec330e64182c95fa4ff30a7";
