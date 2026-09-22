import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-265",
  "inputSha256": "7dae7c5f0b41e976d2ead9cc7cf5447e95b9cd9d617a874fbec11ac05cbcad43",
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
      "end": 39,
      "text": "Cotización Laboratorio Médico del Chopo"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 117,
      "text": "Adjunto al presente correo encontrar la cotizacin solicitada al Centro de Informacin de Laboratorio Mdico del Chopo. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 117,
      "end": 262,
      "text": "Es importante que el da que acuda a nuestra sucursal lleve consigo el nmero de cotizacin y siga las instrucciones de preparacin para su estudio. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 262,
      "end": 386,
      "text": "Consulte las promociones que Laboratorio Mdico del Chopo tiene para usted en www.chopo.com.mx Porque tu salud es lo primero."
    }
  ],
  "passA": {
    "requestSha256": "12d5e50c83753f8d92b842c9c984a470f075d38afdda31b95924a3f926bd976c",
    "capturedAt": "2026-09-22T03:53:29.018Z",
    "elapsedMs": 597.0984990000143,
    "successfulAttemptElapsedMs": 595.9482969999663,
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
          "noul": 0.09
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.43
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
            "informational": 0.24,
            "educational_or_quoted": 0
          },
          "confidence": 0.67
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.08,
            "independently_established": 0.01,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.91
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 4977,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "3a643646a4c4d59aaece3cc420a3fa96eae220403b8c00c13a67fd96c6ecf14d",
    "capturedAt": "2026-09-22T03:53:29.595Z",
    "elapsedMs": 575.0839740000083,
    "successfulAttemptElapsedMs": 573.2314189999597,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.44,
            "body:2": 0.02,
            "subject:0": 0.06,
            "NONE": 0.16,
            "body:1": 0.32
          },
          "confidence": 0.29
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.01,
            "body:2": 0.15,
            "subject:0": 0,
            "NONE": 0.16,
            "body:1": 0.68
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 1387,
        "output_tokens": 136
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1173.7603090000339,
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
        "status": "low_confidence",
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
    "seq": 1294,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-265",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:28.422Z",
    "offsetMs": 0.8609610000276007
  },
  {
    "seq": 1295,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-265",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:29.018Z",
    "offsetMs": 597.0984140000073,
    "elapsedMs": 595.9482969999663,
    "outcome": "success"
  },
  {
    "seq": 1296,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-265",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:29.021Z",
    "offsetMs": 599.7783340000315
  },
  {
    "seq": 1297,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-265",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:29.594Z",
    "offsetMs": 1173.556059000024,
    "elapsedMs": 573.2314189999597,
    "outcome": "success"
  },
  {
    "seq": 1298,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-265",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:29.595Z",
    "offsetMs": 1173.8029390000156,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "90f57de562f79ff0706510b247ce75e7b09e526e640e770b1321054b44cf2be8";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1295},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1297},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1298}} as const;
export const projectionSha256 = "020e85249376c73e5969131ccdc34c96b3029e54666db23b6ba0cc33612d808b";
