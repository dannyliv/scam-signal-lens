import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-264",
  "inputSha256": "b8d96642e353fd50c09d7617f5845dcfe03f01d334971d52d4fbb6355f167b6f",
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
      "end": 15,
      "text": "Cita Registrada"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 26,
      "text": "Apreciable contribuyente. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 26,
      "end": 78,
      "text": "Te informamos que tu cita se ha agendado con éxito. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 78,
      "end": 315,
      "text": "Te sugerimos tener a la mano la información contenida en el acuse que se adjunta; en él podrás identificar el día, la hora, el servicio y la Oficina de Servicios al Ciudadano (OSC) o Centro de Soporte Tributario (CST) que seleccionaste. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 315,
      "end": 432,
      "text": "Si necesitas consultarla o cancelarla ingresa aquí con tu Clave de Identificación Fiscal (CIF) y correo electrónico. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 432,
      "end": 592,
      "text": "Si eres persona física, genera o renueva tu Clave de Acceso Única o renueva tu Firma Electrónica Fiscal (FEF) (caduca no mayor a un año) a través de ID Fiscal. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 592,
      "end": 634,
      "text": "¡No necesitas acudir a nuestras oficinas! "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 634,
      "end": 705,
      "text": "AgendaFiscal a tu alcance Atentamente: Agencia de Recaudación Pública. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 705,
      "end": 767,
      "text": "\"Favor de no responder a este mensaje, es un envío automático\""
    }
  ],
  "passA": {
    "requestSha256": "5ef6fa69e62af33932fb77b8bbb2ff20f582612a92c68a3fe3904a59e6c469dc",
    "capturedAt": "2026-09-20T23:45:20.679Z",
    "elapsedMs": 256.07395800000813,
    "successfulAttemptElapsedMs": 254.05329199999687,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.09
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.42
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
          "noul": 0.11
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.21
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.31
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0.02,
            "educational_or_quoted": 0,
            "informational": 0.6,
            "active_request": 0.38
          },
          "confidence": 0.47
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.04,
            "sender_supplied": 0.6,
            "no_sensitive_action": 0.33,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 3635,
        "output_tokens": 351
      }
    }
  },
  "passB": {
    "requestSha256": "016d08b31890518f93d345e9cd1006708844e95597c35cba02f8fd0e40aab854",
    "capturedAt": "2026-09-20T23:45:20.833Z",
    "elapsedMs": 151.73033299999952,
    "successfulAttemptElapsedMs": 149.92470899999898,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:2": 0,
            "body:3": 0.85,
            "body:1": 0,
            "body:5": 0,
            "body:6": 0,
            "body:7": 0,
            "body:4": 0.03,
            "NONE": 0.12
          },
          "confidence": 0.82
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:2": 0.03,
            "body:0": 0.09,
            "subject:0": 0,
            "body:1": 0.02,
            "body:3": 0.02,
            "body:5": 0.01,
            "body:6": 0.78,
            "body:7": 0,
            "body:4": 0.02,
            "NONE": 0.03
          },
          "confidence": 0.75
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:2": 0,
            "body:3": 0.02,
            "body:1": 0,
            "body:5": 0.26,
            "body:6": 0,
            "body:7": 0.11,
            "body:4": 0.01,
            "NONE": 0.6
          },
          "confidence": 0.55
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0.03,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:3": 0.76,
            "body:6": 0,
            "body:5": 0.02,
            "body:7": 0.01,
            "body:4": 0.14,
            "NONE": 0.04
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 2798,
        "output_tokens": 445
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 410.10933400000795,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:3"
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
        "segmentId": "body:6"
      },
      "verification_bypass": {
        "status": "low_confidence",
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
        "segmentId": "body:3"
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
    "seq": 1293,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-264",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:20.424Z",
    "offsetMs": 1.3145840000070166
  },
  {
    "seq": 1294,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-264",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:20.679Z",
    "offsetMs": 256.07529200000863,
    "elapsedMs": 254.05329199999687,
    "outcome": "success"
  },
  {
    "seq": 1295,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-264",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:20.682Z",
    "offsetMs": 259.26708400000643
  },
  {
    "seq": 1296,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-264",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:20.832Z",
    "offsetMs": 409.8126670000056,
    "elapsedMs": 149.92470899999898,
    "outcome": "success"
  },
  {
    "seq": 1297,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-264",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:20.833Z",
    "offsetMs": 410.1772500000079,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b2efae9c217e106168d968883e8425ebbade3c099653eb9ba04e20162e23ef7a";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1294},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1296},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1297}} as const;
export const projectionSha256 = "28869fe054601e048570d17bbaa3b323a8c8e2ff1128cf812b9f6837d77e64fb";
