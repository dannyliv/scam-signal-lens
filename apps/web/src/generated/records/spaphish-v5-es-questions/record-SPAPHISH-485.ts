import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-485",
  "inputSha256": "d3f8adbe82c83995ab771329a48e979f7a8d5e2837beba79827a63cd838960d0",
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
      "end": 21,
      "text": "Tiene nuevos mensajes"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 169,
      "text": "Hola, ricardo.perez@corporate.net: Usted tiene nuevas notificaciones importantes de servicio relacionadas con su correo electrónico que requieren su atención inmediata. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 169,
      "end": 238,
      "text": "Se requiere que siga los pasos necesarios usando el siguiente botón. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 238,
      "end": 352,
      "text": "Leer este mensaje Estamos trabajando constantemente para prestarle un excelente servicio en todas nuestras redes. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 352,
      "end": 428,
      "text": "Si no sigue los pasos, podría estar en riesgo de perder todos sus mensajes. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 428,
      "end": 470,
      "text": "Atentamente, Equipo de servicios de correo"
    }
  ],
  "passA": {
    "requestSha256": "31146e4186f96e82531a9b8e000e73a7b098e050592c225c00f4d95e971e4391",
    "capturedAt": "2026-09-22T03:57:50.957Z",
    "elapsedMs": 627.2157749999315,
    "successfulAttemptElapsedMs": 625.5807980000973,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.22
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.2
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
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.45
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.04
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
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "sender_supplied": 0.78,
            "no_sensitive_action": 0.2,
            "independently_established": 0
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 4965,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "895d2d64ac3ca7b682b218465c937baafc4367bf310937c85269d6186b5cbc35",
    "capturedAt": "2026-09-22T03:57:51.490Z",
    "elapsedMs": 530.8574779999908,
    "successfulAttemptElapsedMs": 528.7690849999199,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.84,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.15,
            "body:2": 0,
            "body:4": 0,
            "body:3": 0.01
          },
          "confidence": 0.81
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "NONE": 0,
            "body:0": 0.03,
            "subject:0": 0,
            "body:1": 0,
            "body:2": 0,
            "body:4": 0,
            "body:3": 0.97
          },
          "confidence": 0.96
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "NONE": 0,
            "body:0": 0.07,
            "subject:0": 0,
            "body:1": 0,
            "body:2": 0.04,
            "body:4": 0.89,
            "body:3": 0
          },
          "confidence": 0.87
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.07,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.22,
            "body:2": 0,
            "body:4": 0,
            "NONE": 0.71
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 2451,
        "output_tokens": 334
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1160.6200990000507,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "none_selected",
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
        "status": "selected",
        "segmentId": "body:3"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:4"
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
    "seq": 2382,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-485",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:50.331Z",
    "offsetMs": 1.3844790000002831
  },
  {
    "seq": 2383,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-485",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:50.957Z",
    "offsetMs": 627.2160490000388,
    "elapsedMs": 625.5807980000973,
    "outcome": "success"
  },
  {
    "seq": 2384,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-485",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:50.961Z",
    "offsetMs": 631.2126500000013
  },
  {
    "seq": 2385,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-485",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:51.490Z",
    "offsetMs": 1160.3006770000793,
    "elapsedMs": 528.7690849999199,
    "outcome": "success"
  },
  {
    "seq": 2386,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-485",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:51.490Z",
    "offsetMs": 1160.6828120000428,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "36e5eb6d2f96b7a6170d859e198477d708a0bf511cb82445745db014ac7449aa";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2383},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2385},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2386}} as const;
export const projectionSha256 = "fee33e06694d180651a9bda294c5f0fb1a5236a7c4964d5ee81c14eb94bb9152";
