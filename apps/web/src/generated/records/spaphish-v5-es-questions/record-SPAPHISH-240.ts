import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-240",
  "inputSha256": "55621b2f7b40c048e8cd16fc7640172509a9b826caf7faf5494824134208ab88",
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
      "end": 47,
      "text": "ÚLTIMA ALERTA: ¡TODAS TUS FOTOS SERÁN BORRADAS!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 314,
      "text": "de iCloud proporcionado por Apple, que permite a los usuarios almacenar sus datos, como fotos, vídeos, documentos y más, en los servidores de Apple y puede acceder a ellos desde cualquier dispositivo de usuario Actualizar mi pago El equipo de iCloud El Equipo iCloud iCloud es un servicio proporcionado por Apple. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 314,
      "end": 529,
      "text": "Darse de baja Derechos de autor 2025 El anunciante no gestiona su suscripción Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 123 Ficción St Ste 687#2043, Villa Protegida, CA, 90210"
    }
  ],
  "passA": {
    "requestSha256": "ceaa45e84565d3e4025f062ff7f829119fb4077f3ed25be10f6d5e4cd1c0b8bf",
    "capturedAt": "2026-09-22T03:52:56.468Z",
    "elapsedMs": 602.3492580000311,
    "successfulAttemptElapsedMs": 600.9911420000135,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.45
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.68
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.92
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.2
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
          "noul": 0.09
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
            "informational": 0.05,
            "mixed_or_unclear": 0.03,
            "active_request": 0.92
          },
          "confidence": 0.9
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.8,
            "no_sensitive_action": 0.16,
            "mixed_or_unknown": 0.04
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 5048,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "062b53afce1e2b5dccf4770a4cf2df6cdc33af3433c7e0f93111fc2e3459bf5d",
    "capturedAt": "2026-09-22T03:52:57.093Z",
    "elapsedMs": 623.0070199999609,
    "successfulAttemptElapsedMs": 621.6682220000075,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.6,
            "body:1": 0.01,
            "subject:0": 0,
            "NONE": 0.39
          },
          "confidence": 0.47
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.84,
            "body:1": 0.01,
            "subject:0": 0,
            "NONE": 0.15
          },
          "confidence": 0.78
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:0": 0.04,
            "body:1": 0,
            "subject:0": 0.95,
            "NONE": 0.01
          },
          "confidence": 0.93
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.93,
            "body:1": 0.01,
            "subject:0": 0,
            "NONE": 0.06
          },
          "confidence": 0.91
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.02,
            "body:1": 0.04,
            "subject:0": 0.03,
            "NONE": 0.91
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 3248,
        "output_tokens": 280
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1227.4669959999737,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "subject:0"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 1169,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-240",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:55.866Z",
    "offsetMs": 0.9070969999884255
  },
  {
    "seq": 1170,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-240",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:56.467Z",
    "offsetMs": 602.3495289999992,
    "elapsedMs": 600.9911420000135,
    "outcome": "success"
  },
  {
    "seq": 1171,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-240",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:56.470Z",
    "offsetMs": 604.9839259999571
  },
  {
    "seq": 1172,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-240",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:57.092Z",
    "offsetMs": 1227.109461999964,
    "elapsedMs": 621.6682220000075,
    "outcome": "success"
  },
  {
    "seq": 1173,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-240",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:57.093Z",
    "offsetMs": 1227.5256930000032,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c9af5b1e9965dab681315d18394bbc6ccec2570672d5807f464ff9f9069334d4";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1170},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1172},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1173}} as const;
export const projectionSha256 = "65070a70d3a920db150ec330a0a78c3fcea808c39edbef856e0c743d5f7774ab";
