import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-255",
  "inputSha256": "e177b1cbbe9db8e78da33a2c519d00c686527f0c353a715ecef392cd54d02626",
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
    "requestSha256": "57fb7983aa44191638dc595f64e728cba04ed3453c8fd72dab1f772ddd31cafe",
    "capturedAt": "2026-09-20T23:45:16.779Z",
    "elapsedMs": 203.87116699999024,
    "successfulAttemptElapsedMs": 201.63316700000723,
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
          "noul": 0.07
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
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.49
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.76,
            "no_sensitive_action": 0.23,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 3702,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "f79241ee7e1eb720db355fc8b50db422c8c7279ffc9fa7015c0f6b770b8b7592",
    "capturedAt": "2026-09-21T00:57:24.623Z",
    "elapsedMs": 138.12212499999987,
    "successfulAttemptElapsedMs": 136.4007079999992,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:15": 0,
            "body:5": 1,
            "body:6": 0,
            "subject:0": 0,
            "body:14": 0,
            "body:10": 0,
            "body:2": 0,
            "body:12": 0,
            "NONE": 0,
            "body:0": 0,
            "body:7": 0,
            "body:16": 0,
            "body:11": 0,
            "body:17": 0,
            "body:8": 0,
            "body:4": 0,
            "body:13": 0,
            "body:1": 0,
            "body:3": 0,
            "body:9": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:17",
          "probabilities": {
            "body:9": 0,
            "body:15": 0,
            "body:6": 0,
            "subject:0": 0,
            "body:14": 0,
            "body:10": 0,
            "body:2": 0,
            "body:12": 0,
            "NONE": 0.02,
            "body:7": 0,
            "body:0": 0,
            "body:16": 0.01,
            "body:11": 0,
            "body:17": 0.93,
            "body:8": 0,
            "body:4": 0,
            "body:1": 0.03,
            "body:13": 0,
            "body:3": 0,
            "body:5": 0
          },
          "confidence": 0.92
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:5": 0.11,
            "body:6": 0,
            "subject:0": 0,
            "body:14": 0.01,
            "body:10": 0,
            "body:2": 0,
            "body:12": 0,
            "NONE": 0.83,
            "body:7": 0,
            "body:0": 0,
            "body:17": 0,
            "body:11": 0,
            "body:16": 0,
            "body:8": 0,
            "body:4": 0,
            "body:13": 0,
            "body:1": 0,
            "body:3": 0.01,
            "body:15": 0.04
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 2867,
        "output_tokens": 628
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 461.9122080000034,
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
    "seq": 1248,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-255",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:16.576Z",
    "offsetMs": 1.5133329999953276
  },
  {
    "seq": 1249,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-255",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:16.778Z",
    "offsetMs": 203.87266599999566,
    "elapsedMs": 201.63316700000723,
    "outcome": "success"
  },
  {
    "seq": 1250,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-255",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:16.782Z",
    "offsetMs": 207.33354099999997
  },
  {
    "seq": 1251,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-255",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:16.897Z",
    "offsetMs": 322.47925000000396,
    "elapsedMs": 114.3770419999928,
    "outcome": "success"
  },
  {
    "seq": 1252,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-255",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:16.897Z",
    "offsetMs": 322.63045799999963,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2647,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-255",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:24.486Z",
    "offsetMs": 2.0325840000004973
  },
  {
    "seq": 2648,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-255",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:24.623Z",
    "offsetMs": 138.86595900000066,
    "elapsedMs": 136.4007079999992,
    "outcome": "success"
  },
  {
    "seq": 2649,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-255",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:24.624Z",
    "offsetMs": 139.21779200000128,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "bf4200618f3c9e1f1611b235966236e165ed9194b050e6b5ccfa27fa40c371fb";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1249},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2648},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2649}} as const;
export const projectionSha256 = "590b077637647dc59f742a642e920dd907cbfa226ee91586c5c205c423f02a6e";
