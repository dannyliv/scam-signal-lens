import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-234",
  "inputSha256": "45cbe5b0982e6a79c2c520da2b2e961e66fa23c64a3822bc6fc789d9000604b2",
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
      "end": 14,
      "text": "Citas en Línea"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 425,
      "text": "Estimado(a) Roberto López GARCÍA:<html><body><div>Estimado(a) <b>Roberto López GARCÍA</b>:<br /><br />Ha registrado una cita para el día miércoles, 15 de marzo de 2022, a las 11:00:00 horas.<br /><br />Por lo que le reiteramos debe presentarse en el Centro de Atención de CSH VILLA DORADA en la fecha y hora antes mencionadas.<br /><hr>Le recordamos que el <b>Folio</b> de su Cita es:<br /><h1><center>5K879G8</h1><br /><hr>\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 425,
      "end": 426,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 426,
      "end": 427,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 427,
      "end": 698,
      "text": "<h4>Notas:</h4><ol><li>Le sugerimos presentarse 15 minutos antes de la hora señalada.</li><li>Todos los requisitos deberán presentarse en original y copia.</li><li>Le recordamos que la realización del trámite estará sujeta a la presentación de la documentación completa. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 698,
      "end": 807,
      "text": "El hecho de haber agendado una cita no garantiza que el trámite sea efectuado.</li></ol></div></body></html>\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 807,
      "end": 808,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 808,
      "end": 930,
      "text": "Las opiniones personales expresadas en este mensaje no reflejan una posición oficial de la Dependencia o Entidad emisora. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 930,
      "end": 1039,
      "text": "Este mensaje y sus adjuntos contienen información confidencial dirigida para uso exclusivo del destinatario. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1039,
      "end": 1384,
      "text": "Si usted no es el destinatario de este mensaje (o el servidor público responsable de entregar al destinatario), se le notifica que queda estrictamente prohibida (en virtud de la legislación vigente) cualquier revisión, retransmisión, distribución, copiado u otro uso o acto realizado relacionado con el contenido de este mensaje y sus adjuntos. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1384,
      "end": 1591,
      "text": "Si usted ha recibido por error este mensaje y/o sus adjuntos, deberá comunicarlo inmediatamente al remitente por esta misma vía y proceder a su eliminación incluyendo sus adjuntos sin conservar copia alguna."
    }
  ],
  "passA": {
    "requestSha256": "973cfdd7eb2a83196a48748061f846c49dc9b38d61172967e44dd7461f4d6241",
    "capturedAt": "2026-09-20T23:45:08.460Z",
    "elapsedMs": 113.56733299999905,
    "successfulAttemptElapsedMs": 111.30174999999872,
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
          "noul": 0.05
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
          "noul": 0.18
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.83
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.23
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.58,
            "informational": 0.42,
            "mixed_or_unclear": 0
          },
          "confidence": 0.44
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.01,
            "no_sensitive_action": 0.98,
            "sender_supplied": 0.01,
            "mixed_or_unknown": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3862,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "587e2ef38cc6a7ad79cf98dafd3d8fe6dd6ee949dce8a044dae833976cbf08c2",
    "capturedAt": "2026-09-20T23:45:08.655Z",
    "elapsedMs": 194.20924999999988,
    "successfulAttemptElapsedMs": 193.19608300000255,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "body:9": 0.02,
            "body:6": 0.1,
            "body:7": 0.03,
            "body:1": 0.01,
            "NONE": 0.1,
            "body:8": 0.05,
            "body:4": 0.01,
            "body:0": 0.62,
            "body:5": 0,
            "body:3": 0.04,
            "body:2": 0.01
          },
          "confidence": 0.6
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:9": 0.14,
            "body:6": 0,
            "body:7": 0.01,
            "body:1": 0.01,
            "NONE": 0.5599999999999999,
            "body:8": 0.01,
            "body:4": 0.01,
            "body:5": 0,
            "body:0": 0.2,
            "body:3": 0.04,
            "body:2": 0.01
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 2374,
        "output_tokens": 260
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 309.1415410000045,
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
    "seq": 1143,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-234",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:08.348Z",
    "offsetMs": 1.5605409999989206
  },
  {
    "seq": 1144,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-234",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:08.460Z",
    "offsetMs": 113.57320800000161,
    "elapsedMs": 111.30174999999872,
    "outcome": "success"
  },
  {
    "seq": 1145,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-234",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:08.461Z",
    "offsetMs": 115.18391600000905
  },
  {
    "seq": 1146,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-234",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:08.655Z",
    "offsetMs": 308.809666000001,
    "elapsedMs": 193.19608300000255,
    "outcome": "success"
  },
  {
    "seq": 1147,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-234",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:08.656Z",
    "offsetMs": 309.24329100000614,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "380acd46dfb2c5a437e8afb25980cc7585b5d0e73027ec3fda41641863e8ff64";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1144},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1146},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1147}} as const;
export const projectionSha256 = "beb425d5c25bbeebd70bb6f6922817634a530bccb1f8fd0f0e23f137c7cf0be1";
