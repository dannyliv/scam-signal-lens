import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-429",
  "inputSha256": "2769bfffbcef6512a44bab4bf4b245a16b88e233838d5e53bbfabc97b23232cf",
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
      "end": 21,
      "text": "Otro correo malicioso"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 62,
      "text": "¡Este mensaje fue enviado por alguien ajeno a la Universidad! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 62,
      "end": 485,
      "text": "**************************************************************************** Enviado desde Correo para Windows -------------------------------------------------------------------------------- De: Equipo de Cuentas Microsoft Enviado: Wednesday, July 5, 2025 9:41:09 AM Para: ricardo.lopez@dominioficticio.net Asunto: Notificacion de Seguridad Cuenta Microsoft Riesgo de Bloqueo Preventivo ricardo.lopez@dominioficticio.net. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 485,
      "end": 680,
      "text": "Detalles de tu cuenta Pais o region: México Direccion IP: 999.888.777.666 Fecha: 05/07/2025 Plataforma: Windows Explorador: Google Activar cuenta actual Gracias, El equipo de cuentas de Microsoft"
    }
  ],
  "passA": {
    "requestSha256": "4a0307060d5d710f0cb183195744b9067466ca4e96d2ae5c3f163d173b409ff8",
    "capturedAt": "2026-09-20T23:46:16.064Z",
    "elapsedMs": 171.28458300000057,
    "successfulAttemptElapsedMs": 168.79879199998686,
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
          "noul": 0.08
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.81
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.23
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.69,
            "educational_or_quoted": 0.01,
            "informational": 0.29,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.59
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.28,
            "independently_established": 0,
            "no_sensitive_action": 0.67,
            "mixed_or_unknown": 0.05
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 3592,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "81d6c1405d593a47509c455fb570c9380bd89583cdf761a3fe143d0d3ce59d29",
    "capturedAt": "2026-09-20T23:46:16.238Z",
    "elapsedMs": 171.54416700001457,
    "successfulAttemptElapsedMs": 168.8897500000021,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.58,
            "body:0": 0,
            "subject:0": 0.01,
            "body:1": 0.39,
            "NONE": 0.02
          },
          "confidence": 0.47
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.19,
            "body:0": 0.01,
            "subject:0": 0,
            "body:1": 0.78,
            "NONE": 0.02
          },
          "confidence": 0.74
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.15,
            "body:0": 0.01,
            "subject:0": 0,
            "body:1": 0,
            "NONE": 0.84
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 1824,
        "output_tokens": 198
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 345.0835000000079,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
      "request_route_low_confidence"
    ],
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
    "seq": 2105,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-429",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:15.895Z",
    "offsetMs": 1.9567920000117738
  },
  {
    "seq": 2106,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-429",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:16.064Z",
    "offsetMs": 171.28537500000675,
    "elapsedMs": 168.79879199998686,
    "outcome": "success"
  },
  {
    "seq": 2107,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-429",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:16.068Z",
    "offsetMs": 175.22720900000422
  },
  {
    "seq": 2108,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-429",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:16.237Z",
    "offsetMs": 344.810541999992,
    "elapsedMs": 168.8897500000021,
    "outcome": "success"
  },
  {
    "seq": 2109,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-429",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:16.238Z",
    "offsetMs": 345.1499999999942,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a96a00212f34c19f2203e121c84785bd00c84e5a5e875f6d70a94f26c9f76648";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2106},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2108},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2109}} as const;
export const projectionSha256 = "441c10b4768dba00121a5660af96087e90c4fc4e119756708efa5daa1a71faae";
