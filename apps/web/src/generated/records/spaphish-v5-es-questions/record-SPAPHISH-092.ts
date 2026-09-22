import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-092",
  "inputSha256": "778029bdde42555d4c0f5efad2618906145f3edd829960bccb8f44009de2c72d",
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
      "end": 148,
      "text": "TR: [Verificación necesaria] S͏u͏ c͏u͏e͏n͏t͏a͏ d͏e͏ A͏m͏a͏z͏o͏n͏ h͏a͏ s͏i͏d͏o͏ b͏l͏o͏q͏u͏e͏a͏d͏a͏, p͏o͏r͏ f͏a͏v͏o͏r͏ v͏e͏r͏i͏f͏i͏q͏u͏e͏ a͏h͏o͏r͏a͏! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 148,
      "end": 176,
      "text": "(#CASE-ID: 859-95893-769984)"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 196,
      "text": "Cuenta suspendida Cs: #815-99876-AMZXYZ Hola ricardo.lopez@mailservice.com, Alguien acaba de usar tu contraseña para intentar iniciar sesión en tu cuenta desde una aplicación que no es de Amazon. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 196,
      "end": 324,
      "text": "Desafortunadamente, podemos suspender su cuenta para protegerlo de posibles pérdidas y revisar cualquier actividad fraudulenta. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 324,
      "end": 460,
      "text": "Detalles de inicio de sesión: Fecha : Mon 17 Nov 2025 10:30 am Ubicación : Buenos Aires, Argentina IP : 181.45.10.150 ¿Qué debes hacer? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 460,
      "end": 560,
      "text": "Haga clic en el botón de abajo, Inicie sesión con su cuenta de Amazon y siga las tareas requeridas. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 560,
      "end": 675,
      "text": "Verificar cuenta Una vez que haya completado la tarea requerida, puede continuar usando su cuenta de forma segura. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 675,
      "end": 758,
      "text": "Sinceramente, Amazon.es Copyright © 2025 Amazon.com, Todos los derechos reservados."
    }
  ],
  "passA": {
    "requestSha256": "ed6c0439cc7ccbb193f0144cc10e1506fb452d719c5884fef09d7f784e1bf357",
    "capturedAt": "2026-09-22T03:50:01.424Z",
    "elapsedMs": 650.5102009999973,
    "successfulAttemptElapsedMs": 649.635381,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.47
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.44
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
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.66
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.95,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.04
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 5277,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "a3d782b54f69fd90188435fa50856407f35b1ae645ecb36fc381b06042342c9a",
    "capturedAt": "2026-09-22T03:50:02.390Z",
    "elapsedMs": 964.6692159999948,
    "successfulAttemptElapsedMs": 963.999278999996,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:4": 0.06,
            "NONE": 0.5700000000000001,
            "body:5": 0,
            "subject:0": 0,
            "subject:1": 0,
            "body:3": 0.36,
            "body:0": 0.01,
            "body:1": 0
          },
          "confidence": 0.5
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "NONE": 0.6,
            "body:4": 0.12,
            "body:5": 0,
            "subject:0": 0,
            "subject:1": 0,
            "body:0": 0,
            "body:3": 0.28,
            "body:2": 0
          },
          "confidence": 0.54
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:2": 0.01,
            "body:4": 0.03,
            "NONE": 0,
            "body:5": 0,
            "subject:0": 0.92,
            "subject:1": 0,
            "body:3": 0.01,
            "body:0": 0,
            "body:1": 0.03
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:1": 0.41,
            "body:4": 0.01,
            "NONE": 0.03,
            "body:5": 0.43,
            "subject:0": 0.04,
            "subject:1": 0.02,
            "body:0": 0.03,
            "body:3": 0.02,
            "body:2": 0.01
          },
          "confidence": 0.36
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:4": 0.03,
            "NONE": 0.59,
            "body:5": 0,
            "subject:0": 0.01,
            "subject:1": 0,
            "body:3": 0.37,
            "body:0": 0,
            "body:1": 0
          },
          "confidence": 0.54
        }
      },
      "usage": {
        "input_tokens": 5000,
        "output_tokens": 504
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1616.9701849999983,
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
        "status": "selected",
        "segmentId": "subject:0"
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 444,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-092",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:00.773Z",
    "offsetMs": 0.5440159999998286
  },
  {
    "seq": 445,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-092",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:01.423Z",
    "offsetMs": 650.510970000003,
    "elapsedMs": 649.635381,
    "outcome": "success"
  },
  {
    "seq": 446,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-092",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:01.425Z",
    "offsetMs": 652.3782020000071
  },
  {
    "seq": 447,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-092",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:02.389Z",
    "offsetMs": 1616.6446240000078,
    "elapsedMs": 963.999278999996,
    "outcome": "success"
  },
  {
    "seq": 448,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-092",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:02.390Z",
    "offsetMs": 1617.0284870000032,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0075b050f0e57774d0f7dd85929a7f000d15b3c3763b0f9edf32fe95ad2e2f78";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":445},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":447},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":448}} as const;
export const projectionSha256 = "7fb44bacea46637759e3ca13e55e88d9c81c0056dbfc681aaf7576b15de4da26";
