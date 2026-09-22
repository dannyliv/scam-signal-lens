import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-123",
  "inputSha256": "475ac9dcaf7caceca517bc7eff24864cf9527d673b2a595b3bba7f1e841461e1",
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
      "end": 58,
      "text": "Ezequiela Miguelina! - Has ganado una Lancôme Beauty Box🎁"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 58,
      "text": "Solo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 98,
      "text": "DRUNI Hoy El Ganador es Ricardo López ! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 98,
      "end": 159,
      "text": "las últimas tendencias en belleza ¡HAS SIDO SELECCIONADO(A)! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 159,
      "end": 234,
      "text": "Para recibir tu regalo: Lancôme Beauty Box Reclama tu regalo ¡Felicidades! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 234,
      "end": 327,
      "text": "Has sido seleccionado(a) para participar en nuestro programa de fidelidad de forma GRATUITA. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 327,
      "end": 385,
      "text": "Solo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 385,
      "end": 499,
      "text": "© 2025 GRUPO DRUNI SAS Si ya no deseas recibir estos correos electrónicos, puedes darte de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "199603d9e613e965a6fc0dda6d8bfa4890337e553e936ced7766474e6650647c",
    "capturedAt": "2026-09-22T03:50:40.071Z",
    "elapsedMs": 649.6884119999886,
    "successfulAttemptElapsedMs": 648.8330970000243,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.28
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.5
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.56
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.18
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.12
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.16
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.52,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.46
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 5015,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "aae8daf7ca077a6d624f63eb6ef92deef92aef334fc727f000a24816c6c0fecc",
    "capturedAt": "2026-09-22T03:50:40.869Z",
    "elapsedMs": 796.7744390000007,
    "successfulAttemptElapsedMs": 796.0388150000072,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:4": 0.01,
            "subject:0": 0,
            "body:2": 0,
            "body:5": 0,
            "body:1": 0,
            "body:0": 0,
            "NONE": 0.88,
            "body:3": 0.11
          },
          "confidence": 0.86
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:6": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:5": 0.13,
            "body:1": 0.09,
            "body:0": 0.42,
            "NONE": 0.27,
            "body:3": 0.09
          },
          "confidence": 0.34
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.08,
            "body:4": 0.17,
            "subject:0": 0.01,
            "body:2": 0.01,
            "body:5": 0,
            "body:1": 0.09,
            "body:0": 0.01,
            "NONE": 0.61,
            "body:3": 0.02
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 2215,
        "output_tokens": 301
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1448.1568109999935,
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
        "status": "none_selected",
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 597,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-123",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:39.422Z",
    "offsetMs": 0.5813069999858271
  },
  {
    "seq": 598,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-123",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:40.071Z",
    "offsetMs": 649.6893010000058,
    "elapsedMs": 648.8330970000243,
    "outcome": "success"
  },
  {
    "seq": 599,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-123",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:40.073Z",
    "offsetMs": 651.6090269999986
  },
  {
    "seq": 600,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-123",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:40.869Z",
    "offsetMs": 1447.8722479999997,
    "elapsedMs": 796.0388150000072,
    "outcome": "success"
  },
  {
    "seq": 601,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-123",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:40.870Z",
    "offsetMs": 1448.2043159999885,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ca9b96ad816ac00bf21198972aff5732b07b12e22ed88a9923b8393062b5df88";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":598},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":600},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":601}} as const;
export const projectionSha256 = "01f8e81de0aa1634a4aac7d049282cfcea813e936a06579c6e2479b230407474";
