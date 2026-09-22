import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-178",
  "inputSha256": "477f829fcfac5f73957c24cd484b72383d27a2d77387537b1436f37cc4de4288",
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
      "end": 79,
      "text": "Inscripto a \"Taller gratuito: Xilinx Vitis para aceleración y machine learning\""
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 56,
      "text": "From: Marcos Ortega – Centro Nova mOrtega@centronova.mx\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 56,
      "end": 57,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 57,
      "end": 171,
      "text": "Se ha preinscrito a \"Taller gratuito: Xilinx Vitis para aceleración y machine learning\" con los siguientes datos:\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 171,
      "end": 172,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 172,
      "end": 187,
      "text": "Nombre: Marcos\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 187,
      "end": 204,
      "text": "Apellido: Ortega\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 204,
      "end": 233,
      "text": "Email: mOrtega@centronova.mx\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 233,
      "end": 234,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 234,
      "end": 244,
      "text": "Teléfono:\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 244,
      "end": 265,
      "text": "Empresa: Centro Nova\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 265,
      "end": 281,
      "text": "Cursos Previos:\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 281,
      "end": 351,
      "text": "Tipo de inscripción: Xilinx Vitis para aceleración y machine learning\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 351,
      "end": 363,
      "text": "Comentario:\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 363,
      "end": 364,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 364,
      "end": 445,
      "text": "Una vez alcanzado el número mínimo de plazas, nos pondremos en contacto contigo.\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 445,
      "end": 476,
      "text": "Muchas gracias por tu interés.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 476,
      "end": 477,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 477,
      "end": 496,
      "text": "Un cordial saludo,\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 496,
      "end": 510,
      "text": "TecnoFormación"
    }
  ],
  "passA": {
    "requestSha256": "c53cdccd331c8623d6847fdaab95e13ad67e2536e800a6211215eb589848b7c5",
    "capturedAt": "2026-09-22T03:51:44.378Z",
    "elapsedMs": 634.08695300002,
    "successfulAttemptElapsedMs": 632.8278589999827,
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
          "noul": 0.08
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
          "noul": 0.82
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.99,
            "active_request": 0.01,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0.02,
            "independently_established": 0.01,
            "no_sensitive_action": 0.97
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 5037,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "9b7b9d81f3af46976bc150e27ce924221c11dd4ea70a36f81819f544bfa2ae1f",
    "capturedAt": "2026-09-22T03:51:44.910Z",
    "elapsedMs": 530.7432939999853,
    "successfulAttemptElapsedMs": 529.2229850000003,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:14": 0.02,
            "body:7": 0,
            "body:18": 0.13,
            "body:2": 0.04,
            "NONE": 0.23,
            "body:4": 0,
            "body:1": 0,
            "body:16": 0,
            "body:12": 0,
            "body:5": 0,
            "body:9": 0.05,
            "subject:0": 0.01,
            "body:8": 0,
            "body:3": 0,
            "body:15": 0,
            "body:6": 0,
            "body:11": 0.01,
            "body:10": 0,
            "body:17": 0,
            "body:13": 0,
            "body:0": 0.51
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 1222,
        "output_tokens": 221
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1166.41485500001,
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
    "seq": 865,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-178",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:43.745Z",
    "offsetMs": 0.8498470000049565
  },
  {
    "seq": 866,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-178",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:44.378Z",
    "offsetMs": 634.086524000013,
    "elapsedMs": 632.8278589999827,
    "outcome": "success"
  },
  {
    "seq": 867,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-178",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:44.380Z",
    "offsetMs": 636.3027329999895
  },
  {
    "seq": 868,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-178",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:44.910Z",
    "offsetMs": 1166.1971109999868,
    "elapsedMs": 529.2229850000003,
    "outcome": "success"
  },
  {
    "seq": 869,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-178",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:44.910Z",
    "offsetMs": 1166.4655419999908,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6b196213c8c69fd827e0e610f06f099982be378af75cb138e65440ba5be97fd9";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":866},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":868},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":869}} as const;
export const projectionSha256 = "05267320b8a0831d2f3ff2b424a38fa5027ef99d0bf1be12a23371dc97ba19da";
