import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-423",
  "inputSha256": "fa1fdae199576de6fb481624d02717ccf30861518aaadcb2fd85facb72a4664f",
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
      "end": 42,
      "text": "Pancracio ¡Llévate Tu Pack Quechua Gratis!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 58,
      "text": "Encuesta = Kit Quechua Gratis DECATHLON RESPONDE ¡Y GANA! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 132,
      "text": "Reclama un nuevo paquete gratis ¡Paquete de equipo de senderismo Quechua! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 132,
      "end": 162,
      "text": "¡HAZ CLIC AQUÍ PARA COMENZAR! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 162,
      "end": 254,
      "text": "Los comentarios de nuestros clientes siempre nos han ayudado a mejorar Experiencia Quechua. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 254,
      "end": 358,
      "text": "Haz clic para completar una breve encuesta de 4 minutos y recibir un regalo especial de agradecimiento. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 358,
      "end": 392,
      "text": "Valoramos tus opiniones sinceras. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 392,
      "end": 545,
      "text": "Si ya no deseas recibir estos correos electrónicos, puedes cancelar tu suscripción haciendo clic aquí. click here to remove yourself from our emails list"
    }
  ],
  "passA": {
    "requestSha256": "d37c0cb0892a9d48040a1245c2c5fe80c09792247e7e72ca2405691804c4298d",
    "capturedAt": "2026-09-22T03:56:37.053Z",
    "elapsedMs": 569.3989129999536,
    "successfulAttemptElapsedMs": 567.7863399999915,
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
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.16
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.71
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.13
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
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.6,
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.39
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 5023,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "1fac2eef443cb046992fd30d82c1ba64e79539e030431082b4c7fd79ada59c88",
    "capturedAt": "2026-09-22T03:56:37.560Z",
    "elapsedMs": 506.0539620000054,
    "successfulAttemptElapsedMs": 503.84154399996623,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:5": 0,
            "body:3": 0,
            "body:4": 0.09,
            "body:6": 0,
            "NONE": 0.87,
            "body:2": 0.04,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.85
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:5": 0.03,
            "body:3": 0.24,
            "body:4": 0.05,
            "body:6": 0.01,
            "body:2": 0.01,
            "body:1": 0.02,
            "NONE": 0.44,
            "body:0": 0.2
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 1658,
        "output_tokens": 200
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1076.977236000006,
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2074,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-423",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:36.485Z",
    "offsetMs": 1.2546689999871887
  },
  {
    "seq": 2075,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-423",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:37.053Z",
    "offsetMs": 569.3995470000082,
    "elapsedMs": 567.7863399999915,
    "outcome": "success"
  },
  {
    "seq": 2076,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-423",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:37.056Z",
    "offsetMs": 572.2590789999813
  },
  {
    "seq": 2077,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-423",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:37.560Z",
    "offsetMs": 1076.6053969999775,
    "elapsedMs": 503.84154399996623,
    "outcome": "success"
  },
  {
    "seq": 2078,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-423",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:37.560Z",
    "offsetMs": 1077.0212279999978,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ad8b2e9cc29840e2fed3b2359bf291da3ec1d9218f61043753cc4ae394666492";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2075},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2077},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2078}} as const;
export const projectionSha256 = "584ff15fc694c463b59dfaa8ab38a8613de56cf38d7bd43ac7e3c382023a6cf8";
