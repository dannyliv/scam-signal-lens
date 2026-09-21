import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-164",
  "inputSha256": "d54f438b3bf45f2b1ae0eb04f6636d6d6cf188db39b089133bfa46450ef46720",
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
      "text": "Ezequiela Miguelina - Has ganado un Compresor de Aire Portátil para Neumáticos Bosch 🎁, ID#2905"
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
      "end": 251,
      "text": "Compresor de Aire Portátil para Neumáticos Bosch Haz clic aquí para reclamar ¡Felicidades! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 251,
      "end": 341,
      "text": "Has sido seleccionado para participar en nuestro programa de fidelidad de forma GRATUITA. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 341,
      "end": 398,
      "text": "Solo te llevará un minuto recibir este fantástico premio."
    }
  ],
  "passA": {
    "requestSha256": "a4f15f7aceb6714c36ae89bb868a1dc08e9a91971cbe64d7d969b6c5baf1e44b",
    "capturedAt": "2026-09-20T23:44:43.537Z",
    "elapsedMs": 124.17670899999939,
    "successfulAttemptElapsedMs": 122.72550000000047,
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
          "noul": 0.24
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.1
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.94
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.69
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.31
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.24
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.07
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.29,
            "sender_supplied": 0.7,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 3555,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "acaef00a70d9d7f7c2e9ac1a5c3af2684f95b9ce87f041fa99134785781655b5",
    "capturedAt": "2026-09-20T23:44:43.685Z",
    "elapsedMs": 146.28445900000224,
    "successfulAttemptElapsedMs": 144.6838329999955,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0.02,
            "body:0": 0,
            "body:5": 0,
            "body:1": 0,
            "NONE": 0.95,
            "subject:0": 0,
            "body:2": 0.03,
            "body:6": 0,
            "body:3": 0
          },
          "confidence": 0.93
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:4": 0,
            "body:0": 0.76,
            "body:5": 0,
            "body:1": 0.08,
            "NONE": 0,
            "subject:0": 0,
            "body:2": 0.16,
            "body:6": 0,
            "body:3": 0
          },
          "confidence": 0.72
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:6": 0,
            "body:0": 0,
            "body:5": 0.16,
            "body:1": 0,
            "NONE": 0.34,
            "subject:0": 0,
            "body:2": 0.01,
            "body:4": 0,
            "body:3": 0.49
          },
          "confidence": 0.42
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0.01,
            "body:3": 0,
            "body:5": 0,
            "body:1": 0,
            "NONE": 0.9,
            "subject:0": 0,
            "body:2": 0.05,
            "body:6": 0.02,
            "body:0": 0.02
          },
          "confidence": 0.88
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0.02,
            "body:0": 0,
            "body:5": 0.04,
            "body:1": 0,
            "NONE": 0.92,
            "subject:0": 0,
            "body:2": 0.01,
            "body:6": 0.01,
            "body:3": 0
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 2817,
        "output_tokens": 507
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 273.0340420000066,
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
        "status": "none_selected",
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
    "seq": 803,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-164",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:43.413Z",
    "offsetMs": 0.9614580000052229
  },
  {
    "seq": 804,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-164",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:43.536Z",
    "offsetMs": 124.17812500000582,
    "elapsedMs": 122.72550000000047,
    "outcome": "success"
  },
  {
    "seq": 805,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-164",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:43.539Z",
    "offsetMs": 127.26720800000476
  },
  {
    "seq": 806,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-164",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:43.685Z",
    "offsetMs": 272.56287500000326,
    "elapsedMs": 144.6838329999955,
    "outcome": "success"
  },
  {
    "seq": 807,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-164",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:43.685Z",
    "offsetMs": 273.111917000002,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e1246c9d32ed1bfd3bc352ba5c5269cfb9816bd576db12c23b5ef357ab35d16c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":804},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":806},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":807}} as const;
export const projectionSha256 = "21991042598cfdd405478500b7801014a587df4f087de43741a27e13584c1688";
