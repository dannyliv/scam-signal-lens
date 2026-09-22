import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-084",
  "inputSha256": "8296ac3f7fd96252ac0cd0c817b38552cb911f64838c4e214224ef0615364410",
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
    "requestSha256": "655fc132e179d62230a923c700ab63e1d3222f18fa5f58b0fafaf03a9726efa6",
    "capturedAt": "2026-09-22T03:49:52.697Z",
    "elapsedMs": 673.0865219999978,
    "successfulAttemptElapsedMs": 671.8003289999906,
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
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
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
            "educational_or_quoted": 0,
            "informational": 0.17,
            "active_request": 0.83,
            "mixed_or_unclear": 0
          },
          "confidence": 0.76
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.04,
            "no_sensitive_action": 0.95,
            "independently_established": 0.01,
            "mixed_or_unknown": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 5079,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "86711f4977510f29ba6a7f33367db094d4a5bc3463d1b4d059d041f249eb331c",
    "capturedAt": "2026-09-22T03:49:53.275Z",
    "elapsedMs": 575.9684740000084,
    "successfulAttemptElapsedMs": 575.0855909999955,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0.02,
            "NONE": 0.02,
            "body:6": 0.01,
            "body:5": 0,
            "body:2": 0,
            "body:4": 0.82,
            "body:7": 0.06,
            "body:0": 0.06,
            "body:1": 0.01
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 1158,
        "output_tokens": 113
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1250.5857880000112,
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
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-084",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:52.025Z",
    "offsetMs": 0.7428740000032121
  },
  {
    "seq": 410,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-084",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:52.697Z",
    "offsetMs": 673.0862920000072,
    "elapsedMs": 671.8003289999906,
    "outcome": "success"
  },
  {
    "seq": 411,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-084",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:52.699Z",
    "offsetMs": 674.9226070000004
  },
  {
    "seq": 412,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-084",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:53.274Z",
    "offsetMs": 1250.3639690000127,
    "elapsedMs": 575.0855909999955,
    "outcome": "success"
  },
  {
    "seq": 413,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-084",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:53.275Z",
    "offsetMs": 1250.6340650000056,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f765c9f90b6d8fae9f29c9a8e24311cab8a39043ab9acabc860be351d6ae4220";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":410},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":412},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":413}} as const;
export const projectionSha256 = "045b0686aa807a539f4913a6ffe706a84bc0d1fc9d4798bc8c8f771b4cb1e460";
