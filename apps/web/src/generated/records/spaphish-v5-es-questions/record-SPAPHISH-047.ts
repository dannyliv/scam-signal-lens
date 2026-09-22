import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-047",
  "inputSha256": "d4a7035d2b6d7fcf309cd87a67c8991e4fd756296baaf3123e819b33356b8139",
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
      "end": 66,
      "text": "Ezequiela Miguelina 📦 Tu paquete está esperando tu confirmación. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 66,
      "end": 68,
      "text": "🚚"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 77,
      "text": "FedEx ® 11-17-2025 Su paquete fue schuduled para la entrega hoy querido Sra. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 77,
      "end": 285,
      "text": "López, Por favor, tenga en cuenta que su envío con el número de seguimiento mencionado a continuación requiere más información para propósitos de liquidación de Aduanas Consulte el anexo para más detalles. ! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 285,
      "end": 473,
      "text": "Programadas en FedEx Centro ➡ Número de seguimiento 998877665544 Número de copia haz clic aquí para abrir este correo electrónico en su navegador. mejores deseos FedEx͏® E͏n͏spaña centro. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 473,
      "end": 611,
      "text": "Director de puesta Para ser eliminado de nuestra lista Haz clic aquí, o escribe a: 4500 Valley View Ln, Ste 200 #155, Grapevine, TX, 76051"
    }
  ],
  "passA": {
    "requestSha256": "f508d4786b4128d30fe57f42961b024383b13037160e6e4aa7fa0c2040d84be8",
    "capturedAt": "2026-09-22T03:49:07.886Z",
    "elapsedMs": 638.076012999998,
    "successfulAttemptElapsedMs": 636.8029070000048,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.56
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.13
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.76
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.45
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.23
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.77,
            "no_sensitive_action": 0.2,
            "mixed_or_unknown": 0.03,
            "independently_established": 0
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 5075,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "65d069003e7dd632fb6bb295523500e716a59cacb2bf137fa6e662d229dfabc5",
    "capturedAt": "2026-09-22T03:49:08.655Z",
    "elapsedMs": 766.7595509999956,
    "successfulAttemptElapsedMs": 765.3281730000017,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:3": 0,
            "NONE": 0.09,
            "body:1": 0.9,
            "body:0": 0,
            "subject:0": 0,
            "subject:1": 0,
            "body:2": 0.01
          },
          "confidence": 0.88
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:3": 0,
            "body:1": 0.48,
            "NONE": 0.07,
            "body:0": 0.24,
            "subject:0": 0.2,
            "subject:1": 0,
            "body:2": 0.01
          },
          "confidence": 0.38
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:1": 0,
            "body:1": 0.23,
            "NONE": 0.03,
            "body:0": 0.21,
            "subject:0": 0,
            "body:3": 0.41,
            "body:2": 0.12
          },
          "confidence": 0.31
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.01,
            "NONE": 0.59,
            "body:1": 0.18,
            "body:0": 0,
            "subject:0": 0,
            "subject:1": 0,
            "body:2": 0.22
          },
          "confidence": 0.51
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0,
            "body:1": 0.38,
            "NONE": 0.62,
            "body:0": 0,
            "subject:0": 0,
            "subject:1": 0,
            "body:2": 0
          },
          "confidence": 0.54
        }
      },
      "usage": {
        "input_tokens": 3632,
        "output_tokens": 419
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1406.7157300000035,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "low_confidence",
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
        "status": "low_confidence",
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
    "seq": 227,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-047",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:07.249Z",
    "offsetMs": 0.7050710000039544
  },
  {
    "seq": 228,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-047",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:07.886Z",
    "offsetMs": 638.0792809999984,
    "elapsedMs": 636.8029070000048,
    "outcome": "success"
  },
  {
    "seq": 229,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-047",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:07.888Z",
    "offsetMs": 640.4388770000005
  },
  {
    "seq": 230,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-047",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:08.654Z",
    "offsetMs": 1406.396722999998,
    "elapsedMs": 765.3281730000017,
    "outcome": "success"
  },
  {
    "seq": 231,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-047",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:08.655Z",
    "offsetMs": 1406.7642290000003,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e90eb74d40d5d9eff8dc1c0d95a8cc2451ac092b48f4e3dbcc922061ed62bdac";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":228},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":230},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":231}} as const;
export const projectionSha256 = "f4460e8b98f13221199fa6dfc4ef38a12af8feadf087a270b716025261858295";
