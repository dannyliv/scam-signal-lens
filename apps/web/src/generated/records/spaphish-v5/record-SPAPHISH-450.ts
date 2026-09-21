import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-450",
  "inputSha256": "840c1cd985006a7070870f2bb01f95f911686cfb52dae0f9544f5cc69c6fc8d2",
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
      "end": 7,
      "text": "Aviso !"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 159,
      "text": "Estimado Cliente , Tenemos que actualizar tus documentos para cumplir con la Ley 15/2022 de prevención de blanqueo de capitales, sólo te llevará unos minutos. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 159,
      "end": 286,
      "text": "El Formulario de conocimiento del cliente ya está actualizado : Es importante que lo actualizas en un plazo máximo de una dia. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 286,
      "end": 613,
      "text": "En caso contrario, recuerda que tu operativa en la web y en la app está Iimitada a consultas, por teléfono puedes seguir operando, pe ro tus cuentas no podrán admitir nuevos ingresos hasta que estén actualizados. https://bbva.seguro.com/actualizar Consulta todos tus detalles y movimientos en la App BBVA o en tu Banca Online. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 613,
      "end": 654,
      "text": "Gracias por seguir confiando en nosotros."
    }
  ],
  "passA": {
    "requestSha256": "b2f1217d8bf536edbcb00d73205e4adab3093290fcd8f5279b40b3fde6d06669",
    "capturedAt": "2026-09-20T23:46:23.148Z",
    "elapsedMs": 109.71283299999777,
    "successfulAttemptElapsedMs": 106.96499999999651,
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
          "noul": 0.77
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.21
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.83
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
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.07,
            "independently_established": 0.01,
            "sender_supplied": 0.91,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 3587,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "cb8e9f9954d136a7574916a2fb42a2f01585e49fcdd13db6fba71ba1994a33cd",
    "capturedAt": "2026-09-20T23:46:23.266Z",
    "elapsedMs": 116.54370800001197,
    "successfulAttemptElapsedMs": 113.88516599999275,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.04,
            "body:0": 0.3,
            "subject:0": 0,
            "body:1": 0.2,
            "body:3": 0,
            "body:2": 0.46
          },
          "confidence": 0.35
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.35,
            "body:3": 0,
            "body:2": 0.65
          },
          "confidence": 0.57
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.02,
            "body:0": 0.9,
            "subject:0": 0,
            "body:1": 0.01,
            "body:3": 0.02,
            "body:2": 0.05
          },
          "confidence": 0.88
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.76,
            "body:1": 0,
            "body:3": 0,
            "body:2": 0.24
          },
          "confidence": 0.7
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.01,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:3": 0,
            "body:2": 0.99
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 2800,
        "output_tokens": 375
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 228.3241670000134,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 2210,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-450",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:23.040Z",
    "offsetMs": 2.1315420000173617
  },
  {
    "seq": 2211,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-450",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:23.148Z",
    "offsetMs": 109.71383399999468,
    "elapsedMs": 106.96499999999651,
    "outcome": "success"
  },
  {
    "seq": 2212,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-450",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:23.152Z",
    "offsetMs": 113.55850000001374
  },
  {
    "seq": 2213,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-450",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:23.266Z",
    "offsetMs": 228.05025000000023,
    "elapsedMs": 113.88516599999275,
    "outcome": "success"
  },
  {
    "seq": 2214,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-450",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:23.267Z",
    "offsetMs": 228.37870900001144,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f1b253a6d2f4ebd494f35cc3f88804fd9c8d8939827b3a23c7b816dfe587c992";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2211},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2213},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2214}} as const;
export const projectionSha256 = "9fceacdb711cfff12bbba2250689f5aa15eb21252d43c79d3ca5d6e72f9bde3c";
