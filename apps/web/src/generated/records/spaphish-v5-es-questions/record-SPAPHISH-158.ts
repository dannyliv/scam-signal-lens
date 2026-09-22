import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-158",
  "inputSha256": "8b5414e9a3da601eb0ebf85cdc9f0ab121d37233c3fb5f66b08d591258caf0c2",
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
      "end": 38,
      "text": "Pablito - Tienes (1) mensaje nuestro. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 38,
      "end": 58,
      "text": "Complete su entrega."
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 58,
      "end": 69,
      "text": "📦 🚚 ..245"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 71,
      "text": "FedEx ® ☰ Fecha de envío: 11-25-2025 ¡Fallo en la entrega para Daniel! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 71,
      "end": 134,
      "text": "Entrega del paquete suspendida ¿Cómo desea recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 134,
      "end": 223,
      "text": "Quiero que me lo entreguen Lo recogeré yo mismo ¿Dónde desea que se entregue el paquete? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 223,
      "end": 592,
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 11-25-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "91d2f3a39f5499d022369441ec577a58f4fd80bb8c073506c4e53f1d8c4660b8",
    "capturedAt": "2026-09-22T03:51:21.213Z",
    "elapsedMs": 573.5706320000172,
    "successfulAttemptElapsedMs": 572.7398879999819,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.37
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.17
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.06
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
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.68,
            "sender_supplied": 0.3,
            "independently_established": 0,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 5032,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "4db7595b68f1e6f8ab2a7241b69de4e1c79fc1b23acd9e3d925aff92821895a4",
    "capturedAt": "2026-09-22T03:51:21.756Z",
    "elapsedMs": 541.5832400000072,
    "successfulAttemptElapsedMs": 540.608247999975,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:0": 0.03,
            "subject:2": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:3": 0.03,
            "NONE": 0.12,
            "body:1": 0.27,
            "subject:1": 0.55
          },
          "confidence": 0.47
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.84,
            "subject:2": 0,
            "body:2": 0.01,
            "subject:0": 0.02,
            "body:3": 0.02,
            "NONE": 0.08,
            "body:1": 0.02,
            "subject:1": 0.01
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 1621,
        "output_tokens": 187
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1116.6893869999913,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 767,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-158",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:20.640Z",
    "offsetMs": 0.5642259999876842
  },
  {
    "seq": 768,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-158",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:21.213Z",
    "offsetMs": 573.5709509999724,
    "elapsedMs": 572.7398879999819,
    "outcome": "success"
  },
  {
    "seq": 769,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-158",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:21.214Z",
    "offsetMs": 575.4915479999909
  },
  {
    "seq": 770,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-158",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:21.755Z",
    "offsetMs": 1116.446758999984,
    "elapsedMs": 540.608247999975,
    "outcome": "success"
  },
  {
    "seq": 771,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-158",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:21.756Z",
    "offsetMs": 1116.7435899999982,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2a3667f05579cfcbb5231684dbc943f1433ddee1eae9a244a6e128ef0553f6d7";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":768},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":770},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":771}} as const;
export const projectionSha256 = "47202d7ae4ab3470b9684e42d6045a2e12a771da3e8c486299304f3fac3ae74c";
