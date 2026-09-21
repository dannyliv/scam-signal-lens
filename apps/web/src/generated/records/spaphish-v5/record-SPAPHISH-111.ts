import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-111",
  "inputSha256": "98da4599467551cbdf144c7206bf5cf01e9d702db2db8e468fa65818017b0621",
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
      "end": 137,
      "text": "Estimado ricardo.lopez@corporate-mail.net: Recientemente actualizamos nuestro servidor de SSL para mejorar el servicio que le prestamos. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 137,
      "end": 301,
      "text": "Por eso, tenga en cuenta que es necesario que todos los usuarios actualicen su información de inicio de sesión para que puedan disfrutar de la nueva actualización. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 301,
      "end": 465,
      "text": "No podrá enviar ni recibir correos electrónicos si no confirma este correo electrónico automatizado en un plazo de 24 horas a partir del momento en que lo recibió. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 465,
      "end": 530,
      "text": "Debe actualizar su información usando el enlace a continuación . "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 530,
      "end": 569,
      "text": "ACTUALIZAR ¡Gracias por usar LinkedIn! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 569,
      "end": 587,
      "text": "Equipo de LinkedIn"
    }
  ],
  "passA": {
    "requestSha256": "6785e823491300361f71cb1544f1ed874afeef54509d29fbb2005c18d2c08030",
    "capturedAt": "2026-09-20T23:44:27.134Z",
    "elapsedMs": 168.74145899999712,
    "successfulAttemptElapsedMs": 167.31254099999933,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.65
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.44
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
          "noul": 0.37
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
            "sender_supplied": 0.99,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3561,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "fe9dd75b08e2432b687d82e5b189f46fe49d6daa4efd5ccd1779c8bf0747f75f",
    "capturedAt": "2026-09-20T23:44:27.247Z",
    "elapsedMs": 111.9159159999981,
    "successfulAttemptElapsedMs": 110.67958299999736,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0,
            "body:5": 0,
            "body:4": 0.01,
            "body:0": 0,
            "body:1": 0.16,
            "body:3": 0.57,
            "body:2": 0.01,
            "NONE": 0.25
          },
          "confidence": 0.51
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:5": 0,
            "body:4": 0.01,
            "body:0": 0,
            "body:1": 0.12,
            "body:3": 0.3,
            "body:2": 0,
            "NONE": 0.56
          },
          "confidence": 0.5
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:5": 0,
            "body:4": 0,
            "body:0": 0,
            "body:1": 0,
            "body:3": 0,
            "body:2": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "subject:0": 0,
            "body:5": 0.77,
            "body:4": 0.07,
            "body:0": 0.12,
            "body:1": 0.02,
            "body:3": 0,
            "body:2": 0.01,
            "NONE": 0.01
          },
          "confidence": 0.73
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:5": 0,
            "body:4": 0,
            "body:0": 0,
            "body:1": 0.01,
            "body:3": 0.2,
            "body:2": 0.08,
            "NONE": 0.71
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 2789,
        "output_tokens": 461
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 282.3462079999954,
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
    "seq": 543,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-111",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:26.966Z",
    "offsetMs": 0.8975419999987935
  },
  {
    "seq": 544,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-111",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:27.134Z",
    "offsetMs": 168.74470799999835,
    "elapsedMs": 167.31254099999933,
    "outcome": "success"
  },
  {
    "seq": 545,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-111",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:27.136Z",
    "offsetMs": 170.6299579999977
  },
  {
    "seq": 546,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-111",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:27.247Z",
    "offsetMs": 281.87629199999355,
    "elapsedMs": 110.67958299999736,
    "outcome": "success"
  },
  {
    "seq": 547,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-111",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:27.247Z",
    "offsetMs": 282.42612499999814,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f3fb67a401cf6d48e3c04906b0be8cd1040f56d1725d61248ba7bda460d16a4b";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":544},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":546},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":547}} as const;
export const projectionSha256 = "8cdc874495975e16a77a7792b95dea3e14004109e6348c28296efee855a7aab8";
