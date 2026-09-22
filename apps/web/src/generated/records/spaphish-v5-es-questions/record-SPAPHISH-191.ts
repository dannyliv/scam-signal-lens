import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-191",
  "inputSha256": "4929d5690c97ca9f0c6a9f2f2ace7066782e21153965b4cba1c35137b3d7c313",
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
      "end": 53,
      "text": "¡Reclama Tu Kit de Seguridad contra Incendios Ahora! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 53,
      "end": 90,
      "text": "Fri, 4 Jul 2025 02:45:01 +0000 ___429"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 118,
      "text": "Estimado cliente de MAPFRE, ¡Te ofrecemos la oportunidad única de recibir un nuevo Kit de Seguridad contra Incendios! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 118,
      "end": 206,
      "text": "Para reclamar, simplemente realiza esta breve encuesta sobre tu experiencia con MAPFRE. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 206,
      "end": 217,
      "text": "¡Atención! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 217,
      "end": 252,
      "text": "Esta oferta de encuesta vence hoy. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 252,
      "end": 383,
      "text": "Fri, 4 Jul 2025 02:45:01 +0000 INICIAR ENCUESTA Si ya se ha suscrito a este boletín y desea darse de baja, haga clic aquí. \"enlace\""
    }
  ],
  "passA": {
    "requestSha256": "22852fbf391dbe8b15047f55207f8ade19d4ccb091c3fb8376f9d20fcb77410c",
    "capturedAt": "2026-09-22T03:51:58.484Z",
    "elapsedMs": 590.6979780000111,
    "successfulAttemptElapsedMs": 589.7306669999962,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.2
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.91
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.04
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.56,
            "no_sensitive_action": 0.43,
            "independently_established": 0
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 5026,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "90cee8d63d599b4231ee4010bf29cfe6f32171b9b7d44e4f1298f2c02c14824a",
    "capturedAt": "2026-09-22T03:51:59.035Z",
    "elapsedMs": 549.73808499999,
    "successfulAttemptElapsedMs": 548.6047679999901,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0,
            "body:1": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:3": 1,
            "NONE": 0,
            "subject:1": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.02,
            "body:0": 0.9,
            "subject:0": 0,
            "body:4": 0,
            "body:3": 0,
            "NONE": 0.08,
            "subject:1": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 1605,
        "output_tokens": 187
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1142.4341809999896,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
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
        "status": "selected",
        "segmentId": "body:3"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 928,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-191",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:57.893Z",
    "offsetMs": 0.7157329999899957
  },
  {
    "seq": 929,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-191",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:58.483Z",
    "offsetMs": 590.6973920000019,
    "elapsedMs": 589.7306669999962,
    "outcome": "success"
  },
  {
    "seq": 930,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-191",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:58.486Z",
    "offsetMs": 593.1798030000064
  },
  {
    "seq": 931,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-191",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:59.035Z",
    "offsetMs": 1142.2116760000063,
    "elapsedMs": 548.6047679999901,
    "outcome": "success"
  },
  {
    "seq": 932,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-191",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:59.035Z",
    "offsetMs": 1142.4760569999926,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9ff93981d1bd4659493a6dd7e33f6e83af672be1fa0ab52b7683acef2bced15a";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":929},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":931},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":932}} as const;
export const projectionSha256 = "851ba79b8c2b8515c5bccf67ee6213f9c50118852f8f3a61815aed17ebdde736";
