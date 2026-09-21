import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-472",
  "inputSha256": "9ae16ded7ab7bbee22a417dbc1381a36468977ef7f59571665daf631137b17e1",
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
      "end": 54,
      "text": "Su paquete está esperando su ID de confirmación 120586"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 14,
      "text": "CENTRO DE DHL\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 14,
      "end": 25,
      "text": "10-24-2023\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 25,
      "end": 26,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 26,
      "end": 57,
      "text": "Estimado María Fernanda López,\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 57,
      "end": 58,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 58,
      "end": 232,
      "text": "Esperamos que este correo electrónico le llegue bien., tenga en cuenta que su envío con seguimiento número a continuación necesitará más información para Despacho de aduana. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 232,
      "end": 288,
      "text": "Consulte el archivo adjunto para obtener más detalles..\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 288,
      "end": 289,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 289,
      "end": 291,
      "text": "! "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 291,
      "end": 320,
      "text": "Planificado en el Centro DHL\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 320,
      "end": 339,
      "text": "➡ Rastrea tu orden\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 339,
      "end": 354,
      "text": "➡ 654882119430\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 354,
      "end": 371,
      "text": "Rastrea tu orden\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 371,
      "end": 372,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 372,
      "end": 400,
      "text": "Le agradecemos su atención.\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 400,
      "end": 428,
      "text": "Cordial atención al cliente\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 428,
      "end": 442,
      "text": "Empezar ahora\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 442,
      "end": 443,
      "text": "\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 443,
      "end": 461,
      "text": "Unsubscribe here.\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 461,
      "end": 509,
      "text": "4820 Lakeshore Ave, #5124, Clearwater, FL, 33755"
    }
  ],
  "passA": {
    "requestSha256": "3988c1624f1d2e9f0ffd315a3d4302865c50d730c8ee215e40aa0b78b1f46bd9",
    "capturedAt": "2026-09-20T23:46:30.225Z",
    "elapsedMs": 207.23029200002202,
    "successfulAttemptElapsedMs": 204.81024999998044,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.12
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.71
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.08
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.28
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.25
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0.01,
            "active_request": 0.99
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.23,
            "mixed_or_unknown": 0.03,
            "independently_established": 0,
            "sender_supplied": 0.74
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 3606,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "6c22e708bbc2a01a0bfa8a171101756a2ee0d33f2a1dcb641c5f5bae814d08e5",
    "capturedAt": "2026-09-21T00:57:34.196Z",
    "elapsedMs": 109.23304199999984,
    "successfulAttemptElapsedMs": 106.16570800000045,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "subject:0": 0.18,
            "body:11": 0,
            "body:15": 0,
            "body:10": 0,
            "body:14": 0,
            "NONE": 0.22,
            "body:1": 0,
            "body:9": 0,
            "body:16": 0.02,
            "body:18": 0,
            "body:4": 0,
            "body:6": 0.24000000000000002,
            "body:0": 0,
            "body:2": 0,
            "body:12": 0,
            "body:17": 0,
            "body:7": 0,
            "body:8": 0,
            "body:3": 0,
            "body:13": 0,
            "body:5": 0.34,
            "body:19": 0
          },
          "confidence": 0.3
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:16",
          "probabilities": {
            "subject:0": 0.12,
            "body:11": 0,
            "body:15": 0,
            "body:10": 0,
            "body:14": 0,
            "body:4": 0,
            "body:1": 0,
            "body:9": 0,
            "body:16": 0.44,
            "body:18": 0,
            "body:6": 0.01,
            "NONE": 0.32,
            "body:17": 0,
            "body:12": 0,
            "body:2": 0,
            "body:0": 0,
            "body:7": 0,
            "body:8": 0.01,
            "body:3": 0,
            "body:13": 0,
            "body:5": 0.1,
            "body:19": 0
          },
          "confidence": 0.4
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:10": 0,
            "body:15": 0.1,
            "body:11": 0,
            "body:14": 0,
            "NONE": 0.01,
            "body:1": 0,
            "body:9": 0.04,
            "body:16": 0,
            "body:18": 0,
            "body:4": 0,
            "body:6": 0,
            "body:17": 0,
            "body:0": 0.72,
            "body:12": 0,
            "body:2": 0,
            "body:7": 0,
            "body:8": 0,
            "body:3": 0,
            "body:13": 0,
            "body:5": 0.13,
            "body:19": 0
          },
          "confidence": 0.69
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:19": 0,
            "body:10": 0.01,
            "body:15": 0,
            "body:14": 0,
            "body:11": 0,
            "body:4": 0,
            "body:1": 0,
            "body:9": 0,
            "body:16": 0.04,
            "body:18": 0,
            "body:6": 0.05,
            "NONE": 0.9,
            "body:2": 0,
            "body:0": 0,
            "body:12": 0,
            "body:17": 0,
            "body:7": 0,
            "body:8": 0,
            "body:3": 0,
            "body:13": 0,
            "body:5": 0,
            "subject:0": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 3304,
        "output_tokens": 915
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 476.56116599999586,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
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
        "status": "none_selected",
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
    "seq": 2318,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-472",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:30.019Z",
    "offsetMs": 1.9210000000020955
  },
  {
    "seq": 2319,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-472",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:30.224Z",
    "offsetMs": 207.2309580000001,
    "elapsedMs": 204.81024999998044,
    "outcome": "success"
  },
  {
    "seq": 2320,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-472",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:30.229Z",
    "offsetMs": 211.74525000000722
  },
  {
    "seq": 2321,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-472",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:30.383Z",
    "offsetMs": 365.7041250000184,
    "elapsedMs": 153.17124999998487,
    "outcome": "success"
  },
  {
    "seq": 2322,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-472",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:30.383Z",
    "offsetMs": 365.8254580000066,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2815,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-472",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:34.089Z",
    "offsetMs": 3.5198339999988093
  },
  {
    "seq": 2816,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-472",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:34.196Z",
    "offsetMs": 110.40095899999869,
    "elapsedMs": 106.16570800000045,
    "outcome": "success"
  },
  {
    "seq": 2817,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-472",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:34.197Z",
    "offsetMs": 110.68279199999961,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fbf801013e32895e5b05a99400afbe9d23a6e9f116b322d537166710e04715f6";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2319},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2816},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2817}} as const;
export const projectionSha256 = "423c30d55c4f2c475a0192ceca56aa029995d2b7522b20d5cfdffa691faa7315";
