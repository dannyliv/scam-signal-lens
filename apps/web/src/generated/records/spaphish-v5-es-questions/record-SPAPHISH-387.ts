import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-387",
  "inputSha256": "92ef7ace4e3dc656a6784aa583eaf98cf2de441bb1da2444098b9fb58a58674a",
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
      "end": 59,
      "text": "Recordatorio de registro de calificaciones para Verano 2025"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 37,
      "text": "Estimadas (os ) Investigadoras (es),\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 37,
      "end": 38,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 38,
      "end": 197,
      "text": "Esperando se encuentren bien; les informamos que SIRAC, ya se encuentra abierto para registrar sus calificaciones correspondientes al periodo de verano- 2025.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 197,
      "end": 198,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 198,
      "end": 272,
      "text": " - Apertura del sistema para registro del 14 al 17 de julio del presente.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 272,
      "end": 273,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 273,
      "end": 433,
      "text": "Se les pide por favor registrar en tiempo sus calificaciones directamente en el SIRAC, con su cuenta de usuario en la siguiente liga: https://sirac.MyOwnp.org/\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 433,
      "end": 434,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 434,
      "end": 578,
      "text": "Si tienen alguna duda sobre el proceso de carga de calificaciones pueden consultar el videotutorial en esta liga: https://www.youtube.com/watch?"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 578,
      "end": 612,
      "text": "v=SYNTH-VIDEO-ID&feature=youtu.be\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 612,
      "end": 613,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 613,
      "end": 721,
      "text": "Si por alguna razón, tiene problemas con su usuario, le pedimos enviar un correo a soporte_sirac@MyOwnp.org\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 721,
      "end": 722,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 722,
      "end": 769,
      "text": "Sin otro particular reciban cordiales saludos.\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 769,
      "end": 770,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 770,
      "end": 816,
      "text": "Administración SIRAC https://sirac.MyOwnp.org/"
    }
  ],
  "passA": {
    "requestSha256": "c3893eaca0f9268883d21c506388fce88817e52792479f2d2d399dbedddedf6d",
    "capturedAt": "2026-09-22T03:55:55.746Z",
    "elapsedMs": 545.9386020000093,
    "successfulAttemptElapsedMs": 544.5866420000093,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.5
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.13
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.4,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "sender_supplied": 0.58
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 5119,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "70eeeb4cbaff249ae7cadd5553b11973420e28edffc3593b1d43b4e4b88598c5",
    "capturedAt": "2026-09-22T03:55:56.292Z",
    "elapsedMs": 543.3597830000217,
    "successfulAttemptElapsedMs": 542.0413439999684,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:2": 0,
            "body:6": 0.6,
            "body:9": 0,
            "body:12": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:8": 0,
            "body:15": 0,
            "body:3": 0,
            "body:0": 0,
            "NONE": 0.13,
            "body:10": 0,
            "body:11": 0,
            "body:14": 0,
            "body:5": 0,
            "body:4": 0.27,
            "body:13": 0,
            "body:1": 0
          },
          "confidence": 0.57
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:15",
          "probabilities": {
            "body:2": 0.08,
            "body:6": 0.11,
            "body:9": 0,
            "body:12": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:8": 0,
            "body:15": 0.75,
            "body:3": 0,
            "body:0": 0.01,
            "NONE": 0,
            "body:10": 0,
            "body:11": 0.04,
            "body:14": 0,
            "body:5": 0,
            "body:4": 0,
            "body:13": 0.01,
            "body:1": 0
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 2152,
        "output_tokens": 380
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1091.780623000057,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
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
        "segmentId": "body:15"
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
    "seq": 1896,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-387",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:55.201Z",
    "offsetMs": 1.0541760000051
  },
  {
    "seq": 1897,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-387",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:55.746Z",
    "offsetMs": 545.9391980000073,
    "elapsedMs": 544.5866420000093,
    "outcome": "success"
  },
  {
    "seq": 1898,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-387",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:55.749Z",
    "offsetMs": 549.0580570000457
  },
  {
    "seq": 1899,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-387",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:56.291Z",
    "offsetMs": 1091.4957320000394,
    "elapsedMs": 542.0413439999684,
    "outcome": "success"
  },
  {
    "seq": 1900,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-387",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:56.292Z",
    "offsetMs": 1091.8306740000262,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5f7d1c1c6489be7577b88111a8e06c0b0efce4f6246d61737d9d3715ad469d12";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1897},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1899},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1900}} as const;
export const projectionSha256 = "8b610a8d10962cf4b5658400fcf598d17af0f7c4b8e701539f57834738b8f52d";
