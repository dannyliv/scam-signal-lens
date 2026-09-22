import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-488",
  "inputSha256": "7cf8648230a0fbce2fae8fd9b941c245d27e21441353049459bc2573094c1866",
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
      "text": "Obten online tu Tarjeta con 30.000 MXN bonificados"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 91,
      "text": "Financiacion sin interes hasta 60 dias No visualiza correctamente este mensaje click aqui. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 91,
      "end": 259,
      "text": "Este correo es para carlos.garcia@mailsecure.net. - Obten online tu Tarjeta con 40.000 MXN bonificados Este correo es para carlos.garcia@mailsecure.net el Nov 17 2023. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 259,
      "end": 355,
      "text": "Tarjeta Amex Gold con 40.000 MXN bonificados - 99887766- - Para desuscribirse haga click aqui. -"
    }
  ],
  "passA": {
    "requestSha256": "fa340fb33e5dbe54abfa45b5c73bf8ecc4567f280eca032b1f672754c5069857",
    "capturedAt": "2026-09-22T03:57:54.530Z",
    "elapsedMs": 598.4020399999572,
    "successfulAttemptElapsedMs": 596.5588229999412,
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
          "noul": 0.14
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.17
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.34
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.15
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.02,
            "informational": 0.02,
            "educational_or_quoted": 0,
            "active_request": 0.96
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.69,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.3,
            "independently_established": 0
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 5013,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "6e89ce0d9cde4162c0da2bd143b2647d047ce2e09a01faa16b383fd448c1a483",
    "capturedAt": "2026-09-22T03:57:55.103Z",
    "elapsedMs": 571.350434999913,
    "successfulAttemptElapsedMs": 569.243935000035,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.79,
            "body:2": 0.1,
            "subject:0": 0.01,
            "body:1": 0.01,
            "body:0": 0.09
          },
          "confidence": 0.74
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.83,
            "body:2": 0.14,
            "subject:0": 0.01,
            "body:1": 0.01,
            "body:0": 0.01
          },
          "confidence": 0.79
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.66,
            "body:2": 0.12,
            "subject:0": 0.16,
            "body:1": 0.05,
            "body:0": 0.01
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 2048,
        "output_tokens": 191
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1172.2511429999722,
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "none_selected",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "not_requested",
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
    "seq": 2397,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-488",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:53.932Z",
    "offsetMs": 1.536532000056468
  },
  {
    "seq": 2398,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-488",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:54.529Z",
    "offsetMs": 598.403226000024,
    "elapsedMs": 596.5588229999412,
    "outcome": "success"
  },
  {
    "seq": 2399,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-488",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:54.533Z",
    "offsetMs": 602.3563530000392
  },
  {
    "seq": 2400,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-488",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:55.103Z",
    "offsetMs": 1172.0476130000316,
    "elapsedMs": 569.243935000035,
    "outcome": "success"
  },
  {
    "seq": 2401,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-488",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:55.103Z",
    "offsetMs": 1172.294525000034,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b17201f8a8d999dda1ebeeb2a8fe57c43ca38d3cc990b152462c94d4846e727b";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2398},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2400},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2401}} as const;
export const projectionSha256 = "31e39aa9d15e606a94b76ab58f71dc4278ac4c47d443f0ebfab4ae0ffef602a5";
