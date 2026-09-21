import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-291",
  "inputSha256": "1bf42cf3e8d9e125bbd7b593f6429c62107ed6cf9fc880041b89cb2b7bbcc81c",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
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
    "requestSha256": "977e62f7e1bb0052b4d42d71591c24cc5903091e70a74391d952bf584359e274",
    "capturedAt": "2026-09-20T23:45:29.350Z",
    "elapsedMs": 132.37233300000662,
    "successfulAttemptElapsedMs": 130.68549999999232,
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
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.68
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.45
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.33,
            "informational": 0.64,
            "mixed_or_unclear": 0.03
          },
          "confidence": 0.51
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.8,
            "mixed_or_unknown": 0.01,
            "independently_established": 0.01,
            "sender_supplied": 0.18
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 3674,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "a9b48cd2f11ab354e1eba5dd19953902f57376073e6229cdbb9964e9cf6d6a1b",
    "capturedAt": "2026-09-20T23:45:29.540Z",
    "elapsedMs": 188.45620900001086,
    "successfulAttemptElapsedMs": 186.95154199999524,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0.03,
            "body:10": 0.01,
            "subject:0": 0.22,
            "body:1": 0.14,
            "body:8": 0.01,
            "body:3": 0.01,
            "body:6": 0,
            "body:2": 0.01,
            "body:4": 0.01,
            "NONE": 0.52,
            "body:0": 0.01,
            "body:5": 0,
            "body:7": 0.03
          },
          "confidence": 0.47
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:10": 0,
            "body:5": 0.34,
            "body:6": 0.01,
            "body:8": 0.01,
            "body:3": 0.01,
            "body:1": 0,
            "body:2": 0.06,
            "body:4": 0.05,
            "body:7": 0.01,
            "body:0": 0,
            "body:9": 0.01,
            "NONE": 0.5
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 1852,
        "output_tokens": 278
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 322.406415999998,
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
    "seq": 1424,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-291",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:29.219Z",
    "offsetMs": 1.1587909999943804
  },
  {
    "seq": 1425,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-291",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:29.350Z",
    "offsetMs": 132.37466600000334,
    "elapsedMs": 130.68549999999232,
    "outcome": "success"
  },
  {
    "seq": 1426,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-291",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:29.352Z",
    "offsetMs": 134.58566599999904
  },
  {
    "seq": 1427,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-291",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:29.540Z",
    "offsetMs": 322.1367079999909,
    "elapsedMs": 186.95154199999524,
    "outcome": "success"
  },
  {
    "seq": 1428,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-291",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:29.540Z",
    "offsetMs": 322.4637079999957,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "de0d33443be3621e8cd0dd24ca06ff3df2f6234de8674822bca6d849c03a352e";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1425},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1427},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1428}} as const;
export const projectionSha256 = "3171dd475131b5e34d74b0acc73bd943ac1d186cf821815698b870677d16bf54";
