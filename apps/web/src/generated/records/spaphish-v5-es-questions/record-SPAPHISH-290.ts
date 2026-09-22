import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-290",
  "inputSha256": "25a9b5331a0d9e9e3d6ccfacd8bdc628ec017a4257c24f5f19707987d080a52c",
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
      "end": 53,
      "text": "Convocatoria de Ingreso, Permanencia o Promoción 2022"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 540,
      "text": "A las y los miembros del Sistema Nacional de Becarios (SNB) interesados en participar en la Convocatoria de Ingreso, Permanencia o Promoción 2022, los invitamos a consultar el Reglamento del SNB<https://cnbe.gob.mx/wp-content/uploads/snb/marco_legal/Reglamento_Sistema_Nacional_de_Becarios_15_septiembre_2020.pdf> vigente en la página del CNBE así como las bases de la Convocatoria<https://cnbe.gob.mx/wp-content/uploads/convocatorias/snb/convocatorias/2022/Convocatoria_SNB_2022.pdf> que fue aprobada el día de hoy por el Consejo General.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 540,
      "end": 541,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 541,
      "end": 779,
      "text": "El día de mañana, 10 de diciembre a las diez horas, están cordialmente invitados a seguir la transmisión de la sesión informativa sobre el Reglamento del SNB y de la Convocatoria 2022 a través del siguiente enlace https://bit.ly/4JhGfSg.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 779,
      "end": 780,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 780,
      "end": 855,
      "text": "Sin otro particular aprovecho la ocasión para enviarles un cordial saludo.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 855,
      "end": 856,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 856,
      "end": 861,
      "text": "Dra. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 861,
      "end": 868,
      "text": "Ana R. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 868,
      "end": 882,
      "text": "Ramírez López\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 882,
      "end": 883,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 883,
      "end": 923,
      "text": "Directora de Proyectos Académicos y del\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 923,
      "end": 924,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 924,
      "end": 952,
      "text": "Sistema Nacional de Becarios"
    }
  ],
  "passA": {
    "requestSha256": "14e9a1480f22d70026650a14a631274f26cf0e0bf2ed5094025ce69e5078679c",
    "capturedAt": "2026-09-22T03:53:58.439Z",
    "elapsedMs": 625.0602510000463,
    "successfulAttemptElapsedMs": 623.5858029999654,
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
          "noul": 0.14
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.37,
            "active_request": 0.63,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.5
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0.04,
            "independently_established": 0,
            "no_sensitive_action": 0.96
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 5171,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "23f6dd38dec68283bebb15530fe64a6fe33275f0a2be37a8f4133ceff09149c1",
    "capturedAt": "2026-09-22T03:53:58.966Z",
    "elapsedMs": 525.9304160000174,
    "successfulAttemptElapsedMs": 524.3907360000303,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:10": 0.73,
            "subject:0": 0,
            "body:3": 0,
            "body:8": 0.01,
            "body:2": 0.01,
            "body:4": 0,
            "body:1": 0,
            "body:9": 0,
            "body:11": 0,
            "body:12": 0.05,
            "NONE": 0.03,
            "body:6": 0.13,
            "body:5": 0,
            "body:7": 0,
            "body:0": 0.04
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 1408,
        "output_tokens": 162
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1152.6458609999972,
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
    "seq": 1415,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-290",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:57.815Z",
    "offsetMs": 1.1732279999996535
  },
  {
    "seq": 1416,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-290",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:58.438Z",
    "offsetMs": 625.0598660000251,
    "elapsedMs": 623.5858029999654,
    "outcome": "success"
  },
  {
    "seq": 1417,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-290",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:58.441Z",
    "offsetMs": 627.5528059999924
  },
  {
    "seq": 1418,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-290",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:58.966Z",
    "offsetMs": 1152.429730999982,
    "elapsedMs": 524.3907360000303,
    "outcome": "success"
  },
  {
    "seq": 1419,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-290",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:58.966Z",
    "offsetMs": 1152.692697999999,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "12280a432fd50e3b3fb108c14d51ba1f90d973c31551de15205adceebc0963fb";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1416},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1418},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1419}} as const;
export const projectionSha256 = "e0d267915455457bc23db14b20dfb28e22875019cb7899afb91918818a1ff914";
