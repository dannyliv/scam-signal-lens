import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-256",
  "inputSha256": "016eb92c9745fbe4f6bca9cad37486a6efbc61770fc41a9cd71a36e5039d08c2",
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
    "requestSha256": "149bde0b19042262abeb46d86d881ee28b784cc51f3c8b57e8eccf01353aef38",
    "capturedAt": "2026-09-22T03:53:17.340Z",
    "elapsedMs": 655.9474329999648,
    "successfulAttemptElapsedMs": 654.8061860000016,
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
          "noul": 0.04
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
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.1
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 1,
            "active_request": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.99,
            "sender_supplied": 0,
            "independently_established": 0.01
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 5130,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "0282cc290e60898c383149370dcef613eba89f714e430b9e420bbf10b9865f1e",
    "capturedAt": "2026-09-22T03:53:17.940Z",
    "elapsedMs": 598.3447930000257,
    "successfulAttemptElapsedMs": 597.1448000000091,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:8": 0.01,
            "body:6": 0,
            "body:5": 0,
            "body:0": 0.2,
            "NONE": 0.28,
            "subject:0": 0.01,
            "body:3": 0.01,
            "body:2": 0.01,
            "body:7": 0.04,
            "body:1": 0.01,
            "body:4": 0.43
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 1273,
        "output_tokens": 122
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1255.8760940000066,
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
    "seq": 1249,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-256",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:16.685Z",
    "offsetMs": 0.8187139999936335
  },
  {
    "seq": 1250,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-256",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:17.340Z",
    "offsetMs": 655.9508229999919,
    "elapsedMs": 654.8061860000016,
    "outcome": "success"
  },
  {
    "seq": 1251,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-256",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:17.342Z",
    "offsetMs": 658.0877179999952
  },
  {
    "seq": 1252,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-256",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:17.940Z",
    "offsetMs": 1255.6825410000165,
    "elapsedMs": 597.1448000000091,
    "outcome": "success"
  },
  {
    "seq": 1253,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-256",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:17.940Z",
    "offsetMs": 1255.9192780000158,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "168c8dab6f588440b94023e5b9a88455f83d422fa782fafeaae5007cf445bc48";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1250},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1252},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1253}} as const;
export const projectionSha256 = "d1d3c5bace2c09d125fd457f0ea1d1aee86e1e686b2105cc4de15f8a57fb69f3";
