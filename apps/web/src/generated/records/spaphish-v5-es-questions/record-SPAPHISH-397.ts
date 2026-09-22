import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-397",
  "inputSha256": "a97b8c345ea10e4e1721bf5b40af3a81c7e11c9d3e8d548a62d2e505fbc3baa2",
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
      "end": 83,
      "text": "Instituto Tecnológico Superior de Huauchinango: Solicitud de reinicio de contraseña"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 13,
      "text": "Hola Marcos,\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 13,
      "end": 123,
      "text": "Se solicitó un reinicio de contraseña para su cuenta 'mOrtega' en el Instituto Tecnológico del Valle Central.\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 123,
      "end": 124,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 124,
      "end": 249,
      "text": "Para confirmar esta solicitud y configurar una nueva contraseña para su cuenta, por favor vaya a la siguiente dirección web:\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 249,
      "end": 250,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 250,
      "end": 310,
      "text": "http://campus.vallecentral.edu.mx/login/forgot_password.php?"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 310,
      "end": 348,
      "text": "token=[REDACTED_PASSWORD_RESET_TOKEN]\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 348,
      "end": 349,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 349,
      "end": 426,
      "text": "(Este enlace es válido por 30 minutos a partir de la solicitud del reinicio)\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 426,
      "end": 427,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 427,
      "end": 518,
      "text": "Si usted no solicitó este reinicio de contraseña, no es necesario realizar ninguna acción.\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 518,
      "end": 519,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 519,
      "end": 600,
      "text": "Si necesita ayuda, por favor póngase en contacto con el administrador del sitio,\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 600,
      "end": 613,
      "text": "Admin Soporte"
    }
  ],
  "passA": {
    "requestSha256": "f8ac8d2b8cf647e4fd74571b03dc55c660c77e5fa8296acddca51d49c3124778",
    "capturedAt": "2026-09-22T03:56:07.106Z",
    "elapsedMs": 595.3232070000377,
    "successfulAttemptElapsedMs": 593.766867999977,
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
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.79
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.16
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.91,
            "no_sensitive_action": 0.08,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 5041,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "f118e247688fdea60b84eb6aa58af9d62570cae2d6f13ad44e82502b89952cbb",
    "capturedAt": "2026-09-22T03:56:07.690Z",
    "elapsedMs": 582.1639589999686,
    "successfulAttemptElapsedMs": 580.8733249999932,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:11": 0,
            "body:10": 0,
            "body:6": 0,
            "body:3": 0,
            "NONE": 0.01,
            "body:5": 0,
            "body:1": 0,
            "body:13": 0,
            "body:0": 0,
            "body:7": 0,
            "body:2": 0,
            "body:12": 0,
            "body:8": 0.99,
            "subject:0": 0,
            "body:9": 0,
            "body:4": 0
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:11": 0,
            "body:10": 0,
            "body:3": 0.03,
            "body:6": 0,
            "NONE": 0.01,
            "body:5": 0,
            "body:1": 0.1,
            "body:13": 0.51,
            "body:0": 0,
            "body:7": 0,
            "body:2": 0,
            "body:12": 0.29000000000000004,
            "body:8": 0,
            "subject:0": 0.06,
            "body:9": 0,
            "body:4": 0
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 1856,
        "output_tokens": 340
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1180.0119820000255,
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
        "status": "selected",
        "segmentId": "body:8"
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
    "seq": 1945,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-397",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:06.511Z",
    "offsetMs": 1.1464309999719262
  },
  {
    "seq": 1946,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-397",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:07.106Z",
    "offsetMs": 595.323619999981,
    "elapsedMs": 593.766867999977,
    "outcome": "success"
  },
  {
    "seq": 1947,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-397",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:07.109Z",
    "offsetMs": 598.4429510000045
  },
  {
    "seq": 1948,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-397",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:07.690Z",
    "offsetMs": 1179.763248000003,
    "elapsedMs": 580.8733249999932,
    "outcome": "success"
  },
  {
    "seq": 1949,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-397",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:07.690Z",
    "offsetMs": 1180.0603409999749,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "17412eebc8c474de35b83dbf6c6c47a7e9a5dc2372a49d028dbd8199cce272f0";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1946},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1948},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1949}} as const;
export const projectionSha256 = "79919078a5cbe44d810153466164e1f70ba197c67b24ebdc77d99fcb0211c7f9";
