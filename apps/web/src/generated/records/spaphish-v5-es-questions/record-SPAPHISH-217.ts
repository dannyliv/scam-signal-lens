import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-217",
  "inputSha256": "263f5ceb80b96bbb1f5ba7da6f8cf69c2255cba68cdf7c172964ef34a08ab58d",
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
      "end": 45,
      "text": "Alerta urgente: su cuenta fue bloqueada hoy. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 45,
      "end": 70,
      "text": "Ya no somos responsables."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 74,
      "text": "Su suscripción a McAfee ha caducado Urgente: ¡Tu suscripción ha caducado! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 74,
      "end": 129,
      "text": "Tienes 24 horas para renovar y mantener su protección. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 129,
      "end": 205,
      "text": "Su suscripción a McAfee Total Protection para Windows expiró el 06/27/2025. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 205,
      "end": 306,
      "text": "Sin la renovación,sus Dispositivos pueden volverse vulnerables a virus, malware y robo de identidad. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 306,
      "end": 337,
      "text": "¡Se requiere acción inmediata! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 337,
      "end": 389,
      "text": "Sus Dispositivos están desprotegidos y en riesgo... "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 389,
      "end": 627,
      "text": "ID de cuenta: 8826147MX Usuario: Carlos Número de serie: FQTS 9L22 KPMR SX48 Descuento: 95.99% OFF Oferta válida hasta: 06/27/2025 RENOVAR AHORA Estimado Carlos, A pesar de múltiples notificaciones y alertas, no hemos recibido respuesta. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 627,
      "end": 697,
      "text": "Su protección contra amenazas cibernéticas está gravemente en riesgo. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 697,
      "end": 870,
      "text": "Renueve su suscripción inmediatamente para garantizar protección ininterrumpida contra ataques cibernéticos y piratas informáticos.Su seguridad es nuestra máxima prioridad. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 870,
      "end": 948,
      "text": "Si desea dejar de recibir correos electrónicos en el futuro Darse de baja aquí"
    }
  ],
  "passA": {
    "requestSha256": "0e7b15f7dc32e4ca487507f14c1f76610a6ca1696ea1de58d886fb5099275cb2",
    "capturedAt": "2026-09-22T03:52:29.987Z",
    "elapsedMs": 639.2875530000019,
    "successfulAttemptElapsedMs": 638.2040689999994,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.47
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.93
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.37
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.1
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.92,
            "independently_established": 0,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.06
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 5159,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "bdd8ef923b53fb53f0f868daf8d50b6da202844a83d5c0907944c59a4e57ee70",
    "capturedAt": "2026-09-22T03:52:30.585Z",
    "elapsedMs": 595.8379649999843,
    "successfulAttemptElapsedMs": 594.5113950000086,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0,
            "body:9": 0.01,
            "subject:0": 0,
            "body:3": 0,
            "body:8": 0.1,
            "body:5": 0,
            "NONE": 0.68,
            "body:1": 0.09,
            "body:6": 0.1,
            "body:4": 0.01,
            "body:2": 0,
            "body:7": 0
          },
          "confidence": 0.66
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:8": 0.43,
            "NONE": 0,
            "body:5": 0,
            "body:1": 0.12,
            "body:6": 0.45,
            "body:4": 0,
            "body:2": 0,
            "body:3": 0
          },
          "confidence": 0.39
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0,
            "body:1": 0.92,
            "body:2": 0,
            "body:3": 0.01,
            "body:8": 0.01,
            "body:5": 0,
            "NONE": 0,
            "subject:0": 0.02,
            "body:6": 0,
            "body:4": 0.04,
            "body:9": 0,
            "body:7": 0
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "subject:1": 0.05,
            "body:0": 0.04,
            "body:3": 0.01,
            "body:2": 0.02,
            "body:1": 0.01,
            "body:8": 0.59,
            "body:5": 0,
            "NONE": 0.1,
            "subject:0": 0.07,
            "body:6": 0.09,
            "body:4": 0,
            "body:9": 0.01,
            "body:7": 0.01
          },
          "confidence": 0.56
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0.13,
            "body:0": 0,
            "body:3": 0,
            "body:9": 0.01,
            "body:1": 0.01,
            "body:8": 0.08,
            "body:5": 0,
            "NONE": 0.74,
            "body:2": 0,
            "body:6": 0.01,
            "body:4": 0.01,
            "subject:0": 0.01,
            "body:7": 0
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 4544,
        "output_tokens": 683
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1236.7896089999995,
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
        "status": "low_confidence",
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
        "segmentId": "body:1"
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
    "seq": 1056,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-217",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:29.349Z",
    "offsetMs": 0.6397139999899082
  },
  {
    "seq": 1057,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-217",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:29.987Z",
    "offsetMs": 639.2877679999801,
    "elapsedMs": 638.2040689999994,
    "outcome": "success"
  },
  {
    "seq": 1058,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-217",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:29.989Z",
    "offsetMs": 641.3553899999824
  },
  {
    "seq": 1059,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-217",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:30.584Z",
    "offsetMs": 1236.4823460000043,
    "elapsedMs": 594.5113950000086,
    "outcome": "success"
  },
  {
    "seq": 1060,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-217",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:30.585Z",
    "offsetMs": 1236.8442719999875,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "19a7c22fb2dde6dd6c6530b6145b0682e8cbc66b0229077dc6673f5c7ad57787";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1057},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1059},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1060}} as const;
export const projectionSha256 = "26898958b541bc340829b8afde44627b04988178db3b46e1a0172a784311703e";
