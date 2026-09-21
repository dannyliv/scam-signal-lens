import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-231",
  "inputSha256": "3d8369a3e80123e4b65a59ebf45a611a1f2c401bdd1d885b98b9d351a7267687",
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
    "requestSha256": "c0e804e32be29a3a04e3a747f57c72efdd20758ae3081ced2758838ae05a7baa",
    "capturedAt": "2026-09-20T23:45:07.619Z",
    "elapsedMs": 185.45804099999077,
    "successfulAttemptElapsedMs": 183.71233300000313,
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
          "noul": 0.14
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
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.11
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
            "mixed_or_unclear": 0,
            "active_request": 0.92,
            "informational": 0.08
          },
          "confidence": 0.89
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.91,
            "sender_supplied": 0.03,
            "independently_established": 0.05
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 3645,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "57edfb2fdd58324a26ac1c4692d2747ef37c2275032e24eff7999d816bb6ac13",
    "capturedAt": "2026-09-21T00:57:23.990Z",
    "elapsedMs": 177.48220800000126,
    "successfulAttemptElapsedMs": 174.47154099999898,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:8": 0,
            "body:11": 0,
            "body:4": 0,
            "body:0": 0,
            "body:6": 0.14,
            "body:2": 0.03,
            "body:7": 0,
            "body:12": 0,
            "subject:0": 0,
            "NONE": 0,
            "body:3": 0.05,
            "body:1": 0,
            "body:5": 0.78,
            "body:10": 0,
            "body:9": 0
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 1156,
        "output_tokens": 161
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 477.56216599999425,
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
        "status": "selected",
        "segmentId": "body:5"
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
    "seq": 1128,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-231",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:07.434Z",
    "offsetMs": 1.1512079999956768
  },
  {
    "seq": 1129,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-231",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:07.619Z",
    "offsetMs": 185.4596659999952,
    "elapsedMs": 183.71233300000313,
    "outcome": "success"
  },
  {
    "seq": 1130,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-231",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:07.622Z",
    "offsetMs": 188.44604099998833
  },
  {
    "seq": 1131,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-231",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:07.732Z",
    "offsetMs": 298.42166599999473,
    "elapsedMs": 109.34899999998743,
    "outcome": "success"
  },
  {
    "seq": 1132,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-231",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:07.732Z",
    "offsetMs": 298.5674999999901,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2635,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-231",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:23.815Z",
    "offsetMs": 3.405666000000565
  },
  {
    "seq": 2636,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-231",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:23.990Z",
    "offsetMs": 178.57354100000157,
    "elapsedMs": 174.47154099999898,
    "outcome": "success"
  },
  {
    "seq": 2637,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-231",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:23.990Z",
    "offsetMs": 178.96387500000128,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "74f7ceb949790cb16b12c466b5eef05b41b4d852fd21ea35a90c1524d9130333";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1129},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2636},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2637}} as const;
export const projectionSha256 = "cfa2b4c8af5d22f4fbe8274e4591fedd399902e6f392b477111594289a73f916";
