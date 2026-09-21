import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-233",
  "inputSha256": "6017135912419cf95d7880def953660037480548aaa1f3f67b17f89c039c6299",
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
      "end": 80,
      "text": "Re: NIP::  [Importante] tu tarjeta ha sido bloqueada de forma temporal #85049340"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 7,
      "text": "¡Hola! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 7,
      "end": 64,
      "text": "Hemos detectado un acceso sospechoso en tu Área Cliente. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 64,
      "end": 127,
      "text": "Por seguridad, tu tarjeta ha sido bloqueada de forma temporal. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 127,
      "end": 238,
      "text": "Por favor, revisa tus movimientos por si ves alguno que no reconoces y contacta con nosotros lo antes posible. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 238,
      "end": 271,
      "text": "Puedes hacerlo como prefieras: . "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 271,
      "end": 314,
      "text": "Seguimos conectados para lo que necesites. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 314,
      "end": 332,
      "text": "¡Así de senZillo! "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 332,
      "end": 357,
      "text": "Un saludo WiZink Bank SAU"
    }
  ],
  "passA": {
    "requestSha256": "1b118bb2e6fff2746fe1e175fb7b982a3f74d1283acc1364dc4495c862a0f70c",
    "capturedAt": "2026-09-20T23:45:08.182Z",
    "elapsedMs": 161.0999579999916,
    "successfulAttemptElapsedMs": 159.52595799999835,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.18
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.74
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.23
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.01,
            "sender_supplied": 0.24,
            "no_sensitive_action": 0.51,
            "mixed_or_unknown": 0.24
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 3548,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "e181b7b3838f02abe2a10fae7e933afa61ee6bb99cfeef7e637b42f61d1179c4",
    "capturedAt": "2026-09-20T23:45:08.343Z",
    "elapsedMs": 159.43466699999408,
    "successfulAttemptElapsedMs": 157.9577500000014,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0,
            "subject:0": 0.01,
            "body:2": 0.01,
            "body:3": 0.97,
            "body:0": 0,
            "body:4": 0,
            "body:6": 0,
            "body:5": 0,
            "NONE": 0.01,
            "body:7": 0
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:2": 0.07,
            "subject:0": 0.01,
            "body:1": 0.13,
            "body:3": 0.17,
            "body:0": 0,
            "body:4": 0,
            "body:6": 0,
            "NONE": 0.01,
            "body:5": 0,
            "body:7": 0.61
          },
          "confidence": 0.56
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0.07,
            "subject:0": 0,
            "body:1": 0.08,
            "body:3": 0.32,
            "body:0": 0,
            "body:2": 0,
            "body:6": 0,
            "body:5": 0,
            "NONE": 0.53,
            "body:7": 0
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 1868,
        "output_tokens": 334
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 322.61387500001,
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
        "segmentId": "body:3"
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
    "seq": 1138,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-233",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:08.022Z",
    "offsetMs": 1.0637500000011642
  },
  {
    "seq": 1139,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-233",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:08.182Z",
    "offsetMs": 161.10120800000732,
    "elapsedMs": 159.52595799999835,
    "outcome": "success"
  },
  {
    "seq": 1140,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-233",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:08.184Z",
    "offsetMs": 163.70841600000858
  },
  {
    "seq": 1141,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-233",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:08.343Z",
    "offsetMs": 322.23004100000253,
    "elapsedMs": 157.9577500000014,
    "outcome": "success"
  },
  {
    "seq": 1142,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-233",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:08.343Z",
    "offsetMs": 322.70662500000617,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "809b66dac67cd2b94197a0818104a8af34f81ab6de89f1a67c7ae141de2c1341";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1139},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1141},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1142}} as const;
export const projectionSha256 = "08e17d174ffe826b85a46cf0382b6ee0eae289a7c0989bfeab7437ac286ea09e";
