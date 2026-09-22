import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-304",
  "inputSha256": "869f3a963956a084d026c25876e1e3b52dad6dd1fb508d5e6e5e999b3d2f5f87",
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
      "end": 62,
      "text": ">>Pablito!! -  Tienes un (1) paquete pendiente de entrega 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 62,
      "end": 108,
      "text": "Usa tu código para seguirlo y recibirlo ___🚚."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 44,
      "text": "Tienes (1) paquete esperando ser entregado. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 44,
      "end": 77,
      "text": "¡ENTREGA DEL PAQUETE SUSPENDIDO! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 77,
      "end": 160,
      "text": "ESTADO:Detenido en el centro de distribución Se puede aplicar una tarifa de envío. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 160,
      "end": 241,
      "text": "Su código de seguimiento:998877665 Entrega programada ahora Cancelar suscripción."
    }
  ],
  "passA": {
    "requestSha256": "c4ad7c0db76e74156f2c85ffc13c69e97ecf7c59ae2cf181ae676c85cb45020d",
    "capturedAt": "2026-09-22T03:54:15.350Z",
    "elapsedMs": 619.4629249999998,
    "successfulAttemptElapsedMs": 618.2360399999889,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.09
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.25
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.84
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.43
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.35
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.38
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.07,
            "informational": 0.04,
            "active_request": 0.89,
            "educational_or_quoted": 0
          },
          "confidence": 0.84
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0.03,
            "sender_supplied": 0.33,
            "no_sensitive_action": 0.64
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 4982,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "b51c1380337650229124748c68fcbdf7404b85f1e94f14b2d632cd05030b36aa",
    "capturedAt": "2026-09-22T03:54:15.955Z",
    "elapsedMs": 603.9820779999718,
    "successfulAttemptElapsedMs": 602.3853579999995,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.5700000000000001,
            "subject:0": 0,
            "NONE": 0.42,
            "body:0": 0,
            "body:3": 0.01,
            "subject:1": 0,
            "body:1": 0
          },
          "confidence": 0.49
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0.23,
            "subject:0": 0.01,
            "NONE": 0.03,
            "body:1": 0.16,
            "body:3": 0.51,
            "subject:1": 0.06,
            "body:0": 0
          },
          "confidence": 0.43
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.05,
            "body:1": 0.02,
            "NONE": 0.78,
            "body:0": 0.01,
            "body:3": 0.07,
            "subject:1": 0.04,
            "subject:0": 0.03
          },
          "confidence": 0.74
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:1": 0.01,
            "NONE": 0.76,
            "body:0": 0,
            "body:3": 0.14,
            "subject:1": 0.08,
            "subject:0": 0
          },
          "confidence": 0.72
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.8200000000000001,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0,
            "body:3": 0,
            "subject:1": 0,
            "NONE": 0.17
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 3052,
        "output_tokens": 418
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1225.369383000012,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "none_selected",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 1484,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-304",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:14.731Z",
    "offsetMs": 0.9379419999895617
  },
  {
    "seq": 1485,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-304",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:15.349Z",
    "offsetMs": 619.4632550000097,
    "elapsedMs": 618.2360399999889,
    "outcome": "success"
  },
  {
    "seq": 1486,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-304",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:15.352Z",
    "offsetMs": 622.1733399999794
  },
  {
    "seq": 1487,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-304",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:15.955Z",
    "offsetMs": 1225.0280529999873,
    "elapsedMs": 602.3853579999995,
    "outcome": "success"
  },
  {
    "seq": 1488,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-304",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:15.955Z",
    "offsetMs": 1225.4231719999807,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "19e484ccf48cddc42a4864371e6524b4a84675e1d0e2293f1c575b1085c55281";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1485},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1487},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1488}} as const;
export const projectionSha256 = "60ea6d90ad9b7623c1cff000ef5a1f2e554dc1b7cb2062dc07dfd6b855fa0db4";
