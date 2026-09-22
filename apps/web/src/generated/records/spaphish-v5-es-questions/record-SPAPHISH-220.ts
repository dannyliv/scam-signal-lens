import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-220",
  "inputSha256": "fbc53f8c70398cc8ae4b5931c7d39eba1d2817b0179f92c33e57d007b70c3361",
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
      "end": 41,
      "text": "Aviso de selección de (Access Industries)"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 55,
      "text": "Buenos días, Mi nombre es Sir Marcelo Esteban Voronov. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 55,
      "end": 167,
      "text": "Usted se encuentra entre las personas seleccionadas para recibir una donación de mi empresa, Access Industries. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 167,
      "end": 293,
      "text": "He decidido donar $600,000.00 (seiscientos mil dólares estadounidenses) a cada persona seleccionada al azar en todo el mundo. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 293,
      "end": 386,
      "text": "Al recibir este correo electrónico, puede considerarse uno de los afortunados destinatarios. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 386,
      "end": 456,
      "text": "Su dirección de correo electrónico fue seleccionada al azar en línea. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 456,
      "end": 558,
      "text": "Por favor, responda lo antes posible para confirmar que su dirección de correo electrónico es válida. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 558,
      "end": 654,
      "text": "Puede leer más sobre mí en el siguiente enlace: https://en.m.wikipedia.org/wiki/Marcelo_Voronov\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 654,
      "end": 731,
      "text": " Saludos cordiales, Sir Marcelo Esteban Voronov Presidente, Access Industries"
    }
  ],
  "passA": {
    "requestSha256": "104e314d58bfdfd5a84715e2b1b83a97b7e88960574fbc6f5bc314323b12541c",
    "capturedAt": "2026-09-22T03:52:33.828Z",
    "elapsedMs": 637.617733000021,
    "successfulAttemptElapsedMs": 636.4335849999916,
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
          "noul": 0.12
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.1
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.61
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.18
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.29
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.81
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
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.59,
            "no_sensitive_action": 0.4,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 5059,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ddca213849bd1fc0b0e49b16b31e0be229d7cc477589fca73eb5c66c6b81da98",
    "capturedAt": "2026-09-22T03:52:34.370Z",
    "elapsedMs": 540.9931820000056,
    "successfulAttemptElapsedMs": 539.7947779999813,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "NONE": 0.03,
            "subject:0": 0,
            "body:2": 0,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0.97,
            "body:7": 0,
            "body:0": 0,
            "body:4": 0,
            "body:6": 0
          },
          "confidence": 0.97
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.01,
            "body:2": 0,
            "body:1": 0.07,
            "body:3": 0,
            "body:5": 0.03,
            "body:0": 0.01,
            "body:7": 0.87,
            "body:4": 0,
            "body:6": 0
          },
          "confidence": 0.85
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.89,
            "body:2": 0,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0.11,
            "body:7": 0,
            "body:0": 0,
            "body:4": 0,
            "body:6": 0
          },
          "confidence": 0.87
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.14,
            "subject:0": 0,
            "body:2": 0.83,
            "body:1": 0.01,
            "body:3": 0.01,
            "body:5": 0.01,
            "body:7": 0,
            "body:0": 0,
            "body:4": 0,
            "body:6": 0
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3072,
        "output_tokens": 445
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1180.7880870000226,
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
        "status": "selected",
        "segmentId": "body:5"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:7"
      },
      "verification_bypass": {
        "status": "not_requested",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "none_selected",
        "segmentId": null
      },
      "remote_access_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unrealistic_reward": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 1071,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-220",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:33.190Z",
    "offsetMs": 0.8635559999966063
  },
  {
    "seq": 1072,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-220",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:33.827Z",
    "offsetMs": 637.6176720000221,
    "elapsedMs": 636.4335849999916,
    "outcome": "success"
  },
  {
    "seq": 1073,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-220",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:33.830Z",
    "offsetMs": 640.1578319999971
  },
  {
    "seq": 1074,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-220",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:34.370Z",
    "offsetMs": 1180.4610979999998,
    "elapsedMs": 539.7947779999813,
    "outcome": "success"
  },
  {
    "seq": 1075,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-220",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:34.370Z",
    "offsetMs": 1180.8342319999938,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "bf2cfd6655b3da901d07aff25d7d80cbfcda36f5053b14770a8e64d359d52191";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1072},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1074},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1075}} as const;
export const projectionSha256 = "43f31282446d69382439a049e355ca0d096cda06636c7ae24abe49414d41eaf1";
