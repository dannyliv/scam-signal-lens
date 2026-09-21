import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-149",
  "inputSha256": "96f4cdb56af21970e198fdf34d5b8cf1846cd20d4d0287999a18a3042197c647",
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
      "end": 10,
      "text": "Comunicado"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 29,
      "text": "Estimados Padres de Familia:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 29,
      "end": 30,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 30,
      "end": 364,
      "text": "Esperando que cada de ustedes y sus familias se encuentren con bien, ante la eventualidad del día de hoy, les comunicamos que se activaron los protocolos de protección civil para resguardar la integridad de todos los alumnos y el personal, compartiendo que todo se encuentra en orden en las instalaciones de los 4 niveles educativos.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 364,
      "end": 365,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 365,
      "end": 382,
      "text": "Atentamente Lic. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 382,
      "end": 413,
      "text": "Gabriel Sánchez Vargas Director"
    }
  ],
  "passA": {
    "requestSha256": "cc3425ad9e720158e19148d8d22c9e9b9eb64ad6a3b6edd09dd6c1ed38b39695",
    "capturedAt": "2026-09-20T23:44:38.229Z",
    "elapsedMs": 156.53416699999798,
    "successfulAttemptElapsedMs": 154.708083000005,
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
          "noul": 0.02
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0,
            "informational": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "sender_supplied": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3522,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "74a4ba53bd8672d6342493e9a45ff53aacdd6ca05d5f1637ab66e56ad264dfe4",
    "capturedAt": "2026-09-20T23:44:38.378Z",
    "elapsedMs": 147.05458300000464,
    "successfulAttemptElapsedMs": 145.37891700000182,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:1": 0,
            "subject:0": 0,
            "body:4": 0.06,
            "body:2": 0.07,
            "body:0": 0.12,
            "body:3": 0,
            "body:5": 0.73,
            "NONE": 0.02
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 814,
        "output_tokens": 95
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 305.80600000000413,
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
        "status": "selected",
        "segmentId": "body:5"
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 729,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-149",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:38.073Z",
    "offsetMs": 1.084167000000889
  },
  {
    "seq": 730,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-149",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:38.229Z",
    "offsetMs": 156.53625000000466,
    "elapsedMs": 154.708083000005,
    "outcome": "success"
  },
  {
    "seq": 731,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-149",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:38.232Z",
    "offsetMs": 159.62795900000492
  },
  {
    "seq": 732,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-149",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:38.378Z",
    "offsetMs": 305.6524170000048,
    "elapsedMs": 145.37891700000182,
    "outcome": "success"
  },
  {
    "seq": 733,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-149",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:38.378Z",
    "offsetMs": 305.84554200000275,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "89f72c371ea22c99b6b4c92e1be64978c900e4e52699848e908fb3c7affe1d57";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":730},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":732},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":733}} as const;
export const projectionSha256 = "2eca79eebf006e416a849bcc1b81341076d4af1509376414e745265f068d5e40";
