import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-192",
  "inputSha256": "defe4e2af1961cfff9270ec783781060923abf52ad15a334d835406fef0b76a8",
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
      "end": 70,
      "text": "Missxtranger, Advertencia final: ¡tu cuenta de Netflix será eliminada!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 56,
      "text": "Ahora puedes ampliar tu suscripción por 90 días gratis. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 56,
      "end": 126,
      "text": "¡Continúa disfrutando de películas, programas de TV y más ilimitados! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 126,
      "end": 145,
      "text": "¿Listo para mirar? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 145,
      "end": 186,
      "text": "N E T F L I X ¡Tu membresía ha caducado! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 186,
      "end": 229,
      "text": "Querido cliente, Su membresía ha caducado. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 229,
      "end": 319,
      "text": "Pero, como parte de nuestro programa de fidelización, ahora puedes ampliarlo por 90 días. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 319,
      "end": 327,
      "text": "GRATIS. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 327,
      "end": 384,
      "text": "Disfrute de películas, programas de TV y más ilimitados. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 384,
      "end": 403,
      "text": "¿Listo para mirar? "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 403,
      "end": 424,
      "text": "Amplíe su membresía. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 424,
      "end": 593,
      "text": "EXTENDER GRATIS -------------------------------------------------------------------------------- Para dejar de recibir correos electrónicos futuros, Darse de baja aquí. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 593,
      "end": 635,
      "text": "El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 635,
      "end": 780,
      "text": "Si prefieres no recibir más comunicaciones, por favor date de baja aquí Ou écrivez à: 909 Avenida Ficticia Ste 101#5050, Ciudad Eterna, AZ, 85002"
    }
  ],
  "passA": {
    "requestSha256": "7231d2b68cd14bb06b4f4283ea4ff7b244678de7c4dffa32f1748ca02cf5ad12",
    "capturedAt": "2026-09-20T23:44:53.624Z",
    "elapsedMs": 309.892792000006,
    "successfulAttemptElapsedMs": 307.9356670000052,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.17
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.24
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.88
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.85
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.32
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.57,
            "no_sensitive_action": 0.41,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 3658,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "580c1e1d636c4be9efb8bf4baa6ead9a726d4c043e984cec23d1186a3e66e94f",
    "capturedAt": "2026-09-20T23:44:53.863Z",
    "elapsedMs": 236.5982090000034,
    "successfulAttemptElapsedMs": 234.7222499999989,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0,
            "NONE": 0.71,
            "body:5": 0.01,
            "body:3": 0,
            "body:8": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:10": 0.01,
            "body:0": 0.03,
            "body:1": 0,
            "body:4": 0,
            "body:11": 0,
            "body:6": 0.01,
            "body:9": 0.22,
            "body:12": 0.01
          },
          "confidence": 0.68
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:7": 0,
            "body:5": 0,
            "NONE": 0.01,
            "body:3": 0.06,
            "body:8": 0,
            "subject:0": 0.91,
            "body:2": 0,
            "body:10": 0,
            "body:11": 0,
            "body:1": 0,
            "body:4": 0.01,
            "body:0": 0,
            "body:6": 0,
            "body:12": 0,
            "body:9": 0.01
          },
          "confidence": 0.9
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:5": 0.19,
            "NONE": 0.17,
            "body:7": 0,
            "body:3": 0.36,
            "body:8": 0,
            "subject:0": 0.07,
            "body:2": 0,
            "body:10": 0,
            "body:11": 0.02,
            "body:1": 0,
            "body:4": 0.18000000000000002,
            "body:0": 0,
            "body:6": 0,
            "body:12": 0,
            "body:9": 0.01
          },
          "confidence": 0.3
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.92,
            "body:5": 0,
            "body:7": 0,
            "body:3": 0,
            "body:8": 0,
            "subject:0": 0.01,
            "body:10": 0.01,
            "body:2": 0,
            "body:11": 0.02,
            "body:1": 0,
            "body:4": 0,
            "body:0": 0,
            "body:6": 0,
            "body:12": 0.02,
            "body:9": 0.02
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3190,
        "output_tokens": 631
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 548.8711250000051,
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
        "status": "none_selected",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "subject:0"
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
    "seq": 937,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-192",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:53.315Z",
    "offsetMs": 1.2639170000038575
  },
  {
    "seq": 938,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-192",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:53.624Z",
    "offsetMs": 309.8947499999995,
    "elapsedMs": 307.9356670000052,
    "outcome": "success"
  },
  {
    "seq": 939,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-192",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:53.627Z",
    "offsetMs": 313.1584589999984
  },
  {
    "seq": 940,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-192",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:53.862Z",
    "offsetMs": 548.5810420000053,
    "elapsedMs": 234.7222499999989,
    "outcome": "success"
  },
  {
    "seq": 941,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-192",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:53.863Z",
    "offsetMs": 548.9331670000029,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "00ce7acc96161554160257c6468355b69717ede746a1280e058a679c3712c3f0";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":938},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":940},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":941}} as const;
export const projectionSha256 = "d9975abce67c0647a3568f423044020a8ec0a437f816d60aa4598ba29347275f";
