import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-069",
  "inputSha256": "70e98f30f2c06f3fd8770ea193ab7de9763ed1b10077badbcfe14978d8045790",
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
      "end": 48,
      "text": "Regreso a semáforo sanitario color rojo en MyOwn"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 48,
      "text": "Santa María, Hidalgo a 11 de diciembre de 2025.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 48,
      "end": 49,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 49,
      "end": 80,
      "text": "A toda la comunidad de CIETEC:\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 80,
      "end": 81,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 81,
      "end": 317,
      "text": "Con el fin de preservar la salud y el bienestar de los trabajadores de CIETEC, y ante el aumento en el número de contagios de COVID, he decidido pasar a la condición de semáforo sanitario color rojo en CIETEC a partir del día lunes 14. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 317,
      "end": 392,
      "text": "A partir del lunes 14 se reduce al mínimo el ingreso de personal a CIETEC. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 392,
      "end": 506,
      "text": "Cada dirección definirá el personal mínimo que estará ingresando en los últimos tres días laborables de este año. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 506,
      "end": 706,
      "text": "A las coordinaciones les pido redefinan y acuerden con Roberto López los investigadores, estudiantes, y técnicos que seguirán ingresando para concluir los proyectos y tesis comprometidos previamente.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 706,
      "end": 707,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 707,
      "end": 807,
      "text": "Reitero la petición de observar al máximo las medidas de seguridad sanitaria al interior de CIETEC.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 807,
      "end": 808,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 808,
      "end": 825,
      "text": "Saludos, Rodolfo\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 825,
      "end": 826,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 826,
      "end": 830,
      "text": "Dr. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 830,
      "end": 841,
      "text": "Rodolfo E. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 841,
      "end": 852,
      "text": "Jiménez P. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 852,
      "end": 875,
      "text": "Director General CIETEC"
    }
  ],
  "passA": {
    "requestSha256": "dc9f2f6d07e1eb896dce094c4c71deec063374941db63ed7b724e2f3fa1472a7",
    "capturedAt": "2026-09-22T03:49:35.228Z",
    "elapsedMs": 623.7836700000043,
    "successfulAttemptElapsedMs": 622.641220999998,
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
          "noul": 0.02
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
          "noul": 0.57
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.1,
            "educational_or_quoted": 0,
            "active_request": 0.9,
            "mixed_or_unclear": 0
          },
          "confidence": 0.86
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0,
            "no_sensitive_action": 1,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5109,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "204a5064d2afb46a0be85f5db1b2dda3bab57125cd89f7637827d4efc8823bba",
    "capturedAt": "2026-09-22T03:49:35.860Z",
    "elapsedMs": 628.0923679999978,
    "successfulAttemptElapsedMs": 626.6523809999926,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:7": 0.58,
            "subject:0": 0,
            "body:9": 0.02,
            "body:15": 0,
            "body:16": 0,
            "body:10": 0,
            "body:5": 0.03,
            "body:1": 0,
            "body:0": 0,
            "body:11": 0,
            "body:14": 0,
            "body:13": 0,
            "body:6": 0.16,
            "body:3": 0,
            "NONE": 0.18000000000000002,
            "body:2": 0,
            "body:12": 0,
            "body:8": 0,
            "body:4": 0.03
          },
          "confidence": 0.54
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:16",
          "probabilities": {
            "body:7": 0.05,
            "subject:0": 0,
            "body:9": 0.01,
            "body:15": 0,
            "body:16": 0.88,
            "body:10": 0,
            "body:1": 0,
            "body:5": 0,
            "body:0": 0,
            "body:11": 0,
            "body:14": 0,
            "body:13": 0.01,
            "body:6": 0,
            "body:3": 0,
            "NONE": 0.01,
            "body:2": 0,
            "body:12": 0,
            "body:8": 0,
            "body:4": 0.04
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 2160,
        "output_tokens": 400
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1256.3866070000076,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:16"
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
    "seq": 336,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-069",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:34.604Z",
    "offsetMs": 0.7905650000029709
  },
  {
    "seq": 337,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-069",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:35.227Z",
    "offsetMs": 623.7917949999974,
    "elapsedMs": 622.641220999998,
    "outcome": "success"
  },
  {
    "seq": 338,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-069",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:35.232Z",
    "offsetMs": 628.7077240000071
  },
  {
    "seq": 339,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-069",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:35.859Z",
    "offsetMs": 1255.969735999999,
    "elapsedMs": 626.6523809999926,
    "outcome": "success"
  },
  {
    "seq": 340,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-069",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:35.860Z",
    "offsetMs": 1256.476806000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "51588f5d51cb9d3612f8437fbedf0e3f1de3a5e394da5eb4a71908a299f15019";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":337},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":339},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":340}} as const;
export const projectionSha256 = "597e88b5b0ece7c9febbb3b7f1345e3952dfb8d28f0bc3ad630cdc363d32b295";
