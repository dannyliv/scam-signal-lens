import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-473",
  "inputSha256": "e4d011af9d1897fd8e3d7f2e8a9d94bb20abd255777caf292a331d081cc3b563",
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
      "end": 38,
      "text": "Actualización de la seguridad de datos"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 149,
      "text": "HUAWEI Cloud Estimado Ricardo: Hemos finalizado la actualización del método de cifrado que usamos para guardar los datos en la nube de forma segura. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 149,
      "end": 235,
      "text": "Tenga en cuenta que: · Sus datos en la nube ahora se almacenarán de forma más segura. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 235,
      "end": 311,
      "text": "· Ya no se admitirán las versiones anteriores a 10.2.2.300 de Huawei Cloud. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 311,
      "end": 436,
      "text": "Para continuar utilizando HUAWEI Cloud en sus otros dispositivos, asegúrese de que tengan instalada la versión más reciente. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 436,
      "end": 496,
      "text": "· Para obtener más información, acceda a cloud.huawei.com . "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 496,
      "end": 623,
      "text": "Atentamente, El equipo de HUAWEI Cloud Contrato de usuario de HUAWEI Cloud | Declaración acerca de HUAWEI Cloud y la privacidad"
    }
  ],
  "passA": {
    "requestSha256": "d34d25624d213878d9e4efa732b52fbc04ac05b8d39aca21ec31ffe970e0bb47",
    "capturedAt": "2026-09-20T23:46:30.593Z",
    "elapsedMs": 208.62029099999927,
    "successfulAttemptElapsedMs": 206.87870900001144,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.42
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.14
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0.76,
            "educational_or_quoted": 0,
            "informational": 0.24
          },
          "confidence": 0.67
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.82,
            "independently_established": 0.01,
            "sender_supplied": 0.17
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 3599,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "6ac1a3d1ccc22938ccdc22d663bf87e8c6b6a41355c5ff6623760855e42f7e10",
    "capturedAt": "2026-09-20T23:46:30.718Z",
    "elapsedMs": 122.9912909999839,
    "successfulAttemptElapsedMs": 119.94091600002139,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:0": 0,
            "body:1": 0,
            "body:5": 0,
            "body:4": 0,
            "body:2": 0.53,
            "body:3": 0.41,
            "subject:0": 0,
            "NONE": 0.06
          },
          "confidence": 0.46
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:0": 0.22,
            "body:1": 0,
            "body:5": 0.65,
            "body:4": 0.01,
            "body:2": 0.01,
            "subject:0": 0,
            "body:3": 0.03,
            "NONE": 0.08
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 1472,
        "output_tokens": 187
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 333.73475000000326,
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
        "status": "low_confidence",
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
    "seq": 2323,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-473",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:30.386Z",
    "offsetMs": 1.2519590000156313
  },
  {
    "seq": 2324,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-473",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:30.593Z",
    "offsetMs": 208.61954200000037,
    "elapsedMs": 206.87870900001144,
    "outcome": "success"
  },
  {
    "seq": 2325,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-473",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:30.597Z",
    "offsetMs": 212.88025000001653
  },
  {
    "seq": 2326,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-473",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:30.718Z",
    "offsetMs": 333.4961250000051,
    "elapsedMs": 119.94091600002139,
    "outcome": "success"
  },
  {
    "seq": 2327,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-473",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:30.718Z",
    "offsetMs": 333.7897090000042,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6dd4cc5ad07edef62a5452ce1f3892819cc9b1914da393b4508929b228edf951";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2324},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2326},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2327}} as const;
export const projectionSha256 = "fc429245316dd13b45e001d93c785942947d5336fe98777355667149ca006c0f";
