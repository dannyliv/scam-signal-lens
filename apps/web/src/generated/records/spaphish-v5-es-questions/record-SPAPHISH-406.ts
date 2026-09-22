import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-406",
  "inputSha256": "9a482b49e3729af5c0da48c3c247b758c833bcbdc38aa28e2d748b1efd65feee",
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
      "text": "Instala la aplicación Google One"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 73,
      "text": "Hemos enviado este correo electrónico a carolina.montoya.rguez@gmail.com\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 73,
      "end": 189,
      "text": " porque nos has indicado que te gustaría recibir información sobre las últimas novedades y funciones de Google One. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 189,
      "end": 264,
      "text": "Si no quieres recibir estos mensajes, puedes cancelar la suscripción aquí.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 264,
      "end": 265,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 265,
      "end": 333,
      "text": "© 2024 Google LLC 1600 Amphitheatre Parkway, Mountain View, CA 94043"
    }
  ],
  "passA": {
    "requestSha256": "4e93e96afc090fcc1b7b99cf689f981c02eaf64105dc23804617eb689524a646",
    "capturedAt": "2026-09-22T03:56:17.123Z",
    "elapsedMs": 608.857549999957,
    "successfulAttemptElapsedMs": 607.1572830000077,
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
          "noul": 0.03
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.69
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.12
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.29,
            "active_request": 0.7,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0
          },
          "confidence": 0.6
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.1,
            "independently_established": 0.01,
            "no_sensitive_action": 0.88
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 4962,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "a98d339eabc64c5e71dd43989ad9c66e63cb443e4e1cf32ea842aca2354ea630",
    "capturedAt": "2026-09-22T03:56:17.697Z",
    "elapsedMs": 571.9476070000092,
    "successfulAttemptElapsedMs": 569.9619709999533,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.05,
            "body:3": 0,
            "body:0": 0.07,
            "body:2": 0.01,
            "NONE": 0.61,
            "body:1": 0.04,
            "body:4": 0.22
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 880,
        "output_tokens": 84
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1182.7850770000368,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
    "seq": 1989,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-406",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:16.515Z",
    "offsetMs": 1.323699000000488
  },
  {
    "seq": 1990,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-406",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:17.123Z",
    "offsetMs": 608.8572639999911,
    "elapsedMs": 607.1572830000077,
    "outcome": "success"
  },
  {
    "seq": 1991,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-406",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:17.126Z",
    "offsetMs": 612.0929330000072
  },
  {
    "seq": 1992,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-406",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:17.696Z",
    "offsetMs": 1182.6077229999937,
    "elapsedMs": 569.9619709999533,
    "outcome": "success"
  },
  {
    "seq": 1993,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-406",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:17.697Z",
    "offsetMs": 1182.8262279999908,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e7e76717887d8930770ff37306fa963bf3a0139975f2bf34eedc06f5b3436a09";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1990},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1992},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1993}} as const;
export const projectionSha256 = "1802add140f3eee1efe55312dec30eadf7fb687b866091923ec834c3731f821d";
