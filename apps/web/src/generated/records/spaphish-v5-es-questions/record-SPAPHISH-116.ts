import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-116",
  "inputSha256": "231237dec20c04274f7590a1916ef05ef03282e3e1de868a93f1849daf4dc172",
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
      "end": 51,
      "text": "Se ha activado el reenvío de correos para su cuenta"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 166,
      "text": "Estimado Ricardo López: Se ha activado el reenvío de correos electrónicos a ricardo.lopez@techcorp.com en relación con su solicitud desde una aplicación de terceros. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 166,
      "end": 261,
      "text": "Por favor espere 24 horas para permitir que se complete la propagación del correo electrónico. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 261,
      "end": 361,
      "text": "Nota: Si no realizo esta solicitud, desvincule su cuenta de la dirección de reenvío inmediatamente. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 361,
      "end": 482,
      "text": "Navegue hasta cuentas > configuraciones > conectividad del dispositivo y desactive Conectividad con sitios poco seguros. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 482,
      "end": 606,
      "text": "También puede usar el enlace de desactivación incluido aquí para deshabilitar el reenvío de correo electrónico: Desactivar. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 606,
      "end": 658,
      "text": "Recomendación de revisión de seguridad obligatoria. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 658,
      "end": 951,
      "text": "Atentamente, Soporte para correo electrónico -------------------------------------------------------------------------------- ¿Dónde y cuándo sucedió?: Fecha: 10 noviembre, 2025 Navegador: Chrome Sistema operativo: Windows 11 Ubicación del dispositivo: Ciudad de México, México ¿No fue usted? "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 951,
      "end": 1014,
      "text": "Debería desactivar la dirección de reenvío de manera inmediata."
    }
  ],
  "passA": {
    "requestSha256": "1e3eb2d3c4e99a9baa119295a97ac5342abc491681d7c3118599f0dfaffd67dd",
    "capturedAt": "2026-09-22T03:50:31.289Z",
    "elapsedMs": 744.0398439999844,
    "successfulAttemptElapsedMs": 743.2631239999901,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.87
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.39
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.18
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.12
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.02,
            "active_request": 0.97,
            "educational_or_quoted": 0,
            "informational": 0.01
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.76,
            "mixed_or_unknown": 0.03,
            "independently_established": 0.01,
            "no_sensitive_action": 0.2
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 5121,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "977d081f875828358d0e76dbc1ea7f6045afaf0e8fc27a61aae516cbed126dbc",
    "capturedAt": "2026-09-22T03:50:31.817Z",
    "elapsedMs": 525.4120420000108,
    "successfulAttemptElapsedMs": 524.2545810000156,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:1": 0.01,
            "body:7": 0.56,
            "body:3": 0.01,
            "body:6": 0.01,
            "body:5": 0.01,
            "body:2": 0.38,
            "body:4": 0,
            "body:0": 0,
            "NONE": 0.02,
            "subject:0": 0
          },
          "confidence": 0.51
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:1": 0,
            "body:7": 0.01,
            "body:6": 0.91,
            "body:3": 0.01,
            "body:5": 0.01,
            "body:2": 0.02,
            "body:4": 0,
            "body:0": 0.01,
            "NONE": 0.03,
            "subject:0": 0
          },
          "confidence": 0.9
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "body:7": 0.02,
            "body:3": 0.04,
            "body:6": 0,
            "body:5": 0.01,
            "body:2": 0.17,
            "body:4": 0.14,
            "body:0": 0.01,
            "NONE": 0.6,
            "subject:0": 0
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 2667,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1271.6273180000135,
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
        "status": "low_confidence",
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
    "seq": 562,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-116",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:30.546Z",
    "offsetMs": 0.5760100000188686
  },
  {
    "seq": 563,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-116",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:31.289Z",
    "offsetMs": 744.0393139999942,
    "elapsedMs": 743.2631239999901,
    "outcome": "success"
  },
  {
    "seq": 564,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-116",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:31.292Z",
    "offsetMs": 746.7520070000028
  },
  {
    "seq": 565,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-116",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:31.816Z",
    "offsetMs": 1271.2897729999968,
    "elapsedMs": 524.2545810000156,
    "outcome": "success"
  },
  {
    "seq": 566,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-116",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:31.817Z",
    "offsetMs": 1271.6766740000166,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fccca510057c1a666a2a1304cd6e85a50f604a8bc7dd9b19019ba537ee647064";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":563},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":565},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":566}} as const;
export const projectionSha256 = "30e32f65473a9b6e0d60b586116ec6cfe2a93e0c0bfb3211ffb2f329b9ff7bb1";
