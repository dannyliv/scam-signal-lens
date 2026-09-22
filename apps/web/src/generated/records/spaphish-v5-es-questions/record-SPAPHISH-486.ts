import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-486",
  "inputSha256": "0d3e68cab81e126ba496abfa8fc38891b6c90eeb6400a0a6f1f632ee970e3176",
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
      "end": 61,
      "text": "Missxtranger ,Checking the command -Amazon Mystery Box  🎁 . "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 61,
      "end": 72,
      "text": "ID:07213432"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 30,
      "text": "amazon ¡Eres nuestro ganador! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 30,
      "end": 184,
      "text": "Recompensa: Amazon Mystery Box Número de cliente: #902744118320 » Haga clic aquí para solicitar « Darse de baja El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 184,
      "end": 312,
      "text": "Si prefieres no recibir más comunicaciones, darse de baja aqui O escribe a: 912 Westbrook Ln Ste 210 #1187, Clearview, WY, 82955"
    }
  ],
  "passA": {
    "requestSha256": "8fbc08d7b65850735d1c3f03893309aeb2abfaed3770b86b918bf45e508f9c35",
    "capturedAt": "2026-09-22T03:57:52.082Z",
    "elapsedMs": 589.6086950000608,
    "successfulAttemptElapsedMs": 587.9618069999851,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.48
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.19
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.07
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.33
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.49
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.36
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.37
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.42
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
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.82,
            "no_sensitive_action": 0.15,
            "mixed_or_unknown": 0.03,
            "independently_established": 0
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 5005,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "981756264cff83d84815b7533a6f8023e5237ac1c93317985ebc62939b3b534b",
    "capturedAt": "2026-09-22T03:57:52.677Z",
    "elapsedMs": 593.1665569999022,
    "successfulAttemptElapsedMs": 591.1389040000504,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0,
            "body:1": 0.55,
            "body:2": 0.01,
            "subject:0": 0,
            "NONE": 0.44
          },
          "confidence": 0.45
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0.01,
            "subject:0": 0,
            "body:1": 0.24,
            "body:2": 0.01,
            "NONE": 0.74
          },
          "confidence": 0.69
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0.01,
            "body:0": 0.29,
            "body:1": 0.13,
            "body:2": 0.06,
            "subject:0": 0.02,
            "NONE": 0.49
          },
          "confidence": 0.39
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0,
            "body:2": 0.04,
            "subject:0": 0.01,
            "body:1": 0.23,
            "NONE": 0.72
          },
          "confidence": 0.66
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0,
            "body:1": 0.24,
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0.76
          },
          "confidence": 0.7
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0.35,
            "body:1": 0.07,
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0.58
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 3677,
        "output_tokens": 442
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1185.4045489999698,
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
        "status": "not_requested",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "none_selected",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "none_selected",
        "segmentId": null
      },
      "remote_access_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unrealistic_reward": {
        "status": "low_confidence",
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
    "seq": 2387,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-486",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:51.493Z",
    "offsetMs": 1.3692919999593869
  },
  {
    "seq": 2388,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-486",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:52.081Z",
    "offsetMs": 589.6092009999556,
    "elapsedMs": 587.9618069999851,
    "outcome": "success"
  },
  {
    "seq": 2389,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-486",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:52.085Z",
    "offsetMs": 593.1738670000341
  },
  {
    "seq": 2390,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-486",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:52.677Z",
    "offsetMs": 1185.0466739999829,
    "elapsedMs": 591.1389040000504,
    "outcome": "success"
  },
  {
    "seq": 2391,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-486",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:52.677Z",
    "offsetMs": 1185.4729410000145,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "df2c65a4337c5219ba2e3e6f005f42c7e83e001a48f3a403c9229c551088bc9d";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2388},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2390},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2391}} as const;
export const projectionSha256 = "22f9a7c1de1d85d1a30e7fa389511b2fbf2bae61b4986f9d4c5e6a5fd93a40c4";
