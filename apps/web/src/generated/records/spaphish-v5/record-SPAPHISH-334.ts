import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-334",
  "inputSha256": "ce0c4ddcd9886d2dc8112301a5cb3b16fc7fdebe41a67c52090db4433aa3d622",
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
      "end": 49,
      "text": "Cita Registrada para la fecha 15/04/2025 11:05:00"
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
      "end": 320,
      "text": "Te sugerimos tener a la mano la información contenida en el acuse que se adjunta; en él podrás identificar el día, la hora, el servicio y la Oficina de Atención al Ciudadano (OAC) o Centro de Soporte al Contribuyente (CSC) que seleccionaste. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 320,
      "end": 418,
      "text": "Si necesitas consultarla o cancelarla ingresa aquí con tu Clave Fiscal (CF) y correo electrónico. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 418,
      "end": 585,
      "text": "Si eres persona física, genera o renueva tu Clave de Acceso o renueva tu Firma Electrónica Avanzada (FEA) (caduca no mayor a un año) a través de Identificador Fiscal. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 585,
      "end": 627,
      "text": "¡No necesitas acudir a nuestras oficinas! "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 627,
      "end": 693,
      "text": "CitaFiscal a tu alcance Atentamente: Agencia Tributaria Nacional. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 693,
      "end": 755,
      "text": "\"Favor de no responder a este mensaje, es un envío automático\""
    }
  ],
  "passA": {
    "requestSha256": "2e23ef3b6f0d38aef149b3c9f69490f58b3ddb97ab57559e3b32ac2da03582d9",
    "capturedAt": "2026-09-20T23:45:44.549Z",
    "elapsedMs": 217.22162499999104,
    "successfulAttemptElapsedMs": 215.19150000000081,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.11
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.51
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
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
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
          "noul": 0.37
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
            "mixed_or_unknown": 0.03,
            "no_sensitive_action": 0.29,
            "independently_established": 0.04,
            "sender_supplied": 0.64
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 3653,
        "output_tokens": 351
      }
    }
  },
  "passB": {
    "requestSha256": "f7273a5813702d6c9b1642eae7a029e45015618120b0e5638e4ba9c066308b7c",
    "capturedAt": "2026-09-21T00:57:28.770Z",
    "elapsedMs": 120.26279200000135,
    "successfulAttemptElapsedMs": 118.46716600000036,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:4": 0.02,
            "body:6": 0,
            "body:5": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:7": 0,
            "body:1": 0,
            "NONE": 0.11,
            "body:3": 0.87
          },
          "confidence": 0.85
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:4": 0.02,
            "body:5": 0.01,
            "body:6": 0.82,
            "body:2": 0.04,
            "body:3": 0.02,
            "body:0": 0.06,
            "body:1": 0.01,
            "body:7": 0,
            "NONE": 0.02,
            "subject:0": 0
          },
          "confidence": 0.8
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:4": 0.08,
            "body:5": 0.02,
            "body:6": 0,
            "body:2": 0.06,
            "subject:0": 0,
            "body:0": 0,
            "body:7": 0.01,
            "body:1": 0,
            "NONE": 0.04,
            "body:3": 0.79
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 2300,
        "output_tokens": 335
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 458.422415999994,
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
    "seq": 1634,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-334",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:44.333Z",
    "offsetMs": 1.3990829999966081
  },
  {
    "seq": 1635,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-334",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:44.549Z",
    "offsetMs": 217.22387499999604,
    "elapsedMs": 215.19150000000081,
    "outcome": "success"
  },
  {
    "seq": 1636,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-334",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:44.551Z",
    "offsetMs": 219.39345800000592
  },
  {
    "seq": 1637,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-334",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:44.669Z",
    "offsetMs": 336.94833300000755,
    "elapsedMs": 116.99020900001051,
    "outcome": "success"
  },
  {
    "seq": 1638,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-334",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:44.669Z",
    "offsetMs": 337.14429100000416,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2720,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-334",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:28.651Z",
    "offsetMs": 2.0248329999994894
  },
  {
    "seq": 2721,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-334",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:28.770Z",
    "offsetMs": 120.91458299999977,
    "elapsedMs": 118.46716600000036,
    "outcome": "success"
  },
  {
    "seq": 2722,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-334",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:28.770Z",
    "offsetMs": 121.18504100000064,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6d9244ddd6a7a98ee3c9c2f2b23f866a6c3960e7e5067a3882e2dae4bf7015ff";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1635},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2721},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2722}} as const;
export const projectionSha256 = "33adb6daf89ecb0657568fc142009c8e647b1171b012d39b3d55d4999e828dc1";
