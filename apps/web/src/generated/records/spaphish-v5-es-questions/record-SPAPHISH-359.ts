import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-359",
  "inputSha256": "a37ac3bf171d10c3627b27143f87efda31d06ed6ef704d88344dda1d8599d7a9",
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
      "end": 80,
      "text": "Ezequiela Miguelina - Tu paquete de FedEx está esperando – Completa tu entrega ."
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 80,
      "end": 82,
      "text": "📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 13,
      "text": "FedEx España\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 13,
      "end": 37,
      "text": "Notificación de entrega\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 37,
      "end": 38,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 38,
      "end": 66,
      "text": "¡Su paquete está en camino!\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 66,
      "end": 117,
      "text": "Se entregará (1) paquete a su dirección en España.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 117,
      "end": 118,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 118,
      "end": 188,
      "text": "Use el código a continuación para rastrear su paquete en tiempo real.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 188,
      "end": 275,
      "text": "Planifique su entrega y manténgase informado con nuestras notificaciones instantáneas.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 275,
      "end": 329,
      "text": "Nos aseguramos de que su entrega sea rápida y segura.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 329,
      "end": 330,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 330,
      "end": 347,
      "text": "Rastree su envío\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 347,
      "end": 395,
      "text": "Rastree su paquete de manera rápida y sencilla:\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 395,
      "end": 396,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 396,
      "end": 432,
      "text": "Número de seguimiento: [9927846130]\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 432,
      "end": 433,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 433,
      "end": 514,
      "text": "Si no desea recibir más correos de este tipo, haga clic aquí para darse de baja.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 514,
      "end": 515,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 515,
      "end": 562,
      "text": "Política de privacidad | Términos y condiciones"
    }
  ],
  "passA": {
    "requestSha256": "a49e999305c617695a13da1e577a2a3714895a10ed7af30c27246efebcf4f8a3",
    "capturedAt": "2026-09-22T03:55:22.923Z",
    "elapsedMs": 641.5789919999661,
    "successfulAttemptElapsedMs": 639.8034589999588,
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
          "noul": 0.06
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
          "noul": 0.15
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.09
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.21,
            "active_request": 0.79,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.72
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0.16,
            "no_sensitive_action": 0.84,
            "independently_established": 0
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 5047,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "0cb7eceab1b04696287513dea9016f200a65e43350588791df0a23152b802cb4",
    "capturedAt": "2026-09-22T03:55:23.448Z",
    "elapsedMs": 523.3803850000259,
    "successfulAttemptElapsedMs": 522.0831279999693,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:16": 0,
            "subject:1": 0,
            "body:10": 0.01,
            "subject:0": 0.01,
            "body:3": 0,
            "body:13": 0,
            "body:9": 0,
            "body:1": 0.02,
            "body:4": 0,
            "body:17": 0,
            "body:2": 0,
            "body:8": 0.05,
            "body:11": 0,
            "body:15": 0.01,
            "body:12": 0,
            "body:14": 0,
            "NONE": 0.12,
            "body:6": 0.03,
            "body:5": 0,
            "body:7": 0.01,
            "body:0": 0.74
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 1240,
        "output_tokens": 220
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1166.8939489999902,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1757,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-359",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:22.282Z",
    "offsetMs": 1.212186999968253
  },
  {
    "seq": 1758,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-359",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:22.922Z",
    "offsetMs": 641.5792329999967,
    "elapsedMs": 639.8034589999588,
    "outcome": "success"
  },
  {
    "seq": 1759,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-359",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:22.925Z",
    "offsetMs": 644.0936590000056
  },
  {
    "seq": 1760,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-359",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:23.447Z",
    "offsetMs": 1166.580186999985,
    "elapsedMs": 522.0831279999693,
    "outcome": "success"
  },
  {
    "seq": 1761,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-359",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:23.448Z",
    "offsetMs": 1166.9639519999619,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fd77d36603b448861ec9a15bc81789192abe97f1ae0e5d49310a1dec3956a609";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1758},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1760},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1761}} as const;
export const projectionSha256 = "7154e94bbae49a9b2b5e3f8a699ce1d76e4a55d11e1ddd9bc592b0b809aea6c9";
