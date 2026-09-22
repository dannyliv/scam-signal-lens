import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-271",
  "inputSha256": "13d85fade0582d996419795dbfb83a627645f2dbe3a6714a8efb1ee24b70ca73",
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
      "end": 60,
      "text": "Has sido seleccionado para obtener una recompensa exclusiva!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 65,
      "text": "El resultado de tu vida depende de las decisiones que tomes hoy. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 65,
      "end": 184,
      "text": "No es vivir lo que importa, sino vivir adecuadamente. amazon Encuesta de compradores 2018 ¡Por favor dinos tu opinión! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 184,
      "end": 222,
      "text": "Empezar ahora >> ¡Tu opinion importa! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 222,
      "end": 259,
      "text": "Cuéntanos tu experiencia con Amazon. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 259,
      "end": 347,
      "text": "Y como muestra de nuestra gratitud, puede elegir entre nuestras increíbles recompensas. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 347,
      "end": 463,
      "text": "Para ser elegible para esta oferta especial, simplemente participe en nuestra encuesta de marketing de 30 segundos. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 463,
      "end": 551,
      "text": "Empezar encuesta Para detener esto, por favor ve aquí o escriba a: 742 Maple Bridge Rd. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 551,
      "end": 584,
      "text": "Suite 5-4123 Clearfield, VT 05488"
    }
  ],
  "passA": {
    "requestSha256": "a11f84b846c58371ab1554f11f15c3e5e17a21d4bba0c82ed1384b62d3d33e99",
    "capturedAt": "2026-09-22T03:53:35.881Z",
    "elapsedMs": 625.0617270000512,
    "successfulAttemptElapsedMs": 624.1311869999627,
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
          "noul": 0.2
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
          "noul": 0.61
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.64
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.27
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
          "noul": 0.11
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.11
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.44,
            "sender_supplied": 0.53,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 5040,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "e098d731c2c5b0497aec5416a80c404deb8840c3dd3ead44ac70aa5c1b0f320b",
    "capturedAt": "2026-09-22T03:53:36.460Z",
    "elapsedMs": 577.6384159999434,
    "successfulAttemptElapsedMs": 576.1167480000295,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.06,
            "body:5": 0.07,
            "body:7": 0,
            "body:1": 0.01,
            "body:0": 0.52,
            "body:4": 0,
            "body:3": 0,
            "body:2": 0.06,
            "body:6": 0.28
          },
          "confidence": 0.46
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0,
            "body:5": 0.09,
            "body:7": 0.01,
            "body:1": 0.48,
            "NONE": 0.26,
            "body:3": 0.08,
            "body:4": 0.01,
            "body:2": 0.01,
            "body:6": 0.05
          },
          "confidence": 0.43
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.66,
            "body:5": 0.02,
            "body:7": 0.01,
            "body:1": 0,
            "body:2": 0,
            "body:4": 0,
            "body:0": 0,
            "body:3": 0,
            "body:6": 0.31
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 2334,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1204.6136889999616,
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
        "status": "low_confidence",
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
    "seq": 1323,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-271",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:35.256Z",
    "offsetMs": 0.6524830000125803
  },
  {
    "seq": 1324,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-271",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:35.881Z",
    "offsetMs": 625.0616309999605,
    "elapsedMs": 624.1311869999627,
    "outcome": "success"
  },
  {
    "seq": 1325,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-271",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:35.883Z",
    "offsetMs": 627.7331129999948
  },
  {
    "seq": 1326,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-271",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:36.460Z",
    "offsetMs": 1204.357370999991,
    "elapsedMs": 576.1167480000295,
    "outcome": "success"
  },
  {
    "seq": 1327,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-271",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:36.460Z",
    "offsetMs": 1204.6570199999842,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e29a706313b21d7b7b8511519d6a95ac73d88c2806eda5184e90b21acda1c582";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1324},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1326},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1327}} as const;
export const projectionSha256 = "1d5386a6758c5d3b1e205b9765e4891826fd40c8adc77206a7b5ef53949c990f";
