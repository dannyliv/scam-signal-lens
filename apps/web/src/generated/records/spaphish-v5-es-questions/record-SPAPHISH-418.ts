import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-418",
  "inputSha256": "28bc47015360c4318579dd9e92b8cc12ed9076e67e5063e82e0b6d4e6ff1503d",
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
      "end": 13,
      "text": "DIA DE ASUETO"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 24,
      "text": "Apreciables Presidentes\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 24,
      "end": 53,
      "text": "Fraccionamiento Valle Sereno\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 53,
      "end": 63,
      "text": "Presente.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 63,
      "end": 64,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 64,
      "end": 91,
      "text": "Residentes, buenas tardes.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 91,
      "end": 92,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 92,
      "end": 119,
      "text": "Reciban un cordial saludo!\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 119,
      "end": 120,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 120,
      "end": 184,
      "text": "Les informamos que el personal de privada NOVA Administración y\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 184,
      "end": 196,
      "text": "jardinería,\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 196,
      "end": 260,
      "text": "Laborarán el día de mañana 15 de Septiembre hasta las 14:00 hrs\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 260,
      "end": 261,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 261,
      "end": 324,
      "text": "Viernes 16 de Septiembre NO SE LABORARÁ por ser día de asueto.\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 324,
      "end": 395,
      "text": "Por lo que no habrá actividades de jardinería y recolección de basura.\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 395,
      "end": 396,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 396,
      "end": 464,
      "text": "Solicitamos de su apoyo para: NO sacar bolsas con desechos y evitar\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 464,
      "end": 519,
      "text": "así malos olores, mala imágen, derrames y fauna nociva\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 519,
      "end": 520,
      "text": "\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 520,
      "end": 554,
      "text": "Gracias, por su atención y apoyo.\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 554,
      "end": 555,
      "text": "\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 555,
      "end": 561,
      "text": "Atte.\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 561,
      "end": 586,
      "text": "María Fernanda Ríos C. y\n"
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 586,
      "end": 605,
      "text": "Mesa Directiva-NOVA"
    }
  ],
  "passA": {
    "requestSha256": "6df26792046e4b53b8698a3826a67bb1fe6a9c087c6b8689a604e4d44952a75a",
    "capturedAt": "2026-09-22T03:56:31.248Z",
    "elapsedMs": 596.650569999998,
    "successfulAttemptElapsedMs": 594.6060979999602,
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
          "noul": 0.57
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
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
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0.98,
            "educational_or_quoted": 0,
            "informational": 0.02
          },
          "confidence": 0.98
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
        "input_tokens": 5073,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "1d4a4761be76acd733b30aae8cb724fef0cda8160b525d0ba88ace7a94f45e6f",
    "capturedAt": "2026-09-22T03:56:31.740Z",
    "elapsedMs": 489.7166839999845,
    "successfulAttemptElapsedMs": 487.54507700004615,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:15",
          "probabilities": {
            "body:10": 0.02,
            "body:11": 0,
            "subject:0": 0,
            "body:18": 0,
            "body:7": 0,
            "body:19": 0,
            "body:14": 0,
            "body:22": 0,
            "body:16": 0.34,
            "body:5": 0,
            "body:9": 0,
            "body:21": 0,
            "body:0": 0,
            "body:6": 0,
            "body:1": 0,
            "body:8": 0,
            "body:17": 0,
            "body:2": 0,
            "body:13": 0,
            "NONE": 0.2,
            "body:20": 0,
            "body:15": 0.44,
            "body:3": 0,
            "body:4": 0,
            "body:12": 0
          },
          "confidence": 0.41
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:22",
          "probabilities": {
            "body:19": 0,
            "body:11": 0,
            "subject:0": 0,
            "body:18": 0,
            "body:7": 0,
            "body:14": 0,
            "body:10": 0,
            "body:16": 0,
            "body:22": 0.5,
            "body:5": 0,
            "body:9": 0.01,
            "body:21": 0.02,
            "body:0": 0.01,
            "body:6": 0,
            "body:1": 0,
            "body:2": 0,
            "body:17": 0,
            "body:8": 0.35000000000000003,
            "body:13": 0,
            "NONE": 0.01,
            "body:20": 0,
            "body:15": 0.1,
            "body:3": 0,
            "body:4": 0,
            "body:12": 0
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 2208,
        "output_tokens": 521
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1088.7859310000204,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2049,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-418",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:30.653Z",
    "offsetMs": 1.669478000025265
  },
  {
    "seq": 2050,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-418",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:31.248Z",
    "offsetMs": 596.6503989999765,
    "elapsedMs": 594.6060979999602,
    "outcome": "success"
  },
  {
    "seq": 2051,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-418",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:31.252Z",
    "offsetMs": 600.2412759999861
  },
  {
    "seq": 2052,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-418",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:31.740Z",
    "offsetMs": 1088.3329629999935,
    "elapsedMs": 487.54507700004615,
    "outcome": "success"
  },
  {
    "seq": 2053,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-418",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:31.740Z",
    "offsetMs": 1088.856305000023,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2ec3a973cf56965d2889217ae48417296b7a5404a9c2160196b0581a19f9622b";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2050},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2052},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2053}} as const;
export const projectionSha256 = "677afcb8c2e52e01ee48ded399a6fdc96e1cfdf278705ce525cf27a090be4598";
