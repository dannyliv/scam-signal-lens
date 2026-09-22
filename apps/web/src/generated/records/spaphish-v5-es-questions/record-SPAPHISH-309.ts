import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-309",
  "inputSha256": "ad90dbf938307cb4b8b97d3a544c79a0a5e6ccbcee4542e0902fc169fe9bea2d",
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
      "end": 29,
      "text": "Este Regalo MetLife No Durará"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 8,
      "text": "MetLife\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 8,
      "end": 51,
      "text": "¡Reclame su kit de monitoreo de salud hoy!\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 51,
      "end": 52,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 52,
      "end": 126,
      "text": "Has sido seleccionado para recibir un Kit de Monitoreo de Salud gratuito.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 126,
      "end": 180,
      "text": "Completa nuestra breve encuesta para obtener el tuyo.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 180,
      "end": 181,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 181,
      "end": 232,
      "text": "Las recompensas son limitadas: ¡no te las pierdas!\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 232,
      "end": 233,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 233,
      "end": 253,
      "text": "Realice la encuesta\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 253,
      "end": 254,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 254,
      "end": 344,
      "text": "Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí."
    }
  ],
  "passA": {
    "requestSha256": "81ccab1ce18a6bf30e5c7affed7135576f618338b78c95fd393a5415d5ec2cad",
    "capturedAt": "2026-09-22T03:54:21.259Z",
    "elapsedMs": 809.3161819999805,
    "successfulAttemptElapsedMs": 808.1361419999739,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.34
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
          "noul": 0.79
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.11
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
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.51,
            "sender_supplied": 0.48,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 4971,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "afd0590a49b4069894647d5fe2c7c19aed2e44aaaa751ce20e48bb38528d9073",
    "capturedAt": "2026-09-22T03:54:21.817Z",
    "elapsedMs": 556.8100469999481,
    "successfulAttemptElapsedMs": 555.5064180000336,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:6": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:10": 0,
            "body:9": 0,
            "body:8": 0.12,
            "body:7": 0,
            "body:3": 0,
            "body:5": 0,
            "NONE": 0.62,
            "body:4": 0.26
          },
          "confidence": 0.58
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:4": 0,
            "body:6": 0.59,
            "body:0": 0,
            "subject:0": 0.35,
            "body:2": 0,
            "body:10": 0,
            "body:9": 0,
            "body:8": 0,
            "body:3": 0,
            "body:7": 0,
            "body:5": 0,
            "NONE": 0.01,
            "body:1": 0.05
          },
          "confidence": 0.55
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.02,
            "body:5": 0,
            "body:0": 0.67,
            "body:2": 0.01,
            "subject:0": 0.01,
            "body:10": 0,
            "body:9": 0,
            "body:8": 0.02,
            "body:7": 0,
            "body:3": 0.13,
            "body:6": 0,
            "NONE": 0.11,
            "body:4": 0.03
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 2183,
        "output_tokens": 414
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1367.8848969999817,
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
    "seq": 1508,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-309",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:20.450Z",
    "offsetMs": 0.7859499999904074
  },
  {
    "seq": 1509,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-309",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:21.258Z",
    "offsetMs": 809.3165380000137,
    "elapsedMs": 808.1361419999739,
    "outcome": "success"
  },
  {
    "seq": 1510,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-309",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:21.261Z",
    "offsetMs": 811.7726779999794
  },
  {
    "seq": 1511,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-309",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:21.817Z",
    "offsetMs": 1367.5634829999763,
    "elapsedMs": 555.5064180000336,
    "outcome": "success"
  },
  {
    "seq": 1512,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-309",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:21.817Z",
    "offsetMs": 1367.9623439999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1924b8848fb5b26cbc28476b083ba8b6b71f8f3ef2ceef2cac44686c2a989663";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1509},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1511},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1512}} as const;
export const projectionSha256 = "772c43dcdc2b4175a6f51618c9700232db5093daafa6456f95f30f38be123f26";
