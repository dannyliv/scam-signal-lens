import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-141",
  "inputSha256": "7f0dd19267ef0730485d11267f455a3301f32f67fa50e53ebc6464fbe9084b72",
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
      "end": 39,
      "text": "Notificación importante sobre seguridad"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 153,
      "text": "Greenlock | Data Breach Management Estimado ricardo.lopez@corporate-security.net: Nuestra empresa se especializa en la gestión de filtraciones de datos. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 153,
      "end": 290,
      "text": "Cuando se produce una filtración de datos, recopilamos y mantenemos un registro de toda la información personal y/o privada involucrada. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 290,
      "end": 468,
      "text": "Usamos esta información para ayudar a las empresas a determinar si sus empleados poseen o están usando datos comprometidos, como contraseñas o direcciones de correo electrónico. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 468,
      "end": 613,
      "text": "Universidad Ficticia Campus Santa Fe utiliza nuestros servicios y solicitó que notifiquemos a todas las personas que deberían estar interesadas. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 613,
      "end": 757,
      "text": "Mediante nuestra investigación, descubrimos que su información personal se vio comprometida debido a una filtración de datos de OnlinerSpambot. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 757,
      "end": 860,
      "text": "Para ver toda la información que se hizo pública mediante la filtración, consulte su informe gratuito. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 860,
      "end": 938,
      "text": "La versión gratuita de su informe estará disponible durante dos días hábiles. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 938,
      "end": 1139,
      "text": "Se le notificó a su compañía que sus datos se vieron comprometidos debido a la filtración de datos de OnlinerSpambot, pero esta no tiene acceso a los detalles que se encuentran en su informe gratuito. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1139,
      "end": 1259,
      "text": "Por motivos de seguridad, recomendamos que tome los pasos necesarios para proteger su información privada de inmediato. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1259,
      "end": 1335,
      "text": "Saludos, Greenlock Data Breach Management © Greenlock Data Breach Management"
    }
  ],
  "passA": {
    "requestSha256": "9fccf3f7c7d4b8ef01b8bd7a0ebb33ba57104bd6ffc19a7e2554e626cbf76354",
    "capturedAt": "2026-09-22T03:51:02.245Z",
    "elapsedMs": 599.5243449999834,
    "successfulAttemptElapsedMs": 598.8151139999973,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.2
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.91
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.04
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
            "informational": 0.02,
            "active_request": 0.98,
            "mixed_or_unclear": 0
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.37,
            "sender_supplied": 0.61,
            "independently_established": 0,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 5174,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "68b3921a3c523c4abadcf64d44eb4a1c48d504099d0ceaacb95fbc84a01363a8",
    "capturedAt": "2026-09-22T03:51:02.807Z",
    "elapsedMs": 561.1072310000018,
    "successfulAttemptElapsedMs": 560.1713009999949,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:8": 0.22,
            "NONE": 0,
            "body:7": 0,
            "body:2": 0,
            "body:4": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:0": 0,
            "body:5": 0.01,
            "body:6": 0.77,
            "body:3": 0
          },
          "confidence": 0.73
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:8": 0.02,
            "NONE": 0.01,
            "body:6": 0,
            "body:2": 0.01,
            "body:4": 0.01,
            "body:9": 0,
            "subject:0": 0.01,
            "body:1": 0,
            "body:0": 0.19,
            "body:7": 0.02,
            "body:5": 0.01,
            "body:3": 0.72
          },
          "confidence": 0.7
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0.04,
            "NONE": 0.66,
            "body:7": 0.27,
            "body:2": 0,
            "body:4": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:5": 0.02,
            "body:0": 0,
            "body:6": 0,
            "body:3": 0
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 2960,
        "output_tokens": 387
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1162.1777000000002,
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
        "status": "selected",
        "segmentId": "body:6"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:3"
      },
      "verification_bypass": {
        "status": "low_confidence",
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
    "seq": 685,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-141",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:01.646Z",
    "offsetMs": 0.5070249999989755
  },
  {
    "seq": 686,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-141",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:02.245Z",
    "offsetMs": 599.5247840000084,
    "elapsedMs": 598.8151139999973,
    "outcome": "success"
  },
  {
    "seq": 687,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-141",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:02.247Z",
    "offsetMs": 601.5046870000078
  },
  {
    "seq": 688,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-141",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:02.807Z",
    "offsetMs": 1161.9204560000217,
    "elapsedMs": 560.1713009999949,
    "outcome": "success"
  },
  {
    "seq": 689,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-141",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:02.807Z",
    "offsetMs": 1162.221372,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6b149281d1f283e8eb008012e049d857d939079e4c6d1a5fa1299e3a37c0d57b";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":686},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":688},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":689}} as const;
export const projectionSha256 = "a573b60409cb816f0f6d480a34fca5b80ef7c708b38b407df1729e27dd6fd0a4";
