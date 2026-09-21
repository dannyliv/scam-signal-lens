import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-353",
  "inputSha256": "31ff68c24003cd85190454e9aeadb9fa789749755d53c647fe3fcf95ce4ce3b3",
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
    "requestSha256": "505e934cafd479c8abe8a5269f1cccbba0ebe50780bdface73a2ab72f8cff74d",
    "capturedAt": "2026-09-20T23:45:51.315Z",
    "elapsedMs": 175.46500000001106,
    "successfulAttemptElapsedMs": 173.29995800000324,
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
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
            "educational_or_quoted": 0,
            "active_request": 0.84,
            "informational": 0.16,
            "mixed_or_unclear": 0
          },
          "confidence": 0.78
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.98,
            "sender_supplied": 0.02,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3683,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "249f9a6d910948a460ff3b4f365465c7539a4a221119fc7112791b017ea7555d",
    "capturedAt": "2026-09-20T23:45:51.444Z",
    "elapsedMs": 127.62720900001295,
    "successfulAttemptElapsedMs": 125.64012500000536,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:6": 0,
            "body:13": 0,
            "body:9": 0,
            "body:14": 0,
            "body:3": 0.01,
            "body:1": 0.14,
            "body:8": 0,
            "body:4": 0,
            "body:7": 0,
            "subject:0": 0,
            "NONE": 0.01,
            "body:5": 0,
            "body:0": 0.83,
            "body:11": 0,
            "body:10": 0,
            "body:12": 0,
            "body:2": 0.01
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 1264,
        "output_tokens": 181
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 305.3892499999929,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1729,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-353",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:51.141Z",
    "offsetMs": 1.5147919999872101
  },
  {
    "seq": 1730,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-353",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:51.314Z",
    "offsetMs": 175.46491699999024,
    "elapsedMs": 173.29995800000324,
    "outcome": "success"
  },
  {
    "seq": 1731,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-353",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:51.318Z",
    "offsetMs": 178.81274999999732
  },
  {
    "seq": 1732,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-353",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:51.444Z",
    "offsetMs": 305.1246669999964,
    "elapsedMs": 125.64012500000536,
    "outcome": "success"
  },
  {
    "seq": 1733,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-353",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:51.444Z",
    "offsetMs": 305.4542499999952,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "cda629446dc08ab54e51ee9c03d0165f24fb056eac79374c54783b6f326966eb";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1730},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1732},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1733}} as const;
export const projectionSha256 = "22e71775a3798c7ef47ac7bd83112e092e391529f3ce35316e8dead8f3dcca9f";
