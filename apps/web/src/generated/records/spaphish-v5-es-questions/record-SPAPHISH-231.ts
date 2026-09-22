import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-231",
  "inputSha256": "3d8369a3e80123e4b65a59ebf45a611a1f2c401bdd1d885b98b9d351a7267687",
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
      "end": 45,
      "text": "Reunión virtual inicio de semestre otoño 2025"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 34,
      "text": "Estimad@s Profesore(a)s buen día,\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 34,
      "end": 35,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 35,
      "end": 310,
      "text": "Esperando que Ustedes y sus familias se encuentren bien, por medio del presente, y a reserva de los grupos cancelados, se les invita a la reunión virtual de inicio de semestre otoño 2025, el martes 11 de agosto de 2025 programada de las 17 a las 19 horas, a través de Teams. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 310,
      "end": 411,
      "text": "Laura Ríos los agregará a la plataforma para que podamos contar con su valiosa y puntual asistencia.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 411,
      "end": 412,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 412,
      "end": 474,
      "text": "En dicha reunión contaremos con la presencia del Rector Mtro. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 474,
      "end": 574,
      "text": "Alfredo Ríos Guzmán y se les dará a conocer información importante a considerar durante el periodo.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 574,
      "end": 575,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 575,
      "end": 659,
      "text": "En breve, les enviaremos los documentos que semestre a semestre les hacemos llegar.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 659,
      "end": 660,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 660,
      "end": 679,
      "text": "Saludos cordiales,\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 679,
      "end": 680,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 680,
      "end": 716,
      "text": "[cid:image001.jpg@01D669D4.77944FC0]"
    }
  ],
  "passA": {
    "requestSha256": "294a2ef8299b9ff13a93f776d121c0cd0cf19d1c977153bfcf57856296a5c1b9",
    "capturedAt": "2026-09-22T03:52:45.928Z",
    "elapsedMs": 566.3484099999769,
    "successfulAttemptElapsedMs": 565.1460270000389,
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
          "noul": 0.13
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0.21,
            "active_request": 0.79,
            "mixed_or_unclear": 0
          },
          "confidence": 0.71
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.94,
            "sender_supplied": 0.04,
            "independently_established": 0.02,
            "mixed_or_unknown": 0
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 5095,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "e1da58c413dfad6f00f05754615b9ed0b5ada8e222e5eb6567b32bdc96bca588",
    "capturedAt": "2026-09-22T03:52:46.445Z",
    "elapsedMs": 515.8637340000132,
    "successfulAttemptElapsedMs": 514.6082499999902,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0,
            "body:11": 0,
            "body:2": 0.05,
            "body:6": 0.1,
            "NONE": 0.02,
            "body:4": 0,
            "body:5": 0.62,
            "body:12": 0,
            "body:7": 0,
            "body:0": 0,
            "body:3": 0.2,
            "body:10": 0,
            "body:9": 0,
            "body:8": 0.01
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 1256,
        "output_tokens": 161
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1084.0935119999922,
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
    "seq": 1124,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-231",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:45.362Z",
    "offsetMs": 0.8576830000383779
  },
  {
    "seq": 1125,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-231",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:45.928Z",
    "offsetMs": 566.3482990000048,
    "elapsedMs": 565.1460270000389,
    "outcome": "success"
  },
  {
    "seq": 1126,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-231",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:45.930Z",
    "offsetMs": 568.9171480000368
  },
  {
    "seq": 1127,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-231",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:46.445Z",
    "offsetMs": 1083.891936000029,
    "elapsedMs": 514.6082499999902,
    "outcome": "success"
  },
  {
    "seq": 1128,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-231",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:46.445Z",
    "offsetMs": 1084.1424760000082,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "bf71d679c53c0d8a707dced00b7e6bc2b279096ff41807544ad01b66661d9c2e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1125},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1127},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1128}} as const;
export const projectionSha256 = "1d745a14f361d7f5494f1f47b63e5e3e6e05e90457943dbf89bd3788c1ab47d7";
