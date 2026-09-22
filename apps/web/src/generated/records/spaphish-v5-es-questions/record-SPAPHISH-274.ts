import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-274",
  "inputSha256": "0e29b2cd26a297a3531237f368bb9e96e97155cb5d4c96ea42dd4c2f4eaa4c40",
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
      "end": 48,
      "text": "Responsabilidad y apoyo en el regreso escalonado"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 45,
      "text": "Santa María, Hidalgo a 31 de agosto de 2025.\n"
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
      "end": 76,
      "text": "Estimada comunidad de CIETEC:\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 76,
      "end": 77,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 77,
      "end": 333,
      "text": "El personal de CIETEC, en particular el grupo que elaboró el protocolo de regreso seguro y el personal que asiste diariamente, han hecho un esfuerzo formidable para garantizar, en la medida de lo posible, la seguridad sanitaria de la comunidad CIETECista.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 333,
      "end": 334,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 334,
      "end": 462,
      "text": "Les solicito a todos los que han estado ingresando a CIETEC, y los que lo harán en las próximas semanas, respeto y solidaridad. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 462,
      "end": 609,
      "text": "Hoy nos hemos dado cuenta que varios dispensadores de gel antibacterial fueron removidos de los pedestales que se colocaron en diversos edificios. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 609,
      "end": 730,
      "text": "Los insumos de CIETEC son para bien de toda la comunidad, por lo que pido que no remuevan los dispensadores de su lugar.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 730,
      "end": 731,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 731,
      "end": 748,
      "text": "Saludos, Rodolfo\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 748,
      "end": 749,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 749,
      "end": 753,
      "text": "Dr. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 753,
      "end": 764,
      "text": "Rodolfo E. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 764,
      "end": 775,
      "text": "Jiménez P. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 775,
      "end": 798,
      "text": "Director General CIETEC"
    }
  ],
  "passA": {
    "requestSha256": "7969c009941f781de2a97da7ba4b935e138b2a98b366272c0f0d73892debf997",
    "capturedAt": "2026-09-22T03:53:39.787Z",
    "elapsedMs": 751.527260999952,
    "successfulAttemptElapsedMs": 750.1047929999768,
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
          "noul": 0.97
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
          "choice": "active_request",
          "probabilities": {
            "informational": 0.01,
            "active_request": 0.99,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "no_sensitive_action": 1,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5092,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "03a6ed9858b5ce7e20c75adfe2791a5ef4d149b5a1d8a1b04917294b4772d38a",
    "capturedAt": "2026-09-22T03:53:40.317Z",
    "elapsedMs": 528.8990900000208,
    "successfulAttemptElapsedMs": 527.6684770000284,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:15",
          "probabilities": {
            "NONE": 0,
            "body:11": 0,
            "body:2": 0,
            "body:5": 0,
            "body:6": 0.03,
            "body:14": 0,
            "body:0": 0,
            "body:8": 0.06,
            "body:7": 0,
            "subject:0": 0,
            "body:15": 0.87,
            "body:10": 0,
            "body:4": 0.02,
            "body:3": 0,
            "body:12": 0.02,
            "body:9": 0,
            "body:1": 0,
            "body:13": 0
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 1295,
        "output_tokens": 192
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1282.1420700000017,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1338,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-274",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:39.036Z",
    "offsetMs": 1.0196320000104606
  },
  {
    "seq": 1339,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-274",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:39.787Z",
    "offsetMs": 751.532062000013,
    "elapsedMs": 750.1047929999768,
    "outcome": "success"
  },
  {
    "seq": 1340,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-274",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:39.789Z",
    "offsetMs": 753.9010719999787
  },
  {
    "seq": 1341,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-274",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:40.317Z",
    "offsetMs": 1281.9347730000154,
    "elapsedMs": 527.6684770000284,
    "outcome": "success"
  },
  {
    "seq": 1342,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-274",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:40.317Z",
    "offsetMs": 1282.191136999987,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e1c44f96814e42ff36e75103c4eecbeece55a77467d5be37fbdd4735724525f4";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1339},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1341},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1342}} as const;
export const projectionSha256 = "686cc8fc7df0f5083431a331d7e6d6fcc301ea675259b2d12e1b2f1ec3adae45";
