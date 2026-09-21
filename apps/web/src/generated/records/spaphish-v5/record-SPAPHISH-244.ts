import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-244",
  "inputSha256": "ae5ff7e9684cabff9152d5fcf0d250700a3445aac09f912c4a6cc39320e09d2e",
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
      "end": 31,
      "text": "Fomentar la libertad financiera"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 327,
      "text": "Fomentar la libertad financiera Cómo Mariana Estrada está cambiando vidas con Quantum OpenAI La nueva misión de Mariana Estrada: Fomentar la libertad financiera Mientras que herramientas basadas en inteligencia artificial como ChatGPT han reconfigurado el panorama tecnológico, Quantum OpenAI lidera la revolución del trading. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 327,
      "end": 579,
      "text": "Inicialmente diseñada para ayudar a los inversores profesionales a tomar decisiones basadas en datos, la aplicación se ha actualizado con IA de vanguardia impulsada por ChatGPT-4, convirtiéndola en una herramienta fácil de usar para cualquier persona. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 579,
      "end": 783,
      "text": "La participación de Mariana Estrada ha atraído la atención de todo el mundo hacia la aplicación y ha contribuido a que personas de todo el mundo vean el increíble potencial de esta tecnología innovadora. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 783,
      "end": 918,
      "text": "La propia Mariana Estrada ha descrito Quantum OpenAI como un «cambio de juego», y anima a todo el mundo a aprovechar esta oportunidad. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 918,
      "end": 1004,
      "text": "«Esta es tu oportunidad de tomar las riendas de tu destino financiero», dice Estrada. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 1004,
      "end": 1059,
      "text": "«No esperes a que el éxito te encuentre, actúa ahora». "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 1059,
      "end": 1140,
      "text": "Gracias a su sencillez y potencia, Quantum OpenAI ya ha cambiado miles de vidas. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1140,
      "end": 1315,
      "text": "Los usuarios están delirando acerca de cómo la aplicación les ha ayudado a ganar miles de dólares con el mínimo esfuerzo, independientemente de su experiencia en el comercio. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1315,
      "end": 1346,
      "text": "¿Cómo funciona Quantum OpenAI? "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1346,
      "end": 1466,
      "text": "El concepto es sencillo: tras registrarse, los usuarios depositan una cantidad inicial, como 190 dólares, en su cuenta. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1466,
      "end": 1662,
      "text": "La aplicación utiliza estos fondos para ejecutar operaciones en tiempo real, analizando miles de opciones de mercado para comprar y vender acciones, divisas o bonos en los momentos más rentables. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1662,
      "end": 1781,
      "text": "La IA se encarga de todo el trabajo pesado, haciendo que operar sea tan fácil como pulsar un par de veces el teléfono. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1781,
      "end": 1840,
      "text": "Regístrese Ahora Puede darse de baja en cualquier momento. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1840,
      "end": 1870,
      "text": "Darse de baja unsubscribe here"
    }
  ],
  "passA": {
    "requestSha256": "b98cdfcee2d53eb424abd15847a79eee12fb4d1adf51c528273eec7427c6b0e5",
    "capturedAt": "2026-09-20T23:45:12.148Z",
    "elapsedMs": 209.7524579999881,
    "successfulAttemptElapsedMs": 207.92024999999558,
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
          "noul": 0.32
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.93
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.37
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.24
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.17
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.61
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.89
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.1,
            "sender_supplied": 0.88,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 3849,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "3079f811cfc98d60fdfb6cdeadfe606a7469208b5a14dbd0f6cc1c1e54ebe9a0",
    "capturedAt": "2026-09-20T23:45:12.312Z",
    "elapsedMs": 160.72804200000246,
    "successfulAttemptElapsedMs": 158.82683299999917,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:4": 0,
            "body:12": 0.05,
            "body:11": 0,
            "body:7": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:1": 0,
            "NONE": 0.52,
            "body:2": 0,
            "body:6": 0,
            "body:8": 0,
            "body:3": 0,
            "body:13": 0.01,
            "body:9": 0.41,
            "body:10": 0.01
          },
          "confidence": 0.48
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:0": 0,
            "body:4": 0,
            "body:12": 0.01,
            "body:11": 0,
            "body:7": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:1": 0,
            "NONE": 0,
            "body:2": 0,
            "body:10": 0,
            "body:8": 0,
            "body:3": 0,
            "body:9": 0.99,
            "body:6": 0,
            "body:13": 0
          },
          "confidence": 0.97
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:0": 0,
            "body:4": 0,
            "body:12": 0.06,
            "body:11": 0,
            "body:7": 0,
            "body:5": 0.92,
            "subject:0": 0,
            "body:1": 0,
            "NONE": 0.02,
            "body:2": 0,
            "body:10": 0,
            "body:9": 0,
            "body:3": 0,
            "body:8": 0,
            "body:13": 0,
            "body:6": 0
          },
          "confidence": 0.91
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "body:4": 0.01,
            "body:12": 0.02,
            "body:11": 0,
            "body:7": 0,
            "body:5": 0.01,
            "subject:0": 0,
            "body:1": 0.02,
            "NONE": 0.74,
            "body:2": 0.08,
            "body:10": 0,
            "body:9": 0.01,
            "body:3": 0.09,
            "body:13": 0.01,
            "body:8": 0,
            "body:6": 0
          },
          "confidence": 0.71
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:0": 0,
            "body:4": 0,
            "body:12": 0,
            "body:11": 0,
            "body:7": 0,
            "body:5": 0,
            "body:1": 0,
            "subject:0": 0,
            "NONE": 0.06,
            "body:2": 0,
            "body:6": 0,
            "body:8": 0,
            "body:3": 0,
            "body:10": 0.01,
            "body:13": 0,
            "body:9": 0.93
          },
          "confidence": 0.91
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:0": 0,
            "body:4": 0,
            "body:12": 0,
            "body:11": 0,
            "body:7": 1,
            "body:5": 0,
            "subject:0": 0,
            "body:1": 0,
            "NONE": 0,
            "body:2": 0,
            "body:10": 0,
            "body:13": 0,
            "body:3": 0,
            "body:9": 0,
            "body:8": 0,
            "body:6": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 5977,
        "output_tokens": 1008
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 373.2055420000106,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H3"
    ],
    "contextWarnings": [],
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
        "status": "selected",
        "segmentId": "body:9"
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
        "status": "none_selected",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "not_requested",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:9"
      },
      "remote_access_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unrealistic_reward": {
        "status": "selected",
        "segmentId": "body:7"
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
    "seq": 1193,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-244",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:11.940Z",
    "offsetMs": 1.2864580000023125
  },
  {
    "seq": 1194,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-244",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:12.148Z",
    "offsetMs": 209.75458300000173,
    "elapsedMs": 207.92024999999558,
    "outcome": "success"
  },
  {
    "seq": 1195,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-244",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:12.152Z",
    "offsetMs": 213.26962500000081
  },
  {
    "seq": 1196,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-244",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:12.311Z",
    "offsetMs": 372.7710000000079,
    "elapsedMs": 158.82683299999917,
    "outcome": "success"
  },
  {
    "seq": 1197,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-244",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:12.312Z",
    "offsetMs": 373.27720800001407,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "479c6ca973cf3656f93ff0c2f286fd98d567b9656f03a58789fd8923f0929b60";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1194},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1196},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1197}} as const;
export const projectionSha256 = "9aa18da2e3207bf401583cebcdcbf67fb54e499602e8db9bc35d6c431c861dea";
