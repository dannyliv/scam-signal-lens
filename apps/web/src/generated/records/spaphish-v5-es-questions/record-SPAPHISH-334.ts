import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-334",
  "inputSha256": "ce0c4ddcd9886d2dc8112301a5cb3b16fc7fdebe41a67c52090db4433aa3d622",
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
    "requestSha256": "e855527c7b31561d8e196cc639a922a38e8696956e558aaaa4ceab6524aa0a8a",
    "capturedAt": "2026-09-22T03:54:51.399Z",
    "elapsedMs": 604.7738740000059,
    "successfulAttemptElapsedMs": 603.7560260000173,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.25
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.5
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.22
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.21
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.24,
            "informational": 0.75,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0
          },
          "confidence": 0.67
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.05,
            "sender_supplied": 0.5,
            "no_sensitive_action": 0.43,
            "independently_established": 0.02
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 5103,
        "output_tokens": 351
      }
    }
  },
  "passB": {
    "requestSha256": "adc6892376eac4aaa2cd4b92fc7eb317be16d433d62d35e11930c0cc786aa7f4",
    "capturedAt": "2026-09-22T03:54:52.045Z",
    "elapsedMs": 644.9259009999805,
    "successfulAttemptElapsedMs": 643.8803770000231,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.52,
            "body:1": 0,
            "body:0": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:4": 0.01,
            "body:5": 0,
            "body:3": 0.47,
            "body:2": 0,
            "body:6": 0
          },
          "confidence": 0.45
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "NONE": 0.31,
            "body:1": 0,
            "body:0": 0,
            "body:7": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:4": 0.03,
            "body:2": 0,
            "body:3": 0.66,
            "body:6": 0
          },
          "confidence": 0.61
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:6": 0.84,
            "body:1": 0.02,
            "body:0": 0.04,
            "subject:0": 0,
            "body:4": 0.03,
            "body:5": 0,
            "body:7": 0,
            "body:2": 0.02,
            "body:3": 0.02,
            "NONE": 0.03
          },
          "confidence": 0.82
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.68,
            "body:1": 0,
            "body:0": 0,
            "body:7": 0.09,
            "subject:0": 0,
            "body:4": 0.01,
            "body:5": 0.14,
            "body:3": 0.07,
            "body:2": 0,
            "body:6": 0
          },
          "confidence": 0.63
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:6": 0,
            "body:1": 0,
            "body:5": 0.03,
            "subject:0": 0,
            "body:7": 0.01,
            "body:0": 0,
            "body:4": 0.2,
            "body:3": 0.54,
            "body:2": 0.01,
            "NONE": 0.21
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 4037,
        "output_tokens": 554
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1251.5872719999752,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
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
        "status": "low_confidence",
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
    "seq": 1632,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-334",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:50.794Z",
    "offsetMs": 0.811416000011377
  },
  {
    "seq": 1633,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-334",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:51.398Z",
    "offsetMs": 604.7742590000271,
    "elapsedMs": 603.7560260000173,
    "outcome": "success"
  },
  {
    "seq": 1634,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-334",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:51.401Z",
    "offsetMs": 607.1771270000027
  },
  {
    "seq": 1635,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-334",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:52.045Z",
    "offsetMs": 1251.2942349999794,
    "elapsedMs": 643.8803770000231,
    "outcome": "success"
  },
  {
    "seq": 1636,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-334",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:52.045Z",
    "offsetMs": 1251.6459589999868,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1650af71421ebac64cb51733fde777e027689d647a452d6d090728111815c3f0";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1633},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1635},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1636}} as const;
export const projectionSha256 = "e52f92c318e459905abe6c2415a70e6c05314b7c513516be30276c27556841d4";
