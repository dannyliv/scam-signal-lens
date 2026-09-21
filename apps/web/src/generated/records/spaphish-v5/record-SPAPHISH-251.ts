import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-251",
  "inputSha256": "e89e266df166a68da70fde76656fa78df4e42820b7a4e573e0467981ac11c7a4",
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
      "text": "Verificar tu documento Kindle"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 28,
      "text": "Estimado cliente de Kindle:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 28,
      "end": 29,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 29,
      "end": 111,
      "text": "Recibimos una solicitud para enviar los siguientes documentos a tu cuenta Kindle:\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 111,
      "end": 158,
      "text": "* El arte de curar con hierbas - Ava Green.pdf\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 158,
      "end": 159,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 159,
      "end": 160,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 160,
      "end": 229,
      "text": "Pega la siguiente URL en tu navegador para verificar esta solicitud.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 229,
      "end": 334,
      "text": "https://sendtokindle.amazon.com/verification/confirm/A1AM78C64UM0Y8/f15a1fbc-f69b-4f15-8f1e-ca28d820806b\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 334,
      "end": 335,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 335,
      "end": 365,
      "text": "¡Gracias por leer con Kindle!\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 365,
      "end": 366,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 366,
      "end": 519,
      "text": "Para obtener más información acerca de cómo recibir documentos personales mediante correo electrónico, visita: https://www.amazon.com/sendtokindle/email\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 519,
      "end": 520,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 520,
      "end": 546,
      "text": "Código del mensaje: A1005\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 546,
      "end": 547,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 547,
      "end": 595,
      "text": "Copyright 2021 Amazon.com, Inc. o sus filiales. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 595,
      "end": 626,
      "text": "Todos los derechos reservados. "
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 626,
      "end": 736,
      "text": "Amazon, Amazon.com, Kindle y el logotipo de Kindle son marcas registradas de Amazon.com, Inc. o sus filiales. "
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 736,
      "end": 792,
      "text": "Amazon.com, 410 Terry Avenue N., Seattle, WA 98109-5210\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 792,
      "end": 793,
      "text": "\n"
    }
  ],
  "passA": {
    "requestSha256": "262b6444da5bc7e336801ca5d7ba698af0e54ce3f0ad42a7da07615343fc0f56",
    "capturedAt": "2026-09-20T23:45:14.859Z",
    "elapsedMs": 184.8047910000023,
    "successfulAttemptElapsedMs": 183.64195800000743,
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
          "noul": 0.07
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
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.84
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.15
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
          "noul": 0.1
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
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.15,
            "independently_established": 0.01,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.83
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 3666,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "2613e90b67350967229bfd8ae16388e3031a9b46653319094047fc740c95ee54",
    "capturedAt": "2026-09-20T23:45:14.996Z",
    "elapsedMs": 134.20716700000048,
    "successfulAttemptElapsedMs": 132.44491600000765,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:14": 0,
            "body:16": 0,
            "body:11": 0,
            "body:5": 0,
            "body:6": 0.02,
            "body:1": 0,
            "body:8": 0,
            "body:7": 0.01,
            "body:0": 0.52,
            "body:17": 0.01,
            "body:15": 0.02,
            "body:2": 0.26,
            "subject:0": 0.01,
            "body:4": 0,
            "body:9": 0.01,
            "body:13": 0,
            "body:18": 0.01,
            "body:10": 0,
            "body:19": 0,
            "body:12": 0,
            "NONE": 0.13,
            "body:3": 0
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 1301,
        "output_tokens": 231
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 321.340750000003,
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
    "seq": 1228,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-251",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:14.675Z",
    "offsetMs": 0.7552500000019791
  },
  {
    "seq": 1229,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-251",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:14.859Z",
    "offsetMs": 184.80487500000163,
    "elapsedMs": 183.64195800000743,
    "outcome": "success"
  },
  {
    "seq": 1230,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-251",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:14.862Z",
    "offsetMs": 188.08462500000314
  },
  {
    "seq": 1231,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-251",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:14.995Z",
    "offsetMs": 321.106541000001,
    "elapsedMs": 132.44491600000765,
    "outcome": "success"
  },
  {
    "seq": 1232,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-251",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:14.996Z",
    "offsetMs": 321.4004580000037,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9a48846cbc2a4122e5c9b8ba1fc5d0602ad4c9ef849affba22ce85ae83adf3aa";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1229},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1231},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1232}} as const;
export const projectionSha256 = "031c449f79d878e359c6f227084ab02f61fa60d41dadffc20e2da11427b68c53";
