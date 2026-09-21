import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-049",
  "inputSha256": "4d0979f953249a363edd786dd3a055fd66e40d1943f9e77090b99761d6112a21",
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
      "end": 73,
      "text": "Descargue la extensión oficial del SAT desde las tiendas de su navegador."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 339,
      "text": "Portal SAT Responsive Bienvenido al nuevo portal del SAT Estimado(a) contribuyente: En cumplimiento de las disposiciones fiscales vigentes y con fundamento en los artículos 17-D y 17-I del Código Fiscal de la Federación, el Servicio de Administración Tributaria (SAT) pone a su disposición la extensión oficial de seguridad para CFDI 4.0. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 339,
      "end": 440,
      "text": "Esta extensión mejora la validación de certificados de sello digital y la emisión/recepción de CFDI. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 440,
      "end": 620,
      "text": "Cómo instalar la extensión de seguridad CFDI 4.0 Seleccione su navegador y haga clic en el ícono correspondiente: Google Chrome → lo llevará a la Chrome Web Store oficial del SAT. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 620,
      "end": 690,
      "text": "Microsoft Edge → lo llevará a Microsoft Edge Add-ons oficial del SAT. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 690,
      "end": 760,
      "text": "Mozilla Firefox → lo llevará a Firefox Add-ons (AMO) oficial del SAT. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 760,
      "end": 846,
      "text": "Una vez en la tienda, haga clic en “Añadir a [Navegador]” y confirme la instalación . "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 846,
      "end": 1045,
      "text": "Versión simplificada para arriba de los logos Actualización de Seguridad CFDI 4.0 Instale el complemento oficial del SAT en su navegador para garantizar la correcta emisión y validación de CFDI 4.0. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1045,
      "end": 1169,
      "text": "Chrome Google Chrome Edge Microsoft Edge Firefox Mozilla Firefox Imagen en base64 Servicio de Administración Tributaria Av. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1169,
      "end": 1187,
      "text": "Ficticia 88, Col. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1187,
      "end": 1207,
      "text": "Datos Seguros, C.P. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1207,
      "end": 1344,
      "text": "90210, Ciudad de México Marca SAT 55 123 45 678 Este correo electrónico es informativo, favor de no responder a esta dirección de correo."
    }
  ],
  "passA": {
    "requestSha256": "10076a7c0ea67b94c9e1bd6b0e7fb712b7f4f5c5a849e9357fcd54c6899528f7",
    "capturedAt": "2026-09-20T23:44:06.641Z",
    "elapsedMs": 137.13608399999976,
    "successfulAttemptElapsedMs": 135.55166699999972,
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
          "noul": 0.05
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
          "noul": 0.1
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
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
          "noul": 0.14
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.99,
            "mixed_or_unclear": 0,
            "informational": 0.01,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.51,
            "mixed_or_unknown": 0.02,
            "independently_established": 0.04,
            "no_sensitive_action": 0.43
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 3778,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4d1977b31827cbccee3137df16c8ce0b7574c7b350f1d0eb3a5c206a199cdd75",
    "capturedAt": "2026-09-20T23:44:06.761Z",
    "elapsedMs": 118.07075000000077,
    "successfulAttemptElapsedMs": 116.42774999999892,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:8": 0,
            "body:9": 0,
            "body:2": 0,
            "body:0": 0.86,
            "subject:0": 0.1,
            "body:3": 0,
            "body:1": 0,
            "body:6": 0.02,
            "body:5": 0,
            "body:7": 0.01,
            "body:10": 0,
            "body:4": 0,
            "NONE": 0.01
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 1399,
        "output_tokens": 141
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 258.2129590000004,
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 237,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-049",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:06.504Z",
    "offsetMs": 0.9980420000010781
  },
  {
    "seq": 238,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-049",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:06.640Z",
    "offsetMs": 137.13750000000073,
    "elapsedMs": 135.55166699999972,
    "outcome": "success"
  },
  {
    "seq": 239,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-049",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:06.644Z",
    "offsetMs": 140.9368340000001
  },
  {
    "seq": 240,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-049",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:06.761Z",
    "offsetMs": 258.04145900000003,
    "elapsedMs": 116.42774999999892,
    "outcome": "success"
  },
  {
    "seq": 241,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-049",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:06.761Z",
    "offsetMs": 258.2601250000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6ee144fe9d0cd2c35ceca1dd1cdf73cc74619b3efb512755a0785b81a5c4e55b";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":238},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":240},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":241}} as const;
export const projectionSha256 = "9a64b90de5fa4b9a9ec9314741539a76bd293cb1738e233b2f080bc59e26ecda";
