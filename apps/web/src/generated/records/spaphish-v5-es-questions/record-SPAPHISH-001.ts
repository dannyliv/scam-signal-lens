import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-001",
  "inputSha256": "f4da122e334220a6b16f779bd53b174406ea37b2a6a9456269326dfa5f0aff9f",
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
    "requestSha256": "993651c15a053153d8337ac2a182d4b65d2bd24e26d7dec37c1548fc0f44667f",
    "capturedAt": "2026-09-22T03:48:11.029Z",
    "elapsedMs": 938.7698240000001,
    "successfulAttemptElapsedMs": 937.1204670000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.26
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.27,
            "mixed_or_unclear": 0.02,
            "educational_or_quoted": 0,
            "informational": 0.71
          },
          "confidence": 0.61
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.86,
            "independently_established": 0,
            "sender_supplied": 0.13,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 5186,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "ed918fbcb5766effe6cab11ffa84041870daa340993e9edfdb55f50f4e7f89d9",
    "capturedAt": "2026-09-22T03:48:11.834Z",
    "elapsedMs": 799.9290050000002,
    "successfulAttemptElapsedMs": 798.1348070000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:4": 0.01,
            "body:3": 0.16,
            "NONE": 0.03,
            "body:8": 0.01,
            "body:1": 0.02,
            "body:5": 0,
            "subject:0": 0.02,
            "body:7": 0.03,
            "body:0": 0.59,
            "body:2": 0.01,
            "body:6": 0.12
          },
          "confidence": 0.55
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:4": 0.03,
            "body:3": 0.01,
            "NONE": 0.15,
            "body:1": 0,
            "body:5": 0,
            "body:8": 0.01,
            "subject:0": 0,
            "body:7": 0.01,
            "body:0": 0,
            "body:2": 0,
            "body:6": 0.79
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 2186,
        "output_tokens": 244
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1745.264305,
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
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-001",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:10.090Z",
    "offsetMs": 1.0191840000000099
  },
  {
    "seq": 2,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-001",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:11.028Z",
    "offsetMs": 939.017579,
    "elapsedMs": 937.1204670000001,
    "outcome": "success"
  },
  {
    "seq": 3,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-001",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:11.034Z",
    "offsetMs": 945.1856940000001
  },
  {
    "seq": 4,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-001",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:11.833Z",
    "offsetMs": 1744.356797,
    "elapsedMs": 798.1348070000001,
    "outcome": "success"
  },
  {
    "seq": 5,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-001",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:11.834Z",
    "offsetMs": 1745.3382609999999,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3860387d6f221898c6a5fcb7b9393aa1e48f3d19bfaee4d864d6d2dfe2468398";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":4},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":5}} as const;
export const projectionSha256 = "e7bec686c8cf74bc2b54a8983b0ba347b5b63ac6b456161c73db187864a26ed9";
