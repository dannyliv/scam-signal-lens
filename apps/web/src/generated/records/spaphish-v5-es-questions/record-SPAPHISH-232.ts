import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-232",
  "inputSha256": "4d23a49eff50da47cc712d0f3ba4227ef3f3499d2660c67b2157aca08c3a509c",
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
    "requestSha256": "fac263216e77f76055ea713a45ee273ed5457da03561d65c34c797a6e16c7ab5",
    "capturedAt": "2026-09-22T03:52:47.068Z",
    "elapsedMs": 621.1530630000052,
    "successfulAttemptElapsedMs": 619.4847130000126,
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
          "noul": 0.27
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.15
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.87
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.26
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.07
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.55,
            "no_sensitive_action": 0.43,
            "mixed_or_unknown": 0.02,
            "independently_established": 0
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 5106,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "3fbbc9b447f78137da19ee7ca18534ebbf50af21e2d0d604bea9c0675add3c0d",
    "capturedAt": "2026-09-22T03:52:47.586Z",
    "elapsedMs": 516.7693340000114,
    "successfulAttemptElapsedMs": 515.328113000025,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0,
            "body:8": 0,
            "body:3": 0,
            "body:4": 0,
            "body:2": 0,
            "body:12": 0.01,
            "NONE": 0.86,
            "body:9": 0.08,
            "body:7": 0,
            "body:5": 0,
            "body:10": 0.04,
            "body:11": 0,
            "body:6": 0,
            "body:0": 0.01
          },
          "confidence": 0.84
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.93,
            "body:1": 0,
            "body:8": 0,
            "body:3": 0.05,
            "body:2": 0,
            "body:4": 0,
            "body:12": 0,
            "NONE": 0.01,
            "body:9": 0.01,
            "body:7": 0,
            "body:5": 0,
            "body:10": 0,
            "body:11": 0,
            "body:6": 0,
            "body:0": 0
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "subject:0": 0.05,
            "body:1": 0,
            "body:8": 0,
            "body:3": 0.3,
            "body:4": 0.11,
            "body:2": 0.01,
            "body:12": 0.01,
            "NONE": 0.1,
            "body:9": 0.03,
            "body:7": 0,
            "body:5": 0.37,
            "body:10": 0,
            "body:11": 0.02,
            "body:6": 0,
            "body:0": 0
          },
          "confidence": 0.31
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:1": 0,
            "body:8": 0.01,
            "body:3": 0,
            "body:4": 0.01,
            "body:2": 0,
            "body:12": 0.03,
            "NONE": 0.81,
            "body:9": 0.02,
            "body:7": 0,
            "body:5": 0,
            "body:10": 0.01,
            "body:11": 0.1,
            "body:6": 0,
            "body:0": 0
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 3618,
        "output_tokens": 632
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1139.8055379999569,
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
        "status": "none_selected",
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
    "seq": 1129,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-232",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:46.448Z",
    "offsetMs": 1.1546150000067428
  },
  {
    "seq": 1130,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-232",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:47.068Z",
    "offsetMs": 621.1531609999947,
    "elapsedMs": 619.4847130000126,
    "outcome": "success"
  },
  {
    "seq": 1131,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-232",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:47.070Z",
    "offsetMs": 623.4160869999905
  },
  {
    "seq": 1132,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-232",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:47.586Z",
    "offsetMs": 1139.3265419999952,
    "elapsedMs": 515.328113000025,
    "outcome": "success"
  },
  {
    "seq": 1133,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-232",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:47.586Z",
    "offsetMs": 1139.881287999975,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "862b386ba28e8059cc086a0312b13fc5b65314dc65a66345ecd36f5b3b28b96b";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1130},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1132},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1133}} as const;
export const projectionSha256 = "11a2f409fc0005f1b035eb57974595b494a8125adf1ded9190e97c86862c84c5";
