import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-168",
  "inputSha256": "0d32f2e8fee3c81cb8864b07378fcd1cd4d6a6e215173b52a87174a34504922d",
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
      "end": 69,
      "text": "Ezequiela Miguelina - Tienes (1) paquete esperando ser entregado 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 69,
      "end": 112,
      "text": "Usa tu código para rastrearlo y recibirlo. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 112,
      "end": 119,
      "text": "ID#3614"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 63,
      "text": "❒ ENTREGA DEL PAQUETE PENDIENTE ◉ Registro / Inicio de sesión ."
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 63,
      "end": 212,
      "text": "GLS❒ 99887766 SEGUIMIENTO ➢ Laura Soto Tienes (1) paquete pendiente de entrega Confirma tus datos de envío ■ tienes un paquete pendiente de entrega. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 212,
      "end": 325,
      "text": "Sigue tu pedido en tiempo real y programa la entrega para asegurarte de recibirlo a la hora que más te convenga! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 325,
      "end": 410,
      "text": "PROGRAMA TU ENTREGA Si no deseas recibir más correos electrónicos, desconéctate aquí."
    }
  ],
  "passA": {
    "requestSha256": "a654e14da371322d80357a42802e179f39006ec0fc0a37251d47e0b9e8678b11",
    "capturedAt": "2026-09-22T03:51:33.263Z",
    "elapsedMs": 658.063553999993,
    "successfulAttemptElapsedMs": 657.0872279999894,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.42
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.41
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
          "noul": 0.23
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.8
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.2
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.28,
            "sender_supplied": 0.69,
            "independently_established": 0,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 5032,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "3e874248306dda78af8b1af516d89e68194e1110d15cf6518066dc282dd55816",
    "capturedAt": "2026-09-22T03:51:33.785Z",
    "elapsedMs": 519.0911959999939,
    "successfulAttemptElapsedMs": 517.8482859999931,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "NONE": 0.37,
            "subject:0": 0,
            "subject:2": 0,
            "subject:1": 0.09,
            "body:3": 0,
            "body:0": 0.47000000000000003,
            "body:1": 0.07
          },
          "confidence": 0.38
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "NONE": 0.27,
            "subject:0": 0,
            "subject:1": 0,
            "subject:2": 0,
            "body:3": 0,
            "body:0": 0.03,
            "body:1": 0.7
          },
          "confidence": 0.65
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.07,
            "NONE": 0.78,
            "subject:0": 0.01,
            "subject:1": 0.03,
            "subject:2": 0,
            "body:3": 0.06,
            "body:0": 0.03,
            "body:1": 0.02
          },
          "confidence": 0.75
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.01,
            "NONE": 0.23,
            "subject:0": 0.01,
            "subject:2": 0.01,
            "subject:1": 0,
            "body:3": 0.01,
            "body:0": 0.12,
            "body:1": 0.61
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 2869,
        "output_tokens": 369
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1179.7072550000157,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "none_selected",
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
    "seq": 817,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-168",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:32.606Z",
    "offsetMs": 0.6990290000103414
  },
  {
    "seq": 818,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-168",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:33.263Z",
    "offsetMs": 658.0641820000019,
    "elapsedMs": 657.0872279999894,
    "outcome": "success"
  },
  {
    "seq": 819,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-168",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:33.266Z",
    "offsetMs": 660.949168000021
  },
  {
    "seq": 820,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-168",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:33.784Z",
    "offsetMs": 1179.3249200000137,
    "elapsedMs": 517.8482859999931,
    "outcome": "success"
  },
  {
    "seq": 821,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-168",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:33.785Z",
    "offsetMs": 1179.782365000021,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c98bb76e76953a97f562e5cd1dbf0f8fa0dcefeb4b668ddced0f5ac84d52439e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":818},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":820},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":821}} as const;
export const projectionSha256 = "fd98452eeffcad1f829697c59ea4f3b03a80ce1f1ef889725119d4093f680e1e";
