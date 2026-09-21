import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-082",
  "inputSha256": "a01078e989f275936d95ee5551ac0ac98252d30a569b3e33478771dc4526e783",
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
      "end": 19,
      "text": "Alerta de seguridad"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 22,
      "text": "Ricardo Sánchez López\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 22,
      "end": 23,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 23,
      "end": 208,
      "text": "Se ha iniciado sesión en un dispositivo nuevo en ricardo.sanchez.lopez@dominioficticio.net Se ha iniciado sesión en tu cuenta de Google desde un dispositivo nuevo (Samsung Galaxy A54). "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 208,
      "end": 288,
      "text": "Te hemos enviado este correo electrónico para comprobar que la has iniciado tú.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 288,
      "end": 289,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 289,
      "end": 346,
      "text": "VER ACTIVIDAD https://accounts.google.com/AccountChooser?"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 346,
      "end": 460,
      "text": "Email=ricardo.sanchez.lopez@dominioficticio.net&continue=https://myaccount.google.com/new-device/nt/1523031693000?"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 460,
      "end": 597,
      "text": "rfn%3D100%26rfnc%3D1%26eid%3D6531490466850182123%26et%3D0%26asae%3D2%26anexp%3Dapa-standalone https://accounts.google.com/AccountChooser?"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 597,
      "end": 711,
      "text": "Email=ricardo.sanchez.lopez@dominioficticio.net&continue=https://myaccount.google.com/new-device/nt/1523031693000?"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 711,
      "end": 805,
      "text": "rfn%3D100%26rfnc%3D1%26eid%3D6531490466850182123%26et%3D0%26asae%3D2%26anexp%3Dapa-standalone\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 805,
      "end": 806,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 806,
      "end": 929,
      "text": "Te hemos enviado este correo electrónico para informarte de cambios importantes en tu cuenta y en los servicios de Google. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 929,
      "end": 1011,
      "text": "© 2018 Google Inc.,1600 Amphitheatre Parkway, Ciudad Central, CA 90210, USA et:100"
    }
  ],
  "passA": {
    "requestSha256": "0538bd0997902bbca471229ae674d18786996a4a844fcdc835c7f94840e5560c",
    "capturedAt": "2026-09-20T23:44:17.934Z",
    "elapsedMs": 149.33800000000338,
    "successfulAttemptElapsedMs": 147.92341600000145,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.29
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.8
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.13
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.17
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.69,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.31
          },
          "confidence": 0.58
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.44,
            "independently_established": 0.03,
            "sender_supplied": 0.52,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 3814,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "9659439196f83ecdb5d66ecdf7e23766bf5f82f294abd016b313f4013bef1507",
    "capturedAt": "2026-09-20T23:44:18.084Z",
    "elapsedMs": 147.84641700000066,
    "successfulAttemptElapsedMs": 146.53191700000025,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "subject:0": 0.01,
            "body:7": 0,
            "body:2": 0.02,
            "body:12": 0,
            "body:6": 0,
            "body:10": 0,
            "body:3": 0.23,
            "body:8": 0,
            "body:11": 0.01,
            "NONE": 0.54,
            "body:5": 0.19,
            "body:1": 0,
            "body:4": 0,
            "body:0": 0
          },
          "confidence": 0.5
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:9": 0,
            "body:2": 0.09,
            "body:7": 0,
            "subject:0": 0.03,
            "body:12": 0.14,
            "body:6": 0,
            "body:3": 0.4,
            "body:10": 0,
            "body:8": 0,
            "body:11": 0.15,
            "NONE": 0.15,
            "body:5": 0.03,
            "body:1": 0.01,
            "body:4": 0,
            "body:0": 0
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 2303,
        "output_tokens": 317
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 299.6413329999996,
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
    "seq": 399,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-082",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:17.785Z",
    "offsetMs": 0.8676250000025902
  },
  {
    "seq": 400,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-082",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:17.933Z",
    "offsetMs": 149.33820800000103,
    "elapsedMs": 147.92341600000145,
    "outcome": "success"
  },
  {
    "seq": 401,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-082",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:17.936Z",
    "offsetMs": 152.26029100000233
  },
  {
    "seq": 402,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-082",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:18.083Z",
    "offsetMs": 299.338458000002,
    "elapsedMs": 146.53191700000025,
    "outcome": "success"
  },
  {
    "seq": 403,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-082",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:18.084Z",
    "offsetMs": 299.70458300000246,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "01c380cf6cedddf382772e4bdd25fda40dda6dac4e57143541bd5d91b36ccaa0";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":400},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":402},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":403}} as const;
export const projectionSha256 = "f0e4b4bb039b23c229aa836d68f316d5517f1e05e40e4348aa785438bff7dc8c";
