import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-175",
  "inputSha256": "c70292bd19dfdcac5cd6cd707cb3d1885f0f0f34c89938fbfdd1a5789b5d3e36",
  "questionBundleSha256": "9631a5b623f8c05b491dc5a5f67ab9b62e5b1898446a722339eaa0c16a40af8b",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "42e51b1f7b8706dae7188d0d3fa8c6ac83b855b21f393196bd63bc16d4b91d93",
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
    "requestSha256": "5dc2a03ca7fb377a38ed739d9743cee96da68b5c41e6559ba50d5e8e196923d6",
    "capturedAt": "2026-09-22T03:51:40.820Z",
    "elapsedMs": 625.2882600000012,
    "successfulAttemptElapsedMs": 624.3589639999846,
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
          "noul": 0.2
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.51
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.75
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.7
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.37
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.45
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.17
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 0.96,
            "mixed_or_unclear": 0.04,
            "educational_or_quoted": 0
          },
          "confidence": 0.94
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.61,
            "no_sensitive_action": 0.35,
            "mixed_or_unknown": 0.04,
            "independently_established": 0
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 4952,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "79fa588579adad5bc528c88d71d57bb128b373088cc1094de57031584b95abe5",
    "capturedAt": "2026-09-22T03:51:41.372Z",
    "elapsedMs": 550.110326999973,
    "successfulAttemptElapsedMs": 549.1609880000178,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.36,
            "subject:0": 0,
            "body:1": 0.64,
            "body:0": 0
          },
          "confidence": 0.51
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.04,
            "subject:0": 0,
            "body:1": 0.94,
            "body:0": 0.02
          },
          "confidence": 0.91
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.38,
            "subject:0": 0.18,
            "body:1": 0.39,
            "body:0": 0.05
          },
          "confidence": 0.18
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.85,
            "subject:0": 0,
            "body:1": 0.15,
            "body:0": 0
          },
          "confidence": 0.79
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.27,
            "subject:0": 0,
            "body:1": 0.72,
            "body:0": 0.01
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 2657,
        "output_tokens": 285
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1177.0136280000152,
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
    "seq": 850,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-175",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:40.195Z",
    "offsetMs": 0.6588110000011511
  },
  {
    "seq": 851,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-175",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:40.820Z",
    "offsetMs": 625.2889279999945,
    "elapsedMs": 624.3589639999846,
    "outcome": "success"
  },
  {
    "seq": 852,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-175",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:40.822Z",
    "offsetMs": 627.2767710000044
  },
  {
    "seq": 853,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-175",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:41.371Z",
    "offsetMs": 1176.7540000000154,
    "elapsedMs": 549.1609880000178,
    "outcome": "success"
  },
  {
    "seq": 854,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-175",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:41.372Z",
    "offsetMs": 1177.0563599999878,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3760ad71a796baf743ebdbef628dc2089cfe9f3dc36918dcc6dbf427a9e1a8cb";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":851},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":853},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":854}} as const;
export const projectionSha256 = "1b7682832e36b7b32f2157feea77a9dc5651fe725459820b0c3db345fec92f39";
