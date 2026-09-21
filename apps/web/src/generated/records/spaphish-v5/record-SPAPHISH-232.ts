import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-232",
  "inputSha256": "4d23a49eff50da47cc712d0f3ba4227ef3f3499d2660c67b2157aca08c3a509c",
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
      "end": 512,
      "text": "EXTENDER GRATIS Para dejar de recibir correos electrónicos futuros, Darse de baja aquí. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 512,
      "end": 554,
      "text": "El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 554,
      "end": 700,
      "text": "Si prefieres no recibir más comunicaciones, por favor date de baja aquí Ou écrivez à: 500 Calle del Desierto Ste 100#500, Desierto Alto, AZ, 85008"
    }
  ],
  "passA": {
    "requestSha256": "e89a42451ad303689727de15965178dd50847fc80dfc873d7c28f4e778b7b2d4",
    "capturedAt": "2026-09-20T23:45:07.873Z",
    "elapsedMs": 139.2095410000038,
    "successfulAttemptElapsedMs": 137.52829099999508,
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
          "noul": 0.15
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
          "noul": 0.87
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.32
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
            "educational_or_quoted": 0,
            "active_request": 1,
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
            "no_sensitive_action": 0.42,
            "sender_supplied": 0.5599999999999999,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 3656,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "e96a9a9fe8f1a982c7ff4cbf45bfbb007988739af9db22282a50df53a7ac61e1",
    "capturedAt": "2026-09-20T23:45:08.019Z",
    "elapsedMs": 143.26120799999626,
    "successfulAttemptElapsedMs": 141.4395829999994,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:0": 0.02,
            "NONE": 0.75,
            "subject:0": 0,
            "body:5": 0,
            "body:7": 0,
            "body:4": 0,
            "body:10": 0.01,
            "body:11": 0,
            "body:12": 0.01,
            "body:6": 0,
            "body:9": 0.21000000000000002,
            "body:8": 0,
            "body:2": 0,
            "body:3": 0
          },
          "confidence": 0.72
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:1": 0,
            "body:0": 0,
            "NONE": 0.01,
            "subject:0": 0.95,
            "body:5": 0,
            "body:7": 0,
            "body:4": 0,
            "body:10": 0,
            "body:12": 0,
            "body:11": 0,
            "body:9": 0.01,
            "body:6": 0,
            "body:8": 0,
            "body:2": 0,
            "body:3": 0.03
          },
          "confidence": 0.93
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0,
            "body:0": 0,
            "NONE": 0.1,
            "subject:0": 0.08,
            "body:5": 0.2,
            "body:7": 0,
            "body:4": 0.14,
            "body:10": 0,
            "body:12": 0,
            "body:11": 0.02,
            "body:6": 0,
            "body:9": 0.02,
            "body:8": 0,
            "body:2": 0,
            "body:3": 0.44
          },
          "confidence": 0.39
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:0": 0,
            "NONE": 0.93,
            "subject:0": 0,
            "body:5": 0,
            "body:7": 0,
            "body:4": 0,
            "body:10": 0.01,
            "body:12": 0.03,
            "body:11": 0.02,
            "body:9": 0.01,
            "body:6": 0,
            "body:8": 0,
            "body:2": 0,
            "body:3": 0
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 3180,
        "output_tokens": 631
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 284.7024160000001,
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
    "seq": 1133,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-232",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:07.735Z",
    "offsetMs": 1.1343749999941792
  },
  {
    "seq": 1134,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-232",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:07.873Z",
    "offsetMs": 139.21154099999694,
    "elapsedMs": 137.52829099999508,
    "outcome": "success"
  },
  {
    "seq": 1135,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-232",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:07.876Z",
    "offsetMs": 142.22391600000265
  },
  {
    "seq": 1136,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-232",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:08.018Z",
    "offsetMs": 284.3419159999903,
    "elapsedMs": 141.4395829999994,
    "outcome": "success"
  },
  {
    "seq": 1137,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-232",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:08.019Z",
    "offsetMs": 284.7604159999901,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2f07977bef62b106dcf3700fedf3fd17fa9c874fb37350ee4b736fbc56dfc92c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1134},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1136},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1137}} as const;
export const projectionSha256 = "7c18d11fb2c27581c0ec0f25b9e127aeb6b698847102e2a2cbabf28f97674fdf";
