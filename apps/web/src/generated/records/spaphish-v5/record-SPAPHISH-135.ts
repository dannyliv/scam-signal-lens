import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-135",
  "inputSha256": "e20a750fe84d884ed1ab9581241f15ad23dfc1e68e94e31dcb1dc761dc2f5ac7",
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
      "end": 30,
      "text": "INGRESO CERTIFICACIONES GOOGLE"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 18,
      "text": "Estimado docente:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 18,
      "end": 19,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 19,
      "end": 201,
      "text": "Agradecemos el interés por formar parte de la certificación “Google Cloud Computing Foundations Certificate” y te invitamos a iniciar tu registro en el siguiente enlace electrónico:\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 201,
      "end": 238,
      "text": "https://www.cloudskillsboost.google/\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 238,
      "end": 239,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 239,
      "end": 365,
      "text": "De igual forma, encontrarás un archivo adjunto donde se comparten los pasos a seguir, así como un enlace a un video de apoyo.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 365,
      "end": 366,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 366,
      "end": 510,
      "text": "Te deseamos el mejor de los éxitos y esperamos que los aprendizajes adquiridos contribuyan al fortalecimiento de tus habilidades profesionales.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 510,
      "end": 511,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 511,
      "end": 621,
      "text": "Cualquier duda o comentario, puedes escribirnos al correo electrónico contacto.certificaciones@centrocloud.mx\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 621,
      "end": 622,
      "text": "."
    }
  ],
  "passA": {
    "requestSha256": "a03d843c57f614b5d380c3c9f1955233bdf317cdfb898820cdea82b43ada2f6c",
    "capturedAt": "2026-09-20T23:44:34.160Z",
    "elapsedMs": 139.09745800000383,
    "successfulAttemptElapsedMs": 137.69145800000115,
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
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.78
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.1
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
            "informational": 0.01,
            "active_request": 0.99
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.58,
            "independently_established": 0,
            "sender_supplied": 0.41,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.44
        }
      },
      "usage": {
        "input_tokens": 3583,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "238efb3aadc07a128333b498695521255eb03befa05b6b47a80e557c7459ac06",
    "capturedAt": "2026-09-20T23:44:34.251Z",
    "elapsedMs": 87.96054199999344,
    "successfulAttemptElapsedMs": 86.06866699999955,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.13,
            "body:0": 0.42,
            "body:6": 0,
            "body:9": 0.28,
            "body:3": 0,
            "subject:0": 0.01,
            "body:7": 0.01,
            "body:5": 0,
            "body:10": 0,
            "body:1": 0,
            "body:8": 0,
            "body:4": 0.01,
            "NONE": 0.14
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 1000,
        "output_tokens": 141
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 230.3030409999992,
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
    "seq": 662,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-135",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:34.022Z",
    "offsetMs": 0.9139579999973648
  },
  {
    "seq": 663,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-135",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:34.160Z",
    "offsetMs": 139.09858299999905,
    "elapsedMs": 137.69145800000115,
    "outcome": "success"
  },
  {
    "seq": 664,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-135",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:34.164Z",
    "offsetMs": 143.2410830000008
  },
  {
    "seq": 665,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-135",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:34.251Z",
    "offsetMs": 230.03624999999738,
    "elapsedMs": 86.06866699999955,
    "outcome": "success"
  },
  {
    "seq": 666,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-135",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:34.251Z",
    "offsetMs": 230.37704099999974,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f5b3c6553133dbafe00c9963e35168812ab3a2f5ffb8e333367fcd729d115053";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":663},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":665},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":666}} as const;
export const projectionSha256 = "cf4776ffbf5bdf320bef18e07e14b3a4079d31ddd1f2124321845301f568aa45";
