import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-138",
  "inputSha256": "ae6173ebf955cf6ff7b53e7d297efa0b6771625b19417e21fdc6a145789fb53b",
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
      "end": 74,
      "text": "el equipo de Spo­­­­­­­­­­­­­­­­­tif­­­­­­­­­­­­­­­­­y­­­­­­­­­­­­­­­­­  !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 74,
      "end": 80,
      "text": "#bL0OL"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 34,
      "text": "¡Un pequeño problema con tu pago! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 34,
      "end": 88,
      "text": "Hola, Notamos que no pudimos procesar tu último pago. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 88,
      "end": 119,
      "text": "No te preocupes, a veces pasa. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 119,
      "end": 281,
      "text": "Para asegurarnos de que sigas disfrutando de Spotify Premium Duo sin interrupciones, te invitamos a actualizar tu método de pago dentro de las próximas 48 horas. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 281,
      "end": 414,
      "text": "Actualizar ahora <http://naikdow5d.sepi-pisa.it> Con cariño, el equipo de Spo­­­­­­­­­­­­­­­­­tif­­­­­­­­­­­­­­­­­y­­­­­­­­­­­­­­­­­ "
    }
  ],
  "passA": {
    "requestSha256": "0ba8af05bd304c900be8963fb0e3e03187e03fed97884030418ea3ab86d095b5",
    "capturedAt": "2026-09-22T03:50:59.068Z",
    "elapsedMs": 571.4384480000008,
    "successfulAttemptElapsedMs": 570.3453529999824,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.87
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.52
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.93
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.33
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.14
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 1,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5093,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "82c5d802babd9bcb26544ef6e377d7af394fcc7b859dedc56748cd5f5c8acc6e",
    "capturedAt": "2026-09-22T03:50:59.682Z",
    "elapsedMs": 612.6833819999883,
    "successfulAttemptElapsedMs": 611.9156300000031,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0,
            "subject:1": 0,
            "subject:0": 0,
            "body:4": 0.7,
            "NONE": 0,
            "body:3": 0.3,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.65
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0,
            "subject:1": 0,
            "subject:0": 0,
            "body:4": 0.2,
            "NONE": 0.34,
            "body:3": 0.46,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.37
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0,
            "subject:1": 0,
            "subject:0": 0,
            "body:4": 0.01,
            "NONE": 0,
            "body:3": 0.99,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0,
            "subject:1": 0,
            "subject:0": 0.29,
            "body:4": 0.53,
            "NONE": 0.01,
            "body:3": 0.04,
            "body:1": 0.13,
            "body:0": 0
          },
          "confidence": 0.45
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "subject:1": 0,
            "subject:0": 0,
            "body:4": 0.36,
            "NONE": 0.55,
            "body:3": 0.09,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 3783,
        "output_tokens": 460
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1186.0675250000204,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:4"
      },
      "payment_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:3"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 671,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-138",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:58.497Z",
    "offsetMs": 0.8886880000063684
  },
  {
    "seq": 672,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-138",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:59.067Z",
    "offsetMs": 571.4388020000188,
    "elapsedMs": 570.3453529999824,
    "outcome": "success"
  },
  {
    "seq": 673,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-138",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:59.069Z",
    "offsetMs": 573.5983380000107
  },
  {
    "seq": 674,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-138",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:59.682Z",
    "offsetMs": 1185.7900570000056,
    "elapsedMs": 611.9156300000031,
    "outcome": "success"
  },
  {
    "seq": 675,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-138",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:59.682Z",
    "offsetMs": 1186.1127940000151,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "30f9126f0b13e917972577e1a774357fdb65e6f5bf6dcbc95b520f5ff8d25974";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":672},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":674},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":675}} as const;
export const projectionSha256 = "88d9c0509b4c02b0afef857aaffd777030a584ec272212c9dc7977e8d6ef672f";
