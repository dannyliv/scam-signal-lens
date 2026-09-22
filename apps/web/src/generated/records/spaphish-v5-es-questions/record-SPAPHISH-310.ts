import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-310",
  "inputSha256": "d8ff11b5ffa56d62104003ed26b2e3031c766dfa52ad56684e468d5ab3b247ff",
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
      "end": 43,
      "text": "Es necesario actualizar tu forma de pago  !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 43,
      "end": 49,
      "text": "#t75Wh"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 222,
      "text": "Sp­­­­­­­­­­­­­ot­­­­­­­­­­­­­if­­­­­­­­­­­­­y­­­­­­­­­­­­­ Tu método de pago necesita una actualización Hola, No pudimos completar el cobro más reciente en tu cuenta debido a un problema con el método de pago registrado. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 222,
      "end": 359,
      "text": "Para seguir disfrutando de tu música sin interrupciones, te pedimos que revises y actualices tus datos de pago en las próximas 48 horas. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 359,
      "end": 460,
      "text": "Actualizar ahora Si ya realizaste esta actualización, no es necesario que tomes ninguna otra acción. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 460,
      "end": 671,
      "text": "De lo contrario, te recomendamos hacerlo cuanto antes para evitar la suspensión de tu servicio. -------------------------------------------------------------------------------- Gracias por ser parte de Spotify. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 671,
      "end": 714,
      "text": "Si necesitas ayuda, estamos para apoyarte. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 714,
      "end": 881,
      "text": "Sp­­­­­­­­­­­­­ot­­­­­­­­­­­­­if­­­­­­­­­­­­­y­­­­­­­­­­­­­ AB · Kungsgatan 50 · 112 34 Gotemburgo · Suecia Sp­­­­­­­­­­­­­ot­­­­­­­­­­­­­if­­­­­­­­­­­­­y­­­­­­­­­­­­­"
    }
  ],
  "passA": {
    "requestSha256": "4564a7e118fa18585e65b006b21123328c7c9939b9b3dbbaf0b7354a89b65e75",
    "capturedAt": "2026-09-22T03:54:22.463Z",
    "elapsedMs": 644.7754120000172,
    "successfulAttemptElapsedMs": 643.572845000017,
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
          "noul": 0.75
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.33
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.83,
            "mixed_or_unknown": 0.07,
            "independently_established": 0,
            "no_sensitive_action": 0.1
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 5204,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "6219e4dd9f6b9735e0ac330fa804b7e8b49652ee219477de7f997a5de4c728b3",
    "capturedAt": "2026-09-22T03:54:23.052Z",
    "elapsedMs": 587.0768139999709,
    "successfulAttemptElapsedMs": 585.9048689999618,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.22,
            "NONE": 0.01,
            "subject:1": 0,
            "subject:0": 0.01,
            "body:1": 0.75,
            "body:3": 0,
            "body:5": 0,
            "body:0": 0.01,
            "body:4": 0
          },
          "confidence": 0.72
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.11,
            "NONE": 0.58,
            "subject:1": 0,
            "subject:0": 0.01,
            "body:1": 0.28,
            "body:3": 0.01,
            "body:5": 0,
            "body:0": 0.01,
            "body:4": 0
          },
          "confidence": 0.52
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "NONE": 0,
            "subject:1": 0,
            "subject:0": 0,
            "body:1": 0.6900000000000001,
            "body:3": 0.31,
            "body:5": 0,
            "body:0": 0,
            "body:4": 0
          },
          "confidence": 0.64
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0.01,
            "NONE": 0.05,
            "subject:1": 0,
            "subject:0": 0,
            "body:0": 0.27,
            "body:3": 0.01,
            "body:5": 0.04,
            "body:1": 0.11,
            "body:4": 0.51
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 3741,
        "output_tokens": 402
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1233.6005870000226,
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
        "status": "selected",
        "segmentId": "body:1"
      },
      "payment_request": {
        "status": "low_confidence",
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
    "adviceTemplateIds": [
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1513,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-310",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:21.819Z",
    "offsetMs": 0.936907000024803
  },
  {
    "seq": 1514,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-310",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:22.463Z",
    "offsetMs": 644.7900670000236,
    "elapsedMs": 643.572845000017,
    "outcome": "success"
  },
  {
    "seq": 1515,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-310",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:22.465Z",
    "offsetMs": 647.1583250000258
  },
  {
    "seq": 1516,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-310",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:23.051Z",
    "offsetMs": 1233.3095469999826,
    "elapsedMs": 585.9048689999618,
    "outcome": "success"
  },
  {
    "seq": 1517,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-310",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:23.052Z",
    "offsetMs": 1233.6462620000239,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8b6fc28e74cbfa6947cc63c4ca0063e4005425026da6144a1b32fff95cd63330";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1514},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1516},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1517}} as const;
export const projectionSha256 = "bc0f1e3dd4408143f4ddca04d29e3d2811ec5ee2d142068217e696c38f1ad0d1";
