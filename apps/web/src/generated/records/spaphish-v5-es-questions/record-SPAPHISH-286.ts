import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-286",
  "inputSha256": "500cdf11630c5cb72480b1273f930b8c8325fb706c9ab2e56b90c07e47759abb",
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
      "end": 48,
      "text": "Protocolo de actuación con perspectiva de género"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 67,
      "text": "Compartimos con la comunidad del MyOwn en archivo anexo de PDF el \n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 67,
      "end": 141,
      "text": "*Protocolo de actuación con perspectiva de género en sede administrativa \n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 141,
      "end": 202,
      "text": "en la investigación y substanciación de quejas y denuncias*.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 202,
      "end": 203,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 203,
      "end": 267,
      "text": "Reiteramos la invitación a consultar este documento importante.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 267,
      "end": 268,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 268,
      "end": 269,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 269,
      "end": 270,
      "text": "\n"
    }
  ],
  "passA": {
    "requestSha256": "26292f320eb95d2e8e9704bc0168cf4712e8c9528c329d973af5d34c1f57d93d",
    "capturedAt": "2026-09-22T03:53:54.061Z",
    "elapsedMs": 615.4210699999821,
    "successfulAttemptElapsedMs": 614.3938809999963,
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.72
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.5,
            "mixed_or_unclear": 0,
            "active_request": 0.5,
            "educational_or_quoted": 0
          },
          "confidence": 0.33
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1,
            "sender_supplied": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 4947,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "21a9aa88592ce99b440823c60cef2e6e0c7b0005cc6a96cd38ee75907fa83e84",
    "capturedAt": "2026-09-22T03:53:54.581Z",
    "elapsedMs": 518.6885129999719,
    "successfulAttemptElapsedMs": 516.9716379999882,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:7": 0,
            "subject:0": 0.01,
            "body:4": 0.13,
            "body:5": 0,
            "NONE": 0.36,
            "body:0": 0.43,
            "body:3": 0.01,
            "body:6": 0,
            "body:1": 0.03,
            "body:2": 0.03
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 891,
        "output_tokens": 113
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1136.0082419999526,
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
    "seq": 1396,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-286",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:53.446Z",
    "offsetMs": 0.78785899997456
  },
  {
    "seq": 1397,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-286",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:54.060Z",
    "offsetMs": 615.4211279999581,
    "elapsedMs": 614.3938809999963,
    "outcome": "success"
  },
  {
    "seq": 1398,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-286",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:54.063Z",
    "offsetMs": 618.2306289999979
  },
  {
    "seq": 1399,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-286",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:54.580Z",
    "offsetMs": 1135.6434979999904,
    "elapsedMs": 516.9716379999882,
    "outcome": "success"
  },
  {
    "seq": 1400,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-286",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:54.581Z",
    "offsetMs": 1136.05053399998,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0bbd4ff3cb6b7ea7f5b71fe37a8a344e993b8637afd7db5a16c27899f7525b95";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1397},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1399},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1400}} as const;
export const projectionSha256 = "16fc7457f24d3f3e6d75df15c2284102e68d56f6213b23428ca9ca25bc710a3b";
