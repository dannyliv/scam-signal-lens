import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-370",
  "inputSha256": "db6c25f804d3d2572a6a3014b5e39577eee3ea097bb6c67726a06123342e4764",
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
      "end": 19,
      "text": "Fwd: Muchos saludos"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 69,
      "text": "No suele recibir correos electrónicos de contacto@correo-seguro.com. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 69,
      "end": 171,
      "text": "Por qué esto es importante Se le invita a conocer nuestro aviso de privacidad en el siguiente enlace. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 171,
      "end": 470,
      "text": "La información contenida en este mensaje no se considera compromiso o acuerdo oficial hasta que se confirme por escrito con la firma autógrafa del servidor público facultado, por lo que las opiniones personales expresadas en el mismo no son una posición oficial de la Dependencia o Entidad emisora. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 470,
      "end": 679,
      "text": "Este mensaje es confidencial, dirigido para uso exclusivo del destinatario, quedando prohibida su distribución y/o difusión en cualquier modalidad sin la previa autorización del servidor público que lo emite. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 679,
      "end": 759,
      "text": "Si usted no es el destinatario de este mensaje, deberá borrarlo inmediatamente. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 759,
      "end": 834,
      "text": "Se le invita a conocer nuestro aviso de privacidad en el siguiente enlace. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 834,
      "end": 1133,
      "text": "La información contenida en este mensaje no se considera compromiso o acuerdo oficial hasta que se confirme por escrito con la firma autógrafa del servidor público facultado, por lo que las opiniones personales expresadas en el mismo no son una posición oficial de la Dependencia o Entidad emisora. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1133,
      "end": 1342,
      "text": "Este mensaje es confidencial, dirigido para uso exclusivo del destinatario, quedando prohibida su distribución y/o difusión en cualquier modalidad sin la previa autorización del servidor público que lo emite. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1342,
      "end": 1421,
      "text": "Si usted no es el destinatario de este mensaje, deberá borrarlo inmediatamente."
    }
  ],
  "passA": {
    "requestSha256": "213486c3dd701791b52a1f4ba5b0f80e7b9115ee8306ee32eda22adf6364270a",
    "capturedAt": "2026-09-20T23:45:56.796Z",
    "elapsedMs": 148.96233300000313,
    "successfulAttemptElapsedMs": 146.89570799999638,
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
          "noul": 0.04
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
          "noul": 0.37
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.79
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.68,
            "informational": 0.3,
            "educational_or_quoted": 0.01,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.58
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.84,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.16
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 3723,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "7d48469d1d68f721f592bb2fb2b70c164473719c57c97ddd31d2856ebd7c9dde",
    "capturedAt": "2026-09-20T23:45:56.938Z",
    "elapsedMs": 139.58591699998942,
    "successfulAttemptElapsedMs": 137.11849999999686,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:3": 0,
            "body:8": 0.34,
            "body:1": 0.01,
            "body:2": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:7": 0,
            "NONE": 0.2,
            "body:6": 0,
            "body:5": 0.01,
            "body:4": 0.44
          },
          "confidence": 0.37
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:8": 0.01,
            "body:3": 0.16,
            "body:2": 0.15,
            "subject:0": 0,
            "body:1": 0.22999999999999998,
            "body:0": 0.02,
            "body:7": 0.04,
            "NONE": 0.21,
            "body:6": 0.07,
            "body:5": 0.1,
            "body:4": 0.01
          },
          "confidence": 0.17
        }
      },
      "usage": {
        "input_tokens": 1928,
        "output_tokens": 241
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 291.5678329999937,
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
        "status": "low_confidence",
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
    "seq": 1813,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-370",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:56.648Z",
    "offsetMs": 1.5342079999973066
  },
  {
    "seq": 1814,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-370",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:56.796Z",
    "offsetMs": 148.96504199999617,
    "elapsedMs": 146.89570799999638,
    "outcome": "success"
  },
  {
    "seq": 1815,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-370",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:56.800Z",
    "offsetMs": 153.3270829999965
  },
  {
    "seq": 1816,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-370",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:56.938Z",
    "offsetMs": 291.26924999999756,
    "elapsedMs": 137.11849999999686,
    "outcome": "success"
  },
  {
    "seq": 1817,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-370",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:56.939Z",
    "offsetMs": 291.63845800000126,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2a534854cd2b349e818f82899cbb3d8335299626638ad002b1064916a1ba0b42";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1814},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1816},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1817}} as const;
export const projectionSha256 = "ef1a1935bb43517653a6439d8f098b1d43338dcab826206030e9c6464e4b391e";
