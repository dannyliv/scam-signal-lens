import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-175",
  "inputSha256": "c70292bd19dfdcac5cd6cd707cb3d1885f0f0f34c89938fbfdd1a5789b5d3e36",
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
      "end": 40,
      "text": "Pablito: Tienes (1) mensaje de nosotros."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 33,
      "text": "ENTREGA DEL ¡PAQUETE SUSPENDIDO! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 33,
      "end": 222,
      "text": "Estado: Detenido en el centro de distribución (cargo aduanero pendiente) Puede aplicarse una tarifa de entrega Tu código de rastreo: FE983620415MX Programar entrega ahora Annulla iscrizione"
    }
  ],
  "passA": {
    "requestSha256": "260021b47965293e6369ea1988d55772eba989d8de55d7d2d244d6b1d4842f92",
    "capturedAt": "2026-09-20T23:44:47.254Z",
    "elapsedMs": 217.9759999999951,
    "successfulAttemptElapsedMs": 216.04520900000352,
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
          "noul": 0.19
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.52
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.75
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.61
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.48
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.14
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.97,
            "mixed_or_unclear": 0.03,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.31,
            "sender_supplied": 0.65,
            "mixed_or_unknown": 0.04
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 3502,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "5c3e12733ff987b967b16f7a2d5e5de77a53632e8b25f1a443a333ca92f76e21",
    "capturedAt": "2026-09-20T23:44:47.464Z",
    "elapsedMs": 208.03520800000115,
    "successfulAttemptElapsedMs": 206.80004099999496,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.31,
            "body:1": 0.69
          },
          "confidence": 0.58
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.04,
            "NONE": 0.05,
            "body:1": 0.91
          },
          "confidence": 0.88
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.29,
            "body:0": 0.08,
            "NONE": 0.29,
            "body:1": 0.34
          },
          "confidence": 0.12
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.88,
            "body:1": 0.12
          },
          "confidence": 0.84
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.29,
            "body:1": 0.71
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 2135,
        "output_tokens": 285
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 427.54125000000204,
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
        "status": "low_confidence",
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
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "low_confidence",
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
    "seq": 856,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-175",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:47.037Z",
    "offsetMs": 1.259582999999111
  },
  {
    "seq": 857,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-175",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:47.254Z",
    "offsetMs": 217.97870800000237,
    "elapsedMs": 216.04520900000352,
    "outcome": "success"
  },
  {
    "seq": 858,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-175",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:47.256Z",
    "offsetMs": 219.97762499999953
  },
  {
    "seq": 859,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-175",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:47.463Z",
    "offsetMs": 427.3003749999989,
    "elapsedMs": 206.80004099999496,
    "outcome": "success"
  },
  {
    "seq": 860,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-175",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:47.464Z",
    "offsetMs": 427.58791600000404,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "20ddeb4e4031f5509b3ebc3581c56f80779251b40a2f91db79389b948d8e287d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":857},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":859},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":860}} as const;
export const projectionSha256 = "8b2b962e0a6d62dbc5d28381475de80d7605bf1fdd2e0d803372353df1ef4ba4";
