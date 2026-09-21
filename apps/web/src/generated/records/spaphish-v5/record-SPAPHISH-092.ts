import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-092",
  "inputSha256": "778029bdde42555d4c0f5efad2618906145f3edd829960bccb8f44009de2c72d",
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
    "requestSha256": "b1aeadff1ed658868226fce418e3b586d26a77ca3e93efb979ebd8f7719e99b8",
    "capturedAt": "2026-09-20T23:44:21.018Z",
    "elapsedMs": 166.20033299999704,
    "successfulAttemptElapsedMs": 164.6759579999998,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.52
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.46
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
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.59
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
          "noul": 0.09
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
            "sender_supplied": 0.97,
            "no_sensitive_action": 0.02,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3827,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "1758567ff242c1baff91e3ba028bb71383e485a0cb067a50ff9b8ae22fb8e10e",
    "capturedAt": "2026-09-21T00:57:18.216Z",
    "elapsedMs": 137.73558400000002,
    "successfulAttemptElapsedMs": 133.99945800000023,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:3": 0.7,
            "body:5": 0,
            "body:1": 0,
            "NONE": 0.22,
            "subject:1": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:4": 0.08,
            "body:0": 0
          },
          "confidence": 0.65
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.24,
            "body:5": 0,
            "body:1": 0,
            "NONE": 0.6,
            "subject:1": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:4": 0.16,
            "body:0": 0
          },
          "confidence": 0.54
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:3": 0.01,
            "body:5": 0,
            "body:1": 0.03,
            "NONE": 0,
            "subject:1": 0,
            "subject:0": 0.9,
            "body:2": 0.01,
            "body:4": 0.05,
            "body:0": 0
          },
          "confidence": 0.89
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:0": 0.04,
            "body:5": 0.5,
            "body:1": 0.27,
            "NONE": 0.04,
            "subject:1": 0.01,
            "subject:0": 0.1,
            "body:2": 0.01,
            "body:4": 0.01,
            "body:3": 0.02
          },
          "confidence": 0.43
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.27,
            "body:5": 0,
            "body:1": 0,
            "NONE": 0.67,
            "subject:1": 0,
            "subject:0": 0.01,
            "body:2": 0,
            "body:4": 0.04,
            "body:0": 0
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 4455,
        "output_tokens": 506
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 475.7063330000001,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 449,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-092",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:20.853Z",
    "offsetMs": 0.9338329999991402
  },
  {
    "seq": 450,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-092",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:21.018Z",
    "offsetMs": 166.20104100000026,
    "elapsedMs": 164.6759579999998,
    "outcome": "success"
  },
  {
    "seq": 451,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-092",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:21.021Z",
    "offsetMs": 169.25254099999802
  },
  {
    "seq": 452,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-092",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:21.188Z",
    "offsetMs": 335.9884999999995,
    "elapsedMs": 166.09241699999984,
    "outcome": "success"
  },
  {
    "seq": 453,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-092",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:21.188Z",
    "offsetMs": 336.1915829999998,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2534,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-092",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:18.081Z",
    "offsetMs": 4.070125000000189
  },
  {
    "seq": 2535,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-092",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:18.216Z",
    "offsetMs": 138.9797499999995,
    "elapsedMs": 133.99945800000023,
    "outcome": "success"
  },
  {
    "seq": 2536,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-092",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:18.217Z",
    "offsetMs": 139.45987499999956,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3d590b487ead27c2a30cc6cbf832c24672d38fbd86aaee0ce43d18214f6bb9ba";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":450},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2535},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2536}} as const;
export const projectionSha256 = "a4010e52a621f2ac5587506d86e7f28a7147c5b7f8e3d8f43784c039d9297dd0";
