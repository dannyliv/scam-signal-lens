import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-195",
  "inputSha256": "f8dc3147f266d36400ce2353542a76058853a0a4030c76a9f463c3954dc5cf62",
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
      "end": 90,
      "text": "AVISO: ENTREGA DE AVANCES DE TESIS CORRESPONDIENTES A ABRIL DE 2025- MAESTRÍA EN SEGURIDAD"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 23,
      "text": "Estimados estudiantes,\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 23,
      "end": 92,
      "text": "Antes que nada, esperando que se encuentren bien y también sus seres\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 92,
      "end": 102,
      "text": "queridos. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 102,
      "end": 168,
      "text": "Les comento que tuvimos una reunión con la academia de profesores\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 168,
      "end": 242,
      "text": "y se decidió posponer la entrega programada para este viernes para el día\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 242,
      "end": 273,
      "text": "viernes 8 de mayo de 9-12 hrs. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 273,
      "end": 316,
      "text": "La presentación será vía remota, para ello\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 316,
      "end": 392,
      "text": "deberán preparar una presentación de sus avances y los profesores evaluarán\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 392,
      "end": 414,
      "text": "su trabajo realizado. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 414,
      "end": 463,
      "text": "En lo próximo recibirán un link con los datos de\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 463,
      "end": 471,
      "text": "acceso. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 471,
      "end": 513,
      "text": "Manténganse en contacto con sus asesores. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 513,
      "end": 532,
      "text": "Reciban un cordial\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 532,
      "end": 540,
      "text": "saludo.\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 540,
      "end": 541,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 541,
      "end": 546,
      "text": "Att. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 546,
      "end": 567,
      "text": "Ricardo López García\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 567,
      "end": 589,
      "text": "Representante Docente\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 589,
      "end": 631,
      "text": "Maestría en Sistemas y Análisis de Riesgos"
    }
  ],
  "passA": {
    "requestSha256": "7e56348a754aedc0fcdfc0781b9076cdaede544b0982b43f1ad1cefea9c856be",
    "capturedAt": "2026-09-20T23:44:55.514Z",
    "elapsedMs": 210.49691700000403,
    "successfulAttemptElapsedMs": 208.72516599999653,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.3
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.08
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.56
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.24,
            "mixed_or_unclear": 0,
            "active_request": 0.76,
            "educational_or_quoted": 0
          },
          "confidence": 0.67
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.85,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.14,
            "independently_established": 0
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 3626,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "51ae4cf0cf43ca0c877ada9487e7c441ca76eaac9742e87466f51caf5b721872",
    "capturedAt": "2026-09-21T00:57:22.007Z",
    "elapsedMs": 123.10450000000037,
    "successfulAttemptElapsedMs": 120.56341699999939,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "NONE": 0.36,
            "body:3": 0,
            "body:16": 0,
            "body:8": 0,
            "body:1": 0,
            "body:2": 0,
            "body:6": 0.01,
            "body:10": 0,
            "body:11": 0.02,
            "body:7": 0.41000000000000003,
            "body:4": 0.03,
            "body:14": 0,
            "body:12": 0,
            "body:0": 0,
            "body:15": 0,
            "body:18": 0,
            "body:17": 0,
            "body:13": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:5": 0.17
          },
          "confidence": 0.37
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:17",
          "probabilities": {
            "NONE": 0,
            "body:3": 0.04,
            "body:16": 0,
            "body:8": 0,
            "body:1": 0,
            "body:2": 0,
            "body:6": 0,
            "body:10": 0,
            "body:11": 0.02,
            "body:7": 0,
            "body:4": 0,
            "body:14": 0,
            "body:18": 0.03,
            "body:0": 0,
            "body:15": 0,
            "body:12": 0,
            "body:17": 0.91,
            "body:13": 0,
            "subject:0": 0,
            "body:9": 0,
            "body:5": 0
          },
          "confidence": 0.89
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "NONE": 0.22,
            "body:3": 0,
            "body:16": 0,
            "body:8": 0,
            "body:1": 0,
            "body:2": 0,
            "body:11": 0.76,
            "body:10": 0,
            "body:6": 0,
            "body:7": 0,
            "body:4": 0,
            "body:14": 0,
            "body:18": 0,
            "body:0": 0,
            "body:15": 0,
            "body:12": 0,
            "body:17": 0,
            "body:13": 0,
            "body:9": 0.02,
            "subject:0": 0,
            "body:5": 0
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 2633,
        "output_tokens": 662
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 497.96824900000047,
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
        "segmentId": "body:17"
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
        "segmentId": "body:11"
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
    "seq": 952,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-195",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:55.305Z",
    "offsetMs": 1.181165999994846
  },
  {
    "seq": 953,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-195",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:55.514Z",
    "offsetMs": 210.497540999997,
    "elapsedMs": 208.72516599999653,
    "outcome": "success"
  },
  {
    "seq": 954,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-195",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:55.517Z",
    "offsetMs": 213.95183299999917
  },
  {
    "seq": 955,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-195",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:55.677Z",
    "offsetMs": 373.0697910000017,
    "elapsedMs": 158.3957919999957,
    "outcome": "success"
  },
  {
    "seq": 956,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-195",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:55.677Z",
    "offsetMs": 373.2362910000011,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2605,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-195",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:21.886Z",
    "offsetMs": 3.20483300000069
  },
  {
    "seq": 2606,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-195",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:22.007Z",
    "offsetMs": 124.33479100000022,
    "elapsedMs": 120.56341699999939,
    "outcome": "success"
  },
  {
    "seq": 2607,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-195",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:22.007Z",
    "offsetMs": 124.66266600000017,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c31d5e8100c4ab550cbfa2feb609c1a8a7998fc83ad6ce89807276ffc9ba8b52";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":953},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2606},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2607}} as const;
export const projectionSha256 = "f3d6e2a4657ad921e202b61b8a6e37d9b7e08d7351b8aea9d386c0892d4b74ca";
