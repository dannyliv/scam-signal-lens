import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-253",
  "inputSha256": "6a7947a8294cb2dd42caa8f05fbbe1adb16ebc7b2cc32898f3663ca939fd0060",
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
      "end": 39,
      "text": "¿Buscas nuevas oportunidades laborales?"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 44,
      "text": "No te pierdas ni una sola oferta de trabajo\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 44,
      "end": 45,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 45,
      "end": 114,
      "text": "Dinos qué ofertas de trabajo te interesan, te costará sólo un minuto\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 114,
      "end": 115,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 115,
      "end": 140,
      "text": "¿ESTÁS BUSCANDO TRABAJO?\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 140,
      "end": 141,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 141,
      "end": 236,
      "text": "No pierdas tu oportunidad, dinos qué ofertas de trabajo te interesan, te costará sólo 1 minuto\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 236,
      "end": 237,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 237,
      "end": 253,
      "text": "RECIBIR OFERTAS\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 253,
      "end": 254,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 254,
      "end": 289,
      "text": "Te esperamos en EmpleosDirecto.com\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 289,
      "end": 290,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 290,
      "end": 300,
      "text": "Un saludo\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 300,
      "end": 301,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 301,
      "end": 364,
      "text": "Prueba gratis el servicio Premium con este código: UNMESGRATIS\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 364,
      "end": 365,
      "text": "\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 365,
      "end": 381,
      "text": "Baja del boletín"
    }
  ],
  "passA": {
    "requestSha256": "a94f86d58b50bde0a13886479032ea2a8d6686d44a53e2b471cdb7b1cb00b4f4",
    "capturedAt": "2026-09-22T03:53:13.206Z",
    "elapsedMs": 635.8468219999922,
    "successfulAttemptElapsedMs": 634.6991580000031,
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
          "noul": 0.08
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.33
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.17
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.12
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.04
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.59,
            "sender_supplied": 0.4,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 4987,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "dcbcea1a2975a427db7065feb4e77257c3c623e471c7018ab95c2c64ef767a06",
    "capturedAt": "2026-09-22T03:53:13.850Z",
    "elapsedMs": 642.3199359999853,
    "successfulAttemptElapsedMs": 641.3514490000089,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "NONE": 0.08,
            "body:9": 0,
            "body:1": 0,
            "body:3": 0,
            "body:12": 0,
            "body:0": 0.11,
            "body:5": 0,
            "body:16": 0,
            "body:7": 0,
            "body:6": 0.8,
            "body:15": 0,
            "body:11": 0,
            "subject:0": 0,
            "body:13": 0,
            "body:10": 0,
            "body:2": 0.01,
            "body:8": 0,
            "body:14": 0,
            "body:4": 0
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 1095,
        "output_tokens": 201
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1279.7073170000222,
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
        "segmentId": "body:6"
      },
      "authority_claim": {
        "status": "not_requested",
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
    "seq": 1234,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-253",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:12.571Z",
    "offsetMs": 0.8682799999951385
  },
  {
    "seq": 1235,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-253",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:13.206Z",
    "offsetMs": 635.8466079999926,
    "elapsedMs": 634.6991580000031,
    "outcome": "success"
  },
  {
    "seq": 1236,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-253",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:13.208Z",
    "offsetMs": 637.8340820000158
  },
  {
    "seq": 1237,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-253",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:13.850Z",
    "offsetMs": 1279.5021210000268,
    "elapsedMs": 641.3514490000089,
    "outcome": "success"
  },
  {
    "seq": 1238,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-253",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:13.850Z",
    "offsetMs": 1279.7535470000003,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6e1694b8fd97f670bb80ff62d6a32665ec6793969888916dce582a56a48f9d2c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1235},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1237},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1238}} as const;
export const projectionSha256 = "e2da122af85766e0261490aa46806b7f59f93d424c172d023d08bb62a2d266f0";
