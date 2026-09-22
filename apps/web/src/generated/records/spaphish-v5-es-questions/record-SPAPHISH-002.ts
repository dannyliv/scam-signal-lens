import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-002",
  "inputSha256": "5e34e897a645d3ca21f84ccc2ae14a1063eef2616ce7a13986956ef25e3ecf81",
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
    "requestSha256": "721774ac2741f98a0fbb772fb8b489dc864e20edb18f5134d26eea4f1e06c81e",
    "capturedAt": "2026-09-22T03:48:12.448Z",
    "elapsedMs": 611.7084800000002,
    "successfulAttemptElapsedMs": 610.7794920000001,
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
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.15
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.85
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.3
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.53,
            "informational": 0.47,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.37
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.02,
            "no_sensitive_action": 0.97,
            "mixed_or_unknown": 0,
            "independently_established": 0.01
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 5332,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "329503c5f85e2e565821e376f90cf39f3d306b3bfb636c4ac73ce3e03613846c",
    "capturedAt": "2026-09-22T03:48:12.974Z",
    "elapsedMs": 523.9041710000001,
    "successfulAttemptElapsedMs": 523.1676649999999,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:7": 0.01,
            "body:9": 0.03,
            "body:5": 0,
            "body:4": 0.01,
            "body:0": 0.47000000000000003,
            "body:6": 0.1,
            "body:11": 0.02,
            "body:10": 0,
            "body:2": 0,
            "NONE": 0.27,
            "body:3": 0.02,
            "body:8": 0.06,
            "body:1": 0,
            "subject:0": 0.01
          },
          "confidence": 0.42
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:7": 0.01,
            "body:9": 0.08,
            "body:2": 0.01,
            "body:0": 0.47000000000000003,
            "body:5": 0,
            "body:6": 0,
            "body:4": 0.01,
            "body:10": 0,
            "body:11": 0.01,
            "NONE": 0.38,
            "body:3": 0.03,
            "body:8": 0,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 2694,
        "output_tokens": 302
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1137.86675,
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
    "seq": 6,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-002",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:11.836Z",
    "offsetMs": 0.4798270000001139
  },
  {
    "seq": 7,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-002",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:12.447Z",
    "offsetMs": 611.7094439999998,
    "elapsedMs": 610.7794920000001,
    "outcome": "success"
  },
  {
    "seq": 8,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-002",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:12.450Z",
    "offsetMs": 613.8172649999999
  },
  {
    "seq": 9,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-002",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:12.973Z",
    "offsetMs": 1137.392012,
    "elapsedMs": 523.1676649999999,
    "outcome": "success"
  },
  {
    "seq": 10,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-002",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:12.974Z",
    "offsetMs": 1137.9421730000001,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e19d7202af4622a12cd0a34a6c2370be04f97aa54c86cde80fc2d96aada2e41e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":7},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":9},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":10}} as const;
export const projectionSha256 = "16fd0cea25f065ef72c58ab15de27d5a5c49275c196f96d56c71aee9520e6f64";
