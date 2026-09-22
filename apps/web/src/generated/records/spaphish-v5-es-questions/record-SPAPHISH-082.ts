import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-082",
  "inputSha256": "a01078e989f275936d95ee5551ac0ac98252d30a569b3e33478771dc4526e783",
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
      "end": 22,
      "text": "Ricardo Sánchez López\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 22,
      "end": 23,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 23,
      "end": 208,
      "text": "Se ha iniciado sesión en un dispositivo nuevo en ricardo.sanchez.lopez@dominioficticio.net Se ha iniciado sesión en tu cuenta de Google desde un dispositivo nuevo (Samsung Galaxy A54). "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 208,
      "end": 288,
      "text": "Te hemos enviado este correo electrónico para comprobar que la has iniciado tú.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 288,
      "end": 289,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 289,
      "end": 346,
      "text": "VER ACTIVIDAD https://accounts.google.com/AccountChooser?"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 346,
      "end": 460,
      "text": "Email=ricardo.sanchez.lopez@dominioficticio.net&continue=https://myaccount.google.com/new-device/nt/1523031693000?"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 460,
      "end": 597,
      "text": "rfn%3D100%26rfnc%3D1%26eid%3D6531490466850182123%26et%3D0%26asae%3D2%26anexp%3Dapa-standalone https://accounts.google.com/AccountChooser?"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 597,
      "end": 711,
      "text": "Email=ricardo.sanchez.lopez@dominioficticio.net&continue=https://myaccount.google.com/new-device/nt/1523031693000?"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 711,
      "end": 805,
      "text": "rfn%3D100%26rfnc%3D1%26eid%3D6531490466850182123%26et%3D0%26asae%3D2%26anexp%3Dapa-standalone\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 805,
      "end": 806,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 806,
      "end": 929,
      "text": "Te hemos enviado este correo electrónico para informarte de cambios importantes en tu cuenta y en los servicios de Google. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 929,
      "end": 1011,
      "text": "© 2018 Google Inc.,1600 Amphitheatre Parkway, Ciudad Central, CA 90210, USA et:100"
    }
  ],
  "passA": {
    "requestSha256": "7bd5df998e362660967ba4f3ff35ea748dda86628106b521b4b3cf14b1464393",
    "capturedAt": "2026-09-22T03:49:50.031Z",
    "elapsedMs": 622.428144000005,
    "successfulAttemptElapsedMs": 621.7532650000066,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.33
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.8
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.14
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.09
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.66,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.34
          },
          "confidence": 0.54
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.51,
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.48
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 5264,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "6ebf09e803a1e4a95240bb72ade0de9cc69dab1c94af8f3cae7408276323f368",
    "capturedAt": "2026-09-22T03:49:50.634Z",
    "elapsedMs": 601.5488320000004,
    "successfulAttemptElapsedMs": 600.8236340000003,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:11": 0.01,
            "NONE": 0.54,
            "body:12": 0,
            "subject:0": 0.01,
            "body:4": 0,
            "body:8": 0,
            "body:0": 0,
            "body:3": 0.24,
            "body:1": 0,
            "body:5": 0.19,
            "body:2": 0.01,
            "body:6": 0,
            "body:7": 0,
            "body:10": 0
          },
          "confidence": 0.5
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:9": 0,
            "body:11": 0.12,
            "body:10": 0,
            "body:12": 0.1,
            "subject:0": 0.01,
            "body:4": 0,
            "body:8": 0,
            "body:0": 0,
            "body:3": 0.45,
            "body:1": 0.01,
            "body:5": 0.06,
            "body:2": 0.06,
            "body:6": 0,
            "body:7": 0,
            "NONE": 0.19
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 2505,
        "output_tokens": 317
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1225.4136010000075,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
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
    "seq": 399,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-082",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:49.409Z",
    "offsetMs": 0.46184200000425335
  },
  {
    "seq": 400,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-082",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:50.031Z",
    "offsetMs": 622.4283570000116,
    "elapsedMs": 621.7532650000066,
    "outcome": "success"
  },
  {
    "seq": 401,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-082",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:50.032Z",
    "offsetMs": 624.0171030000056
  },
  {
    "seq": 402,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-082",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:50.634Z",
    "offsetMs": 1225.189182000002,
    "elapsedMs": 600.8236340000003,
    "outcome": "success"
  },
  {
    "seq": 403,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-082",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:50.634Z",
    "offsetMs": 1225.4580410000053,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d7a983319ae40958ac6968af2769148e3f9ceaa779e7a5ccde7af44e59df55b6";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":400},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":402},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":403}} as const;
export const projectionSha256 = "675f7903ace5cc4d610d9690943e0710dac6694f5676ea4ee72305bd852fdffe";
