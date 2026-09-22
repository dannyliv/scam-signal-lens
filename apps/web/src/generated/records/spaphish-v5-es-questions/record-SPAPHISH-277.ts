import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-277",
  "inputSha256": "a22b43983d401164d3f97ed484db1ba34e20b89e26f7b48385c0e2fde54e43f5",
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
      "end": 20,
      "text": "Credito Pre-aprobado"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 499,
      "text": "lunes, 17 de noviembre de 2024 Apreciable: Ings Tel. ; Por medio de este correo, nos da gusto informarle que debido a una buena referencia que tenemos de usted en nuestro sistema, Financiera Patrimonio le ha pre autorizado una línea de financiaminto para la adquisición de un bien inmueble, otorgándole un monto de de $ 5,000,000 pesos MN , el cual puede utilizar para comprar, construir, remodelar, casa departamento, local comercial, oficina o terreno en cualquier parte de la República Mexicana. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 499,
      "end": 649,
      "text": "Lo más interesante es que no requiere aval, no pagaría intereses y tiene un plazo muy flexible de 1 a 15 años para terminar el total de la inversión. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 649,
      "end": 732,
      "text": "Otorgándoles atractivas Facilidades para el enganche, ya sea Inmediato o Diferido. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 732,
      "end": 882,
      "text": "Es necesario que agende una cita en nuestra oficina, en donde uno de nuestros asesores le brindará la atención que merece, aclarando todas sus dudas. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 882,
      "end": 999,
      "text": "Esto con la intención de adaptar un plan que se ajuste a sus necesidades, el mismo día de su asesoría bien inmueble. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 999,
      "end": 1641,
      "text": "Es importante que tome en cuenta que la vigencia que nos autoriza la dirección comercial para que active este plan tiene como máximo el 30 de noviembre de 2024, por esta razón, es necesario que conserve la la siguiente clave de preautorización: FP AB CD __ __ / 5 __ __ __ y se comunique al siguiente número telefónico en Distrito Federal y el Área Metropolitana: 55 - 98.76.54.32 o bien, enviándonos un correo electrónico a: ventas.financieras@email-seguro.net Sin más por el momento, quedo a sus órdenes en respuesta a este correo para formalizar una cita en nuestras oficinas y pueda asistir a su asesoría antes de la fecha ya mencionada. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 1641,
      "end": 1812,
      "text": "Saludos Laura Jiménez 55-9876.5432 con WhatsApp [http://editor.ne16.com/hircasa-roma/pleca.jpg] http://clics.marketinghircasa.com/t/33369200/1252327311/54143555/0/101092/?"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1812,
      "end": 2007,
      "text": "c73c8e04=aGlyY2FzYS1yb21h&x=15416f34 Este correo fue enviado por: Financiera Patrimonio Tel: 55 - 98.76.54.32 Click aquíhttp://clics.marketinghircasa.com/t/33369200/1252327311/54143555/0/101092/?"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 2007,
      "end": 2081,
      "text": "c73c8e04=aGlyY2FzYS1yb21h&x=15416f34 para abandonar esta lista de correo. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 2081,
      "end": 2166,
      "text": "Click aquíhttp://clics.marketinghircasa.com/t/33369200/1252327311/62092564/0/101092/?"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 2166,
      "end": 2217,
      "text": "x=057a03fb para ver nuestra politica de privacidad."
    }
  ],
  "passA": {
    "requestSha256": "f7f944567818e3d5c01613a181e3be13c90f95e2c98d27b2c8e3f0ccaff1a1f0",
    "capturedAt": "2026-09-22T03:53:43.410Z",
    "elapsedMs": 644.3338640000438,
    "successfulAttemptElapsedMs": 641.7505410000449,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.16
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.13
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.85
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.35
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.26
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.18
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
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.42,
            "sender_supplied": 0.56,
            "independently_established": 0
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 5613,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "402e139fd3ff873f3b980292ffcf9e1c9de778d245612185a6c9344ff63e5904",
    "capturedAt": "2026-09-22T03:53:44.100Z",
    "elapsedMs": 686.8095869999961,
    "successfulAttemptElapsedMs": 685.649814000004,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:3": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:7": 0,
            "body:0": 0,
            "body:6": 0,
            "body:10": 0,
            "body:5": 1,
            "body:9": 0,
            "NONE": 0,
            "body:4": 0,
            "body:8": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:3": 0.16,
            "body:1": 0,
            "subject:0": 0.01,
            "body:2": 0,
            "body:6": 0.07,
            "body:0": 0.45,
            "body:7": 0.07,
            "body:10": 0,
            "body:5": 0.21,
            "body:9": 0,
            "NONE": 0.03,
            "body:4": 0,
            "body:8": 0
          },
          "confidence": 0.39
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.45,
            "body:1": 0.01,
            "subject:0": 0,
            "body:2": 0,
            "body:6": 0,
            "body:0": 0,
            "body:7": 0.01,
            "body:10": 0,
            "body:3": 0.01,
            "body:9": 0,
            "NONE": 0.52,
            "body:4": 0,
            "body:8": 0
          },
          "confidence": 0.47
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:5": 0,
            "body:1": 0.61,
            "subject:0": 0,
            "body:2": 0,
            "body:7": 0,
            "body:0": 0,
            "body:6": 0,
            "body:10": 0,
            "body:3": 0,
            "body:9": 0,
            "NONE": 0.39,
            "body:4": 0,
            "body:8": 0
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 5990,
        "output_tokens": 555
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1333.9011460000183,
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
        "segmentId": "body:5"
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1353,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-277",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:42.768Z",
    "offsetMs": 2.162190000002738
  },
  {
    "seq": 1354,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-277",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:43.410Z",
    "offsetMs": 644.334823000012,
    "elapsedMs": 641.7505410000449,
    "outcome": "success"
  },
  {
    "seq": 1355,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-277",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:43.413Z",
    "offsetMs": 647.4628580000135
  },
  {
    "seq": 1356,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-277",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:44.099Z",
    "offsetMs": 1333.52358800004,
    "elapsedMs": 685.649814000004,
    "outcome": "success"
  },
  {
    "seq": 1357,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-277",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:44.100Z",
    "offsetMs": 1333.9524059999967,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "cf3a7cf0a1670efbf4649be6a2fb499981d2afe4883f170211873154d84904e0";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1354},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1356},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1357}} as const;
export const projectionSha256 = "7e6a7961657be01808944c90b3440d10f651a1e79a5bf3a8870c4e990db79930";
