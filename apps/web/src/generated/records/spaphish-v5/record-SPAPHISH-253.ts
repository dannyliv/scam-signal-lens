import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-253",
  "inputSha256": "6a7947a8294cb2dd42caa8f05fbbe1adb16ebc7b2cc32898f3663ca939fd0060",
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
    "requestSha256": "98c00925c37dba2efa475bfc6e059092353fcc007efa6e8f3995692ef108d418",
    "capturedAt": "2026-09-20T23:45:15.566Z",
    "elapsedMs": 157.19883299998764,
    "successfulAttemptElapsedMs": 155.4774999999936,
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
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.1
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.42
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.14
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
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
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.61,
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.38
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 3537,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "70c372cecc2fae8755b4c2028f1f4d083bd594013ca75d8d72cc4d5b0b16fc7a",
    "capturedAt": "2026-09-20T23:45:15.701Z",
    "elapsedMs": 132.85854099999415,
    "successfulAttemptElapsedMs": 130.71095799999603,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:7": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:13": 0,
            "body:10": 0,
            "body:2": 0,
            "body:14": 0,
            "body:1": 0,
            "NONE": 0.04,
            "body:6": 0.85,
            "body:0": 0.11,
            "body:11": 0,
            "body:9": 0,
            "body:3": 0,
            "body:16": 0,
            "body:15": 0,
            "body:4": 0,
            "body:8": 0,
            "body:12": 0
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 993,
        "output_tokens": 201
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 293.09833300000173,
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
    "seq": 1238,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-253",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:15.409Z",
    "offsetMs": 1.1971250000060536
  },
  {
    "seq": 1239,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-253",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:15.565Z",
    "offsetMs": 157.20037500000035,
    "elapsedMs": 155.4774999999936,
    "outcome": "success"
  },
  {
    "seq": 1240,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-253",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:15.569Z",
    "offsetMs": 161.2912079999951
  },
  {
    "seq": 1241,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-253",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:15.701Z",
    "offsetMs": 292.8298749999958,
    "elapsedMs": 130.71095799999603,
    "outcome": "success"
  },
  {
    "seq": 1242,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-253",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:15.701Z",
    "offsetMs": 293.159249999997,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "024016aadaffd802a9d9a3cdd7fe4e3224f22bd8af3216aec94ca91e9684a558";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1239},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1241},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1242}} as const;
export const projectionSha256 = "97eb46953027dbf32006c16c163fa9f3fd9ad4fcf9f139b58f6598b85afc053c";
