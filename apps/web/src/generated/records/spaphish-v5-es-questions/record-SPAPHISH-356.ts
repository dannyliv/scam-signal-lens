import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-356",
  "inputSha256": "88a6d95834f54885f16268eb2d7c17791653d5821e07f6ddb30433050cd7923a",
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
      "end": 70,
      "text": "Encuesta anónima de Universidad Iberoamericana Campus Ciudad de México"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 58,
      "text": "Roberto García, ¡esperamos que esté teniendo un buen día! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 81,
      "text": "El Departamento de RR. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 81,
      "end": 205,
      "text": "HH. está recopilando quejas/solicitudes/sugerencias de los empleados de Universidad Iberoamericana Campus Ciudad de México. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 205,
      "end": 295,
      "text": "Si tiene alguna queja/solicitud/sugerencia, puede escribirlas en el siguiente formulario. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 295,
      "end": 342,
      "text": "No se preocupe, es completamente confidencial. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 342,
      "end": 427,
      "text": "Puede encontrar el siguiente formulario: https://www.google-security.net/docs/255652\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 427,
      "end": 483,
      "text": " Si el enlace no abre, copie y péguelo en su navegador. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 483,
      "end": 544,
      "text": "Se aceptan sugerencias hasta el final de la jornada laboral. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 544,
      "end": 553,
      "text": "Gracias. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 553,
      "end": 636,
      "text": "Departamento de Recursos Humanos Universidad Iberoamericana Campus Ciudad de México"
    }
  ],
  "passA": {
    "requestSha256": "bdcd303c66212eaf6ce8a694b61f2df4c65fbdc9bab4af4fc6e9e6ba376a6370",
    "capturedAt": "2026-09-22T03:55:19.342Z",
    "elapsedMs": 659.5282050000387,
    "successfulAttemptElapsedMs": 658.3573890000116,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.22
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
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.77,
            "no_sensitive_action": 0.23
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 5046,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "589ce19ac78db784ef79e9f4e7884036f0280c850b60b0984ab7a4149d31de16",
    "capturedAt": "2026-09-22T03:55:19.893Z",
    "elapsedMs": 549.1677829999826,
    "successfulAttemptElapsedMs": 547.9486510000424,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.04,
            "body:0": 0,
            "body:2": 0.01,
            "subject:0": 0,
            "body:8": 0,
            "NONE": 0.7,
            "body:5": 0.25,
            "body:9": 0,
            "body:6": 0,
            "body:4": 0,
            "body:1": 0,
            "body:7": 0
          },
          "confidence": 0.66
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:3": 0,
            "body:0": 0,
            "body:1": 0,
            "body:2": 0,
            "body:8": 0,
            "body:5": 0,
            "NONE": 0.04,
            "body:9": 0,
            "body:6": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:7": 0.96
          },
          "confidence": 0.95
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.18,
            "body:0": 0,
            "body:7": 0,
            "body:9": 0.39,
            "body:8": 0,
            "NONE": 0,
            "body:5": 0,
            "subject:0": 0.01,
            "body:6": 0,
            "body:4": 0,
            "body:1": 0.39,
            "body:3": 0.03
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 2474,
        "output_tokens": 384
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1210.3533539999626,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "none_selected",
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
        "status": "selected",
        "segmentId": "body:7"
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1742,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-356",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:18.683Z",
    "offsetMs": 0.9328799999784678
  },
  {
    "seq": 1743,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-356",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:19.342Z",
    "offsetMs": 659.5287789999857,
    "elapsedMs": 658.3573890000116,
    "outcome": "success"
  },
  {
    "seq": 1744,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-356",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:19.344Z",
    "offsetMs": 661.8568889999879
  },
  {
    "seq": 1745,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-356",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:19.893Z",
    "offsetMs": 1210.1093339999788,
    "elapsedMs": 547.9486510000424,
    "outcome": "success"
  },
  {
    "seq": 1746,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-356",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:19.893Z",
    "offsetMs": 1210.3987369999522,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "841a275c056e4bf78c4b47644e21e88dec9d3359ee99263852f40a480a34f8c7";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1743},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1745},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1746}} as const;
export const projectionSha256 = "d79426c9849c293d4055bddb0d6de5c5253affa0193cf8eab684ab33cb66f4cb";
