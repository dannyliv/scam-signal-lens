import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-168",
  "inputSha256": "0d32f2e8fee3c81cb8864b07378fcd1cd4d6a6e215173b52a87174a34504922d",
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
      "end": 69,
      "text": "Ezequiela Miguelina - Tienes (1) paquete esperando ser entregado 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 69,
      "end": 112,
      "text": "Usa tu código para rastrearlo y recibirlo. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 112,
      "end": 119,
      "text": "ID#3614"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 63,
      "text": "❒ ENTREGA DEL PAQUETE PENDIENTE ◉ Registro / Inicio de sesión ."
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 63,
      "end": 212,
      "text": "GLS❒ 99887766 SEGUIMIENTO ➢ Laura Soto Tienes (1) paquete pendiente de entrega Confirma tus datos de envío ■ tienes un paquete pendiente de entrega. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 212,
      "end": 325,
      "text": "Sigue tu pedido en tiempo real y programa la entrega para asegurarte de recibirlo a la hora que más te convenga! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 325,
      "end": 410,
      "text": "PROGRAMA TU ENTREGA Si no deseas recibir más correos electrónicos, desconéctate aquí."
    }
  ],
  "passA": {
    "requestSha256": "d500db0c3addcf053bc8350a095dff121653d399be4193659e99a81db74eff58",
    "capturedAt": "2026-09-20T23:44:44.753Z",
    "elapsedMs": 127.52533299999777,
    "successfulAttemptElapsedMs": 125.81804199999897,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.34
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.29
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
          "noul": 0.22
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.27
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.23,
            "sender_supplied": 0.75
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 3582,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4f6a797f2e21c78a7aa11fa4b08ccc6c16106f900d8456fcf9d3f5ef2e700d11",
    "capturedAt": "2026-09-20T23:44:44.953Z",
    "elapsedMs": 197.32416700000613,
    "successfulAttemptElapsedMs": 195.61716599999636,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:2": 0,
            "body:2": 0,
            "body:0": 0.46,
            "subject:0": 0.01,
            "body:1": 0.05,
            "subject:1": 0.24,
            "body:3": 0,
            "NONE": 0.24
          },
          "confidence": 0.37
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:2": 0,
            "body:2": 0,
            "body:0": 0.02,
            "subject:0": 0,
            "body:3": 0,
            "subject:1": 0,
            "body:1": 0.62,
            "NONE": 0.36
          },
          "confidence": 0.55
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:2": 0,
            "body:2": 0.11,
            "body:0": 0.02,
            "subject:0": 0.01,
            "body:3": 0.14,
            "subject:1": 0.01,
            "body:1": 0.02,
            "NONE": 0.69
          },
          "confidence": 0.65
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:2": 0,
            "body:2": 0.01,
            "body:0": 0.1,
            "subject:0": 0.01,
            "body:3": 0,
            "subject:1": 0,
            "body:1": 0.76,
            "NONE": 0.12
          },
          "confidence": 0.72
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:2": 0,
            "body:2": 0.02,
            "body:0": 0.02,
            "subject:0": 0,
            "body:3": 0.01,
            "subject:1": 0.01,
            "body:1": 0.01,
            "NONE": 0.93
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 2920,
        "output_tokens": 461
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 327.47754200000054,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 823,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-168",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:44.627Z",
    "offsetMs": 1.106791999998677
  },
  {
    "seq": 824,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-168",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:44.753Z",
    "offsetMs": 127.52733300000546,
    "elapsedMs": 125.81804199999897,
    "outcome": "success"
  },
  {
    "seq": 825,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-168",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:44.756Z",
    "offsetMs": 130.84075000000303
  },
  {
    "seq": 826,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-168",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:44.953Z",
    "offsetMs": 327.1322500000024,
    "elapsedMs": 195.61716599999636,
    "outcome": "success"
  },
  {
    "seq": 827,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-168",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:44.953Z",
    "offsetMs": 327.54583300000377,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f567186553468eb73b0c567322596c73d1fa4f401820cce84376fa97e39aee0d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":824},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":826},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":827}} as const;
export const projectionSha256 = "8fe58139178fcfa62cd5b9e81d4718c69122fc46759efc84b30d1fae7128f2bb";
