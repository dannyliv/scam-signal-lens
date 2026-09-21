import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-055",
  "inputSha256": "eb89b8c08f156d851eccd670c34d367e35ec12ccd57e93a39c41ec70f27017a0",
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
      "end": 42,
      "text": "Actualización de las políticas de COVID-19"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 13,
      "text": "Buenos días! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 13,
      "end": 132,
      "text": "Debido al aumento de casos de COVID-19, actualizamos nuestra política sobre la respuesta que adoptará nuestra oficina. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 132,
      "end": 213,
      "text": "Estas pautas están disponibles aquí , en un documento compartido con la oficina. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 213,
      "end": 250,
      "text": "Inicie sesión y revise el documento. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 250,
      "end": 354,
      "text": "No deje de tomar precauciones para limitar la propagación del COVID-19 durante la temporada de fiestas. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 354,
      "end": 443,
      "text": "Recuerde evitar las tres “C”: espacios cerrados, lugares concurridos y contacto cercano. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 443,
      "end": 535,
      "text": "Además, siga estos tres consejos: use mascarilla, conserve su distancia y lávese las manos. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 535,
      "end": 617,
      "text": "Gracias a su continuo esfuerzo y su paciencia, todos nos mantendremos protegidos. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 617,
      "end": 648,
      "text": "¡Que tenga un maravilloso día! "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 648,
      "end": 657,
      "text": "Gracias. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 657,
      "end": 729,
      "text": "Departamento de Recursos Humanos de Universidad del Valle Campus Central"
    }
  ],
  "passA": {
    "requestSha256": "bd90f861004074e312ea84fd51d2afc613b3c3894bdd7ada9798d20f6d0fcde2",
    "capturedAt": "2026-09-20T23:44:08.429Z",
    "elapsedMs": 145.5277079999978,
    "successfulAttemptElapsedMs": 144.02633299999798,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.36
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0.05,
            "active_request": 0.95
          },
          "confidence": 0.93
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.6,
            "mixed_or_unknown": 0.03,
            "sender_supplied": 0.33,
            "independently_established": 0.04
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 3606,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "765ea5a5bcb441ece2202cb525f6419a3bd016620564c1492f483b8aa884d212",
    "capturedAt": "2026-09-20T23:44:08.604Z",
    "elapsedMs": 171.74124999999913,
    "successfulAttemptElapsedMs": 170.10949999999866,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:5": 0,
            "body:1": 0.06,
            "body:4": 0,
            "body:3": 0.01,
            "body:7": 0,
            "NONE": 0,
            "body:0": 0,
            "body:8": 0,
            "body:6": 0,
            "body:10": 0.93,
            "subject:0": 0,
            "body:9": 0,
            "body:2": 0
          },
          "confidence": 0.91
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:5": 0,
            "body:1": 0,
            "body:4": 0,
            "body:3": 0.91,
            "body:7": 0,
            "body:0": 0,
            "NONE": 0.05,
            "body:8": 0,
            "body:6": 0,
            "body:10": 0,
            "body:2": 0.04,
            "body:9": 0,
            "subject:0": 0
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 1658,
        "output_tokens": 283
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 320.4442080000008,
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
        "segmentId": "body:10"
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
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 267,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-055",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:08.284Z",
    "offsetMs": 0.9288750000014261
  },
  {
    "seq": 268,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-055",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:08.429Z",
    "offsetMs": 145.52858299999934,
    "elapsedMs": 144.02633299999798,
    "outcome": "success"
  },
  {
    "seq": 269,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-055",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:08.433Z",
    "offsetMs": 149.29016599999886
  },
  {
    "seq": 270,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-055",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:08.603Z",
    "offsetMs": 320.09454099999857,
    "elapsedMs": 170.10949999999866,
    "outcome": "success"
  },
  {
    "seq": 271,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-055",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:08.604Z",
    "offsetMs": 320.51737499999945,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "92d51da591a32b1d0ad3788c4f5aacf206881df8cb3b6c4cb2daf2c3ed6abc82";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":268},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":270},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":271}} as const;
export const projectionSha256 = "0ad852b1b33d7e0dae9bdc0c9f79c2639a9f5dbd23743d46048c54c708e5f045";
