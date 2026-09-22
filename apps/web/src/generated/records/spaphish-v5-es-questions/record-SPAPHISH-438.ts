import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-438",
  "inputSha256": "18bbd073c34a4520e0f3bb37fb2b0b9766f746e8e2a1d91893976bd736960e95",
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
      "end": 21,
      "text": "Problemas de Internet"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 21,
      "text": "Hola a Todas y Todos\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 21,
      "end": 22,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 22,
      "end": 102,
      "text": "Les informamos que unos de nuestros enlaces a Internet (de 75 Mbps) está caído. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 102,
      "end": 166,
      "text": "El proveedor estima restaurar el servicio en unas cuatro horas. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 166,
      "end": 213,
      "text": "Nosotros moveremos el tráfico a otras salidas. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 213,
      "end": 274,
      "text": "Esto provocara algo de congestión (lentitud) hacia Internet. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 274,
      "end": 325,
      "text": "Agradeciendo de antemano su atención y comprensión\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 325,
      "end": 326,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 326,
      "end": 332,
      "text": "Atte. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 332,
      "end": 361,
      "text": "Ricardo Soto Robles ASD MyOwn"
    }
  ],
  "passA": {
    "requestSha256": "da563fc104f6fd09dbd9cf92f31c206e2e3c44e8a01c46d3616bb35f087bff71",
    "capturedAt": "2026-09-22T03:56:54.827Z",
    "elapsedMs": 634.9785149999661,
    "successfulAttemptElapsedMs": 633.6371349999681,
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0,
            "informational": 1,
            "educational_or_quoted": 0
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
        "input_tokens": 4973,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "4b73f8eeee55bf6cb55eefa8b137fe2012ab82972cbbb66d2ea444fe5c1ada16",
    "capturedAt": "2026-09-22T03:56:55.345Z",
    "elapsedMs": 516.841247000033,
    "successfulAttemptElapsedMs": 515.3057059999555,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:2": 0.28,
            "body:7": 0,
            "body:0": 0,
            "body:1": 0,
            "body:9": 0.64,
            "subject:0": 0,
            "body:8": 0.02,
            "body:4": 0.04,
            "NONE": 0.02,
            "body:5": 0,
            "body:3": 0,
            "body:6": 0
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 977,
        "output_tokens": 131
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1153.2830010000616,
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
    "seq": 2149,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-438",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:54.193Z",
    "offsetMs": 1.0745890000252984
  },
  {
    "seq": 2150,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-438",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:54.827Z",
    "offsetMs": 634.9787420000648,
    "elapsedMs": 633.6371349999681,
    "outcome": "success"
  },
  {
    "seq": 2151,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-438",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:54.830Z",
    "offsetMs": 637.4876070000464
  },
  {
    "seq": 2152,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-438",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:55.345Z",
    "offsetMs": 1153.0811789999716,
    "elapsedMs": 515.3057059999555,
    "outcome": "success"
  },
  {
    "seq": 2153,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-438",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:55.345Z",
    "offsetMs": 1153.3249210000504,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "db6748aedacb85d7ed804a7d27db2e992b2cd50d9d32729be840cc8b384fd380";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2150},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2152},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2153}} as const;
export const projectionSha256 = "d3e55a26a695c50aead18a9c18c66b1accef2108e317547ae2628ffd5dfe18ab";
