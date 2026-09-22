import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-476",
  "inputSha256": "14e1f48528e17e99abd85132ce93859a9981d9f8b87b578c9aef0c0ffdd58da5",
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
      "end": 32,
      "text": "Tu cuenta tendrá una nueva CLABE"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 35,
      "text": "Averigua cuándo estará disponible. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 35,
      "end": 187,
      "text": "Te asignaremos una nueva CLABE de tu cuenta Mercado Pago Hola, Guadalupe: El 26 de marzo recibirás una nueva CLABE que reemplazará la que tienes ahora. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 187,
      "end": 348,
      "text": "De esta manera, tu CLABE estará directamente conectada al Sistema de Pagos Electrónicos Interbancarios (SPEI) y tendrás un mejor servicio en tus transferencias. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 348,
      "end": 448,
      "text": "Mientras tanto, puedes seguir usando tu CLABE actual para ingresar dinero y recibir transferencias. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 448,
      "end": 484,
      "text": "Saludos, El equipo de Mercado Pago. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 484,
      "end": 517,
      "text": "¿Por qué tendré una nueva CLABE? "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 517,
      "end": 538,
      "text": "¿Tienes alguna duda? "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 538,
      "end": 965,
      "text": "Estamos para ayudarte Envía y recibe dinero desde tu celular #QueNadaTeDetenga MercadoLibre, S.A. de C.V., Institución de Fondos de Pago Electrónico (identificada bajo la marca \"Mercado Pago Wallet\"), es una Institución de Tecnología Financiera que se encuentra autorizada, regulada y supervisada por la CNBV, el Banco de México y la CONDUSEF, de conformidad con la Ley para Regular las Instituciones de Tecnología Financiera. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 965,
      "end": 1419,
      "text": "Asimismo, se informa que el Gobierno Federal y las Entidades de la Administración Pública Paraestatal no podrán responsabilizarse o garantizar los recursos de los Usuarios que sean utilizados en las operaciones que celebren los Usuarios con Mercado Pago Wallet o frente a otros, ni asumir alguna responsabilidad por las obligaciones contraídas por Mercado Pago Wallet o por algún Usuario de ésta frente a otro, en virtud de las operaciones que celebren. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1419,
      "end": 1510,
      "text": "Te enviamos este e-mail a GMartinezMartinez@gmail.com porque elegiste recibir información. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1510,
      "end": 1601,
      "text": "Administrar preferencias de e-mails Nunca envíes tu clave o datos de tu cuenta por e-mail. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1601,
      "end": 1689,
      "text": "Conoce cómo cuidamos tu Privacidad y visita los Términos y Condiciones de Mercado Pago ."
    }
  ],
  "passA": {
    "requestSha256": "d70d3a1077147a13fa237118801a96e145d2feebce2aa9bc41f6f05b992cb931",
    "capturedAt": "2026-09-22T03:57:39.416Z",
    "elapsedMs": 806.2906220000004,
    "successfulAttemptElapsedMs": 804.3844430000754,
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
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.99,
            "active_request": 0.01
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1,
            "sender_supplied": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 5297,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "148faf2970660d8e1c6799afeed17f078328e73f7297c8dc5dd556352c4f2f0d",
    "capturedAt": "2026-09-22T03:57:39.965Z",
    "elapsedMs": 548.1072870000498,
    "successfulAttemptElapsedMs": 546.4659019999672,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0,
            "body:11": 0,
            "body:6": 0.04,
            "body:10": 0.01,
            "body:7": 0.21000000000000002,
            "subject:0": 0,
            "body:9": 0,
            "body:8": 0,
            "body:4": 0.66,
            "NONE": 0.03,
            "body:3": 0,
            "body:1": 0.04,
            "body:5": 0.01,
            "body:0": 0
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 1657,
        "output_tokens": 151
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1355.80995600007,
  "derived": {
    "concern": "few_warning_signs",
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2337,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-476",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:38.611Z",
    "offsetMs": 1.6223400000017136
  },
  {
    "seq": 2338,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-476",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:39.415Z",
    "offsetMs": 806.2934170000954,
    "elapsedMs": 804.3844430000754,
    "outcome": "success"
  },
  {
    "seq": 2339,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-476",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:39.418Z",
    "offsetMs": 808.7343720000936
  },
  {
    "seq": 2340,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-476",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:39.965Z",
    "offsetMs": 1355.510297000059,
    "elapsedMs": 546.4659019999672,
    "outcome": "success"
  },
  {
    "seq": 2341,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-476",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:39.965Z",
    "offsetMs": 1355.8739140001126,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b923bc331753e8ea6d65b76406d1d916624760db848de5c300cd9754a77ed9ec";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2338},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2340},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2341}} as const;
export const projectionSha256 = "2eab9319e2ce5e451d0eef16be7c6eb0402cb4b37587b064a65215aeab5c3d1c";
