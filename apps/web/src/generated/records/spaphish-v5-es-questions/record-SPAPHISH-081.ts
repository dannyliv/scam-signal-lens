import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-081",
  "inputSha256": "2456e8a3ecf016c942c494e5871fe19d403172d959617ed0db3250a9d7fe2975",
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
      "end": 39,
      "text": "Cotización Laboratorio Médico del Chopo"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 126,
      "text": "Adjunto al presente correo encontrará la cotización solicitada al Centro de Información de Laboratorio Clínico Santa Aurelia. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 126,
      "end": 275,
      "text": "Es importante que el día que acuda a nuestra sucursal lleve consigo el número de cotización y siga las instrucciones de preparación para su estudio. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 275,
      "end": 382,
      "text": "Consulte las promociones que Laboratorio Clínico Santa Aurelia tiene para usted en www.santaaurelia.com.mx\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 382,
      "end": 413,
      "text": " Porque tu salud es lo primero."
    }
  ],
  "passA": {
    "requestSha256": "81f5b41ffcbc732ec81b44827ad17a032ca2cb179ef8ba4c40cc04532b8123f4",
    "capturedAt": "2026-09-22T03:49:48.878Z",
    "elapsedMs": 633.6589949999907,
    "successfulAttemptElapsedMs": 632.9670929999993,
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
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.09
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.81
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.39
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
            "active_request": 0.83,
            "educational_or_quoted": 0,
            "informational": 0.17
          },
          "confidence": 0.76
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.88,
            "sender_supplied": 0.11,
            "mixed_or_unknown": 0,
            "independently_established": 0.01
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 4982,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "7ec422f4ff3ef6788bdcbcc31e8ed3d6f605ec186de432928790e7b5ad05f25f",
    "capturedAt": "2026-09-22T03:49:49.407Z",
    "elapsedMs": 527.8308359999937,
    "successfulAttemptElapsedMs": 527.194743,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.17,
            "body:0": 0.52,
            "subject:0": 0.02,
            "body:1": 0.26,
            "body:2": 0.02,
            "body:3": 0.01
          },
          "confidence": 0.44
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:3": 0,
            "body:0": 0.01,
            "subject:0": 0,
            "body:1": 0.65,
            "body:2": 0.16,
            "NONE": 0.18
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 1428,
        "output_tokens": 154
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1162.838785,
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
        "status": "low_confidence",
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
    "seq": 394,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-081",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:48.245Z",
    "offsetMs": 0.47243100000196137
  },
  {
    "seq": 395,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-081",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:48.878Z",
    "offsetMs": 633.6592990000063,
    "elapsedMs": 632.9670929999993,
    "outcome": "success"
  },
  {
    "seq": 396,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-081",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:48.879Z",
    "offsetMs": 635.1669350000011
  },
  {
    "seq": 397,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-081",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:49.407Z",
    "offsetMs": 1162.6427209999965,
    "elapsedMs": 527.194743,
    "outcome": "success"
  },
  {
    "seq": 398,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-081",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:49.407Z",
    "offsetMs": 1162.8810320000048,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "103f0ee4cc5c403ddee1e05117bd6d4fdba6cc72324a4adaf3f191e87ac3b077";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":395},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":397},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":398}} as const;
export const projectionSha256 = "7b7b03265a06761f61953bf43946769a439e9e8f5888cbe89765a2d9e6bca2c2";
