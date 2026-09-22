import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-257",
  "inputSha256": "73dcf22b3c0ded6ea2fcaa3548e64311509c3a2149173af09977b750458f8648",
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
      "end": 47,
      "text": "¡Gracias por usar nuestros servicios bancarios!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 98,
      "text": "Su documento ha sido completado REVISAR DOCUMENTO Banco BBVA notificaciones.bbva@docs-service.com\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 98,
      "end": 145,
      "text": " Todas las partes han completado el documento. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 145,
      "end": 192,
      "text": "Gracias por usar nuestros servicios bancarios. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 192,
      "end": 316,
      "text": "Desarrollado por DocuSign No comparta este correo electrónico Este correo electrónico contiene un enlace seguro a DocuSign. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 316,
      "end": 397,
      "text": "No comparta con nadie este correo electrónico, el enlace, o el código de acceso. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 397,
      "end": 619,
      "text": "Método de firma alternativo Visite DocuSign.com, haga clic en “Acceder a los documentos”, e ingrese el código de seguridad: 4F91C8D72AE65910B3QZLMPX8821J74 Sobre DocuSign Firme documentos de manera electrónica en minutos. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 619,
      "end": 654,
      "text": "Es seguro y vinculante legalmente. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 654,
      "end": 846,
      "text": "Ya sea que esté en una oficina, en la casa, o en cualquier lugar (incluso alrededor del mundo), DocuSign brinda una solución profesional confiable para la gestión de transacciones digitales™. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 846,
      "end": 889,
      "text": "¿Tiene alguna pregunta sobre el documento? "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 889,
      "end": 1070,
      "text": "Si necesita modificar el documento, o tiene preguntas sobre la información en este, comuníquese directamente con el remitente mediante correo electrónico o responda a este mensaje. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1070,
      "end": 1187,
      "text": "Si tiene algún problema para firmar el documento, visite la página Ayuda con la firma en nuestro Centro de atención. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1187,
      "end": 1333,
      "text": "Descargar la aplicación de DocuSign Este mensaje fue enviado a usted por el Banco BBVA que está usando el servicio de firma electrónica DocuSign. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1333,
      "end": 1437,
      "text": "Si prefiere no recibir mensajes de correo electrónico de este remitente, solicítelo directamente a este."
    }
  ],
  "passA": {
    "requestSha256": "26e730ea780d968ce16b404ee908b9e7ea47f8a311509f7eb83e16662ca5a8f6",
    "capturedAt": "2026-09-22T03:53:18.585Z",
    "elapsedMs": 643.680709999986,
    "successfulAttemptElapsedMs": 642.411213000014,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.12
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.13
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
          "noul": 0.1
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.26
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
          "noul": 0.26
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.38,
            "active_request": 0.61,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.48
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.8,
            "no_sensitive_action": 0.16,
            "mixed_or_unknown": 0.03,
            "independently_established": 0.01
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 5224,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4b5ce9a4349013654318ffdc0ffc24dc82b1b89e23fd50a78b55346e1fb0e303",
    "capturedAt": "2026-09-22T03:53:19.179Z",
    "elapsedMs": 592.8906859999988,
    "successfulAttemptElapsedMs": 591.6328469999717,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.07,
            "body:2": 0.02,
            "body:4": 0.05,
            "body:0": 0.43,
            "body:10": 0.04,
            "body:11": 0.23,
            "body:8": 0.02,
            "body:6": 0,
            "body:7": 0,
            "body:9": 0.05,
            "subject:0": 0.06,
            "body:1": 0,
            "body:12": 0,
            "body:5": 0.02,
            "body:3": 0.01
          },
          "confidence": 0.38
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.59,
            "body:2": 0,
            "body:4": 0.12,
            "body:0": 0,
            "body:10": 0,
            "body:11": 0,
            "body:8": 0.01,
            "body:6": 0,
            "body:7": 0,
            "body:9": 0.1,
            "subject:0": 0,
            "body:1": 0,
            "body:12": 0,
            "body:5": 0.17,
            "body:3": 0.01
          },
          "confidence": 0.55
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "NONE": 0.3,
            "body:2": 0,
            "body:4": 0.01,
            "body:0": 0,
            "body:10": 0.01,
            "body:11": 0.02,
            "body:8": 0.01,
            "body:6": 0,
            "body:7": 0,
            "body:9": 0.05,
            "subject:0": 0,
            "body:1": 0,
            "body:5": 0.6,
            "body:12": 0,
            "body:3": 0
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 3312,
        "output_tokens": 480
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1238.2987490000087,
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
    "seq": 1254,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-257",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:17.942Z",
    "offsetMs": 0.9358460000366904
  },
  {
    "seq": 1255,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-257",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:18.585Z",
    "offsetMs": 643.6816150000086,
    "elapsedMs": 642.411213000014,
    "outcome": "success"
  },
  {
    "seq": 1256,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-257",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:18.587Z",
    "offsetMs": 645.8367990000406
  },
  {
    "seq": 1257,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-257",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:19.179Z",
    "offsetMs": 1237.962990000029,
    "elapsedMs": 591.6328469999717,
    "outcome": "success"
  },
  {
    "seq": 1258,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-257",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:19.180Z",
    "offsetMs": 1238.352118000039,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "407713e6b39ec8b3771193d465d9c9fc743ad086aa72b15c4a62f846dd1db8e3";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1255},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1257},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1258}} as const;
export const projectionSha256 = "69e4587f90e8a4aba0c52e853f154e2c7c6a06fb9fb26f6bb413bb69286d08e7";
