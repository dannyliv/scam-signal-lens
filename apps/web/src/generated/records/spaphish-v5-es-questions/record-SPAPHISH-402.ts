import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-402",
  "inputSha256": "bb1bb9a0436a4e08221098d4963fd52283b5c7ad29141c859374d5815f885fc7",
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
      "end": 18,
      "text": "Ha ganado un Fedex"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 56,
      "text": "Notificación de entrega de su paquete ID #84271560-984?\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 56,
      "end": 64,
      "text": "EXPRESS\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 64,
      "end": 65,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 65,
      "end": 110,
      "text": "IDENTIFICACIÓN DE SEGUIMIENTO 90544712860044\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 110,
      "end": 111,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 111,
      "end": 136,
      "text": "[Botón naranja] RASTREAR\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 136,
      "end": 137,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 137,
      "end": 225,
      "text": "❗ No pudimos entregar su paquete ya que no había nadie presente para firmar la entrega.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 225,
      "end": 226,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 226,
      "end": 342,
      "text": "✅ Estamos aquí para informarle que necesitamos una confirmación de dirección para reconfirmar el envío del paquete.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 342,
      "end": 343,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 343,
      "end": 370,
      "text": "[Botón azul] CONSULTA AQUÍ\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 370,
      "end": 371,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 371,
      "end": 543,
      "text": "Si ya no desea recibir estos correos electrónicos, puede darse de baja click en el enlace darse de baja o escribiendo a 742 Maple Grove Rd, Ste 210 #884, Fairview, CO 80439"
    }
  ],
  "passA": {
    "requestSha256": "46030b0a073aecaedf735e89f2eaee446110f02542b41f04ea2df658e5c91570",
    "capturedAt": "2026-09-22T03:56:12.402Z",
    "elapsedMs": 579.0850659999996,
    "successfulAttemptElapsedMs": 577.2605009999825,
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
          "noul": 0.3
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.46
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.15
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
          "noul": 0.05
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
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.26,
            "sender_supplied": 0.72,
            "independently_established": 0
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 5058,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "58514bdaa3bca9c051e72c2d6539f4cd0a08e32f6c27a4172e18f47fb6b69d80",
    "capturedAt": "2026-09-22T03:56:12.941Z",
    "elapsedMs": 538.3926639999845,
    "successfulAttemptElapsedMs": 537.0257519999868,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:11": 0.11,
            "body:8": 0,
            "body:12": 0,
            "body:3": 0,
            "body:4": 0.01,
            "body:9": 0.29000000000000004,
            "body:13": 0,
            "body:10": 0,
            "body:0": 0,
            "body:1": 0,
            "NONE": 0.59,
            "subject:0": 0,
            "body:2": 0,
            "body:5": 0,
            "body:7": 0
          },
          "confidence": 0.55
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:6": 0,
            "body:0": 0.01,
            "body:9": 0.33,
            "body:12": 0,
            "body:11": 0.01,
            "body:4": 0.01,
            "body:8": 0.01,
            "body:13": 0,
            "body:3": 0,
            "body:10": 0.01,
            "body:1": 0.04,
            "NONE": 0.3,
            "subject:0": 0.01,
            "body:2": 0,
            "body:5": 0,
            "body:7": 0.27
          },
          "confidence": 0.28
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:6": 0,
            "body:0": 0.06,
            "body:3": 0.01,
            "body:1": 0.01,
            "body:11": 0,
            "body:4": 0,
            "body:8": 0,
            "body:13": 0,
            "body:12": 0,
            "body:9": 0.62,
            "body:10": 0,
            "NONE": 0.02,
            "subject:0": 0.17,
            "body:2": 0,
            "body:5": 0,
            "body:7": 0.11
          },
          "confidence": 0.59
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:0": 0,
            "body:3": 0,
            "body:12": 0,
            "body:9": 0.05,
            "body:10": 0,
            "body:4": 0.01,
            "body:13": 0.01,
            "body:8": 0,
            "body:1": 0,
            "body:11": 0.12,
            "NONE": 0.8,
            "subject:0": 0,
            "body:2": 0,
            "body:5": 0.01,
            "body:7": 0
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 3394,
        "output_tokens": 672
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1119.3004809999838,
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
        "status": "low_confidence",
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
    "seq": 1969,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-402",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:11.824Z",
    "offsetMs": 1.4877850000048056
  },
  {
    "seq": 1970,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-402",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:12.401Z",
    "offsetMs": 579.0857309999992,
    "elapsedMs": 577.2605009999825,
    "outcome": "success"
  },
  {
    "seq": 1971,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-402",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:12.404Z",
    "offsetMs": 581.658265999984
  },
  {
    "seq": 1972,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-402",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:12.941Z",
    "offsetMs": 1119.0170989999897,
    "elapsedMs": 537.0257519999868,
    "outcome": "success"
  },
  {
    "seq": 1973,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-402",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:12.942Z",
    "offsetMs": 1119.3573359999573,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f3e6e68bd1a11a6f26523bad49279459aa5809a447be1a6dbd722916b9f9dcee";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1970},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1972},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1973}} as const;
export const projectionSha256 = "9a5f023150f593a855e7fb4bc30410d7864a45f69152c11c5f8c603f6f4adcd3";
