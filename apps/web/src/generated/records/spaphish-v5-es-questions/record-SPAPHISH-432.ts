import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-432",
  "inputSha256": "49453bdbc113e0ad010e56f58b2ab6bcd571281bf7b5ba60d242dfedbba9a0bb",
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
      "end": 38,
      "text": "PAGO DE DÍAS ECONÓMICOS NO DISFRUTADOS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 16,
      "text": "C I R C U L A R\n"
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
      "end": 30,
      "text": "DAF/384/2019\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 30,
      "end": 31,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 31,
      "end": 53,
      "text": "31 DE OCTUBRE DE 2019\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 53,
      "end": 54,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 54,
      "end": 57,
      "text": "**\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 57,
      "end": 58,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 58,
      "end": 138,
      "text": "A TODO EL PERSONAL QUE TIENE DERECHO AL PAGO DE DÍAS ECONÓMICOS NO DISFRUTADOS.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 138,
      "end": 139,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 139,
      "end": 445,
      "text": "Con fundamento en la cláusula 145 fracción IX del Contrato Colectivo de Trabajo, se les comunica que para poder efectuar el cálculo de Días Económicos no Disfrutados en el presente año, se recibirán los permisos hasta el día 08 de noviembre de 2019, no importando que amparen días posteriores a esa fecha.\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 445,
      "end": 446,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 446,
      "end": 449,
      "text": "**\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 449,
      "end": 450,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 450,
      "end": 551,
      "text": "_En el entendido que después del 08 de noviembre de 2019 no se aceptarán permisos por ningún motivo. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 551,
      "end": 553,
      "text": "_\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 553,
      "end": 554,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 554,
      "end": 557,
      "text": "**\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 557,
      "end": 558,
      "text": "\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 558,
      "end": 580,
      "text": "A T E N T A M E N T E\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 580,
      "end": 581,
      "text": "\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 581,
      "end": 586,
      "text": "LIC. "
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 586,
      "end": 613,
      "text": "ROBERTO CARLOS LUNA CUEVAS\n"
    },
    {
      "id": "body:23",
      "source": "body",
      "start": 613,
      "end": 614,
      "text": "\n"
    },
    {
      "id": "body:24",
      "source": "body",
      "start": 614,
      "end": 653,
      "text": "DIRECTOR DE ADMINISTRACIÓN Y FINANZAS**"
    }
  ],
  "passA": {
    "requestSha256": "c4772f4d37eff0e475b362a08ac392d10e36e00f5ad117d9574ef77b1f76726f",
    "capturedAt": "2026-09-22T03:56:47.640Z",
    "elapsedMs": 589.7738900000113,
    "successfulAttemptElapsedMs": 587.9885060000233,
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
          "noul": 0.03
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
          "noul": 0.59
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
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
            "informational": 0.48,
            "active_request": 0.52,
            "educational_or_quoted": 0
          },
          "confidence": 0.36
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.99,
            "sender_supplied": 0.01,
            "independently_established": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 5122,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "da431d5ec2f938d468cfe782e60794abce65bdd99ffbdaf2696f9f82bc82b13d",
    "capturedAt": "2026-09-22T03:56:48.138Z",
    "elapsedMs": 495.0963089999859,
    "successfulAttemptElapsedMs": 493.38543900003424,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:7": 0,
            "body:15": 0,
            "body:6": 0,
            "body:21": 0,
            "body:12": 0,
            "body:8": 0,
            "body:10": 0.49,
            "NONE": 0.09999999999999999,
            "body:9": 0,
            "body:16": 0,
            "body:22": 0,
            "body:20": 0,
            "body:23": 0,
            "body:13": 0,
            "body:3": 0,
            "body:14": 0.41000000000000003,
            "body:24": 0,
            "body:1": 0,
            "body:19": 0,
            "body:2": 0,
            "body:11": 0,
            "body:17": 0,
            "body:5": 0,
            "body:0": 0,
            "body:18": 0,
            "body:4": 0,
            "subject:0": 0
          },
          "confidence": 0.46
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:24",
          "probabilities": {
            "body:7": 0,
            "body:15": 0,
            "body:6": 0,
            "body:21": 0.01,
            "body:12": 0,
            "body:8": 0,
            "body:10": 0.08,
            "NONE": 0.06,
            "body:9": 0,
            "body:22": 0.01,
            "body:13": 0.01,
            "body:20": 0,
            "body:23": 0,
            "body:16": 0,
            "body:3": 0,
            "body:14": 0,
            "body:11": 0,
            "body:1": 0,
            "body:19": 0,
            "body:2": 0,
            "body:24": 0.8200000000000001,
            "body:17": 0,
            "body:5": 0,
            "body:18": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:0": 0
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 2421,
        "output_tokens": 561
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1088.0258759999997,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:24"
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
    "seq": 2119,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-432",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:47.052Z",
    "offsetMs": 1.3894640000071377
  },
  {
    "seq": 2120,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-432",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:47.640Z",
    "offsetMs": 589.7753070000326,
    "elapsedMs": 587.9885060000233,
    "outcome": "success"
  },
  {
    "seq": 2121,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-432",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:47.644Z",
    "offsetMs": 593.8713459999999
  },
  {
    "seq": 2122,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-432",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:48.138Z",
    "offsetMs": 1087.6385759999976,
    "elapsedMs": 493.38543900003424,
    "outcome": "success"
  },
  {
    "seq": 2123,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-432",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:48.138Z",
    "offsetMs": 1088.0759650000255,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b1d028e16d4882f114a80030e746f4a68d225aa8c1a44efcefbdc5d200d3dde8";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2120},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2122},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2123}} as const;
export const projectionSha256 = "faf130aa07f022cb0aef3fd2961a616361a296e1a949aaa8f2571f5006d0f8dc";
