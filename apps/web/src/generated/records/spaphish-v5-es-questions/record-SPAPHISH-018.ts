import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-018",
  "inputSha256": "997b090ace21b5a946edc6c3136d7f785fd970cddc0adf75e4f5811b3a97a826",
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
      "end": 44,
      "text": "Vacuna contra la COVID-19 - Programe su cita"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 113,
      "text": "Hola, Ricardo: Usted cumple con los requisitos para programar su cita para recibir la vacuna contra la COVID-19. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 113,
      "end": 178,
      "text": "Use el siguiente enlace para iniciar sesión y programar su cita. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 178,
      "end": 282,
      "text": "Luego de que la programe, recibirá un correo electrónico de confirmación con la información de su cita. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 282,
      "end": 434,
      "text": "HAGA CLIC AQUÍ PARA PROGRAMAR SU CITA ID de registro: V-88776655 Nombre completo: Ricardo Montero Si tiene dudas o inquietudes, no dude en comunicarse. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 434,
      "end": 443,
      "text": "Gracias. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 443,
      "end": 478,
      "text": "Sofía Ramírez Coordinadora de citas"
    }
  ],
  "passA": {
    "requestSha256": "07226b323e12c19dd65d22c05244df7f076076c39de1beb35d80f5b945369b7e",
    "capturedAt": "2026-09-22T03:48:31.608Z",
    "elapsedMs": 635.8741620000001,
    "successfulAttemptElapsedMs": 634.5486149999997,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.1
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.12
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.09
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
          "noul": 0.05
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
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.72,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.27
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 5015,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "e77339476d9b83c69caedd59c08e7a54f096eba396f8c5b2c8be4de0ec948d66",
    "capturedAt": "2026-09-22T03:48:32.232Z",
    "elapsedMs": 621.3930550000005,
    "successfulAttemptElapsedMs": 619.3662399999994,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:3": 0,
            "body:4": 0,
            "body:1": 0,
            "body:2": 0,
            "body:0": 0,
            "body:5": 1,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 1007,
        "output_tokens": 95
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1259.504907999999,
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:5"
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
    "seq": 84,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-018",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:30.973Z",
    "offsetMs": 0.4428829999997106
  },
  {
    "seq": 85,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-018",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:31.608Z",
    "offsetMs": 635.8748999999989,
    "elapsedMs": 634.5486149999997,
    "outcome": "success"
  },
  {
    "seq": 86,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-018",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:31.612Z",
    "offsetMs": 639.290602000001
  },
  {
    "seq": 87,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-018",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:32.232Z",
    "offsetMs": 1259.3244999999988,
    "elapsedMs": 619.3662399999994,
    "outcome": "success"
  },
  {
    "seq": 88,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-018",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:32.232Z",
    "offsetMs": 1259.5449750000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "baae718ff2a844bd6e2887e94c0954239ca8aefe974db39ac2cc8874b5f0ee75";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":85},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":87},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":88}} as const;
export const projectionSha256 = "d80ba77b9232663413898ee8e9845f95da6f8eb505e3a29951c3e97206de0164";
