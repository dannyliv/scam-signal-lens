import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-123",
  "inputSha256": "475ac9dcaf7caceca517bc7eff24864cf9527d673b2a595b3bba7f1e841461e1",
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
      "end": 58,
      "text": "Ezequiela Miguelina! - Has ganado una Lancôme Beauty Box🎁"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 58,
      "text": "Solo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 98,
      "text": "DRUNI Hoy El Ganador es Ricardo López ! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 98,
      "end": 159,
      "text": "las últimas tendencias en belleza ¡HAS SIDO SELECCIONADO(A)! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 159,
      "end": 234,
      "text": "Para recibir tu regalo: Lancôme Beauty Box Reclama tu regalo ¡Felicidades! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 234,
      "end": 327,
      "text": "Has sido seleccionado(a) para participar en nuestro programa de fidelidad de forma GRATUITA. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 327,
      "end": 385,
      "text": "Solo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 385,
      "end": 499,
      "text": "© 2025 GRUPO DRUNI SAS Si ya no deseas recibir estos correos electrónicos, puedes darte de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "96b9614af542ce7f8273fbd70ea0072d2a086cc81984bf5b30f27e1f9fce0a76",
    "capturedAt": "2026-09-20T23:44:30.666Z",
    "elapsedMs": 173.24691699999676,
    "successfulAttemptElapsedMs": 171.65429200000654,
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
          "noul": 0.23
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.09
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.38
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.5
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.19
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.07
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
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
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.03,
            "no_sensitive_action": 0.5,
            "sender_supplied": 0.47,
            "independently_established": 0
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 3565,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "a8e4d53d5d3a08ab62509314ee7c8a8c3b0ea4bfab09a8e7d64f732a3d73926c",
    "capturedAt": "2026-09-20T23:44:30.820Z",
    "elapsedMs": 153.437417000001,
    "successfulAttemptElapsedMs": 152.3232080000016,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:3": 0.03,
            "body:0": 0,
            "body:1": 0,
            "body:6": 0,
            "NONE": 0.97,
            "body:5": 0
          },
          "confidence": 0.96
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.07,
            "subject:0": 0,
            "body:4": 0,
            "body:3": 0.09,
            "body:0": 0.32,
            "body:2": 0.01,
            "body:6": 0.01,
            "body:5": 0.13,
            "NONE": 0.37
          },
          "confidence": 0.3
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.03,
            "subject:0": 0.01,
            "body:2": 0,
            "body:3": 0.02,
            "body:0": 0,
            "body:4": 0.16,
            "body:6": 0.06,
            "body:5": 0,
            "NONE": 0.72
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 1897,
        "output_tokens": 299
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 328.16745800000353,
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
        "status": "none_selected",
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
        "status": "none_selected",
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
    "seq": 603,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-123",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:30.493Z",
    "offsetMs": 1.0134170000019367
  },
  {
    "seq": 604,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-123",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:30.665Z",
    "offsetMs": 173.24933299999975,
    "elapsedMs": 171.65429200000654,
    "outcome": "success"
  },
  {
    "seq": 605,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-123",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:30.667Z",
    "offsetMs": 175.0928750000021
  },
  {
    "seq": 606,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-123",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:30.820Z",
    "offsetMs": 327.90629199999967,
    "elapsedMs": 152.3232080000016,
    "outcome": "success"
  },
  {
    "seq": 607,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-123",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:30.820Z",
    "offsetMs": 328.22662500000297,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b4c0f7da030e46760bcdae5aa6a6aec947db7248829de0b7b987a30c78ae53d7";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":604},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":606},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":607}} as const;
export const projectionSha256 = "073e8735e07a65d14c9e95ad0f4e98866c4100f63d3ecfd44b8ad68b70d79f3a";
