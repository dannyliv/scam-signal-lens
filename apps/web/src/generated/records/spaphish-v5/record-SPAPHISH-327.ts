import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-327",
  "inputSha256": "b5ec9b1471e747202720515c85f985a429d6b58875eee162931f9e7806ea49a2",
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
      "end": 37,
      "text": "Bienvenid@ al evento de Kinich School"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 75,
      "text": "Hola Mariana Solís, Gracias por inscribirse para \"El ABC de las Finanzas\". "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 75,
      "end": 199,
      "text": "En esta charla, coach Lía nos hablará sobre la importancia de la educación financiera para nuestras niñas, niños y jóvenes. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 199,
      "end": 293,
      "text": "Durante la sesión proporcionará tips y sugerencias para el aprendizaje financiero en familia. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 293,
      "end": 362,
      "text": "Este es un espacio dirigido a madres, padres o cuidadores primarios. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 362,
      "end": 386,
      "text": "¡Todos son bienvenidos! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 386,
      "end": 433,
      "text": "Envíe sus preguntas a: contacto@aurorakids.edu\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 433,
      "end": 472,
      "text": " Fecha, hora: 22 ago. 2021 06:30 p. m. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 472,
      "end": 615,
      "text": "Villa Aurora Únase desde una PC, Mac, Linux, iOS o Android: Haga clic aquí para unirse Nota: No debe compartir este enlace con otras personas. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 615,
      "end": 641,
      "text": "Es únicamente para usted. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 641,
      "end": 1067,
      "text": "Agregar al calendario Agregar al calendario de Nova Agregar al calendario de Yarro O un toque en iPhone: Estados Unidos: +17205550123,,81420356971# or +18765551234,,81420356971# O teléfono: Marcar: Estados Unidos: +1 702 555 0142 or +1 725 555 0198 or +1 303 555 0119 or +1 312 555 0176 or +1 415 555 0164 or +1 646 555 0183 ID de la reunión: 814 2035 6971 Números internacionales disponibles: https://meetia.net/u/zkP4LmTq89\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1067,
      "end": 1119,
      "text": " Puede cancelar su inscripción en cualquier momento."
    }
  ],
  "passA": {
    "requestSha256": "1700513013894344c3db85c9058909d2aeaae8d55589c77fa0079f5a6c12477b",
    "capturedAt": "2026-09-20T23:45:42.016Z",
    "elapsedMs": 185.23079100000905,
    "successfulAttemptElapsedMs": 183.00937499999418,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.15
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
            "active_request": 0.65,
            "mixed_or_unclear": 0.01,
            "informational": 0.34
          },
          "confidence": 0.52
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.7,
            "sender_supplied": 0.29,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 3843,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "0a5d1d74b74a30233e1f6a3961b2bd32d0e43244825c7c74ead9f81b2492949c",
    "capturedAt": "2026-09-20T23:45:42.196Z",
    "elapsedMs": 176.73945799999638,
    "successfulAttemptElapsedMs": 174.4651670000021,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:6": 0,
            "subject:0": 0.33,
            "body:7": 0.03,
            "NONE": 0.05,
            "body:4": 0,
            "body:1": 0.28,
            "body:0": 0.01,
            "body:3": 0.17,
            "body:10": 0,
            "body:9": 0.01,
            "body:2": 0.02,
            "body:8": 0.01,
            "body:5": 0.09
          },
          "confidence": 0.28
        }
      },
      "usage": {
        "input_tokens": 1528,
        "output_tokens": 141
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 364.95554099998844,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
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
        "status": "not_requested",
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
    "seq": 1599,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-327",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:41.832Z",
    "offsetMs": 1.6118329999881098
  },
  {
    "seq": 1600,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-327",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:42.016Z",
    "offsetMs": 185.23170799999207,
    "elapsedMs": 183.00937499999418,
    "outcome": "success"
  },
  {
    "seq": 1601,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-327",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:42.020Z",
    "offsetMs": 189.47695799999929
  },
  {
    "seq": 1602,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-327",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:42.195Z",
    "offsetMs": 364.6524999999965,
    "elapsedMs": 174.4651670000021,
    "outcome": "success"
  },
  {
    "seq": 1603,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-327",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:42.196Z",
    "offsetMs": 365.05320799999754,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "107a93d99d65b1553fd188cb292fd5fecc234967f54be6d4dca5a1a370633fa2";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1600},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1602},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1603}} as const;
export const projectionSha256 = "65d071e50bf06830a67583a09ae4c9772f16e2945d413cb83b5c49076a4b6c44";
