import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-254",
  "inputSha256": "516c523fbaed04f6e24f8c56b7f3f956b749a60120c450b22b386c5db00018dc",
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
      "end": 79,
      "text": "Te respondieron en Melodica Escolar 32 Teclas Estuche Rígido Mld-1 Envio Gratis"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 198,
      "text": "Mira la respuesta y completa tu compra Guadalupe, recibiste una respuesta Preguntaste en Melodica Escolar 32 Teclas Estuche Rígido Mld-1 Envio Gratis Ver respuesta Ver publicación ¿Necesitas ayuda? "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 198,
      "end": 211,
      "text": "Contáctanos. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 211,
      "end": 245,
      "text": "¡Compra y vende desde tu celular! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 245,
      "end": 300,
      "text": "Te enviamos este e-mail a GMartinezMartinez@gmail.com. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 300,
      "end": 338,
      "text": "Administrar preferencias de e-mails . "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 338,
      "end": 393,
      "text": "Nunca envíes tu clave o datos de tu cuenta por e-mail. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 393,
      "end": 482,
      "text": "Conoce cómo cuidamos tu Privacidad y visita los Términos y Condiciones de Mercado Libre ."
    }
  ],
  "passA": {
    "requestSha256": "436598a4d1e42a08aff50452fdf8ae133b94e6db953e408f6596859c81fc4d42",
    "capturedAt": "2026-09-22T03:53:14.891Z",
    "elapsedMs": 1038.5707739999634,
    "successfulAttemptElapsedMs": 1036.6767260000343,
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
          "noul": 0.81
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.21
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.56
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.23
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.05,
            "active_request": 0.95,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.93
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.13,
            "no_sensitive_action": 0.71,
            "mixed_or_unknown": 0.02,
            "independently_established": 0.14
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 5031,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "47301d34c617270199c8aae0182f3c4018fca66f11466b1c93664e28c2db92b8",
    "capturedAt": "2026-09-22T03:53:15.433Z",
    "elapsedMs": 541.3317319999915,
    "successfulAttemptElapsedMs": 540.200147000025,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.02,
            "body:4": 0,
            "body:5": 0,
            "body:1": 0,
            "body:3": 0,
            "body:6": 0,
            "body:2": 0.04,
            "body:0": 0.93
          },
          "confidence": 0.93
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.38,
            "body:4": 0,
            "body:5": 0,
            "body:1": 0,
            "body:3": 0,
            "body:6": 0,
            "body:2": 0,
            "body:0": 0.61
          },
          "confidence": 0.55
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.39,
            "body:4": 0.01,
            "body:5": 0.04,
            "body:1": 0.37,
            "body:3": 0.02,
            "body:6": 0.02,
            "body:2": 0,
            "body:0": 0.15
          },
          "confidence": 0.32
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.31,
            "body:4": 0.01,
            "body:1": 0.1,
            "body:5": 0.02,
            "body:3": 0.03,
            "body:2": 0.1,
            "body:0": 0.42,
            "body:6": 0
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 2875,
        "output_tokens": 406
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1581.7485720000113,
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 1239,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-254",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:13.853Z",
    "offsetMs": 0.9660830000066198
  },
  {
    "seq": 1240,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-254",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:14.890Z",
    "offsetMs": 1038.5690949999844,
    "elapsedMs": 1036.6767260000343,
    "outcome": "success"
  },
  {
    "seq": 1241,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-254",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:14.893Z",
    "offsetMs": 1040.9360330000054
  },
  {
    "seq": 1242,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-254",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:15.433Z",
    "offsetMs": 1581.4463669999968,
    "elapsedMs": 540.200147000025,
    "outcome": "success"
  },
  {
    "seq": 1243,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-254",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:15.433Z",
    "offsetMs": 1581.7959759999649,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "20451d4cc729707eee3731e86d9953549588c86885303ef290a26e2209065ade";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1240},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1242},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1243}} as const;
export const projectionSha256 = "f5e6a3b6ac142b024d50f082ce0a8f8e6dc77e4a256ca1b4ef71ad0cea60bd9d";
