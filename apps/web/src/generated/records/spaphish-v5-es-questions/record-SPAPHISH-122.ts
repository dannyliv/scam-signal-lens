import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-122",
  "inputSha256": "a7f197efab2a719306d1ebb871c4bf77aeb7c836ee712c29a62efdb1612974dd",
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
      "end": 22,
      "text": "Corrección de facturas"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 24,
      "text": "Buenas noches estimada:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 24,
      "end": 25,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 25,
      "end": 162,
      "text": "Soy cliente de Clínica de Análisis y Diagnóstico Avanzado donde regularmente acudo para realizar estudios clínicos míos y de mi familia. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 162,
      "end": 317,
      "text": "Sin embargo, en las facturas que me han emitido por concepto de estudios realizados hay errores que hacen que no las pueda emplear para deducir impuestos. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 317,
      "end": 471,
      "text": "Agradecería que se solucionaran estos detalles y se emitieran las facturas correctas, a fin de poderlas usar para deducir los impuestos correspondientes.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 471,
      "end": 472,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 472,
      "end": 512,
      "text": "Adjunto envío las facturas en cuestión. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 512,
      "end": 776,
      "text": "El error, que me notificó mi asesor fiscal, está en el \"Uso del Comprobante\", que se indicó como \"Adquisición de mercancías\" cuando debió ser \"Servicios de salud y hospitalarios\", como lo he indicado cuando he entregado mis datos fiscales para generar la factura. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 776,
      "end": 883,
      "text": "Agradecería mucho, por favor, que se pudiera solucionar este error y emitir las facturas correspondientes.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 883,
      "end": 884,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 884,
      "end": 931,
      "text": "Quedo atento a sus comentarios e indicaciones.\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 931,
      "end": 932,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 932,
      "end": 948,
      "text": "Muchas gracias! "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 948,
      "end": 965,
      "text": "Saludos cordiales"
    }
  ],
  "passA": {
    "requestSha256": "93b6e422f19399b20567b598ca309e328cf3b58f0196ad65e4ccf39662012865",
    "capturedAt": "2026-09-22T03:50:38.846Z",
    "elapsedMs": 617.6733279999753,
    "successfulAttemptElapsedMs": 616.767955999996,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.01
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
          "noul": 0.4
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
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
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.99,
            "independently_established": 0.01,
            "mixed_or_unknown": 0,
            "sender_supplied": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 5127,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "f5a67fa6b4b3bb80de800513f406e760ddab012ab04769887455af4823a046f9",
    "capturedAt": "2026-09-22T03:50:39.420Z",
    "elapsedMs": 572.361459000007,
    "successfulAttemptElapsedMs": 571.6313300000038,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:10": 0,
            "NONE": 0.14,
            "body:4": 0,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0.23,
            "body:7": 0.63,
            "body:8": 0,
            "subject:0": 0,
            "body:11": 0,
            "body:5": 0,
            "body:13": 0,
            "body:3": 0,
            "body:6": 0,
            "body:12": 0,
            "body:9": 0
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 1335,
        "output_tokens": 171
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1191.7362759999814,
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
    "seq": 592,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-122",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:38.229Z",
    "offsetMs": 0.613147999974899
  },
  {
    "seq": 593,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-122",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:38.846Z",
    "offsetMs": 617.673168999987,
    "elapsedMs": 616.767955999996,
    "outcome": "success"
  },
  {
    "seq": 594,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-122",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:38.848Z",
    "offsetMs": 619.6407989999861
  },
  {
    "seq": 595,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-122",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:39.420Z",
    "offsetMs": 1191.530031000002,
    "elapsedMs": 571.6313300000038,
    "outcome": "success"
  },
  {
    "seq": 596,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-122",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:39.420Z",
    "offsetMs": 1191.7797299999802,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b925b40db040670adfc9aba66978ea578d88d787c263e766ffc5f798640f3128";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":593},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":595},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":596}} as const;
export const projectionSha256 = "233b632b1fcdad85cf601d4485cbeb1d703ba4d342c92fb3d250df3d46ac30ab";
