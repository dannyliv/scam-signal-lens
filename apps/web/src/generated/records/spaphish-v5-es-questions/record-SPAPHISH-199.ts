import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-199",
  "inputSha256": "0ccb3a3cd34b176b40b8bceaf24b00c8f0230303ef6a33d3bcb4393c29efa976",
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
      "end": 35,
      "text": "INFORMACIÓN CICLO ESCOLAR 2022-2023"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 33,
      "text": "ESTIMADA FAMILIA Torres Aguilar:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 33,
      "end": 34,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 34,
      "end": 149,
      "text": "Buenos días, por este medio le envío la información general de Colegio Monteverde para el ciclo escolar 2022–2023.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 149,
      "end": 150,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 150,
      "end": 241,
      "text": "Agradecemos su interés y confianza para que su hijo(a) forme parte de nuestra institución.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 241,
      "end": 242,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 242,
      "end": 293,
      "text": "Esperamos que esta información sea de su utilidad.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 293,
      "end": 294,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 294,
      "end": 446,
      "text": "Nos remitimos a sus órdenes para agendar una cita presencial y brindarle información académica, costos adicionales, así como del proceso de Admisiones.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 446,
      "end": 447,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 447,
      "end": 502,
      "text": "Le invitamos cordialmente a visitar nuestra página web\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 502,
      "end": 535,
      "text": "https://colegiomonteverde.edu.mx\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 535,
      "end": 536,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 536,
      "end": 591,
      "text": "donde encontrará la galería de nuestras instalaciones.\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 591,
      "end": 592,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 592,
      "end": 652,
      "text": "Sin más por el momento, quedo en espera de sus indicaciones."
    }
  ],
  "passA": {
    "requestSha256": "ede03d0d173b83e619e3817ea83cad6e9cd89bba80a4fcf1c4b33b12d20c380f",
    "capturedAt": "2026-09-22T03:52:08.370Z",
    "elapsedMs": 596.1540549999918,
    "successfulAttemptElapsedMs": 595.2754980000027,
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
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.49
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.18,
            "active_request": 0.82,
            "educational_or_quoted": 0
          },
          "confidence": 0.76
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.09,
            "no_sensitive_action": 0.91
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 5059,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "07df4e3db816c311858ed9b7878dc7081721757c2f2383b8ff7fc39aec9648a4",
    "capturedAt": "2026-09-22T03:52:08.875Z",
    "elapsedMs": 503.30104599997867,
    "successfulAttemptElapsedMs": 502.30380100000184,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:9": 0.01,
            "body:8": 0.38,
            "body:3": 0,
            "body:6": 0,
            "NONE": 0.05,
            "body:1": 0,
            "body:13": 0,
            "body:12": 0,
            "body:0": 0.01,
            "subject:0": 0,
            "body:11": 0,
            "body:15": 0,
            "body:10": 0.01,
            "body:14": 0,
            "body:2": 0.48,
            "body:7": 0,
            "body:5": 0,
            "body:4": 0.060000000000000005
          },
          "confidence": 0.44
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:9": 0,
            "body:8": 0.81,
            "body:3": 0,
            "body:6": 0,
            "NONE": 0.07,
            "body:1": 0,
            "body:13": 0,
            "body:12": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:11": 0.05,
            "body:15": 0,
            "body:10": 0.07,
            "body:14": 0,
            "body:2": 0,
            "body:7": 0,
            "body:5": 0,
            "body:4": 0
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 1979,
        "output_tokens": 382
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1101.2804750000068,
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
        "status": "selected",
        "segmentId": "body:8"
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
    "seq": 968,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-199",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:07.775Z",
    "offsetMs": 0.5814060000120662
  },
  {
    "seq": 969,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-199",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:08.370Z",
    "offsetMs": 596.1532970000117,
    "elapsedMs": 595.2754980000027,
    "outcome": "success"
  },
  {
    "seq": 970,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-199",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:08.372Z",
    "offsetMs": 598.2244720000017
  },
  {
    "seq": 971,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-199",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:08.875Z",
    "offsetMs": 1100.9926350000023,
    "elapsedMs": 502.30380100000184,
    "outcome": "success"
  },
  {
    "seq": 972,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-199",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:08.875Z",
    "offsetMs": 1101.3432430000103,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d623adbc96d09471ea359fce6c99a9e71db00b689427509dba85dba49ef5bbfe";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":969},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":971},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":972}} as const;
export const projectionSha256 = "3d777aaea895779d0ea4c9ab08f8e240ad0e10e3e0bd7ca7945666a80f3553b6";
