import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-184",
  "inputSha256": "f2ddd9dc8701e049ba3248308ab0fdcba19d16cffc8753df345caf56344adc56",
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
      "end": 25,
      "text": "Fw: mensaje de la policía"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 374,
      "text": "Get Outlook for Androidhttps://aka.ms/AAb9ysg ________________________________ From: Andrea Camila Soto Pérez <andrea.soto@institucion-academica.net> Sent: lunes, 15 de diciembre de 2024 09:45:00 AM To: contacto_servicio@correo-seguro.com <contacto_servicio@correo-seguro.com> Subject: RE: mensaje de la policía ¡Este mensaje fue enviado por alguien ajeno a la Universidad! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 374,
      "end": 519,
      "text": "**************************************************************************** Saludos, Le pedimos que mire el archivo adjunto para más detalles . "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 519,
      "end": 526,
      "text": "Gracias"
    }
  ],
  "passA": {
    "requestSha256": "fcd530636ca28fb4610158f53ab33c52ec07702904a58bf5d32d5046d58b99fd",
    "capturedAt": "2026-09-22T03:51:51.408Z",
    "elapsedMs": 776.074678999983,
    "successfulAttemptElapsedMs": 774.9115770000208,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.13
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.73
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0.01,
            "informational": 0.01,
            "active_request": 0.98
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.67,
            "sender_supplied": 0.31
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 5012,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "c89bdc30e4c463ee1ad8158b2a721f49021b8899610f0e6a9f05f64f04cdc84f",
    "capturedAt": "2026-09-22T03:51:51.977Z",
    "elapsedMs": 568.2465399999928,
    "successfulAttemptElapsedMs": 567.2857720000029,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.32,
            "NONE": 0.14,
            "body:1": 0.47,
            "body:2": 0,
            "body:0": 0.07
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 956,
        "output_tokens": 68
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1345.6267529999895,
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 895,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-184",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:50.633Z",
    "offsetMs": 0.8990690000064205
  },
  {
    "seq": 896,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-184",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:51.408Z",
    "offsetMs": 776.0750919999846,
    "elapsedMs": 774.9115770000208,
    "outcome": "success"
  },
  {
    "seq": 897,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-184",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:51.409Z",
    "offsetMs": 777.7251370000013
  },
  {
    "seq": 898,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-184",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:51.977Z",
    "offsetMs": 1345.4368149999937,
    "elapsedMs": 567.2857720000029,
    "outcome": "success"
  },
  {
    "seq": 899,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-184",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:51.977Z",
    "offsetMs": 1345.6671999999962,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ff7a6929f688cbe0781a90e7c472f6ff5bde86078a58a1ef5d2c973e47393f28";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":896},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":898},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":899}} as const;
export const projectionSha256 = "05f4f1cb47387053a030dfba7171f1b0b86dad9e37d297e153c3816f05e2bffd";
