import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-429",
  "inputSha256": "2769bfffbcef6512a44bab4bf4b245a16b88e233838d5e53bbfabc97b23232cf",
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
    "requestSha256": "7db6fc637557b7fb51696aaddcf7275cc35a8e3317327bcef0e36127d73f1f43",
    "capturedAt": "2026-09-22T03:56:44.056Z",
    "elapsedMs": 628.6352879999904,
    "successfulAttemptElapsedMs": 626.8535319999792,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.79
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.28
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.27,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0.02,
            "active_request": 0.7
          },
          "confidence": 0.6
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.28,
            "mixed_or_unknown": 0.04,
            "independently_established": 0,
            "no_sensitive_action": 0.68
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 5042,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "5db1f90486cd1f69d2c7061731a5d5b22664d5f0f0ec2cac7d2a1bf08be788d7",
    "capturedAt": "2026-09-22T03:56:44.554Z",
    "elapsedMs": 496.66114699997706,
    "successfulAttemptElapsedMs": 494.53237200004514,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.6799999999999999,
            "body:0": 0,
            "body:1": 0.29,
            "subject:0": 0.01,
            "NONE": 0.02
          },
          "confidence": 0.61
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.36,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.62,
            "NONE": 0.02
          },
          "confidence": 0.51
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.36,
            "body:0": 0.01,
            "body:1": 0,
            "subject:0": 0,
            "NONE": 0.63
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 2132,
        "output_tokens": 198
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1127.4266040000366,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
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
    "seq": 2104,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-429",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:43.429Z",
    "offsetMs": 1.467201000021305
  },
  {
    "seq": 2105,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-429",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:44.056Z",
    "offsetMs": 628.6365850000293,
    "elapsedMs": 626.8535319999792,
    "outcome": "success"
  },
  {
    "seq": 2106,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-429",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:44.059Z",
    "offsetMs": 632.0560160000459
  },
  {
    "seq": 2107,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-429",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:44.554Z",
    "offsetMs": 1127.2185180000379,
    "elapsedMs": 494.53237200004514,
    "outcome": "success"
  },
  {
    "seq": 2108,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-429",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:44.555Z",
    "offsetMs": 1127.470221000025,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7dc2ac5bb12d07ae0b09b2e006c58780a7feee5bba9d05ed27fe10c92e8786ec";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2105},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2107},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2108}} as const;
export const projectionSha256 = "4f6a0f38e3fd428deaac3083d1184ba4e35b0f00aad8733e9482ba8f1eecc64e";
