import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-026",
  "inputSha256": "d2f9b80cba001df60ebc3dd59abb047db942c836c9435d4989df980206264a4a",
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
      "end": 96,
      "text": "Ezequiela Miguelina - Has ganado un Compresor de Aire Portátil para Neumáticos Bosch 🎁, ID#0621"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 13,
      "text": "¡Date prisa! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 13,
      "end": 56,
      "text": "¡El número de premios a ganar es limitado! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 56,
      "end": 73,
      "text": "¡Confirma ahora! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 73,
      "end": 160,
      "text": "REPSOL® Podrás ganar un premio exclusivo ¡Has sido seleccionado para recibir un nuevo! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 160,
      "end": 249,
      "text": "Inflador de Neumáticos Eléctrico Marca Premium Haz clic aquí para reclamar ¡Felicidades! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 249,
      "end": 339,
      "text": "Has sido seleccionado para participar en nuestro programa de fidelidad de forma GRATUITA. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 339,
      "end": 397,
      "text": "Solo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 397,
      "end": 499,
      "text": "Si ya no deseas recibir estos correos electrónicos, puedes cancelar tu suscripción haciendo clic aquí."
    }
  ],
  "passA": {
    "requestSha256": "3c175892393aabb288c857a2add2eafa659a14abc6dcd43ed9dfae1e12ccaae9",
    "capturedAt": "2026-09-20T23:43:59.572Z",
    "elapsedMs": 216.4164579999997,
    "successfulAttemptElapsedMs": 215.51737499999945,
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
          "noul": 0.19
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.09
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.93
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.62
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.25
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.17
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.05
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
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.62,
            "no_sensitive_action": 0.37,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 3575,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "e8fafb723754366d5de0c5e9b2a87f8bbe33ad0435ee52dd94053b3181bdfe8f",
    "capturedAt": "2026-09-20T23:43:59.707Z",
    "elapsedMs": 130.7584999999999,
    "successfulAttemptElapsedMs": 128.48983299999963,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:7": 0,
            "body:0": 0.74,
            "body:5": 0,
            "body:2": 0.16,
            "body:3": 0,
            "body:4": 0,
            "subject:0": 0,
            "NONE": 0,
            "body:1": 0.1,
            "body:6": 0
          },
          "confidence": 0.7
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:7": 0.01,
            "body:0": 0,
            "body:5": 0.13,
            "body:2": 0,
            "body:3": 0.48,
            "body:4": 0,
            "subject:0": 0.01,
            "body:6": 0,
            "body:1": 0,
            "NONE": 0.37
          },
          "confidence": 0.42
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0,
            "body:0": 0.02,
            "body:5": 0,
            "body:2": 0.06,
            "body:3": 0,
            "body:4": 0.01,
            "subject:0": 0,
            "body:6": 0.02,
            "body:1": 0,
            "NONE": 0.89
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 1966,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 351.25129200000083,
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
        "segmentId": "body:0"
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
    "seq": 124,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-026",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:59.356Z",
    "offsetMs": 0.5375000000003638
  },
  {
    "seq": 125,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-026",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:59.572Z",
    "offsetMs": 216.413958000001,
    "elapsedMs": 215.51737499999945,
    "outcome": "success"
  },
  {
    "seq": 126,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-026",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:59.577Z",
    "offsetMs": 221.33420800000022
  },
  {
    "seq": 127,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-026",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:59.706Z",
    "offsetMs": 350.70979199999965,
    "elapsedMs": 128.48983299999963,
    "outcome": "success"
  },
  {
    "seq": 128,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-026",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:59.707Z",
    "offsetMs": 351.4248750000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "719b05d2affad935411b162360aa7e0f9b248f6be607677309ea88918465c9d3";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":125},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":127},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":128}} as const;
export const projectionSha256 = "cfb005c504a89710f9fad86520a7f7a64ed5453effab3be7fb1b7c4b9b819ab8";
