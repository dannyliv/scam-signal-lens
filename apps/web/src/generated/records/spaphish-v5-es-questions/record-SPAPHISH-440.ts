import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-440",
  "inputSha256": "bda3729363223c46970d0042d66d7ad0bb2f657dd84e5f54fcae804fa149ba2e",
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
      "end": 60,
      "text": "Pablito,  Última Oportunidad para Reclamar Tu Regalo Gratis "
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 59,
      "text": "¡Solo te llevará un minuto recibir este fantástico premio! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 59,
      "end": 112,
      "text": "Kit de Medicare — Encuesta sobre — ¡Responde y gana! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 112,
      "end": 142,
      "text": "Kit de Medicare ¡Felicidades! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 142,
      "end": 215,
      "text": "Has sido elegido para participar en nuestro Programa de Lealtad ¡GRATIS! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 215,
      "end": 273,
      "text": "Sólo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 273,
      "end": 294,
      "text": "¡Empieza, es gratis! "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 294,
      "end": 318,
      "text": "¿No quieres participar? "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 318,
      "end": 331,
      "text": "Cerrar sesión"
    }
  ],
  "passA": {
    "requestSha256": "ff9f86304bd0827c6a4c5a4afd8e25705ec85df5e3e2f8451523fd4256fc9d18",
    "capturedAt": "2026-09-22T03:56:57.337Z",
    "elapsedMs": 735.4233610000229,
    "successfulAttemptElapsedMs": 733.8708140000235,
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
          "noul": 0.36
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.77
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.39
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.22
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.27
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
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
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.05,
            "sender_supplied": 0.27,
            "no_sensitive_action": 0.67,
            "independently_established": 0
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 4975,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "304bd0f33a8da8543558f207e4d0cfff7e7799fd4164878b0185cfe4352281a3",
    "capturedAt": "2026-09-22T03:56:57.920Z",
    "elapsedMs": 581.006790000014,
    "successfulAttemptElapsedMs": 579.2030530000338,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0.01,
            "NONE": 0.65,
            "body:6": 0,
            "body:5": 0.01,
            "body:1": 0.33,
            "body:4": 0,
            "body:7": 0,
            "body:0": 0,
            "body:2": 0
          },
          "confidence": 0.6
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.96,
            "body:3": 0,
            "NONE": 0.02,
            "body:6": 0,
            "body:5": 0,
            "body:1": 0.01,
            "body:4": 0,
            "body:7": 0,
            "body:0": 0.01,
            "body:2": 0
          },
          "confidence": 0.95
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0.15,
            "NONE": 0.59,
            "body:6": 0,
            "body:5": 0,
            "body:2": 0.11,
            "body:4": 0,
            "body:7": 0.01,
            "body:0": 0,
            "body:1": 0.14
          },
          "confidence": 0.53
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.98,
            "body:6": 0,
            "body:5": 0,
            "body:1": 0,
            "body:4": 0,
            "body:7": 0.02,
            "body:0": 0,
            "body:2": 0
          },
          "confidence": 0.96
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0.01,
            "NONE": 0.55,
            "body:6": 0,
            "body:5": 0,
            "body:2": 0,
            "body:4": 0.08,
            "body:7": 0,
            "body:0": 0.18,
            "body:1": 0.18
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 3234,
        "output_tokens": 546
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1318.6202410000842,
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
    "seq": 2159,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-440",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:56.602Z",
    "offsetMs": 1.2193930000066757
  },
  {
    "seq": 2160,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-440",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:57.336Z",
    "offsetMs": 735.4241510001011,
    "elapsedMs": 733.8708140000235,
    "outcome": "success"
  },
  {
    "seq": 2161,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-440",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:57.340Z",
    "offsetMs": 738.536703000078
  },
  {
    "seq": 2162,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-440",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:57.919Z",
    "offsetMs": 1318.2906920000678,
    "elapsedMs": 579.2030530000338,
    "outcome": "success"
  },
  {
    "seq": 2163,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-440",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:57.920Z",
    "offsetMs": 1318.6814270000905,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "208470681ab2c950acfeb499916dd4a9297c794b1be411d6e6a990923785e9a9";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2160},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2162},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2163}} as const;
export const projectionSha256 = "bbfb0391a8403cf904e5426c9ae9b09d6980f6d21b8f359e922335a61f857f1e";
