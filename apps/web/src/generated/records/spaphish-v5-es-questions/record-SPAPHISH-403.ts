import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-403",
  "inputSha256": "a5da9586db8a86e0fc8fda255d38b1f6e56e5ece4408e26e8eb6e2b7f06de3d6",
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
      "end": 21,
      "text": "Fwd: Reactivar Correo"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 225,
      "text": "Estimado Cliente, Su correo electrónico actualmente se encuentra en riesgo de bloqueo permanente de nuestros servicios afiliados, Es por ello que le pediremos comprobar su identidad: alerta-outlook.live.com.hstn.me/ Gracias. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 225,
      "end": 276,
      "text": "El equipo de cuenta de Microsoft *© 2023 Microsoft*"
    }
  ],
  "passA": {
    "requestSha256": "2c1a08e1795ea40b36b52a6f1d36adb2af6e499723c1c1cf54afeb9061f0f104",
    "capturedAt": "2026-09-22T03:56:13.552Z",
    "elapsedMs": 609.3414560000529,
    "successfulAttemptElapsedMs": 607.8918070000364,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.48
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.78
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
          "noul": 0.92
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.52
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
            "sender_supplied": 0.97,
            "no_sensitive_action": 0.03,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 4945,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "d456f430df64bae51da4c909f1804229f8be6e84f26fe895b8edd8c36cd4cdf1",
    "capturedAt": "2026-09-22T03:56:14.114Z",
    "elapsedMs": 559.9197849999764,
    "successfulAttemptElapsedMs": 558.3335250000237,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.44,
            "NONE": 0.56,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.4
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.95,
            "NONE": 0.05,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.93
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 1,
            "NONE": 0,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.2,
            "NONE": 0,
            "subject:0": 0,
            "body:1": 0.8
          },
          "confidence": 0.73
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.3,
            "NONE": 0.7,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 2658,
        "output_tokens": 281
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1171.2384109999985,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:0"
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
        "segmentId": "body:0"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "verification_bypass": {
        "status": "low_confidence",
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1974,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-403",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:12.944Z",
    "offsetMs": 1.201991000038106
  },
  {
    "seq": 1975,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-403",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:13.552Z",
    "offsetMs": 609.3409190000384,
    "elapsedMs": 607.8918070000364,
    "outcome": "success"
  },
  {
    "seq": 1976,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-403",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:13.555Z",
    "offsetMs": 612.2620449999813
  },
  {
    "seq": 1977,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-403",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:14.114Z",
    "offsetMs": 1170.969366000034,
    "elapsedMs": 558.3335250000237,
    "outcome": "success"
  },
  {
    "seq": 1978,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-403",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:14.114Z",
    "offsetMs": 1171.2838680000277,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "cd9d7e4af13c2010c0b470bace87e431c4e6d583bc804f65c0e1ad9d6db2a916";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1975},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1977},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1978}} as const;
export const projectionSha256 = "c159bd6fc68c7a786d8d75edd2857864b95f6ace39decf0569995e6f0cf6323e";
