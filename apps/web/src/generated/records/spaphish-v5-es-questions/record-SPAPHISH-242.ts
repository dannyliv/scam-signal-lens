import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-242",
  "inputSha256": "d44f1b6bcb7315378307432d0cdf4b321a67a7bbfd2176d4826d1685aef7b4d6",
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
      "text": "Solicitud de cambio de horario"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 18,
      "text": "Buenas tardes Dr. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 18,
      "end": 26,
      "text": "Ricardo\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 26,
      "end": 27,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 27,
      "end": 224,
      "text": "El presente correo tiene la intención de solicitar el cambio de horario de la clase de Protección en Sistemas Conectados a los días viernes de 9 a 12 horas, como le mencionamos en la clase pasada.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 224,
      "end": 225,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 225,
      "end": 310,
      "text": "Esperamos que sea posible realizar el cambio de horario, de antemano muchas gracias.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 310,
      "end": 311,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 311,
      "end": 385,
      "text": "Atentamente: -⁠ Daniel Flores Castillo -⁠ Javier Soto Robles -⁠ Carlos M. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 385,
      "end": 422,
      "text": "Pérez Ruiz -⁠ Elena Sofía Durán Ríos\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 422,
      "end": 423,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 423,
      "end": 433,
      "text": "Andrea M. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 433,
      "end": 444,
      "text": "Vidal Salas"
    }
  ],
  "passA": {
    "requestSha256": "774b4330e90299cfdec0a77b91a7b4b5a23acd5df3515bb3afb3b618c61c7886",
    "capturedAt": "2026-09-22T03:52:58.999Z",
    "elapsedMs": 767.0295530000003,
    "successfulAttemptElapsedMs": 765.7516330000362,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.01
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.32
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
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
        "input_tokens": 4996,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "8f798203da620a8059b54395236ea5621f97a41aedf1d00f1c2b6a88adf57ec7",
    "capturedAt": "2026-09-22T03:52:59.600Z",
    "elapsedMs": 598.4643980000401,
    "successfulAttemptElapsedMs": 594.3758640000015,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:10": 0.01,
            "NONE": 0.68,
            "body:11": 0.01,
            "subject:0": 0.01,
            "body:9": 0,
            "body:1": 0.01,
            "body:3": 0.13,
            "body:5": 0,
            "body:7": 0.03,
            "body:0": 0.11,
            "body:8": 0,
            "body:4": 0,
            "body:6": 0
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 1050,
        "output_tokens": 149
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1368.1155259999796,
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
    "seq": 1179,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-242",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:58.233Z",
    "offsetMs": 0.9228499999735504
  },
  {
    "seq": 1180,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-242",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:58.999Z",
    "offsetMs": 767.028118999966,
    "elapsedMs": 765.7516330000362,
    "outcome": "success"
  },
  {
    "seq": 1181,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-242",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:59.002Z",
    "offsetMs": 770.5536759999814
  },
  {
    "seq": 1182,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-242",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:59.600Z",
    "offsetMs": 1367.8912019999698,
    "elapsedMs": 594.3758640000015,
    "outcome": "success"
  },
  {
    "seq": 1183,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-242",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:59.600Z",
    "offsetMs": 1368.2200819999562,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9e02cdabfe08a9410261f5fb1b2aed5fede5a62f8f916bf9b18a472343bb3780";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1180},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1182},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1183}} as const;
export const projectionSha256 = "1d9fdd0359c32f276d203cfa5dea0fd850fb884f1b7050254f33c4bf24aee11d";
