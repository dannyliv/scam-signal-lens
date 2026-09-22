import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-214",
  "inputSha256": "2d2b6da8c8bfe5204e13e3b789e80a52cd55774fe17cb3d2187713a15ffd0177",
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
      "end": 25,
      "text": "Sobre arreglo de DELL XPS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 15,
      "text": "Buenas tardes:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 15,
      "end": 16,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 16,
      "end": 216,
      "text": "Tengo una TechPro Laptop 14 modelo 7000 a la que los botones del mouse integrado no le funcionan, como si hubiesen perdido el resorte que luego de hacer click, subirían los botones al estado inicial. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 216,
      "end": 261,
      "text": "Quería saber costos y proceso de reparación.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 261,
      "end": 262,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 262,
      "end": 290,
      "text": "Los datos de la laptop son:\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 290,
      "end": 291,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 291,
      "end": 321,
      "text": "Modelo TechPro Laptop 14-7000\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 321,
      "end": 322,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 322,
      "end": 352,
      "text": "Etiqueta de servicio: 543B2R7\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 352,
      "end": 353,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 353,
      "end": 417,
      "text": "Muchas gracias, y quedo atento a sus comentarios e indicaciones."
    }
  ],
  "passA": {
    "requestSha256": "6da9b5e8fd9b84c04b75474d2cd53493fd2b4ee696447fe7908e67694580079f",
    "capturedAt": "2026-09-22T03:52:27.032Z",
    "elapsedMs": 758.2328709999856,
    "successfulAttemptElapsedMs": 757.042878999986,
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
          "noul": 0.04
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
          "noul": 0.06
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 5005,
        "output_tokens": 348
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 759.744486999989,
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
        "status": "not_requested",
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
    "seq": 1042,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-214",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:26.274Z",
    "offsetMs": 0.9062799999956042
  },
  {
    "seq": 1043,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-214",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:27.032Z",
    "offsetMs": 758.2324920000101,
    "elapsedMs": 757.042878999986,
    "outcome": "success"
  },
  {
    "seq": 1044,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-214",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-22T03:52:27.033Z",
    "offsetMs": 759.676118000003,
    "reasonCode": "schema_error"
  },
  {
    "seq": 1045,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-214",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:27.033Z",
    "offsetMs": 759.7706039999903,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8025f948f167dcdcb6705eed53e6a0564cb4b84fbee7d612f21d516170bfc648";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1043},"passB":null,"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1045}} as const;
export const projectionSha256 = "fbfcf3397869b1d4d1d12b8c495be19591471e7e0c8daf4e35d4d382a99b15bf";
