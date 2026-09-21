import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-225",
  "inputSha256": "69cf9226de1da16e1fd95a2f1b0fe07b938cb65e4bcd095d600a70a11e6e3e20",
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
      "end": 44,
      "text": "RE: Su tarjeta está temporalmente suspendida"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 103,
      "text": "Estimado Cliente, Su tarjeta bancaria ha sido utilizada ilegalmente por la direccion IP 102.44.219.87. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 103,
      "end": 173,
      "text": "Hemos determinado que alguien ha utilizado su tarjeta sin su permiso. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 173,
      "end": 317,
      "text": "Haga clic en el enlace a continuacion para abrir una ventana segura del navegador y siga las instrucciones para proteger su tarjeta del fraude. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 317,
      "end": 479,
      "text": "Aviso : Si esto no se completa dentro de las 24 horas, se nos pedira que suspendamos su tarjeta de manera indefinida, ya que puede usarse con fines fraudulentos. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 479,
      "end": 521,
      "text": "Acceso Clientes Gracias por tu confianza. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 521,
      "end": 607,
      "text": "LA DIGILOSOFIA ES LA OPORTUNIDAD DE ELEGIR COMO, CUANDO Y DONDE QUIERES CONTACTARNOS. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 607,
      "end": 685,
      "text": "Banco Santander, S.A. - Domicilio Social: 1478 Nova Bratia 11 CIF A-99887744 b"
    }
  ],
  "passA": {
    "requestSha256": "c2c3a154d1f1ffa85f75775b13bcadbfcd8d026e1829a25286c22cc9c606263d",
    "capturedAt": "2026-09-20T23:45:06.131Z",
    "elapsedMs": 123.88724999999977,
    "successfulAttemptElapsedMs": 122.01520800001163,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.36
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.71
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.66
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.97,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.03
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3627,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "118e82ffcd635cbab27230d678b7b1f059eaca7c2e9eb907c8a65e616e394516",
    "capturedAt": "2026-09-20T23:45:06.251Z",
    "elapsedMs": 117.21025000000373,
    "successfulAttemptElapsedMs": 115.2032920000056,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.5,
            "NONE": 0.48,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:4": 0.02,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.43
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.81,
            "NONE": 0.18,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:4": 0.01,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.78
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0,
            "NONE": 0,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:4": 0,
            "body:3": 1,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "subject:0": 0.01,
            "body:2": 0.07,
            "NONE": 0.02,
            "body:5": 0,
            "body:6": 0.69,
            "body:1": 0.08,
            "body:4": 0.01,
            "body:3": 0.04,
            "body:0": 0.08
          },
          "confidence": 0.65
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.55,
            "NONE": 0.32,
            "body:5": 0.02,
            "body:6": 0,
            "body:1": 0,
            "body:4": 0,
            "body:3": 0.11,
            "body:0": 0
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 3265,
        "output_tokens": 510
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 243.8504169999942,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:2"
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
        "segmentId": "body:3"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 1100,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-225",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:06.008Z",
    "offsetMs": 1.2486669999925653
  },
  {
    "seq": 1101,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-225",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:06.131Z",
    "offsetMs": 123.88737499999115,
    "elapsedMs": 122.01520800001163,
    "outcome": "success"
  },
  {
    "seq": 1102,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-225",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:06.135Z",
    "offsetMs": 127.72191700000258
  },
  {
    "seq": 1103,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-225",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:06.250Z",
    "offsetMs": 243.65974999999162,
    "elapsedMs": 115.2032920000056,
    "outcome": "success"
  },
  {
    "seq": 1104,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-225",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:06.251Z",
    "offsetMs": 243.88470899999083,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3db4d221db41864b701d93b8bee747b805dc0456fdd53f288b4e0676b480b73f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1101},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1103},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1104}} as const;
export const projectionSha256 = "d614d156ea3b8da5a41aa4947d1040c61acce6e40907897ff1acafaf0cb82962";
