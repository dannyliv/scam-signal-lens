import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-111",
  "inputSha256": "98da4599467551cbdf144c7206bf5cf01e9d702db2db8e468fa65818017b0621",
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
      "end": 137,
      "text": "Estimado ricardo.lopez@corporate-mail.net: Recientemente actualizamos nuestro servidor de SSL para mejorar el servicio que le prestamos. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 137,
      "end": 301,
      "text": "Por eso, tenga en cuenta que es necesario que todos los usuarios actualicen su información de inicio de sesión para que puedan disfrutar de la nueva actualización. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 301,
      "end": 465,
      "text": "No podrá enviar ni recibir correos electrónicos si no confirma este correo electrónico automatizado en un plazo de 24 horas a partir del momento en que lo recibió. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 465,
      "end": 530,
      "text": "Debe actualizar su información usando el enlace a continuación . "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 530,
      "end": 569,
      "text": "ACTUALIZAR ¡Gracias por usar LinkedIn! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 569,
      "end": 587,
      "text": "Equipo de LinkedIn"
    }
  ],
  "passA": {
    "requestSha256": "a878b4aa7fa677f6f66697acad19c41ab8d56a18d44410b3cedbd4e10aa7b26a",
    "capturedAt": "2026-09-22T03:50:25.683Z",
    "elapsedMs": 632.7101070000208,
    "successfulAttemptElapsedMs": 632.0605700000015,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.57
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.34
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.34
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
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.02,
            "independently_established": 0,
            "sender_supplied": 0.98,
            "mixed_or_unknown": 0
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 5011,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "70a9b432b9b58da9721c3f4d117f848370c805ad9b2ee57c30bfd4c0d2269004",
    "capturedAt": "2026-09-22T03:50:26.220Z",
    "elapsedMs": 535.3267550000164,
    "successfulAttemptElapsedMs": 534.57624699999,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.39,
            "subject:0": 0,
            "body:0": 0,
            "body:3": 0.29,
            "body:1": 0.3,
            "body:5": 0,
            "body:4": 0.01,
            "body:2": 0.01
          },
          "confidence": 0.29
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.47000000000000003,
            "subject:0": 0,
            "body:0": 0,
            "body:2": 0,
            "body:1": 0.18,
            "body:5": 0,
            "body:4": 0.01,
            "body:3": 0.34
          },
          "confidence": 0.39
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:3": 0,
            "body:1": 0,
            "body:5": 0,
            "body:4": 0,
            "body:2": 1
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0.11,
            "body:3": 0,
            "body:1": 0.03,
            "body:5": 0.8,
            "body:4": 0.06,
            "body:2": 0
          },
          "confidence": 0.76
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.67,
            "subject:0": 0,
            "body:0": 0,
            "body:3": 0.22,
            "body:1": 0.01,
            "body:5": 0,
            "body:4": 0,
            "body:2": 0.1
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 3334,
        "output_tokens": 459
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1169.9161800000002,
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
    "seq": 538,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-111",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:25.051Z",
    "offsetMs": 0.47331500001018867
  },
  {
    "seq": 539,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-111",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:25.683Z",
    "offsetMs": 632.7099009999947,
    "elapsedMs": 632.0605700000015,
    "outcome": "success"
  },
  {
    "seq": 540,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-111",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:25.685Z",
    "offsetMs": 634.8343520000053
  },
  {
    "seq": 541,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-111",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:26.220Z",
    "offsetMs": 1169.6521869999997,
    "elapsedMs": 534.57624699999,
    "outcome": "success"
  },
  {
    "seq": 542,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-111",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:26.220Z",
    "offsetMs": 1169.9596930000116,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "800a0b5621ee11cbfb73263576e792dca3a8a47ec7cad7261e88149d963a4766";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":539},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":541},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":542}} as const;
export const projectionSha256 = "88254c4536fbb8f568e67ee0e81d8ff4ecb3ed451c70051d7e5115dc89ed0f8f";
