import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-305",
  "inputSha256": "bb20a095553f19a439f73ae2b311ded94b3e8e3a9a1af6837eaeda520d12e1a0",
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
      "end": 50,
      "text": "Atención: Tiene un paquete que no ha sido recibido"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 59,
      "text": "Elija la dirección, el día y la hora que más le convengan. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 59,
      "end": 157,
      "text": "Ahora dispone de 48 horas ENTREGA DEL PAQUETE SUSPENDIDO Tienes (1) paquete en espera de entrega. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 157,
      "end": 200,
      "text": "Usa tu código para rastrearlo y recibirlo. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 200,
      "end": 311,
      "text": "Programa tu entrega y suscríbete a nuestro calendario de notificaciones para evitar que esto suceda ¡otra vez! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 311,
      "end": 417,
      "text": "Su código de seguimiento FR78152044Z Programa tu entrega Esperamos que disfrutes recibiendo este mensaje. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 417,
      "end": 532,
      "text": "Sin embargo, si prefieres no recibir correos electrónicos en el futuro, por favor haz clic aquí para darte de baja."
    }
  ],
  "passA": {
    "requestSha256": "46ab0598c32a90fdc2513ab5350dd711e6a69fb80f3c91728dad95ba773b2315",
    "capturedAt": "2026-09-20T23:45:34.261Z",
    "elapsedMs": 161.51916700000584,
    "successfulAttemptElapsedMs": 159.57712499999616,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.09
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.92
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.59
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.2
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.08
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.57,
            "sender_supplied": 0.41,
            "independently_established": 0
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 3575,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "963f1e245ceb792d875662c7638b4cce005a1b0a41978df0c8478cdb639b8c6a",
    "capturedAt": "2026-09-20T23:45:34.437Z",
    "elapsedMs": 174.87374999999884,
    "successfulAttemptElapsedMs": 173.62912500000675,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.97,
            "body:0": 0,
            "NONE": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:5": 0,
            "body:3": 0.03,
            "body:4": 0
          },
          "confidence": 0.97
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.07,
            "body:0": 0,
            "NONE": 0.75,
            "subject:0": 0.05,
            "body:5": 0.01,
            "body:2": 0.02,
            "body:3": 0.07,
            "body:4": 0.03
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 1408,
        "output_tokens": 185
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 337.9354170000006,
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 1493,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-305",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:34.101Z",
    "offsetMs": 1.369583000006969
  },
  {
    "seq": 1494,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-305",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:34.261Z",
    "offsetMs": 161.52045799999905,
    "elapsedMs": 159.57712499999616,
    "outcome": "success"
  },
  {
    "seq": 1495,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-305",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:34.263Z",
    "offsetMs": 163.7022500000021
  },
  {
    "seq": 1496,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-305",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:34.437Z",
    "offsetMs": 337.78216699999757,
    "elapsedMs": 173.62912500000675,
    "outcome": "success"
  },
  {
    "seq": 1497,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-305",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:34.437Z",
    "offsetMs": 337.9768330000079,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "18e4e521021126a096363207f400a8b34149ca2019ced4fcd571b893f175d452";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1494},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1496},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1497}} as const;
export const projectionSha256 = "4d70e18e23752847098fc2e46284a1822ec26581a0ecb9345cd6327b9d4f11e5";
