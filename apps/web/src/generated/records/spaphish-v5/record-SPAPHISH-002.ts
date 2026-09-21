import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-002",
  "inputSha256": "5e34e897a645d3ca21f84ccc2ae14a1063eef2616ce7a13986956ef25e3ecf81",
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
      "end": 28,
      "text": "Citas en Línea Folio 2B8CA23"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 431,
      "text": "Estimado(a) Ricardo López GARCÍA:<html><body><div>Estimado(a) <b>Ricardo López GARCÍA</b>:<br /><br />Ha registrado una cita para el día miércoles, 10 de septiembre de 2020, a las 10:30:00 horas.<br /><br />Por lo que le reiteramos debe presentarse en el Centro de Atención de CSH VILLA DEL SOL en la fecha y hora antes mencionadas.<br /><hr>Le recordamos que el <b>Folio</b> de su Cita es:<br /><h1><center>9K1EF54</h1><br /><hr>\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 431,
      "end": 432,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 432,
      "end": 433,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 433,
      "end": 704,
      "text": "<h4>Notas:</h4><ol><li>Le sugerimos presentarse 15 minutos antes de la hora señalada.</li><li>Todos los requisitos deberán presentarse en original y copia.</li><li>Le recordamos que la realización del trámite estará sujeta a la presentación de la documentación completa. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 704,
      "end": 813,
      "text": "El hecho de haber agendado una cita no garantiza que el trámite sea efectuado.</li></ol></div></body></html>\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 813,
      "end": 814,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 814,
      "end": 936,
      "text": "Las opiniones personales expresadas en este mensaje no reflejan una posición oficial de la Dependencia o Entidad emisora. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 936,
      "end": 1045,
      "text": "Este mensaje y sus adjuntos contienen información confidencial dirigida para uso exclusivo del destinatario. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1045,
      "end": 1390,
      "text": "Si usted no es el destinatario de este mensaje (o el servidor público responsable de entregar al destinatario), se le notifica que queda estrictamente prohibida (en virtud de la legislación vigente) cualquier revisión, retransmisión, distribución, copiado u otro uso o acto realizado relacionado con el contenido de este mensaje y sus adjuntos. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1390,
      "end": 1598,
      "text": "Si usted ha recibido por error este mensaje y/o sus adjuntos, deberá comunicarlo inmediatamente al remitente por esta misma vía y proceder a su eliminación incluyendo sus adjuntos sin conservar copia alguna.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1598,
      "end": 1599,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1599,
      "end": 1633,
      "text": "-- <https://www.viveelmomento.mx/>"
    }
  ],
  "passA": {
    "requestSha256": "0d1db2da0f08f5db89ac4bdfacf945821ba2a66f8dec4374cb44ec7f02467cbf",
    "capturedAt": "2026-09-20T23:43:51.684Z",
    "elapsedMs": 194.2800000000001,
    "successfulAttemptElapsedMs": 193.23062499999992,
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
          "noul": 0.06
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
          "noul": 0.16
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.84
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.26
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.36,
            "educational_or_quoted": 0,
            "active_request": 0.64
          },
          "confidence": 0.52
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0.02,
            "independently_established": 0.01,
            "no_sensitive_action": 0.97
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3882,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "e47a2136c0be3306ddce8662bcf078f818c904609b4a8003029a65cb5432fdff",
    "capturedAt": "2026-09-20T23:43:51.820Z",
    "elapsedMs": 135.1016249999999,
    "successfulAttemptElapsedMs": 134.084209,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:7": 0.02,
            "body:4": 0.01,
            "body:1": 0,
            "body:10": 0,
            "body:2": 0,
            "NONE": 0.06,
            "body:5": 0,
            "body:0": 0.7,
            "subject:0": 0.01,
            "body:9": 0.01,
            "body:11": 0.01,
            "body:8": 0.08,
            "body:3": 0.02,
            "body:6": 0.08
          },
          "confidence": 0.66
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0.01,
            "body:2": 0,
            "body:1": 0,
            "body:10": 0,
            "NONE": 0.58,
            "body:4": 0.01,
            "body:5": 0,
            "body:0": 0.2,
            "subject:0": 0.01,
            "body:8": 0.01,
            "body:11": 0.03,
            "body:9": 0.12,
            "body:3": 0.03,
            "body:6": 0
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 2490,
        "output_tokens": 300
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 331.0829590000001,
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 6,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-002",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:51.490Z",
    "offsetMs": 0.52312500000005
  },
  {
    "seq": 7,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-002",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:51.683Z",
    "offsetMs": 194.28545900000006,
    "elapsedMs": 193.23062499999992,
    "outcome": "success"
  },
  {
    "seq": 8,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-002",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:51.685Z",
    "offsetMs": 196.075334
  },
  {
    "seq": 9,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-002",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:51.820Z",
    "offsetMs": 330.706042,
    "elapsedMs": 134.084209,
    "outcome": "success"
  },
  {
    "seq": 10,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-002",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:51.820Z",
    "offsetMs": 331.1578340000001,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "518704f3b4d86d7cf1b71a4549d9b7abc468a13a96916b6e6f7ca3be0c19f006";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":7},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":9},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":10}} as const;
export const projectionSha256 = "3f95b122eab9a650e3465aa7fafc707153cfff160a3e2045f59c3f6bfe5c49d6";
