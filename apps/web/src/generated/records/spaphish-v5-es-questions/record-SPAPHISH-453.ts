import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-453",
  "inputSha256": "6e964e2adff432a16fb17e003461f63c07edf8c727d14da9232cc303d252df8c",
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
      "end": 46,
      "text": "Solicitud de trámite número PO01GMANRX223100L7"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 132,
      "text": "Estimado Cliente Agradecemos tu preferencia y en atención a la solicitud ingresada de Reembolso, anexamos al presente su respuesta. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 132,
      "end": 270,
      "text": "Si el tipo de pago de tu tramite es cheque favor de pasar a recoger el cheque después de 2 o 3 días de recibida la presente notificación. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 270,
      "end": 360,
      "text": "No es necesario responder este correo, ya que ha sido generado por un sistema automático. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 360,
      "end": 785,
      "text": "Reembolsos Salud y Bienestar Protección Capital América www.pca-seguros.com Únete a Proyecto Verde No imprimas este mensaje a menos que sea indispensable Aviso de confidencialidad: La información contenida en este mensaje es confidencial, restringida y está destinada únicamente para el uso de la persona a quien se le  dirige, se notifica que se encuentra prohibida cualquier difusión, distribución o copia de este mensaje. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 785,
      "end": 878,
      "text": "Si ha recibido esta comunicación o copia por error,  bórrelo y comuníquese con el remitente. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 878,
      "end": 984,
      "text": "Este correo tiene fines meramente informativos, por lo que no es fuente de obligaciones para el remitente."
    }
  ],
  "passA": {
    "requestSha256": "0c0eb415858300fb543fb67dfb2cb23a1194259019dc5ab2a72ceb027b3c4e34",
    "capturedAt": "2026-09-22T03:57:13.012Z",
    "elapsedMs": 683.9400420000311,
    "successfulAttemptElapsedMs": 682.4826289999764,
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
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.21
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.47
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.36,
            "active_request": 0.64,
            "educational_or_quoted": 0
          },
          "confidence": 0.51
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.02,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.04,
            "no_sensitive_action": 0.94
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 5132,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "a9937b06305f80bc8d0942dcea8e765eebc8ad8dc99d81201000a1bae4124eb7",
    "capturedAt": "2026-09-22T03:57:13.525Z",
    "elapsedMs": 511.8571729999967,
    "successfulAttemptElapsedMs": 510.3717900000047,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.21,
            "body:5": 0,
            "body:1": 0.78,
            "body:4": 0.01,
            "body:2": 0,
            "body:0": 0
          },
          "confidence": 0.75
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "body:3": 0.22,
            "NONE": 0.25,
            "body:5": 0,
            "body:1": 0.19,
            "body:4": 0.01,
            "body:2": 0.01,
            "body:0": 0.31
          },
          "confidence": 0.2
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.15,
            "body:5": 0,
            "body:1": 0.84,
            "body:4": 0.01,
            "body:2": 0,
            "body:0": 0
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 2620,
        "output_tokens": 282
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1197.2835870001,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 2224,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-453",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:12.329Z",
    "offsetMs": 1.2359570000553504
  },
  {
    "seq": 2225,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-453",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:13.012Z",
    "offsetMs": 683.9410090000601,
    "elapsedMs": 682.4826289999764,
    "outcome": "success"
  },
  {
    "seq": 2226,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-453",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:13.015Z",
    "offsetMs": 686.3363750000717
  },
  {
    "seq": 2227,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-453",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:13.525Z",
    "offsetMs": 1197.0181970000267,
    "elapsedMs": 510.3717900000047,
    "outcome": "success"
  },
  {
    "seq": 2228,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-453",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:13.526Z",
    "offsetMs": 1197.3335280000465,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0f7ba5209350eceb595417d1e6dad280636d8875b70c551c6406415e0b5bbe58";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2225},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2227},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2228}} as const;
export const projectionSha256 = "6da20b8b4c8db6d94b2799fd785a5039c1d1b3ee3f2c17066f5f0540b8ed1a03";
