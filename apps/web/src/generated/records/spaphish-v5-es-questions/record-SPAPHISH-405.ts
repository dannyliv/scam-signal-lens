import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-405",
  "inputSha256": "c80e7b7a58c55904cce8a15977c8f831312be5de2f7cfd89f47221add0a17856",
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
      "end": 41,
      "text": "Pablito! -\"😱 ¡Solo por tiempo limitado! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 41,
      "end": 78,
      "text": "Mystery Box con productos sorpresa.\" "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 78,
      "end": 93,
      "text": "#ID:13190-61838"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 58,
      "text": "Te llevará solo un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 102,
      "text": "Coppel® ¡El ganador de hoy es Ángel Moreno! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 102,
      "end": 126,
      "text": "¡HAS SIDO SELECCIONADO! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 126,
      "end": 214,
      "text": "Para recibir tu regalo: Coppel Mystery Box Haz clic aquí para obtenerlo Congratulation! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 214,
      "end": 302,
      "text": "¡Ha sido elegido para participar en nuestro Programa de Fidelización de forma GRATUITA! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 302,
      "end": 359,
      "text": "Solo le llevará un minuto recibir este fantástico premio."
    }
  ],
  "passA": {
    "requestSha256": "e8225e1877091829f18f29ef7822e9b5a8e4c94e19d33e8e5c2112ed933ce13a",
    "capturedAt": "2026-09-22T03:56:15.974Z",
    "elapsedMs": 618.8079250000301,
    "successfulAttemptElapsedMs": 617.1497320000199,
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
          "noul": 0.37
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.09
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.88
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.84
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.14
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.31
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.27,
            "independently_established": 0,
            "sender_supplied": 0.72,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 4997,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "e513195191575be73d7a3f1e8f535f4a83053fff1a2de1f58179dc0333bf1d75",
    "capturedAt": "2026-09-22T03:56:16.513Z",
    "elapsedMs": 536.9970949999988,
    "successfulAttemptElapsedMs": 535.1864240000141,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "NONE": 0.86,
            "body:5": 0,
            "body:4": 0,
            "body:1": 0,
            "subject:2": 0,
            "subject:1": 0,
            "subject:0": 0,
            "body:3": 0.14,
            "body:0": 0
          },
          "confidence": 0.83
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:2": 0,
            "NONE": 0,
            "body:5": 0,
            "subject:2": 0,
            "body:4": 0,
            "body:1": 0,
            "subject:1": 0,
            "subject:0": 1,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.21000000000000002,
            "body:2": 0.02,
            "body:5": 0,
            "body:4": 0.16,
            "subject:2": 0.01,
            "body:1": 0.53,
            "subject:1": 0,
            "subject:0": 0.01,
            "body:3": 0.06,
            "body:0": 0
          },
          "confidence": 0.47
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.96,
            "body:2": 0,
            "body:5": 0,
            "body:4": 0,
            "subject:2": 0,
            "body:1": 0,
            "subject:1": 0,
            "subject:0": 0,
            "body:3": 0.04,
            "body:0": 0
          },
          "confidence": 0.94
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.37,
            "body:2": 0.01,
            "body:5": 0.08,
            "subject:2": 0,
            "body:4": 0.01,
            "body:1": 0.01,
            "subject:1": 0,
            "subject:0": 0.01,
            "body:3": 0,
            "body:0": 0.51
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 3376,
        "output_tokens": 550
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1157.9091450000415,
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
        "segmentId": "subject:0"
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
        "status": "low_confidence",
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
    "seq": 1984,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-405",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:15.356Z",
    "offsetMs": 1.2767530000419356
  },
  {
    "seq": 1985,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-405",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:15.973Z",
    "offsetMs": 618.808199000021,
    "elapsedMs": 617.1497320000199,
    "outcome": "success"
  },
  {
    "seq": 1986,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-405",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:15.977Z",
    "offsetMs": 621.931425000017
  },
  {
    "seq": 1987,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-405",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:16.512Z",
    "offsetMs": 1157.5352910000365,
    "elapsedMs": 535.1864240000141,
    "outcome": "success"
  },
  {
    "seq": 1988,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-405",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:16.513Z",
    "offsetMs": 1157.9611729999888,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "53dad45a483ccc2217b4b810c95798e386317100473638c55be5a972bfc4a1a7";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1985},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1987},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1988}} as const;
export const projectionSha256 = "a2302c1e56423078ff07818c850d7144c9d13a412b054b09fea63f331b4f7849";
