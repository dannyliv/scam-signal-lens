import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-466",
  "inputSha256": "84e1ed72c798233a6c06d2bfd8ca426e94955c745719c5fcccbe5214b78731f5",
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
      "end": 76,
      "text": "Y𝅳o⁢u⁮r⁡ 𝅺a⁯c﻿c𝅸o𝅴u⁤n﻿t𝅹 𝅹ha𝅹s ⁭bee⁢n⁤ 𝅸di𝅸sa⁡bled﻿ ID : 0555027149"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 121,
      "text": "Apple Card | Goldman Sachs Estimado cliente: Como parte de nuestro Acuerdo de Seguridad hemos deshabilitado tu Apple ID. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 121,
      "end": 171,
      "text": "Hubo un problema con la información de la cuenta. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 171,
      "end": 236,
      "text": "Revisa toda la información personal y de seguridad en tu cuenta. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 236,
      "end": 292,
      "text": "Puedes reactivar tu cuenta siguiendo las instrucciones. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 292,
      "end": 446,
      "text": "Actualizar cuenta Si no recibimos noticias tuyas en un plazo de 48 horas, tu iCloud será suspendido y cualquier cuenta o información guardada se perderá. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 446,
      "end": 528,
      "text": "Pedimos disculpas por los inconvenientes y esperamos tener noticias tuyas pronto. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 528,
      "end": 623,
      "text": "Presentamos Apple Card Family Ahora puedes compartir la Apple Card con tu grupo de En Familia. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 623,
      "end": 739,
      "text": "Agrega a un compañero, enseña a los niños hábitos de gasto saludables o compártela con quien consideres tu familia. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 739,
      "end": 844,
      "text": "Apple Apple Resumen de Apple ID • Términos de venta • Política de privacidad Copyright © 2022 Apple Inc. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 844,
      "end": 873,
      "text": "Todos los derechos reservados"
    }
  ],
  "passA": {
    "requestSha256": "09f6ef5a3c140928ef8662230cdf005b813acb05cf4e5befe48888f2515c8894",
    "capturedAt": "2026-09-20T23:46:28.353Z",
    "elapsedMs": 161.36620799999218,
    "successfulAttemptElapsedMs": 159.1695409999811,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.14
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.41
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.09
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.43
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.29,
            "sender_supplied": 0.57,
            "independently_established": 0.01,
            "mixed_or_unknown": 0.13
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 3714,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "5e5d86bb4db7c4885b06cd20e3b08a7bfb6106c2b8d7ed54bd6fcd19ae575dad",
    "capturedAt": "2026-09-20T23:46:28.515Z",
    "elapsedMs": 159.77229200000875,
    "successfulAttemptElapsedMs": 157.20358300002408,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.18,
            "NONE": 0.43,
            "body:6": 0.01,
            "body:1": 0,
            "body:9": 0,
            "body:3": 0.03,
            "subject:0": 0,
            "body:8": 0,
            "body:7": 0.01,
            "body:0": 0,
            "body:5": 0,
            "body:4": 0.34
          },
          "confidence": 0.37
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0,
            "body:3": 0,
            "body:6": 0,
            "body:1": 0,
            "body:9": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0,
            "body:8": 0,
            "body:5": 0,
            "body:4": 1
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "body:3": 0,
            "body:7": 0.03,
            "body:1": 0,
            "body:9": 0,
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0.92,
            "body:6": 0.04,
            "body:8": 0,
            "body:5": 0,
            "body:4": 0.01
          },
          "confidence": 0.91
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "NONE": 0.84,
            "body:7": 0,
            "body:1": 0,
            "body:9": 0,
            "body:6": 0,
            "subject:0": 0,
            "body:8": 0,
            "body:0": 0,
            "body:3": 0.05,
            "body:5": 0,
            "body:4": 0.09999999999999999
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 3292,
        "output_tokens": 512
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 323.7220840000082,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
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
        "status": "selected",
        "segmentId": "body:4"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 2289,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-466",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:28.192Z",
    "offsetMs": 1.4582499999960419
  },
  {
    "seq": 2290,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-466",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:28.352Z",
    "offsetMs": 161.36737500000163,
    "elapsedMs": 159.1695409999811,
    "outcome": "success"
  },
  {
    "seq": 2291,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-466",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:28.356Z",
    "offsetMs": 165.2757500000007
  },
  {
    "seq": 2292,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-466",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:28.514Z",
    "offsetMs": 323.16733399999794,
    "elapsedMs": 157.20358300002408,
    "outcome": "success"
  },
  {
    "seq": 2293,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-466",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:28.515Z",
    "offsetMs": 323.84412500000326,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "adf6fd5669cc482480240ebeb9b31512e1486f6ca3e0fff06b4f2426019a9b4c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2290},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2292},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2293}} as const;
export const projectionSha256 = "a280740d418e7a8ab1c5c7e15bed33c92408d70221b708f402d861719831c6c7";
