import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-044",
  "inputSha256": "71480f99f4a6437baac443e6ab3c868ca0370d48b61e7f796f004f4727bb6095",
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
      "end": 53,
      "text": "Convocatoria de la Universidad Autónoma de Tamaulipas"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 26,
      "text": "Estimados Investigadores,\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 26,
      "end": 27,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 27,
      "end": 234,
      "text": "Compartimos con ustedes la convocatoria de la Universidad Regional del Norte, para ocupar plazas disponibles de profesores de Tiempo Completo en la Facultad de Ciencias Agropecuarias y Desarrollo Rural “Dr. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 234,
      "end": 258,
      "text": "Roberto Trejo Sánchez”. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 258,
      "end": 331,
      "text": "En documento anexo encontrará la información correspondiente a la misma.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 331,
      "end": 332,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 332,
      "end": 442,
      "text": "Esperando que la información sea de su interés, les enviamos un cordial saludo y les agradecemos la difusión.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 442,
      "end": 443,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 443,
      "end": 566,
      "text": "NOTA: No se trata de un Nombramiento Especial, la información se comparte a petición de la Universidad Regional del Norte.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 566,
      "end": 567,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 567,
      "end": 623,
      "text": "Atentamente, Dirección de Proyectos Especiales del CNBE\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 623,
      "end": 624,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 624,
      "end": 635,
      "text": "[Firma.jpg]"
    }
  ],
  "passA": {
    "requestSha256": "240e61c753e71d943d18d2da9baad8dd3469c15817cabe7a6dcf2835e9db4de2",
    "capturedAt": "2026-09-22T03:49:04.123Z",
    "elapsedMs": 718.3166290000008,
    "successfulAttemptElapsedMs": 716.8814390000043,
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
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.06
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
            "informational": 0.35,
            "active_request": 0.65,
            "mixed_or_unclear": 0
          },
          "confidence": 0.52
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.99,
            "sender_supplied": 0.01,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 5030,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "982e35129d06b076518f05086b4ab82875e4c6e7fcc9eb15f35b8134d987d9b4",
    "capturedAt": "2026-09-22T03:49:04.696Z",
    "elapsedMs": 571.5305660000013,
    "successfulAttemptElapsedMs": 570.6454139999987,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:3": 0,
            "body:1": 0,
            "body:9": 0,
            "body:0": 0,
            "body:11": 0,
            "subject:0": 0.01,
            "body:7": 0,
            "body:12": 0,
            "body:5": 0,
            "body:4": 0,
            "body:2": 0.04,
            "NONE": 0.01,
            "body:10": 0.9,
            "body:6": 0.03,
            "body:8": 0.01
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 1126,
        "output_tokens": 162
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1291.4289649999992,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:10"
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
    "seq": 212,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-044",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:03.405Z",
    "offsetMs": 0.8703229999955511
  },
  {
    "seq": 213,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-044",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:04.122Z",
    "offsetMs": 718.3187350000007,
    "elapsedMs": 716.8814390000043,
    "outcome": "success"
  },
  {
    "seq": 214,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-044",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:04.124Z",
    "offsetMs": 720.1070760000002
  },
  {
    "seq": 215,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-044",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:04.695Z",
    "offsetMs": 1291.229913999996,
    "elapsedMs": 570.6454139999987,
    "outcome": "success"
  },
  {
    "seq": 216,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-044",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:04.696Z",
    "offsetMs": 1291.4751649999962,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e845a09be07642cf23e199aedc84346ce067b3d75cf5a3c4893e0dc6ed53fde0";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":213},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":215},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":216}} as const;
export const projectionSha256 = "23fece7fd9f216ce80f0080e5efa7256fba953e5efae7ae6c4fc59039ab11588";
