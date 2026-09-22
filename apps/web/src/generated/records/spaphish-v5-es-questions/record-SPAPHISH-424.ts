import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-424",
  "inputSha256": "6af309bf6831feb61fe816221923bb10c49bf1a8f38adca00b60a71b58866b24",
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
      "end": 72,
      "text": "Comprobante de pago No. 67 del 10/08/25 04:45:29 p. m. del mes de agosto"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 86,
      "text": "MENSAGEM: Estimado contribuyente: Le informamos que su pago se realizó correctamente. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 86,
      "end": 260,
      "text": "Le sugerimos que utilice su correo electrónico como contraseña para acceder a su recibo: ricardo.lopez@mailsecure.net --- Atentamente: Servicio de Administración Tributaria. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 260,
      "end": 322,
      "text": "\"Favor de no responder a este mensaje, es un envío automático\""
    }
  ],
  "passA": {
    "requestSha256": "dffd2f886876767c49825a9ee2039b7f831ee95251e3081cdfad1075108a617d",
    "capturedAt": "2026-09-22T03:56:38.206Z",
    "elapsedMs": 643.9127630000003,
    "successfulAttemptElapsedMs": 642.3062380000483,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.5
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.14
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.36
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.01,
            "informational": 0.33,
            "active_request": 0.66,
            "educational_or_quoted": 0
          },
          "confidence": 0.55
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.01,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.87,
            "no_sensitive_action": 0.11
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 4990,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "f04df8860a06c178d6e670741c740dd1ffa87fc130ec6b1a6824051db697cef6",
    "capturedAt": "2026-09-22T03:56:38.732Z",
    "elapsedMs": 524.7378749999916,
    "successfulAttemptElapsedMs": 523.1679529999965,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.95,
            "body:2": 0,
            "NONE": 0.05
          },
          "confidence": 0.93
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.02,
            "subject:0": 0,
            "body:1": 0.98,
            "body:2": 0,
            "NONE": 0
          },
          "confidence": 0.97
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.49,
            "body:2": 0.12,
            "NONE": 0.39
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 1962,
        "output_tokens": 201
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1170.0819069999852,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:1"
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2079,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-424",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:37.563Z",
    "offsetMs": 1.370320999994874
  },
  {
    "seq": 2080,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-424",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:38.206Z",
    "offsetMs": 643.9132959999843,
    "elapsedMs": 642.3062380000483,
    "outcome": "success"
  },
  {
    "seq": 2081,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-424",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:38.208Z",
    "offsetMs": 646.4491999999736
  },
  {
    "seq": 2082,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-424",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:38.732Z",
    "offsetMs": 1169.868587999954,
    "elapsedMs": 523.1679529999965,
    "outcome": "success"
  },
  {
    "seq": 2083,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-424",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:38.732Z",
    "offsetMs": 1170.1251379999449,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d55d89f345a98378eb07014c0562c70f8eeffaaca1584387fcaf198ebc548998";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2080},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2082},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2083}} as const;
export const projectionSha256 = "04a4ff5e2ef76896d468d7c68ae88c964cc1756b07e7d96611941be07bf66a14";
