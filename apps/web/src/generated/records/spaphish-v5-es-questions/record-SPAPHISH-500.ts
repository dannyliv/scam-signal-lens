import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-500",
  "inputSha256": "f8f5458dadd93556eaf81bce67c3afb2792c41b87de2b7819ee328683f3c6046",
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
      "end": 55,
      "text": "Alerta de inicio de sesión en Chrome en Motorola Moto X"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 16,
      "text": "Hola, genovevo. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 16,
      "end": 108,
      "text": "Recientemente se inició sesión en su cuenta desde un navegador o dispositivo no reconocido. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 108,
      "end": 120,
      "text": "¿Fue usted? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 120,
      "end": 165,
      "text": "Nuevo inicio de sesión hoy a las 11:50 a. m. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 165,
      "end": 359,
      "text": "Cerca de Râmnicu Vâlcea, Rumania Chrome en Motorola Moto X Alerta de inicio de sesión Hola, genovevo: Recientemente se inició sesión en su cuenta desde un navegador o dispositivo no reconocido. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 359,
      "end": 371,
      "text": "¿Fue usted? "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 371,
      "end": 419,
      "text": "Nuevo inicio de sesión Martes a las 11:50 a. m. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 419,
      "end": 587,
      "text": "Cerca de Râmnicu Vâlcea, Rumania Chrome en Motorola Moto X Revisar el inicio de sesión Administrar alertas Este mensaje fue enviado a genovevo.Sanchez@enterprise.com . "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 587,
      "end": 684,
      "text": "Si no desea recibir estos correos electrónicos de Facebook en el futuro, cancele la suscripción ."
    }
  ],
  "passA": {
    "requestSha256": "fbab3cc9923db64030225b0260333662446a378aa690e1eec56f8fb9fb29b3e8",
    "capturedAt": "2026-09-22T03:58:09.350Z",
    "elapsedMs": 703.3595039999345,
    "successfulAttemptElapsedMs": 701.5918710000115,
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
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.26
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.56
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0.72,
            "informational": 0.28
          },
          "confidence": 0.61
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.07,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.91
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 5068,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "61d9ae6fb6090ede40a37fce1ab64f81dc897b681a6040bc0392ec0da5eab344",
    "capturedAt": "2026-09-22T03:58:09.980Z",
    "elapsedMs": 627.6270549999317,
    "successfulAttemptElapsedMs": 625.996696999995,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.02,
            "body:7": 0.23,
            "body:1": 0.02,
            "body:6": 0,
            "body:2": 0.12,
            "body:8": 0.01,
            "NONE": 0.56,
            "body:0": 0,
            "body:5": 0.04,
            "body:4": 0,
            "subject:0": 0
          },
          "confidence": 0.52
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0,
            "body:7": 0.1,
            "body:1": 0.01,
            "body:6": 0,
            "body:2": 0.03,
            "body:8": 0.05,
            "body:5": 0.01,
            "body:0": 0.01,
            "subject:0": 0.02,
            "body:4": 0.01,
            "NONE": 0.76
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 1819,
        "output_tokens": 237
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1333.7188520000782,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "none_selected",
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
    "seq": 2456,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-500",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:58:08.648Z",
    "offsetMs": 1.3909950000233948
  },
  {
    "seq": 2457,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-500",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:58:09.350Z",
    "offsetMs": 703.359717000043,
    "elapsedMs": 701.5918710000115,
    "outcome": "success"
  },
  {
    "seq": 2458,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-500",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:58:09.354Z",
    "offsetMs": 707.1821329999948
  },
  {
    "seq": 2459,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-500",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:58:09.980Z",
    "offsetMs": 1333.5157730000792,
    "elapsedMs": 625.996696999995,
    "outcome": "success"
  },
  {
    "seq": 2460,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-500",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:58:09.980Z",
    "offsetMs": 1333.7652560001006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1f0f8611c52f68e98f8ad4d65a5dcb6ea008754a8fa58660365af96e26fa91d1";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2457},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2459},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2460}} as const;
export const projectionSha256 = "326ecd88eb28785fb56e28ea2d7b5b521e05605d5b4956f7fac9cb99c35d083e";
