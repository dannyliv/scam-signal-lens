import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-096",
  "inputSha256": "8a4d90ffad0b2533a13ca2a341b8a9b9be5672681614dbc8cdb6f051f3115025",
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
      "end": 24,
      "text": "Encuesta de satisfaccion"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 14,
      "text": "¡Buenos días!\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 14,
      "end": 15,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 15,
      "end": 150,
      "text": "En el archivo adjunto encontrarán la dirección electrónica y el código de acceso para que puedan ingresar a la evaluación de servicio.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 150,
      "end": 151,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 151,
      "end": 213,
      "text": "Ahora está desactivada, pero estará lista a partir de mañana.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 213,
      "end": 214,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 214,
      "end": 238,
      "text": "Gracias por su atención."
    }
  ],
  "passA": {
    "requestSha256": "bdd96b4af48dde818b65efe42085ef177a0666580a30b1def3184820a532db3d",
    "capturedAt": "2026-09-20T23:44:22.336Z",
    "elapsedMs": 129.48462500000096,
    "successfulAttemptElapsedMs": 127.97837499999878,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.12
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.12
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.22
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.07
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
            "informational": 0.16,
            "mixed_or_unclear": 0,
            "active_request": 0.84
          },
          "confidence": 0.78
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.87,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.12
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 3488,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "dc37b45ebac99251014214af51b68d2bc3a92b1e93c14c74c8dfde1fd62ba16f",
    "capturedAt": "2026-09-20T23:44:22.456Z",
    "elapsedMs": 118.9652500000011,
    "successfulAttemptElapsedMs": 117.88562499999898,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:2": 0.2,
            "body:1": 0,
            "body:3": 0,
            "NONE": 0.76,
            "body:4": 0,
            "body:5": 0,
            "subject:0": 0.04,
            "body:0": 0
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 757,
        "output_tokens": 102
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 250.1157499999972,
  "derived": {
    "concern": "few_warning_signs",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
        "status": "none_selected",
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 469,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-096",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:22.207Z",
    "offsetMs": 0.9489159999975527
  },
  {
    "seq": 470,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-096",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:22.336Z",
    "offsetMs": 129.48775000000023,
    "elapsedMs": 127.97837499999878,
    "outcome": "success"
  },
  {
    "seq": 471,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-096",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:22.338Z",
    "offsetMs": 131.44591599999694
  },
  {
    "seq": 472,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-096",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:22.456Z",
    "offsetMs": 249.7661659999976,
    "elapsedMs": 117.88562499999898,
    "outcome": "success"
  },
  {
    "seq": 473,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-096",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:22.456Z",
    "offsetMs": 250.1950829999987,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e8efbf73061e03230a7e6397cd6341fdce7a4788d958a527e6018aaa9a5a1768";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":470},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":472},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":473}} as const;
export const projectionSha256 = "a5bbb63dda0bbe89bac481c34e764e1cba4bbc8652d1c33991e167c82ec03bd9";
