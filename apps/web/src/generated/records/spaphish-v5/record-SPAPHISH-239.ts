import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-239",
  "inputSha256": "429286edba98d2747b633ba7676b56c5000f17e6b583b002ac7854e4f39b9269",
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
      "end": 46,
      "text": "Solicitud Constancias de Asesor de Tesis, MCTS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 16,
      "text": "Buen día Sofía,\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 16,
      "end": 17,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 17,
      "end": 121,
      "text": "Espero estés muy bien, escribo para solicitar unas constancias de asesor de tesis, una a nombre del Dr. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 121,
      "end": 167,
      "text": "Ricardo Vargas FLORES y otra a nombre de: Dr. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 167,
      "end": 209,
      "text": "Javier Soto Durán (él es asesor externo). "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 209,
      "end": 243,
      "text": "Los datos de los estudiantes son:\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 243,
      "end": 244,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 244,
      "end": 424,
      "text": "Estudiante: Elena Sofía Durán Ríos Tema: Análisis de seguridad en protocolos de comunicación de IoT Directores: Ricardo Vargas FLORES (CIETEC), Javier Soto Durán (CITMEX-Sede Sur)\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 424,
      "end": 425,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 425,
      "end": 648,
      "text": "Estudiante: Daniel Flores Castillo Tema: Mitigación de riesgos en la privacidad de datos en redes inalámbricas Directores: Alejandro Ríos Suárez (CIETEC), Ricardo Vargas FLORES (CIETEC), Javier Soto Durán (CITMEX-Sede Sur)\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 648,
      "end": 649,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 649,
      "end": 687,
      "text": "Quedo al pendiente de cualquier cosa,\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 687,
      "end": 688,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 688,
      "end": 700,
      "text": "saludos Dr. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 700,
      "end": 712,
      "text": "Javier Pérez"
    }
  ],
  "passA": {
    "requestSha256": "2daccbd5fa419e8a3f08a250a4f46c5ece8195a30ee20510390856c96f54aa43",
    "capturedAt": "2026-09-20T23:45:10.484Z",
    "elapsedMs": 231.80362500000047,
    "successfulAttemptElapsedMs": 229.87024999999267,
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
          "noul": 0.04
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
          "noul": 0.77
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
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.01,
            "no_sensitive_action": 0.96,
            "independently_established": 0.03,
            "mixed_or_unknown": 0
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3639,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "5cbea3c05d18e183eb0aa595f55c902b39becb9e7eedf5c850b9df57ffcd17cb",
    "capturedAt": "2026-09-21T00:57:24.138Z",
    "elapsedMs": 135.44154200000048,
    "successfulAttemptElapsedMs": 133.23350000000028,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:9": 0.01,
            "body:6": 0,
            "subject:0": 0.08,
            "body:14": 0.25,
            "body:10": 0,
            "body:2": 0.13,
            "body:12": 0.01,
            "NONE": 0.05,
            "body:0": 0,
            "body:7": 0.03,
            "body:11": 0.01,
            "body:8": 0.01,
            "body:4": 0.09,
            "body:13": 0.32,
            "body:1": 0,
            "body:3": 0.01,
            "body:5": 0
          },
          "confidence": 0.27
        }
      },
      "usage": {
        "input_tokens": 1178,
        "output_tokens": 182
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 511.98795899999095,
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
    "seq": 1168,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-239",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:10.253Z",
    "offsetMs": 1.3112499999988358
  },
  {
    "seq": 1169,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-239",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:10.484Z",
    "offsetMs": 231.80654199999117,
    "elapsedMs": 229.87024999999267,
    "outcome": "success"
  },
  {
    "seq": 1170,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-239",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:10.487Z",
    "offsetMs": 235.00212499999907
  },
  {
    "seq": 1171,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-239",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:10.627Z",
    "offsetMs": 375.1886669999949,
    "elapsedMs": 139.53087499999674,
    "outcome": "success"
  },
  {
    "seq": 1172,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-239",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:10.627Z",
    "offsetMs": 375.3319169999886,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2638,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-239",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:24.004Z",
    "offsetMs": 2.6984170000014274
  },
  {
    "seq": 2639,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-239",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:24.138Z",
    "offsetMs": 136.41145900000083,
    "elapsedMs": 133.23350000000028,
    "outcome": "success"
  },
  {
    "seq": 2640,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-239",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:24.138Z",
    "offsetMs": 136.56487500000003,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a374829133c9f4ac67172834baa76c62f77dec631c92709a330d68b78034ec84";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1169},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2639},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2640}} as const;
export const projectionSha256 = "34128cffc2e1137f315979b6759fac7a8e1634a4ab9e306cafa126079e7df29d";
