import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-396",
  "inputSha256": "5069d21b7dc45a33e834e2fcd46e435a4c2db826059af3e3ab1dc0a11f210f86",
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
      "end": 37,
      "text": "Cancelación de Internet de la RedNIBA"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 42,
      "text": "Estimados usuarios y usuarias de Internet\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 42,
      "end": 43,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 43,
      "end": 250,
      "text": "Por medio de la presente, les informamos que el programa de Red de Conectividad Nacional (RCN) de Impulso a la Banda Ancha (Red NIBA) ha llegado a su fin, así como el programa de Digitalización Comunitaria. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 250,
      "end": 328,
      "text": "Por lo cual, se cancela uno de nuestros enlaces de 100 Mega bits por segundo. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 328,
      "end": 396,
      "text": "Lo que representa el 40 % de la capacidad del servicio de Internet.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 396,
      "end": 397,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 397,
      "end": 617,
      "text": "Estos programas serán sustituidos por la de Red Quetzal (Red Nacional para la Investigación, Innovación y Enseñanza); ya nos hemos inscrito a este nuevo programa, solicitando un ancho de banda de 1 Giga bit por segundo. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 617,
      "end": 671,
      "text": "Sin embargo, todavía no hay fechas de implementación.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 671,
      "end": 672,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 672,
      "end": 777,
      "text": "Por tal motivo el servicio de conexión a la Internet (red de redes) de nuestra institución estará lento.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 777,
      "end": 778,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 778,
      "end": 829,
      "text": "Agradeciendo de antemano su atención y compresión. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 829,
      "end": 858,
      "text": "Les envío un cordial saludo.\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 858,
      "end": 859,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 859,
      "end": 865,
      "text": "Atte. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 865,
      "end": 941,
      "text": "Javier Pérez Ríos Dirección de Sistemas e Informática Innovación Tecnológica"
    }
  ],
  "passA": {
    "requestSha256": "e4ad7fd2b0b97037fc841457e37f4b0ee5387587419ec5d7a81e5f0b64f40fdc",
    "capturedAt": "2026-09-20T23:46:04.978Z",
    "elapsedMs": 146.775209000014,
    "successfulAttemptElapsedMs": 144.75662499997998,
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
          "noul": 0.89
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
            "educational_or_quoted": 0,
            "active_request": 0,
            "informational": 1,
            "mixed_or_unclear": 0
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
        "input_tokens": 3677,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "05ed87622eba030a647d146cd89bb15082144e8f60932636c26e8f0ff9305e74",
    "capturedAt": "2026-09-20T23:46:05.182Z",
    "elapsedMs": 199.75224999999045,
    "successfulAttemptElapsedMs": 196.97716700000456,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:15",
          "probabilities": {
            "body:9": 0.01,
            "body:8": 0,
            "body:11": 0,
            "body:4": 0,
            "body:5": 0,
            "body:3": 0,
            "NONE": 0.01,
            "body:14": 0.01,
            "body:15": 0.97,
            "body:6": 0,
            "body:7": 0,
            "body:0": 0,
            "body:10": 0,
            "body:2": 0,
            "body:13": 0,
            "subject:0": 0,
            "body:12": 0,
            "body:1": 0
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 1266,
        "output_tokens": 192
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 351.4057089999842,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1942,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-396",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:04.833Z",
    "offsetMs": 1.4802919999929145
  },
  {
    "seq": 1943,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-396",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:04.978Z",
    "offsetMs": 146.77449999999953,
    "elapsedMs": 144.75662499997998,
    "outcome": "success"
  },
  {
    "seq": 1944,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-396",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:04.984Z",
    "offsetMs": 153.37608399998862
  },
  {
    "seq": 1945,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-396",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:05.182Z",
    "offsetMs": 351.12012499998673,
    "elapsedMs": 196.97716700000456,
    "outcome": "success"
  },
  {
    "seq": 1946,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-396",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:05.183Z",
    "offsetMs": 351.48641700000735,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "56a2623137a26f6a9fff9f43fdceeaedba442854ff338110030ef06e369f672c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1943},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1945},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1946}} as const;
export const projectionSha256 = "8a313c0b3b5e7f1bb7eccdc5afbcb9691c0d86f515cb4f9055f62311b45e2b36";
