import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-385",
  "inputSha256": "c1d5231e0680db85ed924ddcc80f8b156caf5160fdabd7fb422764af61353a2f",
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
      "end": 65,
      "text": "¡Encuentre su lugar de vacunación contra la COVID-19 más cercano!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 28,
      "text": "¡Su paquete está en camino! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 28,
      "end": 79,
      "text": "Se entregará (1) paquete a su dirección en España. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 79,
      "end": 149,
      "text": "Use el código a continuación para rastrear su paquete en tiempo real. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 149,
      "end": 236,
      "text": "Planifique su entrega y manténgase informado con nuestras notificaciones instantáneas. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 236,
      "end": 290,
      "text": "Nos aseguramos de que su entrega sea rápida y segura. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 290,
      "end": 472,
      "text": "Rastree su envío Rastree su paquete de manera rápida y sencilla: Número de seguimiento: [7829406135] Si no desea recibir más correos de este tipo, haga clic aquí para darse de baja. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 472,
      "end": 519,
      "text": "Política de privacidad | Términos y condiciones"
    }
  ],
  "passA": {
    "requestSha256": "25e55bd8aad19b80b3bf59e97564dd67e10068a4c763d8089ac1c5135556c9b6",
    "capturedAt": "2026-09-20T23:46:01.357Z",
    "elapsedMs": 120.95754099999613,
    "successfulAttemptElapsedMs": 118.7539170000091,
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
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.29
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.09
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.18,
            "mixed_or_unclear": 0.1,
            "active_request": 0.72,
            "educational_or_quoted": 0
          },
          "confidence": 0.62
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.86,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.13
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 3575,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "0891b37398de2e0d9125cee503e1702554b26e802d1471a715664aa1fff9ce3d",
    "capturedAt": "2026-09-20T23:46:01.477Z",
    "elapsedMs": 117.3451250000071,
    "successfulAttemptElapsedMs": 113.77574999998615,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "subject:0": 0.06,
            "body:4": 0.1,
            "body:3": 0.01,
            "body:0": 0.02,
            "body:2": 0.02,
            "body:6": 0,
            "NONE": 0.78,
            "body:5": 0.01
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 939,
        "output_tokens": 102
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 241.04750000000058,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
        "status": "none_selected",
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
    "seq": 1888,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-385",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:01.238Z",
    "offsetMs": 1.6476669999974547
  },
  {
    "seq": 1889,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-385",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:01.357Z",
    "offsetMs": 120.95687499998894,
    "elapsedMs": 118.7539170000091,
    "outcome": "success"
  },
  {
    "seq": 1890,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-385",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:01.362Z",
    "offsetMs": 125.98141699998814
  },
  {
    "seq": 1891,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-385",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:01.477Z",
    "offsetMs": 240.85158299999603,
    "elapsedMs": 113.77574999998615,
    "outcome": "success"
  },
  {
    "seq": 1892,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-385",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:01.477Z",
    "offsetMs": 241.09691699998803,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "08e28606ab0aee95697f7d46c985b39a9408a1871987bbb20442c37d5fc57394";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1889},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1891},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1892}} as const;
export const projectionSha256 = "a6ce157e67608c508ddce6e84b9b52bc2741b3338c2b2aab1e93b75a26a24e13";
