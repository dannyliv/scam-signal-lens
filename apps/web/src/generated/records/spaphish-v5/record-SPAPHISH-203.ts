import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-203",
  "inputSha256": "d287722f879a673e9c6367bd07228d54b3815439f61308363153ac72796f55bd",
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
      "end": 17,
      "text": "Fwd: RECORDATORIO"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 212,
      "text": "---------- Forwarded message --------- De: Andrea Ramos <andrea.ramos@colegioestelar.mx> Date: jue, 15 de feb. de 2024 a la(s) 10:30 Subject: NOTIFICACIÓN To: RICARDO LUNA SIERRA <ricardo.luna@colegioestelar.mx>\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 212,
      "end": 213,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 213,
      "end": 232,
      "text": "Hola, ¿cómo están?\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 232,
      "end": 233,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 233,
      "end": 442,
      "text": "Espero se encuentren bien, le escribo para informarles que tienen una diferencia pendiente por pagar de este mes por $75, igual y ya estaban enterados y es bien poquito, pero bueno es importante que supieran. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 442,
      "end": 560,
      "text": "Si tuvieran duda les pido escribirle a Laura (laura.martinez@colegioestelar.mx) para que les explique detalladamente.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 560,
      "end": 561,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 561,
      "end": 573,
      "text": "Bonito día! "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 573,
      "end": 581,
      "text": "Saludos\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 581,
      "end": 582,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 582,
      "end": 584,
      "text": "--"
    }
  ],
  "passA": {
    "requestSha256": "9223c9a9a04c9a9ade0364d2a8b6c39affbcfe1d5ef1c72a4f4fa09b30ea74e2",
    "capturedAt": "2026-09-20T23:44:58.805Z",
    "elapsedMs": 176.9726670000091,
    "successfulAttemptElapsedMs": 174.41833299999416,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.59
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.23
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.52,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0,
            "informational": 0.47
          },
          "confidence": 0.36
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.37,
            "mixed_or_unknown": 0.01,
            "independently_established": 0.01,
            "sender_supplied": 0.61
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 3616,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "9e7f351abd7b65f7a393bc96ddc6b1388d4c4085b5e948673cd9b38e9eb9bb18",
    "capturedAt": "2026-09-20T23:44:58.982Z",
    "elapsedMs": 175.02474999999686,
    "successfulAttemptElapsedMs": 173.11566699999094,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:0": 0,
            "body:1": 0,
            "body:4": 0.83,
            "body:3": 0,
            "body:7": 0,
            "body:5": 0.01,
            "NONE": 0.16,
            "body:8": 0,
            "subject:0": 0,
            "body:10": 0,
            "body:6": 0,
            "body:9": 0,
            "body:2": 0
          },
          "confidence": 0.81
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "NONE": 0.09,
            "body:1": 0,
            "body:4": 0.17,
            "body:3": 0,
            "body:0": 0.25,
            "body:7": 0,
            "body:5": 0.46,
            "body:8": 0.01,
            "subject:0": 0.01,
            "body:10": 0,
            "body:6": 0,
            "body:9": 0,
            "body:2": 0.01
          },
          "confidence": 0.41
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "NONE": 0.39,
            "body:1": 0,
            "body:4": 0,
            "body:3": 0,
            "body:7": 0,
            "body:0": 0,
            "body:5": 0.61,
            "body:8": 0,
            "subject:0": 0,
            "body:10": 0,
            "body:6": 0,
            "body:9": 0,
            "body:2": 0
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 2246,
        "output_tokens": 418
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 354.47320899998886,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
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
        "segmentId": "body:4"
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
        "status": "low_confidence",
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
    "seq": 991,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-203",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:58.629Z",
    "offsetMs": 1.3820419999974547
  },
  {
    "seq": 992,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-203",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:58.804Z",
    "offsetMs": 176.9739169999957,
    "elapsedMs": 174.41833299999416,
    "outcome": "success"
  },
  {
    "seq": 993,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-203",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:58.808Z",
    "offsetMs": 180.42045900000085
  },
  {
    "seq": 994,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-203",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:58.982Z",
    "offsetMs": 354.23883399998886,
    "elapsedMs": 173.11566699999094,
    "outcome": "success"
  },
  {
    "seq": 995,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-203",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:58.982Z",
    "offsetMs": 354.5160419999884,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8e3728bf1e110f8a11b2f99c86bcd5bb76f0785fd720cad69441dde1ef34c065";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":992},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":994},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":995}} as const;
export const projectionSha256 = "2fbabac3c89ee6b1fcc907b66b5f1e0d4bbcf219d9364ff22a8b7a2824f74b8b";
