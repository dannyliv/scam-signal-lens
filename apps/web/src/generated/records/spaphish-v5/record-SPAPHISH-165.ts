import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-165",
  "inputSha256": "2ea44ee000dc056963bd61084c8c852f4b55af7cb7064240760ea4a4b23b120b",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "subject:0",
      "source": "subject",
      "start": 0,
      "end": 41,
      "text": "Su contraseña de Zoom se ha restablecido."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 154,
      "text": "Hola, Vidal Salas: La contraseña de su cuenta de GlobalMeet (SofiaRojasVargas@gmail.com) se restableció correctamente el Aug 21, 2024 a las 04:42 PM CST. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 154,
      "end": 235,
      "text": "Si tiene preguntas, póngase en contacto con el Soporte al cliente de GlobalMeet. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 235,
      "end": 404,
      "text": "Gracias por elegir GlobalMeet. -El equipo de GlobalMeet +1.800.555.0000 ©2024 GlobalMeet - All Rights Reserved Visit globalmeet.net 123 Tech Way Silicon Valley, CA 95000"
    }
  ],
  "passA": {
    "requestSha256": "fda810105b02eb53cfe85ff4f029f94e5c11428cfc7faaa5384097ef1e1fcd0d",
    "capturedAt": "2026-09-20T23:44:43.877Z",
    "elapsedMs": 189.24804199999926,
    "successfulAttemptElapsedMs": 187.58591599999636,
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
          "noul": 0.03
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.19
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.03,
            "educational_or_quoted": 0,
            "informational": 0.97,
            "mixed_or_unclear": 0
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.01,
            "sender_supplied": 0.09,
            "no_sensitive_action": 0.9,
            "mixed_or_unknown": 0
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 3576,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "78c6ae267d3256ac133e602980785d9f14eb67ef8a57342fb00188293b3db6cf",
    "capturedAt": "2026-09-20T23:44:43.979Z",
    "elapsedMs": 99.77391699999862,
    "successfulAttemptElapsedMs": 98.0355419999978,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.02,
            "subject:0": 0,
            "body:1": 0.72,
            "NONE": 0.06,
            "body:2": 0.2
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 884,
        "output_tokens": 68
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 291.37204100000235,
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
    "seq": 808,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-165",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:43.689Z",
    "offsetMs": 1.0752080000020214
  },
  {
    "seq": 809,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-165",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:43.877Z",
    "offsetMs": 189.25162500000442,
    "elapsedMs": 187.58591599999636,
    "outcome": "success"
  },
  {
    "seq": 810,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-165",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:43.880Z",
    "offsetMs": 192.52741600000445
  },
  {
    "seq": 811,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-165",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:43.979Z",
    "offsetMs": 291.2225830000025,
    "elapsedMs": 98.0355419999978,
    "outcome": "success"
  },
  {
    "seq": 812,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-165",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:43.979Z",
    "offsetMs": 291.4136660000004,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0b7dbac0c270aeadcb04092b3be9f669ba8f57e05b22d337397a144eff3201ce";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":809},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":811},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":812}} as const;
export const projectionSha256 = "207d50004ec82bbf0af82d2333a6d707e9a826e3ab1500ae61bd3636026fafed";
