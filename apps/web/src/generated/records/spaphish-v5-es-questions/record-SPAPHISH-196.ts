import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-196",
  "inputSha256": "440995f87b1fdd985cf4f0021e71fc7a72a2c96b6b9f51b768fad78a76b58e97",
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
      "end": 53,
      "text": "¡Obtén una suscripción gratuita de 1 año a HBO Max!  "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 53,
      "end": 59,
      "text": "ID:325"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 91,
      "text": "Nuestra plataforma utiliza las últimas tecnologías para adaptarse a cualquier dispositivo. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 91,
      "end": 109,
      "text": "Regístrate ahora! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 109,
      "end": 233,
      "text": "HBOMAX Descubra por qué miles de personas se registran todos los dias HBO MAX ¡Regístrese para desbloquear ya su contenido! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 233,
      "end": 539,
      "text": "Crea Tu Cuenta * Para retirar tu consentimiento (incluido cualquier consentimiento que hayas dado previamente) y obtener más información sobre tus derechos y cómo ejercerlos, consulta nuestra Política de Privacidad Para detenerlos, vaya aquí y escriba a: 750 Commerce St Ste.2-8080 Greenwood Lake, NY 10950"
    }
  ],
  "passA": {
    "requestSha256": "fb1cdf7a1db0b320e0247db85ad4b3c815113223b9d833a7dd1bfc99cd1f6dfe",
    "capturedAt": "2026-09-22T03:52:04.636Z",
    "elapsedMs": 662.4058340000047,
    "successfulAttemptElapsedMs": 661.2788960000034,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.11
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.31
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.17
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.14
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.09
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.07
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.61,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.37
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 5030,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "dc9b877ebbe015de370715afb701887bc51aa1689f9b12536ee9dbefb59986c4",
    "capturedAt": "2026-09-22T03:52:05.171Z",
    "elapsedMs": 533.9271409999928,
    "successfulAttemptElapsedMs": 533.0317189999914,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0.1,
            "body:0": 0,
            "body:2": 0.02,
            "NONE": 0.85,
            "body:1": 0.03,
            "subject:1": 0
          },
          "confidence": 0.82
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "body:3": 0,
            "body:0": 0,
            "body:2": 0.32,
            "NONE": 0.25,
            "body:1": 0.42,
            "subject:1": 0
          },
          "confidence": 0.31
        }
      },
      "usage": {
        "input_tokens": 1615,
        "output_tokens": 166
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1197.8999630000035,
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
        "status": "none_selected",
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
        "status": "not_requested",
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
    "seq": 953,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-196",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:03.974Z",
    "offsetMs": 0.8501080000132788
  },
  {
    "seq": 954,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-196",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:04.636Z",
    "offsetMs": 662.4067280000017,
    "elapsedMs": 661.2788960000034,
    "outcome": "success"
  },
  {
    "seq": 955,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-196",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:04.638Z",
    "offsetMs": 664.2921060000081
  },
  {
    "seq": 956,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-196",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:05.171Z",
    "offsetMs": 1197.6310379999923,
    "elapsedMs": 533.0317189999914,
    "outcome": "success"
  },
  {
    "seq": 957,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-196",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:05.171Z",
    "offsetMs": 1197.9574290000019,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6dd8f56b21348553c2df509e5d216f64574c68ed8ac484f640d16b612216255e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":954},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":956},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":957}} as const;
export const projectionSha256 = "b9d0cbcebc870d4d02de96ec5a9c044e485be77267fed5251e81c4ec531b21c8";
