import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-063",
  "inputSha256": "e3e4007a42ebdac70d966314011709e21679cc559f687dc2ba89fffb9498f388",
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
      "text": "Actualización de Google Chrome"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 20,
      "text": "Logotipo de Chrome. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 20,
      "end": 200,
      "text": "Actualice su cuenta Estimado/a Ricardo López: En respuesta a una vulnerabilidad de seguridad reportada recientemente, se actualizó el navegador de Google Chrome de Marcelo Duarte. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 200,
      "end": 259,
      "text": "Se recomienda que aplique inmediatamente la actualización. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 259,
      "end": 378,
      "text": "Si no lo hace dentro de 48 horas, la versión de Google Chrome que está usando actualmente no funcionará correctamente. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 378,
      "end": 453,
      "text": "Nos disculpamos por cualquier inconveniente. - El equipo de Google Chrome ="
    }
  ],
  "passA": {
    "requestSha256": "a1c8e169acafcbe5a3a5e30f981380d966be63a6d0379581cec7b056e3fa7dca",
    "capturedAt": "2026-09-20T23:44:11.745Z",
    "elapsedMs": 684.145625000001,
    "successfulAttemptElapsedMs": 682.7922499999986,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.97
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.98,
            "mixed_or_unclear": 0,
            "informational": 0.02
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.9,
            "sender_supplied": 0.05,
            "independently_established": 0,
            "mixed_or_unknown": 0.05
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 3533,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "fe219523f3ddb3d14754cbe1d413639bbd2050dd782d4802a2d998e4525da2a2",
    "capturedAt": "2026-09-20T23:44:11.892Z",
    "elapsedMs": 145.83645900000192,
    "successfulAttemptElapsedMs": 145.37025000000358,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0,
            "body:4": 0,
            "NONE": 0,
            "body:3": 1
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0.04,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.02,
            "body:4": 0.83,
            "body:1": 0.11,
            "body:3": 0
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 1246,
        "output_tokens": 169
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 831.2246670000022,
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
        "status": "selected",
        "segmentId": "body:3"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:4"
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
    "seq": 306,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-063",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:11.061Z",
    "offsetMs": 0.852999999999156
  },
  {
    "seq": 307,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-063",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:11.745Z",
    "offsetMs": 684.1498339999998,
    "elapsedMs": 682.7922499999986,
    "outcome": "success"
  },
  {
    "seq": 308,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-063",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:11.746Z",
    "offsetMs": 685.2886670000007
  },
  {
    "seq": 309,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-063",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:11.891Z",
    "offsetMs": 830.8650000000016,
    "elapsedMs": 145.37025000000358,
    "outcome": "success"
  },
  {
    "seq": 310,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-063",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:11.892Z",
    "offsetMs": 831.3140000000021,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c90a820e46b0606db219d3dc221f617dd3c0c81d5037eb6f57d686ddfc073583";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":307},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":309},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":310}} as const;
export const projectionSha256 = "8f5dc0bccd96b706594b5f82cf3db4ee96015c889a8df256d3c8d6d0448d1cb6";
