import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-297",
  "inputSha256": "ab65a2b8fe74e5a577a4cdd1ac7ef701dca14fb23abbc12045f010eca276d1e4",
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
      "end": 95,
      "text": "Se amplía el plazo para el registro de candidatos a obtener el Premio Nacional de Ciencias 2025"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 45,
      "text": "Estimadas académicas y estimados académicos:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 45,
      "end": 46,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 46,
      "end": 395,
      "text": "La Secretaría de Educación Nacional (SEN) informa que se amplía hasta el 4 de diciembre el plazo para el registro y recepción de candidaturas para el Premio Nacional de Ciencia y Tecnología 2025, en consideración a las medidas establecidas por la Secretaría de Salud para la mitigación y control de los riesgos que implica la pandemia por COVID-19.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 395,
      "end": 396,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 396,
      "end": 623,
      "text": "La información completa se encuentra en la siguiente liga: https://www.gob.org/sen/articulos/boletin-no-999-se-amplia-el-plazo-para-el-registro-de-candidatos-a-obtener-el-premio-nacional-de-ciencia-y-tecnologia-2025-sen-888888?"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 623,
      "end": 632,
      "text": "idiom=es\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 632,
      "end": 633,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 633,
      "end": 646,
      "text": "Atentamente,\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 646,
      "end": 647,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 647,
      "end": 686,
      "text": "Sistema Nacional de Investigadores Av. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 686,
      "end": 709,
      "text": "Juárez Norte 3050 Col. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 709,
      "end": 837,
      "text": "Progreso Nacional CP 07950 CDMX Teléfono: 55 58 77 99 00 Ext. 3120 www.consejodeciencia.org.mxhttp://www.consejodeciencia.org.mx"
    }
  ],
  "passA": {
    "requestSha256": "5e1b9548472e074966bcc9078a84245dce7efe14c14f2885c5b4f045489d9f71",
    "capturedAt": "2026-09-22T03:54:06.492Z",
    "elapsedMs": 657.8817649999983,
    "successfulAttemptElapsedMs": 656.5459010000341,
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
          "noul": 0.05
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
          "noul": 0.16
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
          "noul": 0.1
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.8,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0.2
          },
          "confidence": 0.72
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
        "input_tokens": 5165,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "74205708acc40b6d8e50dd4d7d29d9b16b42ee59639f50a51d7746722971e434",
    "capturedAt": "2026-09-22T03:54:07.118Z",
    "elapsedMs": 624.7206659999792,
    "successfulAttemptElapsedMs": 623.2978909999947,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.92,
            "NONE": 0.05,
            "body:10": 0,
            "body:6": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:5": 0,
            "body:8": 0,
            "body:4": 0,
            "body:11": 0,
            "body:1": 0,
            "body:9": 0.02,
            "body:3": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 1381,
        "output_tokens": 151
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1284.6367249999894,
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
        "segmentId": "body:2"
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
    "seq": 1449,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-297",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:05.835Z",
    "offsetMs": 1.0091759999631904
  },
  {
    "seq": 1450,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-297",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:06.491Z",
    "offsetMs": 657.8797349999659,
    "elapsedMs": 656.5459010000341,
    "outcome": "success"
  },
  {
    "seq": 1451,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-297",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:06.494Z",
    "offsetMs": 660.6674789999961
  },
  {
    "seq": 1452,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-297",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:07.118Z",
    "offsetMs": 1284.374713999976,
    "elapsedMs": 623.2978909999947,
    "outcome": "success"
  },
  {
    "seq": 1453,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-297",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:07.118Z",
    "offsetMs": 1284.6812559999526,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6fd2ab92852a4148e51b17161bbce62d5e799d86f2cb86b6f7648ad30e7c8599";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1450},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1452},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1453}} as const;
export const projectionSha256 = "6cf426f9a3181912673abe79ad765edf653a4e6984696bbef0ef69dbe7a3ae26";
