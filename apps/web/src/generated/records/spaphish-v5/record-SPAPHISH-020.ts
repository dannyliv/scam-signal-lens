import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-020",
  "inputSha256": "b39da743e56e97a0571431303339fe268dab22c81497a6e903f78186043ec67e",
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
      "end": 34,
      "text": "Recomendaciones Nutricionales CMT "
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 65,
      "text": "Buen día le envío las recomendaciones respecto a la alimentación\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 65,
      "end": 66,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 66,
      "end": 75,
      "text": "M. en A. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 75,
      "end": 158,
      "text": "Sofía Ríos Durán Departamento de Nutrición Hospital de Especialidades Central S.C. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 158,
      "end": 173,
      "text": "Ext 2104 y 2105"
    }
  ],
  "passA": {
    "requestSha256": "a22f2e17291e51d000b2b5aeda5a00571d9d450d57cd8f148d61c3375b5d148c",
    "capturedAt": "2026-09-20T23:43:57.510Z",
    "elapsedMs": 133.69274999999925,
    "successfulAttemptElapsedMs": 132.51645800000006,
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
          "noul": 0.89
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
          "noul": 0.12
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 1,
            "mixed_or_unclear": 0,
            "active_request": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3491,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "a2f58817ccb2ad5022503acd2e7a8c28c66e55bcfb164d41f863efed947d0230",
    "capturedAt": "2026-09-20T23:43:57.654Z",
    "elapsedMs": 142.054083,
    "successfulAttemptElapsedMs": 140.2700420000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0.01,
            "NONE": 0.01,
            "body:4": 0,
            "body:3": 0.98,
            "body:0": 0,
            "body:1": 0,
            "subject:0": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 741,
        "output_tokens": 86
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 278.4509589999998,
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
        "segmentId": "body:3"
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
    "seq": 94,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-020",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:57.376Z",
    "offsetMs": 0.6978749999998399
  },
  {
    "seq": 95,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-020",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:57.509Z",
    "offsetMs": 133.69308399999954,
    "elapsedMs": 132.51645800000006,
    "outcome": "success"
  },
  {
    "seq": 96,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-020",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:57.513Z",
    "offsetMs": 136.99508400000013
  },
  {
    "seq": 97,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-020",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:57.654Z",
    "offsetMs": 278.11454200000026,
    "elapsedMs": 140.2700420000001,
    "outcome": "success"
  },
  {
    "seq": 98,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-020",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:57.654Z",
    "offsetMs": 278.52537500000017,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "69050817826ca853249a70b6b55088c05d5a69ad65852bb0448ccf6ae4ae2e2b";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":95},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":97},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":98}} as const;
export const projectionSha256 = "6e4af6eba3487e9d21e9d6487639c56dbcb5a09f54f54448d9d8c0dc64c5aa4e";
