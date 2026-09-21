import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-081",
  "inputSha256": "2456e8a3ecf016c942c494e5871fe19d403172d959617ed0db3250a9d7fe2975",
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
      "end": 39,
      "text": "Cotización Laboratorio Médico del Chopo"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 126,
      "text": "Adjunto al presente correo encontrará la cotización solicitada al Centro de Información de Laboratorio Clínico Santa Aurelia. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 126,
      "end": 275,
      "text": "Es importante que el día que acuda a nuestra sucursal lleve consigo el número de cotización y siga las instrucciones de preparación para su estudio. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 275,
      "end": 382,
      "text": "Consulte las promociones que Laboratorio Clínico Santa Aurelia tiene para usted en www.santaaurelia.com.mx\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 382,
      "end": 413,
      "text": " Porque tu salud es lo primero."
    }
  ],
  "passA": {
    "requestSha256": "ebd225c2b62eb127cbf7fe21becf76c1e9fbb6c4ba19c407e3999c00642f45b3",
    "capturedAt": "2026-09-20T23:44:17.577Z",
    "elapsedMs": 191.02583400000003,
    "successfulAttemptElapsedMs": 189.71837500000038,
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
          "noul": 0.13
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
          "noul": 0.81
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
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.46
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
            "educational_or_quoted": 0,
            "informational": 0.14,
            "active_request": 0.86
          },
          "confidence": 0.81
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0.06,
            "no_sensitive_action": 0.9400000000000001,
            "independently_established": 0
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 3532,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "ad8edf9a1329bb8874a12d549c754203b635a70fe9099070e9c28333d75aeea7",
    "capturedAt": "2026-09-20T23:44:17.782Z",
    "elapsedMs": 202.62545899999895,
    "successfulAttemptElapsedMs": 200.85075000000143,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.35,
            "body:0": 0.36,
            "body:2": 0.02,
            "NONE": 0.21,
            "body:3": 0.03,
            "subject:0": 0.03
          },
          "confidence": 0.23
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.78,
            "body:0": 0.01,
            "body:3": 0,
            "NONE": 0.11,
            "subject:0": 0,
            "body:2": 0.1
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 1224,
        "output_tokens": 154
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 396.56345800000054,
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 394,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-081",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:17.387Z",
    "offsetMs": 0.8025420000012673
  },
  {
    "seq": 395,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-081",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:17.577Z",
    "offsetMs": 191.02525000000242,
    "elapsedMs": 189.71837500000038,
    "outcome": "success"
  },
  {
    "seq": 396,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-081",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:17.580Z",
    "offsetMs": 194.7385000000031
  },
  {
    "seq": 397,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-081",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:17.782Z",
    "offsetMs": 396.3110000000015,
    "elapsedMs": 200.85075000000143,
    "outcome": "success"
  },
  {
    "seq": 398,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-081",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:17.782Z",
    "offsetMs": 396.6079170000012,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b8c1fcd9a68cb3c7510e950fe7dd7e258d8c2f8150f7d7c81cf3044d43331a06";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":395},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":397},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":398}} as const;
export const projectionSha256 = "1c9fe7dd61ed8450d0a6b7038d86df714dcdde3287b567777be94589346cfe31";
