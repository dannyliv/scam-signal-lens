import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-456",
  "inputSha256": "c689c30bde45c153fbf5841e0fb6d35a8428a9ad8cb4600a18ab2a64ad68de67",
  "questionBundleSha256": "9631a5b623f8c05b491dc5a5f67ab9b62e5b1898446a722339eaa0c16a40af8b",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "42e51b1f7b8706dae7188d0d3fa8c6ac83b855b21f393196bd63bc16d4b91d93",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "subject:0",
      "source": "subject",
      "start": 0,
      "end": 72,
      "text": "🚗 Missxtranger, ¡Obtén tu Kit de emergencia para el auto gratis ahora! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 72,
      "end": 105,
      "text": "¡No dejes pasar esta oportunidad!"
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 105,
      "end": 112,
      "text": "🚨 ID#?"
    },
    {
      "id": "subject:3",
      "source": "subject",
      "start": 112,
      "end": 122,
      "text": "=0657035 !"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 21,
      "text": "Allianz Assistance?? "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 21,
      "end": 80,
      "text": "Kit de Emergencia para coche Gratis Hola Marina Ledezma, ??"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 80,
      "end": 93,
      "text": "Felicidades! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 93,
      "end": 148,
      "text": "Has sido seleccionado como ganador de nuestra promoci??"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 148,
      "end": 160,
      "text": "n especial. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 160,
      "end": 252,
      "text": "Solicita tu Kit de Emergencia para coche gratis hoy respondiendo a unas breves preguntas. ??"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 252,
      "end": 257,
      "text": "Obt??"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 257,
      "end": 270,
      "text": "nlo ahora! ??"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 270,
      "end": 277,
      "text": "Solic??"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 277,
      "end": 289,
      "text": "talo ahora! "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 289,
      "end": 335,
      "text": "Si ya no deseas recibir estos correos electr??"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 335,
      "end": 386,
      "text": "nicos, puedes darte de baja haciendo clic en aqu?? "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 386,
      "end": 426,
      "text": "El anunciante no gestiona tu suscripci??"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 426,
      "end": 429,
      "text": "n. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 429,
      "end": 456,
      "text": "Si ya no deseas recibir m??"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 456,
      "end": 501,
      "text": "s comunicaciones, puedes darte de baja aqu?? "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 501,
      "end": 568,
      "text": "O escribe a: 128 Willow Crest Rd Ste 402#5912, Northwood, VT, 05744"
    }
  ],
  "passA": {
    "requestSha256": "34502ba486327c353f556b1595c6dba7ab8c6a01722a5853f590b230a2dec244",
    "capturedAt": "2026-09-22T03:57:16.481Z",
    "elapsedMs": 643.6586979998974,
    "successfulAttemptElapsedMs": 642.0769859999418,
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
          "noul": 0.41
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.69
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.22
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.15
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
            "no_sensitive_action": 0.28,
            "mixed_or_unknown": 0.06,
            "sender_supplied": 0.66,
            "independently_established": 0
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 5081,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "5b773424f6f7b010cd21f683e334f022464561a78d922d0d4b54628687e9851a",
    "capturedAt": "2026-09-22T03:57:17.028Z",
    "elapsedMs": 545.1570000000065,
    "successfulAttemptElapsedMs": 543.5059699999401,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:6": 0,
            "body:11": 0,
            "body:3": 0,
            "body:12": 0,
            "body:9": 0,
            "body:4": 0,
            "body:10": 0,
            "body:13": 0,
            "subject:3": 0,
            "body:0": 0,
            "body:15": 0,
            "body:8": 0.01,
            "body:1": 0,
            "body:16": 0.01,
            "subject:0": 0,
            "NONE": 0.37,
            "body:2": 0,
            "subject:2": 0.01,
            "body:5": 0.6,
            "subject:1": 0,
            "body:14": 0,
            "body:7": 0
          },
          "confidence": 0.57
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:6": 0.01,
            "body:11": 0,
            "body:8": 0.01,
            "body:12": 0,
            "body:0": 0,
            "body:4": 0,
            "body:10": 0,
            "body:13": 0,
            "subject:3": 0,
            "body:3": 0,
            "body:15": 0,
            "body:1": 0,
            "body:9": 0.01,
            "NONE": 0.05,
            "subject:0": 0.02,
            "body:16": 0,
            "subject:2": 0,
            "subject:1": 0.73,
            "body:5": 0.16,
            "body:2": 0,
            "body:14": 0,
            "body:7": 0.01
          },
          "confidence": 0.71
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:6": 0,
            "body:11": 0,
            "body:8": 0,
            "body:12": 0,
            "body:9": 0,
            "body:10": 0,
            "body:4": 0,
            "body:13": 0,
            "subject:3": 0,
            "body:0": 0.89,
            "body:15": 0,
            "body:3": 0.04,
            "body:1": 0,
            "NONE": 0.03,
            "subject:0": 0,
            "body:16": 0,
            "body:2": 0,
            "subject:1": 0,
            "body:5": 0.04,
            "subject:2": 0,
            "body:14": 0,
            "body:7": 0
          },
          "confidence": 0.88
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:0": 0,
            "body:8": 0,
            "body:1": 0,
            "body:11": 0,
            "body:10": 0,
            "body:4": 0,
            "body:13": 0,
            "subject:3": 0,
            "body:9": 0,
            "body:15": 0,
            "body:12": 0.01,
            "body:3": 0,
            "NONE": 0.95,
            "subject:0": 0,
            "body:16": 0.01,
            "subject:2": 0,
            "body:2": 0,
            "body:5": 0.03,
            "subject:1": 0,
            "body:14": 0,
            "body:7": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3849,
        "output_tokens": 902
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1190.675368999946,
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
        "status": "low_confidence",
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
        "segmentId": "subject:1"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 2239,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-456",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:15.838Z",
    "offsetMs": 1.3112630000105128
  },
  {
    "seq": 2240,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-456",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:16.481Z",
    "offsetMs": 643.6594249999616,
    "elapsedMs": 642.0769859999418,
    "outcome": "success"
  },
  {
    "seq": 2241,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-456",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:16.483Z",
    "offsetMs": 646.3279939999338
  },
  {
    "seq": 2242,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-456",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:17.027Z",
    "offsetMs": 1190.197022999986,
    "elapsedMs": 543.5059699999401,
    "outcome": "success"
  },
  {
    "seq": 2243,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-456",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:17.028Z",
    "offsetMs": 1190.7566289999522,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3e2d1f134e7681563427c9110dc1c5cd07ef6397fd79ea3a21a38b8b0a496594";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2240},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2242},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2243}} as const;
export const projectionSha256 = "2dd41d0396eefe1596f1428ed27f5202eecaeaacb53b07786249da1767ac0de7";
