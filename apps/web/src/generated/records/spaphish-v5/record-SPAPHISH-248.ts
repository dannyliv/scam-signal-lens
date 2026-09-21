import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-248",
  "inputSha256": "97292837cdc30b12e183e68dc17f25816e779a3d16e072815c1a4f4cc7d379a2",
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
      "end": 55,
      "text": "Su cuenta de Zoom ha sido suspendida - ACCIÓN REQUERIDA"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 42,
      "text": "Estimado ricardo.lopez@empresa-secura.com\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 42,
      "end": 171,
      "text": ": Esta es una alerta para informarle que su cuenta de Zoom vinculada con la dirección de correo ricardo.lopez@empresa-secura.com\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 171,
      "end": 206,
      "text": " ha sido suspendida temporalmente. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 206,
      "end": 340,
      "text": "Para reactivar su cuenta, debe hacer clic en el siguiente enlace y seguir las instrucciones. https://www.verificar-zoom.com/reactivar\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 340,
      "end": 392,
      "text": " Esperamos solucionar el problema lo antes posible. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 392,
      "end": 449,
      "text": "Si tiene preguntas, no dude en comunicarse con nosotros. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 449,
      "end": 458,
      "text": "Gracias. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 458,
      "end": 462,
      "text": "Zoom"
    }
  ],
  "passA": {
    "requestSha256": "1da78ccd6dfe294fb2a5076895658c1f49bf0046f3fbdd968e486bf0be4bf157",
    "capturedAt": "2026-09-20T23:45:13.617Z",
    "elapsedMs": 265.132792000004,
    "successfulAttemptElapsedMs": 263.2461250000051,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.28
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.25
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
          "noul": 0.68
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
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
            "independently_established": 0,
            "no_sensitive_action": 0.03,
            "sender_supplied": 0.97,
            "mixed_or_unknown": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3556,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "9148a30a9f046915b5c0ddd5ff3d919e2b5a94a94f38227ae3769f65379d23db",
    "capturedAt": "2026-09-20T23:45:13.880Z",
    "elapsedMs": 261.03475000000617,
    "successfulAttemptElapsedMs": 259.2368750000023,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:7": 0,
            "body:2": 0,
            "body:4": 0,
            "body:3": 0.4,
            "body:1": 0,
            "body:0": 0,
            "body:6": 0,
            "NONE": 0.6,
            "body:5": 0
          },
          "confidence": 0.55
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:7": 0,
            "body:2": 0,
            "body:4": 0,
            "body:3": 0.22,
            "body:1": 0,
            "body:0": 0,
            "body:6": 0,
            "NONE": 0.78,
            "body:5": 0
          },
          "confidence": 0.75
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.64,
            "body:7": 0,
            "body:2": 0.04,
            "NONE": 0.01,
            "body:3": 0.31,
            "body:1": 0,
            "body:0": 0,
            "body:6": 0,
            "body:4": 0,
            "body:5": 0
          },
          "confidence": 0.58
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "subject:0": 0.03,
            "body:7": 0.57,
            "body:2": 0.02,
            "body:4": 0.01,
            "body:3": 0.09,
            "body:1": 0.19,
            "body:0": 0,
            "body:6": 0,
            "NONE": 0.03,
            "body:5": 0.06
          },
          "confidence": 0.54
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:7": 0,
            "body:2": 0,
            "NONE": 0.78,
            "body:3": 0.15,
            "body:1": 0,
            "body:0": 0,
            "body:6": 0,
            "body:4": 0,
            "body:5": 0.07
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 2889,
        "output_tokens": 549
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 528.973416000008,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "none_selected",
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
    "seq": 1213,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-248",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:13.352Z",
    "offsetMs": 1.3033750000031432
  },
  {
    "seq": 1214,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-248",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:13.616Z",
    "offsetMs": 265.13345800001116,
    "elapsedMs": 263.2461250000051,
    "outcome": "success"
  },
  {
    "seq": 1215,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-248",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:13.620Z",
    "offsetMs": 268.6699579999986
  },
  {
    "seq": 1216,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-248",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:13.880Z",
    "offsetMs": 528.4958750000078,
    "elapsedMs": 259.2368750000023,
    "outcome": "success"
  },
  {
    "seq": 1217,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-248",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:13.880Z",
    "offsetMs": 529.0786250000092,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0ecc3a240a4edca4231ed2fbdaf703e84b56011a714991043cf664b40b324053";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1214},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1216},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1217}} as const;
export const projectionSha256 = "9ac3df4625cc9621aa0ddfa857bde4504522d71c050955c5e51fa4c588bb6e1c";
