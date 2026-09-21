import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-402",
  "inputSha256": "bb1bb9a0436a4e08221098d4963fd52283b5c7ad29141c859374d5815f885fc7",
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
      "end": 18,
      "text": "Ha ganado un Fedex"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 56,
      "text": "Notificación de entrega de su paquete ID #84271560-984?\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 56,
      "end": 64,
      "text": "EXPRESS\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 64,
      "end": 65,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 65,
      "end": 110,
      "text": "IDENTIFICACIÓN DE SEGUIMIENTO 90544712860044\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 110,
      "end": 111,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 111,
      "end": 136,
      "text": "[Botón naranja] RASTREAR\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 136,
      "end": 137,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 137,
      "end": 225,
      "text": "❗ No pudimos entregar su paquete ya que no había nadie presente para firmar la entrega.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 225,
      "end": 226,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 226,
      "end": 342,
      "text": "✅ Estamos aquí para informarle que necesitamos una confirmación de dirección para reconfirmar el envío del paquete.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 342,
      "end": 343,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 343,
      "end": 370,
      "text": "[Botón azul] CONSULTA AQUÍ\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 370,
      "end": 371,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 371,
      "end": 543,
      "text": "Si ya no desea recibir estos correos electrónicos, puede darse de baja click en el enlace darse de baja o escribiendo a 742 Maple Grove Rd, Ste 210 #884, Fairview, CO 80439"
    }
  ],
  "passA": {
    "requestSha256": "072b6530f63aad43347b3cea7e9f3b50795fbee68936b009d2c50832ec812b70",
    "capturedAt": "2026-09-20T23:46:07.067Z",
    "elapsedMs": 152.18070799999987,
    "successfulAttemptElapsedMs": 150.07012499999837,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.3
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.39
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.4
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.13
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.79,
            "no_sensitive_action": 0.2,
            "independently_established": 0
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 3608,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c624a64b6787659d0c166930d46d1dd67bbdaefddd7b8a534b92e1a072bfb565",
    "capturedAt": "2026-09-20T23:46:07.230Z",
    "elapsedMs": 162.1730840000091,
    "successfulAttemptElapsedMs": 160.25658399998792,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:12": 0,
            "body:5": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:9": 0.38,
            "body:3": 0,
            "NONE": 0.48,
            "body:11": 0.11,
            "body:1": 0,
            "body:6": 0,
            "body:8": 0.01,
            "body:0": 0,
            "body:13": 0,
            "body:10": 0,
            "body:4": 0.02,
            "body:7": 0
          },
          "confidence": 0.44
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:12": 0,
            "body:5": 0,
            "body:2": 0,
            "subject:0": 0.01,
            "body:3": 0,
            "body:9": 0.32,
            "NONE": 0.36,
            "body:11": 0.01,
            "body:1": 0.09,
            "body:6": 0,
            "body:4": 0.01,
            "body:0": 0,
            "body:13": 0,
            "body:10": 0.01,
            "body:8": 0,
            "body:7": 0.19
          },
          "confidence": 0.31
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:12": 0,
            "body:5": 0,
            "subject:0": 0.21000000000000002,
            "body:2": 0,
            "body:9": 0.49,
            "body:3": 0.02,
            "NONE": 0.03,
            "body:1": 0.01,
            "body:11": 0,
            "body:6": 0,
            "body:4": 0,
            "body:0": 0.12,
            "body:10": 0,
            "body:13": 0,
            "body:8": 0,
            "body:7": 0.12
          },
          "confidence": 0.44
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:5": 0.01,
            "body:12": 0,
            "body:2": 0,
            "body:3": 0,
            "body:9": 0.04,
            "NONE": 0.76,
            "body:11": 0.17,
            "body:1": 0,
            "body:6": 0,
            "body:4": 0.01,
            "body:0": 0,
            "body:13": 0,
            "body:10": 0,
            "body:8": 0.01,
            "body:7": 0
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 2970,
        "output_tokens": 670
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 316.23104199999943,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 1971,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-402",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:06.916Z",
    "offsetMs": 1.6722079999744892
  },
  {
    "seq": 1972,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-402",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:07.066Z",
    "offsetMs": 152.18349999998463,
    "elapsedMs": 150.07012499999837,
    "outcome": "success"
  },
  {
    "seq": 1973,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-402",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:07.069Z",
    "offsetMs": 155.12249999999767
  },
  {
    "seq": 1974,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-402",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:07.230Z",
    "offsetMs": 315.89816699997755,
    "elapsedMs": 160.25658399998792,
    "outcome": "success"
  },
  {
    "seq": 1975,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-402",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:07.231Z",
    "offsetMs": 316.295541999978,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7d592569b3ad7d0ab5540e29f6353d9cd13dc3246134eac4205d31488c4ce0c6";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1972},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1974},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1975}} as const;
export const projectionSha256 = "9822556935454a4776f5fb66d573084b1ebd5a8fb4a1c70118045896d0d7c5ee";
