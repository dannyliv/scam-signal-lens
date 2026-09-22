import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-086",
  "inputSha256": "f907d82a61641ccf76da05297426af6f1b3c2a80b9cd99b306ffe82e550aafb5",
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
    "requestSha256": "c1127efb014b94d9a41864c8a82eda029542a8000d48030b426c53a2a91fdb81",
    "capturedAt": "2026-09-22T03:49:55.057Z",
    "elapsedMs": 606.7495950000011,
    "successfulAttemptElapsedMs": 605.820796,
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
          "noul": 0.32
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
            "active_request": 0.96,
            "educational_or_quoted": 0,
            "informational": 0.04,
            "mixed_or_unclear": 0
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 4990,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "11f0bad1171f4c1bb4b05b349fbe0e135658639e5cca88e64541893e78c59b7d",
    "capturedAt": "2026-09-22T03:49:55.662Z",
    "elapsedMs": 603.3201219999901,
    "successfulAttemptElapsedMs": 602.4508470000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:6": 0.23,
            "body:8": 0,
            "body:3": 0,
            "NONE": 0.66,
            "body:7": 0,
            "body:2": 0,
            "body:1": 0,
            "body:0": 0,
            "body:4": 0.11
          },
          "confidence": 0.62
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:5": 0,
            "body:9": 0.97,
            "subject:0": 0,
            "body:6": 0.03,
            "body:8": 0,
            "body:3": 0,
            "body:7": 0,
            "NONE": 0,
            "body:2": 0,
            "body:4": 0,
            "body:0": 0,
            "body:1": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 1597,
        "output_tokens": 257
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1211.571655000007,
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
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-086",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:54.451Z",
    "offsetMs": 0.6452859999990324
  },
  {
    "seq": 420,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-086",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:55.057Z",
    "offsetMs": 606.7498519999936,
    "elapsedMs": 605.820796,
    "outcome": "success"
  },
  {
    "seq": 421,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-086",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:55.059Z",
    "offsetMs": 608.4679350000079
  },
  {
    "seq": 422,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-086",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:55.662Z",
    "offsetMs": 1211.342577000003,
    "elapsedMs": 602.4508470000001,
    "outcome": "success"
  },
  {
    "seq": 423,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-086",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:55.662Z",
    "offsetMs": 1211.6157269999967,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "30f63f7ad7de991961743683da704bf6c521e31ef85db11643813ecdf565a33f";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":420},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":422},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":423}} as const;
export const projectionSha256 = "09c0abf7a26e0244109054c889ca5bbca78e117b5b9726e3bb7e7574540f30b3";
