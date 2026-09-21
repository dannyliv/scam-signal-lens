import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-086",
  "inputSha256": "f907d82a61641ccf76da05297426af6f1b3c2a80b9cd99b306ffe82e550aafb5",
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
      "end": 20,
      "text": "PRECAUCIÓN VEHICULAR"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 84,
      "text": "Apreciables Residentes Privada Del Valle Fraccionamiento Las Lomas P R E S E N T E.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 84,
      "end": 85,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 85,
      "end": 98,
      "text": "Buenos días!\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 98,
      "end": 99,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 99,
      "end": 201,
      "text": "El día de hoy a partir de las 10:30 hrs se trabajará con los andamios en las fachadas de casa 98 y 99\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 201,
      "end": 202,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 202,
      "end": 283,
      "text": "Por lo anterior solicitamos su apoyo para tener precaución vehicular en la zona.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 283,
      "end": 284,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 284,
      "end": 290,
      "text": "Atte. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 290,
      "end": 329,
      "text": "Diana Soto R y Mesa Directiva DEL VALLE"
    }
  ],
  "passA": {
    "requestSha256": "e092fb87612b434b0e9e74e31c499cc6f9a4cf518a34ec5ffaefb6b54834cbc1",
    "capturedAt": "2026-09-20T23:44:19.199Z",
    "elapsedMs": 179.53745800000252,
    "successfulAttemptElapsedMs": 177.80799999999726,
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
          "noul": 0.29
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
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
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.02,
            "active_request": 0.98,
            "educational_or_quoted": 0
          },
          "confidence": 0.97
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
        "input_tokens": 3540,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "74b5341634bd1c0511da731f43894000f258b729704d32f49a5bb8359ec71e72",
    "capturedAt": "2026-09-20T23:44:19.344Z",
    "elapsedMs": 143.3212080000012,
    "successfulAttemptElapsedMs": 141.8640830000004,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:9": 0,
            "body:7": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.46,
            "body:1": 0,
            "body:0": 0,
            "body:8": 0,
            "body:6": 0.47000000000000003,
            "body:4": 0.07,
            "body:5": 0
          },
          "confidence": 0.41
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "subject:0": 0,
            "body:7": 0,
            "body:2": 0,
            "NONE": 0,
            "body:1": 0,
            "body:3": 0,
            "body:9": 0.98,
            "body:0": 0,
            "body:8": 0,
            "body:6": 0.02,
            "body:4": 0,
            "body:5": 0
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 1395,
        "output_tokens": 259
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 325.07708300000013,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:9"
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
    "seq": 419,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-086",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:19.020Z",
    "offsetMs": 1.036166999998386
  },
  {
    "seq": 420,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-086",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:19.198Z",
    "offsetMs": 179.539249999998,
    "elapsedMs": 177.80799999999726,
    "outcome": "success"
  },
  {
    "seq": 421,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-086",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:19.201Z",
    "offsetMs": 182.2736670000013
  },
  {
    "seq": 422,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-086",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:19.344Z",
    "offsetMs": 324.73975000000064,
    "elapsedMs": 141.8640830000004,
    "outcome": "success"
  },
  {
    "seq": 423,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-086",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:19.344Z",
    "offsetMs": 325.14129200000025,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d9a8424aa6bd980f131cf5691fc37ef3dcb001ce687be239d38eb6d05a4a5967";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":420},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":422},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":423}} as const;
export const projectionSha256 = "8df740d840af2958a9f7f3cb7aeddda4b9b0372eba5e1c91fe81eaa14ebcce6a";
