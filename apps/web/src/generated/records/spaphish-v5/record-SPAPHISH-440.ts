import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-440",
  "inputSha256": "bda3729363223c46970d0042d66d7ad0bb2f657dd84e5f54fcae804fa149ba2e",
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
      "end": 60,
      "text": "Pablito,  Última Oportunidad para Reclamar Tu Regalo Gratis "
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 59,
      "text": "¡Solo te llevará un minuto recibir este fantástico premio! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 59,
      "end": 112,
      "text": "Kit de Medicare — Encuesta sobre — ¡Responde y gana! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 112,
      "end": 142,
      "text": "Kit de Medicare ¡Felicidades! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 142,
      "end": 215,
      "text": "Has sido elegido para participar en nuestro Programa de Lealtad ¡GRATIS! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 215,
      "end": 273,
      "text": "Sólo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 273,
      "end": 294,
      "text": "¡Empieza, es gratis! "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 294,
      "end": 318,
      "text": "¿No quieres participar? "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 318,
      "end": 331,
      "text": "Cerrar sesión"
    }
  ],
  "passA": {
    "requestSha256": "1b7234a947ec1fedf7c3e051f2a0b42b1d37c68c6991c0b1103495f688f18e52",
    "capturedAt": "2026-09-20T23:46:19.912Z",
    "elapsedMs": 146.83379100001184,
    "successfulAttemptElapsedMs": 145.37333400000352,
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
          "noul": 0.29
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.59
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.42
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.21
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.13
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.11
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.66,
            "sender_supplied": 0.27,
            "independently_established": 0,
            "mixed_or_unknown": 0.07
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 3525,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "06efb40aade4c9f4960a26e25b3ef8610953dc90f218a8653a84eccdcec939c7",
    "capturedAt": "2026-09-21T00:57:32.764Z",
    "elapsedMs": 120.09820799999943,
    "successfulAttemptElapsedMs": 118.51758300000074,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:6": 0,
            "body:5": 0,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.89,
            "body:7": 0,
            "body:4": 0,
            "body:3": 0,
            "body:1": 0.11
          },
          "confidence": 0.87
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:2": 0,
            "body:6": 0,
            "body:5": 0,
            "body:0": 0.01,
            "body:4": 0,
            "NONE": 0.03,
            "body:7": 0,
            "subject:0": 0.95,
            "body:3": 0,
            "body:1": 0.01
          },
          "confidence": 0.94
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.23,
            "body:6": 0,
            "body:5": 0,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.35,
            "body:7": 0.01,
            "body:4": 0,
            "body:3": 0.14,
            "body:1": 0.27
          },
          "confidence": 0.27
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:6": 0,
            "body:5": 0.01,
            "body:0": 0,
            "body:4": 0.01,
            "NONE": 0.97,
            "body:7": 0.01,
            "subject:0": 0,
            "body:3": 0,
            "body:1": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 2243,
        "output_tokens": 438
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 440.4204170000048,
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
        "status": "none_selected",
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
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 2160,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-440",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:19.766Z",
    "offsetMs": 1.071750000002794
  },
  {
    "seq": 2161,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-440",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:19.912Z",
    "offsetMs": 146.83366699999897,
    "elapsedMs": 145.37333400000352,
    "outcome": "success"
  },
  {
    "seq": 2162,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-440",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:19.916Z",
    "offsetMs": 150.53337499999907
  },
  {
    "seq": 2163,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-440",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:20.084Z",
    "offsetMs": 318.7593749999942,
    "elapsedMs": 167.6552499999816,
    "outcome": "success"
  },
  {
    "seq": 2164,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-440",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:20.084Z",
    "offsetMs": 318.9665420000092,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2794,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-440",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:32.645Z",
    "offsetMs": 1.8822500000023865
  },
  {
    "seq": 2795,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-440",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:32.763Z",
    "offsetMs": 120.77216700000281,
    "elapsedMs": 118.51758300000074,
    "outcome": "success"
  },
  {
    "seq": 2796,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-440",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:32.764Z",
    "offsetMs": 121.38637500000186,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0a351750bd496ca9b4490a1310704c5fa28e9d852ca4717bb5c6f4fef7492956";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2161},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2795},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2796}} as const;
export const projectionSha256 = "7b17a3a076158891f32aa39582cc2184b976619ee431567af01ecd1fe5c0f22d";
