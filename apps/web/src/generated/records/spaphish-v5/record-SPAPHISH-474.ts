import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-474",
  "inputSha256": "1521d7db128258275614e9d69034e7e2f6726507503a8495aa9dc76c6bcd168a",
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
      "end": 44,
      "text": "IMSS DIGITAL REPORTE DE VIGENCIA DE DERECHOS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 336,
      "text": "Estimado Derechohabiente : Genovevo Sanchez MARTINEZ con Número de Seguridad social :03178200972 Derivado de su solicitud del Reporte de Vigencia de Derechos, el Sistema de IMSS Digital le envía el reporte al correo lSanchez@gmail.com que usted capturó en su solicitud Este correo ha sido generado automáticamente favor de no responder."
    }
  ],
  "passA": {
    "requestSha256": "994bb2ebff38e95165958383432d96084fd5d065f9b1259544b0359ad2035312",
    "capturedAt": "2026-09-20T23:46:31.009Z",
    "elapsedMs": 288.6375420000113,
    "successfulAttemptElapsedMs": 286.32683299999917,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "independently_established": 0.18,
            "no_sensitive_action": 0.56,
            "sender_supplied": 0.24
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 3523,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "790650a18f954528813d6da1805947b1d96befa32260a2c6f40739ed7449072a",
    "capturedAt": "2026-09-20T23:46:31.175Z",
    "elapsedMs": 163.95504199998686,
    "successfulAttemptElapsedMs": 161.40341699999408,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.13,
            "body:0": 0.79,
            "NONE": 0.08
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 749,
        "output_tokens": 50
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 455.0227499999746,
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
        "status": "not_requested",
        "segmentId": null
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
    "seq": 2328,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-474",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:30.722Z",
    "offsetMs": 1.7867499999993015
  },
  {
    "seq": 2329,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-474",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:31.009Z",
    "offsetMs": 288.6394159999909,
    "elapsedMs": 286.32683299999917,
    "outcome": "success"
  },
  {
    "seq": 2330,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-474",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:31.013Z",
    "offsetMs": 292.82012499999837
  },
  {
    "seq": 2331,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-474",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:31.175Z",
    "offsetMs": 454.80970799998613,
    "elapsedMs": 161.40341699999408,
    "outcome": "success"
  },
  {
    "seq": 2332,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-474",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:31.175Z",
    "offsetMs": 455.07804100000067,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d1997d8b904cc6be608497ae91b2642eb6db13b95063a4196fcd68a1118e6f56";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2329},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2331},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2332}} as const;
export const projectionSha256 = "3057f01a4379208239141ca3cfefa30441f4426f3ff457da7bfd55a43942c7f1";
