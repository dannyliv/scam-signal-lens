import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-310",
  "inputSha256": "d8ff11b5ffa56d62104003ed26b2e3031c766dfa52ad56684e468d5ab3b247ff",
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
    "requestSha256": "de81907806459f1c9def31acfef54551fb2b3352323b8a3731dd04d13d91e382",
    "capturedAt": "2026-09-21T00:57:27.675Z",
    "elapsedMs": 187.36324999999852,
    "successfulAttemptElapsedMs": 185.07945800000016,
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
          "noul": 0.67
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.34
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
          "noul": 0.23
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
          "noul": 0.1
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
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.07,
            "mixed_or_unknown": 0.11,
            "independently_established": 0.01,
            "sender_supplied": 0.81
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 3754,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c8b0c3e39e935b790b367fe930761b4bdf1935ca9bed063f54f7656a3676f076",
    "capturedAt": "2026-09-21T00:57:27.883Z",
    "elapsedMs": 206.9066669999993,
    "successfulAttemptElapsedMs": 203.73008400000072,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.15,
            "body:3": 0,
            "subject:1": 0,
            "subject:0": 0.02,
            "body:4": 0,
            "body:5": 0,
            "body:0": 0,
            "body:1": 0.78,
            "NONE": 0.05
          },
          "confidence": 0.74
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.19,
            "body:3": 0,
            "subject:1": 0,
            "subject:0": 0.02,
            "body:5": 0,
            "body:4": 0,
            "body:0": 0.01,
            "body:1": 0.33,
            "NONE": 0.45
          },
          "confidence": 0.37
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0.2,
            "subject:1": 0,
            "body:2": 0,
            "body:5": 0,
            "body:4": 0,
            "body:1": 0.8,
            "body:0": 0,
            "NONE": 0
          },
          "confidence": 0.77
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.01,
            "body:3": 0.02,
            "subject:1": 0,
            "subject:0": 0.01,
            "body:5": 0.1,
            "body:4": 0.3,
            "body:0": 0.39,
            "body:1": 0.11,
            "NONE": 0.06
          },
          "confidence": 0.31
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.07,
            "body:3": 0.01,
            "subject:1": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:5": 0,
            "body:0": 0,
            "body:1": 0.02,
            "NONE": 0.9
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 3987,
        "output_tokens": 503
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 661.5849159999889,
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
    "seq": 1517,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-310",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:35.919Z",
    "offsetMs": 1.4173329999903217
  },
  {
    "seq": 1518,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-310",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:36.182Z",
    "offsetMs": 264.9455409999937,
    "elapsedMs": 262.9602920000034,
    "outcome": "success"
  },
  {
    "seq": 1519,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-310",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:36.182Z",
    "offsetMs": 265.15937499998836,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2700,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-310",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:27.489Z",
    "offsetMs": 1.739000000001397
  },
  {
    "seq": 2701,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-310",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:27.674Z",
    "offsetMs": 187.3640830000004,
    "elapsedMs": 185.07945800000016,
    "outcome": "success"
  },
  {
    "seq": 2702,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-310",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:27.679Z",
    "offsetMs": 191.75125000000116
  },
  {
    "seq": 2703,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-310",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:27.883Z",
    "offsetMs": 396.2130420000012,
    "elapsedMs": 203.73008400000072,
    "outcome": "success"
  },
  {
    "seq": 2704,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-310",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:27.884Z",
    "offsetMs": 396.4707500000004,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3b69ace795bdec4aa306335da2671efd0db67031e78333cde6ca06e1b073089c";
export const replayAnchors = {"passA":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2701},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2703},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2704}} as const;
export const projectionSha256 = "2ece09f63ae5b5d7dfc219373b5eeb01dbe394ce4bbd88efdc549033f5c23f0e";
