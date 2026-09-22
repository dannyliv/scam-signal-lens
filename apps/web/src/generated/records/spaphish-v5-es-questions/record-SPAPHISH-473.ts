import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-473",
  "inputSha256": "e4d011af9d1897fd8e3d7f2e8a9d94bb20abd255777caf292a331d081cc3b563",
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
    "requestSha256": "f348d7720d6c095ec14317f3a5d44b176b899abcfd0b43013c4bba80b9f6fd39",
    "capturedAt": "2026-09-22T03:57:35.571Z",
    "elapsedMs": 609.8479499999667,
    "successfulAttemptElapsedMs": 608.1091650000308,
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
          "noul": 0.34
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
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
          "noul": 0.1
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.29,
            "active_request": 0.71,
            "educational_or_quoted": 0
          },
          "confidence": 0.61
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.88,
            "sender_supplied": 0.12,
            "independently_established": 0
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 5049,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "ab77bf030d4955fa389b7e4347df77487f772c34a0dab8c942707a8f9e1c4549",
    "capturedAt": "2026-09-22T03:57:36.086Z",
    "elapsedMs": 514.4866189999739,
    "successfulAttemptElapsedMs": 512.7096740000416,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.54,
            "body:5": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0.35,
            "body:1": 0,
            "body:4": 0,
            "NONE": 0.11
          },
          "confidence": 0.46
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:2": 0.01,
            "body:5": 0.52,
            "body:0": 0.32,
            "subject:0": 0,
            "body:3": 0.03,
            "body:1": 0,
            "body:4": 0.01,
            "NONE": 0.11
          },
          "confidence": 0.44
        }
      },
      "usage": {
        "input_tokens": 1674,
        "output_tokens": 187
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1126.0270460000029,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
    ],
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2322,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-473",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:34.962Z",
    "offsetMs": 1.453010999946855
  },
  {
    "seq": 2323,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-473",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:35.570Z",
    "offsetMs": 609.8474810000043,
    "elapsedMs": 608.1091650000308,
    "outcome": "success"
  },
  {
    "seq": 2324,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-473",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:35.573Z",
    "offsetMs": 612.7635979999322
  },
  {
    "seq": 2325,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-473",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:36.086Z",
    "offsetMs": 1125.8227619999088,
    "elapsedMs": 512.7096740000416,
    "outcome": "success"
  },
  {
    "seq": 2326,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-473",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:36.086Z",
    "offsetMs": 1126.0683819999686,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c015a97a39b3b23eee39c53f0d4af5bde08c8c19c14b7e288aca4318fa4c4c0a";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2323},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2325},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2326}} as const;
export const projectionSha256 = "2d1f16fc2017db87eb82a23081401d7706d177499a047d53d378601bff8470c3";
