import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-001",
  "inputSha256": "f4da122e334220a6b16f779bd53b174406ea37b2a6a9456269326dfa5f0aff9f",
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
      "end": 34,
      "text": "Seguimos trabajando en tu servicio"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 43,
      "text": "Telmex Aviso importante sobre tu servicio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 43,
      "end": 78,
      "text": "Aviso importante sobre tu reporte. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 78,
      "end": 122,
      "text": "Ricardo Seguimos trabajando en tu servicio. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 122,
      "end": 219,
      "text": "Continuamos trabajando en tu reporte del servicio Conexión Total 5581234567 con folio 98765432 . "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 219,
      "end": 331,
      "text": "Te ofrecemos una disculpa por los inconvenientes y seguiremos informándote el avance en tus medios de contacto. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 331,
      "end": 357,
      "text": "Gracias por tu paciencia. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 357,
      "end": 750,
      "text": "Más información aquí Contáctanos Whatsapp | Llama al 800 555 1122 | Centros de Atención Conexión Total | conexiontotal.net Búscanos en Términos y condiciones | Privacidad Si no es este usuario o ya no desea seguir recibiendo nuestros mensajes, por favor haga clic aquí Este correo electrónico y sus anexos contienen información confidencial y privilegiada dirigida únicamente al destinatario. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 750,
      "end": 1059,
      "text": "Si usted no es el destinatario y ha recibido este mensaje por error no debe por ningún medio retransmitir, divulgar, publicar, copiar, ni hacer del conocimiento de terceros, el contenido, por lo que le pedimos notifique de inmediato al correo electrónico del remitente y elimine cualquier copia del presente. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1059,
      "end": 1227,
      "text": "Para consultar los detalles del tratamiento que Conexión Total hace de los datos personales, le solicitamos revisar nuestro Aviso de Privacidad en www.conexiontotal.net"
    }
  ],
  "passA": {
    "requestSha256": "6031a5a9b2b7b6b4082fbbca291d3cbde1fb2718ef98c865c77a76757e28fb5d",
    "capturedAt": "2026-09-20T23:43:51.324Z",
    "elapsedMs": 330.345792,
    "successfulAttemptElapsedMs": 329.640375,
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
          "noul": 0.03
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.29
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0.03,
            "active_request": 0.25,
            "informational": 0.72,
            "educational_or_quoted": 0
          },
          "confidence": 0.62
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.9,
            "independently_established": 0,
            "sender_supplied": 0.1
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 3736,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "fc77ef7a0e8a184f6f7122e101fbc3d31e9432700f3fc162e4c67f4b6429e205",
    "capturedAt": "2026-09-20T23:43:51.487Z",
    "elapsedMs": 161.75395899999995,
    "successfulAttemptElapsedMs": 161.19624999999996,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:8": 0.01,
            "body:0": 0.6799999999999999,
            "body:1": 0.01,
            "body:6": 0.09,
            "subject:0": 0.02,
            "NONE": 0.03,
            "body:7": 0.04,
            "body:2": 0.01,
            "body:3": 0.1,
            "body:4": 0.01,
            "body:5": 0
          },
          "confidence": 0.65
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:8": 0.01,
            "body:0": 0,
            "body:6": 0.9,
            "body:1": 0,
            "NONE": 0.06,
            "subject:0": 0,
            "body:7": 0,
            "body:5": 0,
            "body:3": 0.01,
            "body:4": 0.02,
            "body:2": 0
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 1982,
        "output_tokens": 244
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 494.23366599999997,
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
        "status": "selected",
        "segmentId": "body:6"
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
    "seq": 1,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-001",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:50.994Z",
    "offsetMs": 0.4615829999999974
  },
  {
    "seq": 2,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-001",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:51.324Z",
    "offsetMs": 330.425166,
    "elapsedMs": 329.640375,
    "outcome": "success"
  },
  {
    "seq": 3,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-001",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:51.325Z",
    "offsetMs": 331.966833
  },
  {
    "seq": 4,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-001",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:51.487Z",
    "offsetMs": 493.42162499999995,
    "elapsedMs": 161.19624999999996,
    "outcome": "success"
  },
  {
    "seq": 5,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-001",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:51.487Z",
    "offsetMs": 494.317041,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "dd40b8bcb8f5f78070a689ad67ce6018b58333d1bb1e9543781f48270761254a";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":4},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":5}} as const;
export const projectionSha256 = "2fba872d509a9f70ce2b2ff8f8c7c90bf4d3fa6a7804ca81fdc21252638bf212";
