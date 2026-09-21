import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-325",
  "inputSha256": "2083f43b9d6e13ed4258d16914f9013d4e9d274bc7cf641804fc9108d0ff0eba",
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
      "end": 54,
      "text": "Aviso de disponibilidad de extensión de distinción SNI"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 6,
      "text": "AVISO\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 6,
      "end": 7,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 7,
      "end": 311,
      "text": "A las investigadoras e investigadores que deseen solicitar la extensión de su vigencia en apego al Reglamento publicado el 10 de agosto de 2022 en el Diario Oficial de la Federación, que podrán tramitarla en la plataforma del Sistema Nacional de Becarios (SNB) de la forma descrita en la siguiente liga:\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 311,
      "end": 312,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 312,
      "end": 435,
      "text": "https://consejonacional.mx/wp-content/uploads/snb/tramites_servicios/Guia_para_extension_de_vigencia_otras_modalidades.pdf\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 435,
      "end": 436,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 436,
      "end": 728,
      "text": "Para recibir asistencia técnica, se encuentra a su disposición el Centro de Soporte Técnico en el número telefónico 55 9876 5432 en el área metropolitana o en el 800 123 4567 desde el interior de la República, en días hábiles de lunes a viernes de 9:00 a 18:00 (tiempo del Centro de México). "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 728,
      "end": 855,
      "text": "Asimismo, podrá utilizar la dirección electrónica: soporte.tecnico@consejonacional.mxmailto:soporte.tecnico@consejonacional.mx\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 855,
      "end": 856,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 856,
      "end": 868,
      "text": "Atentamente\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 868,
      "end": 869,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 869,
      "end": 897,
      "text": "SISTEMA NACIONAL DE BECARIOS"
    }
  ],
  "passA": {
    "requestSha256": "b6ec88b8039fb821c2df460f7500e1ebd3cb32e26792bd2906c324e5d069a56e",
    "capturedAt": "2026-09-20T23:45:41.359Z",
    "elapsedMs": 227.70424999999523,
    "successfulAttemptElapsedMs": 225.810249999995,
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
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.09
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.92,
            "active_request": 0.08
          },
          "confidence": 0.89
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.77,
            "sender_supplied": 0.23,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 3693,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "430968fc951134fc768684d0879e6e7b9f7ec64846ae5dfa15e1c7d06dc4009b",
    "capturedAt": "2026-09-20T23:45:41.511Z",
    "elapsedMs": 149.99316699999326,
    "successfulAttemptElapsedMs": 147.77737500000512,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "body:6": 0.28,
            "body:8": 0.01,
            "body:0": 0,
            "body:1": 0,
            "subject:0": 0.01,
            "body:9": 0.01,
            "body:4": 0,
            "body:7": 0,
            "body:2": 0.09,
            "NONE": 0.02,
            "body:3": 0,
            "body:5": 0,
            "body:11": 0.58,
            "body:10": 0
          },
          "confidence": 0.54
        }
      },
      "usage": {
        "input_tokens": 1241,
        "output_tokens": 152
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 380.6843329999974,
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
    "seq": 1589,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-325",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:41.132Z",
    "offsetMs": 1.3739579999964917
  },
  {
    "seq": 1590,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-325",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:41.358Z",
    "offsetMs": 227.70404199999757,
    "elapsedMs": 225.810249999995,
    "outcome": "success"
  },
  {
    "seq": 1591,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-325",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:41.362Z",
    "offsetMs": 231.89412500000617
  },
  {
    "seq": 1592,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-325",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:41.511Z",
    "offsetMs": 380.3534170000057,
    "elapsedMs": 147.77737500000512,
    "outcome": "success"
  },
  {
    "seq": 1593,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-325",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:41.511Z",
    "offsetMs": 380.77324999999837,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "dca0bffb2757ed61acabbfb8540327c5d8dc0cd6b55eac5f00d8f59920c25903";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1590},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1592},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1593}} as const;
export const projectionSha256 = "81bc16b9663e24424b5e0b2705d3d71b3feda1aad63db38114495963cb5a953e";
