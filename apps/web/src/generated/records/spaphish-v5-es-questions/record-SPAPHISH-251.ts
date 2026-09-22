import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-251",
  "inputSha256": "e89e266df166a68da70fde76656fa78df4e42820b7a4e573e0467981ac11c7a4",
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
    "requestSha256": "caa965bf4b343ff33a8a2c0619a1eb261226a0db59104ee64c3129aa1dd68d84",
    "capturedAt": "2026-09-22T03:53:10.834Z",
    "elapsedMs": 657.0619629999856,
    "successfulAttemptElapsedMs": 655.9428600000101,
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
          "noul": 0.06
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
          "noul": 0.1
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.18
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.01,
            "no_sensitive_action": 0.27,
            "sender_supplied": 0.71,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 5116,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "43c2f0f9c4f177635a525c86f1a585a250ef245a46bfa5e66be3ee61d2e7f8c7",
    "capturedAt": "2026-09-22T03:53:11.353Z",
    "elapsedMs": 517.0048190000234,
    "successfulAttemptElapsedMs": 515.9592350000166,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "body:13": 0,
            "body:7": 0,
            "body:12": 0,
            "body:2": 0.36,
            "body:3": 0,
            "body:16": 0,
            "body:11": 0,
            "body:9": 0,
            "body:4": 0,
            "body:19": 0,
            "body:1": 0,
            "body:8": 0,
            "body:18": 0,
            "NONE": 0.06999999999999999,
            "body:5": 0,
            "body:0": 0.49,
            "body:17": 0.01,
            "body:6": 0.05,
            "body:15": 0.01,
            "body:14": 0,
            "body:10": 0
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 1401,
        "output_tokens": 231
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1175.6532579999766,
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1224,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-251",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:10.178Z",
    "offsetMs": 0.7639849999686703
  },
  {
    "seq": 1225,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-251",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:10.834Z",
    "offsetMs": 657.0623279999709,
    "elapsedMs": 655.9428600000101,
    "outcome": "success"
  },
  {
    "seq": 1226,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-251",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:10.836Z",
    "offsetMs": 659.085745999997
  },
  {
    "seq": 1227,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-251",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:11.352Z",
    "offsetMs": 1175.3992960000178,
    "elapsedMs": 515.9592350000166,
    "outcome": "success"
  },
  {
    "seq": 1228,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-251",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:11.353Z",
    "offsetMs": 1175.726668999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "95dfd0a890e6df57ef712c0008d696cf2a7ad13782ca96934e9b7f1f41ace35a";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1225},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1227},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1228}} as const;
export const projectionSha256 = "85d7f7365ddb3b5fdb40a0b7d44a84e02451a3d953e01a9efcd2e3fdc7c6d3e8";
