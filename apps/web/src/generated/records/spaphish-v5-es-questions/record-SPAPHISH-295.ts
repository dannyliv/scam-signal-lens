import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-295",
  "inputSha256": "5ac3c23560fee5d825e70efc8373937ceb23b38bedb8bea1c3d60adb9244c7f2",
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
      "end": 35,
      "text": "SE LES RECUERDA PLÁTICA INFORMATIVA"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 17,
      "text": "SE  LES RECUERDA\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 17,
      "end": 18,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 18,
      "end": 49,
      "text": "Estimada Comunidad del CIETEC,\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 49,
      "end": 50,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 50,
      "end": 513,
      "text": "Por este medio me permito hacerles una cordial invitación a la plática  informativa sobre el estado que guardan algunos asuntos de importancia  para la comunidad, como son: el desistimiento del emplazamiento a  huelga, conformación de la Asociación Civil, seguro de gastos médicos  mayores, seguro de vehículos a precios de flotilla, principalmente,  dicha plática se llevará a cabo el día de hoy miércoles 28 de agosto a  las 13:00 hrs. en el Auditorio Central.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 513,
      "end": 514,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 514,
      "end": 579,
      "text": "Se espera que la reunión tenga una duración de cuarenta minutos.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 579,
      "end": 580,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 580,
      "end": 642,
      "text": "Esperando contar con su asistencia reciban un cordial saludo.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 642,
      "end": 643,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 643,
      "end": 655,
      "text": "Atentamente\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 655,
      "end": 656,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 656,
      "end": 660,
      "text": "Dr. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 660,
      "end": 673,
      "text": "Francisco J. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 673,
      "end": 677,
      "text": "Ruiz"
    }
  ],
  "passA": {
    "requestSha256": "3248eb61fe3bc67571d2f0a70c3aee095acafaa4adf8cfab181df441f95759ea",
    "capturedAt": "2026-09-22T03:54:03.904Z",
    "elapsedMs": 666.3663830000442,
    "successfulAttemptElapsedMs": 664.9555880000116,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.39
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.12
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.18,
            "active_request": 0.82,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.76
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5068,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "0f377099eddb771aa680892b91d4b569977dfc6ecd4038de4959920c4dae1244",
    "capturedAt": "2026-09-22T03:54:04.521Z",
    "elapsedMs": 615.554376999964,
    "successfulAttemptElapsedMs": 614.4816959999735,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:11": 0,
            "body:9": 0,
            "body:5": 0,
            "body:8": 0.04,
            "body:6": 0,
            "body:12": 0,
            "body:13": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:7": 0,
            "NONE": 0.6,
            "body:1": 0,
            "body:0": 0.01,
            "body:4": 0.35,
            "body:10": 0,
            "body:2": 0,
            "body:14": 0
          },
          "confidence": 0.56
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:12",
          "probabilities": {
            "body:11": 0.01,
            "body:10": 0.02,
            "body:5": 0.01,
            "body:8": 0.01,
            "body:6": 0,
            "body:12": 0.51,
            "subject:0": 0,
            "body:13": 0.01,
            "body:3": 0,
            "body:7": 0,
            "NONE": 0.01,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0.1,
            "body:9": 0.01,
            "body:14": 0.08,
            "body:4": 0.23
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 1977,
        "output_tokens": 358
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1283.500967000029,
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
        "status": "low_confidence",
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
    "seq": 1439,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-295",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:03.238Z",
    "offsetMs": 1.0911809999961406
  },
  {
    "seq": 1440,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-295",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:03.904Z",
    "offsetMs": 666.3691100000287,
    "elapsedMs": 664.9555880000116,
    "outcome": "success"
  },
  {
    "seq": 1441,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-295",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:03.906Z",
    "offsetMs": 668.4274009999936
  },
  {
    "seq": 1442,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-295",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:04.521Z",
    "offsetMs": 1283.2364730000263,
    "elapsedMs": 614.4816959999735,
    "outcome": "success"
  },
  {
    "seq": 1443,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-295",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:04.521Z",
    "offsetMs": 1283.5505020000273,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a74503f173392f91111c2c48f89e17c1f1ae8d3a3fe7f42fded0e97739487c08";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1440},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1442},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1443}} as const;
export const projectionSha256 = "f994e441b0ef9e8d37ad67f5eb134bc175684303dacd4af9b7e767fb90549296";
