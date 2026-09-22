import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-239",
  "inputSha256": "429286edba98d2747b633ba7676b56c5000f17e6b583b002ac7854e4f39b9269",
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
    "requestSha256": "e5c7addf3286a4d9430502dad57a5c98d2d31a64b93acbacfc16e2c7bcfda9e0",
    "capturedAt": "2026-09-22T03:52:55.335Z",
    "elapsedMs": 608.8095660000108,
    "successfulAttemptElapsedMs": 607.3932400000049,
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
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
            "sender_supplied": 0,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 5089,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "ed3158c4442434201ddee1a0a51fff8e85939a8c3c83d0536d051178d8363c9e",
    "capturedAt": "2026-09-22T03:52:55.864Z",
    "elapsedMs": 527.4457469999907,
    "successfulAttemptElapsedMs": 525.9825100000016,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:14",
          "probabilities": {
            "NONE": 0.04,
            "body:12": 0.01,
            "body:4": 0.01,
            "body:10": 0,
            "body:7": 0.01,
            "body:2": 0.11,
            "body:9": 0.01,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:14": 0.42,
            "body:11": 0.01,
            "subject:0": 0.05,
            "body:3": 0.01,
            "body:13": 0.31,
            "body:8": 0.01,
            "body:0": 0
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 1278,
        "output_tokens": 182
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1138.5815929999808,
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
    "seq": 1164,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-239",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:54.726Z",
    "offsetMs": 0.8034449999686331
  },
  {
    "seq": 1165,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-239",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:55.334Z",
    "offsetMs": 608.8088729999727,
    "elapsedMs": 607.3932400000049,
    "outcome": "success"
  },
  {
    "seq": 1166,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-239",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:55.337Z",
    "offsetMs": 612.0142019999912
  },
  {
    "seq": 1167,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-239",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:55.864Z",
    "offsetMs": 1138.3556439999957,
    "elapsedMs": 525.9825100000016,
    "outcome": "success"
  },
  {
    "seq": 1168,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-239",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:55.864Z",
    "offsetMs": 1138.623322999978,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "37e65479205cb77d10ee703ba7d7bcbcca0c6908ae8c95bfde31261d1f902621";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1165},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1167},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1168}} as const;
export const projectionSha256 = "78f76f8b1bdff4f07c40b380c0b914f45b5b34ce1ffd6484aaca555b9af7b335";
