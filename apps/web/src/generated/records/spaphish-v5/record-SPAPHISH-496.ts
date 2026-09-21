import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-496",
  "inputSha256": "f632d5c54e105b18b55c4671ff5cf5e29363b11f0f42d86f29962c257f0d49d3",
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
      "end": 62,
      "text": ">>Pablito!! -  Tienes un (1) paquete pendiente de entrega 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 62,
      "end": 108,
      "text": "Usa tu código para seguirlo y recibirlo ___🚚."
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 108,
      "end": 109,
      "text": "X"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 78,
      "text": "FedEx ® ☰ Fecha de envío: 04-18-2025 ¡Fallo en la entrega para Ricardo López! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 78,
      "end": 141,
      "text": "Entrega del paquete suspendida ¿Cómo desea recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 141,
      "end": 230,
      "text": "Quiero que me lo entreguen Lo recogeré yo mismo ¿Dónde desea que se entregue el paquete? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 230,
      "end": 599,
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 04-18-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "1210353e378cdcb94720ed3c2dc1f96e0174010d6db6796152054418cbf794e2",
    "capturedAt": "2026-09-20T23:46:38.416Z",
    "elapsedMs": 158.02437500000815,
    "successfulAttemptElapsedMs": 155.22858300001826,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.11
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.24
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.21
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
          "noul": 0.08
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
            "informational": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.76,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.23
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 3595,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "fa187ab72b453d6d27cafe18b4809d3d464537f4a1aac158ee0297c8c2400f28",
    "capturedAt": "2026-09-20T23:46:38.580Z",
    "elapsedMs": 161.5827500000014,
    "successfulAttemptElapsedMs": 158.72870800000965,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0.08,
            "subject:0": 0.03,
            "body:1": 0.36,
            "body:3": 0.02,
            "body:2": 0,
            "body:0": 0.05,
            "NONE": 0.44,
            "subject:2": 0.02
          },
          "confidence": 0.36
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:1": 0,
            "subject:0": 0.02,
            "body:1": 0.01,
            "body:3": 0.02,
            "body:2": 0.01,
            "subject:2": 0,
            "NONE": 0.06,
            "body:0": 0.88
          },
          "confidence": 0.86
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0.04,
            "subject:0": 0,
            "body:1": 0.01,
            "body:3": 0.04,
            "body:2": 0.01,
            "body:0": 0,
            "NONE": 0.9,
            "subject:2": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 1962,
        "output_tokens": 277
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 321.97883300000103,
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
    "seq": 2437,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-496",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:38.260Z",
    "offsetMs": 2.039374999993015
  },
  {
    "seq": 2438,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-496",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:38.416Z",
    "offsetMs": 158.0307080000057,
    "elapsedMs": 155.22858300001826,
    "outcome": "success"
  },
  {
    "seq": 2439,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-496",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:38.420Z",
    "offsetMs": 162.47500000000582
  },
  {
    "seq": 2440,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-496",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:38.580Z",
    "offsetMs": 321.85745799998404,
    "elapsedMs": 158.72870800000965,
    "outcome": "success"
  },
  {
    "seq": 2441,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-496",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:38.580Z",
    "offsetMs": 322.0080409999937,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d5d23644773693b367e996ee806b89bfd315f2a9e0a0bb8078bd4677cb74a465";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2438},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2440},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2441}} as const;
export const projectionSha256 = "b19befb3c3a238136019707d8e3155d85942a8c15d5b67c3d2fe830a3ea3baed";
