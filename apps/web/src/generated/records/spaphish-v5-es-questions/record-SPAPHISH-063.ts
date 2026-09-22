import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-063",
  "inputSha256": "e3e4007a42ebdac70d966314011709e21679cc559f687dc2ba89fffb9498f388",
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
      "end": 30,
      "text": "Actualización de Google Chrome"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 20,
      "text": "Logotipo de Chrome. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 20,
      "end": 200,
      "text": "Actualice su cuenta Estimado/a Ricardo López: En respuesta a una vulnerabilidad de seguridad reportada recientemente, se actualizó el navegador de Google Chrome de Marcelo Duarte. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 200,
      "end": 259,
      "text": "Se recomienda que aplique inmediatamente la actualización. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 259,
      "end": 378,
      "text": "Si no lo hace dentro de 48 horas, la versión de Google Chrome que está usando actualmente no funcionará correctamente. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 378,
      "end": 453,
      "text": "Nos disculpamos por cualquier inconveniente. - El equipo de Google Chrome ="
    }
  ],
  "passA": {
    "requestSha256": "d3dd8eddd38561f267f8fb4765192b45e02ae452ade3e6e694ef197c970c2eea",
    "capturedAt": "2026-09-22T03:49:27.652Z",
    "elapsedMs": 627.4463839999953,
    "successfulAttemptElapsedMs": 626.6622820000048,
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
          "noul": 0.04
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
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.13
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
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
            "mixed_or_unclear": 0,
            "informational": 0.03,
            "active_request": 0.97
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.06,
            "no_sensitive_action": 0.92,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 4983,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "098fbfae07722db6ad65d9bbd2888be66db7a017254c36ae6afc5b4fe107c4c2",
    "capturedAt": "2026-09-22T03:49:28.268Z",
    "elapsedMs": 614.5435040000011,
    "successfulAttemptElapsedMs": 613.4544409999944,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0,
            "body:4": 0,
            "NONE": 0,
            "body:3": 1,
            "body:1": 0,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0.05,
            "body:4": 0.87,
            "NONE": 0.02,
            "body:3": 0,
            "body:1": 0.06,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 1448,
        "output_tokens": 169
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1243.732183,
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
        "status": "selected",
        "segmentId": "body:3"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:4"
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
    "seq": 306,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-063",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:27.025Z",
    "offsetMs": 0.5065360000007786
  },
  {
    "seq": 307,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-063",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:27.652Z",
    "offsetMs": 627.4468489999999,
    "elapsedMs": 626.6622820000048,
    "outcome": "success"
  },
  {
    "seq": 308,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-063",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:27.654Z",
    "offsetMs": 629.4186599999957
  },
  {
    "seq": 309,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-063",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:28.268Z",
    "offsetMs": 1243.4934159999975,
    "elapsedMs": 613.4544409999944,
    "outcome": "success"
  },
  {
    "seq": 310,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-063",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:28.268Z",
    "offsetMs": 1243.777700999999,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "418b8ac570405971904ea9dad66d20c7d77a6d4444f77ba5107ede926671de98";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":307},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":309},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":310}} as const;
export const projectionSha256 = "e4a2762f8041ed1ad52b1b9c024b4bbe1647db7a042059645fed5f2a46cd025a";
