import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-418",
  "inputSha256": "28bc47015360c4318579dd9e92b8cc12ed9076e67e5063e82e0b6d4e6ff1503d",
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
    "requestSha256": "6819de6ddf0277eb9d8749ecf899768bb4a0cae3acc2800ac6e1bf8bdcb1195b",
    "capturedAt": "2026-09-20T23:46:12.320Z",
    "elapsedMs": 184.87145900001633,
    "successfulAttemptElapsedMs": 182.9502499999944,
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
          "noul": 0.71
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
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
            "informational": 0.01,
            "mixed_or_unclear": 0,
            "active_request": 0.99,
            "educational_or_quoted": 0
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "sender_supplied": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3623,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "68a5caba6130fa763d55454cc7f9b5fe7e126db928f55846486937913a3adecb",
    "capturedAt": "2026-09-21T00:57:31.925Z",
    "elapsedMs": 114.86445800000001,
    "successfulAttemptElapsedMs": 112.9623750000028,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:15",
          "probabilities": {
            "body:22": 0,
            "body:14": 0,
            "body:10": 0.01,
            "body:16": 0.29000000000000004,
            "body:1": 0,
            "body:17": 0,
            "body:0": 0,
            "body:11": 0,
            "body:7": 0,
            "NONE": 0.14,
            "body:20": 0,
            "body:4": 0,
            "body:5": 0,
            "body:13": 0.01,
            "body:21": 0,
            "body:8": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:12": 0,
            "body:19": 0,
            "body:6": 0,
            "body:15": 0.54,
            "body:9": 0,
            "body:18": 0
          },
          "confidence": 0.51
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:22",
          "probabilities": {
            "body:14": 0,
            "body:22": 0.74,
            "body:16": 0,
            "body:10": 0,
            "body:1": 0.01,
            "body:17": 0,
            "body:21": 0.02,
            "body:11": 0,
            "body:7": 0,
            "NONE": 0.01,
            "body:20": 0,
            "body:4": 0,
            "body:13": 0,
            "body:0": 0.01,
            "body:5": 0,
            "body:8": 0.11,
            "body:2": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:12": 0,
            "body:19": 0,
            "body:6": 0,
            "body:15": 0.09,
            "body:9": 0.01,
            "body:18": 0
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 2006,
        "output_tokens": 521
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 546.5300009999773,
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
        "status": "selected",
        "segmentId": "body:22"
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
    "seq": 2051,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-418",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:12.137Z",
    "offsetMs": 1.4367919999931473
  },
  {
    "seq": 2052,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-418",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:12.320Z",
    "offsetMs": 184.90345799998613,
    "elapsedMs": 182.9502499999944,
    "outcome": "success"
  },
  {
    "seq": 2053,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-418",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:12.324Z",
    "offsetMs": 188.8100829999894
  },
  {
    "seq": 2054,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-418",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:12.565Z",
    "offsetMs": 429.9707079999789,
    "elapsedMs": 240.34483399998862,
    "outcome": "success"
  },
  {
    "seq": 2055,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-418",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:12.566Z",
    "offsetMs": 430.31916699997964,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2779,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-418",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:31.811Z",
    "offsetMs": 2.4031249999970896
  },
  {
    "seq": 2780,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-418",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:31.925Z",
    "offsetMs": 115.79762499999924,
    "elapsedMs": 112.9623750000028,
    "outcome": "success"
  },
  {
    "seq": 2781,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-418",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:31.925Z",
    "offsetMs": 116.12574999999924,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1a98aadb40e92eea7702599af37480623b912675784ab04aea255ec2eee00267";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2052},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2780},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2781}} as const;
export const projectionSha256 = "aca0a7d84be5e8ef75044f813cc501c96109f4f3bdb734012f3af10ebe9d269b";
