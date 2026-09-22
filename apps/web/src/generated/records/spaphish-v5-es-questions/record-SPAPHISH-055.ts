import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-055",
  "inputSha256": "eb89b8c08f156d851eccd670c34d367e35ec12ccd57e93a39c41ec70f27017a0",
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
      "end": 42,
      "text": "Actualización de las políticas de COVID-19"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 13,
      "text": "Buenos días! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 13,
      "end": 132,
      "text": "Debido al aumento de casos de COVID-19, actualizamos nuestra política sobre la respuesta que adoptará nuestra oficina. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 132,
      "end": 213,
      "text": "Estas pautas están disponibles aquí , en un documento compartido con la oficina. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 213,
      "end": 250,
      "text": "Inicie sesión y revise el documento. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 250,
      "end": 354,
      "text": "No deje de tomar precauciones para limitar la propagación del COVID-19 durante la temporada de fiestas. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 354,
      "end": 443,
      "text": "Recuerde evitar las tres “C”: espacios cerrados, lugares concurridos y contacto cercano. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 443,
      "end": 535,
      "text": "Además, siga estos tres consejos: use mascarilla, conserve su distancia y lávese las manos. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 535,
      "end": 617,
      "text": "Gracias a su continuo esfuerzo y su paciencia, todos nos mantendremos protegidos. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 617,
      "end": 648,
      "text": "¡Que tenga un maravilloso día! "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 648,
      "end": 657,
      "text": "Gracias. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 657,
      "end": 729,
      "text": "Departamento de Recursos Humanos de Universidad del Valle Campus Central"
    }
  ],
  "passA": {
    "requestSha256": "7467e30916cec66aac92d5cf88289993c1810f008d392f160f61f68330b73364",
    "capturedAt": "2026-09-22T03:49:18.230Z",
    "elapsedMs": 680.5567500000034,
    "successfulAttemptElapsedMs": 679.6822700000048,
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
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
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
            "active_request": 0.9,
            "mixed_or_unclear": 0,
            "informational": 0.1
          },
          "confidence": 0.87
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.41,
            "mixed_or_unknown": 0.01,
            "independently_established": 0.01,
            "no_sensitive_action": 0.5700000000000001
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 5056,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "149927ee148e24144e44e1910fc47ceadaa4184f835036d78b5372945eb8dd27",
    "capturedAt": "2026-09-22T03:49:18.779Z",
    "elapsedMs": 546.6394609999988,
    "successfulAttemptElapsedMs": 545.1587430000072,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "subject:0": 0,
            "body:10": 0.9,
            "NONE": 0,
            "body:4": 0,
            "body:1": 0.060000000000000005,
            "body:5": 0,
            "body:3": 0.04,
            "body:6": 0,
            "body:0": 0,
            "body:9": 0,
            "body:2": 0,
            "body:7": 0,
            "body:8": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 1163,
        "output_tokens": 142
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1229.6718859999964,
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
        "segmentId": "body:10"
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
    "seq": 267,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-055",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:17.550Z",
    "offsetMs": 0.5684519999922486
  },
  {
    "seq": 268,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-055",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:18.230Z",
    "offsetMs": 680.5567729999893,
    "elapsedMs": 679.6822700000048,
    "outcome": "success"
  },
  {
    "seq": 269,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-055",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:18.233Z",
    "offsetMs": 683.6018079999922
  },
  {
    "seq": 270,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-055",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:18.779Z",
    "offsetMs": 1229.4411729999993,
    "elapsedMs": 545.1587430000072,
    "outcome": "success"
  },
  {
    "seq": 271,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-055",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:18.779Z",
    "offsetMs": 1229.722637999992,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3722f19d2952570779e5a4168ff8b8261a86d89d058f9035a33b1f1a952baacf";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":268},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":270},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":271}} as const;
export const projectionSha256 = "228f7fa87aabec5ee82504efcd56f0d469cfe8a83c45700fa1de316927f0f018";
