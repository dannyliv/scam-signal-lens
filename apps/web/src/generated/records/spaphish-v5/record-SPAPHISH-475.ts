import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-475",
  "inputSha256": "27ccccffc694199da468e0a0734a8f5c7b6857b9edf64c00ffee00844dd0634c",
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
      "end": 27,
      "text": "Diplomados Virtuales Gratis"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 132,
      "text": "Aprende, Actualízate y Capacítate Gratis Son muchos los temas en los cuales te puedes actualizar, capacitar o simplemente aprender. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 132,
      "end": 232,
      "text": "Recuerda que tienes todo por ganar y nada que perder, ya que la inscripción y formación es gratis . "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 232,
      "end": 357,
      "text": "Solo si deseas obtener el certificado pagas $82.500 COP durante el transcurso del diplomado o después de haberlo finalizado. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 357,
      "end": 444,
      "text": "Inscríbete Gratis Si no deseas recibir más mensajes, haz clic en cancelar suscripción ."
    }
  ],
  "passA": {
    "requestSha256": "1976167aa15c44f231e2cf808a87f1a9a70bf141b731c7b9b82608c8097c0487",
    "capturedAt": "2026-09-20T23:46:31.461Z",
    "elapsedMs": 283.79725000000326,
    "successfulAttemptElapsedMs": 281.0350840000028,
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
          "noul": 0.12
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.76
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
          "noul": 0.08
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
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
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.22,
            "independently_established": 0.01,
            "no_sensitive_action": 0.43,
            "sender_supplied": 0.34
          },
          "confidence": 0.24
        }
      },
      "usage": {
        "input_tokens": 3542,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "b66fd8f73349d29497b0001de176a6b62669dfabd1c233c457a90986f53ec28d",
    "capturedAt": "2026-09-20T23:46:31.596Z",
    "elapsedMs": 133.90174999999,
    "successfulAttemptElapsedMs": 132.10995799998636,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.99,
            "body:0": 0,
            "body:3": 0,
            "NONE": 0.01,
            "body:1": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 827,
        "output_tokens": 75
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 418.9886669999978,
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
        "status": "selected",
        "segmentId": "body:2"
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
        "status": "not_requested",
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2333,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-475",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:31.179Z",
    "offsetMs": 2.0733329999784473
  },
  {
    "seq": 2334,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-475",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:31.461Z",
    "offsetMs": 283.80154200000106,
    "elapsedMs": 281.0350840000028,
    "outcome": "success"
  },
  {
    "seq": 2335,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-475",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:31.463Z",
    "offsetMs": 286.2719999999972
  },
  {
    "seq": 2336,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-475",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:31.596Z",
    "offsetMs": 418.9238749999786,
    "elapsedMs": 132.10995799998636,
    "outcome": "success"
  },
  {
    "seq": 2337,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-475",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:31.596Z",
    "offsetMs": 419.00754200000665,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ed3ced8cc84a4dcdf319fe41da33f3d2a317cacaccb3de7d4f3ad31e93f829f5";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2334},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2336},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2337}} as const;
export const projectionSha256 = "3fabff16a2666d36ebd946675885a64bd56a9a8816cfbcaee94cd220803b4a39";
