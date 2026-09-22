import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-163",
  "inputSha256": "c3a02ee14e68a3ab3974c0733cf53e8e87e1c4c6f975285e8f3e570a3a30da56",
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
    "requestSha256": "17baaa5ab6202a71702e98498d5269029d80106d5b870fa2079ce940ae207ad7",
    "capturedAt": "2026-09-22T03:51:27.123Z",
    "elapsedMs": 632.1484099999943,
    "successfulAttemptElapsedMs": 631.304799000005,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.09
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.81
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.27
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.34
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.2
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.77
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
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
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.08,
            "independently_established": 0,
            "sender_supplied": 0.89,
            "no_sensitive_action": 0.03
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 5129,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "317db3fddc70e798454dbbbde9387ab5940f999e197c1fb241b958d82e1e1d75",
    "capturedAt": "2026-09-22T03:51:27.733Z",
    "elapsedMs": 608.0907510000106,
    "successfulAttemptElapsedMs": 606.8588909999817,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:11": 0,
            "body:5": 0,
            "body:8": 0,
            "body:6": 0,
            "subject:0": 0,
            "body:3": 0,
            "subject:1": 0,
            "body:7": 0,
            "NONE": 0.02,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0.64,
            "body:10": 0,
            "body:9": 0,
            "body:4": 0.34
          },
          "confidence": 0.6
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:11": 0,
            "body:5": 0,
            "body:8": 0,
            "body:6": 0,
            "subject:0": 0,
            "body:3": 0.64,
            "body:7": 0,
            "subject:1": 0,
            "NONE": 0,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0.36,
            "body:10": 0,
            "body:4": 0,
            "body:9": 0
          },
          "confidence": 0.61
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:11": 0,
            "body:5": 0,
            "body:8": 0,
            "body:6": 0.04,
            "subject:0": 0,
            "body:3": 0,
            "body:7": 0,
            "subject:1": 0,
            "NONE": 0.76,
            "body:1": 0,
            "body:0": 0.03,
            "body:4": 0.01,
            "body:10": 0.01,
            "body:2": 0.14,
            "body:9": 0.01
          },
          "confidence": 0.73
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:11": 0,
            "body:5": 0,
            "body:8": 0,
            "body:6": 0,
            "subject:0": 0,
            "body:3": 0.08,
            "body:7": 0,
            "subject:1": 0,
            "NONE": 0.77,
            "body:1": 0,
            "body:0": 0,
            "body:4": 0.01,
            "body:9": 0,
            "body:2": 0.11,
            "body:10": 0.03
          },
          "confidence": 0.74
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:11": 0,
            "body:5": 0,
            "body:8": 0,
            "body:6": 0,
            "subject:0": 0.03,
            "body:3": 0.05,
            "body:7": 0,
            "subject:1": 0,
            "NONE": 0.34,
            "body:1": 0.01,
            "body:0": 0.09,
            "body:2": 0.1,
            "body:10": 0,
            "body:4": 0.38,
            "body:9": 0
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 4513,
        "output_tokens": 785
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1242.5524279999954,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
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
        "status": "not_requested",
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 792,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-163",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:26.491Z",
    "offsetMs": 0.5763999999908265
  },
  {
    "seq": 793,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-163",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:27.123Z",
    "offsetMs": 632.1474319999979,
    "elapsedMs": 631.304799000005,
    "outcome": "success"
  },
  {
    "seq": 794,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-163",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:27.125Z",
    "offsetMs": 634.868466999993
  },
  {
    "seq": 795,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-163",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:27.733Z",
    "offsetMs": 1242.1920770000143,
    "elapsedMs": 606.8588909999817,
    "outcome": "success"
  },
  {
    "seq": 796,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-163",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:27.733Z",
    "offsetMs": 1242.6140020000166,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f791007b8e4e8f5a218a4c09e7334948d90f218e94d8272437720642cf786f6d";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":793},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":795},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":796}} as const;
export const projectionSha256 = "c1214947631f980045e59a09d08d8248f3713790eb6d52fd9dac3edfabba7d53";
