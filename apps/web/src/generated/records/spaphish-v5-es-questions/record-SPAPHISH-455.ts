import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-455",
  "inputSha256": "7c364cb30d80b9f1c0861931fa6ba829088d556e4d7b51af58517c61eabecd75",
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
      "end": 52,
      "text": "Disney +: Notificación de renovación de suscripción."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 45,
      "text": "Tu suscripción mensual a Disney ha expirado. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 45,
      "end": 168,
      "text": "Para seguir disfrutando de la música sin interrupciones, Haga clic en el botón a continuación para renovar su suscripción. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 168,
      "end": 331,
      "text": "RENUEVA TU SUSCRIPCIÓN AHORA Descargar Disney para: iPhone, iPad, Android y otros ¡Gracias por ser parte de la comunidad Disney! - Equipo de Disney © 2025 Disney. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 331,
      "end": 351,
      "text": "All Rights Reserved."
    }
  ],
  "passA": {
    "requestSha256": "5693196de8b5b953df8bca81d13758b82bd34cf20f4e1224442588674717f759",
    "capturedAt": "2026-09-22T03:57:15.329Z",
    "elapsedMs": 633.0208700000076,
    "successfulAttemptElapsedMs": 631.6853529999498,
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
          "noul": 0.5
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.85
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.76
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
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
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.78,
            "independently_established": 0,
            "mixed_or_unknown": 0.05,
            "no_sensitive_action": 0.17
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 4983,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c4395799e79c37a07af3614736363b254fc3020fd947de44ea3065166eb21a27",
    "capturedAt": "2026-09-22T03:57:15.836Z",
    "elapsedMs": 504.14863099996,
    "successfulAttemptElapsedMs": 502.4801420000149,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.02,
            "body:3": 0,
            "NONE": 0.52,
            "body:0": 0,
            "body:1": 0.46
          },
          "confidence": 0.42
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.17,
            "NONE": 0.05,
            "body:3": 0,
            "body:0": 0,
            "body:1": 0.78
          },
          "confidence": 0.72
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.52,
            "NONE": 0.01,
            "body:3": 0,
            "body:0": 0.14,
            "body:1": 0.33
          },
          "confidence": 0.42
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0.04,
            "body:2": 0.86,
            "NONE": 0.08,
            "body:3": 0,
            "body:0": 0.01,
            "body:1": 0.01
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 2480,
        "output_tokens": 294
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1140.055876999977,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 2234,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-455",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:14.697Z",
    "offsetMs": 1.1402510000625625
  },
  {
    "seq": 2235,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-455",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:15.329Z",
    "offsetMs": 633.022236000048,
    "elapsedMs": 631.6853529999498,
    "outcome": "success"
  },
  {
    "seq": 2236,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-455",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:15.333Z",
    "offsetMs": 637.002770000021
  },
  {
    "seq": 2237,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-455",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:15.836Z",
    "offsetMs": 1139.8203800000483,
    "elapsedMs": 502.4801420000149,
    "outcome": "success"
  },
  {
    "seq": 2238,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-455",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:15.836Z",
    "offsetMs": 1140.0992020000704,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d80f023d83c214a52b6c885325f2edddf76614f1e85e07ff7c31fc810eead78e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2235},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2237},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2238}} as const;
export const projectionSha256 = "5cdc7e585f56212b11e897bc6fa2603a76af71f167131080a415601e8fe6a49e";
