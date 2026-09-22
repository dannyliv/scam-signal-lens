import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-225",
  "inputSha256": "69cf9226de1da16e1fd95a2f1b0fe07b938cb65e4bcd095d600a70a11e6e3e20",
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
      "end": 44,
      "text": "RE: Su tarjeta está temporalmente suspendida"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 103,
      "text": "Estimado Cliente, Su tarjeta bancaria ha sido utilizada ilegalmente por la direccion IP 102.44.219.87. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 103,
      "end": 173,
      "text": "Hemos determinado que alguien ha utilizado su tarjeta sin su permiso. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 173,
      "end": 317,
      "text": "Haga clic en el enlace a continuacion para abrir una ventana segura del navegador y siga las instrucciones para proteger su tarjeta del fraude. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 317,
      "end": 479,
      "text": "Aviso : Si esto no se completa dentro de las 24 horas, se nos pedira que suspendamos su tarjeta de manera indefinida, ya que puede usarse con fines fraudulentos. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 479,
      "end": 521,
      "text": "Acceso Clientes Gracias por tu confianza. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 521,
      "end": 607,
      "text": "LA DIGILOSOFIA ES LA OPORTUNIDAD DE ELEGIR COMO, CUANDO Y DONDE QUIERES CONTACTARNOS. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 607,
      "end": 685,
      "text": "Banco Santander, S.A. - Domicilio Social: 1478 Nova Bratia 11 CIF A-99887744 b"
    }
  ],
  "passA": {
    "requestSha256": "9bcffca0b3f7bacc021f141074235b3369c41c6560ddb6e0ecfb9da63d461017",
    "capturedAt": "2026-09-22T03:52:39.923Z",
    "elapsedMs": 657.1919129999587,
    "successfulAttemptElapsedMs": 652.9304120000452,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.29
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.76
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.69
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.97,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.03
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 5077,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "cd1b8dd66bd0ec3707f25a22c0488fdca34e9687d500f407b8fa1a6cd1bdc565",
    "capturedAt": "2026-09-22T03:52:40.548Z",
    "elapsedMs": 623.9815289999824,
    "successfulAttemptElapsedMs": 622.7104439999675,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.66,
            "body:2": 0.31,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0,
            "body:0": 0,
            "body:4": 0.03,
            "body:6": 0
          },
          "confidence": 0.61
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.13,
            "subject:0": 0,
            "body:2": 0.86,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0,
            "body:0": 0,
            "body:4": 0.01,
            "body:6": 0
          },
          "confidence": 0.84
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:5": 0,
            "body:3": 1,
            "body:1": 0,
            "body:0": 0,
            "body:4": 0,
            "body:6": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.02,
            "body:2": 0.08,
            "body:1": 0.2,
            "body:3": 0.08,
            "body:5": 0.01,
            "body:0": 0.1,
            "body:4": 0.01,
            "body:6": 0.49
          },
          "confidence": 0.43
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.21,
            "subject:0": 0,
            "body:2": 0.7,
            "body:1": 0,
            "body:3": 0.06,
            "body:5": 0.03,
            "body:0": 0,
            "body:4": 0,
            "body:6": 0
          },
          "confidence": 0.65
        }
      },
      "usage": {
        "input_tokens": 3810,
        "output_tokens": 508
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1283.0355829999899,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:2"
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
        "segmentId": "body:3"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:2"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1096,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-225",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:39.266Z",
    "offsetMs": 0.8857609999831766
  },
  {
    "seq": 1097,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-225",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:39.922Z",
    "offsetMs": 657.1929600000149,
    "elapsedMs": 652.9304120000452,
    "outcome": "success"
  },
  {
    "seq": 1098,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-225",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:39.925Z",
    "offsetMs": 659.5508249999839
  },
  {
    "seq": 1099,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-225",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:40.548Z",
    "offsetMs": 1282.740850000002,
    "elapsedMs": 622.7104439999675,
    "outcome": "success"
  },
  {
    "seq": 1100,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-225",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:40.548Z",
    "offsetMs": 1283.0977060000296,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8980b9ddce08ef0da0c39d9d5c296948e8aa3d59a0581cba904988a5a8f61b65";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1097},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1099},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1100}} as const;
export const projectionSha256 = "2639961b41d5bdc938d3e8afbb032d988853085378eaa5dc8186c295c5c92cc9";
