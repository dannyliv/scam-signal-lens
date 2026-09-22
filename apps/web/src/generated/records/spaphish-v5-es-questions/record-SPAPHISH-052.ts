import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-052",
  "inputSha256": "1cb01389620cb619dec7f8493107bedcb5d6edcf6334677efe0ac25115d0e619",
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
      "end": 8,
      "text": "Maestria"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 39,
      "text": "Mateo, mira... donde trabajab Pepe....\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 39,
      "end": 40,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 40,
      "end": 111,
      "text": "¿Sabías que en la Unidad del CIETEX en Norvia tenemos una maestría que\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 111,
      "end": 166,
      "text": "pertenece al Sistema Nacional de Posgrado Tecnológico? "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 166,
      "end": 197,
      "text": "¿Que sus objetivos son \"Formar\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 197,
      "end": 271,
      "text": "recursos humanos altamente especializados con conocimientos y habilidades\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 271,
      "end": 340,
      "text": "multidisciplinarias que les permitan analizar, diseñar y desarrollar\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 340,
      "end": 414,
      "text": "dispositivos y sistemas inteligentes para atender problemas científicos y\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 414,
      "end": 434,
      "text": "tecnológicos ...\" ? "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 434,
      "end": 477,
      "text": "¿Que no se cobran colegiaturas o conceptos\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 477,
      "end": 491,
      "text": "equivalentes? "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 491,
      "end": 551,
      "text": "¿Que la Unidad del CIETEX en Norvia es un centro público de\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 551,
      "end": 579,
      "text": "investigación del CONAPTEC? "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 579,
      "end": 626,
      "text": "¿Que nuestros estudiantes tienen derecho a una\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 626,
      "end": 679,
      "text": "beca de posgrado, consistente en un apoyo económico? "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 679,
      "end": 702,
      "text": "y ¿Que la convocatoria\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 702,
      "end": 760,
      "text": "para ingresar en agosto de 2023 cierra a finales de mayo? "
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 760,
      "end": 775,
      "text": "Conéctate y te\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 775,
      "end": 788,
      "text": "contamos más."
    }
  ],
  "passA": {
    "requestSha256": "1bae0a7dee4c2d720e5d62cc9d661e6a86d5c22c9734048ae275cdbc0ca9ebe5",
    "capturedAt": "2026-09-22T03:49:14.505Z",
    "elapsedMs": 653.5078710000016,
    "successfulAttemptElapsedMs": 652.3662110000005,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.25
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.7
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.14
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.12,
            "active_request": 0.88,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.83
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.15,
            "no_sensitive_action": 0.84,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 5077,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "139320ee999836cdbf07ca206ab4c3829e5f957718517bab8cb407a865c3367e",
    "capturedAt": "2026-09-22T03:49:15.055Z",
    "elapsedMs": 547.3943609999988,
    "successfulAttemptElapsedMs": 546.5418090000021,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:16",
          "probabilities": {
            "body:11": 0,
            "body:10": 0,
            "body:16": 0.79,
            "body:3": 0,
            "NONE": 0.13,
            "body:15": 0.04,
            "body:14": 0,
            "body:5": 0,
            "body:1": 0,
            "body:13": 0,
            "body:0": 0,
            "body:6": 0,
            "body:7": 0,
            "body:18": 0,
            "body:2": 0,
            "body:12": 0,
            "body:8": 0,
            "body:17": 0.04,
            "subject:0": 0,
            "body:9": 0,
            "body:4": 0
          },
          "confidence": 0.77
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:11": 0.13,
            "body:17": 0.03,
            "body:16": 0,
            "body:14": 0.01,
            "NONE": 0.07,
            "body:15": 0,
            "body:3": 0.01,
            "body:5": 0,
            "body:1": 0,
            "body:6": 0,
            "body:0": 0.22,
            "body:13": 0.07,
            "body:7": 0,
            "body:18": 0.01,
            "body:2": 0.35000000000000003,
            "body:12": 0.08,
            "body:8": 0.01,
            "body:10": 0,
            "subject:0": 0,
            "body:9": 0,
            "body:4": 0
          },
          "confidence": 0.31
        }
      },
      "usage": {
        "input_tokens": 2116,
        "output_tokens": 440
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1203.8254789999992,
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
        "status": "selected",
        "segmentId": "body:16"
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
    "seq": 252,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-052",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:13.852Z",
    "offsetMs": 0.7496459999965737
  },
  {
    "seq": 253,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-052",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:14.505Z",
    "offsetMs": 653.5070899999992,
    "elapsedMs": 652.3662110000005,
    "outcome": "success"
  },
  {
    "seq": 254,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-052",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:14.508Z",
    "offsetMs": 656.4673199999961
  },
  {
    "seq": 255,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-052",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:15.055Z",
    "offsetMs": 1203.4102609999973,
    "elapsedMs": 546.5418090000021,
    "outcome": "success"
  },
  {
    "seq": 256,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-052",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:15.055Z",
    "offsetMs": 1203.8845619999993,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7b6ffad8d473c44721f23c99dbb9d6a8917e2137645e6a03129d002a8fd2f55e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":253},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":255},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":256}} as const;
export const projectionSha256 = "82b46ab837a81a94780644643b56bde34aeb9ac21e5ad3bb21b4d9ab6c82ecaf";
