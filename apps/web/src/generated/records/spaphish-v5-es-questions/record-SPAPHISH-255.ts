import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-255",
  "inputSha256": "e177b1cbbe9db8e78da33a2c519d00c686527f0c353a715ecef392cd54d02626",
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
      "end": 32,
      "text": "Aviso de uso indebido de dominio"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 34,
      "text": "Estimado propietario del dominio:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 34,
      "end": 212,
      "text": "Nuestro sistema ha detectado que su dominio: Instituto-ValleCentral.org se utilizó recientemente para enviar correo masivo no solicitado y propagar software malicioso (malware).\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 212,
      "end": 330,
      "text": "Puede descargar el informe detallado sobre el uso indebido de su dominio junto con la fecha y hora de los incidentes.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 330,
      "end": 345,
      "text": "Haga clic aquí\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 345,
      "end": 453,
      "text": "También hemos proporcionado instrucciones detalladas sobre cómo eliminar su dominio de nuestra lista negra.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 453,
      "end": 608,
      "text": "Descargue el informe inmediatamente y tome las medidas adecuadas en un plazo de 24 horas, de lo contrario, su dominio será suspendido de forma permanente.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 608,
      "end": 745,
      "text": "También existe la posibilidad de llevar a cabo una acción legal dependiendo de la gravedad y la persistencia de su caso de uso indebido.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 745,
      "end": 767,
      "text": "Tres sencillos pasos:\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 767,
      "end": 768,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 768,
      "end": 806,
      "text": "Descargue su informe de uso indebido.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 806,
      "end": 807,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 807,
      "end": 892,
      "text": "Compruebe los incidentes de uso indebido de su dominio junto con la fecha y la hora.\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 892,
      "end": 893,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 893,
      "end": 980,
      "text": "Tome algunos pasos simples para la prevención y para evitar la suspensión del dominio.\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 980,
      "end": 1021,
      "text": "Haga clic aquí para descargar el informe\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1021,
      "end": 1067,
      "text": "Sírvase revisarlo y comuníquese con nosotros.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 1067,
      "end": 1080,
      "text": "Atentamente,\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 1080,
      "end": 1121,
      "text": "Administrador de uso indebido de dominios"
    }
  ],
  "passA": {
    "requestSha256": "c90cc4aeaf55ce2f4d2141029f5dc18dc8d60a0d9de431dbae759cd75877136e",
    "capturedAt": "2026-09-22T03:53:16.144Z",
    "elapsedMs": 708.6271570000099,
    "successfulAttemptElapsedMs": 707.4189369999804,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.08
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.47
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.79,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.2
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 5152,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "467392bf3f51952f6f3e5b3d3eaf0b23afad6e6d1420dae95db468be3a4ecf05",
    "capturedAt": "2026-09-22T03:53:16.683Z",
    "elapsedMs": 537.1485040000407,
    "successfulAttemptElapsedMs": 536.0957589999889,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:5": 1,
            "NONE": 0,
            "body:0": 0,
            "body:7": 0,
            "body:9": 0,
            "body:10": 0,
            "body:6": 0,
            "body:17": 0,
            "body:15": 0,
            "body:11": 0,
            "body:2": 0,
            "body:14": 0,
            "body:3": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:1": 0,
            "body:8": 0,
            "body:12": 0,
            "body:13": 0,
            "body:16": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:17",
          "probabilities": {
            "body:9": 0,
            "NONE": 0,
            "body:0": 0,
            "body:7": 0,
            "body:6": 0,
            "body:10": 0,
            "body:5": 0.01,
            "body:17": 0.95,
            "body:15": 0,
            "body:11": 0,
            "body:2": 0,
            "body:14": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:4": 0,
            "body:1": 0.03,
            "body:8": 0,
            "body:12": 0,
            "body:13": 0,
            "body:16": 0.01
          },
          "confidence": 0.94
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "NONE": 0.71,
            "body:0": 0,
            "body:7": 0,
            "body:13": 0,
            "body:9": 0.01,
            "body:16": 0,
            "body:5": 0.16,
            "body:15": 0.05,
            "body:11": 0,
            "body:14": 0.04,
            "body:2": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:4": 0,
            "body:3": 0.03,
            "body:8": 0,
            "body:12": 0,
            "body:17": 0,
            "body:10": 0
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 3175,
        "output_tokens": 628
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1247.807696999982,
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
        "segmentId": "body:5"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:17"
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
    "seq": 1244,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-255",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:15.436Z",
    "offsetMs": 0.9004650000133552
  },
  {
    "seq": 1245,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-255",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:16.144Z",
    "offsetMs": 708.6263979999931,
    "elapsedMs": 707.4189369999804,
    "outcome": "success"
  },
  {
    "seq": 1246,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-255",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:16.146Z",
    "offsetMs": 711.0461329999962
  },
  {
    "seq": 1247,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-255",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:16.682Z",
    "offsetMs": 1247.4946660000132,
    "elapsedMs": 536.0957589999889,
    "outcome": "success"
  },
  {
    "seq": 1248,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-255",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:16.683Z",
    "offsetMs": 1247.8542209999869,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "655a45d1bdc23570840777975b63b3855eaf27d301285b3987b52110c0efb39a";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1245},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1247},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1248}} as const;
export const projectionSha256 = "631d65c83613a31d078f8b2ccad745bc5e188ecd61003811134781ec67218773";
