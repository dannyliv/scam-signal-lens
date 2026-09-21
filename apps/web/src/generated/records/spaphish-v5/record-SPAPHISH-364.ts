import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-364",
  "inputSha256": "17bda54cc50bceeef1f040a20adf4a70b27cb8a9c0395d6ac61bdc46999d5748",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "subject:0",
      "source": "subject",
      "start": 0,
      "end": 22,
      "text": "Verificación de cuenta"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 73,
      "text": "Estimado/a Guadalupe F, ¡Gracias por crear una cuenta en Little Caesars! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 73,
      "end": 101,
      "text": "¡La pizzería que te hace la\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 101,
      "end": 118,
      "text": " vida más fácil! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 118,
      "end": 207,
      "text": "Antes de realizar su primer pedido, active su cuenta al verificar su correo electrónico. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 207,
      "end": 254,
      "text": "Esto garantiza la seguridad de su información. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 254,
      "end": 271,
      "text": "¡Muchas gracias! "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 271,
      "end": 335,
      "text": "*** Este mensaje es generado automáticamente, no lo responda ***"
    }
  ],
  "passA": {
    "requestSha256": "074efc67f6b684bc4850030273b351daabb6ebf79e659fbaeeb41b8c66f47466",
    "capturedAt": "2026-09-20T23:45:54.808Z",
    "elapsedMs": 171.31987500000105,
    "successfulAttemptElapsedMs": 169.0120409999945,
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
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.13
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.72
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.02,
            "mixed_or_unclear": 0,
            "active_request": 0.98,
            "educational_or_quoted": 0
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.09,
            "independently_established": 0.01,
            "sender_supplied": 0.13,
            "no_sensitive_action": 0.77
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 3510,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "819230e253ade582ef4dbdec5e99fdcfd2200f94fc543340addc37f2303831f6",
    "capturedAt": "2026-09-20T23:45:54.998Z",
    "elapsedMs": 187.07395799999358,
    "successfulAttemptElapsedMs": 184.77833299999475,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "body:3": 0.1,
            "body:2": 0,
            "body:6": 0.02,
            "NONE": 0.47000000000000003,
            "body:5": 0,
            "body:0": 0.22,
            "subject:0": 0.02,
            "body:4": 0.16
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 807,
        "output_tokens": 102
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 361.2049169999955,
  "derived": {
    "concern": "few_warning_signs",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1783,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-364",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:54.638Z",
    "offsetMs": 1.7153749999997672
  },
  {
    "seq": 1784,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-364",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:54.808Z",
    "offsetMs": 171.31779200000165,
    "elapsedMs": 169.0120409999945,
    "outcome": "success"
  },
  {
    "seq": 1785,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-364",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:54.812Z",
    "offsetMs": 175.4574169999978
  },
  {
    "seq": 1786,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-364",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:54.997Z",
    "offsetMs": 360.9627499999915,
    "elapsedMs": 184.77833299999475,
    "outcome": "success"
  },
  {
    "seq": 1787,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-364",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:54.998Z",
    "offsetMs": 361.27266699999745,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c7ac0f348a8b953e7dc119c30e984eea94a28054899ffc0615412e77e9972694";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1784},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1786},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1787}} as const;
export const projectionSha256 = "d085d93b2b17ca41dc5499a0bd3d83cf7e40399b860cf703f98dbbb5f840e646";
