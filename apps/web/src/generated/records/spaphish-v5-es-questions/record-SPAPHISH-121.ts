import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-121",
  "inputSha256": "bfbaf2c2ff8e8b98fa529bafddd59a5913fea6c010ee69cc7acfbdd16643f901",
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
      "end": 38,
      "text": "QUIERO TRANSFERIRTE FONDOS: 16/07/2024"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 30,
      "text": "Buenos días, mi nombre es Sr. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 30,
      "end": 68,
      "text": "Marcos Ledezma, primo hermano del Sr. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 68,
      "end": 109,
      "text": "Daniel Kunda ex presidente de Sudáfrica. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 109,
      "end": 287,
      "text": "Deseo transferir la cantidad de US$54,500,000.00 dólares Cincuenta y cuatro millones quinientos mil dólares estadounidenses a su cuenta en el extranjero para fines de inversión. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 287,
      "end": 493,
      "text": "Por favor necesito su ayuda para invertir en cualquier buen negocio en su país, mi interés es en Construcción, Bienes Raíces, Agricultura, Transporte o cualquier negocio que usted pueda tener conocimiento. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 493,
      "end": 551,
      "text": "Si estás interesado, por favor ponte en contacto conmigo. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 551,
      "end": 665,
      "text": "He asignado el 30% de la suma total para usted y el 70% se utilizará para mis propósitos de inversión en su país. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 665,
      "end": 769,
      "text": "Por favor contáctame a mi correo electrónico privado: contacto.ledezma.inversiones@correo-sintetico.com\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 769,
      "end": 809,
      "text": ": Atentamente, INGENIERO Marcos Ledezma."
    }
  ],
  "passA": {
    "requestSha256": "ed1610710c09949a2cbd9af7c576879b69a0b04ea52ed05b95eb4ece4cc44212",
    "capturedAt": "2026-09-22T03:50:37.574Z",
    "elapsedMs": 621.9734790000075,
    "successfulAttemptElapsedMs": 621.2210950000153,
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
          "noul": 0.32
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.49
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.11
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.45
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.25
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.68,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0.32
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 5114,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "2b99e1294a8c15fe53e12dfed46533fb0001e959f044c566ec28953c00579dbf",
    "capturedAt": "2026-09-22T03:50:38.227Z",
    "elapsedMs": 651.8094280000078,
    "successfulAttemptElapsedMs": 650.8836540000048,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0.11,
            "body:3": 0.04,
            "body:0": 0,
            "body:8": 0,
            "body:6": 0,
            "body:4": 0,
            "body:5": 0.03,
            "body:1": 0,
            "subject:0": 0,
            "NONE": 0.81,
            "body:2": 0
          },
          "confidence": 0.79
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:7": 0.02,
            "body:3": 0.63,
            "body:0": 0,
            "body:6": 0.08,
            "body:8": 0,
            "body:4": 0.03,
            "body:5": 0.02,
            "body:1": 0,
            "subject:0": 0.05,
            "NONE": 0.17,
            "body:2": 0
          },
          "confidence": 0.6
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:7": 0,
            "body:3": 0,
            "body:0": 0.01,
            "body:8": 0.03,
            "subject:0": 0,
            "body:4": 0,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0.8200000000000001,
            "NONE": 0,
            "body:2": 0.13
          },
          "confidence": 0.79
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0.01,
            "body:3": 0.01,
            "body:0": 0,
            "body:6": 0.03,
            "subject:0": 0,
            "body:4": 0,
            "body:5": 0,
            "body:8": 0,
            "body:1": 0,
            "NONE": 0.95,
            "body:2": 0
          },
          "confidence": 0.94
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:7": 0,
            "body:3": 0.02,
            "body:0": 0,
            "subject:0": 0,
            "body:6": 0.56,
            "body:4": 0.02,
            "body:5": 0,
            "body:8": 0,
            "body:1": 0,
            "NONE": 0.39,
            "body:2": 0
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 4151,
        "output_tokens": 595
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1275.6650280000176,
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
        "status": "low_confidence",
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
        "status": "selected",
        "segmentId": "body:1"
      },
      "verification_bypass": {
        "status": "not_requested",
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
    "seq": 587,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-121",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:36.952Z",
    "offsetMs": 0.5233890000090469
  },
  {
    "seq": 588,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-121",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:37.573Z",
    "offsetMs": 621.9749430000084,
    "elapsedMs": 621.2210950000153,
    "outcome": "success"
  },
  {
    "seq": 589,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-121",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:37.575Z",
    "offsetMs": 623.9398790000123
  },
  {
    "seq": 590,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-121",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:38.226Z",
    "offsetMs": 1275.277235000016,
    "elapsedMs": 650.8836540000048,
    "outcome": "success"
  },
  {
    "seq": 591,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-121",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:38.227Z",
    "offsetMs": 1275.7268360000162,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "cda57b5f865e06b09e06cd5c17cd5b2e95916d257fda53f05e74fa406cfcf293";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":588},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":590},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":591}} as const;
export const projectionSha256 = "1d039bbf014b7859ea6660e5c0209201bcba78a59cf338486db24c8bc50964bc";
