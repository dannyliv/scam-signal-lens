import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-018",
  "inputSha256": "997b090ace21b5a946edc6c3136d7f785fd970cddc0adf75e4f5811b3a97a826",
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
    "requestSha256": "2b9b09dd8d36bbfd6ecddc8460318bf60ab2c54b244392e2015c0efba0e8663b",
    "capturedAt": "2026-09-20T23:43:56.804Z",
    "elapsedMs": 124.06887499999993,
    "successfulAttemptElapsedMs": 123.2071249999999,
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
          "noul": 0.16
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.84,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.15
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 3565,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4ad24134cb0a22252df33b5b7583833871184a30ac97ad5e72dd2ca8db67d51b",
    "capturedAt": "2026-09-20T23:43:56.962Z",
    "elapsedMs": 156.53808299999946,
    "successfulAttemptElapsedMs": 155.4887920000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:5": 1,
            "body:3": 0,
            "body:2": 0,
            "NONE": 0,
            "body:1": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:4": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 907,
        "output_tokens": 95
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 282.3937499999993,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 84,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-018",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:56.681Z",
    "offsetMs": 0.4920829999991838
  },
  {
    "seq": 85,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-018",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:56.804Z",
    "offsetMs": 124.06941599999936,
    "elapsedMs": 123.2071249999999,
    "outcome": "success"
  },
  {
    "seq": 86,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-018",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:56.806Z",
    "offsetMs": 126.02666599999975
  },
  {
    "seq": 87,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-018",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:56.962Z",
    "offsetMs": 282.04058299999997,
    "elapsedMs": 155.4887920000001,
    "outcome": "success"
  },
  {
    "seq": 88,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-018",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:56.963Z",
    "offsetMs": 282.46966599999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "78ac6c9ef047b8f5499f9cbc18eb81c04c63a3265516901c78463b2f3c243b5c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":85},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":87},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":88}} as const;
export const projectionSha256 = "c935ad502f6d284963499621a2c1739938960467c50d34586ab0fe893cceda86";
