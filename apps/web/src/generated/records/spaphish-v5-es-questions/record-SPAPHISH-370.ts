import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-370",
  "inputSha256": "db6c25f804d3d2572a6a3014b5e39577eee3ea097bb6c67726a06123342e4764",
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
      "end": 19,
      "text": "Fwd: Muchos saludos"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 69,
      "text": "No suele recibir correos electrónicos de contacto@correo-seguro.com. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 69,
      "end": 171,
      "text": "Por qué esto es importante Se le invita a conocer nuestro aviso de privacidad en el siguiente enlace. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 171,
      "end": 470,
      "text": "La información contenida en este mensaje no se considera compromiso o acuerdo oficial hasta que se confirme por escrito con la firma autógrafa del servidor público facultado, por lo que las opiniones personales expresadas en el mismo no son una posición oficial de la Dependencia o Entidad emisora. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 470,
      "end": 679,
      "text": "Este mensaje es confidencial, dirigido para uso exclusivo del destinatario, quedando prohibida su distribución y/o difusión en cualquier modalidad sin la previa autorización del servidor público que lo emite. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 679,
      "end": 759,
      "text": "Si usted no es el destinatario de este mensaje, deberá borrarlo inmediatamente. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 759,
      "end": 834,
      "text": "Se le invita a conocer nuestro aviso de privacidad en el siguiente enlace. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 834,
      "end": 1133,
      "text": "La información contenida en este mensaje no se considera compromiso o acuerdo oficial hasta que se confirme por escrito con la firma autógrafa del servidor público facultado, por lo que las opiniones personales expresadas en el mismo no son una posición oficial de la Dependencia o Entidad emisora. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1133,
      "end": 1342,
      "text": "Este mensaje es confidencial, dirigido para uso exclusivo del destinatario, quedando prohibida su distribución y/o difusión en cualquier modalidad sin la previa autorización del servidor público que lo emite. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1342,
      "end": 1421,
      "text": "Si usted no es el destinatario de este mensaje, deberá borrarlo inmediatamente."
    }
  ],
  "passA": {
    "requestSha256": "b42e7c08390bf180fd03b53e60f71ded9b8775a4aa095f0c8f1eb9cc99eda95e",
    "capturedAt": "2026-09-22T03:55:35.378Z",
    "elapsedMs": 630.2641930000391,
    "successfulAttemptElapsedMs": 628.8587009999901,
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
          "noul": 0.04
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
          "noul": 0.27
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.84
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.51,
            "mixed_or_unclear": 0.01,
            "informational": 0.47,
            "educational_or_quoted": 0.01
          },
          "confidence": 0.35
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.92,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.08
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 5173,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "876cee8bbefa4acd2ca1a1e8993e586e10eef7cc1ed33fdd21d0489464d8123d",
    "capturedAt": "2026-09-22T03:55:35.923Z",
    "elapsedMs": 543.869413999957,
    "successfulAttemptElapsedMs": 542.5362690000329,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:2": 0,
            "body:8": 0.34,
            "body:6": 0,
            "body:3": 0,
            "NONE": 0.33,
            "subject:0": 0,
            "body:5": 0.01,
            "body:1": 0.01,
            "body:0": 0,
            "body:4": 0.31,
            "body:7": 0
          },
          "confidence": 0.26
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.27,
            "body:8": 0,
            "body:3": 0.13,
            "body:6": 0.04,
            "NONE": 0.33,
            "subject:0": 0,
            "body:5": 0.03,
            "body:1": 0.16,
            "body:0": 0.01,
            "body:4": 0.01,
            "body:7": 0.02
          },
          "confidence": 0.25
        }
      },
      "usage": {
        "input_tokens": 2130,
        "output_tokens": 239
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1176.01538300002,
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
    "seq": 1811,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-370",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:34.749Z",
    "offsetMs": 1.0744000000413507
  },
  {
    "seq": 1812,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-370",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:35.378Z",
    "offsetMs": 630.2647160000051,
    "elapsedMs": 628.8587009999901,
    "outcome": "success"
  },
  {
    "seq": 1813,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-370",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:35.380Z",
    "offsetMs": 632.9087210000143
  },
  {
    "seq": 1814,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-370",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:35.923Z",
    "offsetMs": 1175.8012150000432,
    "elapsedMs": 542.5362690000329,
    "outcome": "success"
  },
  {
    "seq": 1815,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-370",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:35.924Z",
    "offsetMs": 1176.06260200002,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8ddf8affd65309d0c57f4f4e787abfa99c4ef513934c133ee81bd4f7e6e79209";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1812},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1814},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1815}} as const;
export const projectionSha256 = "4020821f30c31857a3726212a06e1aa18995bdff7df8c0b3d639a490df998300";
