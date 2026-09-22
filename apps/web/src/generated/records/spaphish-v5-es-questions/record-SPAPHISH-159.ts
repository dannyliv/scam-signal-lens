import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-159",
  "inputSha256": "279c1e2142b7709f9acc525eab95207ec48457f7ef79775ff213ba871c591fbc",
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
      "text": "Fecha de examen para Defensa de Tesis"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 240,
      "text": "Buenas tardes, solo para confirmar la fecha y hora establecida para la realización del examen para la Defensa de Proyecto, dispuesta para el Miércoles 17 de enero a las 10:00 horas, esto conforme a lo acordado con los sinodales y asesores. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 240,
      "end": 286,
      "text": "Agradeciendo su tiempo y atención, me despido."
    }
  ],
  "passA": {
    "requestSha256": "8f0092a57f9c27329815db0ebd575d439d04ee6455c3bb5530a2a8a6a1b17ac9",
    "capturedAt": "2026-09-22T03:51:22.430Z",
    "elapsedMs": 672.5314400000207,
    "successfulAttemptElapsedMs": 671.4245349999983,
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
          "noul": 0.02
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.37
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.94,
            "active_request": 0.06
          },
          "confidence": 0.91
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 4961,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "200816b85efebfb19b2961e929c2e1c9377cbe077be2f00050db22aeb4166ef0",
    "capturedAt": "2026-09-22T03:51:22.991Z",
    "elapsedMs": 559.7160779999977,
    "successfulAttemptElapsedMs": 558.4307020000124,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.57,
            "body:1": 0.01,
            "body:0": 0.4,
            "subject:0": 0.02
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 839,
        "output_tokens": 57
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1234.5196760000254,
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
    "seq": 772,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-159",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:21.758Z",
    "offsetMs": 0.6041170000098646
  },
  {
    "seq": 773,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-159",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:22.429Z",
    "offsetMs": 672.5317560000112,
    "elapsedMs": 671.4245349999983,
    "outcome": "success"
  },
  {
    "seq": 774,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-159",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:22.432Z",
    "offsetMs": 675.4350360000099
  },
  {
    "seq": 775,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-159",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:22.991Z",
    "offsetMs": 1234.3345230000268,
    "elapsedMs": 558.4307020000124,
    "outcome": "success"
  },
  {
    "seq": 776,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-159",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:22.992Z",
    "offsetMs": 1234.559558000008,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3c7151091a3cb0c61f7e3c7b293f74fad0701c14c91d9e8143a9589cf3145b57";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":773},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":775},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":776}} as const;
export const projectionSha256 = "8455689051795d520c25d373d9772166b2d3b8252e1a3e004ff66f399d79f05a";
