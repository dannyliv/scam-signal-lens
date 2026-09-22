import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-146",
  "inputSha256": "384842520a881c3da96f99caeca86cdcd5fef75dfeef6f94fa1c0e4f6247fb91",
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
    "requestSha256": "482e786836170b1468e6ca0d79034ce5e5981ad4968d7294f451d230dc24e7f1",
    "capturedAt": "2026-09-22T03:51:07.238Z",
    "elapsedMs": 593.5106239999877,
    "successfulAttemptElapsedMs": 592.5603260000062,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.1
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.25
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.83
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.72
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.21,
            "active_request": 0.79,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.71
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.04,
            "sender_supplied": 0.34,
            "no_sensitive_action": 0.54,
            "independently_established": 0.08
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 5102,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "9017b5ddcfc14cd631dbf5f5557b687bece461c6555dd1f2a61566f508596798",
    "capturedAt": "2026-09-22T03:51:07.733Z",
    "elapsedMs": 493.87289200001396,
    "successfulAttemptElapsedMs": 492.6289129999932,
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
            "body:1": 0.28,
            "body:2": 0.08,
            "body:0": 0.01,
            "body:5": 0,
            "NONE": 0.55,
            "subject:0": 0
          },
          "confidence": 0.48
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.33,
            "body:4": 0.01,
            "body:1": 0.09,
            "body:2": 0.02,
            "body:0": 0.06,
            "body:5": 0,
            "subject:0": 0.13,
            "NONE": 0.36
          },
          "confidence": 0.25
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:3": 0.01,
            "body:4": 0.95,
            "body:1": 0.01,
            "body:2": 0,
            "body:0": 0,
            "body:5": 0,
            "subject:0": 0,
            "NONE": 0.03
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 2506,
        "output_tokens": 278
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1089.3722800000105,
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
    "seq": 708,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-146",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:06.645Z",
    "offsetMs": 0.6099899999971967
  },
  {
    "seq": 709,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-146",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:07.238Z",
    "offsetMs": 593.5105650000041,
    "elapsedMs": 592.5603260000062,
    "outcome": "success"
  },
  {
    "seq": 710,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-146",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:07.240Z",
    "offsetMs": 596.02543899999
  },
  {
    "seq": 711,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-146",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:07.733Z",
    "offsetMs": 1089.1303459999908,
    "elapsedMs": 492.6289129999932,
    "outcome": "success"
  },
  {
    "seq": 712,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-146",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:07.734Z",
    "offsetMs": 1089.4234820000129,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "024476cf0fb79223aa778c57c4be45184809ad44f9938727bc9da1051d9b92cc";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":709},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":711},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":712}} as const;
export const projectionSha256 = "9ee44f252f7d5e8352ad684d96a615419b75f3fdd6d7321ebaad10466f3e5d10";
