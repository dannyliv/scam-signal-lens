import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-446",
  "inputSha256": "32ac8ad59b02e47901e4b5e13071e7c393fca131304038d8e077dc94177ef473",
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
      "end": 50,
      "text": "Ezequiela Miguelina - Tienes (1) mensaje nuestro. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 50,
      "end": 70,
      "text": "Complete su entrega."
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 70,
      "end": 81,
      "text": "📦 🚚 ..661"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 67,
      "text": "ENTREGA DEL PAQUETE PENDIENTE ◉ Registro / Inicio de sesión ❒SEUR. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 67,
      "end": 294,
      "text": "9988776655 SEGUIMIENTO ➢ mr.datasec Tienes (1) paquete pendiente de entrega -------------------------------------------------------------------------------- Confirma tus datos de envío ■ tienes un paquete pendiente de entrega. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 294,
      "end": 407,
      "text": "Sigue tu pedido en tiempo real y programa la entrega para asegurarte de recibirlo a la hora que más te convenga! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 407,
      "end": 492,
      "text": "PROGRAMA SU ENTREGA Si no deseas recibir más correos electrónicos, desconéctate aquí."
    }
  ],
  "passA": {
    "requestSha256": "753a0cfe614a90eb95652abba300ef40d48ee91c5e9eb81fc59788576b3f435c",
    "capturedAt": "2026-09-22T03:57:04.746Z",
    "elapsedMs": 852.6592110000784,
    "successfulAttemptElapsedMs": 851.0193970000837,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.29
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.47
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.33
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.25
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.11
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
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.03,
            "independently_established": 0,
            "sender_supplied": 0.64,
            "no_sensitive_action": 0.33
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 5022,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "50718fde0567dca4e3d95baeefc2d1cba6ad65562520ec8ffea4427855d7308e",
    "capturedAt": "2026-09-22T03:57:05.260Z",
    "elapsedMs": 510.71923599997535,
    "successfulAttemptElapsedMs": 509.1411010000156,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "subject:1": 0,
            "body:3": 0.01,
            "subject:2": 0,
            "subject:0": 0,
            "body:0": 0.41,
            "body:1": 0.05,
            "NONE": 0.53
          },
          "confidence": 0.45
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.01,
            "subject:1": 0,
            "body:3": 0.02,
            "subject:2": 0,
            "subject:0": 0,
            "body:0": 0.03,
            "body:1": 0.66,
            "NONE": 0.28
          },
          "confidence": 0.62
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.03,
            "subject:0": 0.01,
            "body:3": 0.08,
            "subject:2": 0,
            "subject:1": 0.41,
            "body:0": 0.02,
            "body:1": 0.03,
            "NONE": 0.42
          },
          "confidence": 0.34
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.01,
            "subject:1": 0,
            "body:3": 0.01,
            "subject:2": 0,
            "subject:0": 0.02,
            "body:0": 0.66,
            "body:1": 0.23,
            "NONE": 0.07
          },
          "confidence": 0.62
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.04,
            "subject:1": 0.01,
            "body:3": 0.05,
            "subject:2": 0,
            "subject:0": 0,
            "body:0": 0.05,
            "body:1": 0.01,
            "NONE": 0.84
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3395,
        "output_tokens": 459
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1366.861883000005,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
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
    "seq": 2189,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-446",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:03.894Z",
    "offsetMs": 1.2927439999766648
  },
  {
    "seq": 2190,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-446",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:04.746Z",
    "offsetMs": 852.6590569999535,
    "elapsedMs": 851.0193970000837,
    "outcome": "success"
  },
  {
    "seq": 2191,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-446",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:04.750Z",
    "offsetMs": 857.0423489999957
  },
  {
    "seq": 2192,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-446",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:05.260Z",
    "offsetMs": 1366.4972139999736,
    "elapsedMs": 509.1411010000156,
    "outcome": "success"
  },
  {
    "seq": 2193,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-446",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:05.260Z",
    "offsetMs": 1366.933287999942,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "cbac94afde83b8372880f918131ff6941bcc04deb5a53ff2fe583468cb2258bc";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2190},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2192},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2193}} as const;
export const projectionSha256 = "50f3dc4a10a87d389ce2150a2eca91d9079e061c7b6eef9f1d96008db7ec6898";
