import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-080",
  "inputSha256": "54619e714306e8774ac911f4366e6c7312ac2c8e0e9b2d59f245f61fb228f0df",
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
      "text": "Has ganado la freidora Ninja Air !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 34,
      "end": 41,
      "text": "#ZN1Bga"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 12,
      "text": "Apresúrate. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 12,
      "end": 67,
      "text": "¡El número de premios que se pueden ganar es limitado! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 67,
      "end": 84,
      "text": "¡Confirma ahora! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 84,
      "end": 156,
      "text": "Freír A Perfección Oferta limitada Freidora de aire ninja ¡Felicidades! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 156,
      "end": 229,
      "text": "¡Has sido elegido para participar en nuestro Programa de Lealtad GRATIS! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 229,
      "end": 286,
      "text": "Sólo te tomará un minuto obtener este fantástico premio. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 286,
      "end": 303,
      "text": "¡CONFIRMA AHORA! "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 303,
      "end": 364,
      "text": "Sólo tardarás un minuto en recibir este fantástico premio... "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 364,
      "end": 386,
      "text": "Freidora de aire ninja"
    }
  ],
  "passA": {
    "requestSha256": "e1c0975ad6817b443a3c27cb2a97801a324241c8c7c847b6b39922465d693d89",
    "capturedAt": "2026-09-20T23:44:17.220Z",
    "elapsedMs": 201.20670800000153,
    "successfulAttemptElapsedMs": 199.77054100000169,
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
          "noul": 0.18
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
          "noul": 0.94
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.22
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.36
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.19
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.05
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
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
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.32,
            "no_sensitive_action": 0.5,
            "independently_established": 0,
            "mixed_or_unknown": 0.18
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 3535,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "588147709537c951f53184031cd8959405271294314959a4b921e398019e1f0f",
    "capturedAt": "2026-09-20T23:44:17.384Z",
    "elapsedMs": 161.1001670000005,
    "successfulAttemptElapsedMs": 159.4718329999996,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "body:1": 0.34,
            "body:7": 0,
            "body:6": 0.08,
            "body:2": 0.23,
            "body:0": 0.35,
            "subject:0": 0,
            "body:8": 0,
            "body:3": 0,
            "body:4": 0,
            "body:5": 0,
            "subject:1": 0
          },
          "confidence": 0.29
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.78,
            "body:7": 0,
            "body:1": 0,
            "body:6": 0,
            "body:2": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:8": 0,
            "body:3": 0,
            "subject:1": 0,
            "body:5": 0,
            "body:4": 0.22
          },
          "confidence": 0.75
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.87,
            "body:1": 0,
            "body:4": 0,
            "body:6": 0.05,
            "body:7": 0,
            "body:0": 0.02,
            "body:8": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:2": 0.05,
            "body:5": 0.01,
            "subject:1": 0
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 1899,
        "output_tokens": 385
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 365.0829589999994,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "none_selected",
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
    "seq": 389,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-080",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:17.020Z",
    "offsetMs": 0.8667089999980817
  },
  {
    "seq": 390,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-080",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:17.220Z",
    "offsetMs": 201.20708399999785,
    "elapsedMs": 199.77054100000169,
    "outcome": "success"
  },
  {
    "seq": 391,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-080",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:17.223Z",
    "offsetMs": 204.62699999999677
  },
  {
    "seq": 392,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-080",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:17.384Z",
    "offsetMs": 364.80091699999684,
    "elapsedMs": 159.4718329999996,
    "outcome": "success"
  },
  {
    "seq": 393,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-080",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:17.384Z",
    "offsetMs": 365.1308339999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b0e98e4e32a59661b72313ab88586cf35cd27a36cd051cdea71bc44f1c01893e";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":390},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":392},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":393}} as const;
export const projectionSha256 = "14411ea87a63c77f9ddc2787472f96873efa3d521e6e8b77c52c73a750cc5912";
