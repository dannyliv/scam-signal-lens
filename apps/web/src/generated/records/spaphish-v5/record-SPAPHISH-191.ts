import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-191",
  "inputSha256": "4929d5690c97ca9f0c6a9f2f2ace7066782e21153965b4cba1c35137b3d7c313",
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
    "requestSha256": "ccd54265b1399249a6a55d9db8df12655f49b94e234e03ceaf66cda314d9b570",
    "capturedAt": "2026-09-20T23:44:53.151Z",
    "elapsedMs": 250.46474999999919,
    "successfulAttemptElapsedMs": 248.68170900000405,
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
          "noul": 0.17
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
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.6,
            "no_sensitive_action": 0.39,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 3576,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "322ebeb8f3f61ea7e5d6b74cd2615917ed79b5e1c6c609827300f30ef5b95a8e",
    "capturedAt": "2026-09-20T23:44:53.312Z",
    "elapsedMs": 158.96745799999917,
    "successfulAttemptElapsedMs": 157.72262500000215,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0,
            "body:3": 0.99,
            "body:2": 0,
            "subject:1": 0,
            "body:4": 0,
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0.01
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.01,
            "body:3": 0,
            "body:2": 0,
            "subject:1": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:0": 0.96,
            "NONE": 0.03
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 1403,
        "output_tokens": 187
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 411.10566599999584,
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
    "seq": 932,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-191",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:52.902Z",
    "offsetMs": 1.1867079999938142
  },
  {
    "seq": 933,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-191",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:53.151Z",
    "offsetMs": 250.46679099999892,
    "elapsedMs": 248.68170900000405,
    "outcome": "success"
  },
  {
    "seq": 934,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-191",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:53.153Z",
    "offsetMs": 252.6793749999997
  },
  {
    "seq": 935,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-191",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:53.311Z",
    "offsetMs": 410.8476249999949,
    "elapsedMs": 157.72262500000215,
    "outcome": "success"
  },
  {
    "seq": 936,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-191",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:53.312Z",
    "offsetMs": 411.1612079999977,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "aa28c53602de3dc51242f9e619e8789c35485a6e396f7251b09bfe9f76628f52";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":933},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":935},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":936}} as const;
export const projectionSha256 = "e39ec27ec3b0d929215319092918a3dafcdde1406c0e5167a841c8efad91e66b";
