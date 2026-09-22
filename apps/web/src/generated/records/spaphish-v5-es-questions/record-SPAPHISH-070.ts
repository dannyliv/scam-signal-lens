import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-070",
  "inputSha256": "0da4f0f8a3db3e08048cdd47bb4e29ee9c29feeefb791160b78ebe99b0ce00e3",
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
      "end": 26,
      "text": "¡Se requiere verificación!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 136,
      "text": "Estimado ricardo.perez@corporate-net.com: Recientemente actualizamos nuestro servidor de SSL para mejorar el servicio que le prestamos. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 136,
      "end": 300,
      "text": "Por eso, tenga en cuenta que es necesario que todos los usuarios actualicen su información de inicio de sesión para que puedan disfrutar de la nueva actualización. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 300,
      "end": 464,
      "text": "No podrá enviar ni recibir correos electrónicos si no confirma este correo electrónico automatizado en un plazo de 24 horas a partir del momento en que lo recibió. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 464,
      "end": 528,
      "text": "Debe actualizar su información usando el enlace a continuación. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 528,
      "end": 573,
      "text": "ACTUALIZAR ¡Gracias por usar RedProfesional! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 573,
      "end": 597,
      "text": "Equipo de RedProfesional"
    }
  ],
  "passA": {
    "requestSha256": "a7ba882b9957fec3571afd4a37c9e2024902606ed6d972f977083ffd09f1677e",
    "capturedAt": "2026-09-22T03:49:36.513Z",
    "elapsedMs": 650.8700699999899,
    "successfulAttemptElapsedMs": 649.5993659999949,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.53
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.35
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.28
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
          "noul": 0.03
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
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.96,
            "independently_established": 0,
            "no_sensitive_action": 0.04,
            "mixed_or_unknown": 0
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 5013,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "9bddb68b0bac5d155759b0155f277fcbc6c37b64e24f3e463ea1389bef3f4204",
    "capturedAt": "2026-09-22T03:49:37.102Z",
    "elapsedMs": 587.8301720000018,
    "successfulAttemptElapsedMs": 586.4289250000002,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.22,
            "body:5": 0,
            "body:4": 0.02,
            "subject:0": 0,
            "body:0": 0,
            "body:2": 0.01,
            "body:3": 0.24,
            "NONE": 0.51
          },
          "confidence": 0.43
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.13,
            "body:5": 0,
            "body:4": 0.01,
            "body:0": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:3": 0.34,
            "NONE": 0.52
          },
          "confidence": 0.44
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0,
            "body:5": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:2": 1,
            "body:3": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:1": 0.03,
            "body:5": 0.79,
            "body:4": 0.02,
            "subject:0": 0,
            "body:0": 0.15,
            "body:3": 0,
            "body:2": 0.01,
            "NONE": 0
          },
          "confidence": 0.76
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "body:5": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:2": 0.08,
            "body:3": 0.18,
            "NONE": 0.73
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 3346,
        "output_tokens": 459
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1240.807627000002,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
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
        "status": "selected",
        "segmentId": "body:2"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:5"
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
    "seq": 341,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-070",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:35.862Z",
    "offsetMs": 0.9106599999940954
  },
  {
    "seq": 342,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-070",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:36.512Z",
    "offsetMs": 650.8710690000007,
    "elapsedMs": 649.5993659999949,
    "outcome": "success"
  },
  {
    "seq": 343,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-070",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:36.515Z",
    "offsetMs": 653.2789979999943
  },
  {
    "seq": 344,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-070",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:37.102Z",
    "offsetMs": 1240.331846999994,
    "elapsedMs": 586.4289250000002,
    "outcome": "success"
  },
  {
    "seq": 345,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-070",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:37.102Z",
    "offsetMs": 1240.8724559999973,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "83f078b85eb0f9640c7dca43743eeb42f28011b018dccdb39ff165c84a38b073";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":342},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":344},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":345}} as const;
export const projectionSha256 = "ef19b9e51005a844a655a8b1957522859d268fc8ab70f51587378a5a6d5a7d16";
