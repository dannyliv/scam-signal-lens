import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-312",
  "inputSha256": "3afc9ef3fc1aa399201782ea86d432f8c7cf727c4d6fe2f5a7a25a08c568ea09",
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
    "requestSha256": "0f8665231382e674e68c00ee73936bab138c21c0d10b674828980aa5ac2188f2",
    "capturedAt": "2026-09-22T03:54:24.896Z",
    "elapsedMs": 678.1583609999507,
    "successfulAttemptElapsedMs": 677.0377260000096,
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
          "noul": 0.32
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
          "noul": 0.46
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.55
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.59,
            "independently_established": 0,
            "mixed_or_unknown": 0.05,
            "no_sensitive_action": 0.36
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 4960,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "2ea276a118ad03546c0541cc05ff78f3dc1f11069d719708f6daf1cc99a15561",
    "capturedAt": "2026-09-22T03:54:25.492Z",
    "elapsedMs": 595.0681929999846,
    "successfulAttemptElapsedMs": 593.5630370000144,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.21,
            "body:0": 0,
            "NONE": 0.79
          },
          "confidence": 0.71
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.71,
            "body:0": 0,
            "NONE": 0.29
          },
          "confidence": 0.6
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.97,
            "body:0": 0,
            "NONE": 0.03
          },
          "confidence": 0.96
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.09,
            "body:1": 0.18,
            "body:0": 0.01,
            "NONE": 0.72
          },
          "confidence": 0.63
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.08,
            "body:0": 0,
            "NONE": 0.92
          },
          "confidence": 0.89
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.85,
            "body:0": 0,
            "NONE": 0.15
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 3195,
        "output_tokens": 336
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1275.2276829999755,
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
    "seq": 1523,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-312",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:24.218Z",
    "offsetMs": 0.8361029999796301
  },
  {
    "seq": 1524,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-312",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:24.895Z",
    "offsetMs": 678.1577699999907,
    "elapsedMs": 677.0377260000096,
    "outcome": "success"
  },
  {
    "seq": 1525,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-312",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:24.898Z",
    "offsetMs": 680.8336540000164
  },
  {
    "seq": 1526,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-312",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:25.492Z",
    "offsetMs": 1274.8644699999713,
    "elapsedMs": 593.5630370000144,
    "outcome": "success"
  },
  {
    "seq": 1527,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-312",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:25.492Z",
    "offsetMs": 1275.292088999995,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f39c37da575302af53bbae9732790797ef0f03318818ce21d02383dbf17f3229";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1524},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1526},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1527}} as const;
export const projectionSha256 = "de850eedec53cf3b2576f3f1a78fc8878b044780c6c6a0a0cdf02420a6dcda90";
