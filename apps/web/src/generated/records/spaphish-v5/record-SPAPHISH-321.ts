import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-321",
  "inputSha256": "82c9c5774036ea66782867539a83e50166fb96dced838f320b50a8dd38cbf694",
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
      "text": "#TI8Yz"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 105,
      "text": "Sp­­­­­­­­­­­­­ot­­­­­­­­­­­­­if­­­­­­­­­­­­­y­­­­­­­­­­­­­ Tu método de pago necesita una actualización\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 105,
      "end": 111,
      "text": "Hola,\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 111,
      "end": 222,
      "text": "No pudimos completar el cobro más reciente en tu cuenta debido a un problema con el método de pago registrado. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 222,
      "end": 359,
      "text": "Para seguir disfrutando de tu música sin interrupciones, te pedimos que revises y actualices tus datos de pago en las próximas 48 horas.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 359,
      "end": 360,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 360,
      "end": 409,
      "text": "Actualizar ahorahttp://dwjdiuwhiudf.assindca.com\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 409,
      "end": 410,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 410,
      "end": 494,
      "text": "Si ya realizaste esta actualización, no es necesario que tomes ninguna otra acción. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 494,
      "end": 589,
      "text": "De lo contrario, te recomendamos hacerlo cuanto antes para evitar la suspensión de tu servicio."
    }
  ],
  "passA": {
    "requestSha256": "1ba55d7cfed42209bfedc1cdd74ef9507e00ff4d4e6a76d62dfd3e02fd3a4d64",
    "capturedAt": "2026-09-20T23:45:39.806Z",
    "elapsedMs": 132.43300000000454,
    "successfulAttemptElapsedMs": 130.45320799999172,
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
          "noul": 0.89
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.38
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.39
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 1,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3618,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "32a219cbcc71fe3933986309ce261c43024341b2da9574d71e89c9c7f01e7908",
    "capturedAt": "2026-09-20T23:45:40.011Z",
    "elapsedMs": 203.16408299999603,
    "successfulAttemptElapsedMs": 201.0307499999908,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:7": 0,
            "body:1": 0,
            "body:4": 0,
            "subject:1": 0,
            "NONE": 0.01,
            "body:5": 0.51,
            "body:0": 0,
            "subject:0": 0,
            "body:8": 0,
            "body:2": 0,
            "body:3": 0.48,
            "body:6": 0
          },
          "confidence": 0.45
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0.01,
            "body:1": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:2": 0.01,
            "body:5": 0.17,
            "body:0": 0.01,
            "subject:0": 0.01,
            "body:8": 0.01,
            "NONE": 0.47,
            "body:3": 0.31,
            "body:6": 0
          },
          "confidence": 0.43
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:7": 0,
            "body:1": 0,
            "NONE": 0,
            "subject:1": 0,
            "body:4": 0,
            "body:5": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:8": 0.53,
            "body:2": 0,
            "body:3": 0.47,
            "body:6": 0
          },
          "confidence": 0.48
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:7": 0,
            "body:1": 0,
            "body:2": 0.15000000000000002,
            "subject:1": 0,
            "NONE": 0.15000000000000002,
            "body:5": 0,
            "body:0": 0.63,
            "subject:0": 0,
            "body:8": 0.01,
            "body:4": 0,
            "body:3": 0.06,
            "body:6": 0
          },
          "confidence": 0.59
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0.01,
            "body:1": 0,
            "body:4": 0,
            "subject:1": 0,
            "NONE": 0.76,
            "body:5": 0.19,
            "body:0": 0,
            "subject:0": 0,
            "body:8": 0.01,
            "body:2": 0,
            "body:3": 0.03,
            "body:6": 0
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 3366,
        "output_tokens": 638
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 338.54766599999857,
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1569,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-321",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:39.674Z",
    "offsetMs": 1.418999999994412
  },
  {
    "seq": 1570,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-321",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:39.805Z",
    "offsetMs": 132.4344160000037,
    "elapsedMs": 130.45320799999172,
    "outcome": "success"
  },
  {
    "seq": 1571,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-321",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:39.809Z",
    "offsetMs": 136.4807909999945
  },
  {
    "seq": 1572,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-321",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:40.011Z",
    "offsetMs": 338.1876249999914,
    "elapsedMs": 201.0307499999908,
    "outcome": "success"
  },
  {
    "seq": 1573,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-321",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:40.011Z",
    "offsetMs": 338.6077910000022,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "059146d590884c79f0906b87ab1dc11ef36aaed553eebc984158df99f8901059";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1570},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1572},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1573}} as const;
export const projectionSha256 = "81513bd99dc980ec686b80684c4f8cc4a9212d8613bfa65236e6aaf1958f35fa";
