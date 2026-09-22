import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-033",
  "inputSha256": "0304a499a001f0d3f0ec2b9c0b87b7a0f28869683cbbd6380c77dad30aefa3fc",
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
      "end": 114,
      "text": "Pablito - Nos gustaría ofrecerle una oportunidad única para recibir una Taladro DeWalt completamente nueva ID#2578"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 18,
      "text": "¡Responde y Gana! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 18,
      "end": 138,
      "text": "• Obtén un • Taladro DeWalt ¡Has sido seleccionado para participar en nuestro Programa de Fidelidad de MANERA GRATUITA! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 138,
      "end": 194,
      "text": "Solo te tomará un minuto obtener este increíble premio. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 194,
      "end": 213,
      "text": "¡Consíguelo Ahora! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 213,
      "end": 277,
      "text": "If you no longer wish to receive these emails, unsubscribe here."
    }
  ],
  "passA": {
    "requestSha256": "8f391490cb0cb882680f4b7aefd103aae27b30d7ec08ea88e2790f48f933ad30",
    "capturedAt": "2026-09-22T03:48:50.919Z",
    "elapsedMs": 633.7335359999997,
    "successfulAttemptElapsedMs": 632.7732299999989,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.18
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.54
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.26
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.17
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.17
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
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.38,
            "independently_established": 0,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.6
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 4971,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "4e4a2c44fea18f55080615b5405609aece3a3e62a88de61b4153715bd66a468f",
    "capturedAt": "2026-09-22T03:48:51.516Z",
    "elapsedMs": 595.0992820000029,
    "successfulAttemptElapsedMs": 593.7925689999975,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.04,
            "body:0": 0.01,
            "body:1": 0,
            "body:2": 0.04,
            "body:4": 0,
            "body:3": 0.9
          },
          "confidence": 0.88
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.76,
            "body:0": 0,
            "body:1": 0.21,
            "body:2": 0,
            "body:3": 0,
            "body:4": 0.02
          },
          "confidence": 0.72
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.54,
            "body:0": 0.07,
            "body:1": 0.02,
            "body:2": 0.36,
            "body:3": 0,
            "body:4": 0
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 1932,
        "output_tokens": 248
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1231.7352870000032,
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
        "status": "not_requested",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 159,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-033",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:50.285Z",
    "offsetMs": 0.5547970000043279
  },
  {
    "seq": 160,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-033",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:50.918Z",
    "offsetMs": 633.7340760000006,
    "elapsedMs": 632.7732299999989,
    "outcome": "success"
  },
  {
    "seq": 161,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-033",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:50.921Z",
    "offsetMs": 636.9534300000014
  },
  {
    "seq": 162,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-033",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:51.516Z",
    "offsetMs": 1231.3204900000055,
    "elapsedMs": 593.7925689999975,
    "outcome": "success"
  },
  {
    "seq": 163,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-033",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:51.516Z",
    "offsetMs": 1231.829104000004,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "959a29ff245c39c2aec4e6feafbd16a1f9caa6ccefcd118ce07cb681b32aa3d0";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":160},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":162},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":163}} as const;
export const projectionSha256 = "a19c3a0b914bde9220b3bc05bbd80b7327a1e06fe611527a152805611931469e";
