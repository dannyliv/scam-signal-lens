import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-336",
  "inputSha256": "98a058e911aac7cd74fe7fc127f6f49e906efd9a6d55d9f08e76f9ee4dacf854",
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
      "end": 69,
      "text": "Ezequiela Miguelina! - Has ganado un paquete de senderismo Quechua 🎁"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 64,
      "text": "Solo se necesita un minuto para recibir este fantástico premio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 64,
      "end": 135,
      "text": "DECATHLON El ganador de hoy es Laura Castillo, ¡HAS SIDO SELECCIONADO! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 135,
      "end": 222,
      "text": "Para recibir tu regalo: Paquete de Senderismo Aventura Reclama tu regalo ¡Felicidades! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 222,
      "end": 301,
      "text": "Has sido seleccionado para participar gratis en nuestro programa de fidelidad. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 301,
      "end": 358,
      "text": "Solo te tomará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 358,
      "end": 386,
      "text": "© 2025 GRUPO DECATHLON B.V. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 386,
      "end": 477,
      "text": "Si ya no deseas recibir estos correos electrónicos, puedes darte de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "d0d3b3506cb836791575321b959042a791b84a658b73bf4596c98c9e96be25fc",
    "capturedAt": "2026-09-20T23:45:45.222Z",
    "elapsedMs": 135.78816700000607,
    "successfulAttemptElapsedMs": 133.48337499999616,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.21
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.1
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.39
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.83
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.22
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.15
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
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.44,
            "mixed_or_unknown": 0.04,
            "no_sensitive_action": 0.52
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 3568,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "13de0f07780b18ffb68565f2109b4542c24ee874c7c091040a48fd1e9789b87e",
    "capturedAt": "2026-09-21T00:57:28.897Z",
    "elapsedMs": 121.13591699999961,
    "successfulAttemptElapsedMs": 118.27779199999895,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.97,
            "body:4": 0,
            "body:3": 0,
            "body:0": 0,
            "body:1": 0,
            "body:2": 0.03,
            "subject:0": 0,
            "body:6": 0,
            "body:5": 0
          },
          "confidence": 0.95
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.52,
            "body:4": 0.16,
            "body:3": 0,
            "body:0": 0.15,
            "body:1": 0.06,
            "body:2": 0.11,
            "subject:0": 0,
            "body:6": 0,
            "body:5": 0
          },
          "confidence": 0.45
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.21,
            "body:4": 0,
            "body:3": 0.09,
            "body:0": 0,
            "body:1": 0.5,
            "body:2": 0,
            "subject:0": 0,
            "body:6": 0.01,
            "body:5": 0.19
          },
          "confidence": 0.43
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.98,
            "body:4": 0.01,
            "body:3": 0,
            "body:0": 0.01,
            "body:1": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:6": 0,
            "body:5": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 2398,
        "output_tokens": 402
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 419.37270799999715,
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
    "seq": 1644,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-336",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:45.088Z",
    "offsetMs": 1.6826670000009472
  },
  {
    "seq": 1645,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-336",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:45.222Z",
    "offsetMs": 135.7896250000049,
    "elapsedMs": 133.48337499999616,
    "outcome": "success"
  },
  {
    "seq": 1646,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-336",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:45.225Z",
    "offsetMs": 139.455375000005
  },
  {
    "seq": 1647,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-336",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:45.382Z",
    "offsetMs": 296.31270799999766,
    "elapsedMs": 156.14920800000255,
    "outcome": "success"
  },
  {
    "seq": 1648,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-336",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:45.383Z",
    "offsetMs": 296.51704200000677,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2723,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-336",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:28.778Z",
    "offsetMs": 3.3667919999988953
  },
  {
    "seq": 2724,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-336",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:28.896Z",
    "offsetMs": 122.22829199999978,
    "elapsedMs": 118.27779199999895,
    "outcome": "success"
  },
  {
    "seq": 2725,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-336",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:28.897Z",
    "offsetMs": 122.80654200000026,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "19c42cc87bb5a0a1bc4ee6938ddde2186e9c3fbf9c1a800a6a91abbb620869b9";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1645},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2724},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2725}} as const;
export const projectionSha256 = "4645bac79af217a7a30c1e063f2f3c4fad73beda658cd4a38e7c173b393ec583";
