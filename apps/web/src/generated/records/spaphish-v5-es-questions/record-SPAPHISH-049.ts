import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-049",
  "inputSha256": "4d0979f953249a363edd786dd3a055fd66e40d1943f9e77090b99761d6112a21",
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
    "requestSha256": "4af2fedf33d1696013c6af66362854a7e7410fa6dd0ccafb8e9fe3824f7d5562",
    "capturedAt": "2026-09-22T03:49:10.614Z",
    "elapsedMs": 673.6249190000017,
    "successfulAttemptElapsedMs": 672.7743520000004,
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
          "noul": 0.11
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.13
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.19
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0.99,
            "educational_or_quoted": 0,
            "informational": 0.01
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.53,
            "no_sensitive_action": 0.45,
            "independently_established": 0.01
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 5228,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "6b457542f05c8b7c1e112b459aa7e33a96e479a9cee1fc31d13f961ca29448b0",
    "capturedAt": "2026-09-22T03:49:11.192Z",
    "elapsedMs": 577.2299590000039,
    "successfulAttemptElapsedMs": 576.5488840000035,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:10": 0,
            "NONE": 0.01,
            "body:8": 0,
            "body:7": 0,
            "subject:0": 0.06,
            "body:5": 0,
            "body:6": 0.01,
            "body:4": 0,
            "body:3": 0,
            "body:1": 0,
            "body:2": 0.01,
            "body:9": 0,
            "body:0": 0.91
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 1499,
        "output_tokens": 141
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1252.3063800000018,
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
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-049",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:09.940Z",
    "offsetMs": 0.5709940000015195
  },
  {
    "seq": 238,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-049",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:10.613Z",
    "offsetMs": 673.6256100000028,
    "elapsedMs": 672.7743520000004,
    "outcome": "success"
  },
  {
    "seq": 239,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-049",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:10.615Z",
    "offsetMs": 675.1965950000013
  },
  {
    "seq": 240,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-049",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:11.192Z",
    "offsetMs": 1252.0867110000036,
    "elapsedMs": 576.5488840000035,
    "outcome": "success"
  },
  {
    "seq": 241,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-049",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:11.192Z",
    "offsetMs": 1252.3545290000038,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3b523ba7f9ffb4b7fcb991eb204316fa3dba23cdb0ce1c5be4cd3b79b24c1c54";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":238},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":240},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":241}} as const;
export const projectionSha256 = "8dec16cc0e84828a1955a14df549ed4acda9434adf08d4a45a0aa41636290dc5";
