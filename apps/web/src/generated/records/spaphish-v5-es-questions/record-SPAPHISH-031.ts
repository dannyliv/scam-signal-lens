import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-031",
  "inputSha256": "fe4070aad8ea38096e4594c020100938d893683b406f663606f85e16c6bab5c3",
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
      "end": 52,
      "text": "Invitación para colaborar-Universidad Iberoamericana"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 15,
      "text": "Apreciable Dr. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 15,
      "end": 30,
      "text": "Marcelo Rivera\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 30,
      "end": 31,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 31,
      "end": 128,
      "text": "Le saludo con gusto y espero que usted y su familia se encuentren muy bien en esta contingencia. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 128,
      "end": 260,
      "text": "Soy Claudia Herrera y le escribo a nombre del Comité Editorial de la revista Intertextualia http://intertextualia.lumen-campus.net/\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 260,
      "end": 458,
      "text": " (ISSN 2007-5316), publicada por la Universidad Arcadia del Bajío, para invitarle a colaborar con nosotros como dictaminador del artículo titulado Industria 4.0: Big data e inteligencia artificial.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 458,
      "end": 459,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 459,
      "end": 663,
      "text": "Su formación académica y experiencia profesional nos ayudaría muchísimo a saber si dicho artículo amerita, o no, ser publicado en el núm. 35 de la revista; nos honraría, pues, que aceptara la invitación.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 663,
      "end": 664,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 664,
      "end": 903,
      "text": "Si acepta, tendrá 15 días hábiles para emitir su resolución (tiempo establecido por las políticas editoriales de la universidad), pero si requiere de unos días más, con gusto podemos esperarle, deseamos que usted dictamine dicho artículo. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 903,
      "end": 984,
      "text": "Le enviaré el texto así como el formato de dictaminación en cuanto usted acepte.\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 984,
      "end": 985,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 985,
      "end": 1143,
      "text": "Una vez que tengamos el resultado de su evaluación, le entregaré (vía correo electrónico) la constancia para acreditar, formalmente, el apoyo que nos brindó.\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1143,
      "end": 1144,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1144,
      "end": 1263,
      "text": "Ojalá que su agenda le permita colaborar con nosotros; si no le es posible, ¿podría recomendarme a uno de sus colegas?\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1263,
      "end": 1264,
      "text": "\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 1264,
      "end": 1312,
      "text": "Le agradezco y quedo en espera de su respuesta.\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 1312,
      "end": 1325,
      "text": "Cordialmente\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 1325,
      "end": 1368,
      "text": "[cid:0dfad522-55e2-468b-bad3-6ca76c10486f]\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 1368,
      "end": 1369,
      "text": "\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 1369,
      "end": 1381,
      "text": "[Disclaimer]"
    }
  ],
  "passA": {
    "requestSha256": "3cc941404e4880e6a2f0105603f9298fe94c337490eb155fae240a78ed5be05f",
    "capturedAt": "2026-09-22T03:48:48.511Z",
    "elapsedMs": 634.5343900000007,
    "successfulAttemptElapsedMs": 633.8018139999986,
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
          "noul": 0.29
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.95,
            "sender_supplied": 0.05,
            "independently_established": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 5274,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "9716d14dc6cfcaa9efef515693c28050f745a78b4c7aeadc782dd76a34791fc1",
    "capturedAt": "2026-09-22T03:48:49.077Z",
    "elapsedMs": 564.3345479999989,
    "successfulAttemptElapsedMs": 563.7227540000022,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:2": 0,
            "body:10": 0,
            "body:18": 0,
            "body:8": 0,
            "subject:0": 0.01,
            "body:0": 0,
            "body:13": 0,
            "body:16": 0.02,
            "body:4": 0,
            "body:20": 0,
            "body:9": 0.72,
            "body:6": 0,
            "NONE": 0.25,
            "body:11": 0,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0,
            "body:7": 0,
            "body:12": 0,
            "body:17": 0,
            "body:19": 0,
            "body:14": 0,
            "body:15": 0
          },
          "confidence": 0.7
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0,
            "body:10": 0,
            "body:19": 0,
            "body:18": 0,
            "subject:0": 0.01,
            "body:0": 0,
            "body:13": 0,
            "body:16": 0,
            "body:4": 0.83,
            "body:20": 0,
            "body:9": 0,
            "body:6": 0,
            "NONE": 0,
            "body:11": 0,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0.14,
            "body:7": 0.01,
            "body:12": 0,
            "body:17": 0,
            "body:8": 0,
            "body:14": 0.01,
            "body:15": 0
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 2761,
        "output_tokens": 479
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1200.5432870000004,
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
        "status": "selected",
        "segmentId": "body:9"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:4"
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
    "seq": 149,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-031",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:47.877Z",
    "offsetMs": 0.46064599999954225
  },
  {
    "seq": 150,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-031",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:48.511Z",
    "offsetMs": 634.5347750000001,
    "elapsedMs": 633.8018139999986,
    "outcome": "success"
  },
  {
    "seq": 151,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-031",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:48.513Z",
    "offsetMs": 636.1830179999961
  },
  {
    "seq": 152,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-031",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:49.077Z",
    "offsetMs": 1200.2315000000017,
    "elapsedMs": 563.7227540000022,
    "outcome": "success"
  },
  {
    "seq": 153,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-031",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:49.077Z",
    "offsetMs": 1200.6081330000015,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "96e06274f31cdd948efe65a9cd87a82e2154421757af8fbc66033d904a50a4d2";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":150},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":152},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":153}} as const;
export const projectionSha256 = "c29a3ce9644c4fbf515cfc09c0b1060f87c7dfc696d4bfd971ce1f7bd4637d93";
