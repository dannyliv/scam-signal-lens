import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-293",
  "inputSha256": "3ea3472c3b6a26d8ed853fab654d2a96105c8a3a054a79850d93b6e5236cee6f",
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
    "requestSha256": "6b52593e97ecc885c46a50f12f5845c193bd3174b4e85501e744d58c1d8bed96",
    "capturedAt": "2026-09-22T03:54:01.470Z",
    "elapsedMs": 659.8456029999652,
    "successfulAttemptElapsedMs": 658.7341320000123,
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.85
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
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0,
            "informational": 0.99
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5187,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "53ec0d1bc8505d45a5ccc8001fee05640cd86691636341080317c8f6020132d8",
    "capturedAt": "2026-09-22T03:54:02.040Z",
    "elapsedMs": 568.4189519999782,
    "successfulAttemptElapsedMs": 566.4545930000022,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:16",
          "probabilities": {
            "body:6": 0,
            "body:9": 0,
            "body:1": 0,
            "body:8": 0,
            "body:5": 0,
            "body:16": 0.84,
            "body:10": 0,
            "body:4": 0,
            "body:3": 0,
            "NONE": 0.09999999999999999,
            "body:13": 0.01,
            "body:11": 0,
            "subject:0": 0.05,
            "body:7": 0,
            "body:0": 0,
            "body:12": 0,
            "body:2": 0,
            "body:14": 0,
            "body:15": 0
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 1500,
        "output_tokens": 202
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1230.5543249999755,
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
    "seq": 1429,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-293",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:00.811Z",
    "offsetMs": 0.8831699999864213
  },
  {
    "seq": 1430,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-293",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:01.470Z",
    "offsetMs": 659.8438910000259,
    "elapsedMs": 658.7341320000123,
    "outcome": "success"
  },
  {
    "seq": 1431,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-293",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:01.473Z",
    "offsetMs": 663.2915170000051
  },
  {
    "seq": 1432,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-293",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:02.040Z",
    "offsetMs": 1230.33019399998,
    "elapsedMs": 566.4545930000022,
    "outcome": "success"
  },
  {
    "seq": 1433,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-293",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:02.041Z",
    "offsetMs": 1230.5981269999756,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "619010a9c040c4bb06a1e651e284c6ad05a26343b1fe7ed87dcba2c63dac1230";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1430},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1432},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1433}} as const;
export const projectionSha256 = "f854a590aaee97f7f1a1310f80b8d3fe475d76cbb8c7c6c61598b9bc665a1006";
