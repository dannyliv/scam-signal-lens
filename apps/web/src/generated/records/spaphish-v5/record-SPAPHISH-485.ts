import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-485",
  "inputSha256": "d3f8adbe82c83995ab771329a48e979f7a8d5e2837beba79827a63cd838960d0",
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
      "end": 21,
      "text": "Tiene nuevos mensajes"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 169,
      "text": "Hola, ricardo.perez@corporate.net: Usted tiene nuevas notificaciones importantes de servicio relacionadas con su correo electrónico que requieren su atención inmediata. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 169,
      "end": 238,
      "text": "Se requiere que siga los pasos necesarios usando el siguiente botón. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 238,
      "end": 352,
      "text": "Leer este mensaje Estamos trabajando constantemente para prestarle un excelente servicio en todas nuestras redes. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 352,
      "end": 428,
      "text": "Si no sigue los pasos, podría estar en riesgo de perder todos sus mensajes. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 428,
      "end": 470,
      "text": "Atentamente, Equipo de servicios de correo"
    }
  ],
  "passA": {
    "requestSha256": "8c8cc1a3c6a8b4228a0673502ccc8f62d8189b8b55d716581f6b618d73ed6e91",
    "capturedAt": "2026-09-20T23:46:34.771Z",
    "elapsedMs": 170.38779100001557,
    "successfulAttemptElapsedMs": 168.6340420000197,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.25
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.16
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.49
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.15,
            "sender_supplied": 0.8200000000000001,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 3515,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "8c3e89c2ed8e25311dbd04e7a3a576640b3511939059520bac185418a0e9848b",
    "capturedAt": "2026-09-20T23:46:34.959Z",
    "elapsedMs": 187.71945799997775,
    "successfulAttemptElapsedMs": 186.93829099999857,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0,
            "body:0": 0,
            "body:3": 0.01,
            "NONE": 0.77,
            "body:4": 0,
            "body:1": 0.22
          },
          "confidence": 0.73
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0,
            "body:0": 0.06,
            "body:3": 0.93,
            "NONE": 0,
            "body:4": 0,
            "body:1": 0.01
          },
          "confidence": 0.91
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.05,
            "body:0": 0.1,
            "body:3": 0,
            "NONE": 0,
            "body:4": 0.85,
            "body:1": 0
          },
          "confidence": 0.82
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0,
            "body:0": 0,
            "body:3": 0.07,
            "NONE": 0.6900000000000001,
            "body:4": 0,
            "body:1": 0.24
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 2022,
        "output_tokens": 334
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 358.80320799999754,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "none_selected",
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
        "segmentId": "body:3"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:4"
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
    "seq": 2383,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-485",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:34.602Z",
    "offsetMs": 1.3260000000009313
  },
  {
    "seq": 2384,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-485",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:34.771Z",
    "offsetMs": 170.3904169999878,
    "elapsedMs": 168.6340420000197,
    "outcome": "success"
  },
  {
    "seq": 2385,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-485",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:34.772Z",
    "offsetMs": 171.5334579999908
  },
  {
    "seq": 2386,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-485",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:34.959Z",
    "offsetMs": 358.708707999991,
    "elapsedMs": 186.93829099999857,
    "outcome": "success"
  },
  {
    "seq": 2387,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-485",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:34.960Z",
    "offsetMs": 358.824249999976,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "763744629681ea53ff5376262a123e5cc64e5642791bee7c506ee8319c82f180";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2384},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2386},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2387}} as const;
export const projectionSha256 = "d6dd24a46424cacaa2e27fe65e835fb251870df0ff1147610b57da7e825c9465";
