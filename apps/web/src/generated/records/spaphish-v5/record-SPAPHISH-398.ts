import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-398",
  "inputSha256": "392d314d35c6b633dad7e27bdbe3a04a210dc0a552faa25b8680a0ccb810208a",
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
      "end": 63,
      "text": "Recordatorio: Learnathon Virtual de Ciencia de Datos en español"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 9,
      "text": "Saludos,\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 9,
      "end": 10,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 10,
      "end": 120,
      "text": "No olvides que el Learnathon Virtual de Ciencia de Datos en español comienza hoy a las 10 AM (UTC -5 Bogotá). "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 120,
      "end": 218,
      "text": "Aquí https://cloud.innovacion.org/s/SYNTHETIC_LEARN_FILE/Learnathon_2020_Solutions%20Spanish.knar?"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 218,
      "end": 264,
      "text": "dl=0 puedes descargar el material en español.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 264,
      "end": 265,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 265,
      "end": 383,
      "text": "No olvides ingresar al Learnathon con tu nombre y apellido para poder asignarte al grupo que elegiste al registrarte.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 383,
      "end": 384,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 384,
      "end": 494,
      "text": "Recibirás otro correo electrónico de Zoom con el link para ingresar al Learnathon una hora antes de comenzar.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 494,
      "end": 495,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 495,
      "end": 524,
      "text": "Nos vemos, El equipo DataFlow"
    }
  ],
  "passA": {
    "requestSha256": "d2c4ea423f37ec0cab307407736d8d106e087f5170c6a3861327c23a06355925",
    "capturedAt": "2026-09-20T23:46:05.712Z",
    "elapsedMs": 178.10908399999607,
    "successfulAttemptElapsedMs": 176.1842080000206,
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
          "noul": 0.05
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
          "noul": 0.68
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.71
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.18
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
            "informational": 0.02,
            "mixed_or_unclear": 0,
            "active_request": 0.98
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.26,
            "independently_established": 0.01,
            "no_sensitive_action": 0.72
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 3584,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "42f437ef6c61464509cb733048243434df4c59f2f7e6e837430c972554a7257a",
    "capturedAt": "2026-09-20T23:46:05.914Z",
    "elapsedMs": 199.45008300000336,
    "successfulAttemptElapsedMs": 197.27012500001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:2": 0.38,
            "body:4": 0,
            "body:8": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0,
            "body:5": 0,
            "body:6": 0.55,
            "NONE": 0.06999999999999999,
            "body:3": 0,
            "body:10": 0,
            "body:9": 0
          },
          "confidence": 0.5
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:2": 0.01,
            "body:4": 0,
            "body:8": 0.01,
            "body:7": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0,
            "body:3": 0.01,
            "body:6": 0.05,
            "NONE": 0.19,
            "body:5": 0,
            "body:10": 0.73,
            "body:9": 0
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 1555,
        "output_tokens": 280
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 380.17445799999405,
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
    "seq": 1952,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-398",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:05.535Z",
    "offsetMs": 1.4202499999955762
  },
  {
    "seq": 1953,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-398",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:05.712Z",
    "offsetMs": 178.10791600000812,
    "elapsedMs": 176.1842080000206,
    "outcome": "success"
  },
  {
    "seq": 1954,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-398",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:05.716Z",
    "offsetMs": 181.9716250000056
  },
  {
    "seq": 1955,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-398",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:05.914Z",
    "offsetMs": 379.9039160000102,
    "elapsedMs": 197.27012500001,
    "outcome": "success"
  },
  {
    "seq": 1956,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-398",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:05.914Z",
    "offsetMs": 380.2296250000072,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "49e18b4203cde874b97674188c7de50838b57948cac6b305018d490bd596a5bb";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1953},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1955},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1956}} as const;
export const projectionSha256 = "dcdc1e59c3dbd484d3e403c5b1f14658dd216f91c6c27dca1e89eff86514a529";
