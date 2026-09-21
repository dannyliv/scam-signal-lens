import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-408",
  "inputSha256": "5db72825a8ce20fa7ec6b191e28272762197390a168970765ce61a5044c28f14",
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
      "end": 53,
      "text": "Convocatoria 2025 Redes Horizontales del Conocimiento"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 53,
      "text": "Estimados académicos y estimadas académicas del SNB:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 53,
      "end": 54,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 54,
      "end": 132,
      "text": "Se les invita a conocer la Convocatoria 2020 de Redes de Colaboración Social.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 132,
      "end": 133,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 133,
      "end": 720,
      "text": "El propósito de la Convocatoria es proveer apoyo económico para desarrollar proyectos de investigación que incidan directamente en la solución de problemas locales en el contexto de la actual pandemia provocada por la Enfermedad Infecciosa Global (EIG-20), mediante la colaboración entre Grupos Sociales Solidarios, entendidos como aquellos que conforman el sector social de la economía definidos en el Artículo 35 de la Constitución Política del País, instituciones académicas o de investigación, e instituciones estatales o municipales, establecidos como Redes de Colaboración Social. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 720,
      "end": 887,
      "text": "Se busca promover el diálogo igualitario entre diferentes actores y la resolución de los problemas que preocupan y afectan a la sociedad en diversos espacios locales.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 887,
      "end": 888,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 888,
      "end": 1510,
      "text": "Las Redes de Colaboración Social son mecanismos de articulación entre personas e instituciones que comparten el interés por dar atención a necesidades claramente identificadas en territorios concretos que afectan a comunidades específicas (rurales o urbanas) en donde el trabajo corresponsable entre Grupos Sociales Solidarios, investigadores e instituciones permitan por la vía de la investigación, la búsqueda de alternativas de solución a problemas, que como efecto puedan motivar conocimiento nuevo, aplicable para incidir en el bienestar social a escala local y posiblemente replicable y adaptable a otros contextos.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1510,
      "end": 1511,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1511,
      "end": 1631,
      "text": "Más información: https://www.cnbe.gob.mx/index.php/el-cnbe/convocatorias-y-resultados-cnbe/conv-redes-colaboracion-2020\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1631,
      "end": 1632,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1632,
      "end": 1645,
      "text": "Atentamente,\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1645,
      "end": 1646,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1646,
      "end": 1711,
      "text": "Sistema Nacional de Becarios (SNB) Avenida de las Luces 456 Col. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1711,
      "end": 1829,
      "text": "Lomas de la Ciencia CP 78901 Ciudad Esmeralda Teléfono: 55 99 88 77 66 Ext. 5010 www.cnbe.gob.mxhttp://www.cnbe.gob.mx"
    }
  ],
  "passA": {
    "requestSha256": "9ef23566aca1daef09a8acf3a2ec54be7eacb849f5533dc9884d57ff2307359d",
    "capturedAt": "2026-09-20T23:46:08.834Z",
    "elapsedMs": 142.9790829999838,
    "successfulAttemptElapsedMs": 140.47562499999185,
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.36,
            "informational": 0.64,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.51
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.02,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.98
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3890,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "0b8340534cc52e776cd825931bc8242a21fd2e255f9be9cd9a19c278cc53d418",
    "capturedAt": "2026-09-20T23:46:08.980Z",
    "elapsedMs": 144.5588749999879,
    "successfulAttemptElapsedMs": 142.30175000001327,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:6": 0,
            "body:8": 0,
            "body:0": 0.42,
            "body:12": 0,
            "body:7": 0,
            "NONE": 0.04,
            "body:5": 0,
            "body:10": 0,
            "body:13": 0.48,
            "body:1": 0,
            "subject:0": 0,
            "body:14": 0.01,
            "body:4": 0,
            "body:9": 0.01,
            "body:2": 0.02,
            "body:3": 0,
            "body:11": 0.02
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 1673,
        "output_tokens": 182
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 289.7797910000081,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
    ],
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2001,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-408",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:08.692Z",
    "offsetMs": 1.8500000000058208
  },
  {
    "seq": 2002,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-408",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:08.834Z",
    "offsetMs": 142.9798750000191,
    "elapsedMs": 140.47562499999185,
    "outcome": "success"
  },
  {
    "seq": 2003,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-408",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:08.837Z",
    "offsetMs": 146.48983299999963
  },
  {
    "seq": 2004,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-408",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:08.980Z",
    "offsetMs": 289.45670800001244,
    "elapsedMs": 142.30175000001327,
    "outcome": "success"
  },
  {
    "seq": 2005,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-408",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:08.980Z",
    "offsetMs": 289.8733749999956,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ba7800eaab6560201cb6be0f8dd67ef39454cd681e21506e451d649fdac1cb2c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2002},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2004},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2005}} as const;
export const projectionSha256 = "783fb162da07a0385c3db5c788f4e70b4942f1b064dc33eee3d5e573735a153b";
