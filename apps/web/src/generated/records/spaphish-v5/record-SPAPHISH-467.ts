import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-467",
  "inputSha256": "7628a293d7b800e8fe65edb1a1545909c6d30100c532a7db4ff281bd57885bbc",
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
      "end": 56,
      "text": "🚨˪Tu cuenta de Netflix será eliminada hoy 28-09-2024˪🚨"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 29,
      "text": "⚠️Tu cuenta será suspendida! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 29,
      "end": 72,
      "text": "Por favor actualice su información de pago\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 72,
      "end": 86,
      "text": "N E T F L I X\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 86,
      "end": 115,
      "text": "No pudimos validar su cuenta\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 115,
      "end": 138,
      "text": "Estimado Daniela Ríos:\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 138,
      "end": 215,
      "text": "Estamos teniendo algunos problemas con su información de facturación actual. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 215,
      "end": 320,
      "text": "Lo intentaremos nuevamente, pero mientras tanto es posible que desees actualizar tu información de pago.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 320,
      "end": 346,
      "text": "ACTUALIZA TU CUENTA AHORA\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 346,
      "end": 377,
      "text": "Informations sur votre compte:\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 377,
      "end": 407,
      "text": "ID de suscripción : 918334872\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 407,
      "end": 425,
      "text": "Producto: Netflix\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 425,
      "end": 456,
      "text": "Fecha de caducidad: 17 02 2025\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 456,
      "end": 478,
      "text": "-El equipo de Netflix\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 478,
      "end": 638,
      "text": "⚠️:En caso de desconocimiento, sus servicios serán suspendidos completamente dentro de las 24 horas siguientes a los términos definidos en nuestros contratos .\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 638,
      "end": 652,
      "text": "Darse de baja\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 652,
      "end": 667,
      "text": "Copyright 2024\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 667,
      "end": 709,
      "text": "El anunciante no gestiona tu suscripción. "
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 709,
      "end": 849,
      "text": "Si prefieres no recibir más comunicaciones, por favor date de baja. aquí o escribir a: 128 W Glenmoor Blvd Ste 411#5620, Riverton, UT, 84065"
    }
  ],
  "passA": {
    "requestSha256": "d9e84d0075039acf3fe6508c4ff7e2f6e4e3728a7c37395eeb62156af0542a50",
    "capturedAt": "2026-09-20T23:46:28.657Z",
    "elapsedMs": 139.41325000001234,
    "successfulAttemptElapsedMs": 136.8732499999751,
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
          "noul": 0.8
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.53
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.43
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.1
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.03,
            "sender_supplied": 0.95,
            "independently_established": 0,
            "no_sensitive_action": 0.02
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3706,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "63e98e3fded44d76c8296666a4bcc2d2755953300b39b3b5eb2ac2a04279a12d",
    "capturedAt": "2026-09-21T00:57:33.911Z",
    "elapsedMs": 147.20037500000035,
    "successfulAttemptElapsedMs": 145.39595800000097,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:14": 0,
            "body:11": 0,
            "body:4": 0,
            "body:6": 0.01,
            "subject:0": 0,
            "body:0": 0,
            "body:9": 0,
            "body:13": 0,
            "body:17": 0,
            "body:8": 0,
            "body:5": 0,
            "body:12": 0,
            "body:15": 0,
            "body:10": 0,
            "body:7": 0.11,
            "NONE": 0.04,
            "body:2": 0,
            "body:3": 0,
            "body:16": 0,
            "body:1": 0.84
          },
          "confidence": 0.82
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:14": 0,
            "body:16": 0,
            "body:4": 0,
            "body:6": 0.01,
            "subject:0": 0,
            "body:0": 0,
            "body:9": 0,
            "body:13": 0,
            "body:17": 0,
            "body:8": 0,
            "body:5": 0,
            "body:12": 0,
            "body:15": 0,
            "body:10": 0,
            "body:7": 0.05,
            "NONE": 0.17,
            "body:2": 0,
            "body:3": 0,
            "body:1": 0.77,
            "body:11": 0
          },
          "confidence": 0.75
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:14": 0,
            "body:11": 0,
            "body:4": 0,
            "body:6": 0,
            "subject:0": 0.2,
            "body:0": 0.07,
            "body:9": 0,
            "body:13": 0.49,
            "body:17": 0,
            "body:8": 0,
            "body:5": 0,
            "body:12": 0,
            "body:15": 0,
            "body:10": 0,
            "body:7": 0.24000000000000002,
            "NONE": 0,
            "body:2": 0,
            "body:3": 0,
            "body:1": 0,
            "body:16": 0
          },
          "confidence": 0.46
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:12",
          "probabilities": {
            "body:14": 0,
            "body:1": 0.01,
            "body:4": 0,
            "body:6": 0.02,
            "subject:0": 0.01,
            "body:0": 0,
            "body:9": 0,
            "body:13": 0.01,
            "body:17": 0,
            "body:5": 0.05,
            "body:8": 0,
            "body:12": 0.75,
            "body:15": 0,
            "body:10": 0.01,
            "body:7": 0.01,
            "NONE": 0.02,
            "body:2": 0.09,
            "body:3": 0.02,
            "body:11": 0,
            "body:16": 0
          },
          "confidence": 0.72
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:14": 0,
            "body:11": 0,
            "body:4": 0,
            "body:6": 0.01,
            "subject:0": 0,
            "body:0": 0,
            "body:9": 0,
            "body:13": 0.01,
            "body:17": 0.01,
            "body:8": 0,
            "body:5": 0,
            "body:12": 0,
            "body:15": 0,
            "body:10": 0,
            "body:7": 0.12,
            "NONE": 0.83,
            "body:2": 0,
            "body:3": 0,
            "body:16": 0.01,
            "body:1": 0.01
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 4454,
        "output_tokens": 1042
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 475.17087499999616,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:1"
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
        "segmentId": "body:12"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2294,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-467",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:28.520Z",
    "offsetMs": 1.9610410000022966
  },
  {
    "seq": 2295,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-467",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:28.657Z",
    "offsetMs": 139.4146250000049,
    "elapsedMs": 136.8732499999751,
    "outcome": "success"
  },
  {
    "seq": 2296,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-467",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:28.661Z",
    "offsetMs": 143.91454100000556
  },
  {
    "seq": 2297,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-467",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:28.844Z",
    "offsetMs": 326.24804099998437,
    "elapsedMs": 181.64720899998792,
    "outcome": "success"
  },
  {
    "seq": 2298,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-467",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:28.844Z",
    "offsetMs": 326.4391250000044,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2809,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-467",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:33.765Z",
    "offsetMs": 2.1604579999984708
  },
  {
    "seq": 2810,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-467",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:33.911Z",
    "offsetMs": 147.96099999999933,
    "elapsedMs": 145.39595800000097,
    "outcome": "success"
  },
  {
    "seq": 2811,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-467",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:33.911Z",
    "offsetMs": 148.66858299999876,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "bfedb261aa075642a3621a1ad8bb0438c76a412b58cd70231699467b3f7b92d8";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2295},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2810},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2811}} as const;
export const projectionSha256 = "0fdd0521624b0b0471369bf076f69353fc43d2ab72f91305681f47c43ec2187a";
