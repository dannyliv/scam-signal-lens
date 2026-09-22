import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-167",
  "inputSha256": "6abab33c0677ba83cd01d575fe5111955a1e57650b12a92c2d82fec42e7c91ba",
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
      "end": 48,
      "text": "Your account has been suspended (Ref - 08745117)"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 73,
      "text": "Estimado cliente, Su cuenta de PayPal ha sido restringida temporalmente. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 73,
      "end": 171,
      "text": "Hemos detectado actividad sospechosa en las tarjetas de crédito vinculadas a su cuenta de PayPal. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 171,
      "end": 268,
      "text": "Debe confirmar su identidad para verificar que usted es el propietario de la tarjeta de crédito. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 268,
      "end": 370,
      "text": "Para mantener la seguridad de la cuenta, por favor proporcione documentos que confirmen su identidad. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 370,
      "end": 542,
      "text": "Inicie sesión en PayPal Después de completar la tarea solicitada, revisaremos la cuenta y nos pondremos en contacto con usted acerca de su estado dentro de 5 días hábiles. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 542,
      "end": 582,
      "text": "Gracias por su atención a este problema."
    }
  ],
  "passA": {
    "requestSha256": "500056879f1764dcf3f5023152b12332d1aca9e603ebe3c7538298314319da16",
    "capturedAt": "2026-09-22T03:51:32.067Z",
    "elapsedMs": 622.2997199999809,
    "successfulAttemptElapsedMs": 621.4117130000086,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.93
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
          "noul": 0.46
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.24
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.49
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.1,
            "sender_supplied": 0.53,
            "independently_established": 0.33,
            "mixed_or_unknown": 0.04
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 5024,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "99770aee0bea4834fb7b8daa68b545f7abce1f0b6ce50cb91e2685cd976021d8",
    "capturedAt": "2026-09-22T03:51:32.603Z",
    "elapsedMs": 534.5481680000084,
    "successfulAttemptElapsedMs": 533.1251960000081,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:5": 0,
            "NONE": 0,
            "body:1": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:2": 0.02,
            "body:3": 0.98,
            "body:4": 0
          },
          "confidence": 0.97
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.12,
            "body:5": 0,
            "body:1": 0.03,
            "body:0": 0.07,
            "body:4": 0.13,
            "subject:0": 0.21,
            "body:3": 0.13,
            "body:2": 0.31
          },
          "confidence": 0.22
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:5": 0,
            "NONE": 0.11,
            "body:1": 0.28,
            "body:0": 0.32,
            "subject:0": 0.01,
            "body:2": 0.03,
            "body:3": 0.14,
            "body:4": 0.11
          },
          "confidence": 0.22
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.84,
            "body:5": 0,
            "body:1": 0,
            "body:0": 0,
            "body:4": 0.1,
            "subject:0": 0,
            "body:3": 0.04,
            "body:2": 0.02
          },
          "confidence": 0.81
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:5": 0,
            "NONE": 0.22,
            "body:1": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:2": 0.01,
            "body:3": 0.01,
            "body:4": 0.76
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 3390,
        "output_tokens": 465
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1158.7327560000122,
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
        "status": "selected",
        "segmentId": "body:3"
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
        "status": "selected",
        "segmentId": "body:4"
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
    "seq": 812,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-167",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:31.445Z",
    "offsetMs": 0.6143800000136252
  },
  {
    "seq": 813,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-167",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:32.067Z",
    "offsetMs": 622.3000239999965,
    "elapsedMs": 621.4117130000086,
    "outcome": "success"
  },
  {
    "seq": 814,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-167",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:32.070Z",
    "offsetMs": 624.7959580000024
  },
  {
    "seq": 815,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-167",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:32.603Z",
    "offsetMs": 1158.4183520000079,
    "elapsedMs": 533.1251960000081,
    "outcome": "success"
  },
  {
    "seq": 816,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-167",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:32.604Z",
    "offsetMs": 1158.7836510000052,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d562a76363df858a9b8817fd66780ee5a85f0653ead4fcbdedd82366390d12f2";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":813},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":815},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":816}} as const;
export const projectionSha256 = "126540896b97800d1b5b35659c7e9263643363e3ddcbf722ceb4363a43d3e3c7";
