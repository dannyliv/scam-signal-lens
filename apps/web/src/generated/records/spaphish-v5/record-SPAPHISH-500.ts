import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-500",
  "inputSha256": "f8f5458dadd93556eaf81bce67c3afb2792c41b87de2b7819ee328683f3c6046",
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
      "end": 55,
      "text": "Alerta de inicio de sesión en Chrome en Motorola Moto X"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 16,
      "text": "Hola, genovevo. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 16,
      "end": 108,
      "text": "Recientemente se inició sesión en su cuenta desde un navegador o dispositivo no reconocido. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 108,
      "end": 120,
      "text": "¿Fue usted? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 120,
      "end": 165,
      "text": "Nuevo inicio de sesión hoy a las 11:50 a. m. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 165,
      "end": 359,
      "text": "Cerca de Râmnicu Vâlcea, Rumania Chrome en Motorola Moto X Alerta de inicio de sesión Hola, genovevo: Recientemente se inició sesión en su cuenta desde un navegador o dispositivo no reconocido. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 359,
      "end": 371,
      "text": "¿Fue usted? "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 371,
      "end": 419,
      "text": "Nuevo inicio de sesión Martes a las 11:50 a. m. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 419,
      "end": 587,
      "text": "Cerca de Râmnicu Vâlcea, Rumania Chrome en Motorola Moto X Revisar el inicio de sesión Administrar alertas Este mensaje fue enviado a genovevo.Sanchez@enterprise.com . "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 587,
      "end": 684,
      "text": "Si no desea recibir estos correos electrónicos de Facebook en el futuro, cancele la suscripción ."
    }
  ],
  "passA": {
    "requestSha256": "23779de884cbdcda764491b0fcf09d988894fb1b9eeabb93714d94e966d458a1",
    "capturedAt": "2026-09-20T23:46:39.664Z",
    "elapsedMs": 132.5592079999915,
    "successfulAttemptElapsedMs": 129.74799999999232,
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
          "noul": 0.25
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.61
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.1
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.19
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0,
            "active_request": 0.85,
            "informational": 0.14
          },
          "confidence": 0.8
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.11,
            "no_sensitive_action": 0.84,
            "mixed_or_unknown": 0.03,
            "independently_established": 0.02
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 3618,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "5534e5e24ff042d598d5331b4db41d184216ff84097b5e7a946cec7a3e353a83",
    "capturedAt": "2026-09-20T23:46:39.899Z",
    "elapsedMs": 232.62537500000326,
    "successfulAttemptElapsedMs": 228.6856249999837,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0.17,
            "body:1": 0.02,
            "body:2": 0.1,
            "body:4": 0,
            "NONE": 0.64,
            "body:5": 0.03,
            "body:0": 0,
            "subject:0": 0.01,
            "body:8": 0.01,
            "body:3": 0.02,
            "body:6": 0
          },
          "confidence": 0.6
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0.11,
            "body:1": 0.01,
            "NONE": 0.81,
            "body:4": 0.01,
            "body:2": 0.01,
            "body:5": 0,
            "body:0": 0,
            "subject:0": 0.01,
            "body:8": 0.04,
            "body:3": 0,
            "body:6": 0
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 1617,
        "output_tokens": 237
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 368.1491250000254,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "none_selected",
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
    "seq": 2457,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-500",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:39.533Z",
    "offsetMs": 2.1257500000065193
  },
  {
    "seq": 2458,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-500",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:39.664Z",
    "offsetMs": 132.56291700000293,
    "elapsedMs": 129.74799999999232,
    "outcome": "success"
  },
  {
    "seq": 2459,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-500",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:39.669Z",
    "offsetMs": 138.2341670000169
  },
  {
    "seq": 2460,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-500",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:39.899Z",
    "offsetMs": 367.8100840000261,
    "elapsedMs": 228.6856249999837,
    "outcome": "success"
  },
  {
    "seq": 2461,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-500",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:39.899Z",
    "offsetMs": 368.2427500000049,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "64aa415fedec060791b07041c83feda5287ef64c41b4858c7290bebfb8f20847";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2458},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2460},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2461}} as const;
export const projectionSha256 = "e6595d586b345f1fd74d782d2dbd62c2890bb98c4abd56ab9564d381d7ee80e6";
