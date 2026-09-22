import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-207",
  "inputSha256": "31d28ca87c5c855979e0a2779e8f4c94cfb74db0da32f83e00bf5e3d06aae07d",
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
      "end": 91,
      "text": "Ezequiela Miguelina -  🎯 Último aviso: programa tu entrega con FedEx T&T 🕵️‍♂️📦 ___🚚.. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 91,
      "end": 98,
      "text": "ID#8924"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 6,
      "text": "FedEx\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 6,
      "end": 7,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 7,
      "end": 27,
      "text": "¡Paquete pendiente!\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 27,
      "end": 28,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 28,
      "end": 71,
      "text": "Tienes un paquete esperando ser entregado.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 71,
      "end": 72,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 72,
      "end": 111,
      "text": "Usa tu código exclusivo para seguirlo. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 111,
      "end": 121,
      "text": "181619405\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 121,
      "end": 122,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 122,
      "end": 161,
      "text": "Entrega estimada: viernes, 19 de julio\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 161,
      "end": 162,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 162,
      "end": 178,
      "text": "Ver seguimiento\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 178,
      "end": 179,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 179,
      "end": 197,
      "text": "Programar entrega\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 197,
      "end": 198,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 198,
      "end": 263,
      "text": "Recibe recordatorios en tu calendario para no perder tu entrega.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 263,
      "end": 264,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 264,
      "end": 297,
      "text": "Gracias por confiar en nosotros. "
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 297,
      "end": 329,
      "text": "Tu entrega es nuestra prioridad."
    }
  ],
  "passA": {
    "requestSha256": "ad11799df7de7cf8aa1173acdd12e02bff8dc9159d489933cb24b4b067d05dd6",
    "capturedAt": "2026-09-22T03:52:17.863Z",
    "elapsedMs": 639.4868859999988,
    "successfulAttemptElapsedMs": 636.8669620000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.1
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.57
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.99,
            "informational": 0.01,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.29,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.7,
            "independently_established": 0
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 5009,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "caf2af361ad0169985dbb2e259f0f247f686b55a85e33ffac06d9c1288e32903",
    "capturedAt": "2026-09-22T03:52:18.830Z",
    "elapsedMs": 965.271166999999,
    "successfulAttemptElapsedMs": 964.0937690000283,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:9": 0.02,
            "body:8": 0,
            "body:3": 0,
            "body:6": 0,
            "NONE": 0.03,
            "body:1": 0,
            "body:18": 0,
            "body:16": 0,
            "body:12": 0,
            "body:0": 0,
            "subject:0": 0.88,
            "body:14": 0,
            "body:15": 0.04,
            "body:10": 0,
            "body:17": 0,
            "body:13": 0.02,
            "body:11": 0,
            "body:7": 0,
            "subject:1": 0,
            "body:5": 0,
            "body:2": 0.01,
            "body:4": 0
          },
          "confidence": 0.86
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:9": 0,
            "body:8": 0,
            "body:3": 0,
            "body:6": 0.01,
            "body:13": 0.04,
            "body:18": 0.03,
            "body:1": 0,
            "body:16": 0,
            "body:12": 0,
            "NONE": 0.11,
            "subject:0": 0.060000000000000005,
            "body:14": 0,
            "body:15": 0,
            "body:10": 0,
            "body:2": 0.01,
            "body:17": 0.01,
            "body:11": 0,
            "body:7": 0,
            "subject:1": 0,
            "body:5": 0,
            "body:0": 0.72,
            "body:4": 0.01
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 1940,
        "output_tokens": 457
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1606.4886340000085,
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
        "status": "selected",
        "segmentId": "subject:0"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 1007,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-207",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:17.226Z",
    "offsetMs": 2.2708630000124685
  },
  {
    "seq": 1008,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-207",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:17.863Z",
    "offsetMs": 639.4869910000125,
    "elapsedMs": 636.8669620000001,
    "outcome": "success"
  },
  {
    "seq": 1009,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-207",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:17.865Z",
    "offsetMs": 641.6015720000141
  },
  {
    "seq": 1010,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-207",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:18.830Z",
    "offsetMs": 1606.1792980000027,
    "elapsedMs": 964.0937690000283,
    "outcome": "success"
  },
  {
    "seq": 1011,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-207",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:18.830Z",
    "offsetMs": 1606.54596399999,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c9e9b0f1da27eaabf69e56ab703d04ed51e7e5544ed23c5a452b1a7a97c6226f";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1008},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1010},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1011}} as const;
export const projectionSha256 = "b8b661c4ec2f87e4337203dbebb564c6a7b5d0a73104e87ca8b55de31fadc7c4";
