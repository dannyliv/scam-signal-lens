import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-438",
  "inputSha256": "18bbd073c34a4520e0f3bb37fb2b0b9766f746e8e2a1d91893976bd736960e95",
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
    "requestSha256": "7b2ce348787ba56aabd67213be70a9672e17d9a9ecd94e7a9666af80b13f198e",
    "capturedAt": "2026-09-20T23:46:19.210Z",
    "elapsedMs": 186.1234580000164,
    "successfulAttemptElapsedMs": 183.81012499998906,
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.81
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "choice": "informational",
          "probabilities": {
            "active_request": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3523,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "44882ea0c661d0035910398d1251f850dd40d9868609f45cb831d4d9269fb46c",
    "capturedAt": "2026-09-21T00:57:32.641Z",
    "elapsedMs": 163.1847499999967,
    "successfulAttemptElapsedMs": 160.04295799999818,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.06,
            "body:6": 0.01,
            "body:7": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:2": 0.27,
            "body:8": 0.03,
            "body:4": 0.05,
            "body:1": 0,
            "body:3": 0,
            "body:9": 0.58
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 877,
        "output_tokens": 131
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 526.8373749999846,
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
    "seq": 2150,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-438",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:19.026Z",
    "offsetMs": 1.74504199999501
  },
  {
    "seq": 2151,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-438",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:19.210Z",
    "offsetMs": 186.12416700000176,
    "elapsedMs": 183.81012499998906,
    "outcome": "success"
  },
  {
    "seq": 2152,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-438",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:19.219Z",
    "offsetMs": 195.43604199998663
  },
  {
    "seq": 2153,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-438",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:19.386Z",
    "offsetMs": 362.2238329999964,
    "elapsedMs": 166.12229100000695,
    "outcome": "success"
  },
  {
    "seq": 2154,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-438",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:19.386Z",
    "offsetMs": 362.3552079999936,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2791,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-438",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:32.480Z",
    "offsetMs": 3.4730409999974654
  },
  {
    "seq": 2792,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-438",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:32.641Z",
    "offsetMs": 164.2584999999999,
    "elapsedMs": 160.04295799999818,
    "outcome": "success"
  },
  {
    "seq": 2793,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-438",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:32.641Z",
    "offsetMs": 164.39695799999754,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "425ad77897c31a090e601b531922cced596d871ea590c21140653a57de4945ca";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2151},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2792},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2793}} as const;
export const projectionSha256 = "8b9df6d95a5f02de4386de75ab49650f0cccbb7197176e222a760ece5077635d";
