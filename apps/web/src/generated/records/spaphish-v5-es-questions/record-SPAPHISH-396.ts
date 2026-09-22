import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-396",
  "inputSha256": "5069d21b7dc45a33e834e2fcd46e435a4c2db826059af3e3ab1dc0a11f210f86",
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
    "requestSha256": "039cf4f6242ed416b8c3f08c0f7871de3ac509b4923bdb4fb4dcc3538edeae51",
    "capturedAt": "2026-09-22T03:56:06.019Z",
    "elapsedMs": 621.3027620000066,
    "successfulAttemptElapsedMs": 620.2194879999734,
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0,
            "educational_or_quoted": 0,
            "informational": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0,
            "independently_established": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5127,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "86e4bafdab4f580ca47d7761103ae7947bab410640bac054702338997625ae38",
    "capturedAt": "2026-09-22T03:56:06.509Z",
    "elapsedMs": 488.2084489999688,
    "successfulAttemptElapsedMs": 486.7532019999926,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:15",
          "probabilities": {
            "body:9": 0,
            "body:6": 0,
            "body:13": 0,
            "body:10": 0,
            "body:12": 0,
            "body:4": 0,
            "body:0": 0,
            "NONE": 0.01,
            "body:8": 0,
            "subject:0": 0,
            "body:2": 0.01,
            "body:1": 0,
            "body:11": 0,
            "body:7": 0,
            "body:3": 0,
            "body:14": 0.01,
            "body:5": 0,
            "body:15": 0.97
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 1366,
        "output_tokens": 192
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1110.9930969999987,
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
    "seq": 1940,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-396",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:05.399Z",
    "offsetMs": 0.8570790000376292
  },
  {
    "seq": 1941,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-396",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:06.019Z",
    "offsetMs": 621.3031760000158,
    "elapsedMs": 620.2194879999734,
    "outcome": "success"
  },
  {
    "seq": 1942,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-396",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:06.022Z",
    "offsetMs": 623.703944000008
  },
  {
    "seq": 1943,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-396",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:06.509Z",
    "offsetMs": 1110.7606079999823,
    "elapsedMs": 486.7532019999926,
    "outcome": "success"
  },
  {
    "seq": 1944,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-396",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:06.509Z",
    "offsetMs": 1111.0420790000353,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "66ef03920e6c20902f53fb004c85fb543a1b86318abd0aa066bcffbc4da4c270";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1941},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1943},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1944}} as const;
export const projectionSha256 = "c9bdbbed5044b247c2d9a2ee364bbdd1c39de75ce070a4a83173545a9331fd48";
