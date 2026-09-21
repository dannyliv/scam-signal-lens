import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-254",
  "inputSha256": "516c523fbaed04f6e24f8c56b7f3f956b749a60120c450b22b386c5db00018dc",
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
    "requestSha256": "40e1cce2db8822ad7622489efa0bf39860f8745144c6f698bd5adde834157a8b",
    "capturedAt": "2026-09-20T23:45:15.887Z",
    "elapsedMs": 183.24112500000047,
    "successfulAttemptElapsedMs": 181.2435000000114,
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
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.85
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.2
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.57
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.14
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
          "noul": 0.32
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.13,
            "mixed_or_unclear": 0,
            "active_request": 0.87,
            "educational_or_quoted": 0
          },
          "confidence": 0.82
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.3,
            "no_sensitive_action": 0.62,
            "sender_supplied": 0.06,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 3581,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "385fe8ed45679f61a7d6cf7e356309b6b0b019f50001ebcfb6ee047fa46f1d0f",
    "capturedAt": "2026-09-20T23:45:16.572Z",
    "elapsedMs": 682.9025839999958,
    "successfulAttemptElapsedMs": 681.0144159999909,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:4": 0,
            "body:6": 0,
            "body:5": 0,
            "body:2": 0.06,
            "body:3": 0,
            "body:0": 0.93,
            "body:1": 0,
            "subject:0": 0,
            "NONE": 0.01
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0.01,
            "body:6": 0.05,
            "body:5": 0.05,
            "body:2": 0,
            "body:3": 0.03,
            "body:0": 0.12,
            "body:1": 0.15,
            "subject:0": 0.01,
            "NONE": 0.58
          },
          "confidence": 0.54
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:4": 0.01,
            "body:6": 0,
            "body:5": 0.04,
            "body:2": 0.07,
            "body:3": 0.03,
            "body:0": 0.48,
            "body:1": 0.08,
            "subject:0": 0.01,
            "NONE": 0.28
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 1962,
        "output_tokens": 305
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 868.9327920000069,
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
    "seq": 1243,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-254",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:15.705Z",
    "offsetMs": 1.348334000009345
  },
  {
    "seq": 1244,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-254",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:15.886Z",
    "offsetMs": 183.24237500000163,
    "elapsedMs": 181.2435000000114,
    "outcome": "success"
  },
  {
    "seq": 1245,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-254",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:15.890Z",
    "offsetMs": 186.98154200000863
  },
  {
    "seq": 1246,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-254",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:16.572Z",
    "offsetMs": 868.6529169999994,
    "elapsedMs": 681.0144159999909,
    "outcome": "success"
  },
  {
    "seq": 1247,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-254",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:16.572Z",
    "offsetMs": 868.9966669999994,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "022a5531585c0702b725f86ed6e2455fdec13ec454df7900a6c68270ce291746";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1244},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1246},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1247}} as const;
export const projectionSha256 = "e1f0ffccdee9296814c9ed975f235ae677c50674d6fd1c887afd2d559f9e0c9d";
