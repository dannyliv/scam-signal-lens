import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-107",
  "inputSha256": "3625dd8201ccbe2ad99a51fa3d30fcdff6760487cd82fa68db298530cba894eb",
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
      "end": 98,
      "text": "Aviso de seguridad: El acceso a su cuenta Financiera El Corte Ingles está suspendido temporalmente"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 124,
      "text": "Estimado Cliente, Hemos detectado actividad inusual en su cuentaFinancieraElcorteIngles asociada a este correo electrónico. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 124,
      "end": 208,
      "text": "Por motivos de seguridad, hemos implementado restrictiones temporales en su acceso. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 208,
      "end": 236,
      "text": "¿Por qué está pasando esto? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 236,
      "end": 579,
      "text": "Intento de inicio de sesión desde un dispositivo no reconocido Actividad sospechosa detectada en su cuenta Requerimiento de verificación de seguridad pendiente Acción Requerida: Para evitar la suspensión permanente de su cuenta, debe verificar su identidad en las próximas 24 horas: https://ayuradiamonds.wearedesigners.net/eci-soporte/corte/\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 579,
      "end": 811,
      "text": " Lo que necesita saber: El processo toma menos de 2 minutos Mantenemos los más altos estándares de seguridad Si no realiza esta acción, su cuenta permanecerá restringida de acuerdo con nuestra Política de Seguridad (Artículo 12.4). "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 811,
      "end": 1098,
      "text": "Atentamente, Equipo de Seguridad FinancieraElcorteIngles FinancieraElcorteIngles España · Avenida Roblero 118 · 28942 Monteverde (Madrid) © 2025 FinancierElcorteIngles Todos los derechos reservados # | # Copyright by 2006-2025 Wiadomość generowana automatycznie, prosimy nie odpowiadać. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 1098,
      "end": 1225,
      "text": "Wiadomość wysłana przez firmę Get Feedback Adrián Koral, Marta Leszek, Piotr Nowalski spółka jawna z siedzibą w Warszawie, ul. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1225,
      "end": 1267,
      "text": "Brillowa 73 lok. 21, kod pocztowy 00-417. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1267,
      "end": 1305,
      "text": "NIP: 701-482-33-12, REGON: 146892301. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1305,
      "end": 1391,
      "text": "Spółka wpisana do Rejestru Przedsiębiorstw prowadzonego przez Sąd Rejonowy dla m. st. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1391,
      "end": 1492,
      "text": "Warszawy w Warszawie, XII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS:0000974128."
    }
  ],
  "passA": {
    "requestSha256": "39429e4a414a0f3004a04e2f082c4c083a555edec51b3587362dbb6a31f15cb5",
    "capturedAt": "2026-09-22T03:50:20.599Z",
    "elapsedMs": 681.5912370000005,
    "successfulAttemptElapsedMs": 680.5023479999945,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.46
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.84
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.98
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.53
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.99,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 5371,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "7008b4ee46ae58050755788681b27fbc01719778a271957bd649f0707e282119",
    "capturedAt": "2026-09-22T03:50:21.249Z",
    "elapsedMs": 647.527207999985,
    "successfulAttemptElapsedMs": 646.5960219999979,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0.54,
            "body:5": 0,
            "body:0": 0,
            "body:4": 0,
            "body:7": 0,
            "body:2": 0,
            "NONE": 0.46,
            "body:6": 0,
            "body:10": 0,
            "body:9": 0,
            "body:1": 0,
            "body:8": 0
          },
          "confidence": 0.49
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0.98,
            "body:5": 0,
            "body:8": 0,
            "body:7": 0,
            "body:4": 0,
            "body:2": 0,
            "NONE": 0.02,
            "body:6": 0,
            "body:10": 0,
            "body:9": 0,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.97
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0,
            "body:9": 0,
            "body:5": 0,
            "body:0": 0,
            "body:4": 0.09,
            "body:7": 0,
            "body:2": 0,
            "NONE": 0,
            "body:6": 0,
            "body:10": 0,
            "body:8": 0,
            "body:1": 0,
            "body:3": 0.91
          },
          "confidence": 0.9
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "subject:0": 0.02,
            "body:3": 0.19,
            "body:5": 0.74,
            "body:0": 0.03,
            "body:7": 0,
            "body:4": 0,
            "body:2": 0,
            "NONE": 0,
            "body:6": 0,
            "body:10": 0,
            "body:8": 0,
            "body:1": 0.02,
            "body:9": 0
          },
          "confidence": 0.71
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.53,
            "body:5": 0.02,
            "body:8": 0,
            "body:4": 0.02,
            "body:7": 0,
            "body:2": 0,
            "body:3": 0.43,
            "body:6": 0,
            "body:10": 0,
            "body:9": 0,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 5849,
        "output_tokens": 693
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1331.6690910000034,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
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
        "status": "selected",
        "segmentId": "body:3"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:5"
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
    "seq": 518,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-107",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:19.918Z",
    "offsetMs": 0.7914979999914067
  },
  {
    "seq": 519,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-107",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:20.599Z",
    "offsetMs": 681.5916799999977,
    "elapsedMs": 680.5023479999945,
    "outcome": "success"
  },
  {
    "seq": 520,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-107",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:20.602Z",
    "offsetMs": 684.2444829999877
  },
  {
    "seq": 521,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-107",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:21.249Z",
    "offsetMs": 1331.2244349999964,
    "elapsedMs": 646.5960219999979,
    "outcome": "success"
  },
  {
    "seq": 522,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-107",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:21.249Z",
    "offsetMs": 1331.7260600000009,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "52b8be87a28e7eecdd14516af48c8d4cfc4a7bd04d114e33194117ee9970e94f";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":519},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":521},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":522}} as const;
export const projectionSha256 = "f299a1b6224bc0c6aac5fe3b51d9832cda6d84939a7b1f62fbcd3954b159ab8b";
