import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-097",
  "inputSha256": "cbef0416b74b6ba6b5d499065ebb8d082e9768fbc9ea220bf1b64155f92fcba7",
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
      "end": 52,
      "text": "Gestionar en línea licencias de MATLAB y Mathematica"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 21,
      "text": "Hola a Todas y Todos\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 21,
      "end": 22,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 22,
      "end": 92,
      "text": "Por medio del presente correo, les hago llegar instrucciones de como \n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 92,
      "end": 162,
      "text": "gestionar licencias de MATLAB y Mathematica, ahora que están en casa.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 162,
      "end": 163,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 163,
      "end": 213,
      "text": "Cualquier duda pueden escribirle a Lucia Crisanto\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 213,
      "end": 245,
      "text": "email: lucia.crisanto@MyOwnp.mx\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 245,
      "end": 246,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 246,
      "end": 247,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 247,
      "end": 253,
      "text": "Atte.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 253,
      "end": 276,
      "text": "Miguel Martínez Arroyo\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 276,
      "end": 280,
      "text": "AGC\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 280,
      "end": 285,
      "text": "MyOwn"
    }
  ],
  "passA": {
    "requestSha256": "0adde2dd197cd1e4f623e46ca8c558d5d4f5087b1db6087c5d94fafc76204a71",
    "capturedAt": "2026-09-22T03:50:07.792Z",
    "elapsedMs": 595.3044119999977,
    "successfulAttemptElapsedMs": 594.1906159999926,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.12
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.85,
            "active_request": 0.15,
            "educational_or_quoted": 0
          },
          "confidence": 0.79
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.76,
            "sender_supplied": 0.24,
            "independently_established": 0
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 4969,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "a70b36a2b9c7a89c989fa9e814a7badde0b2b9375073b895b7ca2d063cc282d6",
    "capturedAt": "2026-09-22T03:50:08.373Z",
    "elapsedMs": 579.9903150000027,
    "successfulAttemptElapsedMs": 579.299594000011,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "body:7": 0,
            "subject:0": 0,
            "body:9": 0.01,
            "body:1": 0,
            "body:10": 0.07,
            "body:5": 0.05,
            "body:0": 0,
            "body:11": 0.73,
            "body:6": 0,
            "body:3": 0,
            "NONE": 0.02,
            "body:2": 0.02,
            "body:12": 0.09,
            "body:4": 0,
            "body:8": 0.01
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 1003,
        "output_tokens": 162
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1177.0065060000052,
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
        "segmentId": "body:11"
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
    "seq": 469,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-097",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:07.197Z",
    "offsetMs": 0.7380110000085551
  },
  {
    "seq": 470,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-097",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:07.791Z",
    "offsetMs": 595.3055129999993,
    "elapsedMs": 594.1906159999926,
    "outcome": "success"
  },
  {
    "seq": 471,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-097",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:07.793Z",
    "offsetMs": 597.2831930000102
  },
  {
    "seq": 472,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-097",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:08.373Z",
    "offsetMs": 1176.8220940000028,
    "elapsedMs": 579.299594000011,
    "outcome": "success"
  },
  {
    "seq": 473,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-097",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:08.373Z",
    "offsetMs": 1177.047821,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "13dbcf1dae72893a6bfbcf2b9df9bae9b576c4e40e1a34c7aca55e412875e0b5";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":470},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":472},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":473}} as const;
export const projectionSha256 = "ef59a2c589be2853f148e8d2a3dde6c50cf73c47dff7e4a8fc62128303cb2616";
