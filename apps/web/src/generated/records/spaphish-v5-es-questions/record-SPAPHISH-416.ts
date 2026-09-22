import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-416",
  "inputSha256": "f2df9b769b44d7a23c13235b1f449129ab3a891995980c94729a8c8b0604d080",
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
      "end": 27,
      "text": "carta de constancia laboral"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 49,
      "text": "Esto es lo que me hace falta que me llenen allá. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 49,
      "end": 128,
      "text": "Puede ser cualquier Carlos, Andrea, Fernando... el que más accesible tú creas. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 128,
      "end": 232,
      "text": "Lléname los datos de contacto del Jefe Supremo que firme eso y me la mandas escaneada chula para atrás. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 232,
      "end": 347,
      "text": "Si hay algún formato de de carga en hojas membretadas, tanto mejor... y si le ponen un cuño uff más mejor todavía.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 347,
      "end": 348,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 348,
      "end": 361,
      "text": "Gracias viejo"
    }
  ],
  "passA": {
    "requestSha256": "56c78d231b4e73ee3c58c096b51ef077641782c956b2fc87080f07c4770be68b",
    "capturedAt": "2026-09-22T03:56:28.932Z",
    "elapsedMs": 603.2185670000035,
    "successfulAttemptElapsedMs": 601.6467810000177,
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
          "noul": 0.25
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.48
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.45
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.01,
            "sender_supplied": 0.34,
            "no_sensitive_action": 0.6,
            "mixed_or_unknown": 0.05
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 4972,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "49ad2f44b260108d7ddc89f297de9f6da2606763e70a24f0826b00c8da8b83d0",
    "capturedAt": "2026-09-22T03:56:29.439Z",
    "elapsedMs": 505.44320300000254,
    "successfulAttemptElapsedMs": 502.57277699996484,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0,
            "subject:0": 0,
            "body:2": 0.43,
            "body:1": 0,
            "NONE": 0.56,
            "body:0": 0,
            "body:5": 0,
            "body:3": 0.01
          },
          "confidence": 0.49
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:4": 0,
            "subject:0": 0.34,
            "body:2": 0.45,
            "NONE": 0.13,
            "body:5": 0,
            "body:0": 0.01,
            "body:1": 0.02,
            "body:3": 0.05
          },
          "confidence": 0.38
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:4": 0,
            "subject:0": 0,
            "body:2": 0.1,
            "body:1": 0.56,
            "NONE": 0.29,
            "body:0": 0.01,
            "body:5": 0,
            "body:3": 0.04
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 2007,
        "output_tokens": 278
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1110.458187000011,
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
        "status": "low_confidence",
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
        "status": "low_confidence",
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
    "seq": 2039,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-416",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:28.330Z",
    "offsetMs": 1.234327000041958
  },
  {
    "seq": 2040,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-416",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:28.932Z",
    "offsetMs": 603.2185630000313,
    "elapsedMs": 601.6467810000177,
    "outcome": "success"
  },
  {
    "seq": 2041,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-416",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:28.935Z",
    "offsetMs": 606.8339710000437
  },
  {
    "seq": 2042,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-416",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:29.439Z",
    "offsetMs": 1110.1790010000113,
    "elapsedMs": 502.57277699996484,
    "outcome": "success"
  },
  {
    "seq": 2043,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-416",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:29.439Z",
    "offsetMs": 1110.5051450000028,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ba5a893a4cba35d7952582795cfa5253a64c27338c61f972659c60f49ac7699c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2040},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2042},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2043}} as const;
export const projectionSha256 = "357eb72c1950ccf6e58783658b39aecb78efde15ae3e881fe8cc101f0696739d";
