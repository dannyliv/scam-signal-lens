import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-348",
  "inputSha256": "b4a0d779181c8ceeb25e0990a2e8e5e16b49386ced531b9f7b8457f99e3807e7",
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
      "text": "Tiene un archivo pendiente en OneDrive"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 35,
      "text": "Comience por descargar su archivo. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 35,
      "end": 75,
      "text": "¿Tiene problemas para ver este mensaje? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 75,
      "end": 92,
      "text": "Haga clic aquí . "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 92,
      "end": 134,
      "text": "¡Tiene un archivo importante en OneDrive! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 134,
      "end": 198,
      "text": "Hay muchas razones por las que los usuarios prefieren OneDrive. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 198,
      "end": 243,
      "text": "Descargue su archivo y dé el siguiente paso. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 243,
      "end": 395,
      "text": "Descargar archivo Sus archivos siempre estarán disponibles Sus archivos y fotos siempre estarán sincronizados y actualizados en todos sus dispositivos. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 395,
      "end": 575,
      "text": "500 GB total (0.5 TB) Mayor productividad Intercambio sin límites Aplicaciones de Microsoft Microsoft respeta su privacidad Para saber más, lea nuestra Declaración de privacidad . "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 575,
      "end": 675,
      "text": "Para configurar sus preferencias de contacto para las comunicaciones de Microsoft, haga clic aquí . "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 675,
      "end": 814,
      "text": "Esta configuración no afectará las comunicaciones obligatorias de servicio que se consideran parte de determinados servicios de Microsoft. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 814,
      "end": 830,
      "text": "Microsoft Office"
    }
  ],
  "passA": {
    "requestSha256": "b7e6b8a3c36a41000f2fd8e7b142d389312e8751f042915c89365af0173ae801",
    "capturedAt": "2026-09-22T03:55:09.592Z",
    "elapsedMs": 627.1982420000131,
    "successfulAttemptElapsedMs": 625.5743260000017,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.22
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.69
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.24
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.31,
            "independently_established": 0,
            "mixed_or_unknown": 0.02,
            "sender_supplied": 0.67
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 5057,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4130c472aa902b3d260779643e0c115b348034a5fbf1984fe2af61bbf96b96af",
    "capturedAt": "2026-09-22T03:55:10.134Z",
    "elapsedMs": 540.0512130000279,
    "successfulAttemptElapsedMs": 537.9035799999838,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:9": 0,
            "body:7": 0,
            "body:3": 0.14,
            "body:6": 0.01,
            "body:10": 0,
            "body:5": 0.17,
            "body:8": 0,
            "body:4": 0,
            "body:0": 0.05,
            "NONE": 0.48,
            "body:2": 0.01,
            "subject:0": 0.14
          },
          "confidence": 0.44
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "body:9": 0.08,
            "body:7": 0.09,
            "body:3": 0.03,
            "body:6": 0.01,
            "body:10": 0.12,
            "body:5": 0.01,
            "body:2": 0.01,
            "body:4": 0.01,
            "body:0": 0.02,
            "NONE": 0.51,
            "body:8": 0.03,
            "subject:0": 0.07
          },
          "confidence": 0.47
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "body:9": 0,
            "body:7": 0,
            "body:6": 0,
            "body:3": 0,
            "body:10": 0,
            "body:5": 0.01,
            "body:8": 0,
            "body:4": 0,
            "body:0": 0.02,
            "NONE": 0.9400000000000001,
            "body:2": 0.01,
            "subject:0": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 2534,
        "output_tokens": 413
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1169.2695659999736,
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
        "status": "low_confidence",
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
    "seq": 1702,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-348",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:08.966Z",
    "offsetMs": 1.2254919999977574
  },
  {
    "seq": 1703,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-348",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:09.592Z",
    "offsetMs": 627.1945369999739,
    "elapsedMs": 625.5743260000017,
    "outcome": "success"
  },
  {
    "seq": 1704,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-348",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:09.595Z",
    "offsetMs": 630.2162339999923
  },
  {
    "seq": 1705,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-348",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:10.133Z",
    "offsetMs": 1168.92372099997,
    "elapsedMs": 537.9035799999838,
    "outcome": "success"
  },
  {
    "seq": 1706,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-348",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:10.134Z",
    "offsetMs": 1169.3408349999809,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "66c62204c7dacbe360f68eb2c03fa559d1c483440251b57ff27820d51f871d79";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1703},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1705},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1706}} as const;
export const projectionSha256 = "540c47565dfdb70f5a1d1d9d9321206974d4b3c08fef99ec45dc7b05b4f01c73";
