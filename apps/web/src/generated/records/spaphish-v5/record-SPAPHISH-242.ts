import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-242",
  "inputSha256": "d44f1b6bcb7315378307432d0cdf4b321a67a7bbfd2176d4826d1685aef7b4d6",
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
    "requestSha256": "55b0caf8d2eaaf134cb57c75c49b095a64920ede4d1e0561f852ba409db8c2fd",
    "capturedAt": "2026-09-20T23:45:11.451Z",
    "elapsedMs": 175.96512500000244,
    "successfulAttemptElapsedMs": 174.72729199999594,
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
          "noul": 0.01
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.49
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
          "noul": 0.02
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
            "no_sensitive_action": 0.99,
            "sender_supplied": 0,
            "independently_established": 0.01,
            "mixed_or_unknown": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3546,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "ebfc374a87d83f2bda25abdc942726f43079955370bf0e6ef10ffdd4f31db041",
    "capturedAt": "2026-09-20T23:45:11.573Z",
    "elapsedMs": 120.46349999999802,
    "successfulAttemptElapsedMs": 119.66974999998638,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0,
            "body:1": 0.01,
            "body:4": 0,
            "body:3": 0.13,
            "NONE": 0.53,
            "body:0": 0.29,
            "body:7": 0.02,
            "body:11": 0,
            "body:8": 0,
            "body:6": 0,
            "body:10": 0.01,
            "subject:0": 0.01,
            "body:9": 0,
            "body:2": 0
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 950,
        "output_tokens": 149
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 297.4624579999945,
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
    "seq": 1183,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-242",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:11.276Z",
    "offsetMs": 0.798041000001831
  },
  {
    "seq": 1184,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-242",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:11.451Z",
    "offsetMs": 175.96537499999977,
    "elapsedMs": 174.72729199999594,
    "outcome": "success"
  },
  {
    "seq": 1185,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-242",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:11.453Z",
    "offsetMs": 177.36749999999302
  },
  {
    "seq": 1186,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-242",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:11.573Z",
    "offsetMs": 297.3472909999982,
    "elapsedMs": 119.66974999998638,
    "outcome": "success"
  },
  {
    "seq": 1187,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-242",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:11.573Z",
    "offsetMs": 297.5041659999988,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1467981eff0a2b50e8f417b09a5fb0ac9459d952cadadc514d3ed3db74a022a9";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1184},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1186},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1187}} as const;
export const projectionSha256 = "da8eddcf228c68289b237272bd19b7f78f869b9d77b9d1ab791a17d7060047d8";
