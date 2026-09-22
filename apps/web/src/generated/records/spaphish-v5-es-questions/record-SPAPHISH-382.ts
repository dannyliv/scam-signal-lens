import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-382",
  "inputSha256": "19305f06366de37f691a141120bd0de62a1abefb50d0598d91d1ce571b6d24bc",
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
      "end": 74,
      "text": "Ábrelo haciendo clic a continuación."
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 74,
      "end": 85,
      "text": "📦 🚚 ..398"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 78,
      "text": "FedEx ® ☰ Fecha de envío: 02-27-2025 ¡Fallo en la entrega para Rafael Madero! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 78,
      "end": 141,
      "text": "Entrega del paquete suspendida ¿Cómo desea recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 141,
      "end": 230,
      "text": "Quiero que me lo entreguen Lo recogeré yo mismo ¿Dónde desea que se entregue el paquete? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 230,
      "end": 599,
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 02-27-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "53c5423ba619500cae70eab46d3bb2a79952371c8b78ea90f8d1476b540b3bd3",
    "capturedAt": "2026-09-22T03:55:50.011Z",
    "elapsedMs": 637.4333709999919,
    "successfulAttemptElapsedMs": 635.8897450000513,
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
          "noul": 0.12
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
          "noul": 0.28
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.18
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
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.32,
            "no_sensitive_action": 0.66,
            "independently_established": 0,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.54
        }
      },
      "usage": {
        "input_tokens": 5038,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "549257414184c52ce62c046041c0ce38d6944a5abf9bbf18cc1695c4c360ed9d",
    "capturedAt": "2026-09-22T03:55:50.538Z",
    "elapsedMs": 525.1674960000091,
    "successfulAttemptElapsedMs": 523.7212589999544,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:1": 0.31,
            "body:0": 0.07,
            "subject:0": 0.01,
            "body:3": 0.1,
            "NONE": 0.42,
            "subject:1": 0.08,
            "subject:2": 0
          },
          "confidence": 0.34
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.01,
            "subject:0": 0.01,
            "body:0": 0.89,
            "body:1": 0.02,
            "body:3": 0.02,
            "NONE": 0.05,
            "subject:1": 0,
            "subject:2": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 1639,
        "output_tokens": 185
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1165.060913000023,
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
    "seq": 1871,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-382",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:49.375Z",
    "offsetMs": 1.185730000026524
  },
  {
    "seq": 1872,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-382",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:50.011Z",
    "offsetMs": 637.432433000009,
    "elapsedMs": 635.8897450000513,
    "outcome": "success"
  },
  {
    "seq": 1873,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-382",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:50.014Z",
    "offsetMs": 640.653638000018
  },
  {
    "seq": 1874,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-382",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:50.538Z",
    "offsetMs": 1164.7387960000196,
    "elapsedMs": 523.7212589999544,
    "outcome": "success"
  },
  {
    "seq": 1875,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-382",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:50.539Z",
    "offsetMs": 1165.1242590000038,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a9ca0a8d9989b225076eab72dc2c92b03852046d1b75cbe04be96c1343ffbb84";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1872},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1874},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1875}} as const;
export const projectionSha256 = "d039d0f9b37a231d7c5b6f220b31b691bd76de019c7b120ff6861704cc7a6c81";
