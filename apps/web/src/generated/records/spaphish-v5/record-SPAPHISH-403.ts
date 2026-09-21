import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-403",
  "inputSha256": "a5da9586db8a86e0fc8fda255d38b1f6e56e5ece4408e26e8eb6e2b7f06de3d6",
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
      "text": "Fwd: Reactivar Correo"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 225,
      "text": "Estimado Cliente, Su correo electrónico actualmente se encuentra en riesgo de bloqueo permanente de nuestros servicios afiliados, Es por ello que le pediremos comprobar su identidad: alerta-outlook.live.com.hstn.me/ Gracias. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 225,
      "end": 276,
      "text": "El equipo de cuenta de Microsoft *© 2023 Microsoft*"
    }
  ],
  "passA": {
    "requestSha256": "9ed6eee300ad6d00bb034e12ca5bfa405dd66135c2f5399116a83586245b42fb",
    "capturedAt": "2026-09-20T23:46:07.400Z",
    "elapsedMs": 167.3807079999824,
    "successfulAttemptElapsedMs": 165.10604199999943,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.65
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.71
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.92
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.43
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
          "noul": 0.01
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
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0,
            "sender_supplied": 1,
            "independently_established": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3495,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c0c2cd7b240bcae82a361354fc86c316251dbcc632eb4dadad84b76cfd0a594d",
    "capturedAt": "2026-09-20T23:46:07.570Z",
    "elapsedMs": 167.21199999999953,
    "successfulAttemptElapsedMs": 165.0052920000162,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.18,
            "body:1": 0,
            "body:0": 0.8200000000000001
          },
          "confidence": 0.75
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.19,
            "body:1": 0,
            "body:0": 0.81
          },
          "confidence": 0.74
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:1": 0,
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.01,
            "body:1": 0.74,
            "body:0": 0.25
          },
          "confidence": 0.65
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.84,
            "body:1": 0,
            "body:0": 0.16
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 2113,
        "output_tokens": 283
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 336.8824999999779,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:0"
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
        "segmentId": "body:0"
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
    "seq": 1976,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-403",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:07.234Z",
    "offsetMs": 1.6644999999844003
  },
  {
    "seq": 1977,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-403",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:07.400Z",
    "offsetMs": 167.3808329999738,
    "elapsedMs": 165.10604199999943,
    "outcome": "success"
  },
  {
    "seq": 1978,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-403",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:07.404Z",
    "offsetMs": 171.14295799998217
  },
  {
    "seq": 1979,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-403",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:07.569Z",
    "offsetMs": 336.71041599998716,
    "elapsedMs": 165.0052920000162,
    "outcome": "success"
  },
  {
    "seq": 1980,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-403",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:07.570Z",
    "offsetMs": 336.9214159999974,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "15e233b237a295cde3cd2f56e9441ce0a3d0b449c82a48685fb9bfe650d9806d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1977},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1979},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1980}} as const;
export const projectionSha256 = "42323a12cf226fed97caab4c675828f96039e1b149bb4bac42e3de4b83314176";
