import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-122",
  "inputSha256": "a7f197efab2a719306d1ebb871c4bf77aeb7c836ee712c29a62efdb1612974dd",
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
      "end": 22,
      "text": "Corrección de facturas"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 24,
      "text": "Buenas noches estimada:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 24,
      "end": 25,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 25,
      "end": 162,
      "text": "Soy cliente de Clínica de Análisis y Diagnóstico Avanzado donde regularmente acudo para realizar estudios clínicos míos y de mi familia. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 162,
      "end": 317,
      "text": "Sin embargo, en las facturas que me han emitido por concepto de estudios realizados hay errores que hacen que no las pueda emplear para deducir impuestos. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 317,
      "end": 471,
      "text": "Agradecería que se solucionaran estos detalles y se emitieran las facturas correctas, a fin de poderlas usar para deducir los impuestos correspondientes.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 471,
      "end": 472,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 472,
      "end": 512,
      "text": "Adjunto envío las facturas en cuestión. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 512,
      "end": 776,
      "text": "El error, que me notificó mi asesor fiscal, está en el \"Uso del Comprobante\", que se indicó como \"Adquisición de mercancías\" cuando debió ser \"Servicios de salud y hospitalarios\", como lo he indicado cuando he entregado mis datos fiscales para generar la factura. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 776,
      "end": 883,
      "text": "Agradecería mucho, por favor, que se pudiera solucionar este error y emitir las facturas correspondientes.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 883,
      "end": 884,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 884,
      "end": 931,
      "text": "Quedo atento a sus comentarios e indicaciones.\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 931,
      "end": 932,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 932,
      "end": 948,
      "text": "Muchas gracias! "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 948,
      "end": 965,
      "text": "Saludos cordiales"
    }
  ],
  "passA": {
    "requestSha256": "481c928a6923f2464a92e67f57292213fc4db3aaae7aa43ca7bbcac2b1089f7b",
    "capturedAt": "2026-09-20T23:44:30.256Z",
    "elapsedMs": 147.41370900000038,
    "successfulAttemptElapsedMs": 145.69225000000006,
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
          "noul": 0.03
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.6
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
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
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.96,
            "sender_supplied": 0,
            "independently_established": 0.04
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3677,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "5a6e4ba8b64160198021a8f0e4f099a25a590ab093efb83bab8aa44a0d231db3",
    "capturedAt": "2026-09-20T23:44:30.489Z",
    "elapsedMs": 231.48745800000324,
    "successfulAttemptElapsedMs": 229.7690419999999,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:4": 0,
            "body:7": 0.5,
            "body:2": 0.47000000000000003,
            "body:3": 0,
            "body:13": 0,
            "body:12": 0,
            "body:11": 0,
            "body:1": 0,
            "body:0": 0,
            "body:8": 0,
            "body:5": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:6": 0,
            "NONE": 0.03,
            "body:10": 0
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 1235,
        "output_tokens": 171
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 381.1099580000009,
  "derived": {
    "concern": "few_warning_signs",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
        "status": "not_requested",
        "segmentId": null
      },
      "analyzer_instruction": {
        "status": "not_requested",
        "segmentId": null
      }
    },
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 598,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-122",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:30.109Z",
    "offsetMs": 1.0949999999938882
  },
  {
    "seq": 599,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-122",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:30.256Z",
    "offsetMs": 147.41579099999944,
    "elapsedMs": 145.69225000000006,
    "outcome": "success"
  },
  {
    "seq": 600,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-122",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:30.258Z",
    "offsetMs": 150.3322909999988
  },
  {
    "seq": 601,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-122",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:30.489Z",
    "offsetMs": 380.7962499999994,
    "elapsedMs": 229.7690419999999,
    "outcome": "success"
  },
  {
    "seq": 602,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-122",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:30.489Z",
    "offsetMs": 381.2056659999944,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ce410e2174b7d7ff3e60680cd46a6c136c3b94318f61ed4de47b5c6a268b27fc";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":599},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":601},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":602}} as const;
export const projectionSha256 = "3ae1a059aa99a947aee9748853ba4aa7eddee436ba2284f4b02f7a544c8ff3a7";
