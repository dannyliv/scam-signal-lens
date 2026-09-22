import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-190",
  "inputSha256": "40774a20e8e6e53da71bcdc27fe295077bfad8451ac0966bdc83fb7d7f7756fc",
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
      "end": 12,
      "text": "NRFM Informa"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 130,
      "text": "CLICK BELOW to read this message in your browser: https://click.notificaciones-corp.com/t/98765432/0123456789/345678901/0/999999/?"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 130,
      "end": 327,
      "text": "b44ed14b=MDVlOWUwOWUtMTlkOS00MTFmLWJkYjYtNDVlNzMyY2MyNjhh&9bc9e11f=MTAwMDYx&bcd98c89=MjU0MjYwNDQzMzI&x=85a7868a If clicking doesn't work, copy the line above and paste it into your browser window.\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 327,
      "end": 328,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 328,
      "end": 419,
      "text": "To remove your name from this list, send a blank email to leave-999999-98765432-0123456789."
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 419,
      "end": 564,
      "text": "XYZ321ABC@bounce.notificaciones-corp.com or click the link below https://click.notificaciones-corp.com/t/98765432/0123456789/345678901/0/999999/?"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 564,
      "end": 663,
      "text": "f566cc7b=MTc0OTEyMDczNC4yR1EyU0lXU01N&3e076d18=W2VtYWlsYWRkcl0&c73c8e04=bmlzc2FuLXBsYW4&x=32accb47\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 663,
      "end": 664,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 664,
      "end": 773,
      "text": "This email was sent to: aRamirez@hotmail.com This email was sent by: Auto Crédito Global, S. de R.L. de C.V. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 773,
      "end": 777,
      "text": "Av. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 777,
      "end": 824,
      "text": "Paseo de las Fuentes Número 508, piso 12, Col. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 824,
      "end": 888,
      "text": "Del Valle Norte, Alcaldía Benito Juárez , Ciudad de México C.P. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 888,
      "end": 894,
      "text": "03800,"
    }
  ],
  "passA": {
    "requestSha256": "52250185e9080a5d2f05c64f2fc5ed208989fb6adf8043f8db0fee8ba086ec31",
    "capturedAt": "2026-09-22T03:51:57.345Z",
    "elapsedMs": 605.8454529999872,
    "successfulAttemptElapsedMs": 604.9792089999828,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.57
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.07
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.89,
            "educational_or_quoted": 0,
            "informational": 0.1,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.85
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.23,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0.77
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 5309,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "1b718d323e55cb9402c83423249171d7c4e976e5daa2f8d4b0acf8771ae3c52a",
    "capturedAt": "2026-09-22T03:51:57.891Z",
    "elapsedMs": 544.7497260000091,
    "successfulAttemptElapsedMs": 543.5147509999806,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:1": 0.01,
            "body:0": 0.01,
            "body:7": 0.3,
            "body:11": 0,
            "subject:0": 0.02,
            "body:5": 0,
            "body:4": 0,
            "body:2": 0,
            "body:3": 0.03,
            "body:9": 0.01,
            "body:8": 0.01,
            "body:10": 0.01,
            "NONE": 0.6
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 1671,
        "output_tokens": 149
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1152.5830209999986,
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
    "seq": 923,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-190",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:56.739Z",
    "offsetMs": 0.6071280000032857
  },
  {
    "seq": 924,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-190",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:57.344Z",
    "offsetMs": 605.8450989999983,
    "elapsedMs": 604.9792089999828,
    "outcome": "success"
  },
  {
    "seq": 925,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-190",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:57.347Z",
    "offsetMs": 608.3975890000002
  },
  {
    "seq": 926,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-190",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:57.891Z",
    "offsetMs": 1152.3062320000026,
    "elapsedMs": 543.5147509999806,
    "outcome": "success"
  },
  {
    "seq": 927,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-190",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:57.891Z",
    "offsetMs": 1152.6505030000117,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7b761fb4db62a710064816761b03cb5120f242503f5eb06236721bf344b544fa";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":924},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":926},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":927}} as const;
export const projectionSha256 = "48c405a5e6688e9bce348030a0e8891789afa6b530c8e9f664eb48b852214c1b";
