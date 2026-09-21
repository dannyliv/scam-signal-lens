import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-456",
  "inputSha256": "c689c30bde45c153fbf5841e0fb6d35a8428a9ad8cb4600a18ab2a64ad68de67",
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
      "end": 72,
      "text": "🚗 Missxtranger, ¡Obtén tu Kit de emergencia para el auto gratis ahora! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 72,
      "end": 105,
      "text": "¡No dejes pasar esta oportunidad!"
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 105,
      "end": 112,
      "text": "🚨 ID#?"
    },
    {
      "id": "subject:3",
      "source": "subject",
      "start": 112,
      "end": 122,
      "text": "=0657035 !"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 21,
      "text": "Allianz Assistance?? "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 21,
      "end": 80,
      "text": "Kit de Emergencia para coche Gratis Hola Marina Ledezma, ??"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 80,
      "end": 93,
      "text": "Felicidades! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 93,
      "end": 148,
      "text": "Has sido seleccionado como ganador de nuestra promoci??"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 148,
      "end": 160,
      "text": "n especial. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 160,
      "end": 252,
      "text": "Solicita tu Kit de Emergencia para coche gratis hoy respondiendo a unas breves preguntas. ??"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 252,
      "end": 257,
      "text": "Obt??"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 257,
      "end": 270,
      "text": "nlo ahora! ??"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 270,
      "end": 277,
      "text": "Solic??"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 277,
      "end": 289,
      "text": "talo ahora! "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 289,
      "end": 335,
      "text": "Si ya no deseas recibir estos correos electr??"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 335,
      "end": 386,
      "text": "nicos, puedes darte de baja haciendo clic en aqu?? "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 386,
      "end": 426,
      "text": "El anunciante no gestiona tu suscripci??"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 426,
      "end": 429,
      "text": "n. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 429,
      "end": 456,
      "text": "Si ya no deseas recibir m??"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 456,
      "end": 501,
      "text": "s comunicaciones, puedes darte de baja aqu?? "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 501,
      "end": 568,
      "text": "O escribe a: 128 Willow Crest Rd Ste 402#5912, Northwood, VT, 05744"
    }
  ],
  "passA": {
    "requestSha256": "d47452694e3c6da8761c89881803fcea129f4f0a759f2c16bc16bf0946b7cf71",
    "capturedAt": "2026-09-20T23:46:24.957Z",
    "elapsedMs": 121.89925000001676,
    "successfulAttemptElapsedMs": 119.67916699999478,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.35
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.09
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.59
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.21
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.15
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
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
            "mixed_or_unknown": 0.03,
            "no_sensitive_action": 0.17,
            "sender_supplied": 0.8,
            "independently_established": 0
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 3631,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "3798c87e270ca1d68ed934371716dc1ca580d7ac79ea491b9a8de6cc77699ad3",
    "capturedAt": "2026-09-20T23:46:25.086Z",
    "elapsedMs": 127.53220899999724,
    "successfulAttemptElapsedMs": 125.54300000000512,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "NONE": 0.54,
            "subject:3": 0,
            "body:8": 0.01,
            "body:14": 0,
            "body:16": 0.02,
            "body:4": 0,
            "body:0": 0,
            "body:12": 0,
            "body:11": 0,
            "body:13": 0,
            "body:1": 0,
            "subject:1": 0,
            "body:15": 0,
            "body:2": 0,
            "body:5": 0.42,
            "subject:2": 0.01,
            "body:7": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:6": 0,
            "body:10": 0
          },
          "confidence": 0.5
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:9": 0.01,
            "NONE": 0.02,
            "subject:3": 0,
            "body:8": 0.01,
            "body:14": 0,
            "body:16": 0,
            "body:4": 0,
            "body:0": 0,
            "body:12": 0,
            "body:11": 0,
            "body:13": 0,
            "body:1": 0,
            "subject:1": 0.77,
            "body:15": 0,
            "body:2": 0,
            "body:5": 0.15,
            "body:10": 0,
            "subject:0": 0.03,
            "body:7": 0.01,
            "body:3": 0,
            "body:6": 0,
            "subject:2": 0
          },
          "confidence": 0.75
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:9": 0,
            "NONE": 0.03,
            "subject:3": 0,
            "body:8": 0,
            "body:14": 0,
            "body:16": 0,
            "body:4": 0,
            "body:0": 0.9,
            "body:12": 0,
            "body:11": 0,
            "body:1": 0.01,
            "body:13": 0,
            "subject:1": 0,
            "body:15": 0,
            "body:7": 0,
            "body:5": 0.02,
            "subject:0": 0,
            "subject:2": 0,
            "body:10": 0,
            "body:3": 0.04,
            "body:6": 0,
            "body:2": 0
          },
          "confidence": 0.88
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "NONE": 0.91,
            "subject:3": 0,
            "body:8": 0.01,
            "body:14": 0,
            "body:16": 0.01,
            "body:4": 0,
            "body:0": 0,
            "body:12": 0.01,
            "body:11": 0,
            "body:13": 0,
            "body:1": 0,
            "subject:1": 0.01,
            "body:15": 0,
            "body:7": 0,
            "body:5": 0.05,
            "subject:0": 0,
            "subject:2": 0,
            "body:10": 0,
            "body:3": 0,
            "body:6": 0,
            "body:2": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3425,
        "output_tokens": 900
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 251.84987499998533,
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
        "status": "selected",
        "segmentId": "subject:1"
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
    "seq": 2240,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-456",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:24.836Z",
    "offsetMs": 1.7258330000040587
  },
  {
    "seq": 2241,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-456",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:24.956Z",
    "offsetMs": 121.90037499999744,
    "elapsedMs": 119.67916699999478,
    "outcome": "success"
  },
  {
    "seq": 2242,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-456",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:24.959Z",
    "offsetMs": 125.00366600000416
  },
  {
    "seq": 2243,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-456",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:25.085Z",
    "offsetMs": 251.14191599999322,
    "elapsedMs": 125.54300000000512,
    "outcome": "success"
  },
  {
    "seq": 2244,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-456",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:25.086Z",
    "offsetMs": 251.97804099999485,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c5928212aa81b2a0c8ffe154837cf391deaa5db936ad13be45fa850ef2e739f0";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2241},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2243},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2244}} as const;
export const projectionSha256 = "0d797b6e7c5106b39d164eabea84bdaff812a875119df3447a654d48500884cf";
