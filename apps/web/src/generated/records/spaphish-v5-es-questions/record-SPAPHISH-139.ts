import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-139",
  "inputSha256": "27ad9bc10f7847b72862dfdef36dcd3ee4c9381cee0dca710f5dbc6d8790733b",
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
    "requestSha256": "aeb1497c2a3e45d110a2a26effa2d0ce8f4a6d1caa46c3f04b5342daf63049fc",
    "capturedAt": "2026-09-22T03:51:00.288Z",
    "elapsedMs": 603.5776269999915,
    "successfulAttemptElapsedMs": 602.242671999993,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.22
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
          "noul": 0.27
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.53
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
          "noul": 0.02
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
            "active_request": 0.12,
            "informational": 0.87,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.82
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.61,
            "mixed_or_unknown": 0.03,
            "no_sensitive_action": 0.33,
            "independently_established": 0.03
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 4916,
        "output_tokens": 351
      }
    }
  },
  "passB": {
    "requestSha256": "67703f3233e353c34b858768a77724804eecc62864c7634159534c7267edebe3",
    "capturedAt": "2026-09-22T03:51:00.914Z",
    "elapsedMs": 624.6714230000216,
    "successfulAttemptElapsedMs": 623.586838999996,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.45,
            "body:0": 0.55
          },
          "confidence": 0.32
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.12,
            "NONE": 0.87,
            "body:0": 0.01
          },
          "confidence": 0.81
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.61,
            "NONE": 0.33,
            "body:0": 0.06
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 1573,
        "output_tokens": 143
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1229.928528999997,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
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
        "status": "none_selected",
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
    "seq": 676,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-139",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:59.685Z",
    "offsetMs": 0.9681130000099074
  },
  {
    "seq": 677,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-139",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:00.287Z",
    "offsetMs": 603.571701000008,
    "elapsedMs": 602.242671999993,
    "outcome": "success"
  },
  {
    "seq": 678,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-139",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:00.290Z",
    "offsetMs": 605.7581910000008
  },
  {
    "seq": 679,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-139",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:00.913Z",
    "offsetMs": 1229.6685109999962,
    "elapsedMs": 623.586838999996,
    "outcome": "success"
  },
  {
    "seq": 680,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-139",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:00.914Z",
    "offsetMs": 1229.9818690000102,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6ad5fcfea0b9ed2a334cbef7d46c7eb0a331db3606debd43974681741d318fde";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":677},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":679},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":680}} as const;
export const projectionSha256 = "cff68aadcb2c40d564c6d04b292a5f677ea3bd2c11deefaae3ef8973cd66560d";
