import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-009",
  "inputSha256": "e373e0d52c39a6440b126ba2cd0b513a094bba7f57c89e89cd9d5767d46d405f",
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
      "end": 26,
      "text": "¡Se requiere verificación!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 80,
      "text": "actualizamos nuestro servidor de SSL para mejorar el servicio que le prestamos. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 80,
      "end": 244,
      "text": "Por eso, tenga en cuenta que es necesario que todos los usuarios actualicen su información de inicio de sesión para que puedan disfrutar de la nueva actualización. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 244,
      "end": 408,
      "text": "No podrá enviar ni recibir correos electrónicos si no confirma este correo electrónico automatizado en un plazo de 24 horas a partir del momento en que lo recibió. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 408,
      "end": 473,
      "text": "Debe actualizar su información usando el enlace a continuación . "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 473,
      "end": 512,
      "text": "ACTUALIZAR ¡Gracias por usar LinkedIn! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 512,
      "end": 530,
      "text": "Equipo de LinkedIn"
    }
  ],
  "passA": {
    "requestSha256": "3339a4aedc0efc9ae59d667c027e505a38462549bd6eb9c8ec61f8a6ce531b36",
    "capturedAt": "2026-09-20T23:43:53.969Z",
    "elapsedMs": 121.67620799999986,
    "successfulAttemptElapsedMs": 120.75729199999978,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.62
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.41
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.33
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
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.99,
            "no_sensitive_action": 0.01,
            "mixed_or_unknown": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3544,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "e312dc683d26157a8d655cc752ceb58bcb044015c9d79b7b54d1b6a5ce9818c6",
    "capturedAt": "2026-09-21T00:57:14.820Z",
    "elapsedMs": 123.31816700000002,
    "successfulAttemptElapsedMs": 120.11262499999998,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:3": 0.58,
            "body:2": 0.01,
            "NONE": 0.29,
            "body:1": 0.11,
            "body:5": 0,
            "body:4": 0.01,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.51
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.32,
            "body:2": 0,
            "NONE": 0.53,
            "body:1": 0.15,
            "body:5": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.45
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:3": 0,
            "body:2": 1,
            "NONE": 0,
            "body:1": 0,
            "body:5": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:3": 0.01,
            "body:2": 0.01,
            "NONE": 0.01,
            "body:1": 0.03,
            "body:5": 0.8,
            "body:4": 0.08,
            "subject:0": 0,
            "body:0": 0.06
          },
          "confidence": 0.78
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.78,
            "body:2": 0.07,
            "body:3": 0.15,
            "body:5": 0,
            "body:1": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 2687,
        "output_tokens": 461
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 395.4910420000002,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
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
        "status": "selected",
        "segmentId": "body:2"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:5"
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
    "seq": 41,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-009",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:53.847Z",
    "offsetMs": 0.5137920000001941
  },
  {
    "seq": 42,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-009",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:53.968Z",
    "offsetMs": 121.67891700000018,
    "elapsedMs": 120.75729199999978,
    "outcome": "success"
  },
  {
    "seq": 43,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-009",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:53.971Z",
    "offsetMs": 124.94475000000011
  },
  {
    "seq": 44,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-009",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:54.117Z",
    "offsetMs": 270.4285420000001,
    "elapsedMs": 144.78991700000006,
    "outcome": "success"
  },
  {
    "seq": 45,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-009",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:54.117Z",
    "offsetMs": 270.59516699999995,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2468,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-009",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:14.699Z",
    "offsetMs": 3.547416999999996
  },
  {
    "seq": 2469,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-009",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:14.820Z",
    "offsetMs": 124.46020900000008,
    "elapsedMs": 120.11262499999998,
    "outcome": "success"
  },
  {
    "seq": 2470,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-009",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:14.821Z",
    "offsetMs": 124.827584,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "61f2cd9e36123051ef0d397e5f720414bfa73644b42f7148a8715d8a802a0197";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":42},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2469},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2470}} as const;
export const projectionSha256 = "aa2be56799366f1c89ff14e9a6dd39aed6d7a99a82a1c277af908f2685c3ca10";
