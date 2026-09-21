import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-146",
  "inputSha256": "384842520a881c3da96f99caeca86cdcd5fef75dfeef6f94fa1c0e4f6247fb91",
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
      "end": 42,
      "text": "Tu código de verificación de Yahoo es ZRRT"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 111,
      "text": "Tu código de verificación de Yahoo es ZRRT Hola, Mauricio, MSanchez@yahoo.es ¿Estás intentando iniciar sesión? "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 111,
      "end": 178,
      "text": "Si es que sí, utiliza este código para terminar de iniciar sesión. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 178,
      "end": 393,
      "text": "Código de Clave de cuenta: ZRRT Este intento de inicio de sesión se produjo el: Dispositivo edge, mac os x Cuándo 13 de abril de 2023, 9:06:08 PDT Dónde* México 200.13.105.104 ¿No has iniciado sesión recientemente? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 393,
      "end": 604,
      "text": "Revisa tu actividad de cuenta y elimina los dispositivos y las aplicaciones que no reconozcas. https://login.yahoo.com/account/activity Gracias, Yahoo No te pediremos nunca tu contraseña por correo electrónico. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 604,
      "end": 726,
      "text": "Si no confías en un enlace de un mensaje, ve directamente a la página de inicio de sesión habitual a través de yahoo.com. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 726,
      "end": 807,
      "text": "*La ubicación es aproximada y se basa en la dirección IP desde la que se originó."
    }
  ],
  "passA": {
    "requestSha256": "6efb35eb42405aed8c51f17b92069a05751c1b0ab26f629ed0eeac9b053de07e",
    "capturedAt": "2026-09-20T23:44:37.131Z",
    "elapsedMs": 164.1607090000034,
    "successfulAttemptElapsedMs": 162.59408299999632,
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
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.23
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.85
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.63
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
            "informational": 0.2,
            "active_request": 0.79,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.72
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.22,
            "sender_supplied": 0.5599999999999999,
            "independently_established": 0.17,
            "mixed_or_unknown": 0.05
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 3652,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "653c552ec1a69b55da578319bba12320a0548084f1b6392b01d54db91c1ceaf1",
    "capturedAt": "2026-09-20T23:44:37.324Z",
    "elapsedMs": 191.0740420000002,
    "successfulAttemptElapsedMs": 189.46658300000126,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.07,
            "body:4": 0,
            "body:0": 0.02,
            "body:2": 0.07,
            "body:1": 0.24,
            "body:5": 0,
            "subject:0": 0,
            "NONE": 0.6
          },
          "confidence": 0.54
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.26,
            "body:4": 0.01,
            "body:0": 0.06,
            "body:2": 0.01,
            "body:1": 0.04,
            "body:5": 0,
            "subject:0": 0.26,
            "NONE": 0.36
          },
          "confidence": 0.26
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:3": 0.02,
            "body:4": 0.79,
            "body:0": 0,
            "body:2": 0.01,
            "body:1": 0.01,
            "body:5": 0,
            "subject:0": 0,
            "NONE": 0.17
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 2200,
        "output_tokens": 278
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 357.59525000000576,
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
        "status": "selected",
        "segmentId": "body:4"
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
    "seq": 714,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-146",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:36.968Z",
    "offsetMs": 1.0387080000000424
  },
  {
    "seq": 715,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-146",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:37.131Z",
    "offsetMs": 164.16270800000348,
    "elapsedMs": 162.59408299999632,
    "outcome": "success"
  },
  {
    "seq": 716,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-146",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:37.134Z",
    "offsetMs": 167.21329100000003
  },
  {
    "seq": 717,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-146",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:37.324Z",
    "offsetMs": 357.33216600000014,
    "elapsedMs": 189.46658300000126,
    "outcome": "success"
  },
  {
    "seq": 718,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-146",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:37.324Z",
    "offsetMs": 357.6447079999998,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "88c5cd6ea59d327ead0c01ef52a09eeb33c4142b42e01630f052949febb9f54e";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":715},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":717},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":718}} as const;
export const projectionSha256 = "97db8d06fb5a2e65eba5679ffba8a2fc1c55ffb3e26f6d46787a45fadae33f7f";
