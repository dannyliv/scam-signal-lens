import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-344",
  "inputSha256": "04a2a7459bc37664ca2b1b5bc9c42639c2abfcdbdc47cd2eb4c14e6bbc6ae91f",
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
      "end": 34,
      "text": "Fw: ¡Su paquete ha sido enviado! !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 34,
      "end": 42,
      "text": "#CRIVmbL"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 44,
      "text": "Tienes (1) paquete esperando ser entregado. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 44,
      "end": 280,
      "text": "CONTINUAR http://rastreo.servicio-local.com/ Programe su entrega y suscríbase a nuestras notificaciones push para evitar que esto vuelva a suceder Su código de seguimiento: 99887766 PROGRAMA TU ENTREGA http://rastreo.servicio-local.com/"
    }
  ],
  "passA": {
    "requestSha256": "82e698ea8c16681088703ed332fc6891601fa47a880022e0e062dea322504066",
    "capturedAt": "2026-09-20T23:45:48.143Z",
    "elapsedMs": 201.88808300001256,
    "successfulAttemptElapsedMs": 199.9033749999944,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.1
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.1
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.59
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.51
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.33
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.26,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.74,
            "independently_established": 0
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 3520,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "38047bff9314dc55ea92096f016807f2bfacfb5929d65f641dfa9326469e3048",
    "capturedAt": "2026-09-20T23:45:48.330Z",
    "elapsedMs": 184.80174999999872,
    "successfulAttemptElapsedMs": 182.31858400000783,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.01,
            "body:1": 0.96,
            "subject:1": 0,
            "NONE": 0.03
          },
          "confidence": 0.95
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.07,
            "body:1": 0.21,
            "subject:0": 0.09,
            "NONE": 0.63,
            "subject:1": 0
          },
          "confidence": 0.54
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.29,
            "subject:1": 0,
            "NONE": 0.71
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 1533,
        "output_tokens": 196
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 389.2126250000001,
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
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
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
    "seq": 1684,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-344",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:47.942Z",
    "offsetMs": 1.4115420000016456
  },
  {
    "seq": 1685,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-344",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:48.143Z",
    "offsetMs": 201.88954200000444,
    "elapsedMs": 199.9033749999944,
    "outcome": "success"
  },
  {
    "seq": 1686,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-344",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:48.147Z",
    "offsetMs": 205.83887500000128
  },
  {
    "seq": 1687,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-344",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:48.330Z",
    "offsetMs": 388.91100000000733,
    "elapsedMs": 182.31858400000783,
    "outcome": "success"
  },
  {
    "seq": 1688,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-344",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:48.330Z",
    "offsetMs": 389.2679170000047,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "14f2573c81339150392d57a436deb0c00de94bd320e167d592af823a3a1345cf";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1685},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1687},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1688}} as const;
export const projectionSha256 = "ca6909c0dcf6951b574ea03108e3fa40a297886135194e2b3edf7aa32d549b37";
