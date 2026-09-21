import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-405",
  "inputSha256": "c80e7b7a58c55904cce8a15977c8f831312be5de2f7cfd89f47221add0a17856",
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
      "end": 41,
      "text": "Pablito! -\"😱 ¡Solo por tiempo limitado! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 41,
      "end": 78,
      "text": "Mystery Box con productos sorpresa.\" "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 78,
      "end": 93,
      "text": "#ID:13190-61838"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 58,
      "text": "Te llevará solo un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 102,
      "text": "Coppel® ¡El ganador de hoy es Ángel Moreno! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 102,
      "end": 126,
      "text": "¡HAS SIDO SELECCIONADO! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 126,
      "end": 214,
      "text": "Para recibir tu regalo: Coppel Mystery Box Haz clic aquí para obtenerlo Congratulation! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 214,
      "end": 302,
      "text": "¡Ha sido elegido para participar en nuestro Programa de Fidelización de forma GRATUITA! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 302,
      "end": 359,
      "text": "Solo le llevará un minuto recibir este fantástico premio."
    }
  ],
  "passA": {
    "requestSha256": "f126b23c69454756829c91ddf58de25a12acf7afea7c56da78a0b8ac41a92786",
    "capturedAt": "2026-09-20T23:46:07.994Z",
    "elapsedMs": 164.3732500000042,
    "successfulAttemptElapsedMs": 161.8765420000127,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.27
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.12
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.85
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.85
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.27
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.21
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.15
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
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
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.68,
            "no_sensitive_action": 0.31,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 3547,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "109092a3e57f3fd11a582398789bde17740d0a933d41d3935bfa39bc151cdaec",
    "capturedAt": "2026-09-21T00:57:31.791Z",
    "elapsedMs": 122.92137499999808,
    "successfulAttemptElapsedMs": 121.36537499999758,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:2": 0,
            "NONE": 0.96,
            "body:4": 0,
            "body:5": 0,
            "body:3": 0.04,
            "subject:2": 0,
            "subject:1": 0,
            "body:1": 0,
            "subject:0": 0
          },
          "confidence": 0.95
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:0": 0.01,
            "body:2": 0,
            "NONE": 0.01,
            "body:4": 0,
            "body:5": 0,
            "subject:0": 0.98,
            "subject:2": 0,
            "subject:1": 0,
            "body:1": 0,
            "body:3": 0
          },
          "confidence": 0.97
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:2": 0.01,
            "NONE": 0.11,
            "body:4": 0.11,
            "body:5": 0,
            "subject:0": 0,
            "body:3": 0.08,
            "subject:2": 0.01,
            "body:1": 0.68,
            "subject:1": 0
          },
          "confidence": 0.64
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:2": 0,
            "NONE": 0.98,
            "body:4": 0,
            "body:5": 0,
            "subject:1": 0,
            "body:3": 0.02,
            "subject:2": 0,
            "body:1": 0,
            "subject:0": 0
          },
          "confidence": 0.96
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:2": 0,
            "NONE": 0.9,
            "body:4": 0.06999999999999999,
            "body:5": 0,
            "subject:1": 0,
            "subject:0": 0,
            "body:3": 0.03,
            "body:1": 0,
            "subject:2": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 2854,
        "output_tokens": 552
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 428.1891669999968,
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
        "status": "none_selected",
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
    "seq": 1986,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-405",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:07.831Z",
    "offsetMs": 1.873541999986628
  },
  {
    "seq": 1987,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-405",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:07.994Z",
    "offsetMs": 164.37341699999524,
    "elapsedMs": 161.8765420000127,
    "outcome": "success"
  },
  {
    "seq": 1988,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-405",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:07.999Z",
    "offsetMs": 169.28237499998068
  },
  {
    "seq": 1989,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-405",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:08.133Z",
    "offsetMs": 303.8233749999781,
    "elapsedMs": 133.85175000000163,
    "outcome": "success"
  },
  {
    "seq": 1990,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-405",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:08.133Z",
    "offsetMs": 303.97299999999814,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2776,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-405",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:31.669Z",
    "offsetMs": 1.7553750000006403
  },
  {
    "seq": 2777,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-405",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:31.791Z",
    "offsetMs": 123.5558749999982,
    "elapsedMs": 121.36537499999758,
    "outcome": "success"
  },
  {
    "seq": 2778,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-405",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:31.791Z",
    "offsetMs": 124.19779099999869,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "77d875b33f9cc23eeb9897541dbc1066446f8329e5354b1a33a145d1b09fa831";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1987},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2777},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2778}} as const;
export const projectionSha256 = "d75006b163949e10c7ecee24d138efff3a3daa8727ba2497af1eda36f977c945";
