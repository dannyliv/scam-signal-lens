import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-353",
  "inputSha256": "31ff68c24003cd85190454e9aeadb9fa789749755d53c647fe3fcf95ce4ce3b3",
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
      "end": 137,
      "text": "Webinarios Premios Nacionales ante el COVID-19: \"Diagnóstico rápido de Covid-19 basado en imágenes y técnicas de inteligencia artificial\""
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 68,
      "text": "El Consejo Nacional de Investigación Avanzada y su titular, la Dra. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 68,
      "end": 423,
      "text": "Laura Mercedes Quintana Robles, le extienden la más atenta invitación a los Webinarios Premios Nacionales ante el COVID-19, en esta sesión se abordará el tema de diagnóstico rápido de Covid-19 basado en imágenes y técnicas de inteligencia artificial, se llevará a cabo el próximo 20 de agosto a las 17:00 horas y se transmitirá por Facebook Live del CNI. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 423,
      "end": 445,
      "text": "Nos acompañará el Dr. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 445,
      "end": 504,
      "text": "Ricardo Beltrán, Premio Nacional de Ciencias y Artes 2016.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 504,
      "end": 505,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 505,
      "end": 594,
      "text": "La transmisión será a través de las siguientes ligas: https://www.facebook.com/ConacytMX\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 594,
      "end": 619,
      "text": ", https://bit.ly/2B2Xrbd\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 619,
      "end": 643,
      "text": " https://bit.ly/2B2Xrbd\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 643,
      "end": 644,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 644,
      "end": 676,
      "text": "Será un gusto que nos acompañe.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 676,
      "end": 677,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 677,
      "end": 714,
      "text": "[cid:image003.jpg@01D6762B.EEC35BA0]\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 714,
      "end": 715,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 715,
      "end": 716,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 716,
      "end": 717,
      "text": "\n"
    }
  ],
  "passA": {
    "requestSha256": "52ae6514f07ac20afd298fd3ce394d7e969896ea2d1a104115ef0601129494da",
    "capturedAt": "2026-09-22T03:55:15.638Z",
    "elapsedMs": 675.6114269999671,
    "successfulAttemptElapsedMs": 673.6347759999917,
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
          "noul": 0.07
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.72,
            "mixed_or_unclear": 0,
            "informational": 0.28,
            "educational_or_quoted": 0
          },
          "confidence": 0.62
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.99,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.01
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 5133,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "206215a62b4bf524c769e964ea073144178c9e7c8174ca4fab35d22c81fc6513",
    "capturedAt": "2026-09-22T03:55:16.207Z",
    "elapsedMs": 567.6956789999967,
    "successfulAttemptElapsedMs": 566.0712219999987,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:9": 0.01,
            "NONE": 0.02,
            "body:11": 0,
            "body:12": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:8": 0,
            "body:0": 0.7,
            "body:3": 0.01,
            "body:1": 0.25,
            "body:5": 0,
            "body:2": 0.01,
            "body:14": 0,
            "body:7": 0,
            "body:6": 0,
            "body:13": 0,
            "body:10": 0
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 1364,
        "output_tokens": 181
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1245.5361830000184,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
    "seq": 1727,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-353",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:14.963Z",
    "offsetMs": 1.340321000025142
  },
  {
    "seq": 1728,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-353",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:15.637Z",
    "offsetMs": 675.6106450000079,
    "elapsedMs": 673.6347759999917,
    "outcome": "success"
  },
  {
    "seq": 1729,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-353",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:15.641Z",
    "offsetMs": 678.6942140000174
  },
  {
    "seq": 1730,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-353",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:16.207Z",
    "offsetMs": 1245.25704700005,
    "elapsedMs": 566.0712219999987,
    "outcome": "success"
  },
  {
    "seq": 1731,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-353",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:16.207Z",
    "offsetMs": 1245.5968630000134,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "433992043b7f946e44bd9b9ab344dd6e111b6e0fe2ed56d08934558cac7b7de1";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1728},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1730},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1731}} as const;
export const projectionSha256 = "45ee5a605951fd5757189e6914a789756d4757f6fdb59514fb0cda1af6985933";
