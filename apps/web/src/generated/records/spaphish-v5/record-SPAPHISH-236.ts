import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-236",
  "inputSha256": "96ea5f788bdcfc238ccd95296e1922a1de0dbfece7ab1a5974f635bd6662aac3",
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
      "text": "Tu cuenta de Amazon.com.mx"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 38,
      "text": " ¡Gracias por visitar Amazon.com.mx! \n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 38,
      "end": 39,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 39,
      "end": 107,
      "text": " Conforme a tu petición, has cambiado tu contraseña correctamente. \n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 107,
      "end": 108,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 108,
      "end": 288,
      "text": " Visita Mi cuenta en Amazon.com.mx para ver tus pedidos, realizar cambios en pedidos en los que no se haya comenzado a tramitar el envío, actualizar tus suscripciones y mucho más.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 288,
      "end": 289,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 289,
      "end": 495,
      "text": " Si necesitas contactar con nosotros por cualquier motivo, recuerda que sólo podemos compartir información del pedido a la persona cuyo nombre y dirección de correo electrónico están asociados a la cuenta.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 495,
      "end": 497,
      "text": " \n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 497,
      "end": 541,
      "text": " Gracias de nuevo por comprar con nosotros.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 541,
      "end": 546,
      "text": " </p>"
    }
  ],
  "passA": {
    "requestSha256": "b7c8e19847600650adafe6e645a7b36f6258980a10e993e4de2dac7b2206fd07",
    "capturedAt": "2026-09-20T23:45:09.202Z",
    "elapsedMs": 168.55437500000698,
    "successfulAttemptElapsedMs": 166.57958300001337,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.79
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.44
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.87,
            "active_request": 0.13
          },
          "confidence": 0.82
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.91,
            "sender_supplied": 0.01,
            "mixed_or_unknown": 0,
            "independently_established": 0.08
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 3539,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "08f4a9ddac23b927f201b0512dd84304ff53eb74773f3720328f23a511510d99",
    "capturedAt": "2026-09-20T23:45:09.357Z",
    "elapsedMs": 152.1524999999965,
    "successfulAttemptElapsedMs": 150.0122080000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "subject:0": 0.09,
            "body:7": 0,
            "body:2": 0.06,
            "NONE": 0.29,
            "body:3": 0.01,
            "body:9": 0,
            "body:1": 0,
            "body:0": 0,
            "body:8": 0,
            "body:6": 0.53,
            "body:4": 0.01,
            "body:5": 0.01
          },
          "confidence": 0.48
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:9": 0,
            "body:7": 0,
            "body:2": 0,
            "subject:0": 0.01,
            "body:1": 0,
            "body:3": 0,
            "body:4": 0.61,
            "body:0": 0,
            "body:8": 0,
            "body:6": 0.11,
            "NONE": 0.27,
            "body:5": 0
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 1399,
        "output_tokens": 262
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 323.5966250000056,
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
        "status": "low_confidence",
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
    "seq": 1153,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-236",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:09.034Z",
    "offsetMs": 1.2668750000011642
  },
  {
    "seq": 1154,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-236",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:09.202Z",
    "offsetMs": 168.5550840000069,
    "elapsedMs": 166.57958300001337,
    "outcome": "success"
  },
  {
    "seq": 1155,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-236",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:09.206Z",
    "offsetMs": 172.58162500000617
  },
  {
    "seq": 1156,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-236",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:09.356Z",
    "offsetMs": 323.3587499999994,
    "elapsedMs": 150.0122080000001,
    "outcome": "success"
  },
  {
    "seq": 1157,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-236",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:09.357Z",
    "offsetMs": 323.6571249999979,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1533a0cd4a312052d2467723a3e3c5691acc9e8b5e66965071344ac27b0ec0a6";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1154},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1156},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1157}} as const;
export const projectionSha256 = "51fab609f6ed7afa35857258c84d470570bc59da3a677041027a57db0a5e264f";
