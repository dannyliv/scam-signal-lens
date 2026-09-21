import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-184",
  "inputSha256": "f2ddd9dc8701e049ba3248308ab0fdcba19d16cffc8753df345caf56344adc56",
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
    "requestSha256": "b54b1a81f09b29e73f8dbc38c73ee871905963b9823213ba1c4325e51032edfb",
    "capturedAt": "2026-09-20T23:44:50.759Z",
    "elapsedMs": 180.7581250000003,
    "successfulAttemptElapsedMs": 179.59654099999898,
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
          "noul": 0.03
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
          "noul": 0.23
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0.03,
            "active_request": 0.94,
            "informational": 0.02,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.93
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.5700000000000001,
            "sender_supplied": 0.42,
            "independently_established": 0,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 3562,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "2a1813fdaf7e21c58f81651876838d551ee8a8168a2f997accdfea96969c9f64",
    "capturedAt": "2026-09-20T23:44:50.907Z",
    "elapsedMs": 145.94558300000062,
    "successfulAttemptElapsedMs": 143.82804100000067,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:1": 0.37,
            "NONE": 0.22,
            "body:0": 0.02,
            "body:2": 0,
            "subject:0": 0.39
          },
          "confidence": 0.24
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.11,
            "NONE": 0.89,
            "body:0": 0,
            "body:2": 0,
            "subject:0": 0
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 1284,
        "output_tokens": 133
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 329.8798749999987,
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
        "status": "none_selected",
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
    "seq": 901,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-184",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:50.578Z",
    "offsetMs": 0.7496250000040163
  },
  {
    "seq": 902,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-184",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:50.758Z",
    "offsetMs": 180.75679200000013,
    "elapsedMs": 179.59654099999898,
    "outcome": "success"
  },
  {
    "seq": 903,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-184",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:50.763Z",
    "offsetMs": 185.05479200000264
  },
  {
    "seq": 904,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-184",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:50.907Z",
    "offsetMs": 329.5868330000012,
    "elapsedMs": 143.82804100000067,
    "outcome": "success"
  },
  {
    "seq": 905,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-184",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:50.908Z",
    "offsetMs": 329.97204200000124,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0fdfd05804216e01295fe2b470ab9977fec0a99fcd64ec133f24b55d7b7945e6";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":902},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":904},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":905}} as const;
export const projectionSha256 = "8c81cbed70ea6576e1aebbe078c070899ac5f45d9db6e556914c1c1f99b5a4fb";
