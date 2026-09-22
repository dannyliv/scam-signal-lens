import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-134",
  "inputSha256": "72bf419a7f3c0696160ea9ed00835c4ed70ba12bea6ef716f4f783d9fd7c679b",
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
      "end": 47,
      "text": "Acto admin XNU083167 enviado al buzon YDP628570"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 138,
      "text": "HACIENDA Secretaría de Hacienda y Crédito Público Se te ha enviado el acto administrativo identificado con el folio: ZTR591442QMP883219 . "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 138,
      "end": 225,
      "text": "Este documento está disponible para su consulta en tu Buzón Tributario en sat.gob.mx . "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 225,
      "end": 349,
      "text": "Consultar acto administrativo El SAT no solicita información personal, claves o contraseñas a través de correo electrónico. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 349,
      "end": 448,
      "text": "Si recibes un mensaje sospechoso, no compartas información y repórtalo a través de nuestro portal. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 448,
      "end": 587,
      "text": "Tus datos personales están protegidos conforme a los Lineamientos de Protección de Datos Personales y las disposiciones fiscales vigentes. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 587,
      "end": 665,
      "text": "Se utilizan exclusivamente para ejercer las facultades de la Autoridad Fiscal."
    }
  ],
  "passA": {
    "requestSha256": "519cb34ca15d562b6360e4a03c750c7cae7133bf59ddfe0b38738ad5561b04d8",
    "capturedAt": "2026-09-22T03:50:54.368Z",
    "elapsedMs": 600.8507629999949,
    "successfulAttemptElapsedMs": 599.56403400001,
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.56
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0.22,
            "informational": 0.78
          },
          "confidence": 0.69
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.08,
            "mixed_or_unknown": 0,
            "independently_established": 0.06,
            "no_sensitive_action": 0.86
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 5052,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "d2a8cb3b43e74ea80369c13c88b3840a73d26d7a65453841772df0148f7192aa",
    "capturedAt": "2026-09-22T03:50:54.911Z",
    "elapsedMs": 541.6108430000022,
    "successfulAttemptElapsedMs": 540.350615000003,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:3": 0.01,
            "body:4": 0,
            "body:1": 0.02,
            "body:2": 0.04,
            "body:0": 0.84,
            "body:5": 0.01,
            "NONE": 0.08,
            "subject:0": 0
          },
          "confidence": 0.81
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:3": 0.05,
            "body:4": 0,
            "body:1": 0.75,
            "body:2": 0.11,
            "body:0": 0,
            "body:5": 0,
            "NONE": 0.08,
            "subject:0": 0.01
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 1694,
        "output_tokens": 190
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1144.1440409999923,
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
        "segmentId": "body:0"
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
    "seq": 651,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-134",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:53.768Z",
    "offsetMs": 0.7310189999989234
  },
  {
    "seq": 652,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-134",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:54.368Z",
    "offsetMs": 600.8499369999918,
    "elapsedMs": 599.56403400001,
    "outcome": "success"
  },
  {
    "seq": 653,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-134",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:54.370Z",
    "offsetMs": 603.1646799999871
  },
  {
    "seq": 654,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-134",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:54.911Z",
    "offsetMs": 1143.9128229999915,
    "elapsedMs": 540.350615000003,
    "outcome": "success"
  },
  {
    "seq": 655,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-134",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:54.911Z",
    "offsetMs": 1144.1869690000021,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "936744666956812fe8d0936e40216548de5ee0371d5dcea6051929798f89745c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":652},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":654},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":655}} as const;
export const projectionSha256 = "2939d95d36b05f9af908d2b16fecdbda32e651e21d274ec18f4857173ca8e95a";
