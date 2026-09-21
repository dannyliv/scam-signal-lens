import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-031",
  "inputSha256": "fe4070aad8ea38096e4594c020100938d893683b406f663606f85e16c6bab5c3",
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
    "requestSha256": "a061a862d515b67967bcdadd8a5375979cad934bed3a16c9ed033cae2d7b86ff",
    "capturedAt": "2026-09-20T23:44:01.441Z",
    "elapsedMs": 184.2079589999994,
    "successfulAttemptElapsedMs": 182.6708749999998,
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
          "noul": 0.49
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "mixed_or_unclear": 0,
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
            "no_sensitive_action": 0.9400000000000001,
            "sender_supplied": 0.06,
            "independently_established": 0
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 3824,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "2030bde2441facfa75d6b85477ffa9f1b92d55f60bd79681be08d1be434629df",
    "capturedAt": "2026-09-20T23:44:01.564Z",
    "elapsedMs": 120.69608299999891,
    "successfulAttemptElapsedMs": 119.33929200000057,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:15": 0,
            "body:0": 0,
            "body:2": 0,
            "body:13": 0,
            "body:16": 0.01,
            "body:17": 0,
            "body:3": 0,
            "body:4": 0,
            "body:19": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:12": 0,
            "body:6": 0,
            "body:8": 0,
            "body:20": 0,
            "body:10": 0,
            "body:1": 0,
            "body:18": 0,
            "body:9": 0.83,
            "body:11": 0,
            "NONE": 0.16,
            "body:7": 0,
            "body:14": 0
          },
          "confidence": 0.81
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:15": 0,
            "body:14": 0.01,
            "body:13": 0,
            "body:2": 0,
            "body:16": 0,
            "body:17": 0,
            "body:3": 0.03,
            "body:4": 0.48,
            "body:19": 0,
            "body:5": 0.41,
            "subject:0": 0.03,
            "body:12": 0.01,
            "body:6": 0,
            "body:8": 0,
            "body:20": 0,
            "body:9": 0.01,
            "body:1": 0,
            "body:18": 0,
            "body:10": 0,
            "body:11": 0,
            "NONE": 0.01,
            "body:7": 0.01,
            "body:0": 0
          },
          "confidence": 0.44
        }
      },
      "usage": {
        "input_tokens": 2559,
        "output_tokens": 479
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 307.76929200000086,
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
    "seq": 149,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-031",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:01.257Z",
    "offsetMs": 0.9162919999998849
  },
  {
    "seq": 150,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-031",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:01.440Z",
    "offsetMs": 184.20870800000012,
    "elapsedMs": 182.6708749999998,
    "outcome": "success"
  },
  {
    "seq": 151,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-031",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:01.444Z",
    "offsetMs": 187.5836670000008
  },
  {
    "seq": 152,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-031",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:01.564Z",
    "offsetMs": 307.54691699999967,
    "elapsedMs": 119.33929200000057,
    "outcome": "success"
  },
  {
    "seq": 153,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-031",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:01.564Z",
    "offsetMs": 307.8198330000014,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "421e95d0dbcb800bff69cd510dac0b28bdb5da3f0d80b3799aad37a511918165";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":150},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":152},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":153}} as const;
export const projectionSha256 = "a067d4bd7aace90eff542e40941cd6273b5780d6a937a94f41cda1413e527611";
