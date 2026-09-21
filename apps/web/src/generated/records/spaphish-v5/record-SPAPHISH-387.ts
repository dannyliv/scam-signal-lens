import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-387",
  "inputSha256": "92ef7ace4e3dc656a6784aa583eaf98cf2de441bb1da2444098b9fb58a58674a",
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
      "end": 59,
      "text": "Recordatorio de registro de calificaciones para Verano 2025"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 37,
      "text": "Estimadas (os ) Investigadoras (es),\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 37,
      "end": 38,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 38,
      "end": 197,
      "text": "Esperando se encuentren bien; les informamos que SIRAC, ya se encuentra abierto para registrar sus calificaciones correspondientes al periodo de verano- 2025.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 197,
      "end": 198,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 198,
      "end": 272,
      "text": " - Apertura del sistema para registro del 14 al 17 de julio del presente.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 272,
      "end": 273,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 273,
      "end": 433,
      "text": "Se les pide por favor registrar en tiempo sus calificaciones directamente en el SIRAC, con su cuenta de usuario en la siguiente liga: https://sirac.MyOwnp.org/\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 433,
      "end": 434,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 434,
      "end": 578,
      "text": "Si tienen alguna duda sobre el proceso de carga de calificaciones pueden consultar el videotutorial en esta liga: https://www.youtube.com/watch?"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 578,
      "end": 612,
      "text": "v=SYNTH-VIDEO-ID&feature=youtu.be\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 612,
      "end": 613,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 613,
      "end": 721,
      "text": "Si por alguna razón, tiene problemas con su usuario, le pedimos enviar un correo a soporte_sirac@MyOwnp.org\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 721,
      "end": 722,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 722,
      "end": 769,
      "text": "Sin otro particular reciban cordiales saludos.\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 769,
      "end": 770,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 770,
      "end": 816,
      "text": "Administración SIRAC https://sirac.MyOwnp.org/"
    }
  ],
  "passA": {
    "requestSha256": "a7a7d7aa8399bc18c37c74d8594ca38cabc85c5c734f20c6a066820f78c5a7d8",
    "capturedAt": "2026-09-20T23:46:01.978Z",
    "elapsedMs": 159.28691699999035,
    "successfulAttemptElapsedMs": 156.92362500001036,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.65
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
          "noul": 0.02
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
          "noul": 0.17
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
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
            "mixed_or_unknown": 0.03,
            "sender_supplied": 0.52,
            "independently_established": 0,
            "no_sensitive_action": 0.45
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 3669,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "f0718a61ccd8ea93e762d809b3115399ffb76d6ed0d3f224d2f2c4aba3604e96",
    "capturedAt": "2026-09-20T23:46:02.186Z",
    "elapsedMs": 206.41658299999835,
    "successfulAttemptElapsedMs": 204.31904200001736,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:6": 0.73,
            "body:13": 0,
            "body:9": 0,
            "body:14": 0,
            "body:15": 0,
            "body:4": 0.14,
            "body:1": 0,
            "body:8": 0,
            "body:3": 0,
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0.13,
            "body:12": 0,
            "body:0": 0,
            "body:11": 0,
            "body:7": 0,
            "body:5": 0,
            "body:10": 0
          },
          "confidence": 0.7
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:15",
          "probabilities": {
            "body:6": 0.13,
            "body:13": 0,
            "body:9": 0,
            "body:14": 0,
            "body:15": 0.7,
            "body:4": 0,
            "body:1": 0,
            "body:8": 0,
            "body:3": 0,
            "body:7": 0,
            "subject:0": 0,
            "NONE": 0.01,
            "body:11": 0.03,
            "body:0": 0.07,
            "body:12": 0,
            "body:5": 0,
            "body:10": 0,
            "body:2": 0.06
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 1950,
        "output_tokens": 380
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 368.21133300001384,
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
        "segmentId": "body:6"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:15"
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
    "seq": 1898,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-387",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:01.820Z",
    "offsetMs": 1.6552910000027623
  },
  {
    "seq": 1899,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-387",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:01.977Z",
    "offsetMs": 159.28320800000802,
    "elapsedMs": 156.92362500001036,
    "outcome": "success"
  },
  {
    "seq": 1900,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-387",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:01.981Z",
    "offsetMs": 162.93245800001023
  },
  {
    "seq": 1901,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-387",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:02.186Z",
    "offsetMs": 367.91575000001467,
    "elapsedMs": 204.31904200001736,
    "outcome": "success"
  },
  {
    "seq": 1902,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-387",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:02.186Z",
    "offsetMs": 368.2712499999907,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fdc4fe50634ffd49c5e1e442ebff3fa1d2117b774f3b76fad9c715487a374845";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1899},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1901},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1902}} as const;
export const projectionSha256 = "416fb66704b8b4f95fe8bb6ba70421ed4a808f0e0714d747df3a8b095e42c998";
