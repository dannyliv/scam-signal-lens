import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-071",
  "inputSha256": "04530d6ab3a009a0632fdb2d83bec89d9ee2bc32c6d83ffa4d44acad886ec825",
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
      "end": 19,
      "text": "Alerta de seguridad"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 90,
      "text": "[image: Google] Permitiste que macOS acceda a algunos de los datos de tu Cuenta de Google\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 90,
      "end": 91,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 91,
      "end": 124,
      "text": "andres.gomez.secure@mailsafe.net\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 124,
      "end": 125,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 125,
      "end": 267,
      "text": "Si no le otorgaste acceso a macOS a algunos de los datos de tu Cuenta de Google, es posible que otra persona esté intentando acceder a ellos.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 267,
      "end": 268,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 268,
      "end": 339,
      "text": "Tómate un momento para revisar la actividad de tu cuenta y protegerla. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 339,
      "end": 396,
      "text": "Ver actividad https://accounts.google.com/AccountChooser?"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 396,
      "end": 496,
      "text": "Email=andres.gomez.secure@mailsafe.net&continue=https://myaccount.google.com/alert/nt/1761337947000?"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 496,
      "end": 700,
      "text": "rfn%3D127%26rfnc%3D1%26eid%3D-8424210952936058984%26et%3D0 Si en algún momento quieres modificar el acceso que tiene macOS a tus datos, ve a tu Cuenta de Google https://accounts.google.com/AccountChooser?"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 700,
      "end": 890,
      "text": "Email=andres.gomez.secure@mailsafe.net&continue=https://myaccount.google.com/connections/overview/AV0sZbHekcbqB11NHno9sYXawHBtprJlW0uOTlHf49mcDdPlIYLZzJzVPgOlgCM8CAmt-XIDz1LjIZ7kBFHCZ486cZ0?"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 890,
      "end": 1164,
      "text": "utm_source%3Dsec_alert%26utm_medium%3Demail_notification%26force_all%3Dtrue También puedes ver la actividad de seguridad en https://myaccount.google.com/notifications Enviamos este correo electrónico para informar cambios importantes en los servicios y la Cuenta de Google. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1164,
      "end": 1230,
      "text": "© 2025 Google LLC, 1100 Industrial Road, San Carlos, CA 94070, USA"
    }
  ],
  "passA": {
    "requestSha256": "72395c332a62ac9e575dcb7db1bac13a92c7a37966b2df1d889a4c98ce2e0c3c",
    "capturedAt": "2026-09-20T23:44:14.340Z",
    "elapsedMs": 149.8289999999979,
    "successfulAttemptElapsedMs": 148.5174999999981,
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
          "noul": 0.36
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.79
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.26
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
            "informational": 0.09,
            "educational_or_quoted": 0,
            "active_request": 0.91
          },
          "confidence": 0.88
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.49,
            "independently_established": 0.03,
            "no_sensitive_action": 0.47
          },
          "confidence": 0.31
        }
      },
      "usage": {
        "input_tokens": 3842,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "de959b0bf719e769933d419fd11b4397b34779b62fbfd3c31f1dd5d7b2585004",
    "capturedAt": "2026-09-20T23:44:14.530Z",
    "elapsedMs": 188.00108399999954,
    "successfulAttemptElapsedMs": 186.22945900000195,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:8": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:6": 0.3,
            "body:11": 0,
            "body:10": 0,
            "body:3": 0,
            "body:1": 0,
            "body:9": 0,
            "NONE": 0.19,
            "body:4": 0.51,
            "body:0": 0,
            "body:2": 0,
            "body:7": 0,
            "body:12": 0
          },
          "confidence": 0.47
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "body:8": 0.01,
            "subject:0": 0.02,
            "body:5": 0,
            "body:6": 0.03,
            "body:11": 0.28,
            "body:10": 0,
            "body:3": 0,
            "body:1": 0,
            "body:9": 0.01,
            "NONE": 0.25,
            "body:4": 0.02,
            "body:0": 0.22,
            "body:2": 0.01,
            "body:7": 0.01,
            "body:12": 0.14
          },
          "confidence": 0.23
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0.02,
            "subject:0": 0,
            "body:5": 0.01,
            "body:6": 0.13,
            "body:11": 0.13,
            "body:10": 0.01,
            "body:3": 0.01,
            "body:1": 0,
            "body:9": 0.02,
            "NONE": 0.54,
            "body:4": 0.01,
            "body:0": 0.01,
            "body:2": 0.01,
            "body:7": 0.1,
            "body:12": 0
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 3230,
        "output_tokens": 479
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 340.08795800000007,
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 346,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-071",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:14.191Z",
    "offsetMs": 0.8287920000002487
  },
  {
    "seq": 347,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-071",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:14.340Z",
    "offsetMs": 149.83133299999827,
    "elapsedMs": 148.5174999999981,
    "outcome": "success"
  },
  {
    "seq": 348,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-071",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:14.343Z",
    "offsetMs": 152.91829199999847
  },
  {
    "seq": 349,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-071",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:14.530Z",
    "offsetMs": 339.8083750000005,
    "elapsedMs": 186.22945900000195,
    "outcome": "success"
  },
  {
    "seq": 350,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-071",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:14.530Z",
    "offsetMs": 340.13887500000055,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "097cdc3f4a4e7707e683209e20b08453b295bf340766242ef93a87d35679a60b";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":347},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":349},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":350}} as const;
export const projectionSha256 = "4eb0a5beacf5949d91b7340fe0cd6a599e3bd10e226b3599d89cefb825c39609";
