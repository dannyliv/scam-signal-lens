import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-313",
  "inputSha256": "4cfe1d89836e141fcb26a7a77dbbecb928d0632be4a8270dcc152592d3aa85ff",
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
      "end": 39,
      "text": "Tus datos de Cloud se eliminarán pronto"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 205,
      "text": "Estimado/a ‪Sandy‬: Como no has usado los servicios del ID de HUAWEI (cuenta: ‪Guadalupef*************@***il.com‬) en el último año, según nuestra política de servicios, tu cuenta Cloud se cerrará pronto. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 205,
      "end": 313,
      "text": "Conservaremos tus datos de Cloud hasta el ‪20231105‬, pero pasada esa fecha, se eliminarán permanentemente. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 313,
      "end": 403,
      "text": "Si deseas conservar tus datos de Cloud, reactiva tu cuenta de Cloud antes del ‪20231105‬. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 403,
      "end": 577,
      "text": "Consulta las instrucciones aquí: https://cloud.huawei.asia/inactives Nota: Si has accedido a Cloud recientemente, verifica nuevamente si estabas usando una cuenta diferente. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 577,
      "end": 586,
      "text": "Saludos. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 586,
      "end": 618,
      "text": "El equipo de HUAWEI Mobile Cloud"
    }
  ],
  "passA": {
    "requestSha256": "d6030e1a70864f3741d227948e6bd221650d4b8132c336db8f0f924e127d6c9b",
    "capturedAt": "2026-09-20T23:45:36.949Z",
    "elapsedMs": 169.71495900000446,
    "successfulAttemptElapsedMs": 167.7314170000027,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.92
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.22
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.98,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0.02
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.59,
            "no_sensitive_action": 0.4,
            "independently_established": 0
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 3605,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b5bd3a386794daebec310664b2b0b0bb2ba0ae36109a603c128df09e3673c992",
    "capturedAt": "2026-09-20T23:45:37.118Z",
    "elapsedMs": 165.01345800000126,
    "successfulAttemptElapsedMs": 162.91425000000163,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0.02,
            "body:4": 0,
            "body:5": 0,
            "body:0": 0,
            "body:1": 0.08,
            "body:3": 0,
            "body:2": 0.9,
            "NONE": 0
          },
          "confidence": 0.88
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "subject:0": 0,
            "body:4": 0.01,
            "body:5": 0.82,
            "body:0": 0.12,
            "body:1": 0,
            "body:3": 0,
            "body:2": 0.02,
            "NONE": 0.03
          },
          "confidence": 0.8
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0,
            "body:4": 0,
            "body:5": 0,
            "body:0": 0,
            "body:1": 0,
            "body:3": 0.8,
            "body:2": 0.05,
            "NONE": 0.15
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 2006,
        "output_tokens": 282
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 339.0985409999994,
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
        "status": "selected",
        "segmentId": "body:2"
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
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 1530,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-313",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:36.781Z",
    "offsetMs": 1.4194159999897238
  },
  {
    "seq": 1531,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-313",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:36.949Z",
    "offsetMs": 169.71666599999298,
    "elapsedMs": 167.7314170000027,
    "outcome": "success"
  },
  {
    "seq": 1532,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-313",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:36.955Z",
    "offsetMs": 175.15841599999112
  },
  {
    "seq": 1533,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-313",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:37.118Z",
    "offsetMs": 338.78899999998976,
    "elapsedMs": 162.91425000000163,
    "outcome": "success"
  },
  {
    "seq": 1534,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-313",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:37.119Z",
    "offsetMs": 339.166624999998,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2beee649aa966f168f656be4e4683afc91868420b6414628b6abb56029f16783";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1531},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1533},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1534}} as const;
export const projectionSha256 = "14a6fc9a4cb49f4addda8d48f98e78f5e7d277308da937588e93bbf3f61882f4";
