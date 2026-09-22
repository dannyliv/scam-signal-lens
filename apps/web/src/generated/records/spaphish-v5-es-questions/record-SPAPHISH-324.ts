import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-324",
  "inputSha256": "ac305d20d3c8059dff0db5992ed5ee63326475a805037928c8cab051fa76ec34",
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
      "end": 106,
      "text": "𝐇𝐞𝐦𝐨𝐬 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐝𝐨 𝐩𝐨𝐧𝐞𝐫𝐧𝐨𝐬 𝐞𝐧 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐨 𝐜𝐨𝐧 𝐮𝐬𝐭𝐞𝐝, ¡𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐚!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 50,
      "text": "SERVICIO ENTREGA ¡ENTREGA DEL PAQUETE SUSPENDIDO! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 50,
      "end": 280,
      "text": "Estado: Detenido en el centro de distribución (cargo aduanero pendiente) Se puede aplicar una tarifa de envío Su código de seguimiento: 77665544332 Programe La Entrega Ahora darse de baja El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 280,
      "end": 413,
      "text": "Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 1234 Calle Comercial, Ste 500 #600, Dallas TX 75201"
    }
  ],
  "passA": {
    "requestSha256": "e1ea721dbfeac1af0a91e04eccc6de92af97359cef26610afb696f20d8e9478b",
    "capturedAt": "2026-09-22T03:54:39.062Z",
    "elapsedMs": 644.0684270000202,
    "successfulAttemptElapsedMs": 643.0279250000021,
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
          "noul": 0.19
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.62
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.89
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.71
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.41
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.52
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
          "noul": 0.1
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
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.68,
            "mixed_or_unknown": 0.03,
            "independently_established": 0,
            "no_sensitive_action": 0.29
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 5110,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "3c7fea9c93e89aa38ce4df27dab7a898605ca10aa674d62b84a23344728983e3",
    "capturedAt": "2026-09-22T03:54:39.634Z",
    "elapsedMs": 571.0180289999698,
    "successfulAttemptElapsedMs": 569.9109450000105,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.87,
            "subject:0": 0,
            "body:2": 0,
            "NONE": 0.13
          },
          "confidence": 0.84
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.12,
            "body:1": 0.84,
            "subject:0": 0.03,
            "body:2": 0,
            "NONE": 0.01
          },
          "confidence": 0.79
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.53,
            "body:1": 0.21,
            "subject:0": 0.02,
            "body:2": 0.02,
            "NONE": 0.22
          },
          "confidence": 0.41
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "body:2": 0.02,
            "subject:0": 0.01,
            "body:1": 0.1,
            "NONE": 0.86
          },
          "confidence": 0.82
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.84,
            "subject:0": 0,
            "body:2": 0,
            "NONE": 0.16
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 3675,
        "output_tokens": 330
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1216.7774740000023,
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
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 1582,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-324",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:38.419Z",
    "offsetMs": 0.8438239999813959
  },
  {
    "seq": 1583,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-324",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:39.062Z",
    "offsetMs": 644.0689929999644,
    "elapsedMs": 643.0279250000021,
    "outcome": "success"
  },
  {
    "seq": 1584,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-324",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:39.064Z",
    "offsetMs": 646.2906649999786
  },
  {
    "seq": 1585,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-324",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:39.634Z",
    "offsetMs": 1216.4587670000037,
    "elapsedMs": 569.9109450000105,
    "outcome": "success"
  },
  {
    "seq": 1586,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-324",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:39.635Z",
    "offsetMs": 1216.82722799998,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d5fea2b360338cf227c45bde77fd1b28f89391dacce04719bd2e77e7a80e42be";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1583},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1585},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1586}} as const;
export const projectionSha256 = "65d70e556eed4643de7319b8bd78fd6ede40c9c50a96004a467dec03c6c1eaa9";
