import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-112",
  "inputSha256": "897cf8aa3e3ae02291aa02ef39f27e000cca0551dcc7fb555650df406c1c68f8",
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
      "end": 50,
      "text": "Atención: Tiene un paquete que no ha sido recibido"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 38,
      "text": "Se ha producido un error en la entrega"
    }
  ],
  "passA": {
    "requestSha256": "d0c3ba9a89df05bda14d2c03c9b6526a51a82a6b33ae3a4cf08e9c09754f1fba",
    "capturedAt": "2026-09-20T23:44:27.418Z",
    "elapsedMs": 168.09683299999597,
    "successfulAttemptElapsedMs": 166.60966599999665,
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
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.12
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.27
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.1
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.02,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0,
            "informational": 0.97
          },
          "confidence": 0.96
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
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3444,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "44ccabeb79b89de007968cb3c232b9f8e3df0d2b504d73bb28380f0de682591b",
    "capturedAt": "2026-09-20T23:44:27.540Z",
    "elapsedMs": 119.23720899999898,
    "successfulAttemptElapsedMs": 117.5558330000058,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.03,
            "subject:0": 0.08,
            "NONE": 0.89
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 591,
        "output_tokens": 48
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 290.159249999997,
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
    "seq": 548,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-112",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:27.250Z",
    "offsetMs": 0.9222499999959837
  },
  {
    "seq": 549,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-112",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:27.418Z",
    "offsetMs": 168.09775000000081,
    "elapsedMs": 166.60966599999665,
    "outcome": "success"
  },
  {
    "seq": 550,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-112",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:27.421Z",
    "offsetMs": 171.66158300000097
  },
  {
    "seq": 551,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-112",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:27.539Z",
    "offsetMs": 289.90254099999584,
    "elapsedMs": 117.5558330000058,
    "outcome": "success"
  },
  {
    "seq": 552,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-112",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:27.540Z",
    "offsetMs": 290.2198750000025,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6798b73fecf36cfb2b714e635569e540a7381a6e7c51fa1255567d19280f22f8";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":549},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":551},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":552}} as const;
export const projectionSha256 = "fbbab9443a2f4056cfa31771eb7d56e76abc2676af1e945a5deae21048dd9e3b";
