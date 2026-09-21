import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-309",
  "inputSha256": "ad90dbf938307cb4b8b97d3a544c79a0a5e6ccbcee4542e0902fc169fe9bea2d",
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
      "text": "Este Regalo MetLife No Durará"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 8,
      "text": "MetLife\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 8,
      "end": 51,
      "text": "¡Reclame su kit de monitoreo de salud hoy!\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 51,
      "end": 52,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 52,
      "end": 126,
      "text": "Has sido seleccionado para recibir un Kit de Monitoreo de Salud gratuito.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 126,
      "end": 180,
      "text": "Completa nuestra breve encuesta para obtener el tuyo.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 180,
      "end": 181,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 181,
      "end": 232,
      "text": "Las recompensas son limitadas: ¡no te las pierdas!\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 232,
      "end": 233,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 233,
      "end": 253,
      "text": "Realice la encuesta\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 253,
      "end": 254,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 254,
      "end": 344,
      "text": "Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí."
    }
  ],
  "passA": {
    "requestSha256": "f608d8c954d4e9b044edf4924b0d12bfe23ade6acc88982fe80b3581bfba6a2d",
    "capturedAt": "2026-09-20T23:45:35.761Z",
    "elapsedMs": 219.7672079999902,
    "successfulAttemptElapsedMs": 217.8293330000015,
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
          "noul": 0.29
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
          "noul": 0.81
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.13
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
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
            "independently_established": 0,
            "sender_supplied": 0.64,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.34
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 3521,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c28f79f94556ec619a953085729dc17abe3eba7d7b5a33da09f998ba1fb1ce62",
    "capturedAt": "2026-09-20T23:45:35.915Z",
    "elapsedMs": 151.0031250000029,
    "successfulAttemptElapsedMs": 148.98958299998776,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:7": 0,
            "NONE": 0.83,
            "body:3": 0,
            "body:1": 0,
            "body:9": 0,
            "body:4": 0.1,
            "body:8": 0.07,
            "body:5": 0,
            "subject:0": 0,
            "body:10": 0,
            "body:0": 0,
            "body:6": 0
          },
          "confidence": 0.81
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "NONE": 0,
            "body:7": 0,
            "body:2": 0,
            "body:1": 0.13,
            "body:3": 0.01,
            "body:9": 0,
            "body:4": 0,
            "body:8": 0,
            "body:5": 0,
            "subject:0": 0.24000000000000002,
            "body:10": 0,
            "body:0": 0,
            "body:6": 0.62
          },
          "confidence": 0.58
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "body:7": 0,
            "NONE": 0.06,
            "body:1": 0.02,
            "body:3": 0.14,
            "body:9": 0,
            "body:4": 0.01,
            "body:8": 0.01,
            "body:5": 0,
            "body:0": 0.74,
            "body:10": 0,
            "subject:0": 0.02,
            "body:6": 0
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 1865,
        "output_tokens": 414
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 373.90870800000266,
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
    "seq": 1512,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-309",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:35.542Z",
    "offsetMs": 1.318583000000217
  },
  {
    "seq": 1513,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-309",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:35.761Z",
    "offsetMs": 219.765625,
    "elapsedMs": 217.8293330000015,
    "outcome": "success"
  },
  {
    "seq": 1514,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-309",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:35.765Z",
    "offsetMs": 223.96095799999603
  },
  {
    "seq": 1515,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-309",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:35.915Z",
    "offsetMs": 373.6160830000008,
    "elapsedMs": 148.98958299998776,
    "outcome": "success"
  },
  {
    "seq": 1516,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-309",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:35.915Z",
    "offsetMs": 373.97229200000584,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c170e530457d2b12c0936d92bf80c23822f35e5663308ddabe764b8c67eae950";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1513},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1515},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1516}} as const;
export const projectionSha256 = "622e7c8001e6e2440eeed102b8a2cdbbcc104b3d3eb5f2bbeb5ae4aa03d40e85";
