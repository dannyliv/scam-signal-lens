import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-352",
  "inputSha256": "dd9caf3051aad33590c0c13c61414552deccddf40906489e6e73839096bee8f5",
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
      "end": 32,
      "text": "Cambio de contraseña obligatorio"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 62,
      "text": "¡Este mensaje fue enviado por alguien ajeno a la Universidad! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 62,
      "end": 243,
      "text": "**************************************************************************** IMPORTANTE - Por nuevas políticas de seguridad, le solicitamos que cambie su contraseña inmediatamente. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 243,
      "end": 353,
      "text": "Haga clic en el siguiente enlace para realizar el cambio: Cambie su contraseña Atentamente, Departamento de IT"
    }
  ],
  "passA": {
    "requestSha256": "5d0f22780f19a6a8fd0cdf7412aba80acc85267d935052fd92e371995987862d",
    "capturedAt": "2026-09-20T23:45:51.009Z",
    "elapsedMs": 156.71541699999943,
    "successfulAttemptElapsedMs": 154.61904199999117,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.45
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.19
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
          "noul": 0.89
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.33
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0.01,
            "informational": 0,
            "active_request": 0.99
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.99
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3487,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "16dd84ca4ecf806ff1b579812c0a44a280dbd83f51e1006fe9cb26712c61344c",
    "capturedAt": "2026-09-20T23:45:51.137Z",
    "elapsedMs": 125.71970800000418,
    "successfulAttemptElapsedMs": 123.59012499998789,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.54,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.1,
            "NONE": 0.36
          },
          "confidence": 0.43
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "NONE": 0,
            "body:0": 0,
            "body:1": 0.99,
            "subject:0": 0.01
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.98,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.01,
            "NONE": 0.01
          },
          "confidence": 0.98
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.17,
            "NONE": 0.81,
            "body:0": 0.01,
            "body:1": 0.01,
            "subject:0": 0
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 1770,
        "output_tokens": 264
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 285.20045799999207,
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
        "status": "selected",
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 1724,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-352",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:50.853Z",
    "offsetMs": 1.4433749999880092
  },
  {
    "seq": 1725,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-352",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:51.009Z",
    "offsetMs": 156.71733299999323,
    "elapsedMs": 154.61904199999117,
    "outcome": "success"
  },
  {
    "seq": 1726,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-352",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:51.013Z",
    "offsetMs": 160.73399999999674
  },
  {
    "seq": 1727,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-352",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:51.137Z",
    "offsetMs": 284.94166699999187,
    "elapsedMs": 123.59012499998789,
    "outcome": "success"
  },
  {
    "seq": 1728,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-352",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:51.137Z",
    "offsetMs": 285.25570799999696,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ccc2a445bc96ce786de10fed77f84d0f86daf607404d717b3db5d13d1765d89a";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1725},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1727},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1728}} as const;
export const projectionSha256 = "e64161940155cfb7727f86cb4851e15ab9ed0a01b6c5d82c171d939dee4b7c91";
