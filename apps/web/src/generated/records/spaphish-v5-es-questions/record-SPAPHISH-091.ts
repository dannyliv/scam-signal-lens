import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-091",
  "inputSha256": "79e28d61d7b9f527cb77983c7a09f0471394c865846bec3096c7fce98448e4d5",
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
      "end": 56,
      "text": "Missxtranger, Has ganado una Caja Misteriosa de Amazon🎉"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 29,
      "text": "SHEIN ¡Eres nuestro ganador! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 29,
      "end": 189,
      "text": "Recompensa: Caja misteriosa de Shein Número de cliente: #998877665544 » Haga clic aquí para solicitar « Darse de baja El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 189,
      "end": 327,
      "text": "Si prefieres no recibir más comunicaciones, darse de baja aqui O escribe a: 900 Calle de la Moda Ste 100#2000, Ciudad Tendencia, CA, 90210"
    }
  ],
  "passA": {
    "requestSha256": "d8a58648fa6a17629f039c4100a772f742613c0ae0ecebb87f3562a2905042a9",
    "capturedAt": "2026-09-22T03:50:00.138Z",
    "elapsedMs": 660.7223029999877,
    "successfulAttemptElapsedMs": 659.9947170000087,
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
          "noul": 0.38
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.15
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.22
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.63
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.24
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.22
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.19
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
            "informational": 0,
            "mixed_or_unclear": 0.01,
            "active_request": 0.99,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.16,
            "mixed_or_unknown": 0.03,
            "sender_supplied": 0.81
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 5000,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "8e9230144672795fc5002c88ebe0ecb3db57796244a2225f561b8c27fa5247f1",
    "capturedAt": "2026-09-22T03:50:00.771Z",
    "elapsedMs": 631.7493699999904,
    "successfulAttemptElapsedMs": 630.6030040000041,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.28,
            "NONE": 0.72,
            "body:0": 0,
            "subject:0": 0,
            "body:2": 0
          },
          "confidence": 0.65
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.13,
            "NONE": 0.86,
            "body:0": 0,
            "subject:0": 0,
            "body:2": 0.01
          },
          "confidence": 0.83
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.13,
            "NONE": 0.34,
            "body:0": 0.46,
            "subject:0": 0.01,
            "body:2": 0.06
          },
          "confidence": 0.33
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.07,
            "NONE": 0.92,
            "body:0": 0,
            "subject:0": 0,
            "body:2": 0.01
          },
          "confidence": 0.89
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.14,
            "NONE": 0.86,
            "body:0": 0,
            "subject:0": 0,
            "body:2": 0
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3037,
        "output_tokens": 325
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1294.277899000008,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
        "status": "none_selected",
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
    "seq": 439,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-091",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:59.477Z",
    "offsetMs": 0.48922899999888614
  },
  {
    "seq": 440,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-091",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:00.137Z",
    "offsetMs": 660.7225840000028,
    "elapsedMs": 659.9947170000087,
    "outcome": "success"
  },
  {
    "seq": 441,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-091",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:00.140Z",
    "offsetMs": 662.9102530000091
  },
  {
    "seq": 442,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-091",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:00.771Z",
    "offsetMs": 1293.9601590000093,
    "elapsedMs": 630.6030040000041,
    "outcome": "success"
  },
  {
    "seq": 443,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-091",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:00.771Z",
    "offsetMs": 1294.3353830000124,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1ad243fbc3939d7c7815ba8e7d265063a5859b91bc77040181be07bc2a8aab8b";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":440},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":442},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":443}} as const;
export const projectionSha256 = "ccc00e5f2078bed2dc1da6f306ec909d7102a3d1ba1442fa4342eeafca7c789b";
