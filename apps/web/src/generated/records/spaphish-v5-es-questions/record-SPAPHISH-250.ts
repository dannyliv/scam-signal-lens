import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-250",
  "inputSha256": "eae5e34d5fbb3c2c48ae014f6cf415e8f52512596fef9f5430a2b48a31e31584",
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
      "end": 30,
      "text": "Revise sus credenciales de red"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 267,
      "text": "Saludos a todos: Debido a las numerosas filtraciones recientes a instituciones financieras y de gestión de identidades de alto perfil, es importante que los empleados de Instituto Universitario Horizonte Campus Villa Central verifiquen que no se han visto afectados. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 267,
      "end": 457,
      "text": "Las credenciales de la red de nuestra organización son un objetivo principal para los hackers, y nuestros clientes confían en nosotros para garantizar que mantengamos segura su información. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 457,
      "end": 578,
      "text": "Use el siguiente enlace para verificar que sus credenciales de inicio de sesión a la red no hayan quedado comprometidas. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 578,
      "end": 593,
      "text": "¿Fui hackeado? "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 593,
      "end": 616,
      "text": "Gracias, Gerencia de TI"
    }
  ],
  "passA": {
    "requestSha256": "ba9763f9439361104deee758a05e1f551834bcb830c03ed561fd3078831b67ea",
    "capturedAt": "2026-09-22T03:53:09.623Z",
    "elapsedMs": 664.177834000031,
    "successfulAttemptElapsedMs": 662.9600959999952,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.3
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.28
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
          "noul": 0.4
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.46
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
          "noul": 0.02
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
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.16,
            "sender_supplied": 0.84,
            "independently_established": 0
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 5011,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "7e0c792c15a32793a74b0275b5914a2f6836c3cbca4bbfba21ce2651e4fed343",
    "capturedAt": "2026-09-22T03:53:10.176Z",
    "elapsedMs": 551.2394450000138,
    "successfulAttemptElapsedMs": 549.9555260000052,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:2": 0.45,
            "NONE": 0.53,
            "body:3": 0.01,
            "body:4": 0,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.45
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:2": 0.21,
            "NONE": 0.77,
            "body:3": 0.01,
            "body:0": 0,
            "body:1": 0,
            "body:4": 0
          },
          "confidence": 0.73
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.02,
            "body:2": 0.13,
            "body:3": 0.06,
            "NONE": 0.36,
            "body:4": 0,
            "body:1": 0.28,
            "body:0": 0.15
          },
          "confidence": 0.25
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.02,
            "NONE": 0,
            "body:3": 0,
            "body:4": 0.87,
            "body:1": 0.04,
            "body:0": 0.07
          },
          "confidence": 0.84
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.59,
            "body:3": 0.01,
            "NONE": 0.4,
            "body:4": 0,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 3269,
        "output_tokens": 414
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1217.2148099999758,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
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
        "status": "selected",
        "segmentId": "body:4"
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
    "seq": 1219,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-250",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:08.959Z",
    "offsetMs": 0.9257249999791384
  },
  {
    "seq": 1220,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-250",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:09.623Z",
    "offsetMs": 664.1780949999811,
    "elapsedMs": 662.9600959999952,
    "outcome": "success"
  },
  {
    "seq": 1221,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-250",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:09.625Z",
    "offsetMs": 666.5089910000097
  },
  {
    "seq": 1222,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-250",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:10.175Z",
    "offsetMs": 1216.8643629999715,
    "elapsedMs": 549.9555260000052,
    "outcome": "success"
  },
  {
    "seq": 1223,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-250",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:10.176Z",
    "offsetMs": 1217.2776500000036,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f85b12ae0760b104fe77b957b92ace966f42206834ae73118be24ac0f9d0c00e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1220},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1222},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1223}} as const;
export const projectionSha256 = "bf4205518cba14e63992d9085102e69f70389724eb312e53541ee1a0ae40a522";
