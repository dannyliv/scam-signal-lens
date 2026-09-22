import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-363",
  "inputSha256": "b092bf776f2fa5bc86c5581e9538b4a72e2e263b333876d72ef0509f69994c8b",
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
      "end": 42,
      "text": "🇪🇸 ¡Pago instantáneo de 30.000 € listo! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 42,
      "end": 87,
      "text": "Confirma ahora o tu cuenta expira en 24 horas"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 10,
      "text": "¡URGENTE! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 10,
      "end": 53,
      "text": "¡HEMOS INTENTADO CONTACTARTE VARIAS VECES! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 53,
      "end": 85,
      "text": "¡POR FAVOR, CONFIRMA RECEPCIÓN! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 85,
      "end": 119,
      "text": "¡Felicidades María Fernanda Ruiz! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 119,
      "end": 142,
      "text": "¡30.000 € EN EFECTIVO! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 142,
      "end": 179,
      "text": "Sin depósito sin tarjeta de crédito. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 179,
      "end": 193,
      "text": "¡100% GRATIS! "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 193,
      "end": 253,
      "text": "HAZ CLIC AQUÍ ⏰ ¡ÚLTIMA OPORTUNIDAD PARA RECLAMAR TU SALDO! "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 253,
      "end": 292,
      "text": "⏰ ¡Tus 30.000 € EXPIRAN EL 26/05/2025! "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 292,
      "end": 345,
      "text": "Un saldo de 30.000 € está disponible para tu cuenta. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 345,
      "end": 407,
      "text": "Esta transacción solo aparecerá después de validar tus datos. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 407,
      "end": 532,
      "text": "30.000 €Pago: DETALLES DE TU CUENTA: Fecha: 26/05/2025 Usuario: María Fernanda Ruiz E-mail: mfernanda.ruiz@correo-seguro.com\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 532,
      "end": 691,
      "text": " User-ID: N° 842913 Estado: ⚠️ PENDIENTE DE CONFIRMACIÓN ⚠️ Saldo: 30.000 € CONFIRMAR AHORA ¡ADVERTENCIA: Confirma ahora o tu cuenta será cerrada en 48 horas! "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 691,
      "end": 717,
      "text": "¡ESTE ES TU ÚLTIMO AVISO! "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 717,
      "end": 747,
      "text": "¡RECLAMA TU RECOMPENSA AHORA! "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 747,
      "end": 841,
      "text": "Si no reclamas tu recompensa antes del 26/05/2025, ¡tu cuenta será eliminada permanentemente! "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 841,
      "end": 854,
      "text": "Darse de baja"
    }
  ],
  "passA": {
    "requestSha256": "c91de025898d6d07b98d4b06f793a0c8eb143014cb5a0484a1ad13ff0a9cc539",
    "capturedAt": "2026-09-22T03:55:27.099Z",
    "elapsedMs": 654.7727309999755,
    "successfulAttemptElapsedMs": 653.5589549999568,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.16
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.78
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.13
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.07
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.25
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.53
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.23
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.95
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
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
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.04,
            "sender_supplied": 0.95,
            "independently_established": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 5246,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "36276801a5900dd05a319ddf1167549c5fffa3cbda2930253fdc621af91de1c4",
    "capturedAt": "2026-09-22T03:55:27.692Z",
    "elapsedMs": 591.6956989999744,
    "successfulAttemptElapsedMs": 590.2065249999869,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "subject:1": 0,
            "body:14": 0,
            "body:7": 0.13,
            "NONE": 0.06,
            "body:2": 0,
            "body:4": 0,
            "body:1": 0,
            "body:16": 0,
            "body:12": 0.03,
            "body:5": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:10": 0.77,
            "body:6": 0,
            "body:15": 0,
            "body:3": 0,
            "body:11": 0.01,
            "body:8": 0,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.75
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "subject:1": 0.51,
            "body:14": 0,
            "body:7": 0,
            "NONE": 0,
            "body:2": 0,
            "body:4": 0,
            "body:1": 0,
            "body:12": 0.19,
            "body:16": 0,
            "body:5": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:10": 0,
            "body:3": 0,
            "body:15": 0.29000000000000004,
            "body:8": 0.01,
            "body:11": 0,
            "body:6": 0,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.48
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:14": 0,
            "body:7": 0,
            "NONE": 0.63,
            "body:2": 0.03,
            "body:4": 0,
            "body:1": 0.17,
            "body:16": 0,
            "body:12": 0.06999999999999999,
            "body:5": 0,
            "body:9": 0.01,
            "body:3": 0,
            "body:8": 0,
            "body:10": 0.03,
            "body:15": 0,
            "body:6": 0,
            "body:11": 0.060000000000000005,
            "subject:0": 0,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.6
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0.03,
            "body:14": 0.01,
            "NONE": 0.66,
            "body:7": 0.1,
            "body:2": 0,
            "body:4": 0,
            "body:1": 0,
            "body:12": 0.01,
            "body:16": 0,
            "body:5": 0.09,
            "body:9": 0,
            "body:3": 0.01,
            "body:6": 0,
            "subject:0": 0,
            "body:15": 0.01,
            "body:10": 0.07,
            "body:11": 0,
            "body:8": 0.01,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.64
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:14": 0,
            "body:7": 0.01,
            "NONE": 0.77,
            "body:2": 0,
            "body:1": 0,
            "body:4": 0,
            "body:12": 0.01,
            "body:16": 0,
            "body:5": 0.15000000000000002,
            "body:9": 0,
            "subject:0": 0,
            "body:8": 0,
            "body:3": 0,
            "body:15": 0,
            "body:10": 0.05,
            "body:11": 0,
            "body:6": 0.01,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.75
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "subject:1": 0,
            "body:14": 0.01,
            "NONE": 0.04,
            "body:7": 0,
            "body:2": 0,
            "body:1": 0,
            "body:4": 0.18,
            "body:12": 0,
            "body:16": 0,
            "body:5": 0.45,
            "body:9": 0.05,
            "body:3": 0,
            "body:10": 0,
            "body:8": 0,
            "body:15": 0,
            "body:6": 0.25,
            "body:11": 0,
            "subject:0": 0.02,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 6570,
        "output_tokens": 1245
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1248.975580999977,
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
        "segmentId": "body:10"
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
        "status": "none_selected",
        "segmentId": null
      },
      "remote_access_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unrealistic_reward": {
        "status": "low_confidence",
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
    "seq": 1776,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-363",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:26.444Z",
    "offsetMs": 0.9081399999558926
  },
  {
    "seq": 1777,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-363",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:27.098Z",
    "offsetMs": 654.7733189999708,
    "elapsedMs": 653.5589549999568,
    "outcome": "success"
  },
  {
    "seq": 1778,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-363",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:27.101Z",
    "offsetMs": 657.9390179999755
  },
  {
    "seq": 1779,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-363",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:27.692Z",
    "offsetMs": 1248.5442119999789,
    "elapsedMs": 590.2065249999869,
    "outcome": "success"
  },
  {
    "seq": 1780,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-363",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:27.693Z",
    "offsetMs": 1249.043416999979,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "514e464d21b0e321cf31046ac49e7883878d823aeb20c72f4e1d5ed884520cae";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1777},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1779},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1780}} as const;
export const projectionSha256 = "23f1cf2c23d7ff36bc47a34f29d364fab755a0c8cc05c3271ee41c34d6f5ffe4";
