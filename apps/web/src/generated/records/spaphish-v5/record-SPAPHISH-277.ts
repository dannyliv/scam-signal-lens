import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-277",
  "inputSha256": "a22b43983d401164d3f97ed484db1ba34e20b89e26f7b48385c0e2fde54e43f5",
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
    "requestSha256": "598d382eeff968d6a0506ea5f869f5e77f5b366d51f16c796102eca0e0f693ae",
    "capturedAt": "2026-09-21T00:57:25.769Z",
    "elapsedMs": 151.51591700000063,
    "successfulAttemptElapsedMs": 148.45066600000064,
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
          "noul": 0.23
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.92
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.31
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.14
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.28
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
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.15,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.84
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 4163,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c6f36e9c93a8d142e314da4c406afd614f8553354033c33e1932c22ef15c2d20",
    "capturedAt": "2026-09-21T00:57:25.998Z",
    "elapsedMs": 228.13795799999934,
    "successfulAttemptElapsedMs": 226.17662500000006,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0,
            "body:6": 0,
            "body:8": 0,
            "body:2": 0.25,
            "body:10": 0,
            "body:1": 0,
            "body:9": 0,
            "body:3": 0.01,
            "NONE": 0.56,
            "body:4": 0,
            "body:5": 0.04,
            "subject:0": 0,
            "body:0": 0.13
          },
          "confidence": 0.52
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:5": 1,
            "body:6": 0,
            "body:8": 0,
            "body:2": 0,
            "body:10": 0,
            "body:1": 0,
            "body:9": 0,
            "body:3": 0,
            "NONE": 0,
            "body:4": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:5": 0.29,
            "body:6": 0.01,
            "body:8": 0,
            "body:2": 0,
            "body:9": 0,
            "body:1": 0,
            "body:10": 0,
            "body:3": 0.06,
            "NONE": 0.05,
            "body:4": 0,
            "body:7": 0.12,
            "subject:0": 0.01,
            "body:0": 0.46
          },
          "confidence": 0.4
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.3,
            "body:6": 0,
            "body:8": 0,
            "body:2": 0,
            "body:9": 0,
            "body:1": 0.01,
            "body:10": 0,
            "body:3": 0.02,
            "NONE": 0.67,
            "body:4": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.63
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:5": 0.19,
            "body:6": 0.02,
            "body:8": 0,
            "body:2": 0,
            "body:10": 0,
            "body:1": 0,
            "body:9": 0,
            "body:3": 0.58,
            "NONE": 0.2,
            "body:4": 0,
            "body:7": 0.01,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 6717,
        "output_tokens": 692
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 707.7546249999923,
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
        "status": "not_requested",
        "segmentId": null
      },
      "payment_request": {
        "status": "low_confidence",
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
    "seq": 1357,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-277",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:24.770Z",
    "offsetMs": 1.287291999993613
  },
  {
    "seq": 1358,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-277",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:25.095Z",
    "offsetMs": 326.234666999997,
    "elapsedMs": 324.41374999999243,
    "outcome": "success"
  },
  {
    "seq": 1359,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-277",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:25.095Z",
    "offsetMs": 326.45779200000106,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2668,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-277",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:25.619Z",
    "offsetMs": 2.4313750000001164
  },
  {
    "seq": 2669,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-277",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:25.769Z",
    "offsetMs": 151.54075000000012,
    "elapsedMs": 148.45066600000064,
    "outcome": "success"
  },
  {
    "seq": 2670,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-277",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:25.771Z",
    "offsetMs": 154.13491599999907
  },
  {
    "seq": 2671,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-277",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:25.998Z",
    "offsetMs": 380.7632080000003,
    "elapsedMs": 226.17662500000006,
    "outcome": "success"
  },
  {
    "seq": 2672,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-277",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:25.998Z",
    "offsetMs": 381.4003329999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3a58cd5d922e3d114d8a957be4c731f4e06f215bb9035c3bfde4424cb09b4072";
export const replayAnchors = {"passA":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2669},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2671},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2672}} as const;
export const projectionSha256 = "6e1feb6d40e7f81f8ae7669614100715e832c15dd19babf191eae6ff0b53bd99";
