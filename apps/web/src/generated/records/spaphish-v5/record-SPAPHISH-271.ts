import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-271",
  "inputSha256": "13d85fade0582d996419795dbfb83a627645f2dbe3a6714a8efb1ee24b70ca73",
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
      "end": 60,
      "text": "Has sido seleccionado para obtener una recompensa exclusiva!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 65,
      "text": "El resultado de tu vida depende de las decisiones que tomes hoy. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 65,
      "end": 184,
      "text": "No es vivir lo que importa, sino vivir adecuadamente. amazon Encuesta de compradores 2018 ¡Por favor dinos tu opinión! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 184,
      "end": 222,
      "text": "Empezar ahora >> ¡Tu opinion importa! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 222,
      "end": 259,
      "text": "Cuéntanos tu experiencia con Amazon. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 259,
      "end": 347,
      "text": "Y como muestra de nuestra gratitud, puede elegir entre nuestras increíbles recompensas. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 347,
      "end": 463,
      "text": "Para ser elegible para esta oferta especial, simplemente participe en nuestra encuesta de marketing de 30 segundos. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 463,
      "end": 551,
      "text": "Empezar encuesta Para detener esto, por favor ve aquí o escriba a: 742 Maple Bridge Rd. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 551,
      "end": 584,
      "text": "Suite 5-4123 Clearfield, VT 05488"
    }
  ],
  "passA": {
    "requestSha256": "767ab6c1d83dec0ce7f76153391839cc49c8d10c95ec210bd174d948b5210703",
    "capturedAt": "2026-09-20T23:45:23.018Z",
    "elapsedMs": 175.11575000001176,
    "successfulAttemptElapsedMs": 173.4259999999922,
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
          "noul": 0.15
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.44
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.65
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.09
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.43,
            "independently_established": 0,
            "sender_supplied": 0.56,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 3590,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c86ef832d23a1a82d355ad8719afab8c9c77e68f16de601bf5de055c3b732dc8",
    "capturedAt": "2026-09-20T23:45:23.162Z",
    "elapsedMs": 142.13408399999025,
    "successfulAttemptElapsedMs": 140.62404200001038,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.02,
            "body:7": 0,
            "NONE": 0.02,
            "body:1": 0,
            "body:3": 0,
            "body:4": 0,
            "body:5": 0.07,
            "body:0": 0.67,
            "subject:0": 0,
            "body:6": 0.22
          },
          "confidence": 0.62
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.37,
            "body:7": 0.01,
            "body:2": 0,
            "body:3": 0.12,
            "body:1": 0.39,
            "body:4": 0.01,
            "body:5": 0.06,
            "subject:0": 0.01,
            "body:0": 0,
            "body:6": 0.03
          },
          "confidence": 0.32
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:7": 0.01,
            "NONE": 0.78,
            "body:1": 0,
            "body:3": 0,
            "body:4": 0,
            "body:5": 0.02,
            "subject:0": 0,
            "body:0": 0.01,
            "body:6": 0.17
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 2026,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 319.3237499999959,
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
    "seq": 1327,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-271",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:22.844Z",
    "offsetMs": 1.1188330000004498
  },
  {
    "seq": 1328,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-271",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:23.018Z",
    "offsetMs": 175.11729199999536,
    "elapsedMs": 173.4259999999922,
    "outcome": "success"
  },
  {
    "seq": 1329,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-271",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:23.020Z",
    "offsetMs": 177.8132079999923
  },
  {
    "seq": 1330,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-271",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:23.161Z",
    "offsetMs": 318.96033299999544,
    "elapsedMs": 140.62404200001038,
    "outcome": "success"
  },
  {
    "seq": 1331,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-271",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:23.162Z",
    "offsetMs": 319.40437499999825,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c9000bff7625f82d109fb970bef627e633c16c44b235f799c071e696134cfe2a";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1328},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1330},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1331}} as const;
export const projectionSha256 = "17b3fafe804a704ce74e92fc2f9e0d5ed0ac52ff74345201a95b3e51d1235292";
