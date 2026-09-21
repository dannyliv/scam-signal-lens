import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-371",
  "inputSha256": "d05fd58ba3ceafbe93f12869c801349774d05cb1eaae5fd85770edca1d99eede",
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
      "end": 31,
      "text": "Recuperar contraseña de Cinemex"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 25,
      "text": "¡Recupera tu contraseña! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 25,
      "end": 199,
      "text": "Para recuperar tu contraseña haz click en el siguiente botón Recuperar contraseña Si no puedes ver el botón, haz click en este enlace: //cineplanet.net/restablecer-password/?"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 199,
      "end": 279,
      "text": "code=8c2a4f6d3e778198f0ef4cf9855a07a9 Aviso de Privacidad Términos y Condiciones"
    }
  ],
  "passA": {
    "requestSha256": "f43ef776447f53deb484016243776e76c0ad8223b1b86dfaef46c24a0e639ecb",
    "capturedAt": "2026-09-20T23:45:57.056Z",
    "elapsedMs": 114.93504199999734,
    "successfulAttemptElapsedMs": 112.81666699999187,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.52
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.15
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
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.74
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.23
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.98,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0.02
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3520,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b098a624cf672801b7215580c24479abfacdeaf2e2f6d97a3630c2fa4e927296",
    "capturedAt": "2026-09-20T23:45:57.200Z",
    "elapsedMs": 142.89287499999045,
    "successfulAttemptElapsedMs": 141.6809590000048,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.64,
            "subject:0": 0,
            "body:2": 0.09,
            "NONE": 0.27
          },
          "confidence": 0.55
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:0": 0.03,
            "body:1": 0.06,
            "subject:0": 0.57,
            "body:2": 0.01,
            "NONE": 0.33
          },
          "confidence": 0.46
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.09,
            "subject:0": 0,
            "body:2": 0,
            "NONE": 0.91
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 1552,
        "output_tokens": 199
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 259.29362499999115,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
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
    "seq": 1818,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-371",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:56.942Z",
    "offsetMs": 1.5434580000001006
  },
  {
    "seq": 1819,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-371",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:57.056Z",
    "offsetMs": 114.9382079999923,
    "elapsedMs": 112.81666699999187,
    "outcome": "success"
  },
  {
    "seq": 1820,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-371",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:57.058Z",
    "offsetMs": 116.91549999998824
  },
  {
    "seq": 1821,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-371",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:57.200Z",
    "offsetMs": 258.9581249999901,
    "elapsedMs": 141.6809590000048,
    "outcome": "success"
  },
  {
    "seq": 1822,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-371",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:57.200Z",
    "offsetMs": 259.3765829999902,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "101a9e945223626fbe3e65429f797a208174ff20784846216a5d8561c66a3233";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1819},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1821},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1822}} as const;
export const projectionSha256 = "2c3495ef8f1c43f35f505a5db6ecf94add9b62fb352b16fcebbaf822c13cd17c";
