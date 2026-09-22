import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-475",
  "inputSha256": "27ccccffc694199da468e0a0734a8f5c7b6857b9edf64c00ffee00844dd0634c",
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
      "end": 27,
      "text": "Diplomados Virtuales Gratis"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 132,
      "text": "Aprende, Actualízate y Capacítate Gratis Son muchos los temas en los cuales te puedes actualizar, capacitar o simplemente aprender. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 132,
      "end": 232,
      "text": "Recuerda que tienes todo por ganar y nada que perder, ya que la inscripción y formación es gratis . "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 232,
      "end": 357,
      "text": "Solo si deseas obtener el certificado pagas $82.500 COP durante el transcurso del diplomado o después de haberlo finalizado. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 357,
      "end": 444,
      "text": "Inscríbete Gratis Si no deseas recibir más mensajes, haz clic en cancelar suscripción ."
    }
  ],
  "passA": {
    "requestSha256": "43aac784b1d46be6cb16b915ed193257575de0b8c76a510678d44b28e96dd675",
    "capturedAt": "2026-09-22T03:57:38.090Z",
    "elapsedMs": 742.7232579999836,
    "successfulAttemptElapsedMs": 741.1290080000181,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.21
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.74
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
          "noul": 0.08
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.09
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
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.46,
            "mixed_or_unknown": 0.1,
            "sender_supplied": 0.44
          },
          "confidence": 0.28
        }
      },
      "usage": {
        "input_tokens": 4992,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "3b93b399524e675919817a7bf8ad7f2fb4e66f734a984921c862fdc819befe6f",
    "capturedAt": "2026-09-22T03:57:38.608Z",
    "elapsedMs": 516.222919999971,
    "successfulAttemptElapsedMs": 514.6893680000212,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:0": 0,
            "body:3": 0.01,
            "NONE": 0.66,
            "body:2": 0.33,
            "subject:0": 0
          },
          "confidence": 0.59
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0,
            "body:0": 0,
            "body:3": 0,
            "NONE": 0.02,
            "body:2": 0.98,
            "subject:0": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 1485,
        "output_tokens": 146
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1260.574605000089,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:2"
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
        "status": "not_requested",
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
    "seq": 2332,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-475",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:37.349Z",
    "offsetMs": 1.3723960000788793
  },
  {
    "seq": 2333,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-475",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:38.090Z",
    "offsetMs": 742.722574000014,
    "elapsedMs": 741.1290080000181,
    "outcome": "success"
  },
  {
    "seq": 2334,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-475",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:38.092Z",
    "offsetMs": 745.3585890000686
  },
  {
    "seq": 2335,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-475",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:38.607Z",
    "offsetMs": 1260.3250070000067,
    "elapsedMs": 514.6893680000212,
    "outcome": "success"
  },
  {
    "seq": 2336,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-475",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:38.608Z",
    "offsetMs": 1260.6295800000662,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "44d40fcae62fcc12d114fd4eeeee74d8a4eba2cedf208259c3925e5e405208d9";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2333},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2335},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2336}} as const;
export const projectionSha256 = "df2e0f5248cdcd46a808af580b064dbe38263d4737c62dbed5dfc30da1a066cb";
