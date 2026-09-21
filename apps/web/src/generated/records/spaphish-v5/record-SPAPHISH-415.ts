import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-415",
  "inputSha256": "39874b3db330636aa18745973db2102d8c5d2de8e1c981fb4cf8707bbc662988",
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
      "end": 39,
      "text": "Ya puedes descargar tus datos de Google"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 22,
      "text": "Tu cuenta, tus datos.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 22,
      "end": 99,
      "text": "Hemos terminado de crear la copia de los datos de Google que solicitaste el \n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 99,
      "end": 124,
      "text": "día 25 de junio de 2022. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 124,
      "end": 173,
      "text": "Puedes descargar tus archivos hasta el día 2 de \n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 173,
      "end": 188,
      "text": "julio de 2022.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 188,
      "end": 219,
      "text": "Tu descarga incluirá datos de:\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 219,
      "end": 226,
      "text": "Chrome\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 226,
      "end": 251,
      "text": "Gestionar exportaciones \n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 251,
      "end": 295,
      "text": "(https://accounts.google.com/AccountChooser?"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 295,
      "end": 388,
      "text": "continue=https://takeout.google.com/settings/takeout/downloads&amp;Email=lSanchez@gmail.com)\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 388,
      "end": 412,
      "text": "Descargar los archivos \n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 412,
      "end": 456,
      "text": "(https://accounts.google.com/AccountChooser?"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 456,
      "end": 518,
      "text": "continue=https://takeout.google.com/settings/takeout/download?"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 518,
      "end": 597,
      "text": "j%3Dc435e143-5ad4-46f0-83f1-4a2a3bc74b03%26i%3D0&amp;Email=lSanchez@gmail.com)\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 597,
      "end": 671,
      "text": "Te hemos enviado este mensaje porque hace poco utilizaste Google Takeout \n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 671,
      "end": 724,
      "text": "(https://support.google.com/accounts/answer/3024190)\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 724,
      "end": 749,
      "text": " Política de Privacidad \n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 749,
      "end": 818,
      "text": "(https://www.google.com/privacy/privacy-policy.html) | Términos del \n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 818,
      "end": 865,
      "text": "Servicio (https://www.google.com/accounts/TOS)\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 865,
      "end": 866,
      "text": "\n"
    }
  ],
  "passA": {
    "requestSha256": "13f27680e53fe99dd7f663b81332b6e41ea4f9ba2ee66a74c93c4be05a44367b",
    "capturedAt": "2026-09-20T23:46:11.246Z",
    "elapsedMs": 179.00083400000585,
    "successfulAttemptElapsedMs": 177.36737500000163,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.74
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.75
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
          "noul": 0.16
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.27,
            "mixed_or_unclear": 0,
            "informational": 0.73,
            "educational_or_quoted": 0
          },
          "confidence": 0.63
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.31,
            "mixed_or_unknown": 0.02,
            "independently_established": 0.22,
            "no_sensitive_action": 0.45
          },
          "confidence": 0.26
        }
      },
      "usage": {
        "input_tokens": 3707,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "0509fa3475c52f046afe0ea2ab96a6e242b6058af1abdc61304600523094e95a",
    "capturedAt": "2026-09-20T23:46:11.358Z",
    "elapsedMs": 109.3342920000141,
    "successfulAttemptElapsedMs": 106.7417499999865,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:8": 0,
            "body:14": 0,
            "body:11": 0,
            "body:7": 0,
            "body:0": 0,
            "body:3": 0.93,
            "body:15": 0,
            "NONE": 0.02,
            "body:19": 0,
            "body:2": 0,
            "body:6": 0,
            "body:9": 0,
            "body:17": 0,
            "body:5": 0,
            "body:10": 0,
            "body:18": 0,
            "body:12": 0,
            "subject:0": 0,
            "body:16": 0,
            "body:4": 0.05,
            "body:1": 0,
            "body:13": 0
          },
          "confidence": 0.91
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0.01,
            "body:14": 0.16,
            "body:11": 0,
            "body:7": 0.01,
            "NONE": 0.4,
            "body:3": 0.01,
            "body:15": 0.07,
            "body:0": 0.01,
            "body:19": 0,
            "body:10": 0,
            "body:16": 0.01,
            "body:9": 0,
            "body:12": 0,
            "body:5": 0,
            "body:17": 0.01,
            "body:18": 0.01,
            "body:6": 0,
            "subject:0": 0.1,
            "body:2": 0,
            "body:4": 0,
            "body:1": 0.2,
            "body:13": 0
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 2170,
        "output_tokens": 457
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 291.31583300000057,
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
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 2036,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-415",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:11.068Z",
    "offsetMs": 1.1410420000029262
  },
  {
    "seq": 2037,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-415",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:11.246Z",
    "offsetMs": 178.99950000000536,
    "elapsedMs": 177.36737500000163,
    "outcome": "success"
  },
  {
    "seq": 2038,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-415",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:11.251Z",
    "offsetMs": 183.53575000001
  },
  {
    "seq": 2039,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-415",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:11.358Z",
    "offsetMs": 290.9603750000242,
    "elapsedMs": 106.7417499999865,
    "outcome": "success"
  },
  {
    "seq": 2040,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-415",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:11.358Z",
    "offsetMs": 291.39145799999824,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1c931c2353ef77042ff54a2725836c75e6ef28065bfc681a6610753438e278e6";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2037},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2039},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2040}} as const;
export const projectionSha256 = "c6f9a997e6f0896a7858a10ac534c6e7e869df12c3e857362d48f590ffc4311e";
