import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-407",
  "inputSha256": "a394de362329ac2b8d3775f0ec2f5a4d64a3a16438d1c66aa3ad756f73321c7e",
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
      "end": 17,
      "text": "Acceso a Registro"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 124,
      "text": "Solicitud de Pre-registro Bienvenido al Sistema de Nacionalidad y Naturalización de la Secretaría de Relaciones Exteriores. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 124,
      "end": 233,
      "text": "Para empezar, será necesario acceder en la liga siguiente: es importante llenar todos los campos requeridos. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 233,
      "end": 261,
      "text": "La liga expirará en 1 hora. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 261,
      "end": 418,
      "text": "Recuerde tener a la mano, toda la documentación que permita acreditar su identidad, domicilio, datos familiares, etc., ya que el sistema no permite cambios. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 418,
      "end": 715,
      "text": "Asimismo, es importante que usted antes de realizar su pre-registro verifique que cumple con todos los requisitos aplicables al trámite, así como también que cumple con las vigencias mínimas requeridas, por lo que en caso de aún no contar con documentos le pedimos que no realice el pre-registro. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 715,
      "end": 858,
      "text": "Una vez iniciado el pre-registro, deberá concluir con el mismo hasta el final, de lo contrario no se podrá salvar la información ya capturada. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 858,
      "end": 1258,
      "text": "En caso de tener dudas respecto a los documentos que deberá presentar para su trámite de naturalización le pedimos consultar: https://sre.gob.mx/tramites-y-servicios/nacionalidad-y-naturalizacion Atentamente Dirección General de Asuntos Jurídicos Este es un mensaje que ha sido enviado desde una dirección de correo electrónico exclusivamente de notificación generado automáticamente por el sistema. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1258,
      "end": 1290,
      "text": "Favor de no responder al mismo. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1290,
      "end": 1350,
      "text": "Secretaria de Relaciones Exteriores -Politica de privacidad."
    }
  ],
  "passA": {
    "requestSha256": "7bef890411404bb1a03b542a433cf8956d84c42ba8cc9504a13de8d5d122f891",
    "capturedAt": "2026-09-22T03:56:18.295Z",
    "elapsedMs": 596.4200030000065,
    "successfulAttemptElapsedMs": 594.9618480000063,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.76
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
          "noul": 0.9
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.18
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.02,
            "active_request": 0.98,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.73,
            "no_sensitive_action": 0.26,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 5179,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "286ceff1180077479b5fba0a5f8a42cfddff102cf598b77868cba62277384e82",
    "capturedAt": "2026-09-22T03:56:18.889Z",
    "elapsedMs": 589.9728829999804,
    "successfulAttemptElapsedMs": 587.8358609999996,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0,
            "body:8": 0,
            "body:3": 0.65,
            "body:6": 0,
            "NONE": 0.08,
            "subject:0": 0,
            "body:5": 0.01,
            "body:1": 0.24,
            "body:0": 0.02,
            "body:4": 0,
            "body:7": 0
          },
          "confidence": 0.62
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.98,
            "body:8": 0,
            "body:3": 0,
            "body:6": 0,
            "NONE": 0,
            "subject:0": 0,
            "body:5": 0.02,
            "body:1": 0,
            "body:0": 0,
            "body:4": 0,
            "body:7": 0
          },
          "confidence": 0.97
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:2": 0,
            "body:8": 0.04,
            "body:6": 0.67,
            "body:3": 0,
            "NONE": 0.02,
            "subject:0": 0,
            "body:5": 0,
            "body:1": 0.01,
            "body:0": 0.26,
            "body:4": 0,
            "body:7": 0
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 2970,
        "output_tokens": 359
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1190.9626520000165,
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
        "status": "low_confidence",
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
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 1994,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-407",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:17.699Z",
    "offsetMs": 1.2034260000218637
  },
  {
    "seq": 1995,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-407",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:18.294Z",
    "offsetMs": 596.4213909999817,
    "elapsedMs": 594.9618480000063,
    "outcome": "success"
  },
  {
    "seq": 1996,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-407",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:18.300Z",
    "offsetMs": 602.0617479999783
  },
  {
    "seq": 1997,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-407",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:18.889Z",
    "offsetMs": 1190.5654169999762,
    "elapsedMs": 587.8358609999996,
    "outcome": "success"
  },
  {
    "seq": 1998,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-407",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:18.889Z",
    "offsetMs": 1191.024654000008,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "03b7fc0c1af2988fecce9c91404ae774d4bff95c2447807794c745d92cb5e4a8";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1995},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1997},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1998}} as const;
export const projectionSha256 = "31d282103c0b9b011314843d9beba4f673c8a4073578a55b5250391cf7876dfe";
