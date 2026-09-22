import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-165",
  "inputSha256": "2ea44ee000dc056963bd61084c8c852f4b55af7cb7064240760ea4a4b23b120b",
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
    "requestSha256": "cf55663f90b73f00012433ea654fe74a6ec05b71c8eeff1efcb90646e7d10463",
    "capturedAt": "2026-09-22T03:51:29.470Z",
    "elapsedMs": 636.3114179999975,
    "successfulAttemptElapsedMs": 635.3895429999975,
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
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.21
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0.98,
            "active_request": 0.02,
            "mixed_or_unclear": 0
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.9,
            "sender_supplied": 0.1,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 5026,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "ae2dcd2127b7afe7f991c454b41665c998b4286f2792c1eab7a5405302a21390",
    "capturedAt": "2026-09-22T03:51:29.998Z",
    "elapsedMs": 527.4790109999885,
    "successfulAttemptElapsedMs": 526.5597129999951,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.02,
            "body:2": 0.29,
            "subject:0": 0,
            "body:1": 0.61,
            "NONE": 0.08
          },
          "confidence": 0.52
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.01,
            "body:2": 0.09,
            "subject:0": 0,
            "body:1": 0.5599999999999999,
            "NONE": 0.34
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 1534,
        "output_tokens": 136
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1165.2686799999792,
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
        "status": "low_confidence",
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
    "seq": 802,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-165",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:28.834Z",
    "offsetMs": 0.6881460000004154
  },
  {
    "seq": 803,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-165",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:29.469Z",
    "offsetMs": 636.3111780000036,
    "elapsedMs": 635.3895429999975,
    "outcome": "success"
  },
  {
    "seq": 804,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-165",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:29.471Z",
    "offsetMs": 638.1651119999879
  },
  {
    "seq": 805,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-165",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:29.998Z",
    "offsetMs": 1165.0802899999835,
    "elapsedMs": 526.5597129999951,
    "outcome": "success"
  },
  {
    "seq": 806,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-165",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:29.998Z",
    "offsetMs": 1165.3120439999911,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "96a0948d675b3bf3ab9d53cee9c6a6db832add6411d82689362bd22064f200df";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":803},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":805},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":806}} as const;
export const projectionSha256 = "4bc493e74ef9e88b8fbce40f811a82470dc727f1d16df1e0fd8617c8cfbb8c3f";
