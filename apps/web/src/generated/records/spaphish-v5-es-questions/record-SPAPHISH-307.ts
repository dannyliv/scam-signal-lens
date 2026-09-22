import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-307",
  "inputSha256": "f61fd4383f277886bf1cedf4c31b44e0d4600f4e00ecf583a76a8b8d5616d9b5",
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
      "end": 58,
      "text": "Ezequiela Miguelina! - Has ganado una Lancôme Beauty Box🎁"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 58,
      "text": "Solo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 96,
      "text": "DRUNI Hoy El Ganador es Andrea Soto ! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 96,
      "end": 157,
      "text": "las últimas tendencias en belleza ¡HAS SIDO SELECCIONADO(A)! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 157,
      "end": 237,
      "text": "Para recibir tu regalo: Caja de Lujo de Belleza Reclama tu regalo ¡Felicidades! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 237,
      "end": 330,
      "text": "Has sido seleccionado(a) para participar en nuestro programa de fidelidad de forma GRATUITA. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 330,
      "end": 388,
      "text": "Solo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 388,
      "end": 502,
      "text": "© 2025 GRUPO DRUNI SAS Si ya no deseas recibir estos correos electrónicos, puedes darte de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "1a9a4829dedd86462214fb3b632cfe2e6009774349b50728eb72d30f55837af3",
    "capturedAt": "2026-09-22T03:54:19.174Z",
    "elapsedMs": 670.235074999975,
    "successfulAttemptElapsedMs": 668.7882710000267,
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
          "noul": 0.29
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.46
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.46
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.13
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.18
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
            "mixed_or_unknown": 0.03,
            "independently_established": 0,
            "no_sensitive_action": 0.52,
            "sender_supplied": 0.45
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 5017,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "ed458d5d3c6ecbae708fe26781f7d97373ab61f52133802ed718f329671312ef",
    "capturedAt": "2026-09-22T03:54:19.705Z",
    "elapsedMs": 529.5463949999539,
    "successfulAttemptElapsedMs": 528.5674770000041,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:0": 0,
            "NONE": 0.93,
            "body:5": 0,
            "body:4": 0.01,
            "body:2": 0,
            "body:3": 0.06
          },
          "confidence": 0.92
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:6": 0,
            "subject:0": 0,
            "body:1": 0.13,
            "body:0": 0.41000000000000003,
            "NONE": 0.26,
            "body:4": 0,
            "body:5": 0.14,
            "body:2": 0,
            "body:3": 0.06
          },
          "confidence": 0.32
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.08,
            "subject:0": 0.02,
            "body:5": 0,
            "body:0": 0.01,
            "NONE": 0.65,
            "body:4": 0.16,
            "body:1": 0.05,
            "body:2": 0.01,
            "body:3": 0.02
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 2223,
        "output_tokens": 301
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1201.2495409999974,
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
        "status": "none_selected",
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
    "seq": 1499,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-307",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:18.504Z",
    "offsetMs": 1.0991590000339784
  },
  {
    "seq": 1500,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-307",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:19.174Z",
    "offsetMs": 670.2360630000476,
    "elapsedMs": 668.7882710000267,
    "outcome": "success"
  },
  {
    "seq": 1501,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-307",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:19.176Z",
    "offsetMs": 672.1960770000005
  },
  {
    "seq": 1502,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-307",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:19.704Z",
    "offsetMs": 1201.0206319999998,
    "elapsedMs": 528.5674770000041,
    "outcome": "success"
  },
  {
    "seq": 1503,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-307",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:19.705Z",
    "offsetMs": 1201.3053260000306,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a7078a1f60c5720947bb12d4839bba08c7187a175cab0ca54070ab4706ef931e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1500},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1502},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1503}} as const;
export const projectionSha256 = "46079c81676df621643baa61a1abf6c17791ac1660a764431e0f7e7e9b08c574";
