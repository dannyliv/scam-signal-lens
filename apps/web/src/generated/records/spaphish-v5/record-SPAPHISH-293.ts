import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-293",
  "inputSha256": "3ea3472c3b6a26d8ed853fab654d2a96105c8a3a054a79850d93b6e5236cee6f",
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
      "end": 39,
      "text": "Atento comunicado - Becas al Extranjero"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 51,
      "text": "Ciudad del Sol, Jalisco a 20 de noviembre de 2024.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 51,
      "end": 52,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 52,
      "end": 76,
      "text": "Comunidad de TechNexus:\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 76,
      "end": 77,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 77,
      "end": 460,
      "text": "        Así como en muchas otras ocasiones nos hemos congratulado del impacto de la CyT a nivel de investigación, o desarrollo tecnológico, en esta ocasión nos toca ver como Consejo Nacional de Investigación (CNI), y Instituto Geográfico Nacional (IGN), colaboran de manera interinstitucional, multidisciplinaria, e intersectorialmente, en el combate al COVID-19 (ver enlace anexo). "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 460,
      "end": 684,
      "text": "CNI ha estado en operación permanente con la Dirección de Salud Nacional (DSN) y otras secretarías de estado para el análisis, procesamiento de datos, y desarrollo de modelos para la predicción del contagio del coronavirus.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 684,
      "end": 685,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 685,
      "end": 1051,
      "text": "        Aprovecho la ocasión para hacer mención especial al consorcio de Centros Públicos de Investigación (CPI), el cuerpo directivo de CNI, la Secretaría de Ética y Transparencia (SET), y la Secretaría de Finanzas Públicas (SFP), que en reuniones de los últimos días han llegado al consenso para mantener los recursos presupuestales para la ciencia y la cultura. \n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1051,
      "end": 1052,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1052,
      "end": 1068,
      "text": "Saludos, Javier\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1068,
      "end": 1069,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1069,
      "end": 1107,
      "text": "https://covid-mx.data.center/metrics/\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1107,
      "end": 1108,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1108,
      "end": 1112,
      "text": "Dr. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1112,
      "end": 1122,
      "text": "Javier R. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1122,
      "end": 1130,
      "text": "Soto G. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 1130,
      "end": 1157,
      "text": "Director General  TechNexus"
    }
  ],
  "passA": {
    "requestSha256": "ff61e387f425837ed920ec250e343740d78a16440d9ab4cf36576db9524adb49",
    "capturedAt": "2026-09-20T23:45:29.897Z",
    "elapsedMs": 180.8705420000042,
    "successfulAttemptElapsedMs": 179.4675830000051,
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
          "noul": 0.02
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.76
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0,
            "mixed_or_unclear": 0,
            "informational": 1
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
        "input_tokens": 3737,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "542c533c8e6139fddb3db41b932676c33fb61fd926391449fc67eec31df1c2d0",
    "capturedAt": "2026-09-20T23:45:30.138Z",
    "elapsedMs": 238.46437500001048,
    "successfulAttemptElapsedMs": 236.5888330000016,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:16",
          "probabilities": {
            "body:1": 0,
            "NONE": 0.15000000000000002,
            "body:9": 0,
            "body:15": 0,
            "body:12": 0,
            "subject:0": 0.05,
            "body:7": 0.01,
            "body:4": 0.03,
            "body:0": 0,
            "body:6": 0,
            "body:3": 0,
            "body:5": 0,
            "body:10": 0,
            "body:13": 0.01,
            "body:2": 0.02,
            "body:8": 0,
            "body:16": 0.73,
            "body:11": 0,
            "body:14": 0
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 1400,
        "output_tokens": 202
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 421.875165999998,
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
    "seq": 1433,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-293",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:29.717Z",
    "offsetMs": 1.0160409999953117
  },
  {
    "seq": 1434,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-293",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:29.897Z",
    "offsetMs": 180.87079099999391,
    "elapsedMs": 179.4675830000051,
    "outcome": "success"
  },
  {
    "seq": 1435,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-293",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:29.900Z",
    "offsetMs": 184.27841600000102
  },
  {
    "seq": 1436,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-293",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:30.137Z",
    "offsetMs": 421.52624999999534,
    "elapsedMs": 236.5888330000016,
    "outcome": "success"
  },
  {
    "seq": 1437,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-293",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:30.138Z",
    "offsetMs": 421.97158299999137,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "90427b400325dcf76a243bf39a32f27a126dd6c405e317426a46afa57328d9ca";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1434},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1436},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1437}} as const;
export const projectionSha256 = "912615d7c83e864c944d72b122d2947411ad674a4ee71d3b3c026370c4e96722";
