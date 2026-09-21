import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-295",
  "inputSha256": "5ac3c23560fee5d825e70efc8373937ceb23b38bedb8bea1c3d60adb9244c7f2",
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
    "requestSha256": "781e90ae8a1b2c43cc643151d78085c1d2f86aebe946c3b3afa6bfb45f0664e9",
    "capturedAt": "2026-09-20T23:45:30.712Z",
    "elapsedMs": 207.88362499998766,
    "successfulAttemptElapsedMs": 206.0500000000029,
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
          "noul": 0.46
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
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
            "mixed_or_unclear": 0,
            "active_request": 0.87,
            "informational": 0.13,
            "educational_or_quoted": 0
          },
          "confidence": 0.83
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3618,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "4b859e5528a4eef37c38a5bb97facff834158744d1a3a9c80f372bd4bf81a725",
    "capturedAt": "2026-09-20T23:45:30.861Z",
    "elapsedMs": 147.9929589999956,
    "successfulAttemptElapsedMs": 146.24499999999534,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.01,
            "body:7": 0,
            "body:4": 0.53,
            "NONE": 0.39,
            "body:3": 0,
            "body:13": 0,
            "body:5": 0,
            "body:6": 0,
            "body:10": 0,
            "body:11": 0,
            "body:2": 0,
            "body:1": 0,
            "body:8": 0.06,
            "body:9": 0,
            "body:12": 0,
            "body:14": 0
          },
          "confidence": 0.48
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:7": 0,
            "body:4": 0.07,
            "NONE": 0.01,
            "body:3": 0,
            "body:13": 0.01,
            "body:5": 0,
            "body:6": 0,
            "body:10": 0.01,
            "body:11": 0,
            "body:2": 0.51,
            "body:1": 0,
            "body:8": 0,
            "body:9": 0.01,
            "body:12": 0.35000000000000003,
            "body:14": 0.03
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 1775,
        "output_tokens": 359
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 357.85633300000336,
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
    "seq": 1443,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-295",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:30.505Z",
    "offsetMs": 1.3120829999970738
  },
  {
    "seq": 1444,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-295",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:30.711Z",
    "offsetMs": 207.8852920000063,
    "elapsedMs": 206.0500000000029,
    "outcome": "success"
  },
  {
    "seq": 1445,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-295",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:30.714Z",
    "offsetMs": 210.85279200000514
  },
  {
    "seq": 1446,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-295",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:30.861Z",
    "offsetMs": 357.69279200000165,
    "elapsedMs": 146.24499999999534,
    "outcome": "success"
  },
  {
    "seq": 1447,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-295",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:30.861Z",
    "offsetMs": 357.90070800000103,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0db3edfa475e36e001ccdba38f1374c247bba8eff6647f0930625b6c8242caa4";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1444},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1446},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1447}} as const;
export const projectionSha256 = "7b31c25d67c4ae3a44e7e831d4507b7b727f9a8798d0a385aa7da714307b786a";
