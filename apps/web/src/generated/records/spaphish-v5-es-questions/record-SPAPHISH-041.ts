import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-041",
  "inputSha256": "9c73fe50ff3f1bf33722cc3b64ade84d2ee41d04c7d834a0ea3d15bdb9380315",
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
      "end": 3,
      "text": "SAC"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 133,
      "text": "Estimado Cliente: LIC Ricardo Vargas FLORES , Le confirmamos que la documentación de su folio: 99876543210001 se recibió incompleta. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 133,
      "end": 386,
      "text": "Para continuar con el trámite es necesario el envío de los siguientes documentos: (ENVIAR DOCUMENTACION EN PDF O JPG FAVOR DE NO COMPRIMIR EN ZIP) Machote Le recordamos que el nivel de servicio inicia una vez que la documentación se encuentre completa. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 386,
      "end": 604,
      "text": "Notas: Llega correo con:póliza,endoso,carta solicitud( machote) y factura electrónica.Documentación improcedente:colocar en carta solicitud modelo correcto: 2024 ( coloca sedán) y nombre completo ( solo coloca firma). "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 604,
      "end": 726,
      "text": "Para cualquier duda o aclaración relacionada a su solicitud, favor de comunicarse a nuestra línea de atención a Clientes. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 726,
      "end": 929,
      "text": "Estimado cliente por favor para el envío de documentación al correo: soporte_poliza@serviax-services.net -------------------------- Mensaje Original -------------------------- AVISO DE CONFIDENCIALIDAD. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 929,
      "end": 1422,
      "text": "Se hace de su conocimiento que la información, archivos digitales y posibles datos personales contenidos en este correo electrónico son CONFIDENCIALES y por lo tanto, su circulación, reproducción o uso no autorizado por SERVIAX, lo hará acreedor a las penas  y/o sanciones administrativas establecidas Ley de la Propiedad Industrial, la Ley de Protección de Datos Personales en Posesión de Particulares, así como del Código Penal Federal y sus correlativos de las demás entidades federativas. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 1422,
      "end": 1871,
      "text": "En cumplimiento a la Ley de Protección de Datos Personales en posesión de particulares, SERVIAX pone a tu disposición nuestro AVISO DE PRIVACIDAD, el que podrás consultar en www.serviax.net/aviso-legal-mexico Si usted recibe este mensaje por ERROR, por favor comuníqueselo inmediatamente al remitente y ELIMÍNELO ya que usted NO ESTA AUTORIZADO al uso, revelación, distribución, impresión o copia de toda o alguna parte de la información contenida. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1871,
      "end": 1879,
      "text": "Gracias."
    }
  ],
  "passA": {
    "requestSha256": "77833708353e867a7431ca20986db91988a074635941ebd0b533cb6d1a4d4023",
    "capturedAt": "2026-09-22T03:49:00.209Z",
    "elapsedMs": 665.7451579999979,
    "successfulAttemptElapsedMs": 664.6416160000008,
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
          "noul": 0.36
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
          "noul": 0.21
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.1
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
          "noul": 0.14
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.08
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.6900000000000001,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.31
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 5328,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4295e63717c82478e92e587a1453422dde847b95078b30a676e83dca49ebd297",
    "capturedAt": "2026-09-22T03:49:00.870Z",
    "elapsedMs": 659.6997210000045,
    "successfulAttemptElapsedMs": 658.8146229999984,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:3": 0,
            "body:7": 0,
            "body:4": 0.27,
            "body:0": 0.01,
            "NONE": 0.5700000000000001,
            "body:5": 0,
            "body:1": 0.1,
            "body:2": 0.04,
            "subject:0": 0
          },
          "confidence": 0.51
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:6": 0,
            "body:3": 0,
            "body:4": 0.01,
            "body:7": 0,
            "body:0": 0,
            "NONE": 0.28,
            "body:5": 0.01,
            "body:1": 0.7,
            "body:2": 0,
            "subject:0": 0
          },
          "confidence": 0.66
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:6": 0.01,
            "body:3": 0.28,
            "body:4": 0.35,
            "body:7": 0,
            "body:0": 0.18,
            "NONE": 0.02,
            "body:5": 0.02,
            "body:2": 0.01,
            "body:1": 0.12,
            "subject:0": 0.01
          },
          "confidence": 0.28
        }
      },
      "usage": {
        "input_tokens": 3509,
        "output_tokens": 330
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1327.2873360000012,
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
        "segmentId": "body:1"
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
    "seq": 197,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-041",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:59.544Z",
    "offsetMs": 0.632897999996203
  },
  {
    "seq": 198,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-041",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:00.209Z",
    "offsetMs": 665.7458419999966,
    "elapsedMs": 664.6416160000008,
    "outcome": "success"
  },
  {
    "seq": 199,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-041",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:00.210Z",
    "offsetMs": 667.5688259999952
  },
  {
    "seq": 200,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-041",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:00.870Z",
    "offsetMs": 1326.9038379999984,
    "elapsedMs": 658.8146229999984,
    "outcome": "success"
  },
  {
    "seq": 201,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-041",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:00.870Z",
    "offsetMs": 1327.347388000002,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ec4e82f46d640b13e77cb2cd783920769a7883d2ee586efe052e9a736d79f962";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":198},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":200},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":201}} as const;
export const projectionSha256 = "f0322de1e7fc838d6f837aa21d8d88f15191512431367e40c933f0a6e0c0af32";
