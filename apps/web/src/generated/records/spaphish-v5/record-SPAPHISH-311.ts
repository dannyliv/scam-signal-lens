import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-311",
  "inputSha256": "e09d1998b3524f54e941a76fcc9336170e0be3baa27fc4c7650344edb60e1d21",
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
      "end": 124,
      "text": "Evite más entregas perdidas Reciba alertas actualizadas y reprograme varios paquetes al mismo tiempo con Express My Choice®."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 42,
      "text": "El conductor no pudo entregar su paquete. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 42,
      "end": 78,
      "text": "Lo sentimos, no hemos dado contigo. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 78,
      "end": 188,
      "text": "Seguimiento del paquete, en cualquier momento, y lugar Registrarse México Lo sentimos, no hemos dado contigo. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 188,
      "end": 230,
      "text": "El conductor no pudo entregar su paquete. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 230,
      "end": 269,
      "text": "Seleccione una nueva fecha de entrega. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 269,
      "end": 394,
      "text": "Evite más entregas fallidas Reciba alertas actualizadas y reprograme varios paquetes al mismo tiempo con Express My Choice®. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 394,
      "end": 446,
      "text": "Siguiente El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 446,
      "end": 591,
      "text": "Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 900 Avenida Corporativa, Ste 100 #200, Ciudad Real, CDMX, 01000"
    }
  ],
  "passA": {
    "requestSha256": "f79283f390eefa90c41feed60c85f94315cfd503d9c767cc2ba93951586bc245",
    "capturedAt": "2026-09-20T23:45:36.321Z",
    "elapsedMs": 136.4028330000001,
    "successfulAttemptElapsedMs": 134.44783299999835,
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
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.37
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.71
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.2
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0.01,
            "mixed_or_unclear": 0.01,
            "active_request": 0.98
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.24,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.75
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 3614,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "38672e43bf7cc028fbacdb26fc26bde327c9853b4bd688f55f6e2aa953b91ee9",
    "capturedAt": "2026-09-20T23:45:36.468Z",
    "elapsedMs": 145.03366699999606,
    "successfulAttemptElapsedMs": 142.74683400000504,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:2": 0,
            "body:7": 0,
            "NONE": 0.33,
            "body:1": 0,
            "body:3": 0.01,
            "body:4": 0.13,
            "body:5": 0.39,
            "subject:0": 0.13,
            "body:0": 0.01,
            "body:6": 0
          },
          "confidence": 0.31
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.55,
            "body:7": 0.06,
            "body:2": 0.01,
            "body:1": 0.06,
            "body:3": 0.05,
            "body:4": 0.02,
            "body:5": 0.03,
            "body:0": 0.18,
            "subject:0": 0.03,
            "body:6": 0.01
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 1571,
        "output_tokens": 221
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 283.93262499998673,
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
        "status": "low_confidence",
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
    "seq": 1520,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-311",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:36.186Z",
    "offsetMs": 1.3765829999902053
  },
  {
    "seq": 1521,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-311",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:36.321Z",
    "offsetMs": 136.4026659999945,
    "elapsedMs": 134.44783299999835,
    "outcome": "success"
  },
  {
    "seq": 1522,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-311",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:36.325Z",
    "offsetMs": 140.2062079999887
  },
  {
    "seq": 1523,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-311",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:36.468Z",
    "offsetMs": 283.71091599999636,
    "elapsedMs": 142.74683400000504,
    "outcome": "success"
  },
  {
    "seq": 1524,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-311",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:36.469Z",
    "offsetMs": 283.98983299999963,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "4853be0f67740d6f1a5b9e8a378a206af6916a0668a311834c54fb357f299e51";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1521},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1523},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1524}} as const;
export const projectionSha256 = "de6e4da899831f1e85e4064acfd12c71d9236f371df933836b65b63418e21fa8";
