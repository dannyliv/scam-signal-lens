import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-080",
  "inputSha256": "54619e714306e8774ac911f4366e6c7312ac2c8e0e9b2d59f245f61fb228f0df",
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
      "end": 34,
      "text": "Has ganado la freidora Ninja Air !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 34,
      "end": 41,
      "text": "#ZN1Bga"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 12,
      "text": "Apresúrate. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 12,
      "end": 67,
      "text": "¡El número de premios que se pueden ganar es limitado! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 67,
      "end": 84,
      "text": "¡Confirma ahora! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 84,
      "end": 156,
      "text": "Freír A Perfección Oferta limitada Freidora de aire ninja ¡Felicidades! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 156,
      "end": 229,
      "text": "¡Has sido elegido para participar en nuestro Programa de Lealtad GRATIS! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 229,
      "end": 286,
      "text": "Sólo te tomará un minuto obtener este fantástico premio. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 286,
      "end": 303,
      "text": "¡CONFIRMA AHORA! "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 303,
      "end": 364,
      "text": "Sólo tardarás un minuto en recibir este fantástico premio... "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 364,
      "end": 386,
      "text": "Freidora de aire ninja"
    }
  ],
  "passA": {
    "requestSha256": "4aeacce326ccc98e6b141220ea1ce68f5ec946fad9e2759848b9a763def811f7",
    "capturedAt": "2026-09-22T03:49:47.699Z",
    "elapsedMs": 604.874101999987,
    "successfulAttemptElapsedMs": 602.7768599999981,
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
          "noul": 0.24
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.08
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.26
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.33
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.18
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.2
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
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
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.33,
            "independently_established": 0,
            "no_sensitive_action": 0.53,
            "mixed_or_unknown": 0.14
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 4985,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "478b8c095a3899b03352f381d9b1c9c17cb396ffa5012b79b57c173e0fad881c",
    "capturedAt": "2026-09-22T03:49:48.243Z",
    "elapsedMs": 542.3364429999929,
    "successfulAttemptElapsedMs": 541.1999490000017,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0,
            "body:5": 0,
            "body:8": 0,
            "body:0": 0,
            "body:2": 0.03,
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.9400000000000001,
            "body:6": 0.03,
            "body:1": 0,
            "body:7": 0,
            "subject:1": 0
          },
          "confidence": 0.93
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.3,
            "body:5": 0,
            "body:8": 0,
            "body:0": 0.51,
            "body:2": 0.15,
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0,
            "body:6": 0.04,
            "body:4": 0,
            "body:7": 0,
            "subject:1": 0
          },
          "confidence": 0.46
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:4": 0.29,
            "body:2": 0,
            "body:8": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0.01,
            "NONE": 0.7,
            "body:6": 0,
            "body:1": 0,
            "body:7": 0,
            "body:5": 0
          },
          "confidence": 0.66
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:4": 0,
            "body:8": 0,
            "body:0": 0.01,
            "body:2": 0.05,
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.9,
            "body:6": 0.04,
            "body:1": 0,
            "body:7": 0,
            "body:5": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 2837,
        "output_tokens": 510
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1149.2948460000043,
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
    "seq": 389,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-080",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:47.095Z",
    "offsetMs": 1.7433440000022529
  },
  {
    "seq": 390,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-080",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:47.699Z",
    "offsetMs": 604.8744600000064,
    "elapsedMs": 602.7768599999981,
    "outcome": "success"
  },
  {
    "seq": 391,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-080",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:47.701Z",
    "offsetMs": 607.3879580000066
  },
  {
    "seq": 392,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-080",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:48.243Z",
    "offsetMs": 1149.0546420000028,
    "elapsedMs": 541.1999490000017,
    "outcome": "success"
  },
  {
    "seq": 393,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-080",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:48.243Z",
    "offsetMs": 1149.3416340000113,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ca8e59524d3435c884e654ec0d916b8476c407d03da245cb1984db3f57c3d25f";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":390},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":392},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":393}} as const;
export const projectionSha256 = "61e28bb40779bde555fda0dedb6f89536c6a4a9ccf9ad3fd9824b603e3c8374a";
