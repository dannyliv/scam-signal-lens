import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-479",
  "inputSha256": "bed5837872b26134f56194a2381863a7ff557675c9354c32869251f85e0f6a92",
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
      "end": 64,
      "text": "Pablito! - Has ganado un televisor Samsung Qled TV 🎁____ID#1782"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 24,
      "text": "Walmart ✲ ¡Felicidades! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 24,
      "end": 113,
      "text": "Televisor Samsung Qled Este correo electrónico es nuestra carta oficial de confirmación. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 113,
      "end": 127,
      "text": "¡Felicidades! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 127,
      "end": 188,
      "text": "Has sido seleccionado para obtener una recompensa exclusiva. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 188,
      "end": 277,
      "text": "Tu nombre ha sido elegido para un Televisor Samsung Qled completamente nuevo de Walmart! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 277,
      "end": 465,
      "text": "CONTINUAR GRATIS» Si ya no deseas recibir estos correos electrónicos, puedes cancelar tu suscripción haciendo clic aquí o escribiendo a 780 Industrial Dr Ste.1-5055 Pleasant Hill, CA 94523"
    }
  ],
  "passA": {
    "requestSha256": "3e430d48dded3f4061fe939ab4d9cc63d257ee5d98eef2d238f1818ee045638f",
    "capturedAt": "2026-09-22T03:57:43.375Z",
    "elapsedMs": 926.8922719999682,
    "successfulAttemptElapsedMs": 925.2585279999766,
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
          "noul": 0.25
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.2
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.2
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.2
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.27
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
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
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.54,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.44,
            "independently_established": 0
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 5014,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "1fe2ae1acb325734f050b608f102a4d1ec6b22491a5c7a78bfe3df1024e6e504",
    "capturedAt": "2026-09-22T03:57:44.266Z",
    "elapsedMs": 889.8339859999251,
    "successfulAttemptElapsedMs": 888.1488619999727,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.89,
            "body:2": 0,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0.11,
            "body:0": 0,
            "body:4": 0
          },
          "confidence": 0.87
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.05,
            "body:2": 0,
            "body:1": 0.84,
            "body:3": 0,
            "body:5": 0.03,
            "body:0": 0.06999999999999999,
            "body:4": 0.01
          },
          "confidence": 0.81
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.93,
            "subject:0": 0.01,
            "body:2": 0,
            "body:1": 0,
            "body:3": 0.01,
            "body:5": 0.01,
            "body:0": 0,
            "body:4": 0.04
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 2178,
        "output_tokens": 274
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1818.5704299999634,
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
        "status": "none_selected",
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
        "segmentId": "body:1"
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
        "status": "none_selected",
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
    "seq": 2352,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-479",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:42.449Z",
    "offsetMs": 1.4081859999569133
  },
  {
    "seq": 2353,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-479",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:43.375Z",
    "offsetMs": 926.896557,
    "elapsedMs": 925.2585279999766,
    "outcome": "success"
  },
  {
    "seq": 2354,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-479",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:43.378Z",
    "offsetMs": 929.6860690000467
  },
  {
    "seq": 2355,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-479",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:44.266Z",
    "offsetMs": 1818.1687959999545,
    "elapsedMs": 888.1488619999727,
    "outcome": "success"
  },
  {
    "seq": 2356,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-479",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:44.267Z",
    "offsetMs": 1818.63662200002,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9b51bb4965565f08c36219d729afed7bf218f3ff0fb5e9cf5d37aab132d280ad";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2353},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2355},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2356}} as const;
export const projectionSha256 = "ece9379ca1c277755c171f19c5d8d593aaf6da63fc08368da087ed12fbf5e215";
