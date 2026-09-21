import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-178",
  "inputSha256": "477f829fcfac5f73957c24cd484b72383d27a2d77387537b1436f37cc4de4288",
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
      "end": 79,
      "text": "Inscripto a \"Taller gratuito: Xilinx Vitis para aceleración y machine learning\""
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 56,
      "text": "From: Marcos Ortega – Centro Nova mOrtega@centronova.mx\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 56,
      "end": 57,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 57,
      "end": 171,
      "text": "Se ha preinscrito a \"Taller gratuito: Xilinx Vitis para aceleración y machine learning\" con los siguientes datos:\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 171,
      "end": 172,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 172,
      "end": 187,
      "text": "Nombre: Marcos\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 187,
      "end": 204,
      "text": "Apellido: Ortega\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 204,
      "end": 233,
      "text": "Email: mOrtega@centronova.mx\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 233,
      "end": 234,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 234,
      "end": 244,
      "text": "Teléfono:\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 244,
      "end": 265,
      "text": "Empresa: Centro Nova\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 265,
      "end": 281,
      "text": "Cursos Previos:\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 281,
      "end": 351,
      "text": "Tipo de inscripción: Xilinx Vitis para aceleración y machine learning\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 351,
      "end": 363,
      "text": "Comentario:\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 363,
      "end": 364,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 364,
      "end": 445,
      "text": "Una vez alcanzado el número mínimo de plazas, nos pondremos en contacto contigo.\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 445,
      "end": 476,
      "text": "Muchas gracias por tu interés.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 476,
      "end": 477,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 477,
      "end": 496,
      "text": "Un cordial saludo,\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 496,
      "end": 510,
      "text": "TecnoFormación"
    }
  ],
  "passA": {
    "requestSha256": "fa4c3a5c351d79281552d94f4b0607b867f1e6ca76b3e1d01b8066555c5f7c71",
    "capturedAt": "2026-09-20T23:44:48.412Z",
    "elapsedMs": 136.5169160000005,
    "successfulAttemptElapsedMs": 134.79504199999792,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.64
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
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
            "no_sensitive_action": 0.98,
            "sender_supplied": 0.02,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3587,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "9e82fa0600e8d1ac740d6fb2d4f4e392100909ee03f36b216f9622ef53aa59da",
    "capturedAt": "2026-09-20T23:44:48.604Z",
    "elapsedMs": 189.73695800000132,
    "successfulAttemptElapsedMs": 187.99929100000008,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.03,
            "body:13": 0,
            "body:16": 0,
            "body:3": 0,
            "body:14": 0.03,
            "body:12": 0,
            "NONE": 0.3,
            "body:17": 0.01,
            "body:11": 0.01,
            "body:9": 0.07,
            "body:6": 0,
            "body:18": 0.16,
            "body:0": 0.38,
            "body:15": 0,
            "subject:0": 0.01,
            "body:1": 0,
            "body:5": 0,
            "body:7": 0,
            "body:10": 0,
            "body:8": 0,
            "body:4": 0
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 1122,
        "output_tokens": 221
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 328.6289160000015,
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
    "seq": 871,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-178",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:48.276Z",
    "offsetMs": 1.1227910000015981
  },
  {
    "seq": 872,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-178",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:48.412Z",
    "offsetMs": 136.5200410000034,
    "elapsedMs": 134.79504199999792,
    "outcome": "success"
  },
  {
    "seq": 873,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-178",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:48.415Z",
    "offsetMs": 139.6398330000011
  },
  {
    "seq": 874,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-178",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:48.604Z",
    "offsetMs": 328.2987910000011,
    "elapsedMs": 187.99929100000008,
    "outcome": "success"
  },
  {
    "seq": 875,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-178",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:48.604Z",
    "offsetMs": 328.72299999999814,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6d6b6d8da37392fcb1dbe0da0640f9a70133fed19d8385e21dde7048371c4174";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":872},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":874},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":875}} as const;
export const projectionSha256 = "a927b2cac3e94f290b33192387a7b78eef946eb9c48db8be5272203cd855883e";
