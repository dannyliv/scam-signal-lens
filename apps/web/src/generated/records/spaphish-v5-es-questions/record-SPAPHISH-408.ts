import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-408",
  "inputSha256": "5db72825a8ce20fa7ec6b191e28272762197390a168970765ce61a5044c28f14",
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
    "requestSha256": "b864e5844c2fdcbfff93631191fdb492fabd21c83fed102e8d9fd994c767d95b",
    "capturedAt": "2026-09-22T03:56:19.495Z",
    "elapsedMs": 604.8082189999986,
    "successfulAttemptElapsedMs": 602.3093099999824,
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
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
          "noul": 0.09
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.59,
            "active_request": 0.41
          },
          "confidence": 0.44
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0.97,
            "sender_supplied": 0.03
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 5340,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "8b5384b9a6f00c594a6a690dc87b4c326fd0b2e11adb43821240beb40fc5066e",
    "capturedAt": "2026-09-22T03:56:20.055Z",
    "elapsedMs": 557.8495620000176,
    "successfulAttemptElapsedMs": 556.3922570000286,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:2": 0.03,
            "body:6": 0,
            "body:9": 0.01,
            "body:12": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:8": 0.01,
            "body:3": 0,
            "body:0": 0.4,
            "NONE": 0.07,
            "body:11": 0.02,
            "body:10": 0,
            "body:5": 0,
            "body:14": 0.02,
            "body:4": 0,
            "body:13": 0.44,
            "body:1": 0
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 1773,
        "output_tokens": 182
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1164.406569999992,
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
    "seq": 1999,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-408",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:18.892Z",
    "offsetMs": 2.2106299999868497
  },
  {
    "seq": 2000,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-408",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:19.495Z",
    "offsetMs": 604.8082209999557,
    "elapsedMs": 602.3093099999824,
    "outcome": "success"
  },
  {
    "seq": 2001,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-408",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:19.498Z",
    "offsetMs": 607.5111579999793
  },
  {
    "seq": 2002,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-408",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:20.054Z",
    "offsetMs": 1164.1827929999563,
    "elapsedMs": 556.3922570000286,
    "outcome": "success"
  },
  {
    "seq": 2003,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-408",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:20.055Z",
    "offsetMs": 1164.4658819999895,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c6608c31799dd114e1156c58c34d170248740a49bc60d1baa92119c1e65f03ee";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2000},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2002},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2003}} as const;
export const projectionSha256 = "8176fda885d46fd3e90fbacc931b39fdcad7b43d7c84d99bead49e7c1cf2bb47";
