import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-480",
  "inputSha256": "f047ff794db46923624b0fcff770cd175e3e7585a6f9a7690010f95308b7a1a6",
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
      "end": 33,
      "text": "ESTÍMULO DEL SNI – DICIEMBRE 2025"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 31,
      "text": "Estimadas y estimados colegas:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 31,
      "end": 32,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 32,
      "end": 259,
      "text": "En aras de su tranquilidad y certidumbre al cierre de este complicado año, el Gobierno de la Nación ha hecho el esfuerzo de adelantar el pago de SNB relativo a noviembre, que tendrán disponible a partir del próximo viernes 28. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 259,
      "end": 591,
      "text": "También les comunico que, como hasta ahora, se mantendrá el estímulo económico a todas y todos los colegas, incluidos quienes laboran en universidades privadas, cuyos convenios individuales se formalizaron bajo el auspicio de convenios institucionales vigentes con el CNBE, aún cuando los de las instituciones puedan haber vencido. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 591,
      "end": 823,
      "text": "Como saben, estos acuerdos con instituciones privadas tendrán un carácter novedoso, que iremos estableciendo con cada una de las Instituciones involucradas; siempre respetando los derechos adquiridos de nuestras y nuestros colegas. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 823,
      "end": 970,
      "text": "El objetivo será siempre fortalecer las capacidades de desarrollo científico y tecnológico priorizando el bienestar social y el cuidado ambiental.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 970,
      "end": 971,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 971,
      "end": 1061,
      "text": "Aprovecho esta ocasión para transmitirles los mejores deseos para ustedes y sus familias.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1061,
      "end": 1062,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1062,
      "end": 1075,
      "text": "Atentamente,\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1075,
      "end": 1076,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1076,
      "end": 1081,
      "text": "Dra. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1081,
      "end": 1107,
      "text": "Laura Sofía Jiménez López\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1107,
      "end": 1108,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1108,
      "end": 1134,
      "text": "Directora General del CNBE"
    }
  ],
  "passA": {
    "requestSha256": "25b90ed8ff7403a93879df125d8387c9272d8c2a79d2e6170cb102200e953b5f",
    "capturedAt": "2026-09-20T23:46:33.048Z",
    "elapsedMs": 157.47754200000782,
    "successfulAttemptElapsedMs": 154.9657920000027,
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
          "noul": 0.03
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
          "noul": 0.93
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
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0,
            "mixed_or_unclear": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3696,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "d044f6c24e67ce9d2c51c2c2a7e891dc62927d3a7b89ed4c8d05e580a9b1accd",
    "capturedAt": "2026-09-20T23:46:33.170Z",
    "elapsedMs": 121.10895799999707,
    "successfulAttemptElapsedMs": 119.30079099998693,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:14",
          "probabilities": {
            "subject:0": 0,
            "body:9": 0.01,
            "body:4": 0,
            "NONE": 0.01,
            "body:7": 0,
            "body:8": 0,
            "body:0": 0.05,
            "body:13": 0,
            "body:11": 0.03,
            "body:10": 0,
            "body:1": 0,
            "body:6": 0,
            "body:5": 0,
            "body:12": 0,
            "body:3": 0.02,
            "body:2": 0.11,
            "body:14": 0.77
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 1289,
        "output_tokens": 182
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 280.0454169999866,
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
        "segmentId": "body:14"
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
    "seq": 2358,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-480",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:32.892Z",
    "offsetMs": 1.9361249999783468
  },
  {
    "seq": 2359,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-480",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:33.048Z",
    "offsetMs": 157.48033399999258,
    "elapsedMs": 154.9657920000027,
    "outcome": "success"
  },
  {
    "seq": 2360,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-480",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:33.050Z",
    "offsetMs": 160.02108399997815
  },
  {
    "seq": 2361,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-480",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:33.170Z",
    "offsetMs": 279.87012499998673,
    "elapsedMs": 119.30079099998693,
    "outcome": "success"
  },
  {
    "seq": 2362,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-480",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:33.170Z",
    "offsetMs": 280.09833399998024,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0fc4f8555b1abf9324e661e8146dd516d34b653a64f875ec9506d42b8f0e5159";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2359},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2361},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2362}} as const;
export const projectionSha256 = "6b8ca46220cacffd6d6b87c50cb9e01a167103893957795612c7e8d57fca1777";
