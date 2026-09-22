import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-289",
  "inputSha256": "cf49bbb182e55237cc59d1b32904622e59ef93efbb651ba1538ce8b80ac3200e",
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
      "end": 30,
      "text": "Verifica tu correo electrónico"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 52,
      "text": "Estás a un paso de verificar tu correo electrónico. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 52,
      "end": 76,
      "text": "Este mensaje tiene una \n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 76,
      "end": 120,
      "text": "validez de 24 horas, así que no te demores.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 120,
      "end": 121,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 121,
      "end": 138,
      "text": "Hola, Guadalupe:\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 138,
      "end": 153,
      "text": "¡Ya casi está! "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 153,
      "end": 202,
      "text": "Verifica tu correo electrónico tocando el botón. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 202,
      "end": 208,
      "text": "Este \n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 208,
      "end": 270,
      "text": "mensaje tiene una validez de 24 horas, así que no te demores.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 270,
      "end": 271,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 271,
      "end": 272,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 272,
      "end": 301,
      "text": "Verificar correo electrónico\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 301,
      "end": 302,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 302,
      "end": 303,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 303,
      "end": 379,
      "text": "Has recibido este correo electrónico como parte del proceso de registro en \n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 379,
      "end": 385,
      "text": "Waze.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 385,
      "end": 448,
      "text": "Este es un correo electrónico de servicio obligatorio de Waze.\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 448,
      "end": 449,
      "text": "\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 449,
      "end": 450,
      "text": "\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 450,
      "end": 451,
      "text": "\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 451,
      "end": 452,
      "text": "\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 452,
      "end": 453,
      "text": "\n"
    }
  ],
  "passA": {
    "requestSha256": "5e5b3e19e40e555d1dbce425b55bd1bd6d03eeb68dba574964207ef38a79cab1",
    "capturedAt": "2026-09-22T03:53:57.256Z",
    "elapsedMs": 658.3374049999984,
    "successfulAttemptElapsedMs": 657.1498649999849,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.89
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.76
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
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
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.01,
            "sender_supplied": 0.34,
            "mixed_or_unknown": 0.03,
            "no_sensitive_action": 0.62
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 4988,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "d59b9caeb73f6c85f428b2adc084069648edc3e94d7dc21d2392869bfa9b2861",
    "capturedAt": "2026-09-22T03:53:57.811Z",
    "elapsedMs": 553.9703340000124,
    "successfulAttemptElapsedMs": 551.6058600000106,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0,
            "body:16": 0,
            "body:3": 0,
            "body:12": 0,
            "body:4": 0,
            "body:15": 0,
            "body:10": 0,
            "body:19": 0,
            "body:18": 0,
            "body:21": 0,
            "body:2": 0.74,
            "body:9": 0,
            "body:5": 0,
            "body:7": 0,
            "body:6": 0,
            "body:1": 0,
            "body:14": 0,
            "body:11": 0,
            "subject:0": 0,
            "body:17": 0,
            "body:13": 0,
            "body:8": 0.26,
            "body:20": 0,
            "body:0": 0
          },
          "confidence": 0.72
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:16",
          "probabilities": {
            "NONE": 0.17,
            "body:16": 0.77,
            "body:13": 0,
            "body:12": 0,
            "body:4": 0,
            "body:15": 0.02,
            "body:10": 0,
            "body:19": 0,
            "body:18": 0,
            "body:21": 0,
            "body:2": 0,
            "body:9": 0,
            "body:5": 0,
            "body:7": 0,
            "body:6": 0.01,
            "body:1": 0,
            "body:11": 0,
            "body:14": 0.03,
            "subject:0": 0,
            "body:3": 0,
            "body:8": 0,
            "body:17": 0,
            "body:20": 0,
            "body:0": 0
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 1941,
        "output_tokens": 500
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1214.3129870000412,
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
        "status": "selected",
        "segmentId": "body:2"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:16"
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
    "seq": 1410,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-289",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:56.598Z",
    "offsetMs": 0.8236950000282377
  },
  {
    "seq": 1411,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-289",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:57.255Z",
    "offsetMs": 658.3381900000386,
    "elapsedMs": 657.1498649999849,
    "outcome": "success"
  },
  {
    "seq": 1412,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-289",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:57.259Z",
    "offsetMs": 661.6963030000334
  },
  {
    "seq": 1413,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-289",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:57.811Z",
    "offsetMs": 1213.9289040000294,
    "elapsedMs": 551.6058600000106,
    "outcome": "success"
  },
  {
    "seq": 1414,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-289",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:57.812Z",
    "offsetMs": 1214.3662420000182,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "260c1b48eab855fb492214ad13b436663c947dae94326903ecac7a01616e4908";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1411},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1413},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1414}} as const;
export const projectionSha256 = "594086b5727474d0b6687c4986de4f2a8ccb3f75d0e9ad7d09c9a9a995a8323c";
