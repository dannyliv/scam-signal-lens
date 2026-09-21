import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-038",
  "inputSha256": "1943a9a3431eb999f1d404d32018aaed8fab9256ccf58915e4826bf127e63a8a",
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
      "end": 22,
      "text": "CIRCULAR 12 DE OCTUBRE"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 9,
      "text": "CIRCULAR\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 9,
      "end": 10,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 10,
      "end": 14,
      "text": "No. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 14,
      "end": 26,
      "text": "DRH/08/2020\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 26,
      "end": 27,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 27,
      "end": 47,
      "text": "NOVIEMBRE 2 DE 2020\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 47,
      "end": 48,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 48,
      "end": 101,
      "text": "A TODA LA COMUNIDAD DEL Servicios de Tecnología S.A.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 101,
      "end": 102,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 102,
      "end": 336,
      "text": "ME PERMITO COMUNICARLES QUE CON MOTIVO DEL ANIVERSARIO DEL DESCUBRIMIENTO DE AMÉRICA EL LUNES 13 DE OCTUBRE DEL AÑO EN CURSO, SE SUSPENDEN LAS LABORES PARA EL PERSONAL DE BASE, REANUDANDO ACTIVIDADES EL MARTES 14 DEL MISMO MES Y AÑO.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 336,
      "end": 337,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 337,
      "end": 371,
      "text": "ESE DÍA NO HABRÁ SERVICIO MÉDICO.\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 371,
      "end": 372,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 372,
      "end": 385,
      "text": "ATENTAMENTE.\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 385,
      "end": 386,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 386,
      "end": 391,
      "text": "LIC. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 391,
      "end": 416,
      "text": "ROBERTO CARLOS LUNA DÍAZ\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 416,
      "end": 417,
      "text": "\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 417,
      "end": 488,
      "text": "ENCARGADO DEL DESPACHO DE LOS ASUNTOS DE LA DIRECCIÓN DE CAPITAL HUMANO"
    }
  ],
  "passA": {
    "requestSha256": "d7a1fbff6875b7ad303f3f3916ac743090b0d121984ef5f5fc0541c8840caa0a",
    "capturedAt": "2026-09-20T23:44:03.669Z",
    "elapsedMs": 166.20524999999907,
    "successfulAttemptElapsedMs": 164.8496669999986,
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
          "noul": 0.92
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
            "educational_or_quoted": 0,
            "active_request": 0
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
        "input_tokens": 3621,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "5dbd646af3dd1aed11c7596587e03e47e09daff4ddd93aae011b491b00e9e99b",
    "capturedAt": "2026-09-21T00:57:16.103Z",
    "elapsedMs": 132.26220899999998,
    "successfulAttemptElapsedMs": 130.2085830000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:18",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:7": 0.02,
            "body:4": 0,
            "NONE": 0,
            "body:3": 0,
            "body:16": 0,
            "body:5": 0,
            "body:13": 0,
            "body:18": 0.93,
            "body:17": 0,
            "body:6": 0,
            "body:10": 0,
            "body:11": 0,
            "body:2": 0,
            "body:1": 0,
            "body:9": 0.02,
            "body:8": 0,
            "body:12": 0,
            "body:14": 0,
            "body:15": 0.02
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 1194,
        "output_tokens": 222
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 447.37070900000117,
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
        "segmentId": "body:18"
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
    "seq": 183,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-038",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:03.503Z",
    "offsetMs": 0.8199590000003809
  },
  {
    "seq": 184,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-038",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:03.668Z",
    "offsetMs": 166.20233400000143,
    "elapsedMs": 164.8496669999986,
    "outcome": "success"
  },
  {
    "seq": 185,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-038",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:03.671Z",
    "offsetMs": 168.64466700000048
  },
  {
    "seq": 186,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-038",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:03.816Z",
    "offsetMs": 313.63837500000045,
    "elapsedMs": 144.49791600000026,
    "outcome": "success"
  },
  {
    "seq": 187,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-038",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:03.816Z",
    "offsetMs": 313.82470900000044,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2492,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-038",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:15.972Z",
    "offsetMs": 2.3316670000003796
  },
  {
    "seq": 2493,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-038",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:16.102Z",
    "offsetMs": 132.9988330000001,
    "elapsedMs": 130.2085830000001,
    "outcome": "success"
  },
  {
    "seq": 2494,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-038",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:16.103Z",
    "offsetMs": 133.48566700000038,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8fce2a46c0d6d8d52431e6f9f0ff54e8d16577b2ed4c7081f26e2ef3220bff33";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":184},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2493},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2494}} as const;
export const projectionSha256 = "001e9cec1e304c88df4e282bda27c27ba00bfdde5fa10c9ef0e77c4614be067d";
