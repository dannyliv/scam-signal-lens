import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-343",
  "inputSha256": "438dc81c738f54ebce9039a03f6242098916627321d795c846d844bbc6d8ef46",
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
    "requestSha256": "12790d3e7023998e7f11863087d46eaf800929b8cf195d06fec3c44e908abe02",
    "capturedAt": "2026-09-22T03:55:03.137Z",
    "elapsedMs": 658.7226549999905,
    "successfulAttemptElapsedMs": 657.5275810000021,
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
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
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
          "noul": 0.1
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.59,
            "informational": 0.41,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.45
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0,
            "no_sensitive_action": 1,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5071,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "85060809666e7cf00773449e9ceb3acbc36f9e42a26853aabf48e0a15587464c",
    "capturedAt": "2026-09-22T03:55:03.688Z",
    "elapsedMs": 549.0840530000278,
    "successfulAttemptElapsedMs": 547.2463550000102,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "NONE": 0.02,
            "body:2": 0,
            "body:4": 0,
            "body:0": 0,
            "body:10": 0.02,
            "body:11": 0,
            "body:14": 0.29000000000000004,
            "body:8": 0,
            "body:13": 0.61,
            "body:7": 0,
            "body:6": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:5": 0.060000000000000005,
            "body:12": 0,
            "body:3": 0
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 1237,
        "output_tokens": 182
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1209.6804829999455,
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
    "seq": 1677,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-343",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:02.479Z",
    "offsetMs": 0.843983999977354
  },
  {
    "seq": 1678,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-343",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:03.137Z",
    "offsetMs": 658.7223299999605,
    "elapsedMs": 657.5275810000021,
    "outcome": "success"
  },
  {
    "seq": 1679,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-343",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:03.140Z",
    "offsetMs": 661.5136799999746
  },
  {
    "seq": 1680,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-343",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:03.688Z",
    "offsetMs": 1209.4912329999497,
    "elapsedMs": 547.2463550000102,
    "outcome": "success"
  },
  {
    "seq": 1681,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-343",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:03.688Z",
    "offsetMs": 1209.729646999971,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "cbfd46420128fa7e73f1cb658196129c7564ac74e1dbced35eebf3a6fab2beda";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1678},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1680},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1681}} as const;
export const projectionSha256 = "dc17ba0d3f93fe12e75cac382f34a625bfade77f474ed625f260df47c18d570b";
