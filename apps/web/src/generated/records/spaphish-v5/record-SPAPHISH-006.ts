import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-006",
  "inputSha256": "7c70ef46e0c56694de6392f18a545d414218901839f08b0e3a70caf54a9af2c3",
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
      "end": 69,
      "text": "Ezequiela Miguelina - Tienes (1) paquete esperando ser entregado 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 69,
      "end": 118,
      "text": "Usa tu código para rastrearlo y recibirlo ___🚚. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 118,
      "end": 126,
      "text": "ID#41868"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 294,
      "text": "❒ ENTREGA DEL PAQUETE PENDIENTE ◉ Registro / Inicio de sesión ❒ Correos 71738317 SEGUIMIENTO ➢ pablito Tienes (1) paquete pendiente de entrega -------------------------------------------------------------------------------- Confirma tus datos de envío ■ tienes un paquete pendiente de entrega. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 294,
      "end": 407,
      "text": "Sigue tu pedido en tiempo real y programa la entrega para asegurarte de recibirlo a la hora que más te convenga! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 407,
      "end": 492,
      "text": "PROGRAMA TU ENTREGA Si no deseas recibir más correos electrónicos, desconéctate aquí."
    }
  ],
  "passA": {
    "requestSha256": "9766735c0bf1850fe5229470029739100e8903fd450099aa83e2d1290d0310f3",
    "capturedAt": "2026-09-20T23:43:52.974Z",
    "elapsedMs": 159.69550000000004,
    "successfulAttemptElapsedMs": 158.48520800000006,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.35
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.26
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.25
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.77
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.26
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.12
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.03,
            "no_sensitive_action": 0.35,
            "sender_supplied": 0.62,
            "independently_established": 0
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 3587,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b2c7149d730dbf20ece89bf443f1a98c191199bfb4fbf6040c24d73abeb90a9b",
    "capturedAt": "2026-09-21T00:57:14.691Z",
    "elapsedMs": 140.460875,
    "successfulAttemptElapsedMs": 138.768375,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:0": 0.36,
            "NONE": 0.37,
            "subject:2": 0,
            "body:1": 0.01,
            "subject:1": 0.25,
            "subject:0": 0
          },
          "confidence": 0.26
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.01,
            "body:0": 0.53,
            "NONE": 0.46,
            "subject:2": 0,
            "body:1": 0,
            "subject:1": 0,
            "subject:0": 0
          },
          "confidence": 0.44
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.13,
            "body:0": 0.03,
            "NONE": 0.69,
            "subject:2": 0,
            "body:1": 0.09,
            "subject:1": 0.05,
            "subject:0": 0.01
          },
          "confidence": 0.65
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.01,
            "body:0": 0.75,
            "NONE": 0.21,
            "subject:2": 0,
            "body:1": 0.02,
            "subject:1": 0,
            "subject:0": 0.01
          },
          "confidence": 0.7
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.02,
            "body:0": 0.03,
            "NONE": 0.92,
            "subject:2": 0,
            "body:1": 0.01,
            "subject:1": 0.02,
            "subject:0": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 2885,
        "output_tokens": 414
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 449.2802909999999,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
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
        "segmentId": "body:0"
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 26,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-006",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:52.814Z",
    "offsetMs": 0.7056250000000546
  },
  {
    "seq": 27,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-006",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:52.973Z",
    "offsetMs": 159.69629200000008,
    "elapsedMs": 158.48520800000006,
    "outcome": "success"
  },
  {
    "seq": 28,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-006",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:52.977Z",
    "offsetMs": 163.6831669999999
  },
  {
    "seq": 29,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-006",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:53.121Z",
    "offsetMs": 307.39916700000003,
    "elapsedMs": 142.90829200000007,
    "outcome": "success"
  },
  {
    "seq": 30,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-006",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:53.121Z",
    "offsetMs": 307.58908299999985,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2465,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-006",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:14.551Z",
    "offsetMs": 1.9542079999999942
  },
  {
    "seq": 2466,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-006",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:14.690Z",
    "offsetMs": 141.10512500000004,
    "elapsedMs": 138.768375,
    "outcome": "success"
  },
  {
    "seq": 2467,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-006",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:14.691Z",
    "offsetMs": 141.588208,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a9e6a1984258278b03c430048d7c703b0b2a3547e825de98fb81be4d3056b1c5";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":27},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2466},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2467}} as const;
export const projectionSha256 = "9e5674761b54242d4827152561374df53b063c0dacecce6f82528f46d537a518";
