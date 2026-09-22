import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-016",
  "inputSha256": "83aef2f85a88a6ea2fc79792bed30308478d74fa40b1a58509ed27551af949d3",
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
    "requestSha256": "355c466e48fc0e023f9a3c2a566a338fd41b0c8593233ec7a71e026e5e0ed777",
    "capturedAt": "2026-09-22T03:48:29.193Z",
    "elapsedMs": 614.8975100000025,
    "successfulAttemptElapsedMs": 614.1481590000003,
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
          "noul": 0.05
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
          "noul": 0.92
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
          "noul": 0.11
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.32,
            "active_request": 0.68
          },
          "confidence": 0.57
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.96,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.04
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 5082,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "54629f37a786a55d73eb49bc7609683d08cacdf4e3e11f20102522b23974db42",
    "capturedAt": "2026-09-22T03:48:29.742Z",
    "elapsedMs": 547.8337489999976,
    "successfulAttemptElapsedMs": 546.9109440000029,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0,
            "body:8": 0.23,
            "body:3": 0,
            "body:2": 0,
            "body:4": 0.01,
            "body:12": 0,
            "NONE": 0.04,
            "body:9": 0.11,
            "body:7": 0,
            "body:5": 0,
            "body:10": 0,
            "body:11": 0,
            "body:6": 0,
            "body:0": 0.61
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 1231,
        "output_tokens": 161
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1164.3897609999985,
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
    "seq": 74,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-016",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:28.578Z",
    "offsetMs": 0.4706679999981134
  },
  {
    "seq": 75,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-016",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:29.192Z",
    "offsetMs": 614.897606999999,
    "elapsedMs": 614.1481590000003,
    "outcome": "success"
  },
  {
    "seq": 76,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-016",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:29.194Z",
    "offsetMs": 616.7771670000002
  },
  {
    "seq": 77,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-016",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:29.742Z",
    "offsetMs": 1164.178194,
    "elapsedMs": 546.9109440000029,
    "outcome": "success"
  },
  {
    "seq": 78,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-016",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:29.742Z",
    "offsetMs": 1164.430526,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0ec94c93014cfe1b6c358f28d8ddb464a384481a334cd46e33eaf66a7cd9018e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":75},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":77},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":78}} as const;
export const projectionSha256 = "05b9871372b71f5f002d0046a1e1436710be7c6918c96aaef297749114d01fe9";
