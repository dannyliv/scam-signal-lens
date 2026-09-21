import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-285",
  "inputSha256": "a446a3008888d84b8f46f6a7d21679e663b1f5e7ed47aeaa97e497c93f829ede",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 286,
      "text": "Hola Conseguí a su persona de contacto a través de la red en línea durante la búsqueda. una persona confiable y de buena reputación para manejar un asunto altamente confidencial una transacción que involucra la transferencia de fondos a una cuenta en el extranjero y decidí escribirte. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 286,
      "end": 433,
      "text": "Quiero que seas el beneficiario del fideicomiso de mi difunto marido en el banco, que asciende a unos (sólo tres millones quinientos mil dólares). "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 433,
      "end": 466,
      "text": "No debo hacer nada por mi salud. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 466,
      "end": 500,
      "text": "No puedo soportar más el proceso. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 500,
      "end": 624,
      "text": "Vuelve a comunicarte conmigo de inmediato para que pueda explicarte cómo me recibirás y enviarte fotos mías en el hospital. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 624,
      "end": 721,
      "text": "Aquí está el correo electrónico a continuación: elena.martinez@mailsecuro.org Firmado Elena Vidal"
    }
  ],
  "passA": {
    "requestSha256": "d1445c5914e38a90e7204c43ad0ca7f4367ad22afd559df7bfcb488a44f3c335",
    "capturedAt": "2026-09-20T23:45:27.468Z",
    "elapsedMs": 191.45695800000976,
    "successfulAttemptElapsedMs": 189.8404579999915,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.38
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.18
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.26
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.9
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.52
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.46
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.49
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
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
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.07,
            "independently_established": 0,
            "sender_supplied": 0.93,
            "mixed_or_unknown": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3601,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "5a1ee987a27bad123fbf31d04f86429f89bb5bfd60f8c05c5c4e67ec363ce9e8",
    "capturedAt": "2026-09-20T23:45:27.613Z",
    "elapsedMs": 142.48920899999212,
    "successfulAttemptElapsedMs": 140.85299999998824,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0.15,
            "body:5": 0.16,
            "body:2": 0,
            "body:1": 0.02,
            "body:0": 0.03,
            "NONE": 0.64,
            "body:3": 0
          },
          "confidence": 0.59
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0.11,
            "body:2": 0,
            "body:5": 0.02,
            "body:1": 0.08,
            "body:0": 0.2,
            "NONE": 0.59,
            "body:3": 0
          },
          "confidence": 0.52
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:3": 0,
            "body:5": 0,
            "body:2": 0,
            "body:1": 0,
            "body:4": 1,
            "NONE": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:4": 0.03,
            "body:5": 0.01,
            "body:2": 0.01,
            "body:1": 0.72,
            "body:0": 0.21,
            "NONE": 0.02,
            "body:3": 0
          },
          "confidence": 0.68
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:0": 0.11,
            "body:5": 0.04,
            "body:1": 0,
            "body:3": 0.01,
            "NONE": 0.73,
            "body:4": 0.11
          },
          "confidence": 0.67
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "body:4": 0.12,
            "body:5": 0.01,
            "body:1": 0.02,
            "body:3": 0,
            "NONE": 0.84,
            "body:2": 0
          },
          "confidence": 0.82
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:3": 0,
            "body:5": 0,
            "body:1": 0.54,
            "body:4": 0.01,
            "NONE": 0.45,
            "body:0": 0
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 3989,
        "output_tokens": 584
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 336.6783330000035,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
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
        "status": "low_confidence",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:4"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "none_selected",
        "segmentId": null
      },
      "remote_access_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unrealistic_reward": {
        "status": "low_confidence",
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
    "seq": 1395,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-285",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:27.277Z",
    "offsetMs": 1.1494999999995343
  },
  {
    "seq": 1396,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-285",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:27.468Z",
    "offsetMs": 191.4591250000085,
    "elapsedMs": 189.8404579999915,
    "outcome": "success"
  },
  {
    "seq": 1397,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-285",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:27.471Z",
    "offsetMs": 194.6588330000086
  },
  {
    "seq": 1398,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-285",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:27.612Z",
    "offsetMs": 336.06120799999917,
    "elapsedMs": 140.85299999998824,
    "outcome": "success"
  },
  {
    "seq": 1399,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-285",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:27.613Z",
    "offsetMs": 336.7873330000002,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1dbb1fe4102c1a180a0cca4b97aca99d8e1a4ef7b31fe0c3e7471c7f9175a584";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1396},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1398},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1399}} as const;
export const projectionSha256 = "98dbce69e187316f16c716ca135933ba619ba102a88c775b5ef66c02c94bfd3c";
