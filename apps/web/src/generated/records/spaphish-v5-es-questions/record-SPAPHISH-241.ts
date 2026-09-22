import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-241",
  "inputSha256": "7b06dbb9be47123e7204c7156254a2d8d7b0c763ec96df290f04281ae9e024f7",
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
      "end": 30,
      "text": "Error en la reunión programada"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 33,
      "text": "Hola, carlos.mendez@corpmail.com\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 33,
      "end": 80,
      "text": ": Hemos encontrado un problema con su reunión. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 80,
      "end": 210,
      "text": "Revise sus configuraciones a continuación: Revisar la configuración Revise su configuración para ingresar o rechazar una reunión. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 210,
      "end": 254,
      "text": "Gracias por elegir Zoom. - El equipo de Zoom"
    }
  ],
  "passA": {
    "requestSha256": "ef378458bda3570c8a7d0c4076756e2a757bbf684b3d84530f8c0facf2173bb3",
    "capturedAt": "2026-09-22T03:52:57.703Z",
    "elapsedMs": 608.4971709999954,
    "successfulAttemptElapsedMs": 607.1861800000188,
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
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.18
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.1
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.12
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.04,
            "educational_or_quoted": 0,
            "active_request": 0.96
          },
          "confidence": 0.94
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.91,
            "mixed_or_unknown": 0.02,
            "sender_supplied": 0.07,
            "independently_established": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 4940,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "d4e995deadc4f02569582d4ee00a32dc9790dbb446f5be8813d63f78b0944c88",
    "capturedAt": "2026-09-22T03:52:58.231Z",
    "elapsedMs": 526.1610199999996,
    "successfulAttemptElapsedMs": 524.4428380000172,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.06,
            "NONE": 0.06,
            "body:3": 0.83,
            "body:2": 0.05,
            "body:0": 0
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 825,
        "output_tokens": 77
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1136.7228999999934,
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
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 1174,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-241",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:57.095Z",
    "offsetMs": 0.9943029999849387
  },
  {
    "seq": 1175,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-241",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:57.702Z",
    "offsetMs": 608.4967419999884,
    "elapsedMs": 607.1861800000188,
    "outcome": "success"
  },
  {
    "seq": 1176,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-241",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:57.705Z",
    "offsetMs": 611.4671250000247
  },
  {
    "seq": 1177,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-241",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:58.230Z",
    "offsetMs": 1136.5248750000028,
    "elapsedMs": 524.4428380000172,
    "outcome": "success"
  },
  {
    "seq": 1178,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-241",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:58.231Z",
    "offsetMs": 1136.7607870000065,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "691b2b33affed35c7d226168c01050a517d4529f0a4e4316bd062cd050dcacf0";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1175},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1177},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1178}} as const;
export const projectionSha256 = "757f46a1add70c950133747e85e1f1b0b64266f9b0f1635ca403cd8235e78377";
