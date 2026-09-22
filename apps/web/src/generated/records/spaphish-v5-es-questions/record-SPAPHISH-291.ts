import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-291",
  "inputSha256": "1bf42cf3e8d9e125bbd7b593f6429c62107ed6cf9fc880041b89cb2b7bbcc81c",
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
      "end": 20,
      "text": "Tu compra en Cinemex"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 24,
      "text": "¡Ya tienes tus boletos! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 24,
      "end": 59,
      "text": "Esta es tu confirmación de compra. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 59,
      "end": 155,
      "text": "Pasa directo al acceso de tu sala mostrando el código QR en cualquier dispositivo móvil, tablet\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 155,
      "end": 169,
      "text": " o impresión. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 169,
      "end": 246,
      "text": "Código de compra B56 PFY5SSG Si no puedes ver el código QR, haz click aquí . "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 246,
      "end": 343,
      "text": "También puedes presentar el código de compra al momento de ingresar a la sala, ya que cuenta con\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 343,
      "end": 362,
      "text": " la misma validez. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 362,
      "end": 636,
      "text": "DATOS DE LA COMPRA Robot Salvaje Español, Tradicional Día Sábado 12 de octubre Hora 05:15 PM Cine Sala Sala 1 Tus boletos 2 ADULTO, 1 MENOR Asientos H6 / H7 / H8 Total pagado por boletos: $223.00 Costo por servicio: $24.00 Ayúdanos a conocer tu experiencia de compra aquí . "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 636,
      "end": 683,
      "text": "Datos para Comprobante Fiscal Complejo LER No. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 683,
      "end": 768,
      "text": "Ticket 178038 Fecha de compra 11/10/2024 Solicita tu Factura Danos tu opinión aquí . "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 768,
      "end": 810,
      "text": "Aviso de Privacidad Términos y Condiciones"
    }
  ],
  "passA": {
    "requestSha256": "95b6dce40e2fd8e0221366eed7da4f80d0b694408baab5713c4bed929882823b",
    "capturedAt": "2026-09-22T03:53:59.620Z",
    "elapsedMs": 652.3507100000279,
    "successfulAttemptElapsedMs": 650.6353649999946,
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
          "noul": 0.06
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
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.57
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.24
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.32,
            "mixed_or_unclear": 0.01,
            "informational": 0.67,
            "educational_or_quoted": 0
          },
          "confidence": 0.56
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.86,
            "independently_established": 0.01,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.12
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 5124,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "0ba0fa10512eaa7c8530cca17fa3aa466baf9df722abe79d5024a04102b14472",
    "capturedAt": "2026-09-22T03:54:00.158Z",
    "elapsedMs": 536.6996609999915,
    "successfulAttemptElapsedMs": 535.6852249999647,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0,
            "body:9": 0.07,
            "subject:0": 0.09,
            "body:6": 0,
            "body:10": 0.01,
            "body:3": 0,
            "body:8": 0.01,
            "body:7": 0.06,
            "NONE": 0.68,
            "body:2": 0.01,
            "body:1": 0.03,
            "body:0": 0.01,
            "body:4": 0.03
          },
          "confidence": 0.64
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.3,
            "body:9": 0.01,
            "subject:0": 0,
            "body:10": 0,
            "body:8": 0,
            "body:6": 0.01,
            "body:3": 0,
            "NONE": 0.5,
            "body:7": 0.01,
            "body:2": 0.07,
            "body:1": 0,
            "body:0": 0,
            "body:4": 0.1
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 2056,
        "output_tokens": 278
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1190.6293070000247,
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
        "status": "not_requested",
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
        "status": "low_confidence",
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
    "seq": 1420,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-291",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:58.968Z",
    "offsetMs": 0.9881600000080653
  },
  {
    "seq": 1421,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-291",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:59.620Z",
    "offsetMs": 652.3515609999886,
    "elapsedMs": 650.6353649999946,
    "outcome": "success"
  },
  {
    "seq": 1422,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-291",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:59.622Z",
    "offsetMs": 654.3526040000143
  },
  {
    "seq": 1423,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-291",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:00.158Z",
    "offsetMs": 1190.3265590000083,
    "elapsedMs": 535.6852249999647,
    "outcome": "success"
  },
  {
    "seq": 1424,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-291",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:00.158Z",
    "offsetMs": 1190.6884910000372,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "77eca7a5446b4f92f07f21a2e9da746b17e599be14fb353ac4d082effb2903b7";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1421},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1423},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1424}} as const;
export const projectionSha256 = "162785dbd7702f586e8128903b2d3046e57e0123bc0e8e8c162f1751238d0556";
