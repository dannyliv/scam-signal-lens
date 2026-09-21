import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-104",
  "inputSha256": "513a246b63452fad1e1866b929a11ae37d566ce0e110c6f8298a45777f30b0e2",
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
      "end": 18,
      "text": "Acción Requerida !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 18,
      "end": 24,
      "text": "#faxSC"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 35,
      "text": "¡Necesitamos tu ayuda con el pago! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 35,
      "end": 107,
      "text": "Hola, Notamos que hubo un problema al intentar procesar tu último pago. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 107,
      "end": 192,
      "text": "Es posible que tu tarjeta haya vencido o que algunos datos ya no estén actualizados. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 192,
      "end": 300,
      "text": "Para que sigas disfrutando del servicio sin interrupciones, por favor revisa y actualiza tu método de pago. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 300,
      "end": 327,
      "text": "Solo te tomará un momento. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 327,
      "end": 467,
      "text": "Si no realizas la actualización en las próximas 24 horas, tu cuenta podría quedar temporalmente suspendida hasta resolver el inconveniente. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 467,
      "end": 526,
      "text": "Actualizar Método de Pago ¿Tienes dudas o necesitas ayuda? "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 526,
      "end": 606,
      "text": "Nuestro equipo de soporte está disponible para acompañarte en lo que necesites. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 606,
      "end": 632,
      "text": "Gracias por tu confianza. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 632,
      "end": 655,
      "text": "Seguimos aquí para ti. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 655,
      "end": 683,
      "text": "© 2025 TuServicio en Línea. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 683,
      "end": 714,
      "text": "Todos los derechos reservados. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 714,
      "end": 754,
      "text": "Este mensaje se generó automáticamente. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 754,
      "end": 782,
      "text": "No es necesario responderlo."
    }
  ],
  "passA": {
    "requestSha256": "ca67822d49c8e1a64c616bfa1a5e91cf851bbdf57dc723456495eb9ecd093f0f",
    "capturedAt": "2026-09-20T23:44:24.598Z",
    "elapsedMs": 136.25854199999594,
    "successfulAttemptElapsedMs": 135.3914999999979,
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
          "noul": 0.63
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.52
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
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.23
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.11
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
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.06,
            "mixed_or_unknown": 0.09,
            "independently_established": 0.01,
            "sender_supplied": 0.84
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 3629,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "1a762c125157ce6384036152835357a0dffca970a37d95cca1226c494db011e0",
    "capturedAt": "2026-09-20T23:44:24.704Z",
    "elapsedMs": 102.52833299999475,
    "successfulAttemptElapsedMs": 101.04620799999975,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0.64,
            "subject:1": 0,
            "body:2": 0,
            "body:10": 0,
            "body:12": 0,
            "body:5": 0,
            "body:6": 0.26,
            "body:4": 0,
            "body:9": 0,
            "body:13": 0,
            "body:11": 0,
            "body:8": 0,
            "body:7": 0,
            "body:1": 0,
            "body:0": 0,
            "NONE": 0.09999999999999999
          },
          "confidence": 0.61
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0,
            "body:3": 0.46,
            "subject:1": 0,
            "subject:0": 0,
            "body:6": 0.1,
            "body:12": 0,
            "body:5": 0,
            "body:4": 0,
            "body:10": 0,
            "body:13": 0,
            "body:9": 0,
            "body:11": 0,
            "body:8": 0,
            "body:7": 0,
            "body:1": 0,
            "body:0": 0.08,
            "NONE": 0.36
          },
          "confidence": 0.42
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0,
            "subject:1": 0,
            "body:2": 0,
            "body:6": 0,
            "body:12": 0,
            "body:5": 1,
            "body:10": 0,
            "body:4": 0,
            "body:13": 0,
            "body:9": 0,
            "body:11": 0,
            "body:8": 0,
            "body:7": 0,
            "body:0": 0,
            "body:1": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:2": 0,
            "body:3": 0.01,
            "subject:1": 0,
            "subject:0": 0,
            "body:10": 0.01,
            "body:12": 0,
            "body:4": 0,
            "body:5": 0,
            "body:6": 0.02,
            "body:9": 0,
            "body:13": 0,
            "body:11": 0,
            "body:8": 0,
            "body:7": 0.92,
            "body:1": 0,
            "body:0": 0.01,
            "NONE": 0.03
          },
          "confidence": 0.92
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:3": 0.02,
            "subject:1": 0,
            "subject:0": 0,
            "body:10": 0,
            "body:12": 0.01,
            "body:5": 0.01,
            "body:4": 0,
            "body:6": 0.01,
            "body:9": 0,
            "body:13": 0.15,
            "body:11": 0,
            "body:8": 0,
            "body:7": 0.01,
            "body:0": 0,
            "body:1": 0,
            "NONE": 0.79
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 3832,
        "output_tokens": 885
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 242.1317909999998,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:5"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:7"
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 508,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-104",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:24.462Z",
    "offsetMs": 0.544000000001688
  },
  {
    "seq": 509,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-104",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:24.598Z",
    "offsetMs": 136.25804100000096,
    "elapsedMs": 135.3914999999979,
    "outcome": "success"
  },
  {
    "seq": 510,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-104",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:24.602Z",
    "offsetMs": 140.0631659999999
  },
  {
    "seq": 511,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-104",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:24.703Z",
    "offsetMs": 241.6947500000024,
    "elapsedMs": 101.04620799999975,
    "outcome": "success"
  },
  {
    "seq": 512,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-104",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:24.704Z",
    "offsetMs": 242.23483300000225,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7d19be8fb005c72169ea2e970ad424c4a4259bf6366ec9aeb458d118e7d5928a";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":509},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":511},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":512}} as const;
export const projectionSha256 = "b0f613edd4b18302aa47c9ad0a906325777f21bc4e299fc9dd34e07ff228cd40";
