import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-435",
  "inputSha256": "35110273f14fa3d649d4c25d1d3fa5afcf8c11f12af95cb24496b9fff031fcb0",
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
      "end": 31,
      "text": "No pudimos completar su entrega"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 91,
      "text": "Su paquete UP20100444152CH está detenido en la oficina de correos debido a cargos impagos. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 91,
      "end": 287,
      "text": "Si no se paga el envío en 48 horas, el paquete será devuelto confirmar ahora _________________ Sent to ricardo.lopez@dominioficticio.net Unsubscribe: http://securitydata.activehosted.com/proc.php?"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 287,
      "end": 401,
      "text": "nl=1&c=5&m=7&s=a6597d807aac9f58ed9cac408c0e47db&act=unsub compsoe, 10 avenida de la privacidad, 4232 zürich, Suiza"
    }
  ],
  "passA": {
    "requestSha256": "48e28074422332f77dd35e3327b2b52a91b6c364a49f2d3bafaa5d12ceacdc90",
    "capturedAt": "2026-09-22T03:56:51.105Z",
    "elapsedMs": 582.7586419999716,
    "successfulAttemptElapsedMs": 581.3193050000118,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.1
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.44
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.88
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.78
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.44
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.55
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
          "noul": 0.04
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
            "independently_established": 0,
            "mixed_or_unknown": 0.08,
            "sender_supplied": 0.76,
            "no_sensitive_action": 0.16
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 5030,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "40843eb29e1d4aadfd73fba6296d1de1d87cf394c5f0223a42036383eaa84909",
    "capturedAt": "2026-09-22T03:56:51.708Z",
    "elapsedMs": 600.581102999975,
    "successfulAttemptElapsedMs": 599.0164700000314,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0.37,
            "body:0": 0.02,
            "body:1": 0.61
          },
          "confidence": 0.51
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0.01,
            "body:0": 0.04,
            "body:1": 0.95
          },
          "confidence": 0.93
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0,
            "body:0": 0,
            "body:1": 1
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.01,
            "subject:0": 0.05,
            "NONE": 0.24,
            "body:0": 0.59,
            "body:1": 0.11
          },
          "confidence": 0.49
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0.5,
            "body:0": 0.01,
            "body:1": 0.49
          },
          "confidence": 0.37
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0.16,
            "body:0": 0.15,
            "body:1": 0.6900000000000001
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 3763,
        "output_tokens": 394
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1185.7443339999882,
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
        "status": "selected",
        "segmentId": "body:1"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "low_confidence",
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
    "seq": 2134,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-435",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:50.524Z",
    "offsetMs": 1.2105740000260994
  },
  {
    "seq": 2135,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-435",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:51.105Z",
    "offsetMs": 582.7595270000165,
    "elapsedMs": 581.3193050000118,
    "outcome": "success"
  },
  {
    "seq": 2136,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-435",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:51.109Z",
    "offsetMs": 586.1871040000115
  },
  {
    "seq": 2137,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-435",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:51.708Z",
    "offsetMs": 1185.4892080000136,
    "elapsedMs": 599.0164700000314,
    "outcome": "success"
  },
  {
    "seq": 2138,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-435",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:51.708Z",
    "offsetMs": 1185.7880080000032,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "67684ab66d0471fac515cd98321a10a6b32ce429b25ea034f6328ed573b40f6d";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2135},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2137},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2138}} as const;
export const projectionSha256 = "ca17f69eb23e020308d33121a6f8ac5b0944bc950b1bda8f3e6d4425dbceda8e";
