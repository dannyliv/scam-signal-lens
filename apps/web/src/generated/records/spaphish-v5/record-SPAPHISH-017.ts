import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-017",
  "inputSha256": "3373cd77d50395a5777a64e63cc118be98ee774c7fd01b0069b222c1dd2c32f4",
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
      "end": 3,
      "text": "jnh"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 280,
      "text": "Comunidad Celianista\"El Sistema de Bienestar Integral Celianista ZCAR desde la Línea de Promoción de la Salud y Prevención de la Enfermedad y la Zona Caribe en articulación con la Escuela de Ciencias de la Salud les invita a participar en la charla \"Salud Mental y Post Pandemia\"."
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 280,
      "end": 633,
      "text": "Formulario de Inscripción aquíUnirse a la Conferencia de Zoom aquí --\"Un exterior saludable comienza desde el interior\" Robert UrichCLAUDIA MORENO ALDANALíder Zonal Bienestar Integral Celianista ZCARVicerrectoría de Servicios de Aspirantes, Estudiantes y Egresados VISAETel: 5879021 - Ext 2041187Skype: Claudia.morenoZCARCEAD-Valledupar, avenida 22 No. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 633,
      "end": 727,
      "text": "15-41 - Barrio La EsperanzaValledupar / CesarInstituto Superior de Estudios Transversales ISET"
    }
  ],
  "passA": {
    "requestSha256": "666d288c0e9b9e8efaa890bea6510d1d0e3d33549a4f80577815fecad8d176a1",
    "capturedAt": "2026-09-20T23:43:56.518Z",
    "elapsedMs": 193.00112499999977,
    "successfulAttemptElapsedMs": 191.67124999999942,
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
          "noul": 0.08
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
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.12
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.01,
            "active_request": 0.99,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.56,
            "sender_supplied": 0.43,
            "independently_established": 0
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 3653,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "8908453c26a557d1ecbf0f1e23bc0a26612979f33f7559891deb538dec70714e",
    "capturedAt": "2026-09-20T23:43:56.679Z",
    "elapsedMs": 158.01879199999985,
    "successfulAttemptElapsedMs": 156.22179200000028,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.01,
            "body:2": 0,
            "body:1": 0.64,
            "subject:0": 0,
            "body:0": 0.35
          },
          "confidence": 0.54
        }
      },
      "usage": {
        "input_tokens": 1035,
        "output_tokens": 68
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 354.31508399999984,
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 79,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-017",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:56.325Z",
    "offsetMs": 0.7722499999999854
  },
  {
    "seq": 80,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-017",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:56.518Z",
    "offsetMs": 193.00266699999975,
    "elapsedMs": 191.67124999999942,
    "outcome": "success"
  },
  {
    "seq": 81,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-017",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:56.522Z",
    "offsetMs": 196.8810000000003
  },
  {
    "seq": 82,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-017",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:56.679Z",
    "offsetMs": 353.91533400000026,
    "elapsedMs": 156.22179200000028,
    "outcome": "success"
  },
  {
    "seq": 83,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-017",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:56.679Z",
    "offsetMs": 354.3819169999997,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "efafe0b04fd047bb998055697c7610ad1f48a0876c2250cddb36ba6f700f43ba";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":80},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":82},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":83}} as const;
export const projectionSha256 = "65563f642e6afeb5e3920817d866610419effed1546d5745d91587cef154d2a8";
