import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-414",
  "inputSha256": "f049fb7e09f6173e34ff8c6c76eb549e62dc4f6e84cec8a83ecf427e9b22fc52",
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
      "end": 30,
      "text": "Error en la reunión programada"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 38,
      "text": "Hola, mariana.estrada@corpmailnet.com\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 38,
      "end": 85,
      "text": ": Hemos encontrado un problema con su reunión. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 85,
      "end": 128,
      "text": "Revise sus configuraciones a continuación:\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 128,
      "end": 153,
      "text": "Revisar la configuración\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 153,
      "end": 215,
      "text": "Revise su configuración para ingresar o rechazar una reunión.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 215,
      "end": 240,
      "text": "Gracias por elegir Zoom.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 240,
      "end": 241,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 241,
      "end": 258,
      "text": "El equipo de Zoom"
    }
  ],
  "passA": {
    "requestSha256": "5cacc51d637536acd424230533fcafa494409b91037d5426b587f8cd7cbb94de",
    "capturedAt": "2026-09-20T23:46:10.955Z",
    "elapsedMs": 148.45683399998234,
    "successfulAttemptElapsedMs": 145.70341699998244,
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
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.03
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
          "noul": 0.16
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.03,
            "educational_or_quoted": 0,
            "active_request": 0.97
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.75,
            "independently_established": 0.01,
            "sender_supplied": 0.2,
            "mixed_or_unknown": 0.04
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 3494,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "9404131e38b8488e042b62a00c4b1433175c84a5b6201bbf3f7ecbe1a8c4ff95",
    "capturedAt": "2026-09-20T23:46:11.066Z",
    "elapsedMs": 110.09270900001866,
    "successfulAttemptElapsedMs": 108.57199999998556,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "subject:0": 0,
            "body:7": 0.84,
            "body:2": 0,
            "body:4": 0.01,
            "body:1": 0.1,
            "body:3": 0,
            "body:0": 0,
            "body:6": 0,
            "NONE": 0.03,
            "body:5": 0.02
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 783,
        "output_tokens": 113
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 259.7442500000179,
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
        "segmentId": "body:7"
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
    "seq": 2031,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-414",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:10.808Z",
    "offsetMs": 2.1399580000143033
  },
  {
    "seq": 2032,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-414",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:10.955Z",
    "offsetMs": 148.45904100002372,
    "elapsedMs": 145.70341699998244,
    "outcome": "success"
  },
  {
    "seq": 2033,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-414",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:10.957Z",
    "offsetMs": 150.62341600001673
  },
  {
    "seq": 2034,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-414",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:11.066Z",
    "offsetMs": 259.6023330000171,
    "elapsedMs": 108.57199999998556,
    "outcome": "success"
  },
  {
    "seq": 2035,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-414",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:11.066Z",
    "offsetMs": 259.78579100000206,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2602a9dcf82d2629dac424ab2cdfebb0cb22e247b5823673bdc44ccc234d3d50";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2032},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2034},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2035}} as const;
export const projectionSha256 = "af043cd0bf7c838007830abb813179dbd17dd4c2bd9c3d27392ae359276f3bbd";
