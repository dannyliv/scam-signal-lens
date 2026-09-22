import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-009",
  "inputSha256": "e373e0d52c39a6440b126ba2cd0b513a094bba7f57c89e89cd9d5767d46d405f",
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
      "end": 26,
      "text": "¡Se requiere verificación!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 80,
      "text": "actualizamos nuestro servidor de SSL para mejorar el servicio que le prestamos. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 80,
      "end": 244,
      "text": "Por eso, tenga en cuenta que es necesario que todos los usuarios actualicen su información de inicio de sesión para que puedan disfrutar de la nueva actualización. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 244,
      "end": 408,
      "text": "No podrá enviar ni recibir correos electrónicos si no confirma este correo electrónico automatizado en un plazo de 24 horas a partir del momento en que lo recibió. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 408,
      "end": 473,
      "text": "Debe actualizar su información usando el enlace a continuación . "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 473,
      "end": 512,
      "text": "ACTUALIZAR ¡Gracias por usar LinkedIn! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 512,
      "end": 530,
      "text": "Equipo de LinkedIn"
    }
  ],
  "passA": {
    "requestSha256": "fb4772815f172ece9891ffcc43c766bdf407c85c84a672292deda37ea1edbc4c",
    "capturedAt": "2026-09-22T03:48:21.841Z",
    "elapsedMs": 785.7221789999985,
    "successfulAttemptElapsedMs": 784.817923999999,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.52
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.33
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
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
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.97,
            "no_sensitive_action": 0.03,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 4994,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "e4451816a06bf892600e1c47f8c736c43dcf4c3874718f94d6a0e27104139d9b",
    "capturedAt": "2026-09-22T03:48:22.396Z",
    "elapsedMs": 552.4350730000006,
    "successfulAttemptElapsedMs": 551.8487669999995,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "NONE": 0.48,
            "body:5": 0,
            "body:4": 0.01,
            "body:1": 0.22,
            "subject:0": 0.01,
            "body:3": 0.27,
            "body:0": 0
          },
          "confidence": 0.41
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "NONE": 0.44,
            "body:5": 0,
            "body:4": 0,
            "body:1": 0.19,
            "subject:0": 0,
            "body:3": 0.37,
            "body:0": 0
          },
          "confidence": 0.35
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 1,
            "NONE": 0,
            "body:5": 0,
            "body:4": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:2": 0.01,
            "NONE": 0,
            "body:5": 0.83,
            "body:4": 0.05,
            "body:1": 0.03,
            "subject:0": 0,
            "body:3": 0.01,
            "body:0": 0.07
          },
          "confidence": 0.82
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.07,
            "NONE": 0.62,
            "body:5": 0,
            "body:4": 0,
            "body:1": 0.01,
            "subject:0": 0,
            "body:3": 0.3,
            "body:0": 0
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 3232,
        "output_tokens": 459
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1340.4924410000003,
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
        "status": "selected",
        "segmentId": "body:5"
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
    "seq": 41,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-009",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:21.056Z",
    "offsetMs": 0.5145090000005439
  },
  {
    "seq": 42,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-009",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:21.841Z",
    "offsetMs": 785.7284579999996,
    "elapsedMs": 784.817923999999,
    "outcome": "success"
  },
  {
    "seq": 43,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-009",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:21.843Z",
    "offsetMs": 787.876628
  },
  {
    "seq": 44,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-009",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:22.395Z",
    "offsetMs": 1340.0498690000004,
    "elapsedMs": 551.8487669999995,
    "outcome": "success"
  },
  {
    "seq": 45,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-009",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:22.396Z",
    "offsetMs": 1340.5560920000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7329133669092ebdeee0ead28140ca719c4aaaa5930a2413c696834bd5799fa9";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":42},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":44},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":45}} as const;
export const projectionSha256 = "0fa1875e9c7a687f26512588e944ba98d68f51d0af0d16bef569a66f28508a2f";
