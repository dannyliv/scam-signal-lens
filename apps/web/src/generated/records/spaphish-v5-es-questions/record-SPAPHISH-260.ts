import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-260",
  "inputSha256": "5531839674b2f4304ace06cfdac74431e64fddc79e779df80e422c02315eac7b",
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
      "end": 25,
      "text": "Pancracio: ¡Lo sentimos! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 25,
      "end": 51,
      "text": "¡Suspenderemos su cuenta! "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 51,
      "end": 102,
      "text": "¡Todos los dispositivos están fuera de protección! "
    },
    {
      "id": "subject:3",
      "source": "subject",
      "start": 102,
      "end": 139,
      "text": "Se filtró información de privacidad. "
    },
    {
      "id": "subject:4",
      "source": "subject",
      "start": 139,
      "end": 160,
      "text": "¡Por favor, responda!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 27,
      "text": "McAfeeâ„¢ Juntos es poder.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 27,
      "end": 28,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 28,
      "end": 74,
      "text": "ÚLTIMO RECORDATORIO: SE NECESITA CONFIRMACIÓN\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 74,
      "end": 140,
      "text": "Su s.u.s.c.r.i.p.c.i.ó.n a McAfee Total Protection puede end soon\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 140,
      "end": 243,
      "text": "Una vez pasada la fecha de finalización, nuestros dispositivos... volverse vulnerable a los hackers...\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 243,
      "end": 244,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 244,
      "end": 274,
      "text": "Fecha de finalización: Pronto\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 274,
      "end": 275,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 275,
      "end": 319,
      "text": "Mantenga sus dispositivos seguros AHORA >>>\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 319,
      "end": 370,
      "text": "âœ“Disponible : (-95%) Descuento de renovación hoy\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 370,
      "end": 371,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 371,
      "end": 443,
      "text": "Renueva tu SÍuÍbÍsÍcÍrÍiÍpÍtÍiÍoÍnÍ haciendo clic en el botón de abajo:\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 443,
      "end": 444,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 444,
      "end": 458,
      "text": "Activar AHORA\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 458,
      "end": 459,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 459,
      "end": 574,
      "text": "Nota:Si no hay ningún SÍuÍbÍsÍcÍrÍiÍpÍtÍiÍoÍnÍ registrado, su cuenta podría ser Marcada como inactiva en 48 horas.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 574,
      "end": 575,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 575,
      "end": 608,
      "text": "Si quierescancelar la suscripción"
    }
  ],
  "passA": {
    "requestSha256": "63b4cf21b60377b58bfe4dd029f9855e01bcff786cc79a168661faa2ad025ae5",
    "capturedAt": "2026-09-22T03:53:22.446Z",
    "elapsedMs": 673.1062519999687,
    "successfulAttemptElapsedMs": 671.6982619999908,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.37
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.81
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.44
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
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
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.14,
            "sender_supplied": 0.84,
            "independently_established": 0
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 5130,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "8774bcf2298eb7f16213a5c4a77b103ec8fdb2aff9dad3b3d424aac3dbd5abf8",
    "capturedAt": "2026-09-22T03:53:23.159Z",
    "elapsedMs": 708.8190680000116,
    "successfulAttemptElapsedMs": 707.5842790000024,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.77,
            "body:16": 0,
            "subject:4": 0.02,
            "body:12": 0,
            "body:17": 0,
            "body:4": 0,
            "body:15": 0,
            "body:10": 0,
            "body:7": 0,
            "body:2": 0,
            "body:9": 0.01,
            "body:5": 0,
            "body:6": 0,
            "subject:2": 0,
            "body:1": 0,
            "subject:3": 0,
            "body:14": 0,
            "subject:1": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:8": 0,
            "body:13": 0.09999999999999999,
            "body:11": 0.09999999999999999,
            "body:0": 0
          },
          "confidence": 0.75
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "NONE": 0.03,
            "body:16": 0,
            "subject:4": 0,
            "body:12": 0,
            "body:17": 0,
            "body:4": 0,
            "body:15": 0,
            "body:10": 0,
            "body:7": 0,
            "body:2": 0,
            "body:9": 0.22,
            "body:5": 0,
            "body:6": 0,
            "subject:2": 0,
            "subject:3": 0,
            "body:1": 0,
            "body:11": 0.6,
            "subject:1": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:8": 0,
            "body:13": 0.15000000000000002,
            "body:14": 0,
            "body:0": 0
          },
          "confidence": 0.58
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:15",
          "probabilities": {
            "NONE": 0,
            "body:16": 0,
            "subject:4": 0,
            "body:12": 0,
            "body:11": 0,
            "body:4": 0.02,
            "body:15": 0.76,
            "body:10": 0,
            "body:7": 0.01,
            "body:2": 0.02,
            "body:9": 0.01,
            "body:5": 0,
            "body:6": 0.01,
            "body:1": 0,
            "subject:3": 0,
            "subject:2": 0.01,
            "body:14": 0,
            "subject:1": 0.11,
            "subject:0": 0,
            "body:17": 0,
            "body:8": 0.01,
            "body:13": 0.04,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.74
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.38,
            "body:16": 0,
            "subject:4": 0.02,
            "body:12": 0.01,
            "body:11": 0.01,
            "body:4": 0.01,
            "body:15": 0.02,
            "body:10": 0,
            "body:7": 0.01,
            "body:2": 0.03,
            "body:9": 0.01,
            "body:5": 0.01,
            "body:6": 0,
            "subject:3": 0.04,
            "subject:2": 0.01,
            "body:1": 0,
            "body:14": 0,
            "subject:1": 0.17,
            "subject:0": 0.02,
            "body:17": 0.01,
            "body:8": 0.01,
            "body:13": 0.01,
            "body:3": 0.05,
            "body:0": 0.17
          },
          "confidence": 0.36
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.81,
            "body:16": 0,
            "body:14": 0,
            "body:12": 0,
            "subject:4": 0.04,
            "body:4": 0,
            "body:15": 0,
            "body:10": 0,
            "body:7": 0,
            "body:2": 0,
            "body:9": 0,
            "body:5": 0,
            "body:6": 0,
            "subject:2": 0,
            "subject:3": 0,
            "body:1": 0,
            "body:11": 0.08,
            "subject:1": 0,
            "subject:0": 0,
            "body:17": 0.01,
            "body:8": 0.02,
            "body:13": 0.03,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 5110,
        "output_tokens": 1218
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1386.24303100002,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:15"
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
    "seq": 1269,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-260",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:21.774Z",
    "offsetMs": 1.0687410000246018
  },
  {
    "seq": 1270,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-260",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:22.446Z",
    "offsetMs": 673.1065560000134,
    "elapsedMs": 671.6982619999908,
    "outcome": "success"
  },
  {
    "seq": 1271,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-260",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:22.450Z",
    "offsetMs": 677.8097469999921
  },
  {
    "seq": 1272,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-260",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:23.159Z",
    "offsetMs": 1385.8545879999874,
    "elapsedMs": 707.5842790000024,
    "outcome": "success"
  },
  {
    "seq": 1273,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-260",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:23.159Z",
    "offsetMs": 1386.3043440000038,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0e7f1535f423224ca058abe6ecb2925ee736b328046b6c915b66fd27d65c8a8c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1270},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1272},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1273}} as const;
export const projectionSha256 = "399a651c78952c73a8c555e743ec2d02ce8c7f9aa38fb0f8710e8250350b1da9";
