import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-464",
  "inputSha256": "ab223781e9ecc109674e3e2b9444bbe80c9ccd4a7ec5841a9c9713ddd16e058b",
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
      "end": 48,
      "text": "Directores de tesis: Bulmaro Ramírez López, MCTS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 26,
      "text": "Buen día estimada Carmen,\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 26,
      "end": 27,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 27,
      "end": 98,
      "text": "espero te encuentres muy bien, escribo para solicitar que agreguen los\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 98,
      "end": 157,
      "text": "siguientes asesores al estudiante: Ricardo Herrera Molina:\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 157,
      "end": 169,
      "text": "Asesor: Dr. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 169,
      "end": 216,
      "text": "Javier Torres Díaz (jtorres@academiafutura.edu\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 216,
      "end": 218,
      "text": ")\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 218,
      "end": 232,
      "text": "Coasesor: Dr. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 232,
      "end": 281,
      "text": "Pablo Núñez Castillo (pnunez@institutoseguro.org\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 281,
      "end": 283,
      "text": ")\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 283,
      "end": 284,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 284,
      "end": 336,
      "text": "Cualquier cosa que se requiera, quedo al pendiente.\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 336,
      "end": 337,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 337,
      "end": 346,
      "text": "Saludos,\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 346,
      "end": 350,
      "text": "Dr. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 350,
      "end": 372,
      "text": "Fernando Salgado Ríos\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 372,
      "end": 394,
      "text": "Representante docente\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 394,
      "end": 445,
      "text": "Programa de posgrado en protección digital avanzada"
    }
  ],
  "passA": {
    "requestSha256": "800751fa76186f332ba4b0dc81e1ee16e5bb358595332230b5ad879a482d5a7c",
    "capturedAt": "2026-09-22T03:57:25.267Z",
    "elapsedMs": 575.7967359999893,
    "successfulAttemptElapsedMs": 573.6425289999461,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.94,
            "sender_supplied": 0.06,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 5022,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "5eb9622f10137b9c6444a6c90b4a0378407f57986ea490c323b0aafa06ff07b1",
    "capturedAt": "2026-09-22T03:57:25.774Z",
    "elapsedMs": 505.0787760000676,
    "successfulAttemptElapsedMs": 503.3951220000163,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:16",
          "probabilities": {
            "body:17": 0.03,
            "body:11": 0,
            "body:5": 0,
            "body:15": 0.01,
            "NONE": 0,
            "body:12": 0,
            "body:2": 0.01,
            "body:14": 0.01,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:4": 0,
            "body:9": 0,
            "body:8": 0,
            "body:16": 0.93,
            "body:7": 0,
            "body:13": 0,
            "body:10": 0,
            "body:3": 0,
            "body:6": 0
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 1183,
        "output_tokens": 212
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1082.44995499996,
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
        "status": "selected",
        "segmentId": "body:16"
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
    "seq": 2278,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-464",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:24.693Z",
    "offsetMs": 1.7311179999960586
  },
  {
    "seq": 2279,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-464",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:25.267Z",
    "offsetMs": 575.7970349999378,
    "elapsedMs": 573.6425289999461,
    "outcome": "success"
  },
  {
    "seq": 2280,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-464",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:25.269Z",
    "offsetMs": 578.3225749999983
  },
  {
    "seq": 2281,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-464",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:25.773Z",
    "offsetMs": 1082.2216900000349,
    "elapsedMs": 503.3951220000163,
    "outcome": "success"
  },
  {
    "seq": 2282,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-464",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:25.774Z",
    "offsetMs": 1082.5073379999958,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8ad5e6a99e9668bc75c1049bda74e86e6e8a31cef37ee9a6b07d1648c1c520e9";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2279},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2281},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2282}} as const;
export const projectionSha256 = "0f9cb186782682ddd00e24331b70a700fd37b2e45112467e1e0aa3dab5b8139b";
