import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-346",
  "inputSha256": "249ef2553568e85e5574e4e69d0de4efc861414850c362b5e69b67662e740ed8",
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
      "end": 22,
      "text": "Business Opportunity!!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 18,
      "text": "-- ¡Saludos a ti! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 18,
      "end": 167,
      "text": "Estoy participando en una discusión comercial imperativa que me gustaría compartir con ustedes porque estoy seguro de que les resultará beneficiosa. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 167,
      "end": 272,
      "text": "Por eso me comuniqué contigo; Espero realizar una inversión asociada con usted debido a su conocimiento. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 272,
      "end": 384,
      "text": "Por lo tanto, si está interesado en participar en este proyecto, comuníquese conmigo para obtener más detalles. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 384,
      "end": 561,
      "text": "Si encuentra este mensaje en su carpeta de correo no deseado o basura, tenga en cuenta que es el resultado de un problema del servidor, así que muévalo a su bandeja de entrada. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 561,
      "end": 645,
      "text": "En vista de la urgencia de este asunto, agradecería una respuesta lo antes posible. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 645,
      "end": 667,
      "text": "Tuyo sinceramente Sr. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 667,
      "end": 681,
      "text": "Javier Cortés,"
    }
  ],
  "passA": {
    "requestSha256": "2d0e2664393e0bf5d5fe2c79ad091b8cbabfecfe206f88e6ff67cab2bb6075f2",
    "capturedAt": "2026-09-22T03:55:07.195Z",
    "elapsedMs": 690.8262969999923,
    "successfulAttemptElapsedMs": 689.1692000000039,
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
          "noul": 0.08
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.11
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.75
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.24
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.22
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.21
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.15
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.13
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.71,
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.28
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 5035,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "df595150c3545b99832f8b4e68649faba2d07736a081a9e7a4e34234a11bd651",
    "capturedAt": "2026-09-22T03:55:07.790Z",
    "elapsedMs": 593.8400300000212,
    "successfulAttemptElapsedMs": 592.0415059999796,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0,
            "body:1": 0,
            "body:6": 0,
            "body:4": 0,
            "NONE": 0,
            "body:5": 1,
            "body:7": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.06,
            "subject:0": 0,
            "body:3": 0.01,
            "body:0": 0,
            "body:1": 0.01,
            "body:6": 0.14,
            "NONE": 0.49,
            "body:4": 0.26,
            "body:5": 0,
            "body:7": 0.03
          },
          "confidence": 0.42
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0,
            "body:3": 0.02,
            "body:0": 0,
            "body:1": 0,
            "body:6": 0,
            "NONE": 0.5,
            "body:4": 0.43,
            "body:5": 0.05,
            "body:7": 0
          },
          "confidence": 0.43
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.14,
            "subject:0": 0,
            "body:3": 0.08,
            "body:0": 0,
            "body:1": 0,
            "body:6": 0,
            "NONE": 0.78,
            "body:4": 0,
            "body:5": 0,
            "body:7": 0
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 2956,
        "output_tokens": 443
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1286.7406160000246,
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
        "status": "selected",
        "segmentId": "body:5"
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
        "status": "none_selected",
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
    "seq": 1692,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-346",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:06.505Z",
    "offsetMs": 1.2343680000049062
  },
  {
    "seq": 1693,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-346",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:07.194Z",
    "offsetMs": 690.8255770000396,
    "elapsedMs": 689.1692000000039,
    "outcome": "success"
  },
  {
    "seq": 1694,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-346",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:07.198Z",
    "offsetMs": 693.9618020000053
  },
  {
    "seq": 1695,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-346",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:07.790Z",
    "offsetMs": 1286.425588000042,
    "elapsedMs": 592.0415059999796,
    "outcome": "success"
  },
  {
    "seq": 1696,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-346",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:07.790Z",
    "offsetMs": 1286.7859230000176,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "640f100fda588682e475e88fa836d35f4df53dade31f842e4a3f23ad70c866d4";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1693},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1695},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1696}} as const;
export const projectionSha256 = "c618b43f254e0a0d642aab01ad1e10240ce33969f9c6521a4bbf3d238f881925";
