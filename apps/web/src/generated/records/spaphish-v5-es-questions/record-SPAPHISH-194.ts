import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-194",
  "inputSha256": "c487461a556fb80461f404051d5aaace68ca7862e8104491ff2ff0f78ce62544",
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
    "requestSha256": "accd849a3a01325cfa3a3bafed203488f04fdc27494966b49098807075f43146",
    "capturedAt": "2026-09-22T03:52:02.084Z",
    "elapsedMs": 683.3772530000133,
    "successfulAttemptElapsedMs": 682.4352310000104,
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
          "noul": 0.92
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5165,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "71345e8aeb8eb0a50dd6bf31604cfbec04c3caaeb7ae1771bc4f7a7581dfb16f",
    "capturedAt": "2026-09-22T03:52:02.753Z",
    "elapsedMs": 667.7653770000034,
    "successfulAttemptElapsedMs": 666.6218359999766,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:17",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0,
            "body:17": 0.79,
            "body:8": 0.03,
            "body:3": 0,
            "body:4": 0.01,
            "body:15": 0,
            "body:16": 0,
            "body:12": 0,
            "body:2": 0,
            "NONE": 0.05,
            "body:14": 0.03,
            "body:13": 0,
            "body:9": 0.02,
            "body:7": 0,
            "body:5": 0,
            "body:10": 0,
            "body:11": 0.01,
            "body:6": 0,
            "body:18": 0.06,
            "body:0": 0
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 1483,
        "output_tokens": 222
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1352.7758150000009,
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
        "segmentId": "body:17"
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
    "seq": 943,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-194",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:01.401Z",
    "offsetMs": 0.6846530000038911
  },
  {
    "seq": 944,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-194",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:02.084Z",
    "offsetMs": 683.3783009999897,
    "elapsedMs": 682.4352310000104,
    "outcome": "success"
  },
  {
    "seq": 945,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-194",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:02.086Z",
    "offsetMs": 685.5792509999883
  },
  {
    "seq": 946,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-194",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:02.753Z",
    "offsetMs": 1352.5540280000132,
    "elapsedMs": 666.6218359999766,
    "outcome": "success"
  },
  {
    "seq": 947,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-194",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:02.754Z",
    "offsetMs": 1352.8387820000062,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d1ac1664ab849735556db7f99c5898e20cdc2292d8225de7593cc1d6cd3680bb";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":944},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":946},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":947}} as const;
export const projectionSha256 = "c7a273463b20510ccc3d3ad3d78fe28ed7c50ed829c6b0188e6abac750f41141";
