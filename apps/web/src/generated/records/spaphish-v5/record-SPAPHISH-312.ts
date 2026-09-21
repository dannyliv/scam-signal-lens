import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-312",
  "inputSha256": "3afc9ef3fc1aa399201782ea86d432f8c7cf727c4d6fe2f5a7a25a08c568ea09",
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
      "end": 64,
      "text": "Confirmar recibo, Pablito: Tu paquete 📦 está siendo entregado !"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 52,
      "text": "Paquete Suspendido ENTREGA DEL ¡PAQUETE SUSPENDIDO! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 52,
      "end": 224,
      "text": "Estado: Detenido en el centro de distribución ( cargo aduanero pendiente ) Puede aplicarse una tarifa de entrega Tu código de rastreo: ES541472056MX Programar entrega ahora"
    }
  ],
  "passA": {
    "requestSha256": "92a0282d34be1b9650de93c18a6281451ab4f5e51c927610d7635bd8346c5b70",
    "capturedAt": "2026-09-20T23:45:36.630Z",
    "elapsedMs": 159.73208300000988,
    "successfulAttemptElapsedMs": 157.88941600000544,
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
          "noul": 0.25
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.56
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.74
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.51
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.33
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.57
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.33,
            "independently_established": 0,
            "mixed_or_unknown": 0.09,
            "sender_supplied": 0.58
          },
          "confidence": 0.44
        }
      },
      "usage": {
        "input_tokens": 3510,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "76c1d85bb6934d318631fceb9e6f4bbf77ba1396015d505626a95bf8790569e1",
    "capturedAt": "2026-09-20T23:45:36.777Z",
    "elapsedMs": 144.56408300000476,
    "successfulAttemptElapsedMs": 142.5379999999859,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.8,
            "subject:0": 0,
            "body:1": 0.2
          },
          "confidence": 0.73
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.18,
            "subject:0": 0,
            "body:1": 0.82
          },
          "confidence": 0.76
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.02,
            "body:1": 0.98,
            "subject:0": 0
          },
          "confidence": 0.97
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.02,
            "NONE": 0.41,
            "subject:0": 0.29,
            "body:1": 0.28
          },
          "confidence": 0.22
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.93,
            "subject:0": 0,
            "body:1": 0.07
          },
          "confidence": 0.91
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.12,
            "subject:0": 0,
            "body:1": 0.88
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 2557,
        "output_tokens": 336
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 307.1493749999936,
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
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 1525,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-312",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:36.471Z",
    "offsetMs": 1.2532919999939622
  },
  {
    "seq": 1526,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-312",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:36.630Z",
    "offsetMs": 159.73166700000002,
    "elapsedMs": 157.88941600000544,
    "outcome": "success"
  },
  {
    "seq": 1527,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-312",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:36.634Z",
    "offsetMs": 163.55158299999312
  },
  {
    "seq": 1528,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-312",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:36.777Z",
    "offsetMs": 306.7607080000016,
    "elapsedMs": 142.5379999999859,
    "outcome": "success"
  },
  {
    "seq": 1529,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-312",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:36.777Z",
    "offsetMs": 307.226874999993,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2a0ce980ec3e9ff6b19997b3c906f17ae6cb7f95fd662de589922daa472242ea";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1526},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1528},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1529}} as const;
export const projectionSha256 = "cc288c034dff23453c3c9da4172922405e4690cedacdb69d6742f47d351f3500";
