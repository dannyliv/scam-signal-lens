import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-159",
  "inputSha256": "279c1e2142b7709f9acc525eab95207ec48457f7ef79775ff213ba871c591fbc",
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
      "end": 37,
      "text": "Fecha de examen para Defensa de Tesis"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 240,
      "text": "Buenas tardes, solo para confirmar la fecha y hora establecida para la realización del examen para la Defensa de Proyecto, dispuesta para el Miércoles 17 de enero a las 10:00 horas, esto conforme a lo acordado con los sinodales y asesores. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 240,
      "end": 286,
      "text": "Agradeciendo su tiempo y atención, me despido."
    }
  ],
  "passA": {
    "requestSha256": "105206b58183f87c91e64c7a803a2d9d41b9e27240c33f756ae20adf3aa59d6f",
    "capturedAt": "2026-09-20T23:44:41.743Z",
    "elapsedMs": 158.68299999999726,
    "successfulAttemptElapsedMs": 157.84204100000352,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.01
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.02
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.01
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.3
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 0.04,
            "informational": 0.96
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1,
            "independently_established": 0,
            "sender_supplied": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3511,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "9521ce7507b35bdd99869deb1baf39590d64d50805b3a0d0638f84259aec17e1",
    "capturedAt": "2026-09-20T23:44:41.931Z",
    "elapsedMs": 185.01770899999974,
    "successfulAttemptElapsedMs": 183.99370900000213,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "body:0": 0.55,
            "NONE": 0.41,
            "subject:0": 0.04
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 739,
        "output_tokens": 59
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 346.17358299999614,
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
    "seq": 778,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-159",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:41.585Z",
    "offsetMs": 0.5510829999984708
  },
  {
    "seq": 779,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-159",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:41.743Z",
    "offsetMs": 158.68366599999717,
    "elapsedMs": 157.84204100000352,
    "outcome": "success"
  },
  {
    "seq": 780,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-159",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:41.746Z",
    "offsetMs": 161.64749999999913
  },
  {
    "seq": 781,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-159",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:41.930Z",
    "offsetMs": 346.0131249999977,
    "elapsedMs": 183.99370900000213,
    "outcome": "success"
  },
  {
    "seq": 782,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-159",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:41.931Z",
    "offsetMs": 346.2155829999974,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0ad78eec71fce79c757c4269416c35bf6c6915313fa7af4ba7a90bb298f87612";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":779},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":781},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":782}} as const;
export const projectionSha256 = "2ac3e216811c8b1df9a1a37e6d9147ee82477b718054ae34d552bcb20ae9cbe9";
