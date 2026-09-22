import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-197",
  "inputSha256": "3f96d971b474acf88405f8296642a631dc14f07484e064a092a52ebad0b83f6e",
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
      "end": 26,
      "text": "Fw: Cheque de compensación"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 32,
      "text": "Mi buen amigo, ¿cómo estás hoy? "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 32,
      "end": 71,
      "text": "Espero que tú y tu familia estén bien. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 71,
      "end": 83,
      "text": "Soy la Sra. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 83,
      "end": 179,
      "text": "Anna Smith, quien se comunicó contigo hace algún tiempo con respecto a mi Fundación de Caridad. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 179,
      "end": 215,
      "text": "Espero que te hayas acordado de mí. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 215,
      "end": 311,
      "text": "Bueno, me complace informarte que logré donar el dinero a la FUNDACIÓN BENÉFICA CUIDADOS India. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 311,
      "end": 426,
      "text": "Mientras tanto, no podía olvidar tu esfuerzo y preocupación anteriores por ayudarme, aunque no lo logramos juntos. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 426,
      "end": 462,
      "text": "Pero tengo buenas noticias para ti. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 462,
      "end": 544,
      "text": "Por la gracia del Señor, quiero compensarte con un cheque de $600,000.00 dólares. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 544,
      "end": 603,
      "text": "Este es mi regalo y mi pequeño apoyo para ti y tu familia. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 603,
      "end": 758,
      "text": "Le he dado el cheque a nuestro párroco, el reverendo padre Michael Johnson, para que lo envíe a ti para que puedas depositarlo en tu banco para retirarlo. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 758,
      "end": 889,
      "text": "Comunícate con el reverendo padre Michael Johnson a su dirección de correo electrónico a continuación y dile que le pido a la Sra. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 889,
      "end": 948,
      "text": "Anna Smith que te ayude a enviar el cheque a tu dirección. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 948,
      "end": 1208,
      "text": "Correo electrónico: rev.michaeljohnson@dominioficticio.orgmailto:rev.michaeljohnson@dominioficticio.org Teléfono: +123 4567890123 Una vez que reciba el cheque y retire el dinero, done $250,000.00 a los menos privilegiados que lo rodean y quédese con el resto. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1208,
      "end": 1340,
      "text": "Esta tarde viajaré a la India para continuar mi tratamiento con un especialista en cáncer recomendado por Salud Global de la India. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1340,
      "end": 1389,
      "text": "Por favor, siempre oren por mí, Dios la bendiga. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 1389,
      "end": 1464,
      "text": "Su hermana y amiga Sra. anna smith La Universidad Ficticia de México, A.C. "
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 1464,
      "end": 1762,
      "text": "(UFM) con domicilio en Calle de la Seguridad número 123, Colonia Protección de Datos, Delegación Benito Juárez, Código Postal 54321, en la Ciudad de México, utilizará sus datos personales recabados para la prestación de los servicios académicos y administrativos en el sistema educativo de la UFM. "
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 1762,
      "end": 1981,
      "text": "Para mayor información acerca del tratamiento y de los derechos que puede hacer valer, usted puede acceder al aviso de privacidad integral ingresando a la liga https://www.data-protection.com/aviso-legal-y-de-privacidad"
    }
  ],
  "passA": {
    "requestSha256": "97579e07947e2acb283e9a4aa9e5c68253aae5a033bf5fc15c8e881370c3cd8b",
    "capturedAt": "2026-09-22T03:52:05.798Z",
    "elapsedMs": 625.0176309999952,
    "successfulAttemptElapsedMs": 623.7606659999874,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.28
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.93
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.16
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.26
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.46
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.83
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.6
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
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
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.08,
            "sender_supplied": 0.92,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 5406,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c4439449fa8ce5196f57556c2a66800877b1be0622880f3403a973ebae214741",
    "capturedAt": "2026-09-22T03:52:06.442Z",
    "elapsedMs": 641.959113000019,
    "successfulAttemptElapsedMs": 640.3052550000139,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.88,
            "body:9": 0,
            "body:5": 0,
            "body:3": 0,
            "body:12": 0.02,
            "body:0": 0,
            "body:1": 0,
            "body:16": 0,
            "body:7": 0,
            "body:6": 0,
            "body:15": 0,
            "body:17": 0,
            "body:18": 0,
            "body:11": 0.01,
            "subject:0": 0,
            "body:13": 0.05,
            "body:2": 0,
            "body:10": 0.04,
            "body:8": 0,
            "body:14": 0,
            "body:4": 0
          },
          "confidence": 0.86
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "NONE": 0,
            "body:9": 0,
            "body:1": 0,
            "body:3": 0,
            "body:12": 0,
            "body:0": 0,
            "body:7": 0,
            "body:16": 0,
            "body:5": 0,
            "body:6": 0,
            "body:18": 0,
            "body:15": 0,
            "body:17": 0,
            "subject:0": 0,
            "body:11": 0,
            "body:13": 0.98,
            "body:10": 0.01,
            "body:2": 0,
            "body:8": 0.01,
            "body:4": 0,
            "body:14": 0
          },
          "confidence": 0.97
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.71,
            "body:9": 0,
            "body:1": 0,
            "body:3": 0,
            "body:12": 0.01,
            "body:0": 0,
            "body:7": 0,
            "body:16": 0,
            "body:5": 0,
            "body:6": 0,
            "body:18": 0,
            "body:17": 0,
            "body:15": 0,
            "body:11": 0.07,
            "subject:0": 0,
            "body:13": 0.05,
            "body:10": 0.02,
            "body:2": 0,
            "body:8": 0.01,
            "body:4": 0,
            "body:14": 0.13
          },
          "confidence": 0.69
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "NONE": 0,
            "body:9": 0,
            "body:5": 0,
            "body:3": 0.15,
            "body:12": 0.01,
            "body:7": 0,
            "body:0": 0,
            "body:16": 0.1,
            "body:1": 0,
            "body:6": 0,
            "body:15": 0,
            "body:18": 0,
            "body:17": 0.01,
            "body:11": 0.2,
            "subject:0": 0,
            "body:13": 0,
            "body:2": 0.03,
            "body:10": 0.5,
            "body:8": 0,
            "body:4": 0,
            "body:14": 0
          },
          "confidence": 0.46
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.5,
            "body:9": 0,
            "body:1": 0,
            "body:3": 0,
            "body:12": 0.01,
            "body:7": 0,
            "body:0": 0,
            "body:16": 0,
            "body:5": 0,
            "body:6": 0,
            "body:18": 0,
            "body:15": 0,
            "body:17": 0,
            "body:11": 0.1,
            "subject:0": 0,
            "body:13": 0.19,
            "body:2": 0,
            "body:10": 0.19,
            "body:8": 0.01,
            "body:4": 0,
            "body:14": 0
          },
          "confidence": 0.46
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "NONE": 0.01,
            "body:9": 0,
            "body:1": 0,
            "body:3": 0,
            "body:12": 0,
            "body:7": 0,
            "body:0": 0,
            "body:16": 0,
            "body:5": 0,
            "body:6": 0,
            "body:18": 0,
            "body:15": 0,
            "body:17": 0,
            "subject:0": 0,
            "body:11": 0,
            "body:13": 0.97,
            "body:2": 0,
            "body:10": 0.02,
            "body:8": 0,
            "body:14": 0,
            "body:4": 0
          },
          "confidence": 0.96
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.45,
            "body:9": 0.01,
            "body:1": 0,
            "body:3": 0,
            "body:12": 0,
            "body:0": 0,
            "body:7": 0,
            "body:16": 0,
            "body:5": 0,
            "body:6": 0,
            "body:18": 0,
            "body:17": 0,
            "body:15": 0,
            "body:11": 0,
            "subject:0": 0,
            "body:13": 0.09999999999999999,
            "body:10": 0.03,
            "body:2": 0,
            "body:8": 0.41000000000000003,
            "body:4": 0,
            "body:14": 0
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 8980,
        "output_tokens": 1527
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1269.0110020000138,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H2"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "none_selected",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:13"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "none_selected",
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
        "status": "selected",
        "segmentId": "body:13"
      },
      "remote_access_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unrealistic_reward": {
        "status": "low_confidence",
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 958,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-197",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:05.174Z",
    "offsetMs": 0.942298000009032
  },
  {
    "seq": 959,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-197",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:05.798Z",
    "offsetMs": 625.0195300000196,
    "elapsedMs": 623.7606659999874,
    "outcome": "success"
  },
  {
    "seq": 960,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-197",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:05.801Z",
    "offsetMs": 627.8086140000087
  },
  {
    "seq": 961,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-197",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:06.441Z",
    "offsetMs": 1268.4789050000254,
    "elapsedMs": 640.3052550000139,
    "outcome": "success"
  },
  {
    "seq": 962,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-197",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:06.442Z",
    "offsetMs": 1269.069336000015,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6fbf3bd775941b958a6e9526a85113e9dda166439ebbd86ce1cc5512c7e91758";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":959},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":961},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":962}} as const;
export const projectionSha256 = "a660c02630be3af066a313fb4cae18bca55e7602349327c8541839cc91a4a744";
