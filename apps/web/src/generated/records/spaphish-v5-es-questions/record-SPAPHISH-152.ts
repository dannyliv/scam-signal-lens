import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-152",
  "inputSha256": "f7032c893eece92c6dd4529f90ee323673d72bd8ee8fba7affb24233d90b0bd7",
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
      "end": 27,
      "text": "¡Tu membresía ha caducado!\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 27,
      "end": 72,
      "text": "Su suscripción a Prime expiró el 21 Jun 2025\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 72,
      "end": 173,
      "text": "Intentamos renovar la suscripción al final de cada ciclo de facturación, pero su pago mensual falló. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 173,
      "end": 224,
      "text": "Por lo tanto, tuvimos que cancelar su suscripción. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 224,
      "end": 267,
      "text": "Obviamente, nos encantaría volver a verte.\n"
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
      "end": 301,
      "text": "Si deseas renovar tu suscripción\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 301,
      "end": 334,
      "text": "Haga clic en el enlace de abajo.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 334,
      "end": 335,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 335,
      "end": 367,
      "text": "ACTUALIZAR MIS DETALLES DE PAGO\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 367,
      "end": 368,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 368,
      "end": 402,
      "text": "ID de suscripción : 8745206937811\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 402,
      "end": 427,
      "text": "Producto : Prime 90 días\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 427,
      "end": 459,
      "text": "Fecha de caducidad : 06/21/2025\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 459,
      "end": 460,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 460,
      "end": 490,
      "text": "Confirmar Disponible SÓLO HOY\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 490,
      "end": 491,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 491,
      "end": 531,
      "text": "Para detenerlos, vaya aquí o escriba a:\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 531,
      "end": 582,
      "text": "412 Greenfield Ave Ste.5-3280 Brookhaven, PA 19015\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 582,
      "end": 583,
      "text": "\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 583,
      "end": 625,
      "text": "La anunciante no gestiona su suscripción.\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 625,
      "end": 706,
      "text": "Si prefieres no recibir más comunicaciones por favor cancele su suscripción aquí\n"
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 706,
      "end": 766,
      "text": "O escribe a: 221 Northbridge Lane,Unit #3025 Weston TX 75410"
    }
  ],
  "passA": {
    "requestSha256": "79700ed1b0eb5e5a3c315a91814a40e04d4f3c9c9b32e3553d9600479c339742",
    "capturedAt": "2026-09-22T03:51:14.402Z",
    "elapsedMs": 654.5651000000071,
    "successfulAttemptElapsedMs": 653.7787620000017,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.11
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.89
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.71
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.7
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.46
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.95,
            "mixed_or_unknown": 0.04,
            "independently_established": 0,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 5168,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "af2a9ff9d684874f990d4f269f89ba03c62d1aeec8a9e2b09e2dda259fd99c4a",
    "capturedAt": "2026-09-22T03:51:15.002Z",
    "elapsedMs": 598.5635070000135,
    "successfulAttemptElapsedMs": 597.8485909999872,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:9": 0.99,
            "body:21": 0,
            "body:18": 0,
            "body:14": 0,
            "body:5": 0,
            "body:1": 0,
            "body:8": 0,
            "body:7": 0,
            "body:16": 0,
            "body:22": 0,
            "body:17": 0,
            "body:10": 0,
            "body:13": 0,
            "body:3": 0,
            "body:20": 0,
            "body:19": 0,
            "NONE": 0.01,
            "body:4": 0,
            "body:11": 0,
            "subject:0": 0,
            "subject:1": 0,
            "body:12": 0,
            "body:0": 0,
            "body:2": 0,
            "body:6": 0,
            "body:15": 0
          },
          "confidence": 0.98
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:6": 0.01,
            "body:9": 0.89,
            "body:18": 0,
            "body:14": 0,
            "body:1": 0,
            "body:5": 0,
            "body:8": 0,
            "subject:0": 0,
            "body:16": 0,
            "body:22": 0,
            "body:17": 0,
            "body:10": 0,
            "body:13": 0,
            "body:3": 0,
            "body:20": 0,
            "body:19": 0,
            "body:4": 0,
            "NONE": 0.09,
            "body:11": 0,
            "body:7": 0.01,
            "subject:1": 0,
            "body:12": 0,
            "body:0": 0,
            "body:2": 0,
            "body:21": 0,
            "body:15": 0
          },
          "confidence": 0.88
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:21": 0,
            "body:9": 0,
            "body:18": 0,
            "body:7": 0,
            "body:5": 0,
            "body:1": 0,
            "body:8": 0,
            "body:14": 0,
            "body:16": 0,
            "body:22": 0,
            "body:17": 0,
            "body:10": 0,
            "body:13": 0,
            "body:3": 0,
            "body:20": 0,
            "NONE": 0,
            "body:19": 0,
            "body:4": 0,
            "body:11": 0,
            "subject:0": 0,
            "subject:1": 0.86,
            "body:12": 0,
            "body:0": 0,
            "body:2": 0,
            "body:6": 0,
            "body:15": 0.14
          },
          "confidence": 0.85
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:14": 0,
            "body:21": 0.01,
            "body:18": 0.01,
            "body:12": 0,
            "body:8": 0.01,
            "body:1": 0.02,
            "body:5": 0,
            "body:9": 0.09,
            "body:16": 0.01,
            "body:22": 0,
            "body:17": 0.01,
            "body:10": 0.01,
            "body:4": 0.01,
            "body:3": 0.04,
            "NONE": 0.45,
            "body:13": 0,
            "body:20": 0.04,
            "body:19": 0.01,
            "body:11": 0.01,
            "subject:0": 0.02,
            "subject:1": 0.01,
            "body:0": 0.02,
            "body:7": 0.03,
            "body:2": 0.16,
            "body:6": 0.02,
            "body:15": 0.01
          },
          "confidence": 0.42
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:14": 0,
            "body:9": 0.09999999999999999,
            "body:18": 0,
            "body:7": 0.07,
            "body:5": 0,
            "body:1": 0,
            "body:8": 0.01,
            "body:21": 0.01,
            "body:16": 0,
            "body:22": 0.01,
            "body:17": 0.09,
            "body:10": 0.01,
            "body:13": 0,
            "body:3": 0.01,
            "body:19": 0,
            "body:20": 0.07,
            "body:4": 0,
            "NONE": 0.58,
            "body:11": 0,
            "subject:0": 0,
            "subject:1": 0.01,
            "body:12": 0,
            "body:0": 0,
            "body:2": 0,
            "body:6": 0,
            "body:15": 0.03
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 5493,
        "output_tokens": 1333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1255.084090999997,
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
        "segmentId": "body:9"
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:9"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "subject:1"
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
    "seq": 738,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-152",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:13.748Z",
    "offsetMs": 0.543734000006225
  },
  {
    "seq": 739,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-152",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:14.402Z",
    "offsetMs": 654.5651789999974,
    "elapsedMs": 653.7787620000017,
    "outcome": "success"
  },
  {
    "seq": 740,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-152",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:14.404Z",
    "offsetMs": 656.4177909999853
  },
  {
    "seq": 741,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-152",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:15.002Z",
    "offsetMs": 1254.486276999989,
    "elapsedMs": 597.8485909999872,
    "outcome": "success"
  },
  {
    "seq": 742,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-152",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:15.002Z",
    "offsetMs": 1255.1413379999867,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a7ab6f062e4a774a41f33bfa51700c6bb6a11d239bfb361e2e2e1f2ed06b467e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":739},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":741},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":742}} as const;
export const projectionSha256 = "9873eb593124c658a7c9f22d84cfcd50d197039d6e5d7d0d3e745587a42563ea";
