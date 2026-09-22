import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-234",
  "inputSha256": "45cbe5b0982e6a79c2c520da2b2e961e66fa23c64a3822bc6fc789d9000604b2",
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
    "requestSha256": "bb3b8ad30e3ec2d944b1464b4410be75e17edbf31a6e7dd7c9b727e5842b4b9a",
    "capturedAt": "2026-09-22T03:52:49.377Z",
    "elapsedMs": 646.0917619999964,
    "successfulAttemptElapsedMs": 644.6991639999906,
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
          "noul": 0.17
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
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
          "noul": 0.34
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.49,
            "informational": 0.51,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.34
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.01,
            "sender_supplied": 0.01,
            "no_sensitive_action": 0.98,
            "mixed_or_unknown": 0
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 5312,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "b598a357eb62d4cc2865c0b51c2382f74740746e4a193fb447a20734ccb0331d",
    "capturedAt": "2026-09-22T03:52:49.880Z",
    "elapsedMs": 501.4096159999608,
    "successfulAttemptElapsedMs": 499.8892680000281,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0.01,
            "body:0": 0.25,
            "body:4": 0.01,
            "body:5": 0,
            "NONE": 0.42,
            "body:3": 0.02,
            "subject:0": 0.02,
            "body:6": 0.14,
            "body:1": 0.01,
            "body:8": 0.07,
            "body:2": 0.01,
            "body:9": 0.04
          },
          "confidence": 0.36
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0.01,
            "body:0": 0.35,
            "body:4": 0.01,
            "body:5": 0,
            "NONE": 0.47,
            "body:3": 0.04,
            "subject:0": 0.01,
            "body:6": 0,
            "body:1": 0.01,
            "body:8": 0.01,
            "body:2": 0.01,
            "body:9": 0.08
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 2578,
        "output_tokens": 258
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1149.1976089999662,
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
    "seq": 1139,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-234",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:48.732Z",
    "offsetMs": 0.8092309999628924
  },
  {
    "seq": 1140,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-234",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:49.377Z",
    "offsetMs": 646.0923139999504,
    "elapsedMs": 644.6991639999906,
    "outcome": "success"
  },
  {
    "seq": 1141,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-234",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:49.379Z",
    "offsetMs": 648.4179119999753
  },
  {
    "seq": 1142,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-234",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:49.880Z",
    "offsetMs": 1148.9632109999657,
    "elapsedMs": 499.8892680000281,
    "outcome": "success"
  },
  {
    "seq": 1143,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-234",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:49.880Z",
    "offsetMs": 1149.246849999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0620bdc8779b78632229302f9b92194ce81ac6f23aa2ede8c22264aeea64ef87";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1140},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1142},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1143}} as const;
export const projectionSha256 = "87c75de028def50ffb6dfaae292ab0ab76eace0b6e6b2116379e55c8bf260de9";
