import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-017",
  "inputSha256": "3373cd77d50395a5777a64e63cc118be98ee774c7fd01b0069b222c1dd2c32f4",
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
    "requestSha256": "ef8d35fbd253f877b58ed8f2236fb7f08ced7270bd8841c814b2ca2d71b85177",
    "capturedAt": "2026-09-22T03:48:30.430Z",
    "elapsedMs": 685.9976840000018,
    "successfulAttemptElapsedMs": 685.2498669999986,
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
          "noul": 0.11
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
          "noul": 0.95
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
          "noul": 0.22
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0.01,
            "active_request": 0.99,
            "mixed_or_unclear": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.72,
            "sender_supplied": 0.27,
            "independently_established": 0
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 5103,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "faa9a4126e3840efcca3a9527d11719b2ef0a593940a8e7a9dcfbf6a3d20d62b",
    "capturedAt": "2026-09-22T03:48:30.971Z",
    "elapsedMs": 539.2094539999998,
    "successfulAttemptElapsedMs": 538.6057019999971,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0,
            "body:1": 0.91,
            "body:0": 0.07,
            "NONE": 0.02
          },
          "confidence": 0.88
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0,
            "body:1": 0.34,
            "body:0": 0.01,
            "NONE": 0.65
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 1759,
        "output_tokens": 134
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1226.7380430000012,
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 79,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-017",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:29.744Z",
    "offsetMs": 0.4673629999997502
  },
  {
    "seq": 80,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-017",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:30.430Z",
    "offsetMs": 685.9985740000011,
    "elapsedMs": 685.2498669999986,
    "outcome": "success"
  },
  {
    "seq": 81,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-017",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:30.431Z",
    "offsetMs": 687.5777679999992
  },
  {
    "seq": 82,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-017",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:30.970Z",
    "offsetMs": 1226.5043640000004,
    "elapsedMs": 538.6057019999971,
    "outcome": "success"
  },
  {
    "seq": 83,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-017",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:30.971Z",
    "offsetMs": 1226.7842539999983,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e17cc38580e5f3774d7d4a2ac81f19bd3f6946da64fed9ae494885c4c4fd9fa5";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":80},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":82},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":83}} as const;
export const projectionSha256 = "ca5b9eabb9480c3607b84cea9589e8bf72647b5123946c8304afa3ab6ad5ad70";
