import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-195",
  "inputSha256": "f8dc3147f266d36400ce2353542a76058853a0a4030c76a9f463c3954dc5cf62",
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
      "end": 90,
      "text": "AVISO: ENTREGA DE AVANCES DE TESIS CORRESPONDIENTES A ABRIL DE 2025- MAESTRÍA EN SEGURIDAD"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 23,
      "text": "Estimados estudiantes,\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 23,
      "end": 92,
      "text": "Antes que nada, esperando que se encuentren bien y también sus seres\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 92,
      "end": 102,
      "text": "queridos. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 102,
      "end": 168,
      "text": "Les comento que tuvimos una reunión con la academia de profesores\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 168,
      "end": 242,
      "text": "y se decidió posponer la entrega programada para este viernes para el día\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 242,
      "end": 273,
      "text": "viernes 8 de mayo de 9-12 hrs. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 273,
      "end": 316,
      "text": "La presentación será vía remota, para ello\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 316,
      "end": 392,
      "text": "deberán preparar una presentación de sus avances y los profesores evaluarán\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 392,
      "end": 414,
      "text": "su trabajo realizado. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 414,
      "end": 463,
      "text": "En lo próximo recibirán un link con los datos de\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 463,
      "end": 471,
      "text": "acceso. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 471,
      "end": 513,
      "text": "Manténganse en contacto con sus asesores. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 513,
      "end": 532,
      "text": "Reciban un cordial\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 532,
      "end": 540,
      "text": "saludo.\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 540,
      "end": 541,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 541,
      "end": 546,
      "text": "Att. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 546,
      "end": 567,
      "text": "Ricardo López García\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 567,
      "end": 589,
      "text": "Representante Docente\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 589,
      "end": 631,
      "text": "Maestría en Sistemas y Análisis de Riesgos"
    }
  ],
  "passA": {
    "requestSha256": "2ccd236861a0d2a98d0c832291ff8300caecf1693b3ff4db3928796099efc780",
    "capturedAt": "2026-09-22T03:52:03.412Z",
    "elapsedMs": 656.9249439999985,
    "successfulAttemptElapsedMs": 655.8392520000052,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.18
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.11
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.28
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.34,
            "active_request": 0.66,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.54
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0.01,
            "no_sensitive_action": 0.89,
            "sender_supplied": 0.09
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 5076,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "2549a6081806c672c9ef3c640d93727d92f9a85031dc0c8f7f5a778b8f372d76",
    "capturedAt": "2026-09-22T03:52:03.972Z",
    "elapsedMs": 558.0734499999962,
    "successfulAttemptElapsedMs": 557.2088870000152,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:17",
          "probabilities": {
            "body:14": 0,
            "body:18": 0.02,
            "NONE": 0.01,
            "body:2": 0,
            "body:7": 0,
            "body:1": 0,
            "body:4": 0,
            "body:16": 0.01,
            "body:12": 0,
            "body:5": 0,
            "body:9": 0,
            "body:3": 0.01,
            "body:8": 0,
            "subject:0": 0,
            "body:15": 0.01,
            "body:6": 0,
            "body:11": 0.01,
            "body:10": 0,
            "body:17": 0.93,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.92
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "body:14": 0,
            "body:7": 0,
            "body:18": 0,
            "body:2": 0,
            "NONE": 0.38,
            "body:1": 0,
            "body:4": 0.01,
            "body:12": 0,
            "body:16": 0,
            "body:5": 0,
            "body:9": 0.02,
            "subject:0": 0,
            "body:10": 0.01,
            "body:8": 0.01,
            "body:15": 0,
            "body:3": 0,
            "body:11": 0.56,
            "body:6": 0,
            "body:17": 0,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 2128,
        "output_tokens": 444
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1216.8844180000015,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:17"
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
        "status": "low_confidence",
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
    "seq": 948,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-195",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:02.756Z",
    "offsetMs": 0.7075729999924079
  },
  {
    "seq": 949,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-195",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:03.412Z",
    "offsetMs": 656.9257679999864,
    "elapsedMs": 655.8392520000052,
    "outcome": "success"
  },
  {
    "seq": 950,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-195",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:03.414Z",
    "offsetMs": 659.0446179999853
  },
  {
    "seq": 951,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-195",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:03.971Z",
    "offsetMs": 1216.567704999994,
    "elapsedMs": 557.2088870000152,
    "outcome": "success"
  },
  {
    "seq": 952,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-195",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:03.972Z",
    "offsetMs": 1216.9493150000053,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d7ff06fc9c49bf5d7a8bb9c600c657bf80ce69650c57b1e422be3e4b79093f67";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":949},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":951},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":952}} as const;
export const projectionSha256 = "20b706793a29d65f0ebaabbbadeb917065ae46d69aaa9aa35d45ff6c646e2c01";
