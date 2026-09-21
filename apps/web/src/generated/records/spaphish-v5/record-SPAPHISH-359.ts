import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-359",
  "inputSha256": "a37ac3bf171d10c3627b27143f87efda31d06ed6ef704d88344dda1d8599d7a9",
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
      "end": 80,
      "text": "Ezequiela Miguelina - Tu paquete de FedEx está esperando – Completa tu entrega ."
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 80,
      "end": 82,
      "text": "📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 13,
      "text": "FedEx España\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 13,
      "end": 37,
      "text": "Notificación de entrega\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 37,
      "end": 38,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 38,
      "end": 66,
      "text": "¡Su paquete está en camino!\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 66,
      "end": 117,
      "text": "Se entregará (1) paquete a su dirección en España.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 117,
      "end": 118,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 118,
      "end": 188,
      "text": "Use el código a continuación para rastrear su paquete en tiempo real.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 188,
      "end": 275,
      "text": "Planifique su entrega y manténgase informado con nuestras notificaciones instantáneas.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 275,
      "end": 329,
      "text": "Nos aseguramos de que su entrega sea rápida y segura.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 329,
      "end": 330,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 330,
      "end": 347,
      "text": "Rastree su envío\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 347,
      "end": 395,
      "text": "Rastree su paquete de manera rápida y sencilla:\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 395,
      "end": 396,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 396,
      "end": 432,
      "text": "Número de seguimiento: [9927846130]\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 432,
      "end": 433,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 433,
      "end": 514,
      "text": "Si no desea recibir más correos de este tipo, haga clic aquí para darse de baja.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 514,
      "end": 515,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 515,
      "end": 562,
      "text": "Política de privacidad | Términos y condiciones"
    }
  ],
  "passA": {
    "requestSha256": "d6e73ae013c4349bbc51db0260db5dff8ba0d2e06b98b76d07aa0b349cf89513",
    "capturedAt": "2026-09-20T23:45:53.369Z",
    "elapsedMs": 147.47554100000707,
    "successfulAttemptElapsedMs": 145.62079200000153,
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
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.14
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.11
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.84,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0.16
          },
          "confidence": 0.78
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0.83,
            "sender_supplied": 0.17
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 3597,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "735be793a7e1df3e46cc1ebf5a54004832d52da5419dbd8827c1b00863fc1eb2",
    "capturedAt": "2026-09-21T00:57:29.637Z",
    "elapsedMs": 120.45366600000125,
    "successfulAttemptElapsedMs": 118.47454200000175,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:15": 0,
            "body:1": 0.03,
            "body:5": 0,
            "subject:0": 0.03,
            "subject:1": 0,
            "body:3": 0,
            "body:7": 0.01,
            "body:17": 0,
            "body:4": 0,
            "body:2": 0,
            "NONE": 0.04,
            "body:0": 0.8,
            "body:16": 0,
            "body:12": 0,
            "body:11": 0,
            "body:8": 0.060000000000000005,
            "body:14": 0,
            "body:13": 0,
            "body:10": 0,
            "body:9": 0,
            "body:6": 0.03
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 1140,
        "output_tokens": 220
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 421.9628750000029,
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
        "segmentId": "body:0"
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
    "seq": 1759,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-359",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:53.223Z",
    "offsetMs": 1.2149999999965075
  },
  {
    "seq": 1760,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-359",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:53.369Z",
    "offsetMs": 147.4759170000034,
    "elapsedMs": 145.62079200000153,
    "outcome": "success"
  },
  {
    "seq": 1761,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-359",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:53.372Z",
    "offsetMs": 151.0209590000013
  },
  {
    "seq": 1762,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-359",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:53.522Z",
    "offsetMs": 300.23579200000677,
    "elapsedMs": 148.50691700000607,
    "outcome": "success"
  },
  {
    "seq": 1763,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-359",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:53.522Z",
    "offsetMs": 300.4073340000032,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2738,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-359",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:29.518Z",
    "offsetMs": 2.160791000000245
  },
  {
    "seq": 2739,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-359",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:29.637Z",
    "offsetMs": 121.17849999999999,
    "elapsedMs": 118.47454200000175,
    "outcome": "success"
  },
  {
    "seq": 2740,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-359",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:29.637Z",
    "offsetMs": 121.48491599999943,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0a94defed815ca882d137af7828fdbc7d17654102a313637f608f096fa516f30";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1760},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2739},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2740}} as const;
export const projectionSha256 = "c0f2862b3bbc5df1159a9639fff616ecaa1d15a8d02e9a637ef2cc6513757974";
