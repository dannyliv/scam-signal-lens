import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-099",
  "inputSha256": "1050ef244c368c3546d864006022c9f6096509848f2ab37c367b19012b67b28d",
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
      "end": 61,
      "text": "Re: Pablito 2 paquetes en espera de entrega, confirmar ahora."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 200,
      "text": "Ver este correo electrónico en su navegador ExpressService ® ENTREGA DEL PAQUETE SUSPENDIDO Querido ricardo, Por el momento, no podemos entregar su paquete 99887766 de nuestro almacén a tu domicilio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 200,
      "end": 253,
      "text": "Debido a la falta de información en nuestro sistema. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 253,
      "end": 369,
      "text": "Resuelva este problema en un plazo de (5) días hábiles, de lo contrario, debemos devolver el paquete al fabricante. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 369,
      "end": 675,
      "text": "RESOLUCIÓN DE PROBLEMAS Información de empaquetado: Estado: detenido en el centro de manipulación (tasas aduaneras pendientes) Que tengas un gran día! - FedEx Express-servicio Si desea ser eliminado de nuestra lista y ya no recibir nuevos correos electrónicos sobre eventos,, Por favor, haga clic en aquí. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 675,
      "end": 774,
      "text": "O envíe un correo electrónico à: 123 Calle de la Ficción, Ste 744 #511, Ciudad Sintética, CA, 90210"
    }
  ],
  "passA": {
    "requestSha256": "191e7e838bf0b3c113aa7a9e9065e2551fcd2bab717e2dd004ead311db1c6c05",
    "capturedAt": "2026-09-22T03:50:10.340Z",
    "elapsedMs": 737.4073910000006,
    "successfulAttemptElapsedMs": 736.2532950000023,
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
          "noul": 0.22
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.17
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.37
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.27
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.01,
            "informational": 0.02,
            "active_request": 0.97,
            "educational_or_quoted": 0
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.51,
            "no_sensitive_action": 0.44,
            "mixed_or_unknown": 0.05,
            "independently_established": 0
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 5100,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "a4875147199982204ed4d63e35cc68064ae197abf2d614b8024dbff22b77ae82",
    "capturedAt": "2026-09-22T03:50:10.958Z",
    "elapsedMs": 615.6309489999985,
    "successfulAttemptElapsedMs": 614.636811000004,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.03,
            "subject:0": 0.01,
            "NONE": 0.85,
            "body:0": 0,
            "body:4": 0.01,
            "body:3": 0.07,
            "body:1": 0.03
          },
          "confidence": 0.83
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 1,
            "subject:0": 0,
            "NONE": 0,
            "body:0": 0,
            "body:4": 0,
            "body:3": 0,
            "body:1": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0.14,
            "subject:0": 0.01,
            "NONE": 0.03,
            "body:0": 0.29,
            "body:3": 0.49,
            "body:1": 0.03,
            "body:4": 0.01
          },
          "confidence": 0.41
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.07,
            "subject:0": 0.02,
            "NONE": 0.5599999999999999,
            "body:0": 0.17,
            "body:3": 0.06,
            "body:1": 0.01,
            "body:4": 0.11
          },
          "confidence": 0.5
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.03,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.01,
            "body:3": 0.33,
            "body:4": 0,
            "NONE": 0.63
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 3782,
        "output_tokens": 417
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1355.6089260000008,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
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
        "segmentId": "body:2"
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
    "seq": 479,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-099",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:09.603Z",
    "offsetMs": 0.796797000002698
  },
  {
    "seq": 480,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-099",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:10.340Z",
    "offsetMs": 737.4042880000052,
    "elapsedMs": 736.2532950000023,
    "outcome": "success"
  },
  {
    "seq": 481,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-099",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:10.343Z",
    "offsetMs": 740.0226790000015
  },
  {
    "seq": 482,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-099",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:10.958Z",
    "offsetMs": 1355.0809379999992,
    "elapsedMs": 614.636811000004,
    "outcome": "success"
  },
  {
    "seq": 483,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-099",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:10.958Z",
    "offsetMs": 1355.6967060000025,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d5fc4a4a189943c68e144b3a09eda815c34ed3375e6acb3f8da41b247c3f155c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":480},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":482},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":483}} as const;
export const projectionSha256 = "93cf826384f1cc60e2fe6067ce46d13819bc503e085e7478ca5838402f0c7b52";
