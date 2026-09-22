import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-248",
  "inputSha256": "97292837cdc30b12e183e68dc17f25816e779a3d16e072815c1a4f4cc7d379a2",
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
      "end": 55,
      "text": "Su cuenta de Zoom ha sido suspendida - ACCIÓN REQUERIDA"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 42,
      "text": "Estimado ricardo.lopez@empresa-secura.com\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 42,
      "end": 171,
      "text": ": Esta es una alerta para informarle que su cuenta de Zoom vinculada con la dirección de correo ricardo.lopez@empresa-secura.com\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 171,
      "end": 206,
      "text": " ha sido suspendida temporalmente. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 206,
      "end": 340,
      "text": "Para reactivar su cuenta, debe hacer clic en el siguiente enlace y seguir las instrucciones. https://www.verificar-zoom.com/reactivar\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 340,
      "end": 392,
      "text": " Esperamos solucionar el problema lo antes posible. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 392,
      "end": 449,
      "text": "Si tiene preguntas, no dude en comunicarse con nosotros. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 449,
      "end": 458,
      "text": "Gracias. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 458,
      "end": 462,
      "text": "Zoom"
    }
  ],
  "passA": {
    "requestSha256": "e82abc4ec4a81c95fca1031de80c9473ec306911afc0ca4dfcc2aeeacd69599e",
    "capturedAt": "2026-09-22T03:53:06.999Z",
    "elapsedMs": 634.5451639999519,
    "successfulAttemptElapsedMs": 633.4206379999523,
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
          "noul": 0.25
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
          "noul": 0.68
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.32
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
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
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0.93,
            "no_sensitive_action": 0.07,
            "independently_established": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 5006,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "d3e253afa7359d630d81b8dc2ac6617b261791a8418e0b5095169b85a5b4f281",
    "capturedAt": "2026-09-22T03:53:07.675Z",
    "elapsedMs": 674.7020790000097,
    "successfulAttemptElapsedMs": 673.1231329999864,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:3": 0.14,
            "body:4": 0,
            "body:7": 0,
            "body:0": 0,
            "NONE": 0.86,
            "body:5": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.84
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:3": 0.24,
            "body:4": 0,
            "body:7": 0,
            "subject:0": 0,
            "NONE": 0.76,
            "body:5": 0,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0
          },
          "confidence": 0.72
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:6": 0,
            "body:3": 0.19,
            "body:4": 0,
            "body:7": 0,
            "subject:0": 0.76,
            "NONE": 0.03,
            "body:5": 0,
            "body:2": 0.02,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.72
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:6": 0.01,
            "body:3": 0.11,
            "body:7": 0.54,
            "body:4": 0.01,
            "subject:0": 0.01,
            "NONE": 0.02,
            "body:5": 0.11,
            "body:2": 0.01,
            "body:0": 0,
            "body:1": 0.18
          },
          "confidence": 0.5
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:3": 0.22,
            "body:7": 0,
            "body:4": 0,
            "body:0": 0,
            "NONE": 0.75,
            "body:5": 0.03,
            "body:1": 0,
            "body:2": 0,
            "subject:0": 0
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 3434,
        "output_tokens": 549
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1310.842348999984,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "none_selected",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "none_selected",
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
    "seq": 1209,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-248",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:06.365Z",
    "offsetMs": 0.8266610000282526
  },
  {
    "seq": 1210,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-248",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:06.999Z",
    "offsetMs": 634.5448200000101,
    "elapsedMs": 633.4206379999523,
    "outcome": "success"
  },
  {
    "seq": 1211,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-248",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:07.001Z",
    "offsetMs": 636.9402279999922
  },
  {
    "seq": 1212,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-248",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:07.675Z",
    "offsetMs": 1310.5628600000055,
    "elapsedMs": 673.1231329999864,
    "outcome": "success"
  },
  {
    "seq": 1213,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-248",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:07.675Z",
    "offsetMs": 1310.8880329999956,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "213feddd9b9b6b28a790e6f8ceb51b9216aac3c7cd6224e854ebe39426e14de0";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1210},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1212},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1213}} as const;
export const projectionSha256 = "848014041a39b8708fe1a82107d0abb1c5b0b43f1a88a8e078ac61e8aa9380c2";
