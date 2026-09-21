import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-476",
  "inputSha256": "14e1f48528e17e99abd85132ce93859a9981d9f8b87b578c9aef0c0ffdd58da5",
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
    "requestSha256": "14ad98b8a13b203c95397404c1ee350abe6af8f97d02f41a52951b9fb97017ad",
    "capturedAt": "2026-09-20T23:46:31.759Z",
    "elapsedMs": 162.58124999998836,
    "successfulAttemptElapsedMs": 161.84279200001038,
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
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.18
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0.04,
            "informational": 0.96
          },
          "confidence": 0.94
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "independently_established": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3847,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "10949c5ecd88c7e6dbd1607b99b31864f35b15a96cdafcaf3742a81234db6f19",
    "capturedAt": "2026-09-20T23:46:31.904Z",
    "elapsedMs": 143.87337500002468,
    "successfulAttemptElapsedMs": 141.9977910000016,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:10": 0.01,
            "subject:0": 0,
            "body:11": 0,
            "body:1": 0.04,
            "body:6": 0.01,
            "body:4": 0.29,
            "body:5": 0,
            "body:2": 0,
            "body:8": 0.01,
            "body:3": 0,
            "body:0": 0,
            "NONE": 0.04,
            "body:9": 0,
            "body:7": 0.6
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 1557,
        "output_tokens": 151
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 308.02362500000163,
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
    "seq": 2338,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-476",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:31.597Z",
    "offsetMs": 0.5493330000026617
  },
  {
    "seq": 2339,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-476",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:31.759Z",
    "offsetMs": 162.58091700001387,
    "elapsedMs": 161.84279200001038,
    "outcome": "success"
  },
  {
    "seq": 2340,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-476",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:31.762Z",
    "offsetMs": 165.19691700002295
  },
  {
    "seq": 2341,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-476",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:31.904Z",
    "offsetMs": 307.7642080000078,
    "elapsedMs": 141.9977910000016,
    "outcome": "success"
  },
  {
    "seq": 2342,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-476",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:31.905Z",
    "offsetMs": 308.08766700001433,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "632c77a294370ef1a9c16f337deb1b240bc7b1b54683a1cd52d6229caeb66c12";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2339},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2341},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2342}} as const;
export const projectionSha256 = "959838050f7bed372484d5b0f5bf1aa4ae2b083d3eef47267f2c8e19e7c54f32";
