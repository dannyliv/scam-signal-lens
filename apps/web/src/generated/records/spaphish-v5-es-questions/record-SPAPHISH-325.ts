import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-325",
  "inputSha256": "2083f43b9d6e13ed4258d16914f9013d4e9d274bc7cf641804fc9108d0ff0eba",
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
    "requestSha256": "c37fc0965fba89898e2cde03da29aaddab26a10e49c28e5934d26fd0300b2f23",
    "capturedAt": "2026-09-22T03:54:40.323Z",
    "elapsedMs": 687.2548559999559,
    "successfulAttemptElapsedMs": 686.1109389999765,
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
          "noul": 0.06
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.13
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.6900000000000001,
            "active_request": 0.31,
            "educational_or_quoted": 0
          },
          "confidence": 0.58
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.11,
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.88
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 5143,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "eb0544cae2aa5abe709e42d1c4c3e8935b1cf974d2955b2ec7c8b4e7d36c9a32",
    "capturedAt": "2026-09-22T03:54:40.894Z",
    "elapsedMs": 569.5439020000049,
    "successfulAttemptElapsedMs": 568.4077309999848,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:10": 0,
            "body:4": 0,
            "body:3": 0,
            "NONE": 0.04,
            "body:8": 0,
            "body:1": 0,
            "body:5": 0,
            "body:11": 0.45,
            "body:7": 0.01,
            "subject:0": 0.01,
            "body:0": 0,
            "body:2": 0.03,
            "body:9": 0,
            "body:6": 0.46
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 1341,
        "output_tokens": 151
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1258.2970970000024,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
    ],
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1587,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-325",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:39.636Z",
    "offsetMs": 0.9209619999746792
  },
  {
    "seq": 1588,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-325",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:40.323Z",
    "offsetMs": 687.2527520000003,
    "elapsedMs": 686.1109389999765,
    "outcome": "success"
  },
  {
    "seq": 1589,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-325",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:40.325Z",
    "offsetMs": 689.4031439999817
  },
  {
    "seq": 1590,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-325",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:40.894Z",
    "offsetMs": 1258.057443000027,
    "elapsedMs": 568.4077309999848,
    "outcome": "success"
  },
  {
    "seq": 1591,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-325",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:40.894Z",
    "offsetMs": 1258.3524389999802,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2ba5b503882ccb9d08792180c9e76c6277ecbbae4ed12b41499ed955b72d3fcd";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1588},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1590},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1591}} as const;
export const projectionSha256 = "aff8f89c488ccd88dac9ade10c11009ccda96b743052fac6496a00d7794bad3f";
