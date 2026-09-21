import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-016",
  "inputSha256": "83aef2f85a88a6ea2fc79792bed30308478d74fa40b1a58509ed27551af949d3",
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
      "end": 30,
      "text": "invitación curso especializado"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 168,
      "text": "El Instituto Geográfico Urbano hace una cordial invitación a participar en el curso en línea \"Análisis en paisajes socioecológicos\" que comienza el próximo 20 de mayo.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 168,
      "end": 169,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 169,
      "end": 335,
      "text": "La información sobre este curso la podrá encontrar en https://www.geourbano.edu.mx/formacion-a-distancia/curso-especializado-en-analisis-en-paisajes-socio-ecologicos\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 335,
      "end": 336,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 336,
      "end": 467,
      "text": "[image: image.png] https://www.geourbano.edu.mx/formacion-a-distancia/curso-especializado-en-analisis-en-paisajes-socio-ecologicos\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 467,
      "end": 468,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 468,
      "end": 487,
      "text": " Saludos cordiales\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 487,
      "end": 488,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 488,
      "end": 493,
      "text": "Dra. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 493,
      "end": 550,
      "text": "Ximena Robles Alcántara Difusión Tel. (81) 82956789 ext. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 550,
      "end": 567,
      "text": "3451 Guadalajara\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 567,
      "end": 568,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 568,
      "end": 617,
      "text": "www.geourbano.edu.mx http://www.geourbano.edu.mx/"
    }
  ],
  "passA": {
    "requestSha256": "0124545bd051d42921795f20888b0276df583dd47ea4839ba6dfdb08354a2740",
    "capturedAt": "2026-09-20T23:43:56.170Z",
    "elapsedMs": 189.54066599999987,
    "successfulAttemptElapsedMs": 188.25424999999996,
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
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 0.7,
            "informational": 0.3
          },
          "confidence": 0.6
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.03,
            "no_sensitive_action": 0.97,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3632,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "b6f89bda26af9ff06fb41661bf641eae75da1a003db65918dfd54b579e412d8f",
    "capturedAt": "2026-09-20T23:43:56.323Z",
    "elapsedMs": 150.01091600000018,
    "successfulAttemptElapsedMs": 148.171875,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:3": 0,
            "body:2": 0,
            "NONE": 0.01,
            "body:7": 0,
            "body:1": 0,
            "body:0": 0.85,
            "body:6": 0,
            "body:11": 0,
            "body:5": 0,
            "body:9": 0.03,
            "body:8": 0.11,
            "body:10": 0,
            "body:12": 0,
            "subject:0": 0,
            "body:4": 0
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 1131,
        "output_tokens": 161
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 342.5528340000001,
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 74,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-016",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:55.981Z",
    "offsetMs": 0.691834000000199
  },
  {
    "seq": 75,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-016",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:56.170Z",
    "offsetMs": 189.54216700000052,
    "elapsedMs": 188.25424999999996,
    "outcome": "success"
  },
  {
    "seq": 76,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-016",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:56.173Z",
    "offsetMs": 193.30366700000013
  },
  {
    "seq": 77,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-016",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:56.322Z",
    "offsetMs": 342.30604200000016,
    "elapsedMs": 148.171875,
    "outcome": "success"
  },
  {
    "seq": 78,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-016",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:56.323Z",
    "offsetMs": 342.6075840000003,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ce3d4a056e63ec6ad2bdd63830c69ec0b218c554fd0303960408b4c1dacc9fb1";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":75},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":77},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":78}} as const;
export const projectionSha256 = "71c6f44965a01718bcfdbfef6dde8b299f69963b29c6d51484477e8dad78be95";
