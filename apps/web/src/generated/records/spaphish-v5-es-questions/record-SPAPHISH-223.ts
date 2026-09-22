import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-223",
  "inputSha256": "08bc888bd34fe69e6e6237c84c97acc22486b554a188237fcf5dc5cf28d3140b",
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
      "end": 20,
      "text": "amazon ¡Felicidades!"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 20,
      "end": 94,
      "text": "Has sido elegido para recibir un Para estrenar Caja Misteriosa De Amazon! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 94,
      "end": 299,
      "text": "Para reclamar, simplemente Responda algunas preguntas rápidas sobre su experiencia. con nosotros Atención:Esta oferta vence hoy, 11/20/2025 COMENZAR Darse de baja El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 299,
      "end": 424,
      "text": "Si prefieres no recibir más comunicaciones, date de baja aquí Ou écrire a: 550 Technology Dr Ste 100#500, Cheyenne, WY, 82001"
    }
  ],
  "passA": {
    "requestSha256": "6885fe3fdfbe78760377ab05278944f0f501ed6a9262d7a0840bf6c1079e2125",
    "capturedAt": "2026-09-22T03:52:37.540Z",
    "elapsedMs": 669.6141920000082,
    "successfulAttemptElapsedMs": 668.5135889999801,
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
          "noul": 0.27
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.93
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.57
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.21
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
          "noul": 0.21
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
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.32,
            "sender_supplied": 0.66,
            "independently_established": 0
          },
          "confidence": 0.54
        }
      },
      "usage": {
        "input_tokens": 5014,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "d7076e13c9820a759cc642fbe3a120cb35eb4991bb0ac9701c2e6813021bf285",
    "capturedAt": "2026-09-22T03:52:38.103Z",
    "elapsedMs": 561.8755569999921,
    "successfulAttemptElapsedMs": 560.8581229999545,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.37,
            "NONE": 0.62,
            "body:3": 0.01,
            "body:0": 0,
            "body:1": 0
          },
          "confidence": 0.54
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:2": 1,
            "body:3": 0,
            "NONE": 0,
            "body:0": 0,
            "body:1": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.03,
            "body:2": 0.12,
            "body:3": 0.03,
            "NONE": 0.31,
            "body:0": 0.48,
            "body:1": 0.03
          },
          "confidence": 0.39
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.09,
            "NONE": 0.91,
            "body:3": 0,
            "body:0": 0,
            "body:1": 0
          },
          "confidence": 0.89
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.02,
            "body:2": 0.01,
            "body:3": 0,
            "NONE": 0.9,
            "body:0": 0,
            "body:1": 0.07
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 3178,
        "output_tokens": 368
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1233.2124090000289,
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
        "segmentId": "body:2"
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
        "status": "none_selected",
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
    "seq": 1086,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-223",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:36.871Z",
    "offsetMs": 0.7295710000325926
  },
  {
    "seq": 1087,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-223",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:37.540Z",
    "offsetMs": 669.615037999989,
    "elapsedMs": 668.5135889999801,
    "outcome": "success"
  },
  {
    "seq": 1088,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-223",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:37.542Z",
    "offsetMs": 671.6541280000238
  },
  {
    "seq": 1089,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-223",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:38.103Z",
    "offsetMs": 1232.9036820000038,
    "elapsedMs": 560.8581229999545,
    "outcome": "success"
  },
  {
    "seq": 1090,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-223",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:38.103Z",
    "offsetMs": 1233.273806000012,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "87e3e3fd707920dd97ffc2063c1dffe8462202705fa1b7d51c2f671dc5557e8e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1087},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1089},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1090}} as const;
export const projectionSha256 = "50fdb46cf82a88fa59930947ccc2f0f6446a9f90461d653fbf620458454beb48";
