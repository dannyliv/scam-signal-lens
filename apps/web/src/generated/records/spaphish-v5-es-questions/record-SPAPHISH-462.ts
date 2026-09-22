import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-462",
  "inputSha256": "a1981aa14a08e94adb7f35ffc6a9d3954b66c836b5f1ed860bf27704b5bd0543",
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
      "end": 7,
      "text": "mejorar"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 34,
      "text": "Tengo un trato comercial para ti. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 34,
      "end": 144,
      "text": "Comuníquese con mi correo electrónico personal para obtener más detalles: ricardo.suarez@finanzasprivadas.com\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 144,
      "end": 158,
      "text": "Ricardo Suarez"
    }
  ],
  "passA": {
    "requestSha256": "2477e1fc962d96d1d00186efd5fc5f3ec1f95369fd0c551b8dd698c016a0763c",
    "capturedAt": "2026-09-22T03:57:23.015Z",
    "elapsedMs": 683.5419309999561,
    "successfulAttemptElapsedMs": 681.31294600002,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.39
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.48
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.15
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.1
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.36,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.64,
            "independently_established": 0
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 4917,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ceed7ad3dd5a9616f71bff60e27d06db8b35a0f8b028d0810ee6c446d4477a89",
    "capturedAt": "2026-09-22T03:57:23.541Z",
    "elapsedMs": 524.5159719999647,
    "successfulAttemptElapsedMs": 522.5332959999796,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.2,
            "NONE": 0.52,
            "body:2": 0.09,
            "body:1": 0.19
          },
          "confidence": 0.4
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.38,
            "body:0": 0,
            "body:1": 0.62,
            "body:2": 0
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 1201,
        "output_tokens": 133
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1209.7768490000162,
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
    "seq": 2268,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-462",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:22.333Z",
    "offsetMs": 1.8576640000101179
  },
  {
    "seq": 2269,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-462",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:23.015Z",
    "offsetMs": 683.5422329999274,
    "elapsedMs": 681.31294600002,
    "outcome": "success"
  },
  {
    "seq": 2270,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-462",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:23.018Z",
    "offsetMs": 686.563329000026
  },
  {
    "seq": 2271,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-462",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:23.541Z",
    "offsetMs": 1209.5566269999836,
    "elapsedMs": 522.5332959999796,
    "outcome": "success"
  },
  {
    "seq": 2272,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-462",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:23.541Z",
    "offsetMs": 1209.8214669999434,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d825ee85778ef854ac2ce2e65b5e9d2c1001d3c4a545b7456ae4ba0a07989388";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2269},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2271},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2272}} as const;
export const projectionSha256 = "3943e76c1a62456dd7b8b0328f0350765a81be6ca01efcb69f5b305ee81b29ab";
