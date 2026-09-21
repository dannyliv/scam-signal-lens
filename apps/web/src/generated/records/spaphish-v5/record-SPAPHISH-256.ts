import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-256",
  "inputSha256": "016eb92c9745fbe4f6bca9cad37486a6efbc61770fc41a9cd71a36e5039d08c2",
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
      "end": 46,
      "text": "Solicitud de trámite número PO01GMANRX22204068"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 132,
      "text": "Estimado Cliente Agradecemos tu preferencia y en atención a la solicitud ingresada de Reembolso, anexamos al presente su respuesta. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 132,
      "end": 181,
      "text": "El pago de su trámite de reembolso fue aplicado. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 181,
      "end": 269,
      "text": "De acuerdo al tipo de pago anexamos al presente Aviso de transferencia / Orden de Pago. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 269,
      "end": 359,
      "text": "No es necesario responder este correo, ya que ha sido generado por un sistema automático. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 359,
      "end": 681,
      "text": "Indemnizaciones Gastos Médicos Seguros Monterrey New York Life www.mnyl.com.mx Únete a Proyecto Verde No imprimas este mensaje a menos que sea indispensable Aviso de confidencialidad: La información contenida en este mensaje es confidencial, restringida y está destinada únicamente para el uso de la persona a quien se le\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 681,
      "end": 787,
      "text": " dirige, se notifica que se encuentra prohibida cualquier difusión, distribución o copia de este mensaje. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 787,
      "end": 839,
      "text": "Si ha recibido esta comunicación o copia por error,\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 839,
      "end": 880,
      "text": " bórrelo y comuníquese con el remitente. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 880,
      "end": 986,
      "text": "Este correo tiene fines meramente informativos, por lo que no es fuente de obligaciones para el remitente."
    }
  ],
  "passA": {
    "requestSha256": "2f15dae243ce62dc8707ea8cc0f8211dde1d7e02114c10dcabfcd2dfd402a767",
    "capturedAt": "2026-09-20T23:45:17.079Z",
    "elapsedMs": 179.57462499999383,
    "successfulAttemptElapsedMs": 177.70766699999513,
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
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.86
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.13
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
          "noul": 0.1
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 1,
            "active_request": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0,
            "independently_established": 0,
            "no_sensitive_action": 1
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3680,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "a8e6698193b3dae3ffd7c3c1216f48963c04c3c59d8cd4aa8e4b91e42392d523",
    "capturedAt": "2026-09-20T23:45:17.209Z",
    "elapsedMs": 128.8987080000079,
    "successfulAttemptElapsedMs": 127.66979100000754,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:1": 0.01,
            "body:0": 0.21,
            "body:8": 0.01,
            "body:5": 0,
            "body:4": 0.61,
            "body:7": 0.03,
            "body:2": 0.01,
            "body:3": 0.01,
            "body:6": 0,
            "subject:0": 0.01,
            "NONE": 0.1
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 1173,
        "output_tokens": 122
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 309.8013340000034,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1253,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-256",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:16.900Z",
    "offsetMs": 1.1537919999973383
  },
  {
    "seq": 1254,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-256",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:17.078Z",
    "offsetMs": 179.5767499999929,
    "elapsedMs": 177.70766699999513,
    "outcome": "success"
  },
  {
    "seq": 1255,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-256",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:17.080Z",
    "offsetMs": 181.4805420000048
  },
  {
    "seq": 1256,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-256",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:17.208Z",
    "offsetMs": 309.62183400000504,
    "elapsedMs": 127.66979100000754,
    "outcome": "success"
  },
  {
    "seq": 1257,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-256",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:17.209Z",
    "offsetMs": 309.8494590000046,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "072227856b2c32183bf4a777db2ecd41305117bdf084a16ff82ed8907165574c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1254},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1256},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1257}} as const;
export const projectionSha256 = "129cee84d90170105e88ba29d1f03a7e2935c05ebacee06066507443c71c0a67";
