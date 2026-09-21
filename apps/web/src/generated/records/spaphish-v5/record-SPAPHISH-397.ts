import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-397",
  "inputSha256": "a97b8c345ea10e4e1721bf5b40af3a81c7e11c9d3e8d548a62d2e505fbc3baa2",
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
    "requestSha256": "41cad7ceebe3589a767d26250369f6221f49b53117a361983ed1e48197000c05",
    "capturedAt": "2026-09-21T00:57:31.308Z",
    "elapsedMs": 149.78466599999956,
    "successfulAttemptElapsedMs": 147.65337499999805,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.35
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.85
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.14
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
          "noul": 0.12
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
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.02,
            "sender_supplied": 0.97,
            "independently_established": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3591,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "e53927b91ad2edcdce433bba6a448532a61dee521a862b4d16009d9859f3f617",
    "capturedAt": "2026-09-21T00:57:31.512Z",
    "elapsedMs": 202.49554200000057,
    "successfulAttemptElapsedMs": 199.6310420000009,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0,
            "body:1": 0.01,
            "body:2": 0,
            "body:13": 0,
            "body:10": 0,
            "body:5": 0.13,
            "body:0": 0,
            "body:9": 0,
            "body:11": 0,
            "body:12": 0,
            "body:3": 0.23,
            "body:6": 0.05,
            "NONE": 0.5700000000000001,
            "body:4": 0,
            "subject:0": 0,
            "body:8": 0
          },
          "confidence": 0.53
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:7": 0,
            "body:1": 0,
            "body:2": 0,
            "body:13": 0,
            "body:10": 0,
            "body:5": 0,
            "body:0": 0,
            "body:9": 0,
            "body:11": 0,
            "body:12": 0,
            "body:3": 0,
            "body:6": 0,
            "body:4": 0,
            "NONE": 0.01,
            "subject:0": 0,
            "body:8": 0.99
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:7": 0,
            "body:1": 0.32,
            "body:10": 0,
            "body:13": 0.33,
            "body:2": 0,
            "body:5": 0,
            "body:0": 0,
            "body:9": 0,
            "body:11": 0,
            "body:12": 0.22,
            "body:3": 0.02,
            "body:6": 0,
            "body:4": 0,
            "NONE": 0.01,
            "subject:0": 0.1,
            "body:8": 0
          },
          "confidence": 0.28
        }
      },
      "usage": {
        "input_tokens": 2269,
        "output_tokens": 507
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 354.8961249999993,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2768,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-397",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:31.159Z",
    "offsetMs": 1.6900410000016564
  },
  {
    "seq": 2769,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-397",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:31.307Z",
    "offsetMs": 149.7834580000017,
    "elapsedMs": 147.65337499999805,
    "outcome": "success"
  },
  {
    "seq": 2770,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-397",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:31.312Z",
    "offsetMs": 154.29612500000076
  },
  {
    "seq": 2771,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-397",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:31.512Z",
    "offsetMs": 354.63083299999926,
    "elapsedMs": 199.6310420000009,
    "outcome": "success"
  },
  {
    "seq": 2772,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-397",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:31.513Z",
    "offsetMs": 354.9582499999997,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5064fd30d0ebf887cc46603bb11d65273dec1cb3ea84dfb608d789314526f49c";
export const replayAnchors = {"passA":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2769},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2771},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2772}} as const;
export const projectionSha256 = "b59bafd73f3a9111348aac8e2f82817bd2a1f57d021ad148052fa3e445525805";
