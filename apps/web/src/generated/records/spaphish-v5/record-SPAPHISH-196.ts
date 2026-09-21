import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-196",
  "inputSha256": "440995f87b1fdd985cf4f0021e71fc7a72a2c96b6b9f51b768fad78a76b58e97",
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
    "requestSha256": "eceb155cece014422ef8e569a9a1767b70bc99ee8bb7c1e99a8a3419eb8ef07b",
    "capturedAt": "2026-09-20T23:44:56.382Z",
    "elapsedMs": 702.731375000003,
    "successfulAttemptElapsedMs": 700.971375000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.2
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.22
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.25
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.17
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.46,
            "independently_established": 0,
            "sender_supplied": 0.52,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 3580,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "6870b3c09b1ca13ae9987e034fe365a042bbfae282cf62ca8b1324b2153994d0",
    "capturedAt": "2026-09-20T23:44:56.571Z",
    "elapsedMs": 187.06491599999572,
    "successfulAttemptElapsedMs": 185.12275000000227,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.42,
            "subject:1": 0,
            "body:2": 0.35,
            "subject:0": 0.01,
            "NONE": 0.22,
            "body:3": 0
          },
          "confidence": 0.33
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:0": 0.01,
            "subject:1": 0,
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0.96,
            "body:3": 0.03
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 1385,
        "output_tokens": 167
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 892.1423749999958,
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
    "seq": 957,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-196",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:55.680Z",
    "offsetMs": 1.2729580000013812
  },
  {
    "seq": 958,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-196",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:56.381Z",
    "offsetMs": 702.7333330000038,
    "elapsedMs": 700.971375000001,
    "outcome": "success"
  },
  {
    "seq": 959,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-196",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:56.385Z",
    "offsetMs": 705.9522080000024
  },
  {
    "seq": 960,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-196",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:56.570Z",
    "offsetMs": 891.8181250000052,
    "elapsedMs": 185.12275000000227,
    "outcome": "success"
  },
  {
    "seq": 961,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-196",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:56.571Z",
    "offsetMs": 892.2265000000043,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "baf507fe8632c1df4f957db64b0b2e863a64218b4bbcc0aeab4266fb3574f04c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":958},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":960},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":961}} as const;
export const projectionSha256 = "4b725d89ad766f7dd0c344e92f8c47f133b795c88041feb9d0d15a3ef1543434";
