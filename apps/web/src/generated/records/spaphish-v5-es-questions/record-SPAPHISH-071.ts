import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-071",
  "inputSha256": "04530d6ab3a009a0632fdb2d83bec89d9ee2bc32c6d83ffa4d44acad886ec825",
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
    "requestSha256": "54ff983e4e61943615aa16566ade2e7cca9abe69a44921ceb27b145b44d66d31",
    "capturedAt": "2026-09-22T03:49:37.763Z",
    "elapsedMs": 658.5022459999891,
    "successfulAttemptElapsedMs": 657.6097630000004,
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
          "noul": 0.06
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
          "noul": 0.42
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.81
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
          "noul": 0.04
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.1
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.23,
            "active_request": 0.77,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.69
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0.01,
            "no_sensitive_action": 0.52,
            "sender_supplied": 0.46
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 5292,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "5d7af40687396b7d3d820d1ab1c9674b921480617789e06207deb4f93e456304",
    "capturedAt": "2026-09-22T03:49:38.316Z",
    "elapsedMs": 551.6766429999989,
    "successfulAttemptElapsedMs": 550.9400580000074,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:5": 0,
            "body:4": 0.58,
            "body:11": 0,
            "body:6": 0.25,
            "body:12": 0,
            "body:3": 0,
            "NONE": 0.17,
            "body:7": 0,
            "body:9": 0,
            "body:2": 0,
            "body:10": 0,
            "body:0": 0,
            "body:8": 0,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.53
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0,
            "body:4": 0.03,
            "body:11": 0.19,
            "body:6": 0.08,
            "body:12": 0.13,
            "body:3": 0,
            "NONE": 0.33,
            "body:7": 0.01,
            "body:9": 0.01,
            "body:2": 0.01,
            "body:0": 0.16,
            "body:10": 0.01,
            "body:8": 0.01,
            "body:1": 0,
            "subject:0": 0.03
          },
          "confidence": 0.28
        }
      },
      "usage": {
        "input_tokens": 2587,
        "output_tokens": 317
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1212.0549680000113,
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
    "seq": 346,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-071",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:37.105Z",
    "offsetMs": 0.6076600000087637
  },
  {
    "seq": 347,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-071",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:37.763Z",
    "offsetMs": 658.5024820000108,
    "elapsedMs": 657.6097630000004,
    "outcome": "success"
  },
  {
    "seq": 348,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-071",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:37.765Z",
    "offsetMs": 660.5097810000007
  },
  {
    "seq": 349,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-071",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:38.316Z",
    "offsetMs": 1211.7724970000127,
    "elapsedMs": 550.9400580000074,
    "outcome": "success"
  },
  {
    "seq": 350,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-071",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:38.316Z",
    "offsetMs": 1212.1054620000068,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6d0ec8b3c7b0a3be2dea0bb4b9bf49ef124ef62e87cbb9d75f431918b0bd707a";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":347},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":349},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":350}} as const;
export const projectionSha256 = "a6880cc49a0d8d97071c6b3e0424f2a6a9054c593680e1d615270fea26c51c35";
