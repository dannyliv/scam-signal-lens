import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-383",
  "inputSha256": "f431be5d1306847df36712a9390c4cc16ab30a3bff5563e9e5f7272b242e6592",
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
      "end": 64,
      "text": "Memorias Seminario Trastornos del Neurodesarrollo - DIAPOSITIVAS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 20,
      "text": "Estimado Estudiante\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 20,
      "end": 35,
      "text": "cordial saludo\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 35,
      "end": 36,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 36,
      "end": 107,
      "text": "envió memorias seminario trastornos del neurodesarrollo - DIAPOSITIVAS\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 107,
      "end": 108,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 108,
      "end": 111,
      "text": "--\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 111,
      "end": 125,
      "text": "Cordialmente,\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 125,
      "end": 126,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 126,
      "end": 140,
      "text": "Julián Corral\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 140,
      "end": 163,
      "text": "Asistente de Dirección\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 163,
      "end": 196,
      "text": "Fundación ProDesarrollo Integral\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 196,
      "end": 217,
      "text": "Pensando en Tu Éxito\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 217,
      "end": 263,
      "text": "WhatsApp 300 405 3377 → WhatsApp 322 880 4412\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 263,
      "end": 301,
      "text": "http://prodesarrollo-integral.example/"
    }
  ],
  "passA": {
    "requestSha256": "4c00429096e7a799c09c4506a59f61fd634572a0a4b408786e0fdf25b8231aa8",
    "capturedAt": "2026-09-22T03:55:51.157Z",
    "elapsedMs": 616.8798090000055,
    "successfulAttemptElapsedMs": 615.2063879999914,
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
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.1
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0.98,
            "active_request": 0.02,
            "mixed_or_unclear": 0
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.89,
            "sender_supplied": 0.11,
            "independently_established": 0
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 5014,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "0ad7953e16b7c9dd41e51f172f15d4b9cf470582bf0d515efa4ac31513368395",
    "capturedAt": "2026-09-22T03:55:51.684Z",
    "elapsedMs": 524.9508969999733,
    "successfulAttemptElapsedMs": 523.5845969999791,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:11": 0,
            "body:5": 0,
            "NONE": 0.05,
            "body:12": 0,
            "body:2": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:4": 0,
            "body:9": 0.88,
            "body:13": 0,
            "body:8": 0.01,
            "body:7": 0,
            "body:10": 0.05,
            "body:3": 0.01,
            "body:6": 0
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 1106,
        "output_tokens": 171
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1144.1927149999538,
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
        "segmentId": "body:9"
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
    "seq": 1876,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-383",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:50.542Z",
    "offsetMs": 1.3538579999585636
  },
  {
    "seq": 1877,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-383",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:51.157Z",
    "offsetMs": 616.8822439999785,
    "elapsedMs": 615.2063879999914,
    "outcome": "success"
  },
  {
    "seq": 1878,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-383",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:51.160Z",
    "offsetMs": 620.0257039999706
  },
  {
    "seq": 1879,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-383",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:51.684Z",
    "offsetMs": 1143.9641009999905,
    "elapsedMs": 523.5845969999791,
    "outcome": "success"
  },
  {
    "seq": 1880,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-383",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:51.684Z",
    "offsetMs": 1144.241098999977,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a56c96be3134bc28053716a5dcaf71d8b3d798667c2e63f497d58d7ea35d1cbf";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1877},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1879},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1880}} as const;
export const projectionSha256 = "62a2d026baf8c39a3fd49fb4e5045330c3263f0c9a7fe921e963b90f9e2b9f99";
