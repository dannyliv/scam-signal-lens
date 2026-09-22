import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-026",
  "inputSha256": "d2f9b80cba001df60ebc3dd59abb047db942c836c9435d4989df980206264a4a",
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
      "end": 96,
      "text": "Ezequiela Miguelina - Has ganado un Compresor de Aire Portátil para Neumáticos Bosch 🎁, ID#0621"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 13,
      "text": "¡Date prisa! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 13,
      "end": 56,
      "text": "¡El número de premios a ganar es limitado! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 56,
      "end": 73,
      "text": "¡Confirma ahora! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 73,
      "end": 160,
      "text": "REPSOL® Podrás ganar un premio exclusivo ¡Has sido seleccionado para recibir un nuevo! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 160,
      "end": 249,
      "text": "Inflador de Neumáticos Eléctrico Marca Premium Haz clic aquí para reclamar ¡Felicidades! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 249,
      "end": 339,
      "text": "Has sido seleccionado para participar en nuestro programa de fidelidad de forma GRATUITA. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 339,
      "end": 397,
      "text": "Solo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 397,
      "end": 499,
      "text": "Si ya no deseas recibir estos correos electrónicos, puedes cancelar tu suscripción haciendo clic aquí."
    }
  ],
  "passA": {
    "requestSha256": "f720d9162decea30eb61417d24d65ddd52bea49da728f8389d3e5b5821d2d326",
    "capturedAt": "2026-09-22T03:48:41.884Z",
    "elapsedMs": 725.3054020000018,
    "successfulAttemptElapsedMs": 723.636086999999,
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
          "noul": 0.22
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.93
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.61
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.25
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.16
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.15
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.55,
            "no_sensitive_action": 0.44,
            "independently_established": 0
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 5025,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "18283ecb1f21cc7b8c9742fcdadd483c09b7692699aa6245b43c9875547e5540",
    "capturedAt": "2026-09-22T03:48:42.633Z",
    "elapsedMs": 747.8102489999983,
    "successfulAttemptElapsedMs": 746.7023049999989,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0,
            "subject:0": 0,
            "body:6": 0,
            "body:3": 0,
            "body:7": 0,
            "NONE": 0.89,
            "body:2": 0.06,
            "body:1": 0,
            "body:0": 0,
            "body:4": 0.05
          },
          "confidence": 0.86
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:5": 0,
            "body:3": 0,
            "body:6": 0,
            "subject:0": 0,
            "body:7": 0,
            "NONE": 0,
            "body:2": 0.09,
            "body:0": 0.78,
            "body:4": 0,
            "body:1": 0.13
          },
          "confidence": 0.74
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.09,
            "subject:0": 0.01,
            "body:6": 0,
            "body:3": 0.4,
            "NONE": 0.48,
            "body:7": 0.01,
            "body:2": 0.01,
            "body:4": 0,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.42
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0,
            "subject:0": 0,
            "body:6": 0.01,
            "body:3": 0,
            "body:7": 0,
            "NONE": 0.92,
            "body:2": 0.04,
            "body:4": 0.02,
            "body:0": 0.01,
            "body:1": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 2913,
        "output_tokens": 438
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1474.8474429999987,
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
        "status": "none_selected",
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 124,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-026",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:41.159Z",
    "offsetMs": 1.0587820000000647
  },
  {
    "seq": 125,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-026",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:41.883Z",
    "offsetMs": 725.3066719999988,
    "elapsedMs": 723.636086999999,
    "outcome": "success"
  },
  {
    "seq": 126,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-026",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:41.885Z",
    "offsetMs": 727.3621490000005
  },
  {
    "seq": 127,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-026",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:42.633Z",
    "offsetMs": 1474.5530179999987,
    "elapsedMs": 746.7023049999989,
    "outcome": "success"
  },
  {
    "seq": 128,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-026",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:42.633Z",
    "offsetMs": 1474.8939739999987,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0c4038c25a7754548d8efeef55ffdf3a1e5ecb723e4ed649b62d7b6764d335a0";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":125},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":127},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":128}} as const;
export const projectionSha256 = "81cbb4641bba93ed5359b08121881c36fbecb022bcb600ff61cbd66dcf507eb1";
