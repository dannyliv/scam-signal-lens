import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-098",
  "inputSha256": "82450adacf17de4305bba721e326874b85998ad17bfc6731af13af5abc7a90b5",
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
      "end": 82,
      "text": "Ezequiela Miguelina -  🎁⏱️Completa una breve encuesta y recibe un regalo gratis. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 82,
      "end": 89,
      "text": "ID#6964"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 7,
      "text": "MAPFRE\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 7,
      "end": 8,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 8,
      "end": 62,
      "text": "¡Responde una breve encuesta y gana un regalo gratis!\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 62,
      "end": 63,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 63,
      "end": 95,
      "text": "Kit de Emergencia para el Coche\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 95,
      "end": 96,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 96,
      "end": 196,
      "text": "Tienes la oportunidad de recibir un completo kit de seguridad para tu vehículo, cortesía de MAPFRE.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 196,
      "end": 197,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 197,
      "end": 214,
      "text": "Claudia Martínez\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 214,
      "end": 215,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 215,
      "end": 231,
      "text": "RESPONDE Y GANA\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 231,
      "end": 232,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 232,
      "end": 270,
      "text": "Haz clic aquí para reclamar tu regalo\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 270,
      "end": 271,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 271,
      "end": 285,
      "text": "¡Felicidades! "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 285,
      "end": 402,
      "text": "Has sido seleccionado entre un grupo limitado de personas para recibir un exclusivo Kit de Emergencia para el Coche.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 402,
      "end": 403,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 403,
      "end": 498,
      "text": "Para obtener tu regalo, solo debes responder algunas preguntas sobre tu experiencia con MAPFRE."
    }
  ],
  "passA": {
    "requestSha256": "1df45c0c2063bfc27644043cace33c982e3100c77234c173a3909f6409957887",
    "capturedAt": "2026-09-22T03:50:09.013Z",
    "elapsedMs": 639.1247210000001,
    "successfulAttemptElapsedMs": 638.5042679999897,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.28
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.38
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.05
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.35,
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.64
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 5030,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b56b5110cb195567922108adc51e49d84073d2cc2fc667ded728c40bfe994732",
    "capturedAt": "2026-09-22T03:50:09.601Z",
    "elapsedMs": 586.338334,
    "successfulAttemptElapsedMs": 584.3551020000014,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:11": 0,
            "body:2": 0.01,
            "body:10": 0.01,
            "body:5": 0,
            "body:16": 0,
            "body:8": 0,
            "body:6": 0,
            "body:12": 0.06,
            "body:17": 0.1,
            "body:13": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:7": 0,
            "subject:1": 0,
            "NONE": 0.81,
            "body:1": 0,
            "body:0": 0,
            "body:4": 0,
            "body:9": 0,
            "body:14": 0,
            "body:15": 0
          },
          "confidence": 0.79
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:11": 0,
            "body:15": 0.26,
            "body:14": 0,
            "body:5": 0,
            "body:16": 0,
            "body:8": 0,
            "body:6": 0,
            "body:12": 0.02,
            "body:17": 0,
            "body:13": 0,
            "subject:0": 0.38,
            "body:3": 0,
            "body:7": 0,
            "subject:1": 0,
            "NONE": 0.31,
            "body:1": 0,
            "body:0": 0,
            "body:4": 0,
            "body:9": 0,
            "body:2": 0.02,
            "body:10": 0.01
          },
          "confidence": 0.34
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:11": 0,
            "body:2": 0.01,
            "body:14": 0.01,
            "body:5": 0,
            "body:16": 0,
            "body:8": 0.09999999999999999,
            "body:6": 0.21000000000000002,
            "body:12": 0.01,
            "body:17": 0.04,
            "body:13": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:7": 0,
            "subject:1": 0,
            "NONE": 0.09,
            "body:1": 0,
            "body:0": 0.51,
            "body:4": 0,
            "body:9": 0,
            "body:15": 0.02,
            "body:10": 0
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 2770,
        "output_tokens": 651
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1227.3777180000034,
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
        "status": "none_selected",
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
    "seq": 474,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-098",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:08.374Z",
    "offsetMs": 0.4138800000073388
  },
  {
    "seq": 475,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-098",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:09.013Z",
    "offsetMs": 639.1243810000014,
    "elapsedMs": 638.5042679999897,
    "outcome": "success"
  },
  {
    "seq": 476,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-098",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:09.016Z",
    "offsetMs": 642.3543380000046
  },
  {
    "seq": 477,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-098",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:09.601Z",
    "offsetMs": 1227.11658300001,
    "elapsedMs": 584.3551020000014,
    "outcome": "success"
  },
  {
    "seq": 478,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-098",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:09.601Z",
    "offsetMs": 1227.429645000011,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "61ddbd4a9f8247393c3df9e94d0fdc72e106ba5f61322cd5a3fa0f3042e46bed";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":475},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":477},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":478}} as const;
export const projectionSha256 = "241f33892b03fa9beaac7375ae2fe07abf5ba5a9f72fe20236509eebeffe1cb5";
