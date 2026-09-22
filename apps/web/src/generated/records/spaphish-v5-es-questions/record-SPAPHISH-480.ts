import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-480",
  "inputSha256": "f047ff794db46923624b0fcff770cd175e3e7585a6f9a7690010f95308b7a1a6",
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
      "end": 33,
      "text": "ESTÍMULO DEL SNI – DICIEMBRE 2025"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 31,
      "text": "Estimadas y estimados colegas:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 31,
      "end": 32,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 32,
      "end": 259,
      "text": "En aras de su tranquilidad y certidumbre al cierre de este complicado año, el Gobierno de la Nación ha hecho el esfuerzo de adelantar el pago de SNB relativo a noviembre, que tendrán disponible a partir del próximo viernes 28. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 259,
      "end": 591,
      "text": "También les comunico que, como hasta ahora, se mantendrá el estímulo económico a todas y todos los colegas, incluidos quienes laboran en universidades privadas, cuyos convenios individuales se formalizaron bajo el auspicio de convenios institucionales vigentes con el CNBE, aún cuando los de las instituciones puedan haber vencido. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 591,
      "end": 823,
      "text": "Como saben, estos acuerdos con instituciones privadas tendrán un carácter novedoso, que iremos estableciendo con cada una de las Instituciones involucradas; siempre respetando los derechos adquiridos de nuestras y nuestros colegas. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 823,
      "end": 970,
      "text": "El objetivo será siempre fortalecer las capacidades de desarrollo científico y tecnológico priorizando el bienestar social y el cuidado ambiental.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 970,
      "end": 971,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 971,
      "end": 1061,
      "text": "Aprovecho esta ocasión para transmitirles los mejores deseos para ustedes y sus familias.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1061,
      "end": 1062,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1062,
      "end": 1075,
      "text": "Atentamente,\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1075,
      "end": 1076,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1076,
      "end": 1081,
      "text": "Dra. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1081,
      "end": 1107,
      "text": "Laura Sofía Jiménez López\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1107,
      "end": 1108,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1108,
      "end": 1134,
      "text": "Directora General del CNBE"
    }
  ],
  "passA": {
    "requestSha256": "5c6fc0c439dafab579bce9e8ba2295b15a8a78b8587ac20fb2b3caa59b949af8",
    "capturedAt": "2026-09-22T03:57:44.904Z",
    "elapsedMs": 636.4825219999766,
    "successfulAttemptElapsedMs": 634.8839150000131,
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
          "noul": 0.03
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
          "noul": 0.04
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
          "noul": 0.04
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 1,
            "active_request": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0,
            "no_sensitive_action": 1,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5146,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "a1e5b5400c67b0a439c92f7b7e4847359b9809411756157ff1490ddd64ce6176",
    "capturedAt": "2026-09-22T03:57:45.437Z",
    "elapsedMs": 530.2689549999777,
    "successfulAttemptElapsedMs": 528.7254569999641,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:14",
          "probabilities": {
            "body:5": 0,
            "body:4": 0,
            "body:11": 0.03,
            "body:6": 0,
            "body:12": 0,
            "body:3": 0.02,
            "body:13": 0,
            "NONE": 0.03,
            "body:7": 0,
            "body:9": 0,
            "body:2": 0.04,
            "body:0": 0,
            "body:10": 0,
            "body:14": 0.88,
            "body:8": 0,
            "body:1": 0,
            "subject:0": 0
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 1389,
        "output_tokens": 182
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1169.5732480000006,
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
        "status": "selected",
        "segmentId": "body:14"
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
    "seq": 2357,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-480",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:44.269Z",
    "offsetMs": 1.3505240000085905
  },
  {
    "seq": 2358,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-480",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:44.904Z",
    "offsetMs": 636.4827270000242,
    "elapsedMs": 634.8839150000131,
    "outcome": "success"
  },
  {
    "seq": 2359,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-480",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:44.908Z",
    "offsetMs": 640.3965470000403
  },
  {
    "seq": 2360,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-480",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:45.437Z",
    "offsetMs": 1169.3857169999974,
    "elapsedMs": 528.7254569999641,
    "outcome": "success"
  },
  {
    "seq": 2361,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-480",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:45.437Z",
    "offsetMs": 1169.6198009999935,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "dd8e827cdf226bb17cb119b24dc3dfe18e2977e649f03885509f3434fcb7ff61";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2358},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2360},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2361}} as const;
export const projectionSha256 = "4d028d5610c65061e40b1eeafdea38878949e2d937280128d36a0b056f608057";
