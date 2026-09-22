import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-090",
  "inputSha256": "1bb0e4d1203ad675d4f061fd578eaa99aae26c4b94f7d36c632014fd7ca957a1",
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
      "text": "Missxtranger ! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 15,
      "end": 63,
      "text": "Su cuenta Prime será eliminada hoy ¡tome acción!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 33,
      "text": "¡Tu membresía Prime ha caducado! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 33,
      "end": 60,
      "text": "¡Tu membresía ha caducado! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 60,
      "end": 208,
      "text": "Su suscripción a Prime expiró el 16 March 2024 Intentamos renovar la suscripción al final de cada ciclo de facturación, pero su pago mensual falló. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 208,
      "end": 259,
      "text": "Por lo tanto, tuvimos que cancelar su suscripción. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 259,
      "end": 302,
      "text": "Obviamente, nos encantaría volver a verte. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 302,
      "end": 368,
      "text": "Si deseas renovar tu suscripción Haga clic en el enlace de abajo. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 368,
      "end": 582,
      "text": "ACTUALIZAR MIS DETALLES DE PAGO ID de suscripción : 9845527194432 Producto : Prime 90 días Fecha de caducidad : 03/16/2024 Confirmar Disponible SÓLO HOY Para detenerlos, vaya aquí o escriba a: 742 Maple Bridge Rd. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 582,
      "end": 656,
      "text": "Ste.5-4123 Clearfield, VT 05488 La anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 656,
      "end": 800,
      "text": "Si prefieres no recibir más comunicaciones por favor cancele su suscripción aquí O escribe a: 128 Willow Crest Ave,Unit #5920 Northwood VT 05744"
    }
  ],
  "passA": {
    "requestSha256": "592f111bfaa899b1ea025f10357b94614964898bf57c354e53e9d551d571e8dd",
    "capturedAt": "2026-09-22T03:49:58.846Z",
    "elapsedMs": 663.7573019999982,
    "successfulAttemptElapsedMs": 663.0511289999995,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.1
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.82
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.61
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.74
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.46
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.16
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
          "noul": 0.09
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
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
            "mixed_or_unknown": 0.08,
            "independently_established": 0,
            "no_sensitive_action": 0.01,
            "sender_supplied": 0.91
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 5168,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "5f2b3792270684e1f7351570fccdf531eb519665a905f976fe15f7d458b95294",
    "capturedAt": "2026-09-22T03:49:59.475Z",
    "elapsedMs": 627.7930429999979,
    "successfulAttemptElapsedMs": 627.0482460000057,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:6": 0.93,
            "body:7": 0,
            "subject:0": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:8": 0,
            "body:0": 0,
            "body:3": 0,
            "body:1": 0,
            "body:5": 0.05,
            "body:2": 0,
            "NONE": 0.02
          },
          "confidence": 0.92
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:6": 0.61,
            "body:7": 0,
            "subject:0": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:8": 0,
            "body:0": 0,
            "body:3": 0,
            "body:1": 0,
            "body:5": 0.26,
            "body:2": 0.01,
            "NONE": 0.12
          },
          "confidence": 0.57
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:6": 0.34,
            "body:7": 0,
            "subject:0": 0,
            "body:4": 0,
            "subject:1": 0.66,
            "body:8": 0,
            "body:0": 0,
            "body:3": 0,
            "body:1": 0,
            "body:5": 0,
            "body:2": 0,
            "NONE": 0
          },
          "confidence": 0.63
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.08,
            "body:7": 0.04,
            "subject:0": 0.03,
            "body:4": 0.01,
            "subject:1": 0.01,
            "body:8": 0.01,
            "body:0": 0.04,
            "body:3": 0.05,
            "body:1": 0,
            "body:5": 0.06,
            "body:2": 0.25,
            "NONE": 0.42
          },
          "confidence": 0.36
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.19,
            "body:7": 0.15,
            "subject:0": 0,
            "body:4": 0,
            "subject:1": 0.01,
            "body:8": 0.03,
            "body:0": 0,
            "body:3": 0.01,
            "body:2": 0,
            "body:5": 0.07,
            "body:1": 0,
            "NONE": 0.54
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 4528,
        "output_tokens": 638
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1293.346074999994,
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
        "segmentId": "body:6"
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
    "seq": 434,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-090",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:58.183Z",
    "offsetMs": 0.49778299999888986
  },
  {
    "seq": 435,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-090",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:58.846Z",
    "offsetMs": 663.7588949999918,
    "elapsedMs": 663.0511289999995,
    "outcome": "success"
  },
  {
    "seq": 436,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-090",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:58.848Z",
    "offsetMs": 665.5620999999956
  },
  {
    "seq": 437,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-090",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:59.475Z",
    "offsetMs": 1292.9200319999945,
    "elapsedMs": 627.0482460000057,
    "outcome": "success"
  },
  {
    "seq": 438,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-090",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:59.475Z",
    "offsetMs": 1293.3933089999919,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "bffa7109d02956461c02c7f782f0548aace02cfda6f6148f136a5bcae6a9588a";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":435},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":437},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":438}} as const;
export const projectionSha256 = "12e084c05965b34a0ca37fc896c489e959cab9b5bd2aad1a6cdd98c8a5b52c54";
