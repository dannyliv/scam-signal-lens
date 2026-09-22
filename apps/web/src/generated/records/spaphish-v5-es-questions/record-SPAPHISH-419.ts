import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-419",
  "inputSha256": "c26ac34195e8d0c2bfc03c5272b95116ccfd74900c86e86587a16d17c2c1998c",
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
      "end": 57,
      "text": "Pablito - Tienes (1) paquete esperando ser entregado 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 57,
      "end": 106,
      "text": "Usa tu código para rastrearlo y recibirlo ___🚚. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 106,
      "end": 113,
      "text": "ID#7209"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 55,
      "text": "juanita - Tienes (1) paquete esperando ser entregado . "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 55,
      "end": 102,
      "text": "Usa tu código para rastrearlo y recibirlo ___. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 102,
      "end": 109,
      "text": "ID#7209"
    }
  ],
  "passA": {
    "requestSha256": "be6d52e30d93627343b2f4fb3a3e59ba1e9e5997d66bcf4961a8481455369a32",
    "capturedAt": "2026-09-22T03:56:32.360Z",
    "elapsedMs": 617.4746720000403,
    "successfulAttemptElapsedMs": 614.5682619999861,
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
          "noul": 0.13
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.22
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.24
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.11
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.11
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
            "active_request": 0.97,
            "mixed_or_unclear": 0,
            "informational": 0.03
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.18,
            "mixed_or_unknown": 0.07,
            "independently_established": 0,
            "no_sensitive_action": 0.75
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 4949,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "ec52ee518bd1c967be973a94c7d6965e5a79781a97e6938564b73fcea6965a35",
    "capturedAt": "2026-09-22T03:56:32.906Z",
    "elapsedMs": 541.7895080000162,
    "successfulAttemptElapsedMs": 540.1897009999957,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:2": 0.01,
            "subject:1": 0.16,
            "body:2": 0,
            "NONE": 0.62,
            "body:1": 0.2,
            "subject:0": 0.01,
            "body:0": 0
          },
          "confidence": 0.55
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:2": 0,
            "subject:1": 0.08,
            "body:1": 0.06,
            "body:2": 0,
            "NONE": 0.85,
            "subject:0": 0.01,
            "body:0": 0
          },
          "confidence": 0.82
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.93,
            "subject:1": 0.03,
            "body:0": 0,
            "body:1": 0.02,
            "body:2": 0,
            "subject:0": 0.01,
            "subject:2": 0.01
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 1879,
        "output_tokens": 247
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1164.559735000017,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2054,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-419",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:31.744Z",
    "offsetMs": 2.32745199999772
  },
  {
    "seq": 2055,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-419",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:32.359Z",
    "offsetMs": 617.4749549999833,
    "elapsedMs": 614.5682619999861,
    "outcome": "success"
  },
  {
    "seq": 2056,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-419",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:32.365Z",
    "offsetMs": 623.6779439999955
  },
  {
    "seq": 2057,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-419",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:32.906Z",
    "offsetMs": 1164.3070559999906,
    "elapsedMs": 540.1897009999957,
    "outcome": "success"
  },
  {
    "seq": 2058,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-419",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:32.906Z",
    "offsetMs": 1164.6051529999822,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1e0fde3d61744329e64340b066c0cea15125f6145112037667a850736fd38041";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2055},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2057},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2058}} as const;
export const projectionSha256 = "4f459b6e06024baae233958bec2302f1f0030e93fd7fe1f80a01f3066af6f7d8";
