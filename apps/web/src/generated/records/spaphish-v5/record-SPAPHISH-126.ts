import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-126",
  "inputSha256": "9a9eafa6e3c6bd3086777732d55416d877e2c4dc7e384613f9911498d09e9afb",
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
    "requestSha256": "18f65463bbaace1f92b444fbb176a1ec8ba41ce256d8133e54852728c15f6afe",
    "capturedAt": "2026-09-20T23:44:31.575Z",
    "elapsedMs": 129.28891699999804,
    "successfulAttemptElapsedMs": 127.51008299999376,
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
          "noul": 0.7
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.37
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.21
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.09
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
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.06,
            "sender_supplied": 0.86,
            "no_sensitive_action": 0.07,
            "independently_established": 0.01
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3754,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "a66ed79361eb9f4cdb26d6ebe0e57e09867a905d5d41bead8d88529c2b051f05",
    "capturedAt": "2026-09-20T23:44:31.726Z",
    "elapsedMs": 149.57041700000264,
    "successfulAttemptElapsedMs": 148.13216699999612,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "body:4": 0,
            "body:2": 0.12,
            "body:0": 0,
            "body:5": 0,
            "body:1": 0.84,
            "body:6": 0,
            "body:3": 0,
            "NONE": 0.03,
            "subject:1": 0
          },
          "confidence": 0.81
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.02,
            "body:4": 0,
            "body:2": 0.14,
            "body:1": 0.43,
            "body:5": 0,
            "body:0": 0.01,
            "body:6": 0,
            "body:3": 0,
            "NONE": 0.4,
            "subject:1": 0
          },
          "confidence": 0.36
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:4": 0,
            "body:5": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:1": 0.76,
            "body:6": 0,
            "body:3": 0.24,
            "NONE": 0,
            "subject:1": 0
          },
          "confidence": 0.73
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.41,
            "body:4": 0.02,
            "body:5": 0.27,
            "body:2": 0.01,
            "subject:0": 0.01,
            "body:1": 0.07,
            "body:6": 0.13,
            "body:3": 0,
            "NONE": 0.08,
            "subject:1": 0
          },
          "confidence": 0.34
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.03,
            "body:2": 0.07,
            "body:0": 0,
            "body:4": 0,
            "body:5": 0.01,
            "body:6": 0,
            "body:3": 0.02,
            "NONE": 0.87,
            "subject:1": 0
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 4062,
        "output_tokens": 550
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 280.97841699999844,
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
    "seq": 618,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-126",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:31.446Z",
    "offsetMs": 1.1294169999964652
  },
  {
    "seq": 619,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-126",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:31.575Z",
    "offsetMs": 129.29308399999718,
    "elapsedMs": 127.51008299999376,
    "outcome": "success"
  },
  {
    "seq": 620,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-126",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:31.577Z",
    "offsetMs": 131.9452089999977
  },
  {
    "seq": 621,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-126",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:31.726Z",
    "offsetMs": 280.62054199999693,
    "elapsedMs": 148.13216699999612,
    "outcome": "success"
  },
  {
    "seq": 622,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-126",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:31.726Z",
    "offsetMs": 281.04141700000037,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "996e1034ac80fad6ecf612a4e8cda7f7206b5df2c40bee0a105c2d9b8cce3975";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":619},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":621},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":622}} as const;
export const projectionSha256 = "6e213d8d9c8df1e07286edd790b708b8fcbd29f35ad684707e8316095a1020c9";
