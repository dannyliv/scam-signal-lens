import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-137",
  "inputSha256": "308fd2d44bc0ca00f18f16e08b9829832cd9a9ae21ce26d60f057b2151e1aa19",
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
      "end": 28,
      "text": "Periodo vacacional de verano"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 44,
      "text": "Santa María, Hidalgo a 17 de julio de 2025.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 44,
      "end": 45,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 45,
      "end": 73,
      "text": "Estimada comunidad de MyOwn\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 73,
      "end": 74,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 74,
      "end": 153,
      "text": "        Antes que nada deseo se encuentren bien de salud ustedes y su familia. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 153,
      "end": 287,
      "text": "Desde la segunda semana de marzo, debido a la contingencia sanitaria, las actividades presenciales se han trastocado sustancialmente. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 287,
      "end": 420,
      "text": "En particular las actividades que tienen que ver con la formación académica, la investigación y desarrollo tecnológico experimental. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 420,
      "end": 623,
      "text": "Gracias a una estrategia de guardias rotatorias en las cuatro direcciones, el instituto ha mantenido las actividades administrativas, operativas, y financieras básicas durante la contingencia sanitaria. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 623,
      "end": 778,
      "text": "Agradezco entonces a todos los empleados de MyOwn que nos han estado apoyando, y a los guardias en particular que han hecho un trabajo formidable.         "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 778,
      "end": 955,
      "text": "El MyOwn ha realizado su trabajo sustantivo de acuerdo a lo marcado en el decreto de creación y los indicadores de investigación, desarrollo tecnológico, y formación académica. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 955,
      "end": 1148,
      "text": "Por lo tanto, para este verano, el periodo vacacional inicia el día lunes 20 de julio y termina el viernes 7 de agosto, con lo que regresamos a actividades laborales el día lunes 10 de agosto. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1148,
      "end": 1347,
      "text": "No obstante este periodo vacacional, estaremos atentos a los posibles cambios del semáforo sanitario y reactivaremos algunas actividades que se requieran debido a compromisos previamente contraídos.\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1347,
      "end": 1348,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1348,
      "end": 1356,
      "text": "Saludos\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1356,
      "end": 1357,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1357,
      "end": 1365,
      "text": "Rodolfo\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 1365,
      "end": 1366,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 1366,
      "end": 1370,
      "text": "Dr. "
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 1370,
      "end": 1381,
      "text": "Rodolfo E. "
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 1381,
      "end": 1392,
      "text": "Jiménez P. "
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 1392,
      "end": 1414,
      "text": "Director General MyOwn"
    }
  ],
  "passA": {
    "requestSha256": "08c15710baf2715ba076e74bba27da0b43f73742d0bd45d5e7e0a1db2efa9688",
    "capturedAt": "2026-09-20T23:44:34.632Z",
    "elapsedMs": 127.33899999999994,
    "successfulAttemptElapsedMs": 122.7145840000012,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.01
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 1,
            "active_request": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "sender_supplied": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3769,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "f5712d04e07903ee6d4c5596f828d95e731054ea950104d16aa005ab2944c5ca",
    "capturedAt": "2026-09-20T23:44:34.741Z",
    "elapsedMs": 107.76800000000367,
    "successfulAttemptElapsedMs": 106.34970800000156,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:20",
          "probabilities": {
            "body:0": 0,
            "body:20": 0.91,
            "body:5": 0,
            "body:11": 0,
            "body:15": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:6": 0,
            "body:8": 0,
            "body:13": 0,
            "body:3": 0,
            "NONE": 0.01,
            "body:16": 0,
            "body:9": 0,
            "body:14": 0,
            "body:2": 0.03,
            "body:4": 0,
            "body:12": 0,
            "body:19": 0,
            "body:17": 0.01,
            "body:10": 0.04,
            "body:18": 0,
            "body:7": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 1530,
        "output_tokens": 242
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 237.0019170000014,
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
        "segmentId": "body:20"
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
    "seq": 672,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-137",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:34.508Z",
    "offsetMs": 3.016750000002503
  },
  {
    "seq": 673,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-137",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:34.632Z",
    "offsetMs": 127.34212500000285,
    "elapsedMs": 122.7145840000012,
    "outcome": "success"
  },
  {
    "seq": 674,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-137",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:34.634Z",
    "offsetMs": 129.8017919999984
  },
  {
    "seq": 675,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-137",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:34.741Z",
    "offsetMs": 236.72237499999756,
    "elapsedMs": 106.34970800000156,
    "outcome": "success"
  },
  {
    "seq": 676,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-137",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:34.742Z",
    "offsetMs": 237.0621669999964,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "85f2ac58263ca61f0f6923b43efe8559d0e800e38ba70d605ae1196e31be48ee";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":673},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":675},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":676}} as const;
export const projectionSha256 = "8993988e734c22715358f972651e5c6b423d2f64c017281ad4edd987f9f92bf0";
