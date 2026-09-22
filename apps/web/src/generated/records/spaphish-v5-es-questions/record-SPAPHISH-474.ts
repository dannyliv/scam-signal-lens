import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-474",
  "inputSha256": "1521d7db128258275614e9d69034e7e2f6726507503a8495aa9dc76c6bcd168a",
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
      "end": 44,
      "text": "IMSS DIGITAL REPORTE DE VIGENCIA DE DERECHOS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 336,
      "text": "Estimado Derechohabiente : Genovevo Sanchez MARTINEZ con Número de Seguridad social :03178200972 Derivado de su solicitud del Reporte de Vigencia de Derechos, el Sistema de IMSS Digital le envía el reporte al correo lSanchez@gmail.com que usted capturó en su solicitud Este correo ha sido generado automáticamente favor de no responder."
    }
  ],
  "passA": {
    "requestSha256": "bebbfe646e707b906479d003684ca3c13dd5659dfbe5e8a1588559d16089e56b",
    "capturedAt": "2026-09-22T03:57:36.773Z",
    "elapsedMs": 676.9226309999358,
    "successfulAttemptElapsedMs": 674.5125789999729,
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
          "noul": 0.05
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
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 1,
            "active_request": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.09,
            "no_sensitive_action": 0.76,
            "sender_supplied": 0.15,
            "mixed_or_unknown": 0
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 4973,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "5f0166f31a6abb8493566e2c6f4853430f38a9c9e802e6f4a71bbc2d6bee3579",
    "capturedAt": "2026-09-22T03:57:37.346Z",
    "elapsedMs": 568.8693269999931,
    "successfulAttemptElapsedMs": 567.1326219999464,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.15,
            "subject:0": 0.21,
            "body:0": 0.64
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 849,
        "output_tokens": 50
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1249.4806389999576,
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
    "seq": 2327,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-474",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:36.098Z",
    "offsetMs": 2.126930999918841
  },
  {
    "seq": 2328,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-474",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:36.773Z",
    "offsetMs": 676.923637000029,
    "elapsedMs": 674.5125789999729,
    "outcome": "success"
  },
  {
    "seq": 2329,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-474",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:36.778Z",
    "offsetMs": 681.8367549999384
  },
  {
    "seq": 2330,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-474",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:37.345Z",
    "offsetMs": 1249.247762999963,
    "elapsedMs": 567.1326219999464,
    "outcome": "success"
  },
  {
    "seq": 2331,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-474",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:37.346Z",
    "offsetMs": 1249.5174399999669,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fb92a346b96897f6a24efc30f4c4fd3586b151feac01e7176ddd8e4b7b4caae7";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2328},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2330},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2331}} as const;
export const projectionSha256 = "568d35bbe2447566e338cc661536d1e97aceefb690447bbc11ba45eb6364a552";
