import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-407",
  "inputSha256": "a394de362329ac2b8d3775f0ec2f5a4d64a3a16438d1c66aa3ad756f73321c7e",
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
    "requestSha256": "17e955e05b8881e980adbd3bcc6c92b63b1d4c8d0e87b3416f1e750870495314",
    "capturedAt": "2026-09-20T23:46:08.577Z",
    "elapsedMs": 118.89504199998919,
    "successfulAttemptElapsedMs": 116.45666700002039,
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
          "noul": 0.79
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
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.15
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
          "noul": 0.16
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0.02,
            "active_request": 0.98
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.13,
            "sender_supplied": 0.86
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3729,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "d97ea824317f9469141aa0dcc36ffcd8ff9dc1a5acb7a6b98c04af4b11db0f6a",
    "capturedAt": "2026-09-20T23:46:08.688Z",
    "elapsedMs": 109.03962500000489,
    "successfulAttemptElapsedMs": 106.62154200000805,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0.07,
            "subject:0": 0,
            "body:4": 0,
            "body:2": 0,
            "body:6": 0,
            "body:7": 0,
            "body:0": 0,
            "body:3": 0.89,
            "body:5": 0,
            "body:8": 0,
            "NONE": 0.04
          },
          "confidence": 0.87
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:2": 0.94,
            "body:6": 0,
            "body:7": 0,
            "body:0": 0,
            "body:3": 0,
            "body:5": 0.06,
            "body:8": 0,
            "NONE": 0
          },
          "confidence": 0.93
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:1": 0,
            "subject:0": 0,
            "body:4": 0.01,
            "body:2": 0,
            "body:6": 0.47000000000000003,
            "body:7": 0,
            "body:0": 0.43,
            "body:3": 0,
            "body:5": 0,
            "body:8": 0.08,
            "NONE": 0.01
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 2652,
        "output_tokens": 359
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 230.8348339999793,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 1996,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-407",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:08.459Z",
    "offsetMs": 1.846709000004921
  },
  {
    "seq": 1997,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-407",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:08.576Z",
    "offsetMs": 118.8949169999978,
    "elapsedMs": 116.45666700002039,
    "outcome": "success"
  },
  {
    "seq": 1998,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-407",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:08.581Z",
    "offsetMs": 123.11775000000489
  },
  {
    "seq": 1999,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-407",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:08.688Z",
    "offsetMs": 230.41304200000013,
    "elapsedMs": 106.62154200000805,
    "outcome": "success"
  },
  {
    "seq": 2000,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-407",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:08.688Z",
    "offsetMs": 230.92754199999035,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a488bc54ea4706dc44848a7afc8a22ac0735ab8a3c41cd239c9146543e5ed2a7";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1997},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1999},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2000}} as const;
export const projectionSha256 = "47d430de46bfe657fc9db7b2697769644888f62e2c8192ba39112261c52d5bc8";
