import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-331",
  "inputSha256": "bdd64e99e7e22deafbad8793b60a1f4f5368e326a46995d447efef9dcb766a85",
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
      "end": 61,
      "text": "📢  Pablito , Su paquete está listo para la entrega ID:497 🚨"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 15,
      "text": "Servicio Pstal\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 15,
      "end": 48,
      "text": "ENTREGA DEL ¡PAQUETE SUSPENDIDO!\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 48,
      "end": 121,
      "text": "Estado: Detenido en el centro de distribución (cargo aduanero pendiente)\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 121,
      "end": 159,
      "text": "Puede aplicarse una tarifa de entrega\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 159,
      "end": 194,
      "text": "Tu código de rastreo: AR94752018ES\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 194,
      "end": 217,
      "text": "Programar entrega ahora"
    }
  ],
  "passA": {
    "requestSha256": "1bb74b52d07d7423147a6e62d16c46a424658690497c1e2c8970a9ef0d39080f",
    "capturedAt": "2026-09-22T03:54:47.847Z",
    "elapsedMs": 628.9474000000046,
    "successfulAttemptElapsedMs": 627.4930160000222,
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
          "noul": 0.26
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.43
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.72
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.49
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
            "mixed_or_unknown": 0.05,
            "sender_supplied": 0.57,
            "no_sensitive_action": 0.38,
            "independently_established": 0
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 4963,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c8ebe11955d4c920d833692d95ef476a3e15b49f0b99a4ad1e4b152f73103ca4",
    "capturedAt": "2026-09-22T03:54:48.377Z",
    "elapsedMs": 528.373797999986,
    "successfulAttemptElapsedMs": 527.1606589999865,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.18,
            "body:1": 0,
            "subject:0": 0,
            "body:2": 0.01,
            "body:3": 0.03,
            "body:0": 0,
            "NONE": 0.78,
            "body:4": 0
          },
          "confidence": 0.74
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:5": 0.11,
            "body:1": 0,
            "subject:0": 0,
            "body:2": 0.03,
            "body:3": 0.45,
            "body:0": 0,
            "NONE": 0.41,
            "body:4": 0
          },
          "confidence": 0.36
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:5": 0.93,
            "body:1": 0.02,
            "subject:0": 0.01,
            "body:2": 0.01,
            "body:3": 0.02,
            "body:0": 0,
            "NONE": 0.01,
            "body:4": 0
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:5": 0.06,
            "body:1": 0.01,
            "subject:0": 0,
            "body:2": 0.03,
            "body:3": 0.01,
            "body:0": 0.8,
            "NONE": 0.08,
            "body:4": 0.01
          },
          "confidence": 0.77
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.12,
            "body:1": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:3": 0,
            "body:0": 0,
            "NONE": 0.88,
            "body:4": 0
          },
          "confidence": 0.86
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:5": 0.05,
            "body:1": 0,
            "subject:0": 0,
            "body:2": 0.07,
            "body:3": 0.73,
            "body:0": 0,
            "NONE": 0.15,
            "body:4": 0
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 3522,
        "output_tokens": 554
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1159.4225009999936,
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
        "segmentId": "body:5"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 1617,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-331",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:47.218Z",
    "offsetMs": 1.074951000045985
  },
  {
    "seq": 1618,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-331",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:47.846Z",
    "offsetMs": 628.9481120000128,
    "elapsedMs": 627.4930160000222,
    "outcome": "success"
  },
  {
    "seq": 1619,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-331",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:47.849Z",
    "offsetMs": 631.5375690000365
  },
  {
    "seq": 1620,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-331",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:48.376Z",
    "offsetMs": 1159.0071330000064,
    "elapsedMs": 527.1606589999865,
    "outcome": "success"
  },
  {
    "seq": 1621,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-331",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:48.377Z",
    "offsetMs": 1159.4771720000426,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "61534f61ef643a3f6e39fa70ed4a3a7d3f4a2c7eb7b7123305382b9655a8bf9b";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1618},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1620},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1621}} as const;
export const projectionSha256 = "9e19ff16e87bdffb2a1cb3cbe7522312a08740036d3545c494d6999c7e519ef8";
