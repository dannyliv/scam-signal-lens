import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-321",
  "inputSha256": "82c9c5774036ea66782867539a83e50166fb96dced838f320b50a8dd38cbf694",
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
    "requestSha256": "b8f82778e7256200439eaeae7e3c4aa2fcd94deeadc225a1bb6935edb3bed7c2",
    "capturedAt": "2026-09-22T03:54:35.378Z",
    "elapsedMs": 713.4029590000282,
    "successfulAttemptElapsedMs": 712.3040400000173,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.89
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.37
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
          "noul": 0.34
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
            "mixed_or_unclear": 0,
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 1,
            "independently_established": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 5068,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "3eda614ee04a7e44f0e0383b61bdc2285ea0b23a925adaf8cc8f3c96cfc8543f",
    "capturedAt": "2026-09-22T03:54:36.022Z",
    "elapsedMs": 642.3425779999816,
    "successfulAttemptElapsedMs": 640.7312529999763,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:6": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:8": 0,
            "body:0": 0,
            "body:3": 0.48,
            "body:1": 0,
            "body:5": 0.51,
            "body:2": 0,
            "NONE": 0.01
          },
          "confidence": 0.45
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:4": 0.01,
            "subject:1": 0,
            "body:8": 0.01,
            "body:0": 0,
            "body:3": 0.25,
            "body:1": 0,
            "body:5": 0.13,
            "body:2": 0,
            "NONE": 0.6
          },
          "confidence": 0.55
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:6": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:8": 0.42,
            "body:0": 0,
            "body:3": 0.58,
            "body:2": 0,
            "body:5": 0,
            "body:1": 0,
            "NONE": 0
          },
          "confidence": 0.53
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:6": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:4": 0.01,
            "subject:1": 0,
            "body:8": 0.01,
            "body:0": 0.45999999999999996,
            "body:3": 0.07,
            "body:2": 0.17,
            "body:5": 0.01,
            "body:1": 0.01,
            "NONE": 0.26
          },
          "confidence": 0.42
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:7": 0.01,
            "subject:0": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:8": 0.02,
            "body:0": 0,
            "body:3": 0.05,
            "body:2": 0,
            "body:5": 0.26,
            "body:1": 0,
            "NONE": 0.66
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 3898,
        "output_tokens": 638
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1357.4175309999846,
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
        "status": "low_confidence",
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
    "seq": 1567,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-321",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:34.665Z",
    "offsetMs": 0.7908849999657832
  },
  {
    "seq": 1568,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-321",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:35.378Z",
    "offsetMs": 713.4028699999908,
    "elapsedMs": 712.3040400000173,
    "outcome": "success"
  },
  {
    "seq": 1569,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-321",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:35.380Z",
    "offsetMs": 715.862352999975
  },
  {
    "seq": 1570,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-321",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:36.021Z",
    "offsetMs": 1357.123208999983,
    "elapsedMs": 640.7312529999763,
    "outcome": "success"
  },
  {
    "seq": 1571,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-321",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:36.022Z",
    "offsetMs": 1357.4672230000142,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "011fcc484f2dd2760e6f0f03780fc857cfb1907c14fa361bce1d2eaf3ca8fc0c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1568},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1570},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1571}} as const;
export const projectionSha256 = "97f0f41a9e4db2702e60a57b36ca493f763d0a2a6dba21c00f8426d52a7f95fe";
