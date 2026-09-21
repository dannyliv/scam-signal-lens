import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-404",
  "inputSha256": "53ee5a5ee166fdf3cb3add508645cee891abb7ade079aff9095f74b1f0d33a08",
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
      "end": 36,
      "text": "Recibo Operación - Operation Receipt"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 33,
      "text": "Gracias por confiar en nosotros. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 33,
      "end": 94,
      "text": "Le adjuntamos el recibo de su operación de cambio de moneda. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 94,
      "end": 126,
      "text": "Thank you for changing with us. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 126,
      "end": 179,
      "text": "We attach your foreign exchange transaction receipt. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 179,
      "end": 193,
      "text": "¿Alguna duda? "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 193,
      "end": 210,
      "text": "Llámenos gratis. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 210,
      "end": 224,
      "text": "Any question? "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 224,
      "end": 322,
      "text": "Call us for free: 800-999-5555 Este correo electrónico contiene información sobre su transacción. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 322,
      "end": 412,
      "text": "Este no es un correo electrónico de marketing y no recibirá ninguno a menos que lo desee. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 412,
      "end": 453,
      "text": "Por favor, no responda a esta dirección. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 453,
      "end": 611,
      "text": "Si desea comunicarse con nosotros, envíe un correo electrónico a servicio.cambios@cambioglobal.com.mx This email contains information about your transaction. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 611,
      "end": 687,
      "text": "This is not a marketing email and you won’t receive any unless you want to. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 687,
      "end": 724,
      "text": "Please do not reply to this address. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 724,
      "end": 935,
      "text": "If you want to reach us please email servicio.cambios@cambioglobal.com.mx Casa de Cambio autorizada por la Secretaría de Hacienda y Crédito Público mediante oficio número 101- 999 de fecha 31 de agosto de 2011. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 935,
      "end": 1400,
      "text": "Con fundamento en el Articulo 51 B, de la Ley General de Organizaciones  y Actividades Auxiliares del Crédito, El Gobierno Federal y las Entidades de la Administración Pública Paraestatal no podrán responsabilizarse ni garantizar el resultado de las operaciones que realicen las  Organizaciones Auxiliares del Crédito y Casas de Cambio, así como tampoco asumir responsabilidad alguna de las obligaciones contraídas con sus socios o terceros. www.cambioglobal.com.mx"
    }
  ],
  "passA": {
    "requestSha256": "4649b286df4559e79472fbdcadf6a6933ab85ca7f792a35661823ad5c6129377",
    "capturedAt": "2026-09-20T23:46:07.722Z",
    "elapsedMs": 150.65154199997778,
    "successfulAttemptElapsedMs": 149.29745799998636,
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
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.72
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.09
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
          "noul": 0.17
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.1,
            "informational": 0.9,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.85
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.09,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.91
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 3774,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "2d1f086d23236d7655f1df313d8ddbb1bd6ee819595f7bb7d6cf73d30263ef5d",
    "capturedAt": "2026-09-20T23:46:07.827Z",
    "elapsedMs": 101.96337500002119,
    "successfulAttemptElapsedMs": 99.1152080000029,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:12": 0,
            "body:9": 0.01,
            "body:4": 0.01,
            "subject:0": 0,
            "body:7": 0.01,
            "body:2": 0,
            "body:3": 0,
            "body:1": 0,
            "body:5": 0.02,
            "NONE": 0.18,
            "body:13": 0.71,
            "body:6": 0,
            "body:14": 0.04,
            "body:10": 0.01,
            "body:0": 0,
            "body:8": 0.01,
            "body:11": 0
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 1452,
        "output_tokens": 182
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 255.9468329999945,
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
        "status": "selected",
        "segmentId": "body:13"
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
    "seq": 1981,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-404",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:07.572Z",
    "offsetMs": 0.9761250000155997
  },
  {
    "seq": 1982,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-404",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:07.721Z",
    "offsetMs": 150.64879200002179,
    "elapsedMs": 149.29745799998636,
    "outcome": "success"
  },
  {
    "seq": 1983,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-404",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:07.726Z",
    "offsetMs": 155.6615420000162
  },
  {
    "seq": 1984,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-404",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:07.826Z",
    "offsetMs": 255.55749999999534,
    "elapsedMs": 99.1152080000029,
    "outcome": "success"
  },
  {
    "seq": 1985,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-404",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:07.827Z",
    "offsetMs": 256.06750000000466,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ef19d4db39f05230ac9ac8920854d7c34c386bfb8be49be8e451b6fb1d225d4f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1982},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1984},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1985}} as const;
export const projectionSha256 = "48a9b026648e31f7fcbb2be2d649ddf7a66bcee2d7c762b0355a6b9f6d643d7f";
