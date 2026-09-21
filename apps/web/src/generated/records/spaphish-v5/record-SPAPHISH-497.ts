import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-497",
  "inputSha256": "c80ac8e86a84a57742fb1f11b00f6338e1a244ff363269649f1462b179bd0902",
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
      "end": 40,
      "text": "Pancracio  ¡Reclama tu Medicare Kit Hoy!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 49,
      "text": "¡Última Oportunidad de Reclamar tu Medicare Kit! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 49,
      "end": 90,
      "text": "Sanitas PARTE DE Bupa ¿Tienes un minuto? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 90,
      "end": 155,
      "text": "¡Haz nuestra encuesta rápida para tener la oportunidad de ganar! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 155,
      "end": 199,
      "text": "KIT DE MEDICARE ¡ENTRA A LA ENCUESTA AHORA! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 199,
      "end": 423,
      "text": "Kit de Medicare ⭐⭐⭐⭐☆ (4.2/5) 3,940 Reseñas Gran capacidad: El compartimento principal tiene 6 bolsillos de malla, adecuado para llevar suministros médicos como gasas, contenedores de emergencia, estetoscopios, vendas, etc. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 423,
      "end": 476,
      "text": "Organiza tus necesidades médicas de manera ordenada. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 476,
      "end": 757,
      "text": "Kit de Medicare: • 1x Vendas & apósitos • 1x Vendas & apósitos • 1x Herramientas • 1x Termómetro • 1x Mega Pack Paracetamol (Tylenol) • 1x Mega Pack Ibuprofeno (Advil) • 1x Mega Pack Naproxeno (Aleve) • 1x Mega Pack Aspirina (Bayer) • 1x Otros esenciales ¡RECLAMA TU PREMIO AHORA! "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 757,
      "end": 932,
      "text": "Gracias, Equipo de Encuestas de Sanitas If you no longer wish to receive these emails, you may unsubscribe by clicking here. click here to remove yourself from our emails list"
    }
  ],
  "passA": {
    "requestSha256": "64634185afa2475130206ca4995318e93127cc970eeefbd52ef0e661fd90d821",
    "capturedAt": "2026-09-20T23:46:38.708Z",
    "elapsedMs": 126.54037500001141,
    "successfulAttemptElapsedMs": 125.57270799999242,
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
          "noul": 0.21
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.87
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.04
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
            "sender_supplied": 0.5,
            "no_sensitive_action": 0.49,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 3727,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "3a232e2ba48abc90b10c8ec4ccf05faeeee22fc8b068dda9e2c095f3876bbd76",
    "capturedAt": "2026-09-21T00:57:35.426Z",
    "elapsedMs": 147.95249999999942,
    "successfulAttemptElapsedMs": 146.12620799999786,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:3": 0.04,
            "body:7": 0,
            "body:4": 0,
            "NONE": 0.9,
            "body:6": 0,
            "body:2": 0.06,
            "body:0": 0
          },
          "confidence": 0.88
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "body:5": 0,
            "subject:0": 0.02,
            "body:3": 0.04,
            "body:7": 0,
            "body:4": 0,
            "body:2": 0,
            "body:6": 0.01,
            "NONE": 0,
            "body:0": 0.93
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.88,
            "body:5": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:7": 0.11,
            "body:4": 0,
            "body:2": 0,
            "body:6": 0,
            "NONE": 0.01,
            "body:0": 0
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 2590,
        "output_tokens": 330
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 433.9529170000096,
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
        "status": "selected",
        "segmentId": "body:0"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 2442,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-497",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:38.581Z",
    "offsetMs": 0.7229590000060853
  },
  {
    "seq": 2443,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-497",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:38.707Z",
    "offsetMs": 126.53883400000632,
    "elapsedMs": 125.57270799999242,
    "outcome": "success"
  },
  {
    "seq": 2444,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-497",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:38.712Z",
    "offsetMs": 131.821208999987
  },
  {
    "seq": 2445,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-497",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:38.865Z",
    "offsetMs": 284.6475839999912,
    "elapsedMs": 151.97379200000432,
    "outcome": "success"
  },
  {
    "seq": 2446,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-497",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:38.865Z",
    "offsetMs": 284.8298749999958,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2839,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-497",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:35.279Z",
    "offsetMs": 2.0412499999983993
  },
  {
    "seq": 2840,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-497",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:35.425Z",
    "offsetMs": 148.68845899999724,
    "elapsedMs": 146.12620799999786,
    "outcome": "success"
  },
  {
    "seq": 2841,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-497",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:35.426Z",
    "offsetMs": 149.03483399999823,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b77629844dae5f5c5661aadd50a105677ea9af5f7acbf00d7136d996e3d8fbac";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2443},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2840},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2841}} as const;
export const projectionSha256 = "a524bf2a17bf72c7a47cb2ff810c8df810456200209a753433c5143cfbe7d9eb";
