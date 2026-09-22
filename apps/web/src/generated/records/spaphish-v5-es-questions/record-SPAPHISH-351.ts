import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-351",
  "inputSha256": "18f5f14228ff14013326f46a31e67096208e4f17b7cb4a995fb1c6fcca142c68",
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
      "end": 79,
      "text": "Ezequiela Miguelina -Tu paquete de FedEx está esperando – Completa tu entrega ."
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 79,
      "end": 81,
      "text": "📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 52,
      "text": "Notificación de entrega ¡Su paquete está en camino! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 52,
      "end": 105,
      "text": "Se entregará (1) paquete a su dirección en Portugal. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 105,
      "end": 175,
      "text": "Use el código a continuación para rastrear su paquete en tiempo real. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 175,
      "end": 262,
      "text": "Planifique su entrega y manténgase informado con nuestras notificaciones instantáneas. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 262,
      "end": 316,
      "text": "Nos aseguramos de que su entrega sea rápida y segura. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 316,
      "end": 500,
      "text": "Rastree su envío Rastree su paquete de manera rápida y sencilla: Número de seguimiento: [998877665544] Si no desea recibir más correos de este tipo, haga clic aquí para darse de baja. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 500,
      "end": 547,
      "text": "Política de privacidad | Términos y condiciones"
    }
  ],
  "passA": {
    "requestSha256": "d4250f282eef95dee14886ac350e3dadc41af25d5f29534a67fb12b5eabf7283",
    "capturedAt": "2026-09-22T03:55:13.194Z",
    "elapsedMs": 674.7163179999916,
    "successfulAttemptElapsedMs": 673.3003139999928,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.18
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.71
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.1
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0.22,
            "mixed_or_unclear": 0,
            "active_request": 0.78
          },
          "confidence": 0.7
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.17,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0.83
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 5036,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "73480c4b3d28d79c869b9318314dabddc673e9e74bbd8c1169850de2a16aa302",
    "capturedAt": "2026-09-22T03:55:13.788Z",
    "elapsedMs": 592.4782049999922,
    "successfulAttemptElapsedMs": 590.9592389999889,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.03,
            "body:6": 0,
            "body:3": 0.02,
            "NONE": 0.44,
            "subject:0": 0.27,
            "body:5": 0.02,
            "body:1": 0.01,
            "subject:1": 0,
            "body:0": 0.05,
            "body:4": 0.16
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 1074,
        "output_tokens": 111
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1269.0713170000236,
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
        "status": "low_confidence",
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
    "seq": 1717,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-351",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:12.520Z",
    "offsetMs": 1.0872630000230856
  },
  {
    "seq": 1718,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-351",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:13.193Z",
    "offsetMs": 674.7167440000339,
    "elapsedMs": 673.3003139999928,
    "outcome": "success"
  },
  {
    "seq": 1719,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-351",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:13.196Z",
    "offsetMs": 677.4218680000049
  },
  {
    "seq": 1720,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-351",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:13.788Z",
    "offsetMs": 1268.8636310000438,
    "elapsedMs": 590.9592389999889,
    "outcome": "success"
  },
  {
    "seq": 1721,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-351",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:13.788Z",
    "offsetMs": 1269.1192320000264,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "30369c724d86ac1294ba08e3144bd0419f5cd30d8fc132b15b13d20da1b36e98";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1718},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1720},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1721}} as const;
export const projectionSha256 = "261c782dbec5104af5e0a7162baa9ba99c89d6fb96c3bbfd52ef472e03bf466b";
