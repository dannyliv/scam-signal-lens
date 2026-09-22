import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-285",
  "inputSha256": "a446a3008888d84b8f46f6a7d21679e663b1f5e7ed47aeaa97e497c93f829ede",
  "questionBundleSha256": "9631a5b623f8c05b491dc5a5f67ab9b62e5b1898446a722339eaa0c16a40af8b",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "42e51b1f7b8706dae7188d0d3fa8c6ac83b855b21f393196bd63bc16d4b91d93",
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
    "requestSha256": "63e855d125fd76095c05ff185f1dff1de3ff3c0de18544dea7855b6a257aa446",
    "capturedAt": "2026-09-22T03:53:52.718Z",
    "elapsedMs": 604.3701720000245,
    "successfulAttemptElapsedMs": 602.8156770000351,
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
          "noul": 0.24
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.24
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.19
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.88
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.48
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.54
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.57
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.87,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.12
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 5051,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "914377c34fdefd3e30fd2937c42a55af9cff93cf89997818c1e87b7491e8dbe4",
    "capturedAt": "2026-09-22T03:53:53.444Z",
    "elapsedMs": 721.3725040000281,
    "successfulAttemptElapsedMs": 719.4658650000347,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:2": 0,
            "body:4": 0.05,
            "body:0": 0.01,
            "body:3": 0,
            "NONE": 0.84,
            "body:5": 0.1
          },
          "confidence": 0.8
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.17,
            "body:2": 0,
            "body:4": 0.15,
            "body:0": 0.1,
            "NONE": 0.58,
            "body:3": 0,
            "body:5": 0
          },
          "confidence": 0.5
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:1": 0,
            "body:2": 0,
            "body:4": 1,
            "body:0": 0,
            "NONE": 0,
            "body:3": 0,
            "body:5": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.53,
            "body:2": 0,
            "body:4": 0.02,
            "body:0": 0.41,
            "body:3": 0,
            "NONE": 0.03,
            "body:5": 0.01
          },
          "confidence": 0.45
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:2": 0.01,
            "body:4": 0.17,
            "body:0": 0.1,
            "body:3": 0.02,
            "NONE": 0.59,
            "body:5": 0.11
          },
          "confidence": 0.52
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.02,
            "body:2": 0.01,
            "body:4": 0.13,
            "body:0": 0.01,
            "body:3": 0,
            "NONE": 0.82,
            "body:5": 0.01
          },
          "confidence": 0.8
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.53,
            "body:2": 0.01,
            "body:4": 0.01,
            "body:0": 0.01,
            "body:3": 0,
            "NONE": 0.44,
            "body:5": 0
          },
          "confidence": 0.44
        }
      },
      "usage": {
        "input_tokens": 4712,
        "output_tokens": 579
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1330.5184040000313,
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
        "status": "none_selected",
        "segmentId": null
      },
      "payment_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:4"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
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
    "seq": 1391,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-285",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:52.114Z",
    "offsetMs": 1.1898930000024848
  },
  {
    "seq": 1392,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-285",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:52.717Z",
    "offsetMs": 604.3705590000027,
    "elapsedMs": 602.8156770000351,
    "outcome": "success"
  },
  {
    "seq": 1393,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-285",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:52.723Z",
    "offsetMs": 609.8933320000069
  },
  {
    "seq": 1394,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-285",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:53.443Z",
    "offsetMs": 1330.1596290000016,
    "elapsedMs": 719.4658650000347,
    "outcome": "success"
  },
  {
    "seq": 1395,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-285",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:53.444Z",
    "offsetMs": 1330.5636960000265,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0c4c740d6e52b12c0c6a57e77c44d8f46a5d2364c0c0a54d394520ca9f5a7252";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1392},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1394},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1395}} as const;
export const projectionSha256 = "4b523499d24b10eb6e530d31a8b8965ec76e2a4fe66e5cf18419dbe1777e6b5b";
