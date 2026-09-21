import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-297",
  "inputSha256": "ab65a2b8fe74e5a577a4cdd1ac7ef701dca14fb23abbc12045f010eca276d1e4",
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
      "end": 95,
      "text": "Se amplía el plazo para el registro de candidatos a obtener el Premio Nacional de Ciencias 2025"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 45,
      "text": "Estimadas académicas y estimados académicos:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 45,
      "end": 46,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 46,
      "end": 395,
      "text": "La Secretaría de Educación Nacional (SEN) informa que se amplía hasta el 4 de diciembre el plazo para el registro y recepción de candidaturas para el Premio Nacional de Ciencia y Tecnología 2025, en consideración a las medidas establecidas por la Secretaría de Salud para la mitigación y control de los riesgos que implica la pandemia por COVID-19.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 395,
      "end": 396,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 396,
      "end": 623,
      "text": "La información completa se encuentra en la siguiente liga: https://www.gob.org/sen/articulos/boletin-no-999-se-amplia-el-plazo-para-el-registro-de-candidatos-a-obtener-el-premio-nacional-de-ciencia-y-tecnologia-2025-sen-888888?"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 623,
      "end": 632,
      "text": "idiom=es\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 632,
      "end": 633,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 633,
      "end": 646,
      "text": "Atentamente,\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 646,
      "end": 647,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 647,
      "end": 686,
      "text": "Sistema Nacional de Investigadores Av. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 686,
      "end": 709,
      "text": "Juárez Norte 3050 Col. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 709,
      "end": 837,
      "text": "Progreso Nacional CP 07950 CDMX Teléfono: 55 58 77 99 00 Ext. 3120 www.consejodeciencia.org.mxhttp://www.consejodeciencia.org.mx"
    }
  ],
  "passA": {
    "requestSha256": "34e80d2c6312d2bb56d1d544cb9d715fb529a96da5c4dd346a227e4977b4337f",
    "capturedAt": "2026-09-20T23:45:31.409Z",
    "elapsedMs": 161.3345410000038,
    "successfulAttemptElapsedMs": 159.45933300000615,
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
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.27
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.05,
            "informational": 0.95,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.93
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.05,
            "no_sensitive_action": 0.95,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3715,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "cf6b1d9ae2faf53cf744a10c1aa8a58b2a50c664c6a256bbfbc7e23566387de1",
    "capturedAt": "2026-09-21T00:57:27.311Z",
    "elapsedMs": 123.76720900000146,
    "successfulAttemptElapsedMs": 121.43566699999974,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:9": 0,
            "body:2": 0.49,
            "body:7": 0,
            "body:11": 0,
            "NONE": 0.47,
            "subject:0": 0.04,
            "body:10": 0,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:4": 0,
            "body:3": 0,
            "body:0": 0,
            "body:8": 0
          },
          "confidence": 0.44
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:9": 0.03,
            "body:2": 0.93,
            "body:7": 0,
            "body:11": 0,
            "NONE": 0.02,
            "subject:0": 0,
            "body:3": 0,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:4": 0,
            "body:10": 0,
            "body:0": 0.01,
            "body:8": 0
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 1976,
        "output_tokens": 299
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 431.0277079999978,
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
        "segmentId": "body:2"
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
    "seq": 1453,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-297",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:31.249Z",
    "offsetMs": 1.320499999987078
  },
  {
    "seq": 1454,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-297",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:31.409Z",
    "offsetMs": 161.33587499998976,
    "elapsedMs": 159.45933300000615,
    "outcome": "success"
  },
  {
    "seq": 1455,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-297",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:31.413Z",
    "offsetMs": 165.58445799999754
  },
  {
    "seq": 1456,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-297",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:31.553Z",
    "offsetMs": 305.7278329999972,
    "elapsedMs": 139.3178340000013,
    "outcome": "success"
  },
  {
    "seq": 1457,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-297",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:31.553Z",
    "offsetMs": 305.8432499999908,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2694,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-297",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:27.189Z",
    "offsetMs": 2.8490419999998267
  },
  {
    "seq": 2695,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-297",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:27.311Z",
    "offsetMs": 124.80324999999903,
    "elapsedMs": 121.43566699999974,
    "outcome": "success"
  },
  {
    "seq": 2696,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-297",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:27.311Z",
    "offsetMs": 125.1589589999985,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1b40139cf320075133cd41830f1a398de36cc671305e93596f9b05b6b5cc6d60";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1454},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2695},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2696}} as const;
export const projectionSha256 = "824535af562e12f8651553b0886d6348fff599cb91c6ef3778dc7a46113e547a";
