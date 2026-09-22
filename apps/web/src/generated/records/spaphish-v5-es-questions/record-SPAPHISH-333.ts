import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-333",
  "inputSha256": "51230a6b7dfe0867f4a6a2937c0596e135671331293e00aeaa349471f015bbba",
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
      "end": 110,
      "text": "___¡Hemos-bloqueado-tu cuenta!---El-5__de___may__de___2025, tus--fotos-y videos-serán-eliminados.--¡Haz--algo!"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 110,
      "end": 113,
      "text": "___"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 110,
      "text": "___¡Hemos-bloqueado-tu cuenta!---El-5__de___may__de___2025, tus--fotos-y videos-serán-eliminados.--¡Haz--algo!"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 110,
      "end": 113,
      "text": "___"
    }
  ],
  "passA": {
    "requestSha256": "0423be60b5538866f2b8e61f7acced37fff539d9fbe4330d62f83350735cfc24",
    "capturedAt": "2026-09-22T03:54:50.240Z",
    "elapsedMs": 650.4718240000075,
    "successfulAttemptElapsedMs": 649.3651620000019,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.94
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.52
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.36
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.01,
            "active_request": 0.96,
            "informational": 0.03
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.89,
            "sender_supplied": 0.03,
            "independently_established": 0,
            "mixed_or_unknown": 0.08
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 4964,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "2fed84683a9a2c5c054a2db5021cf211fccf2146cede3358ceac6064cdb4a1ba",
    "capturedAt": "2026-09-22T03:54:50.793Z",
    "elapsedMs": 551.4580189999542,
    "successfulAttemptElapsedMs": 550.1451109999907,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.68,
            "subject:1": 0,
            "NONE": 0.01,
            "body:1": 0,
            "body:0": 0.31
          },
          "confidence": 0.6
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.16,
            "subject:1": 0,
            "NONE": 0.64,
            "body:1": 0,
            "body:0": 0.2
          },
          "confidence": 0.54
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.03,
            "subject:1": 0,
            "body:0": 0.03,
            "body:1": 0,
            "NONE": 0.9400000000000001
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 1814,
        "output_tokens": 196
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1203.473845999979,
  "derived": {
    "concern": "verify_first",
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
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 1627,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-333",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:49.590Z",
    "offsetMs": 0.89311699999962
  },
  {
    "seq": 1628,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-333",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:50.240Z",
    "offsetMs": 650.4717710000114,
    "elapsedMs": 649.3651620000019,
    "outcome": "success"
  },
  {
    "seq": 1629,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-333",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:50.242Z",
    "offsetMs": 652.7781459999969
  },
  {
    "seq": 1630,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-333",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:50.792Z",
    "offsetMs": 1203.2389809999731,
    "elapsedMs": 550.1451109999907,
    "outcome": "success"
  },
  {
    "seq": 1631,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-333",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:50.793Z",
    "offsetMs": 1203.5147400000133,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "89b0a4e79d9d67488c7e5fc5a094988dd7e98278a434a6b8210518049cb6d61e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1628},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1630},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1631}} as const;
export const projectionSha256 = "6d627c823cfc397daf52246a943521a30fc9660da85009f6496252bddbc847fa";
