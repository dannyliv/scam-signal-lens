import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-021",
  "inputSha256": "7ee4de763d9bda516681494af162f92d271eb0ea030a400ca5797aceb9334068",
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
      "end": 47,
      "text": "ÚLTIMA ALERTA: ¡TODAS TUS FOTOS SERÁN BORRADAS!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 205,
      "text": "iCloud ® No se pudo intentar realizar el pago al renovar su Suscripción de almacenamiento en la nube 0 GB 48.9GB /50 GB No pudimos renovar su almacenamiento de iCloud ¡Tus fotos y videos serán eliminados! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 205,
      "end": 271,
      "text": "Tu método de pago ha caducado: ¡Actualiza tu información de pago! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 271,
      "end": 903,
      "text": "Si no tienes suficiente espacio en iCloud, puedes actualizar el plan de almacenamiento LLENA Detalles del pedido: ID de suscripción : 1122334 Producto: Espacio iCloud Fecha de caducidad: 01 Enero 2028 Sin espacio en iCloud, es posible que no pueda almacenar todos sus datos y archivos en el servicio de sincronización de iCloud proporcionado por Apple, que permite a los usuarios almacenar sus datos, como fotos, vídeos, documentos y más, en los servidores de Apple y puede acceder a ellos desde cualquier dispositivo de usuario Actualizar mi pago El equipo de iCloud El Equipo iCloud iCloud es un servicio proporcionado por Apple. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 903,
      "end": 1121,
      "text": "Darse de baja Derechos de autor 2028 El anunciante no gestiona su suscripción Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 999 Sur Calle Tulipanes Ste 555#1010, Pinecrest, FL, 33156"
    }
  ],
  "passA": {
    "requestSha256": "3d0251bf87052a83a1707d915279d5146d13d8e4d92ad0f7b278e1ede3124fa1",
    "capturedAt": "2026-09-22T03:48:35.418Z",
    "elapsedMs": 726.7259840000006,
    "successfulAttemptElapsedMs": 725.9919320000008,
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
          "noul": 0.83
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.48
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.91
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.37
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.94,
            "mixed_or_unknown": 0.05,
            "independently_established": 0,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 5211,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "fb918679f1368ea27699ee8319cf7688eb29587ac099d7e548fe8281d8198dd0",
    "capturedAt": "2026-09-22T03:48:36.045Z",
    "elapsedMs": 624.626317000002,
    "successfulAttemptElapsedMs": 623.955374000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.9,
            "NONE": 0.01,
            "body:0": 0,
            "body:2": 0.09,
            "body:3": 0,
            "subject:0": 0
          },
          "confidence": 0.88
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.5,
            "NONE": 0.15,
            "body:0": 0.01,
            "body:2": 0.33,
            "body:3": 0.01,
            "subject:0": 0
          },
          "confidence": 0.4
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:1": 0.21,
            "NONE": 0,
            "body:0": 0.3,
            "body:2": 0.03,
            "body:3": 0,
            "subject:0": 0.46
          },
          "confidence": 0.34
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.02,
            "body:1": 0.02,
            "body:0": 0.05,
            "body:2": 0.9,
            "body:3": 0.01,
            "subject:0": 0
          },
          "confidence": 0.88
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.1,
            "NONE": 0.82,
            "body:0": 0,
            "body:2": 0.01,
            "body:3": 0.06,
            "subject:0": 0.01
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 4366,
        "output_tokens": 370
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1354.262364000002,
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
        "segmentId": "body:1"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:2"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 99,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-021",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:34.692Z",
    "offsetMs": 0.4545189999989816
  },
  {
    "seq": 100,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-021",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:35.418Z",
    "offsetMs": 726.7276650000022,
    "elapsedMs": 725.9919320000008,
    "outcome": "success"
  },
  {
    "seq": 101,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-021",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:35.421Z",
    "offsetMs": 729.609123000002
  },
  {
    "seq": 102,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-021",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:36.045Z",
    "offsetMs": 1353.9313280000024,
    "elapsedMs": 623.955374000001,
    "outcome": "success"
  },
  {
    "seq": 103,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-021",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:36.045Z",
    "offsetMs": 1354.3222769999993,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a95d24816da48392105b58107d94bf7ae3c714aac2e0009f88dd952758949670";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":100},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":102},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":103}} as const;
export const projectionSha256 = "4b8022bb478e0910d1f2231b7363ebdf7dce00139cc53e39fc471163bb78ad16";
