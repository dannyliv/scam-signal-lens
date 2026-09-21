import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-163",
  "inputSha256": "c3a02ee14e68a3ab3974c0733cf53e8e87e1c4c6f975285e8f3e570a3a30da56",
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
      "end": 50,
      "text": "¡Felicitaciones, afortunado ganador! ????........."
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 50,
      "end": 59,
      "text": "#ID:12208"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 55,
      "text": "Alerta de ganador del premio mayor – FELICIDADES Srta. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 55,
      "end": 75,
      "text": "Elena ¡Lo lograste! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 75,
      "end": 190,
      "text": "[ Por favor confirme sus datos ] \"Para asegurar tu premio mayor, confirma tus datos antes de la medianoche de hoy. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 190,
      "end": 249,
      "text": "De lo contrario, podrías perder el acceso a tus ganancias. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 249,
      "end": 360,
      "text": "Fecha : Nombre : ✉️Correo electrónico: Reclama tu premio mayor ahora Oferta válida solo para nuevos jugadores. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 360,
      "end": 387,
      "text": "Juega con responsabilidad. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 387,
      "end": 404,
      "text": "© 2025 Big-Wins. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 404,
      "end": 435,
      "text": "Todos los derechos reservados. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 435,
      "end": 474,
      "text": "Si deseas suscribirte, haga clic aquí. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 474,
      "end": 494,
      "text": "Este es un anuncio. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 494,
      "end": 661,
      "text": "Para continuar recibiendo notificaciones de este anunciante, por favor haga clic aquí o escríbanos directamente a: 4500 Oceanfront Blvd #810, Newport Beach, CA 92660. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 661,
      "end": 840,
      "text": "Si ya se ha registrado previamente para recibir este boletín y desea darse de baja, Por favor haga clic aquí \"enlace\" O escribir a: 102 Main Street Suite, #210, Lincoln, NE, 68501"
    }
  ],
  "passA": {
    "requestSha256": "d7d69903631b319d421979475b1ee8813060cc187c07224fb6e71cbbef1ad977",
    "capturedAt": "2026-09-20T23:44:43.241Z",
    "elapsedMs": 159.4796669999996,
    "successfulAttemptElapsedMs": 157.830750000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.67
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.17
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.31
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.41
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.23
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.57
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.94,
            "mixed_or_unknown": 0.04,
            "independently_established": 0,
            "no_sensitive_action": 0.02
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 3679,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "bf1f1e8e70373ada47a38b85832cc8ef3557e6a5909d7ea97ab866a87a737f2e",
    "capturedAt": "2026-09-21T00:57:20.810Z",
    "elapsedMs": 183.64950000000044,
    "successfulAttemptElapsedMs": 180.94379200000003,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:10": 0,
            "body:1": 0,
            "body:0": 0,
            "body:11": 0,
            "body:7": 0,
            "NONE": 0.12,
            "body:4": 0.31,
            "body:5": 0,
            "subject:1": 0,
            "body:8": 0,
            "body:3": 0,
            "subject:0": 0,
            "body:2": 0.5700000000000001,
            "body:6": 0,
            "body:9": 0
          },
          "confidence": 0.53
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:10": 0,
            "body:1": 0,
            "body:0": 0,
            "body:11": 0,
            "body:7": 0,
            "NONE": 0,
            "body:4": 0,
            "body:5": 0,
            "subject:1": 0,
            "body:8": 0,
            "body:3": 0.32,
            "subject:0": 0,
            "body:2": 0.68,
            "body:6": 0,
            "body:9": 0
          },
          "confidence": 0.65
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:10": 0.01,
            "body:1": 0,
            "body:0": 0.02,
            "body:11": 0.01,
            "body:7": 0,
            "NONE": 0.89,
            "body:4": 0,
            "body:5": 0,
            "subject:1": 0,
            "body:8": 0,
            "body:2": 0.05,
            "subject:0": 0,
            "body:3": 0,
            "body:6": 0.01,
            "body:9": 0.01
          },
          "confidence": 0.88
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:10": 0.02,
            "body:1": 0,
            "body:0": 0,
            "body:11": 0,
            "body:7": 0,
            "NONE": 0.81,
            "body:4": 0.01,
            "body:5": 0,
            "subject:1": 0,
            "body:8": 0,
            "body:3": 0.08,
            "subject:0": 0,
            "body:2": 0.07,
            "body:6": 0,
            "body:9": 0
          },
          "confidence": 0.79
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:10": 0,
            "body:1": 0,
            "body:0": 0,
            "body:11": 0,
            "body:7": 0,
            "NONE": 0.94,
            "body:4": 0.02,
            "body:5": 0,
            "subject:1": 0,
            "body:8": 0,
            "body:2": 0.03,
            "subject:0": 0,
            "body:3": 0.01,
            "body:6": 0,
            "body:9": 0
          },
          "confidence": 0.94
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:10": 0,
            "body:1": 0.01,
            "body:0": 0.12,
            "body:11": 0,
            "body:7": 0,
            "NONE": 0.43,
            "body:4": 0.3,
            "body:5": 0,
            "subject:1": 0,
            "body:8": 0,
            "body:3": 0.03,
            "subject:0": 0.02,
            "body:2": 0.09,
            "body:6": 0,
            "body:9": 0
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 4674,
        "output_tokens": 942
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 515.1636669999962,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "none_selected",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "none_selected",
        "segmentId": null
      },
      "remote_access_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unrealistic_reward": {
        "status": "low_confidence",
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
    "seq": 798,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-163",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:43.082Z",
    "offsetMs": 1.0576670000009472
  },
  {
    "seq": 799,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-163",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:43.240Z",
    "offsetMs": 159.4802920000002,
    "elapsedMs": 157.830750000001,
    "outcome": "success"
  },
  {
    "seq": 800,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-163",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:43.244Z",
    "offsetMs": 163.5459589999955
  },
  {
    "seq": 801,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-163",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:43.410Z",
    "offsetMs": 329.25074999999924,
    "elapsedMs": 164.87087500000052,
    "outcome": "success"
  },
  {
    "seq": 802,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-163",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:43.410Z",
    "offsetMs": 329.4232499999998,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2582,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-163",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:20.628Z",
    "offsetMs": 3.362250000000131
  },
  {
    "seq": 2583,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-163",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:20.809Z",
    "offsetMs": 184.93049999999948,
    "elapsedMs": 180.94379200000003,
    "outcome": "success"
  },
  {
    "seq": 2584,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-163",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:20.810Z",
    "offsetMs": 185.7389579999999,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1ed3b19634e301344968873b8beabf81328b7a3d8ef923184be1ec316cf49970";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":799},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2583},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2584}} as const;
export const projectionSha256 = "694943ed9d5a0f83cc0370572fa8719b3fbe3c1fd722ffb1ad21f5e1aeddb55e";
