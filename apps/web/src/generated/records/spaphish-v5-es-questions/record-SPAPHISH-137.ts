import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-137",
  "inputSha256": "308fd2d44bc0ca00f18f16e08b9829832cd9a9ae21ce26d60f057b2151e1aa19",
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
    "requestSha256": "7187298029f3ca516be47a60c4df350de78442007f6a4ee57e83ec6eb70e0f66",
    "capturedAt": "2026-09-22T03:50:57.942Z",
    "elapsedMs": 645.5010279999988,
    "successfulAttemptElapsedMs": 644.6645029999781,
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5219,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "0887f64a1e123fc5e8cbc38c0dda40a5007868ce9e12fda21b90af6181dcc88f",
    "capturedAt": "2026-09-22T03:50:58.493Z",
    "elapsedMs": 549.0444989999814,
    "successfulAttemptElapsedMs": 548.116389999981,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:20",
          "probabilities": {
            "body:6": 0,
            "body:15": 0,
            "body:7": 0,
            "body:1": 0,
            "body:9": 0,
            "body:19": 0,
            "body:11": 0,
            "body:14": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:8": 0,
            "body:16": 0,
            "body:13": 0,
            "body:0": 0,
            "body:20": 0.9,
            "body:3": 0,
            "body:17": 0.02,
            "body:4": 0,
            "body:12": 0,
            "body:10": 0.01,
            "body:5": 0,
            "NONE": 0.06999999999999999,
            "body:18": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 1630,
        "output_tokens": 242
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1196.9132110000064,
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
    "seq": 666,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-137",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:57.296Z",
    "offsetMs": 0.5814079999981914
  },
  {
    "seq": 667,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-137",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:57.941Z",
    "offsetMs": 645.499714000005,
    "elapsedMs": 644.6645029999781,
    "outcome": "success"
  },
  {
    "seq": 668,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-137",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:57.944Z",
    "offsetMs": 648.3086760000151
  },
  {
    "seq": 669,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-137",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:58.492Z",
    "offsetMs": 1196.6774370000057,
    "elapsedMs": 548.116389999981,
    "outcome": "success"
  },
  {
    "seq": 670,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-137",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:58.493Z",
    "offsetMs": 1196.9585519999964,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "19b40f949be9332c686a784fdc17eee518f832f0dce829d0ce6ce90a7ff182f4";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":667},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":669},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":670}} as const;
export const projectionSha256 = "63d35016ddd63a7556979644cecd4a86b83a575d34a7a9ea38209b44695876e6";
