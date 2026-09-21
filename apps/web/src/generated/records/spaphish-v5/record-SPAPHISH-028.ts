import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-028",
  "inputSha256": "9876d804ea401b24f9d41f09f2cb9b5864733d2df9fe5382b16c62d63c512d08",
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
      "end": 41,
      "text": "Pablito - Tiene (1) mensaje de nosotros. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 41,
      "end": 71,
      "text": "Haga clic abajo para abrirlo. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 71,
      "end": 73,
      "text": "📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 10,
      "text": "FedEx ® ☰\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 10,
      "end": 38,
      "text": "Fecha de envio : 05-04-2024\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 38,
      "end": 70,
      "text": "Falta de entrega a Marcos Díaz!\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 70,
      "end": 100,
      "text": "entrega de paquete suspendida\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 100,
      "end": 101,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 101,
      "end": 139,
      "text": "¿Cómo le gustaría recibir su paquete?\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 139,
      "end": 167,
      "text": "Quiero que me lo entreguen.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 167,
      "end": 187,
      "text": "Lo tomaré yo mismo.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 187,
      "end": 188,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 188,
      "end": 230,
      "text": "¿Dónde desea que le entreguen el paquete?\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 230,
      "end": 238,
      "text": "En casa\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 238,
      "end": 247,
      "text": "Trabajar\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 247,
      "end": 248,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 248,
      "end": 273,
      "text": "Información del paquete:\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 273,
      "end": 321,
      "text": "Situación Detenido en el centro de distribución\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 321,
      "end": 385,
      "text": "Enviar a través de Seguimiento de correspondencia internacional\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 385,
      "end": 402,
      "text": "Dado: 05-04-2024\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 402,
      "end": 403,
      "text": "\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 403,
      "end": 417,
      "text": "CONSULTA AQUÍ\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 417,
      "end": 418,
      "text": "\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 418,
      "end": 521,
      "text": "Si ya no desea recibir estos correos electrónicos, puede darse de baja click en el enlace darse de baja"
    }
  ],
  "passA": {
    "requestSha256": "24c637b8137be240eab155691e5b43dd0bc508b7e9019300c4d5fca44738e010",
    "capturedAt": "2026-09-20T23:44:00.160Z",
    "elapsedMs": 143.01104099999975,
    "successfulAttemptElapsedMs": 141.80975000000035,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.1
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
          "noul": 0.28
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.35
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.61,
            "sender_supplied": 0.38,
            "independently_established": 0,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 3608,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "bd2aaa353d434dc38ae6b733b9580bbc6d6f367a1788897cbfb62f14f76af8c4",
    "capturedAt": "2026-09-21T00:57:15.571Z",
    "elapsedMs": 295.580958,
    "successfulAttemptElapsedMs": 292.508458,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "NONE": 0.26,
            "subject:1": 0.01,
            "body:8": 0,
            "body:3": 0.63,
            "body:0": 0,
            "body:9": 0,
            "body:12": 0,
            "body:13": 0,
            "body:18": 0.05,
            "body:4": 0,
            "body:19": 0,
            "body:14": 0.01,
            "subject:0": 0,
            "body:6": 0,
            "body:2": 0.03,
            "body:7": 0,
            "body:1": 0,
            "body:15": 0,
            "body:17": 0,
            "subject:2": 0,
            "body:5": 0.01,
            "body:16": 0,
            "body:10": 0,
            "body:11": 0,
            "body:20": 0
          },
          "confidence": 0.6
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.060000000000000005,
            "subject:1": 0,
            "subject:2": 0,
            "body:3": 0.01,
            "body:11": 0,
            "body:9": 0,
            "body:14": 0.01,
            "body:13": 0,
            "body:18": 0.01,
            "body:4": 0,
            "body:19": 0,
            "body:12": 0,
            "subject:0": 0.01,
            "body:6": 0.01,
            "body:2": 0.01,
            "body:7": 0,
            "body:1": 0,
            "body:15": 0,
            "body:17": 0,
            "body:8": 0,
            "body:5": 0.01,
            "body:0": 0.87,
            "body:10": 0,
            "body:16": 0,
            "body:20": 0
          },
          "confidence": 0.85
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.75,
            "subject:1": 0.03,
            "body:0": 0,
            "body:3": 0,
            "body:16": 0,
            "body:19": 0,
            "body:12": 0,
            "body:13": 0,
            "body:14": 0,
            "body:4": 0,
            "body:9": 0,
            "body:18": 0.2,
            "subject:0": 0,
            "body:6": 0,
            "body:2": 0,
            "body:7": 0,
            "body:15": 0.02,
            "body:1": 0,
            "body:17": 0,
            "body:8": 0,
            "body:5": 0,
            "body:20": 0,
            "body:10": 0,
            "body:11": 0,
            "subject:2": 0
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 2710,
        "output_tokens": 771
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 574.6904999999999,
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
    "seq": 134,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-028",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:00.017Z",
    "offsetMs": 0.6960420000013983
  },
  {
    "seq": 135,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-028",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:00.159Z",
    "offsetMs": 143.00954199999978,
    "elapsedMs": 141.80975000000035,
    "outcome": "success"
  },
  {
    "seq": 136,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-028",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:00.163Z",
    "offsetMs": 146.52679200000057
  },
  {
    "seq": 137,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-028",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:00.293Z",
    "offsetMs": 276.91770800000086,
    "elapsedMs": 129.67924999999923,
    "outcome": "success"
  },
  {
    "seq": 138,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-028",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:00.293Z",
    "offsetMs": 277.2465000000011,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2480,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-028",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:15.278Z",
    "offsetMs": 3.8956249999998818
  },
  {
    "seq": 2481,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-028",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:15.571Z",
    "offsetMs": 297.0385839999999,
    "elapsedMs": 292.508458,
    "outcome": "success"
  },
  {
    "seq": 2482,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-028",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:15.571Z",
    "offsetMs": 297.2963749999999,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7373f9320a031c10b5f18010f165dd02a5612fd3885ba76c5149c3a110daadc5";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":135},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2481},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2482}} as const;
export const projectionSha256 = "4c3b5843971632718f9ac465867c3320b55d4abb9ac646bf18e4f10426927727";
