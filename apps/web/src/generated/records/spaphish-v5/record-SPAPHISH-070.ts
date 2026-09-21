import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-070",
  "inputSha256": "0da4f0f8a3db3e08048cdd47bb4e29ee9c29feeefb791160b78ebe99b0ce00e3",
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
      "end": 26,
      "text": "¡Se requiere verificación!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 136,
      "text": "Estimado ricardo.perez@corporate-net.com: Recientemente actualizamos nuestro servidor de SSL para mejorar el servicio que le prestamos. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 136,
      "end": 300,
      "text": "Por eso, tenga en cuenta que es necesario que todos los usuarios actualicen su información de inicio de sesión para que puedan disfrutar de la nueva actualización. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 300,
      "end": 464,
      "text": "No podrá enviar ni recibir correos electrónicos si no confirma este correo electrónico automatizado en un plazo de 24 horas a partir del momento en que lo recibió. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 464,
      "end": 528,
      "text": "Debe actualizar su información usando el enlace a continuación. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 528,
      "end": 573,
      "text": "ACTUALIZAR ¡Gracias por usar RedProfesional! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 573,
      "end": 597,
      "text": "Equipo de RedProfesional"
    }
  ],
  "passA": {
    "requestSha256": "7e65f8eb5f856836ffa3b96fc5182a5af1a49a5d5964cd0b215612f6718cf667",
    "capturedAt": "2026-09-20T23:44:13.990Z",
    "elapsedMs": 130.14412500000253,
    "successfulAttemptElapsedMs": 128.35337499999878,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.59
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.42
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
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.37
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.99,
            "no_sensitive_action": 0.01,
            "mixed_or_unknown": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3563,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "1d8890c1cac189e25b348e2ba42a21a90f1fd5c6f56d9b34b4d85549ded7a7cf",
    "capturedAt": "2026-09-20T23:44:14.188Z",
    "elapsedMs": 195.3279999999977,
    "successfulAttemptElapsedMs": 193.81262499999866,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "NONE": 0.28,
            "body:1": 0.13,
            "body:0": 0,
            "subject:0": 0.01,
            "body:3": 0.55,
            "body:4": 0.02,
            "body:5": 0,
            "body:2": 0.01
          },
          "confidence": 0.48
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.62,
            "body:1": 0.11,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0.26,
            "body:4": 0.01,
            "body:5": 0,
            "body:2": 0
          },
          "confidence": 0.55
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0,
            "body:1": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:4": 0,
            "body:5": 0,
            "body:2": 1
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "NONE": 0.01,
            "body:1": 0.02,
            "body:0": 0.19,
            "subject:0": 0,
            "body:3": 0,
            "body:4": 0.03,
            "body:5": 0.74,
            "body:2": 0.01
          },
          "confidence": 0.7
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.73,
            "body:1": 0.01,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0.18,
            "body:4": 0,
            "body:5": 0,
            "body:2": 0.08
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 2801,
        "output_tokens": 461
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 328.32329099999697,
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
    "seq": 341,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-070",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:13.861Z",
    "offsetMs": 1.0116659999985131
  },
  {
    "seq": 342,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-070",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:13.990Z",
    "offsetMs": 130.1462079999983,
    "elapsedMs": 128.35337499999878,
    "outcome": "success"
  },
  {
    "seq": 343,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-070",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:13.993Z",
    "offsetMs": 133.48912499999642
  },
  {
    "seq": 344,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-070",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:14.188Z",
    "offsetMs": 327.984375,
    "elapsedMs": 193.81262499999866,
    "outcome": "success"
  },
  {
    "seq": 345,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-070",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:14.188Z",
    "offsetMs": 328.3817499999968,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f578c6f10831650c9bb3218705fb3db1e930fc9002a46f0140083fa93259a13e";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":342},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":344},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":345}} as const;
export const projectionSha256 = "343a1fdc76fc4908b77e97bea82cc040372eba6d7c28deefe2391749a363c730";
