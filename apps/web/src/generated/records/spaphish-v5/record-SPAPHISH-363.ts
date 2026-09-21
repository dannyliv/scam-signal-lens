import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-363",
  "inputSha256": "b092bf776f2fa5bc86c5581e9538b4a72e2e263b333876d72ef0509f69994c8b",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
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
    "requestSha256": "f45b32e973799f664cf01e21e7264ffee43cf29641e7a01af7fd50e8f8df670f",
    "capturedAt": "2026-09-20T23:45:54.447Z",
    "elapsedMs": 138.87258300000394,
    "successfulAttemptElapsedMs": 136.9110409999994,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.13
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.79
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.14
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.99
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.28
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.67
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.25
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.93
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
            "no_sensitive_action": 0.03,
            "sender_supplied": 0.96,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3796,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "70996f26f5ed0c85b4e29f7f763404df88f8a532150a419e409f5def40afbc80",
    "capturedAt": "2026-09-21T00:57:29.791Z",
    "elapsedMs": 146.92520799999875,
    "successfulAttemptElapsedMs": 144.31670900000063,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:16": 0,
            "body:2": 0,
            "body:4": 0,
            "body:14": 0,
            "body:0": 0,
            "body:11": 0.02,
            "NONE": 0.14,
            "body:7": 0.14,
            "body:1": 0,
            "subject:0": 0,
            "subject:1": 0,
            "body:3": 0,
            "body:8": 0,
            "body:9": 0,
            "body:12": 0.05,
            "body:6": 0,
            "body:5": 0,
            "body:10": 0.65,
            "body:13": 0,
            "body:15": 0
          },
          "confidence": 0.63
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:16": 0,
            "body:4": 0,
            "body:2": 0,
            "body:14": 0,
            "body:0": 0,
            "body:11": 0,
            "NONE": 0,
            "body:7": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:3": 0,
            "subject:1": 0.5,
            "body:8": 0.01,
            "body:9": 0,
            "body:12": 0.26,
            "body:10": 0,
            "body:5": 0,
            "body:6": 0,
            "body:13": 0,
            "body:15": 0.23
          },
          "confidence": 0.46
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:16": 0,
            "body:2": 0.02,
            "body:4": 0,
            "body:0": 0,
            "body:14": 0,
            "body:11": 0.07,
            "NONE": 0.68,
            "body:7": 0,
            "body:1": 0.14,
            "subject:0": 0,
            "body:3": 0,
            "subject:1": 0,
            "body:9": 0.02,
            "body:8": 0,
            "body:6": 0,
            "body:10": 0.02,
            "body:5": 0,
            "body:12": 0.04,
            "body:13": 0,
            "body:15": 0
          },
          "confidence": 0.65
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:16": 0,
            "body:2": 0,
            "body:4": 0,
            "body:14": 0.01,
            "body:0": 0,
            "NONE": 0.74,
            "body:11": 0,
            "body:7": 0.12,
            "body:1": 0,
            "subject:0": 0,
            "subject:1": 0.03,
            "body:3": 0,
            "body:9": 0,
            "body:8": 0,
            "body:6": 0,
            "body:10": 0.05,
            "body:5": 0.03,
            "body:12": 0.01,
            "body:15": 0.01,
            "body:13": 0
          },
          "confidence": 0.72
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:16": 0,
            "body:2": 0,
            "body:4": 0,
            "body:14": 0,
            "body:0": 0,
            "NONE": 0.68,
            "body:11": 0,
            "body:7": 0.01,
            "body:1": 0,
            "subject:0": 0,
            "body:3": 0,
            "subject:1": 0,
            "body:8": 0,
            "body:9": 0,
            "body:10": 0.05,
            "body:6": 0.02,
            "body:5": 0.22,
            "body:12": 0.01,
            "body:13": 0,
            "body:15": 0
          },
          "confidence": 0.66
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:16": 0,
            "body:4": 0.28,
            "body:2": 0,
            "body:0": 0,
            "body:14": 0.01,
            "NONE": 0.04,
            "body:11": 0,
            "body:7": 0,
            "body:1": 0,
            "subject:0": 0.04,
            "body:3": 0,
            "subject:1": 0,
            "body:9": 0.07,
            "body:8": 0,
            "body:12": 0,
            "body:10": 0,
            "body:5": 0.36,
            "body:6": 0.2,
            "body:15": 0,
            "body:13": 0
          },
          "confidence": 0.32
        }
      },
      "usage": {
        "input_tokens": 5931,
        "output_tokens": 1245
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 475.32283400000233,
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
        "status": "low_confidence",
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
        "status": "low_confidence",
        "segmentId": null
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
        "status": "low_confidence",
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1778,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-363",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:54.309Z",
    "offsetMs": 1.428834000005736
  },
  {
    "seq": 1779,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-363",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:54.446Z",
    "offsetMs": 138.87154200000805,
    "elapsedMs": 136.9110409999994,
    "outcome": "success"
  },
  {
    "seq": 1780,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-363",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:54.450Z",
    "offsetMs": 142.82312499999534
  },
  {
    "seq": 1781,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-363",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:54.633Z",
    "offsetMs": 325.97537499999453,
    "elapsedMs": 182.51495799999975,
    "outcome": "success"
  },
  {
    "seq": 1782,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-363",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:54.634Z",
    "offsetMs": 326.22020900000643,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2741,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-363",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:29.646Z",
    "offsetMs": 3.0651249999991705
  },
  {
    "seq": 2742,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-363",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:29.791Z",
    "offsetMs": 148.0096250000006,
    "elapsedMs": 144.31670900000063,
    "outcome": "success"
  },
  {
    "seq": 2743,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-363",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:29.792Z",
    "offsetMs": 148.96541699999943,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "90e230c97e71d7e4c6161b74bd06cbda10eb1916d804b0fe5932198778f9f333";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1779},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2742},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2743}} as const;
export const projectionSha256 = "567f8ed99705187373825daabc129b14414eb5d9786935736f4ec95fcc85d8bd";
