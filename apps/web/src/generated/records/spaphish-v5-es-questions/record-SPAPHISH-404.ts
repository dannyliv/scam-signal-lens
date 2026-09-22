import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-404",
  "inputSha256": "53ee5a5ee166fdf3cb3add508645cee891abb7ade079aff9095f74b1f0d33a08",
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
    "requestSha256": "582bde7ffdce3e4f7f565c4fbeeb3c7a73cad39eebaae5405881f3018d5c8670",
    "capturedAt": "2026-09-22T03:56:14.815Z",
    "elapsedMs": 699.0094950000057,
    "successfulAttemptElapsedMs": 697.2966930000111,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.81
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.21
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.06,
            "informational": 0.9400000000000001,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.91
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.07,
            "no_sensitive_action": 0.93,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 5224,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "b26ff82646f1b3e2628c8b91c1e7c020a6a6bbcb66373a9acd25319824bb4107",
    "capturedAt": "2026-09-22T03:56:15.353Z",
    "elapsedMs": 535.7394719999866,
    "successfulAttemptElapsedMs": 533.1461400000262,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:7": 0.02,
            "body:12": 0,
            "body:0": 0.01,
            "body:4": 0.01,
            "body:3": 0,
            "NONE": 0.25,
            "body:11": 0,
            "body:5": 0.05,
            "body:10": 0.04,
            "body:1": 0.01,
            "body:8": 0.01,
            "body:9": 0.01,
            "body:14": 0.02,
            "subject:0": 0,
            "body:2": 0,
            "body:13": 0.5599999999999999,
            "body:6": 0.01
          },
          "confidence": 0.54
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:7": 0.36,
            "body:12": 0,
            "body:0": 0,
            "body:4": 0.01,
            "body:5": 0.17,
            "NONE": 0.31,
            "body:10": 0.12,
            "body:3": 0,
            "body:11": 0,
            "body:1": 0,
            "body:8": 0,
            "body:9": 0.02,
            "body:14": 0,
            "subject:0": 0,
            "body:6": 0,
            "body:13": 0.01,
            "body:2": 0
          },
          "confidence": 0.31
        }
      },
      "usage": {
        "input_tokens": 2472,
        "output_tokens": 363
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1238.2034359999816,
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
    "seq": 1979,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-404",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:14.117Z",
    "offsetMs": 1.4122709999792278
  },
  {
    "seq": 1980,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-404",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:14.814Z",
    "offsetMs": 699.0091350000002,
    "elapsedMs": 697.2966930000111,
    "outcome": "success"
  },
  {
    "seq": 1981,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-404",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:14.819Z",
    "offsetMs": 704.1614100000006
  },
  {
    "seq": 1982,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-404",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:15.353Z",
    "offsetMs": 1237.8963489999878,
    "elapsedMs": 533.1461400000262,
    "outcome": "success"
  },
  {
    "seq": 1983,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-404",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:15.353Z",
    "offsetMs": 1238.2529079999658,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2c48d72b1376d6a2b0b0f8301907b4fe4f51201dba8e7e8b355c7ff4f46b577f";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1980},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1982},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1983}} as const;
export const projectionSha256 = "40a2c275a85a15fdd190fad94caa38baea61fc431b60064f43f46cefe3297090";
