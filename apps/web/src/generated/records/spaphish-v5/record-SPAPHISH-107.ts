import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-107",
  "inputSha256": "3625dd8201ccbe2ad99a51fa3d30fcdff6760487cd82fa68db298530cba894eb",
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
    "requestSha256": "45aed742d41d4b0f59e4d3a3f31038bd19407e576cc6bea83a4be64928923e40",
    "capturedAt": "2026-09-20T23:44:25.817Z",
    "elapsedMs": 524.9442909999998,
    "successfulAttemptElapsedMs": 523.1719169999997,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.44
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.82
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.56
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.08
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 1,
            "independently_established": 0,
            "no_sensitive_action": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3921,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "6d744d21bc0d488e7c23b4b772a402ffb42a1b4bf4b6510519bfaf53403932d6",
    "capturedAt": "2026-09-21T00:57:18.987Z",
    "elapsedMs": 117.17233399999986,
    "successfulAttemptElapsedMs": 115.43491699999959,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:10": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:4": 0,
            "body:6": 0,
            "body:8": 0,
            "body:2": 0,
            "body:5": 0,
            "body:3": 0.73,
            "body:0": 0,
            "NONE": 0.27,
            "body:9": 0,
            "body:7": 0
          },
          "confidence": 0.7
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:10": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:4": 0,
            "body:6": 0,
            "body:8": 0,
            "body:2": 0,
            "body:5": 0,
            "body:3": 0.97,
            "body:0": 0,
            "NONE": 0.03,
            "body:9": 0,
            "body:7": 0
          },
          "confidence": 0.97
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:10": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:6": 0,
            "body:4": 0.08,
            "body:3": 0.92,
            "body:2": 0,
            "body:5": 0,
            "body:8": 0,
            "body:0": 0,
            "NONE": 0,
            "body:9": 0,
            "body:7": 0
          },
          "confidence": 0.91
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:10": 0,
            "subject:0": 0.06999999999999999,
            "body:1": 0.02,
            "body:6": 0,
            "body:4": 0,
            "body:3": 0.16,
            "body:2": 0,
            "body:5": 0.73,
            "body:8": 0,
            "body:7": 0,
            "NONE": 0,
            "body:9": 0,
            "body:0": 0.02
          },
          "confidence": 0.7
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:10": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:4": 0.03,
            "body:6": 0,
            "body:3": 0.22,
            "body:2": 0,
            "body:8": 0,
            "body:5": 0.08,
            "body:7": 0,
            "NONE": 0.67,
            "body:9": 0,
            "body:0": 0
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 5304,
        "output_tokens": 693
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 869.3569589999997,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 523,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-107",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:25.293Z",
    "offsetMs": 1.1468749999985448
  },
  {
    "seq": 524,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-107",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:25.817Z",
    "offsetMs": 524.945166999998,
    "elapsedMs": 523.1719169999997,
    "outcome": "success"
  },
  {
    "seq": 525,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-107",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:25.820Z",
    "offsetMs": 527.9674589999995
  },
  {
    "seq": 526,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-107",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:26.042Z",
    "offsetMs": 750.3965420000022,
    "elapsedMs": 221.69112500000483,
    "outcome": "success"
  },
  {
    "seq": 527,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-107",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:26.043Z",
    "offsetMs": 750.5445000000036,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2549,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-107",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:18.871Z",
    "offsetMs": 2.3222500000001673
  },
  {
    "seq": 2550,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-107",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:18.987Z",
    "offsetMs": 118.23220800000036,
    "elapsedMs": 115.43491699999959,
    "outcome": "success"
  },
  {
    "seq": 2551,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-107",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:18.987Z",
    "offsetMs": 118.75500000000011,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c0e9a140139a71aa9ff5724bbb716c54730a6e7b8fcb873cae6be513f5fc567c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":524},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2550},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2551}} as const;
export const projectionSha256 = "171e8228d95573ad2328647808170622483f769aa875c78c8396573a9a4f950d";
