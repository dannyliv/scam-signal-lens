import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-194",
  "inputSha256": "c487461a556fb80461f404051d5aaace68ca7862e8104491ff2ff0f78ce62544",
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
      "end": 60,
      "text": "Aclaración sobre la nota inexacta del periódico El Universal"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 61,
      "text": "Villa Nueva del Sur, Provincia Central — 30 de abril de 2025\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 61,
      "end": 62,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 62,
      "end": 138,
      "text": "A toda la comunidad del Centro de Investigación Avanzada del Valle (CIVVA).\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 138,
      "end": 139,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 139,
      "end": 400,
      "text": "El día de hoy, en un diario nacional, se publicó una nota inexacta que desacredita de mala fe el trabajo genuino que realizan los directores de los Centros Públicos de Investigación (CPI) y el Consejo Nacional de Desarrollo Científico y Tecnológico (CONADECT).\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 400,
      "end": 460,
      "text": "El artículo “¿El fin de la excelencia académica en México?” "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 460,
      "end": 622,
      "text": "firmado por Julián Herrera es un texto malintencionado e impreciso, al cual el Centro para Estudios y Desarrollo Académico (CEDA) responde como se muestra abajo.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 622,
      "end": 623,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 623,
      "end": 790,
      "text": "Los CPI y el CONADECT somos entidades públicas que dependen del presupuesto nacional y estamos comprometidos con la verdad y la pertinencia social de nuestro trabajo.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 790,
      "end": 938,
      "text": "En esta época de contingencia sanitaria debemos unir esfuerzos y no destruirlos, como lo hace el diario mencionado y su articulista Julián Herrera. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 938,
      "end": 988,
      "text": "Reprobamos dichas acciones públicas destructivas.\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 988,
      "end": 989,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 989,
      "end": 998,
      "text": "Saludos,\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 998,
      "end": 999,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 999,
      "end": 1003,
      "text": "Dr. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1003,
      "end": 1014,
      "text": "Marcelo R. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 1014,
      "end": 1024,
      "text": "Domínguez\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 1024,
      "end": 1041,
      "text": "Director General\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 1041,
      "end": 1091,
      "text": "Centro de Investigación Avanzada del Valle (CIVVA)"
    }
  ],
  "passA": {
    "requestSha256": "241e5f0c84d37e1ce0f859d0663083edb6a85cf953a40deec8c3700f574e2658",
    "capturedAt": "2026-09-20T23:44:55.185Z",
    "elapsedMs": 219.9285000000018,
    "successfulAttemptElapsedMs": 218.2421669999967,
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3715,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "a52127b4047f46f2586ca19e10f1d11c46d5a843deff1c2a2bde28372e174c54",
    "capturedAt": "2026-09-20T23:44:55.300Z",
    "elapsedMs": 112.33045799999672,
    "successfulAttemptElapsedMs": 110.39220800000476,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:17",
          "probabilities": {
            "body:0": 0,
            "body:1": 0,
            "body:11": 0.01,
            "body:15": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:6": 0,
            "body:8": 0.13,
            "body:3": 0,
            "body:13": 0,
            "NONE": 0.02,
            "body:16": 0,
            "body:9": 0.04,
            "body:4": 0.02,
            "body:2": 0.02,
            "body:14": 0.03,
            "body:18": 0.09999999999999999,
            "body:12": 0,
            "body:17": 0.63,
            "body:10": 0,
            "body:7": 0
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 1383,
        "output_tokens": 222
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 335.6152080000029,
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
    "seq": 947,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-194",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:54.966Z",
    "offsetMs": 1.1307500000039
  },
  {
    "seq": 948,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-194",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:55.185Z",
    "offsetMs": 219.92933300000004,
    "elapsedMs": 218.2421669999967,
    "outcome": "success"
  },
  {
    "seq": 949,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-194",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:55.189Z",
    "offsetMs": 224.16091600000073
  },
  {
    "seq": 950,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-194",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:55.300Z",
    "offsetMs": 335.29079099999944,
    "elapsedMs": 110.39220800000476,
    "outcome": "success"
  },
  {
    "seq": 951,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-194",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:55.301Z",
    "offsetMs": 335.702916000002,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ab3dc3b0e2d9a99b96fd840bbfb5795246a4bf01edbf71a23cbba28a90d9edc9";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":948},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":950},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":951}} as const;
export const projectionSha256 = "692a2da9631ec3cc573e1de4a1510a09aa3ec1309d59ee967596451d8ebfc1e7";
