import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-126",
  "inputSha256": "9a9eafa6e3c6bd3086777732d55416d877e2c4dc7e384613f9911498d09e9afb",
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
      "end": 556,
      "text": "De lo contrario, te recomendamos hacerlo cuanto antes para evitar la suspensión de tu servicio. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 556,
      "end": 590,
      "text": "Gracias por ser parte de Spotify. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 590,
      "end": 633,
      "text": "Si necesitas ayuda, estamos para apoyarte. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 633,
      "end": 798,
      "text": "Sp­­­­­­­­­­­­­ot­­­­­­­­­­­­­if­­­­­­­­­­­­­y­­­­­­­­­­­­­ AB · Sveavägen 52 · 113 34 Estocolmo · Suecia Sp­­­­­­­­­­­­­ot­­­­­­­­­­­­­if­­­­­­­­­­­­­y­­­­­­­­­­­­­"
    }
  ],
  "passA": {
    "requestSha256": "e7f221ff2867da12691cc277f963aa5d729e0ecefce720e805a1f7ef7dddef6d",
    "capturedAt": "2026-09-22T03:50:44.206Z",
    "elapsedMs": 644.8409629999951,
    "successfulAttemptElapsedMs": 644.1565230000124,
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
          "noul": 0.76
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.32
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
          "noul": 0.06
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.1,
            "independently_established": 0,
            "sender_supplied": 0.81,
            "mixed_or_unknown": 0.09
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 5204,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "2379885af544d3937be6f5465452a64636bb46c673938d79639e5a6e5dfe71b7",
    "capturedAt": "2026-09-22T03:50:44.708Z",
    "elapsedMs": 500.31191700001364,
    "successfulAttemptElapsedMs": 499.47071799999685,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.01,
            "body:5": 0,
            "NONE": 0.01,
            "body:2": 0.22,
            "subject:1": 0,
            "body:3": 0,
            "body:4": 0,
            "body:1": 0.75,
            "body:6": 0
          },
          "confidence": 0.72
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.01,
            "body:5": 0,
            "NONE": 0.55,
            "body:2": 0.12,
            "subject:1": 0,
            "body:3": 0.01,
            "body:4": 0,
            "body:1": 0.3,
            "body:6": 0
          },
          "confidence": 0.5
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:5": 0,
            "NONE": 0,
            "body:1": 0.71,
            "body:2": 0,
            "body:3": 0.29,
            "body:4": 0,
            "subject:1": 0,
            "body:6": 0
          },
          "confidence": 0.67
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.22,
            "body:5": 0.55,
            "NONE": 0.04,
            "subject:1": 0,
            "body:1": 0.1,
            "body:4": 0.01,
            "body:2": 0.02,
            "body:3": 0,
            "body:6": 0.05
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 3801,
        "output_tokens": 438
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1146.791568000015,
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 612,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-126",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:43.561Z",
    "offsetMs": 0.48311900001135655
  },
  {
    "seq": 613,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-126",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:44.206Z",
    "offsetMs": 644.8417860000045,
    "elapsedMs": 644.1565230000124,
    "outcome": "success"
  },
  {
    "seq": 614,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-126",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:44.208Z",
    "offsetMs": 646.7797660000215
  },
  {
    "seq": 615,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-126",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:44.707Z",
    "offsetMs": 1146.5031710000185,
    "elapsedMs": 499.47071799999685,
    "outcome": "success"
  },
  {
    "seq": 616,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-126",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:44.708Z",
    "offsetMs": 1146.8379209999985,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b5ee73dae7270c6ee49325730ee08dddec5d91b5cb32de2b738a605ed6215a66";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":613},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":615},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":616}} as const;
export const projectionSha256 = "dd85068d0801460ed03369560674e5d3f55e7a2219844c4aa9a21612e908c5a6";
