import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-466",
  "inputSha256": "84e1ed72c798233a6c06d2bfd8ca426e94955c745719c5fcccbe5214b78731f5",
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
    "requestSha256": "93bf336bdad174cca62fc3a25d87b130101d956bdd596269c7a81858dd5c9ea4",
    "capturedAt": "2026-09-22T03:57:27.503Z",
    "elapsedMs": 582.8013440000359,
    "successfulAttemptElapsedMs": 581.4590230000904,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.12
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.42
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.37
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
          "noul": 0.03
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
            "mixed_or_unknown": 0.07,
            "sender_supplied": 0.62,
            "no_sensitive_action": 0.31,
            "independently_established": 0
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 5164,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "be0dbb1128499b569eaa7383e54933e1ac0e6c0d2dbda7904d1a10a0aa72c476",
    "capturedAt": "2026-09-22T03:57:28.150Z",
    "elapsedMs": 646.1159589999588,
    "successfulAttemptElapsedMs": 644.5113490000367,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:8": 0,
            "body:7": 0,
            "subject:0": 0.01,
            "body:5": 0,
            "body:6": 0,
            "body:4": 0.29000000000000004,
            "body:3": 0.08,
            "body:9": 0,
            "NONE": 0.44,
            "body:2": 0.18,
            "body:0": 0
          },
          "confidence": 0.38
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "NONE": 0,
            "body:7": 0,
            "body:8": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:3": 0,
            "body:4": 1,
            "body:6": 0,
            "body:9": 0,
            "body:2": 0,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "body:7": 0.02,
            "body:8": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:3": 0.01,
            "body:4": 0.01,
            "body:6": 0.01,
            "body:2": 0,
            "body:9": 0,
            "NONE": 0.01,
            "body:0": 0.93
          },
          "confidence": 0.92
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.67,
            "body:7": 0,
            "body:8": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:3": 0.1,
            "body:4": 0.2,
            "body:6": 0,
            "body:1": 0,
            "body:9": 0,
            "body:2": 0.02,
            "body:0": 0
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 3716,
        "output_tokens": 512
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1230.686246000114,
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
    "seq": 2288,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-466",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:26.921Z",
    "offsetMs": 1.1434580000350252
  },
  {
    "seq": 2289,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-466",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:27.503Z",
    "offsetMs": 582.8017800000962,
    "elapsedMs": 581.4590230000904,
    "outcome": "success"
  },
  {
    "seq": 2290,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-466",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:27.505Z",
    "offsetMs": 585.4317530000117
  },
  {
    "seq": 2291,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-466",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:28.150Z",
    "offsetMs": 1230.2579630000982,
    "elapsedMs": 644.5113490000367,
    "outcome": "success"
  },
  {
    "seq": 2292,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-466",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:28.151Z",
    "offsetMs": 1230.7323719999986,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9817426f81b1c11fa4719e0bd506e2baedc547e3e9443501b98f78ea1711a95b";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2289},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2291},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2292}} as const;
export const projectionSha256 = "165a9e10b9525824053888c769be573e20fe0eb11082c8a18f9cc6b7bb6d106c";
