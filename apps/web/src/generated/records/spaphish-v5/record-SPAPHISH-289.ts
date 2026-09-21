import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-289",
  "inputSha256": "cf49bbb182e55237cc59d1b32904622e59ef93efbb651ba1538ce8b80ac3200e",
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
    "requestSha256": "aca37279cd0b7c22d906cd0c75a455929847966212fc4b8f451447ad4dcacdc9",
    "capturedAt": "2026-09-20T23:45:28.756Z",
    "elapsedMs": 132.2679999999964,
    "successfulAttemptElapsedMs": 130.69962499999383,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.93
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.75
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.09
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
          "noul": 0.01
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
            "mixed_or_unclear": 0,
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.01,
            "sender_supplied": 0.47,
            "mixed_or_unknown": 0.06,
            "no_sensitive_action": 0.46
          },
          "confidence": 0.29
        }
      },
      "usage": {
        "input_tokens": 3538,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "bb2abff79458445aae385edac2acf04a2379c445b4375f0654043a31e92ffe1a",
    "capturedAt": "2026-09-21T00:57:26.993Z",
    "elapsedMs": 105.535041000001,
    "successfulAttemptElapsedMs": 103.04958299999998,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:3": 0,
            "body:13": 0,
            "body:19": 0,
            "body:12": 0,
            "body:15": 0,
            "body:1": 0,
            "body:4": 0,
            "body:18": 0,
            "body:10": 0,
            "body:20": 0,
            "NONE": 0,
            "body:9": 0,
            "body:2": 0.74,
            "body:5": 0,
            "body:11": 0,
            "body:21": 0,
            "body:6": 0,
            "body:7": 0,
            "body:0": 0,
            "body:17": 0,
            "subject:0": 0,
            "body:16": 0,
            "body:14": 0,
            "body:8": 0.26
          },
          "confidence": 0.72
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:16",
          "probabilities": {
            "body:3": 0,
            "body:13": 0,
            "body:19": 0,
            "body:12": 0,
            "body:4": 0,
            "body:1": 0,
            "body:15": 0.02,
            "body:18": 0,
            "body:10": 0,
            "body:20": 0,
            "NONE": 0.13,
            "body:9": 0,
            "body:2": 0,
            "body:5": 0,
            "body:11": 0,
            "body:7": 0,
            "body:6": 0,
            "body:21": 0,
            "body:0": 0,
            "body:17": 0,
            "subject:0": 0,
            "body:16": 0.79,
            "body:14": 0.060000000000000005,
            "body:8": 0
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 1739,
        "output_tokens": 500
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 422.8261669999865,
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
    "seq": 1414,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-289",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:28.625Z",
    "offsetMs": 1.1127089999936288
  },
  {
    "seq": 1415,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-289",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:28.756Z",
    "offsetMs": 132.26841699999932,
    "elapsedMs": 130.69962499999383,
    "outcome": "success"
  },
  {
    "seq": 1416,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-289",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:28.760Z",
    "offsetMs": 136.64312499998778
  },
  {
    "seq": 1417,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-289",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:28.939Z",
    "offsetMs": 315.73470899999666,
    "elapsedMs": 178.3607500000071,
    "outcome": "success"
  },
  {
    "seq": 1418,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-289",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:28.939Z",
    "offsetMs": 315.91087499998685,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2688,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-289",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:26.889Z",
    "offsetMs": 2.8800419999988662
  },
  {
    "seq": 2689,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-289",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:26.992Z",
    "offsetMs": 106.5005000000001,
    "elapsedMs": 103.04958299999998,
    "outcome": "success"
  },
  {
    "seq": 2690,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-289",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:26.993Z",
    "offsetMs": 106.82070799999929,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "64bbccf48a3cf44ddeb3feab88b5686263e82889751fce8006ec4d54ec2e9ee1";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1415},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2689},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2690}} as const;
export const projectionSha256 = "f3a9eb710da8eba0ee5787c852099fa6dd689d6afac686df0fb192c6cbc69833";
