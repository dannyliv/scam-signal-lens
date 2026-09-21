import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-260",
  "inputSha256": "5531839674b2f4304ace06cfdac74431e64fddc79e779df80e422c02315eac7b",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
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
    "requestSha256": "20e1f407eae0092f55a0c3687a69216a979217c5c4f42a49587452f161d836a6",
    "capturedAt": "2026-09-20T23:45:18.724Z",
    "elapsedMs": 150.640916999997,
    "successfulAttemptElapsedMs": 149.53562500000407,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.29
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.84
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
          "noul": 0.81
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.52
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.04,
            "sender_supplied": 0.95,
            "independently_established": 0,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 3680,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "39e2162cb98b0de0c93714fdf6229807cf1076072070205364508cdba531ee6a",
    "capturedAt": "2026-09-21T00:57:25.050Z",
    "elapsedMs": 115.94004200000018,
    "successfulAttemptElapsedMs": 113.3065000000006,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:10": 0,
            "subject:2": 0,
            "body:11": 0.13,
            "body:3": 0,
            "body:7": 0,
            "body:4": 0,
            "body:16": 0,
            "subject:0": 0,
            "body:13": 0.08,
            "body:2": 0,
            "NONE": 0.77,
            "subject:3": 0,
            "body:14": 0,
            "body:1": 0,
            "body:6": 0,
            "subject:1": 0,
            "body:12": 0,
            "body:8": 0,
            "body:15": 0,
            "body:17": 0,
            "body:5": 0,
            "body:9": 0.01,
            "subject:4": 0.01
          },
          "confidence": 0.75
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "body:7": 0,
            "body:10": 0,
            "body:0": 0,
            "body:11": 0.64,
            "body:3": 0,
            "subject:2": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:16": 0,
            "body:13": 0.12,
            "body:12": 0,
            "NONE": 0.02,
            "subject:3": 0,
            "body:14": 0,
            "body:6": 0,
            "body:1": 0,
            "subject:1": 0,
            "body:2": 0,
            "body:8": 0,
            "body:15": 0,
            "body:17": 0,
            "body:5": 0,
            "body:9": 0.22,
            "subject:4": 0
          },
          "confidence": 0.62
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:15",
          "probabilities": {
            "body:7": 0.01,
            "body:10": 0,
            "body:0": 0,
            "body:11": 0,
            "body:3": 0,
            "body:17": 0,
            "body:4": 0.01,
            "body:16": 0,
            "subject:0": 0,
            "body:13": 0.03,
            "subject:2": 0.01,
            "NONE": 0,
            "subject:3": 0,
            "body:14": 0,
            "body:1": 0,
            "body:6": 0,
            "subject:1": 0.14,
            "body:12": 0,
            "body:8": 0.01,
            "body:15": 0.73,
            "body:5": 0,
            "body:2": 0.04,
            "body:9": 0.01,
            "subject:4": 0.01
          },
          "confidence": 0.71
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.13,
            "body:10": 0,
            "body:7": 0.01,
            "body:11": 0.02,
            "body:3": 0.08,
            "body:2": 0.05,
            "body:4": 0.01,
            "subject:0": 0.02,
            "body:16": 0,
            "body:13": 0.01,
            "subject:2": 0.01,
            "NONE": 0.4,
            "subject:3": 0.06,
            "body:14": 0,
            "body:6": 0,
            "body:1": 0,
            "subject:1": 0.1,
            "body:12": 0.01,
            "body:8": 0.01,
            "body:15": 0.04,
            "body:5": 0.01,
            "body:17": 0.01,
            "body:9": 0,
            "subject:4": 0.02
          },
          "confidence": 0.37
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:10": 0,
            "body:7": 0,
            "body:11": 0.08,
            "body:3": 0,
            "subject:2": 0,
            "body:4": 0,
            "body:16": 0,
            "subject:0": 0,
            "body:13": 0.060000000000000005,
            "body:17": 0.01,
            "NONE": 0.79,
            "subject:3": 0,
            "body:14": 0,
            "body:1": 0,
            "body:6": 0,
            "subject:1": 0,
            "body:2": 0,
            "body:8": 0.02,
            "body:15": 0,
            "body:5": 0,
            "body:12": 0,
            "body:9": 0,
            "subject:4": 0.03
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 4578,
        "output_tokens": 1218
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 441.90091600000414,
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
    "seq": 1273,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-260",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:18.574Z",
    "offsetMs": 0.6864579999964917
  },
  {
    "seq": 1274,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-260",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:18.724Z",
    "offsetMs": 150.64204199999222,
    "elapsedMs": 149.53562500000407,
    "outcome": "success"
  },
  {
    "seq": 1275,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-260",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:18.726Z",
    "offsetMs": 152.89712500000314
  },
  {
    "seq": 1276,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-260",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:18.897Z",
    "offsetMs": 323.81820799999696,
    "elapsedMs": 170.38695800000278,
    "outcome": "success"
  },
  {
    "seq": 1277,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-260",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:18.897Z",
    "offsetMs": 323.9931249999936,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2656,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-260",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:24.936Z",
    "offsetMs": 3.137624999999389
  },
  {
    "seq": 2657,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-260",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:25.050Z",
    "offsetMs": 117.07137499999953,
    "elapsedMs": 113.3065000000006,
    "outcome": "success"
  },
  {
    "seq": 2658,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-260",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:25.050Z",
    "offsetMs": 117.89116599999943,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "4a3a041dc4c872d2062678386110f6383692d4331e2ff034c01e01d94d561782";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1274},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2657},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2658}} as const;
export const projectionSha256 = "aa0723edcd2ddcbd894ed28aa97c7492174026032fe080c5fc2c16cfd659e659";
