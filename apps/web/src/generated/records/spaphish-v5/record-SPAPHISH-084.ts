import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-084",
  "inputSha256": "8296ac3f7fd96252ac0cd0c817b38552cb911f64838c4e214224ef0615364410",
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
      "end": 61,
      "text": "ENTREGA DE AVANCES DE TESIS, VIERNES 4 DE JUNIO DE 2021, MCTS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 407,
      "text": "Estimad@ estudiante, Esperando se encuentre bien usted y su familia, me comunico con usted para comentarle que de acuerdo a su calendario de actividades, la fecha de presentación de proyecto final se realizará el día viernes 10 de enero, en la cual, usted deberá enviar por correo, un primer borrador escrito de su documento a sus revisores, para mostrar los avances generales obtenidos hasta este momento. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 407,
      "end": 463,
      "text": "Quedamos al pendiente de cualquier cosa para apoyarlos.\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 463,
      "end": 464,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 464,
      "end": 487,
      "text": "Saludos cordiales, Dr. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 487,
      "end": 579,
      "text": "Roberto Luna Rojas Representante docente de la Maestría en Innovación y Gestión Tecnológica\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 579,
      "end": 580,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 580,
      "end": 590,
      "text": "C.C.P Dr. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 590,
      "end": 711,
      "text": "Fernando Solís Díaz Coordinador de la Maestría en Innovación y Gestión Tecnológica Centro de Investigación Avanzada (CIA)"
    }
  ],
  "passA": {
    "requestSha256": "ad2d04df21a61e957baba9dcbbafe27fef2a838eb75b0b4d3b41f0a8fd1ae1e6",
    "capturedAt": "2026-09-20T23:44:18.575Z",
    "elapsedMs": 163.27987500000017,
    "successfulAttemptElapsedMs": 161.95900000000256,
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
          "noul": 0.16
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.14,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 0.86
          },
          "confidence": 0.8
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.97,
            "independently_established": 0.02,
            "sender_supplied": 0.01,
            "mixed_or_unknown": 0
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3629,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "cf117f8651fd87e1f00446b6825f3baa1a1f9793fe344e1014083469d77eb9f7",
    "capturedAt": "2026-09-20T23:44:18.716Z",
    "elapsedMs": 138.44937500000015,
    "successfulAttemptElapsedMs": 136.7278750000005,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "NONE": 0.01,
            "body:1": 0.01,
            "body:7": 0.11,
            "body:4": 0.77,
            "body:5": 0,
            "body:2": 0,
            "body:0": 0.08,
            "subject:0": 0,
            "body:3": 0.01,
            "body:6": 0.01
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 1058,
        "output_tokens": 113
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 304.65316600000006,
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
        "segmentId": "body:4"
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
    "seq": 409,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-084",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:18.412Z",
    "offsetMs": 0.7971660000002885
  },
  {
    "seq": 410,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-084",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:18.574Z",
    "offsetMs": 163.2792499999996,
    "elapsedMs": 161.95900000000256,
    "outcome": "success"
  },
  {
    "seq": 411,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-084",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:18.578Z",
    "offsetMs": 167.0142080000005
  },
  {
    "seq": 412,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-084",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:18.715Z",
    "offsetMs": 304.4250409999986,
    "elapsedMs": 136.7278750000005,
    "outcome": "success"
  },
  {
    "seq": 413,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-084",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:18.716Z",
    "offsetMs": 304.7047080000011,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5835bba70098bfe518eb485d34f7fba4a03e5db89ff62790310ee022b0e680c8";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":410},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":412},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":413}} as const;
export const projectionSha256 = "47a95a5fd1a279eb9c806a17412f9dc1ac2739bc83a12f563ffdad5fdf6d52aa";
