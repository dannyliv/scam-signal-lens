import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-468",
  "inputSha256": "79c1fb80b3047a0ee32ec9c9844a4d8fd686552f520e8951f274ffd385da9c23",
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
      "end": 29,
      "text": "Recomendaciones nutricionales"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 14,
      "text": "Buenas tardes\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 14,
      "end": 15,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 15,
      "end": 75,
      "text": "Le envío información relacionada a su alimentación, saludos\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 75,
      "end": 76,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 76,
      "end": 85,
      "text": "M. en A. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 85,
      "end": 168,
      "text": "Sofía Ríos Durán Departamento de Nutrición Hospital de Especialidades Central S.C. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 168,
      "end": 183,
      "text": "Ext 2104 y 2105"
    }
  ],
  "passA": {
    "requestSha256": "7940a2c1f16a8afbcb6d5d1cc29245e56f12b679b083faa8bbde51c9cc04e0a9",
    "capturedAt": "2026-09-20T23:46:29.023Z",
    "elapsedMs": 176.2989579999994,
    "successfulAttemptElapsedMs": 173.94620800000848,
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
          "noul": 0.02
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
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
          "noul": 0.14
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "independently_established": 0,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3489,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "27b7adf4d22e57d452ee2e094d15c7793577c314ed467fa337a25bf9047b7dc7",
    "capturedAt": "2026-09-20T23:46:29.168Z",
    "elapsedMs": 143.12029099999927,
    "successfulAttemptElapsedMs": 140.5501669999794,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:5": 0.97,
            "subject:0": 0,
            "body:0": 0,
            "body:2": 0.01,
            "body:1": 0,
            "body:3": 0,
            "body:6": 0,
            "NONE": 0.02,
            "body:4": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 764,
        "output_tokens": 104
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 321.6720839999907,
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
    "seq": 2299,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-468",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:28.848Z",
    "offsetMs": 1.8184999999939464
  },
  {
    "seq": 2300,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-468",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:29.022Z",
    "offsetMs": 176.29904199999874,
    "elapsedMs": 173.94620800000848,
    "outcome": "success"
  },
  {
    "seq": 2301,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-468",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:29.026Z",
    "offsetMs": 180.08779199997662
  },
  {
    "seq": 2302,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-468",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:29.167Z",
    "offsetMs": 321.39124999998603,
    "elapsedMs": 140.5501669999794,
    "outcome": "success"
  },
  {
    "seq": 2303,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-468",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:29.168Z",
    "offsetMs": 321.75,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7063ffc6c00b86b75fd2217c0326c004e27a71b9915b20bcfb8948d45ef01f4e";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2300},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2302},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2303}} as const;
export const projectionSha256 = "86924a76e97c4059eab97e6a580ef43597616e949afef5f7fc4b9077c6921466";
