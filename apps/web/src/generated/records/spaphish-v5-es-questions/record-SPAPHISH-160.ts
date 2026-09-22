import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-160",
  "inputSha256": "85015f60001744f9a58abd8d454c00895a23aba8b52c5a6a5c7360e28372ef26",
  "questionBundleSha256": "9631a5b623f8c05b491dc5a5f67ab9b62e5b1898446a722339eaa0c16a40af8b",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "42e51b1f7b8706dae7188d0d3fa8c6ac83b855b21f393196bd63bc16d4b91d93",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "subject:0",
      "source": "subject",
      "start": 0,
      "end": 20,
      "text": "Calificación Infotec"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 72,
      "text": "Buen tarde Dr.Genovevo Sanchez soy Isidro Zavaleta Ochoa estudiante MSE\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 72,
      "end": 146,
      "text": "Infotec revisando las calificaciones que compatio veo que mi calificación\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 146,
      "end": 214,
      "text": "es muy baja, igualmente tengo entendido que aun falta agregar otros\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 214,
      "end": 249,
      "text": "trabajos, podría ser esa la razón? "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 249,
      "end": 282,
      "text": "he realizado las entregas de mis\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 282,
      "end": 344,
      "text": "trabajos a destiempo, mas sin embargo me preguntaba si podría\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 344,
      "end": 415,
      "text": "considerármelos por favor o si existe la posibilidad de regularizar mi\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 415,
      "end": 427,
      "text": "situación .\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 427,
      "end": 428,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 428,
      "end": 436,
      "text": "Gracias\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 436,
      "end": 442,
      "text": "Atte.\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 442,
      "end": 464,
      "text": "Isidro Zavaleta Ochoa\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 464,
      "end": 479,
      "text": "Estudiante MSE\n"
    }
  ],
  "passA": {
    "requestSha256": "0f8534464bc1c3b5cf2a349ddd562765a012692fab669eed53c76941c1699e5b",
    "capturedAt": "2026-09-22T03:51:23.606Z",
    "elapsedMs": 612.7224179999903,
    "successfulAttemptElapsedMs": 611.7346430000034,
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
          "noul": 0.48
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
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5015,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "9dd1108683f9f3443287df23274f5bf261345250bea0ded72bbe7b6f5959bb81",
    "capturedAt": "2026-09-22T03:51:24.101Z",
    "elapsedMs": 493.524179,
    "successfulAttemptElapsedMs": 492.75104199998896,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:4": 0,
            "body:6": 0.02,
            "subject:0": 0.02,
            "body:2": 0,
            "body:12": 0.16,
            "body:11": 0,
            "body:10": 0,
            "body:0": 0.28,
            "body:8": 0,
            "NONE": 0.5,
            "body:1": 0.01,
            "body:7": 0,
            "body:5": 0.01,
            "body:3": 0
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 1093,
        "output_tokens": 159
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1107.7498970000015,
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
        "status": "low_confidence",
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
    "seq": 777,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-160",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:22.994Z",
    "offsetMs": 0.7376850000000559
  },
  {
    "seq": 778,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-160",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:23.606Z",
    "offsetMs": 612.7230109999946,
    "elapsedMs": 611.7346430000034,
    "outcome": "success"
  },
  {
    "seq": 779,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-160",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:23.607Z",
    "offsetMs": 614.5289059999923
  },
  {
    "seq": 780,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-160",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:24.100Z",
    "offsetMs": 1107.560427999997,
    "elapsedMs": 492.75104199998896,
    "outcome": "success"
  },
  {
    "seq": 781,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-160",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:24.101Z",
    "offsetMs": 1107.7900920000102,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9ec3efbcfc0823ae1789ae349da05ff202a172115d7f526db186b66b822d7ac1";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":778},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":780},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":781}} as const;
export const projectionSha256 = "b6846e470ccc459f529a13f5945f6fa5bad36c4df7b007677fc43eb2ee3a1462";
