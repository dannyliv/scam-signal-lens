import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-385",
  "inputSha256": "c1d5231e0680db85ed924ddcc80f8b156caf5160fdabd7fb422764af61353a2f",
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
      "end": 65,
      "text": "¡Encuentre su lugar de vacunación contra la COVID-19 más cercano!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 28,
      "text": "¡Su paquete está en camino! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 28,
      "end": 79,
      "text": "Se entregará (1) paquete a su dirección en España. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 79,
      "end": 149,
      "text": "Use el código a continuación para rastrear su paquete en tiempo real. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 149,
      "end": 236,
      "text": "Planifique su entrega y manténgase informado con nuestras notificaciones instantáneas. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 236,
      "end": 290,
      "text": "Nos aseguramos de que su entrega sea rápida y segura. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 290,
      "end": 472,
      "text": "Rastree su envío Rastree su paquete de manera rápida y sencilla: Número de seguimiento: [7829406135] Si no desea recibir más correos de este tipo, haga clic aquí para darse de baja. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 472,
      "end": 519,
      "text": "Política de privacidad | Términos y condiciones"
    }
  ],
  "passA": {
    "requestSha256": "291009c85847dddbe1fb1f3b460b17d4637b39230983b4a4a4165784ad9494fc",
    "capturedAt": "2026-09-22T03:55:53.389Z",
    "elapsedMs": 586.8088920000009,
    "successfulAttemptElapsedMs": 585.4265820000437,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.37
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.09
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.04,
            "informational": 0.19,
            "educational_or_quoted": 0,
            "active_request": 0.77
          },
          "confidence": 0.7
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.8,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.19,
            "independently_established": 0
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 5025,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "0cc83b2ec9c9dfc9462c5ffc0c0c7de0f7aa4e2f1f1f7497bcc87689ec4223ac",
    "capturedAt": "2026-09-22T03:55:53.927Z",
    "elapsedMs": 535.0867839999846,
    "successfulAttemptElapsedMs": 533.7881319999578,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.02,
            "subject:0": 0.09,
            "body:6": 0,
            "body:3": 0.02,
            "NONE": 0.6,
            "body:2": 0.06,
            "body:1": 0.01,
            "body:0": 0.04,
            "body:4": 0.16
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 1039,
        "output_tokens": 102
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1124.3651829999872,
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
    "seq": 1886,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-385",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:52.803Z",
    "offsetMs": 1.0685020000091754
  },
  {
    "seq": 1887,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-385",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:53.389Z",
    "offsetMs": 586.8103559999727,
    "elapsedMs": 585.4265820000437,
    "outcome": "success"
  },
  {
    "seq": 1888,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-385",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:53.392Z",
    "offsetMs": 589.9514799999888
  },
  {
    "seq": 1889,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-385",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:53.927Z",
    "offsetMs": 1124.1764340000227,
    "elapsedMs": 533.7881319999578,
    "outcome": "success"
  },
  {
    "seq": 1890,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-385",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:53.927Z",
    "offsetMs": 1124.4062869999907,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fee6300d0311b5a869a6b5f1bba72d7d4d60e452980e8b6c28695dc072fdc7cf";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1887},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1889},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1890}} as const;
export const projectionSha256 = "2137fd13dc8a4bf7f90dc74edba81d05d7ec4b0a6c72db8263e80f0d1b14510c";
