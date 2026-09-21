import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-045",
  "inputSha256": "e06945296e4c4b532f9ba0b7371f834bed5b2c3a0ab70d3994eb6f197adb2561",
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
      "end": 7,
      "text": "Plática"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 46,
      "text": "Te envío adjunto el Reconocimiento escaneado. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 46,
      "end": 203,
      "text": "La conferencia ya está visible en https://youtu.be/SYNTHETIC-VIDEO-ID https://youtu.be/SYNTHETIC-VIDEO-ID , además de la página de red social de la escuela.\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 203,
      "end": 204,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 204,
      "end": 222,
      "text": "De nuevo GRACIAS!!"
    }
  ],
  "passA": {
    "requestSha256": "efa22964108c7f6969c044bc23e15d75c5df152ebaf7d6c364b04118945dbafa",
    "capturedAt": "2026-09-20T23:44:05.522Z",
    "elapsedMs": 150.10075000000143,
    "successfulAttemptElapsedMs": 148.82916699999987,
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.21
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.1
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 1,
            "educational_or_quoted": 0,
            "active_request": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.99
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3492,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "6252cfe3cb5eeea478712bd3e629261e9c27b02ccbc3457bffd4a77e8da0cc00",
    "capturedAt": "2026-09-20T23:44:05.643Z",
    "elapsedMs": 118.32708300000013,
    "successfulAttemptElapsedMs": 116.77741700000115,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.71,
            "body:1": 0.27,
            "body:3": 0,
            "body:2": 0,
            "body:0": 0.02,
            "subject:0": 0
          },
          "confidence": 0.65
        }
      },
      "usage": {
        "input_tokens": 727,
        "output_tokens": 75
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 270.72691699999996,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 217,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-045",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:05.373Z",
    "offsetMs": 0.7698749999999563
  },
  {
    "seq": 218,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-045",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:05.522Z",
    "offsetMs": 150.1025840000002,
    "elapsedMs": 148.82916699999987,
    "outcome": "success"
  },
  {
    "seq": 219,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-045",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:05.525Z",
    "offsetMs": 153.12616700000035
  },
  {
    "seq": 220,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-045",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:05.643Z",
    "offsetMs": 270.5794590000005,
    "elapsedMs": 116.77741700000115,
    "outcome": "success"
  },
  {
    "seq": 221,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-045",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:05.643Z",
    "offsetMs": 270.7613340000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "206e36201c9838dbf437353c107422014402a321f734c7811b2f55a2340c0b99";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":218},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":220},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":221}} as const;
export const projectionSha256 = "ae6562968ad19cd2002913f8e469bcd7aa634e32d6f6c9d73e101acedee493a2";
