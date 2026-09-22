import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-450",
  "inputSha256": "840c1cd985006a7070870f2bb01f95f911686cfb52dae0f9544f5cc69c6fc8d2",
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
      "end": 7,
      "text": "Aviso !"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 159,
      "text": "Estimado Cliente , Tenemos que actualizar tus documentos para cumplir con la Ley 15/2022 de prevención de blanqueo de capitales, sólo te llevará unos minutos. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 159,
      "end": 286,
      "text": "El Formulario de conocimiento del cliente ya está actualizado : Es importante que lo actualizas en un plazo máximo de una dia. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 286,
      "end": 613,
      "text": "En caso contrario, recuerda que tu operativa en la web y en la app está Iimitada a consultas, por teléfono puedes seguir operando, pe ro tus cuentas no podrán admitir nuevos ingresos hasta que estén actualizados. https://bbva.seguro.com/actualizar Consulta todos tus detalles y movimientos en la App BBVA o en tu Banca Online. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 613,
      "end": 654,
      "text": "Gracias por seguir confiando en nosotros."
    }
  ],
  "passA": {
    "requestSha256": "2bf04bea9da5eec4e73cb2d30958bfff51e8bb3003937441b27ab18caca94a40",
    "capturedAt": "2026-09-22T03:57:09.383Z",
    "elapsedMs": 579.866505999933,
    "successfulAttemptElapsedMs": 578.4250159999356,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.79
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
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.25
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
          "noul": 0.79
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.81,
            "no_sensitive_action": 0.17,
            "mixed_or_unknown": 0.01,
            "independently_established": 0.01
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 5037,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "d754d6ebafeced8ee65a30fef1f444239ea11af7dbfa77c02ec70cb65691af4f",
    "capturedAt": "2026-09-22T03:57:09.893Z",
    "elapsedMs": 508.34992999990936,
    "successfulAttemptElapsedMs": 505.10256599995773,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:3": 0,
            "subject:0": 0,
            "body:0": 0.23,
            "body:1": 0.14,
            "NONE": 0.03,
            "body:2": 0.6
          },
          "confidence": 0.51
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:3": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.22,
            "NONE": 0,
            "body:2": 0.78
          },
          "confidence": 0.73
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:3": 0,
            "subject:0": 0,
            "body:0": 0.93,
            "body:1": 0.01,
            "NONE": 0.05,
            "body:2": 0.01
          },
          "confidence": 0.9
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:3": 0,
            "subject:0": 0,
            "body:0": 0.01,
            "body:1": 0.01,
            "NONE": 0.48,
            "body:2": 0.5
          },
          "confidence": 0.4
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:3": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0,
            "NONE": 0.04,
            "body:2": 0.96
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3328,
        "output_tokens": 377
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1090.0574380001053,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
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
        "segmentId": "body:0"
      },
      "verification_bypass": {
        "status": "low_confidence",
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
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 2209,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-450",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:08.804Z",
    "offsetMs": 1.1882160000968724
  },
  {
    "seq": 2210,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-450",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:09.382Z",
    "offsetMs": 579.8667850000784,
    "elapsedMs": 578.4250159999356,
    "outcome": "success"
  },
  {
    "seq": 2211,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-450",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:09.387Z",
    "offsetMs": 584.2631580000743
  },
  {
    "seq": 2212,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-450",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:09.892Z",
    "offsetMs": 1089.7855900001014,
    "elapsedMs": 505.10256599995773,
    "outcome": "success"
  },
  {
    "seq": 2213,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-450",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:09.893Z",
    "offsetMs": 1090.1242810001131,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8fff7e9f81bcac3fca5948a255f5c66c2716421a97658b1d0c015185e1619149";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2210},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2212},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2213}} as const;
export const projectionSha256 = "ffff24692fbdd653961ef67a67e5f0f5697e392eb41fe522735ba1e059b89e12";
