import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-313",
  "inputSha256": "4cfe1d89836e141fcb26a7a77dbbecb928d0632be4a8270dcc152592d3aa85ff",
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
    "requestSha256": "ba4d52df0878db0eba1d406bdc04b3ff68627439d1699fc4c1cb963cf788f6c0",
    "capturedAt": "2026-09-22T03:54:26.147Z",
    "elapsedMs": 652.589095000003,
    "successfulAttemptElapsedMs": 651.3205140000209,
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
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.86
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.11
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.02,
            "active_request": 0.98,
            "educational_or_quoted": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.54,
            "no_sensitive_action": 0.46
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 5055,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "cebe273bd2f95a65e254cecb02d1f0b81a5ecebe7c36ed470668a2659675fb4a",
    "capturedAt": "2026-09-22T03:54:26.762Z",
    "elapsedMs": 614.6147340000025,
    "successfulAttemptElapsedMs": 613.4110749999527,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.73,
            "NONE": 0,
            "subject:0": 0.08,
            "body:1": 0.19,
            "body:3": 0,
            "body:5": 0,
            "body:0": 0,
            "body:4": 0
          },
          "confidence": 0.68
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:2": 0.06,
            "NONE": 0.03,
            "subject:0": 0,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0.85,
            "body:0": 0.05,
            "body:4": 0.01
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 1692,
        "output_tokens": 187
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1268.7856710000196,
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
    "seq": 1528,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-313",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:25.495Z",
    "offsetMs": 0.944668999989517
  },
  {
    "seq": 1529,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-313",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:26.146Z",
    "offsetMs": 652.58940300002,
    "elapsedMs": 651.3205140000209,
    "outcome": "success"
  },
  {
    "seq": 1530,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-313",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:26.149Z",
    "offsetMs": 654.8752939999686
  },
  {
    "seq": 1531,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-313",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:26.762Z",
    "offsetMs": 1268.534371000016,
    "elapsedMs": 613.4110749999527,
    "outcome": "success"
  },
  {
    "seq": 1532,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-313",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:26.763Z",
    "offsetMs": 1268.8414609999745,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1c4ef96141d0b4437ab2ed912c2cca600722f24299d7566cf2dbc55bab8454ff";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1529},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1531},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1532}} as const;
export const projectionSha256 = "f20624f35777c9943292df54346e7c4f7d57e3ae579ad4ed19c50fdc41602719";
