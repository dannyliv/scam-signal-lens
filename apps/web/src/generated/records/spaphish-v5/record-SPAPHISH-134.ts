import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-134",
  "inputSha256": "72bf419a7f3c0696160ea9ed00835c4ed70ba12bea6ef716f4f783d9fd7c679b",
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
      "end": 47,
      "text": "Acto admin XNU083167 enviado al buzon YDP628570"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 138,
      "text": "HACIENDA Secretaría de Hacienda y Crédito Público Se te ha enviado el acto administrativo identificado con el folio: ZTR591442QMP883219 . "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 138,
      "end": 225,
      "text": "Este documento está disponible para su consulta en tu Buzón Tributario en sat.gob.mx . "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 225,
      "end": 349,
      "text": "Consultar acto administrativo El SAT no solicita información personal, claves o contraseñas a través de correo electrónico. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 349,
      "end": 448,
      "text": "Si recibes un mensaje sospechoso, no compartas información y repórtalo a través de nuestro portal. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 448,
      "end": 587,
      "text": "Tus datos personales están protegidos conforme a los Lineamientos de Protección de Datos Personales y las disposiciones fiscales vigentes. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 587,
      "end": 665,
      "text": "Se utilizan exclusivamente para ejercer las facultades de la Autoridad Fiscal."
    }
  ],
  "passA": {
    "requestSha256": "577d7cfe059eacf7e0d2ccd04802a11c2b1cbf1019931cda2e3b8d34a2926eb2",
    "capturedAt": "2026-09-20T23:44:33.880Z",
    "elapsedMs": 140.0418340000033,
    "successfulAttemptElapsedMs": 138.50216699999874,
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
          "noul": 0.03
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.57
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0.89,
            "mixed_or_unclear": 0,
            "active_request": 0.11
          },
          "confidence": 0.85
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.04,
            "independently_established": 0.11,
            "no_sensitive_action": 0.85,
            "mixed_or_unknown": 0
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 3602,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "1d1277a53db4bd609034917ed047955bad8cc5217899df78d3adbcd25bbc9ea2",
    "capturedAt": "2026-09-20T23:44:34.019Z",
    "elapsedMs": 136.97283400000015,
    "successfulAttemptElapsedMs": 135.33520800000406,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.05,
            "body:4": 0,
            "body:0": 0.84,
            "body:1": 0.01,
            "body:5": 0.01,
            "body:3": 0.01,
            "NONE": 0.07,
            "subject:0": 0.01
          },
          "confidence": 0.82
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.07,
            "body:4": 0,
            "body:0": 0,
            "body:1": 0.82,
            "body:5": 0,
            "body:3": 0.06,
            "NONE": 0.05,
            "subject:0": 0
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 1490,
        "output_tokens": 190
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 279.3790420000005,
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 657,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-134",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:33.740Z",
    "offsetMs": 0.9635840000046301
  },
  {
    "seq": 658,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-134",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:33.880Z",
    "offsetMs": 140.04262500000186,
    "elapsedMs": 138.50216699999874,
    "outcome": "success"
  },
  {
    "seq": 659,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-134",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:33.883Z",
    "offsetMs": 143.17366700000275
  },
  {
    "seq": 660,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-134",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:34.019Z",
    "offsetMs": 279.13283400000364,
    "elapsedMs": 135.33520800000406,
    "outcome": "success"
  },
  {
    "seq": 661,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-134",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:34.019Z",
    "offsetMs": 279.4353340000016,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1d0b18ddccda106e19227f329f416c83a2db9b738577b58c1e99e9b251bb0261";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":658},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":660},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":661}} as const;
export const projectionSha256 = "32f179c70fde7bb87126f43a23b30777a4a1201195eb82b2c33e07a0f7515564";
