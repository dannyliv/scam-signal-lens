import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-483",
  "inputSha256": "3f70d7c3994761a933c9d0800177cd6b580fcb6e734b92241216728d65b6bb90",
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
      "end": 37,
      "text": "DSP2  : Cliente _ Sign _N°10299737293"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 201,
      "text": "Buenos dias, Hemos detectado que aún no has activado el Pase de Seguridad . el pase de seguridad , es un servicio gratuito que le permite confirmar de forma rápida y segura sus transacciones en línea. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 201,
      "end": 256,
      "text": "Activa tu Pase de Seguridad » Merci de votre confiance."
    }
  ],
  "passA": {
    "requestSha256": "1394b2accf78fa411016321a221369e1ee2142c37f64c14aafc522054b5fdac8",
    "capturedAt": "2026-09-22T03:57:48.391Z",
    "elapsedMs": 598.4300379999913,
    "successfulAttemptElapsedMs": 597.0473350000102,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.11
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.28
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.22
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.77
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.13
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.6,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.38
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 4952,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "752372d063a14b58d4e17cf7fe32b6590dc993c218835c17647b0e1bf21de41a",
    "capturedAt": "2026-09-22T03:57:48.979Z",
    "elapsedMs": 586.6287680000532,
    "successfulAttemptElapsedMs": 585.0063049999299,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.03,
            "NONE": 0.74,
            "body:1": 0.23
          },
          "confidence": 0.65
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.07,
            "NONE": 0.71,
            "body:1": 0.22
          },
          "confidence": 0.6
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.08,
            "body:0": 0.49,
            "body:1": 0.09,
            "NONE": 0.34
          },
          "confidence": 0.31
        }
      },
      "usage": {
        "input_tokens": 1753,
        "output_tokens": 166
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1187.3691969999345,
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
    "seq": 2372,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-483",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:47.793Z",
    "offsetMs": 1.17357099999208
  },
  {
    "seq": 2373,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-483",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:48.390Z",
    "offsetMs": 598.4308079999173,
    "elapsedMs": 597.0473350000102,
    "outcome": "success"
  },
  {
    "seq": 2374,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-483",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:48.393Z",
    "offsetMs": 601.8589399999473
  },
  {
    "seq": 2375,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-483",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:48.979Z",
    "offsetMs": 1187.1899709999561,
    "elapsedMs": 585.0063049999299,
    "outcome": "success"
  },
  {
    "seq": 2376,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-483",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:48.979Z",
    "offsetMs": 1187.4101929999888,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "aebd0a0fae75572490f2bda686239153d9d7bb30c9c64d67a0fc3315f0610c5d";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2373},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2375},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2376}} as const;
export const projectionSha256 = "577ca634440082f5729663a559875b51e8d341553aaec9778d12ff2b6fcd7b08";
