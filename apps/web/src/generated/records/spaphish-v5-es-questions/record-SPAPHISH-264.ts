import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-264",
  "inputSha256": "b8d96642e353fd50c09d7617f5845dcfe03f01d334971d52d4fbb6355f167b6f",
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
      "end": 15,
      "text": "Cita Registrada"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 26,
      "text": "Apreciable contribuyente. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 26,
      "end": 78,
      "text": "Te informamos que tu cita se ha agendado con éxito. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 78,
      "end": 315,
      "text": "Te sugerimos tener a la mano la información contenida en el acuse que se adjunta; en él podrás identificar el día, la hora, el servicio y la Oficina de Servicios al Ciudadano (OSC) o Centro de Soporte Tributario (CST) que seleccionaste. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 315,
      "end": 432,
      "text": "Si necesitas consultarla o cancelarla ingresa aquí con tu Clave de Identificación Fiscal (CIF) y correo electrónico. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 432,
      "end": 592,
      "text": "Si eres persona física, genera o renueva tu Clave de Acceso Única o renueva tu Firma Electrónica Fiscal (FEF) (caduca no mayor a un año) a través de ID Fiscal. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 592,
      "end": 634,
      "text": "¡No necesitas acudir a nuestras oficinas! "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 634,
      "end": 705,
      "text": "AgendaFiscal a tu alcance Atentamente: Agencia de Recaudación Pública. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 705,
      "end": 767,
      "text": "\"Favor de no responder a este mensaje, es un envío automático\""
    }
  ],
  "passA": {
    "requestSha256": "f22640d76b18f22ea35a4e72bf5374b16c46e99fac5945dea95b56c8be82155b",
    "capturedAt": "2026-09-22T03:53:27.879Z",
    "elapsedMs": 653.4204130000435,
    "successfulAttemptElapsedMs": 652.2539959999849,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.17
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.46
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
          "noul": 0.12
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.26
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
          "noul": 0.22
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.34,
            "mixed_or_unclear": 0.01,
            "informational": 0.65,
            "educational_or_quoted": 0
          },
          "confidence": 0.54
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.47,
            "independently_established": 0.01,
            "mixed_or_unknown": 0.04,
            "sender_supplied": 0.48
          },
          "confidence": 0.31
        }
      },
      "usage": {
        "input_tokens": 5085,
        "output_tokens": 351
      }
    }
  },
  "passB": {
    "requestSha256": "16c5a3fbcfeced123cb5cf8df1e73ea597a5e4dff25d600b0eca7fcafed5ae26",
    "capturedAt": "2026-09-22T03:53:28.420Z",
    "elapsedMs": 538.7539170000236,
    "successfulAttemptElapsedMs": 537.4362039999687,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:7": 0,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0,
            "body:3": 0.75,
            "body:6": 0,
            "NONE": 0.21,
            "body:4": 0.04,
            "body:5": 0,
            "subject:0": 0
          },
          "confidence": 0.72
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:1": 0.02,
            "body:7": 0,
            "body:0": 0.03,
            "body:2": 0.01,
            "body:3": 0.01,
            "body:6": 0.86,
            "NONE": 0.03,
            "body:4": 0.04,
            "body:5": 0,
            "subject:0": 0
          },
          "confidence": 0.84
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0.11,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0,
            "body:3": 0.09,
            "body:6": 0,
            "NONE": 0.62,
            "body:4": 0.01,
            "body:5": 0.17,
            "subject:0": 0
          },
          "confidence": 0.57
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:7": 0.01,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0.01,
            "body:3": 0.53,
            "body:6": 0,
            "NONE": 0.2,
            "body:4": 0.23,
            "body:5": 0.02,
            "subject:0": 0
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 3224,
        "output_tokens": 445
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1194.0547450000304,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:3"
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
        "segmentId": "body:6"
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
        "status": "low_confidence",
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
    "seq": 1289,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-264",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:27.226Z",
    "offsetMs": 0.9034380000084639
  },
  {
    "seq": 1290,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-264",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:27.879Z",
    "offsetMs": 653.419870999991,
    "elapsedMs": 652.2539959999849,
    "outcome": "success"
  },
  {
    "seq": 1291,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-264",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:27.882Z",
    "offsetMs": 655.9367889999994
  },
  {
    "seq": 1292,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-264",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:28.419Z",
    "offsetMs": 1193.7858039999846,
    "elapsedMs": 537.4362039999687,
    "outcome": "success"
  },
  {
    "seq": 1293,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-264",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:28.420Z",
    "offsetMs": 1194.1011890000082,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f2c921bbb971bb2a14ef7344609af8d14ead363558d9a05a4aa4dd685f503f84";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1290},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1292},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1293}} as const;
export const projectionSha256 = "4640637e356f752ff28e57aca1d5c6b9b453fe6a874bc447b3fab802c8b63c41";
