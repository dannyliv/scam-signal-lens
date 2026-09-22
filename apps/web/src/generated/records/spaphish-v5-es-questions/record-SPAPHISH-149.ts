import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-149",
  "inputSha256": "96f4cdb56af21970e198fdf34d5b8cf1846cd20d4d0287999a18a3042197c647",
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
      "end": 10,
      "text": "Comunicado"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 29,
      "text": "Estimados Padres de Familia:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 29,
      "end": 30,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 30,
      "end": 364,
      "text": "Esperando que cada de ustedes y sus familias se encuentren con bien, ante la eventualidad del día de hoy, les comunicamos que se activaron los protocolos de protección civil para resguardar la integridad de todos los alumnos y el personal, compartiendo que todo se encuentra en orden en las instalaciones de los 4 niveles educativos.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 364,
      "end": 365,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 365,
      "end": 382,
      "text": "Atentamente Lic. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 382,
      "end": 413,
      "text": "Gabriel Sánchez Vargas Director"
    }
  ],
  "passA": {
    "requestSha256": "b0bd0fdbe37b39c7438fb6907f93a6fe173d141825263a200b55e2a773e19b9d",
    "capturedAt": "2026-09-22T03:51:10.870Z",
    "elapsedMs": 832.0998100000143,
    "successfulAttemptElapsedMs": 831.2130640000105,
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
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "choice": "informational",
          "probabilities": {
            "active_request": 0,
            "mixed_or_unclear": 0,
            "informational": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "independently_established": 0,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 4972,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "159f34894746aafeee38b4b029a83f1d80b663be26bc3fa0c78884a16ad7a874",
    "capturedAt": "2026-09-22T03:51:11.398Z",
    "elapsedMs": 526.9002080000064,
    "successfulAttemptElapsedMs": 526.102126999991,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:0": 0.01,
            "body:5": 0.79,
            "NONE": 0.05,
            "subject:0": 0,
            "body:3": 0,
            "body:2": 0.08,
            "body:1": 0,
            "body:4": 0.07
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 914,
        "output_tokens": 95
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1360.3946069999947,
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
        "segmentId": "body:5"
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
    "seq": 723,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-149",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:10.038Z",
    "offsetMs": 0.5391559999843594
  },
  {
    "seq": 724,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-149",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:10.870Z",
    "offsetMs": 832.1003100000089,
    "elapsedMs": 831.2130640000105,
    "outcome": "success"
  },
  {
    "seq": 725,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-149",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:10.871Z",
    "offsetMs": 833.7735329999996
  },
  {
    "seq": 726,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-149",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:11.398Z",
    "offsetMs": 1360.2028120000032,
    "elapsedMs": 526.102126999991,
    "outcome": "success"
  },
  {
    "seq": 727,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-149",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:11.398Z",
    "offsetMs": 1360.4372910000093,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ee837a39d875c7b6fbd1545613d51f2f19c5456f9e6f931ae496bd60891876e5";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":724},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":726},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":727}} as const;
export const projectionSha256 = "335a897e1e3c4bb48d0d4f6dd6ff483501ad4ba0ca5d5af38b2d07348a32aaee";
