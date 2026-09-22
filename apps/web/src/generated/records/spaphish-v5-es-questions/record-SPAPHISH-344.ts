import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-344",
  "inputSha256": "04a2a7459bc37664ca2b1b5bc9c42639c2abfcdbdc47cd2eb4c14e6bbc6ae91f",
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
      "text": "Fw: ¡Su paquete ha sido enviado! !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 34,
      "end": 42,
      "text": "#CRIVmbL"
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
      "end": 280,
      "text": "CONTINUAR http://rastreo.servicio-local.com/ Programe su entrega y suscríbase a nuestras notificaciones push para evitar que esto vuelva a suceder Su código de seguimiento: 99887766 PROGRAMA TU ENTREGA http://rastreo.servicio-local.com/"
    }
  ],
  "passA": {
    "requestSha256": "b15288797c6b9b034ef23bd3e63d193ad83306920c8b0800f07716a134794fa0",
    "capturedAt": "2026-09-22T03:55:04.462Z",
    "elapsedMs": 772.5553409999702,
    "successfulAttemptElapsedMs": 771.2207529999432,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.14
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
          "noul": 0.56
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.5
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.28
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.27,
            "sender_supplied": 0.72
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 4970,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "aa2ccb9e91c97ea7205c2cbdbdd210752449fb6916295bb041643b482c39202f",
    "capturedAt": "2026-09-22T03:55:05.070Z",
    "elapsedMs": 606.2797489999793,
    "successfulAttemptElapsedMs": 604.8842650000006,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0,
            "NONE": 0.07,
            "body:1": 0.93,
            "subject:0": 0
          },
          "confidence": 0.91
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0.05,
            "NONE": 0.69,
            "body:1": 0.22,
            "subject:0": 0.04
          },
          "confidence": 0.62
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0,
            "NONE": 0.68,
            "body:1": 0.32,
            "subject:0": 0
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 1841,
        "output_tokens": 196
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1380.610273999977,
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
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
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
    "seq": 1682,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-344",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:03.690Z",
    "offsetMs": 0.9794539999566041
  },
  {
    "seq": 1683,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-344",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:04.462Z",
    "offsetMs": 772.5553680000012,
    "elapsedMs": 771.2207529999432,
    "outcome": "success"
  },
  {
    "seq": 1684,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-344",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:04.464Z",
    "offsetMs": 775.0405269999756
  },
  {
    "seq": 1685,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-344",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:05.070Z",
    "offsetMs": 1380.3797559999512,
    "elapsedMs": 604.8842650000006,
    "outcome": "success"
  },
  {
    "seq": 1686,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-344",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:05.070Z",
    "offsetMs": 1380.6547359999968,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "159e25f5a82fff54c978c14be27a5ddcd994bcb837218685390f9865516e05eb";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1683},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1685},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1686}} as const;
export const projectionSha256 = "870bb623bf2cbdf9e3b7fe92e99a34f5b85c22a294cd8f66e277d22607ae2ca2";
