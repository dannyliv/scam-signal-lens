import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-305",
  "inputSha256": "bb20a095553f19a439f73ae2b311ded94b3e8e3a9a1af6837eaeda520d12e1a0",
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
      "end": 50,
      "text": "Atención: Tiene un paquete que no ha sido recibido"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 59,
      "text": "Elija la dirección, el día y la hora que más le convengan. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 59,
      "end": 157,
      "text": "Ahora dispone de 48 horas ENTREGA DEL PAQUETE SUSPENDIDO Tienes (1) paquete en espera de entrega. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 157,
      "end": 200,
      "text": "Usa tu código para rastrearlo y recibirlo. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 200,
      "end": 311,
      "text": "Programa tu entrega y suscríbete a nuestro calendario de notificaciones para evitar que esto suceda ¡otra vez! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 311,
      "end": 417,
      "text": "Su código de seguimiento FR78152044Z Programa tu entrega Esperamos que disfrutes recibiendo este mensaje. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 417,
      "end": 532,
      "text": "Sin embargo, si prefieres no recibir correos electrónicos en el futuro, por favor haz clic aquí para darte de baja."
    }
  ],
  "passA": {
    "requestSha256": "75075480c878baf1baac12261fa1735ae67f7a10f9128067655a819c03831963",
    "capturedAt": "2026-09-22T03:54:16.644Z",
    "elapsedMs": 687.1162250000052,
    "successfulAttemptElapsedMs": 685.6807200000039,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.89
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.56
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.17
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.59,
            "independently_established": 0,
            "sender_supplied": 0.39,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 5025,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "795f05f9756e03e0c9189320ac971ff3abed172086e0c27c95192fcd28498abc",
    "capturedAt": "2026-09-22T03:54:17.260Z",
    "elapsedMs": 615.0515560000204,
    "successfulAttemptElapsedMs": 613.7276720000082,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:3": 0.03,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.97,
            "body:5": 0,
            "body:4": 0,
            "NONE": 0,
            "body:2": 0
          },
          "confidence": 0.97
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.08,
            "body:0": 0.01,
            "subject:0": 0.04,
            "body:1": 0.05,
            "body:5": 0.01,
            "body:4": 0.03,
            "NONE": 0.76,
            "body:2": 0.02
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 1610,
        "output_tokens": 185
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1303.8034699999844,
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
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "none_selected",
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
    "seq": 1489,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-305",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:15.958Z",
    "offsetMs": 1.0822119999793358
  },
  {
    "seq": 1490,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-305",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:16.644Z",
    "offsetMs": 687.116864999989,
    "elapsedMs": 685.6807200000039,
    "outcome": "success"
  },
  {
    "seq": 1491,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-305",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:16.646Z",
    "offsetMs": 689.4346019999939
  },
  {
    "seq": 1492,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-305",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:17.260Z",
    "offsetMs": 1303.5731399999931,
    "elapsedMs": 613.7276720000082,
    "outcome": "success"
  },
  {
    "seq": 1493,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-305",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:17.261Z",
    "offsetMs": 1303.847415999975,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "11f9d60e5743586ce0745b013c935689445521dce6e99580083fe3225d15a197";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1490},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1492},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1493}} as const;
export const projectionSha256 = "b2213fc4a585670c42016ee2b27afd52ec5c91e25b07d4f08bbe518a69ab2a86";
