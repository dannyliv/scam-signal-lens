import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-343",
  "inputSha256": "438dc81c738f54ebce9039a03f6242098916627321d795c846d844bbc6d8ef46",
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
      "end": 41,
      "text": "Invitación a la Ceremonia de Auscultación"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 19,
      "text": "Villa Astra, Terr. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 19,
      "end": 49,
      "text": "Central — 05 de marzo de 2025\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 49,
      "end": 50,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 50,
      "end": 88,
      "text": "“CEREMONIA DE CONSULTA INSTITUCIONAL”\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 88,
      "end": 89,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 89,
      "end": 422,
      "text": "Por medio de la presente se invita a la comunidad del Instituto Altair de Investigación Científica a la Ceremonia de Designación de la Persona Titular de la Dirección General para el periodo 2025–2029, que se llevará a cabo en el Auditorio del Centro de Documentación el próximo lunes 09 de marzo del presente año a las 11:00 horas.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 422,
      "end": 423,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 423,
      "end": 507,
      "text": "Agradecemos de antemano su asistencia y aprovechamos para enviar un saludo cordial.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 507,
      "end": 508,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 508,
      "end": 521,
      "text": "Atentamente,\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 521,
      "end": 525,
      "text": "Dr. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 525,
      "end": 534,
      "text": "Elías V. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 534,
      "end": 545,
      "text": "Montemayor\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 545,
      "end": 579,
      "text": "Director de Desarrollo Científico\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 579,
      "end": 623,
      "text": "Enlace designado para el proceso de consulta"
    }
  ],
  "passA": {
    "requestSha256": "df9d932804eddbed6ed9c3f4c60d3ace4597fd31a353b5062cb95366c01715ec",
    "capturedAt": "2026-09-20T23:45:47.733Z",
    "elapsedMs": 237.60329100000672,
    "successfulAttemptElapsedMs": 235.0525420000049,
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
          "noul": 0.02
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
          "noul": 0.11
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.33,
            "mixed_or_unclear": 0,
            "active_request": 0.67,
            "educational_or_quoted": 0
          },
          "confidence": 0.55
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3621,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "93fc5de38d0d07a2251cf3e841fd28f60dd94561ab500ffdef4fc9e3727308f6",
    "capturedAt": "2026-09-20T23:45:47.939Z",
    "elapsedMs": 201.6682909999945,
    "successfulAttemptElapsedMs": 195.08520899999712,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:9": 0,
            "NONE": 0.01,
            "body:8": 0,
            "body:14": 0.12,
            "body:4": 0,
            "body:0": 0,
            "body:12": 0,
            "body:11": 0,
            "body:1": 0,
            "body:13": 0.64,
            "body:2": 0,
            "body:5": 0.21000000000000002,
            "subject:0": 0,
            "body:10": 0.02,
            "body:7": 0,
            "body:3": 0,
            "body:6": 0
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 1137,
        "output_tokens": 182
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 443.9805000000051,
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
    "seq": 1679,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-343",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:47.497Z",
    "offsetMs": 1.8676669999986188
  },
  {
    "seq": 1680,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-343",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:47.732Z",
    "offsetMs": 237.61187500000233,
    "elapsedMs": 235.0525420000049,
    "outcome": "success"
  },
  {
    "seq": 1681,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-343",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:47.739Z",
    "offsetMs": 244.53174999999464
  },
  {
    "seq": 1682,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-343",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:47.938Z",
    "offsetMs": 443.62270900000294,
    "elapsedMs": 195.08520899999712,
    "outcome": "success"
  },
  {
    "seq": 1683,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-343",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:47.939Z",
    "offsetMs": 444.0495840000076,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f0473e3d2ffda945f6e020291f7b8f3aaffdf28556b8c9ba0928c66fa031c132";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1680},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1682},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1683}} as const;
export const projectionSha256 = "a3fac2c6e4a402d9486acd71708d0140255bac4e6af9ffa8fb0962f7a5e50949";
