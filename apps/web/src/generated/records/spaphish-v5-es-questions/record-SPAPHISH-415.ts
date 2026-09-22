import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-415",
  "inputSha256": "39874b3db330636aa18745973db2102d8c5d2de8e1c981fb4cf8707bbc662988",
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
    "requestSha256": "b404a89fb70b5172cfbf02a8e604f8634f503e56a6309b8390c40f3c2008d567",
    "capturedAt": "2026-09-22T03:56:27.789Z",
    "elapsedMs": 606.8767069999594,
    "successfulAttemptElapsedMs": 605.0804629999911,
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
          "noul": 0.04
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
          "noul": 0.41
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
          "noul": 0.02
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
            "mixed_or_unclear": 0,
            "informational": 0.48,
            "active_request": 0.52,
            "educational_or_quoted": 0
          },
          "confidence": 0.35
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.17,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.29,
            "no_sensitive_action": 0.53
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 5157,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "264a57999e819b90bf03709f4eff6bba912ed946b56afcd9d991298e9fd1d26b",
    "capturedAt": "2026-09-22T03:56:28.327Z",
    "elapsedMs": 536.5765749999555,
    "successfulAttemptElapsedMs": 534.37532500003,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0,
            "body:6": 0,
            "body:1": 0,
            "body:15": 0,
            "body:9": 0,
            "body:8": 0,
            "body:4": 0.04,
            "NONE": 0.06,
            "body:5": 0,
            "body:13": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:0": 0,
            "body:16": 0,
            "body:12": 0,
            "body:19": 0,
            "body:18": 0,
            "body:11": 0,
            "body:14": 0,
            "body:3": 0.9,
            "body:17": 0,
            "body:10": 0
          },
          "confidence": 0.88
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:6": 0,
            "body:1": 0.39,
            "body:9": 0,
            "body:15": 0.02,
            "body:8": 0.01,
            "body:4": 0,
            "NONE": 0.32,
            "body:5": 0,
            "body:13": 0,
            "subject:0": 0.13,
            "body:7": 0.01,
            "body:0": 0.01,
            "body:16": 0,
            "body:12": 0,
            "body:14": 0.08,
            "body:11": 0,
            "body:19": 0,
            "body:18": 0.01,
            "body:3": 0.01,
            "body:17": 0,
            "body:10": 0.01
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 2372,
        "output_tokens": 459
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1145.4766679999884,
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
    "seq": 2034,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-415",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:27.183Z",
    "offsetMs": 1.2382749999524094
  },
  {
    "seq": 2035,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-415",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:27.788Z",
    "offsetMs": 606.8770419999491,
    "elapsedMs": 605.0804629999911,
    "outcome": "success"
  },
  {
    "seq": 2036,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-415",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:27.792Z",
    "offsetMs": 610.2612999999546
  },
  {
    "seq": 2037,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-415",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:28.327Z",
    "offsetMs": 1145.189442999952,
    "elapsedMs": 534.37532500003,
    "outcome": "success"
  },
  {
    "seq": 2038,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-415",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:28.327Z",
    "offsetMs": 1145.523836999957,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a4b30735f0902b08391c4cf1e191db1ad87edb1372df504742eeaafa569810d8";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2035},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2037},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2038}} as const;
export const projectionSha256 = "5aff057830a207be40d887af6aa7cdf80269d0e24c94e47f8a8fe6e7bc85e01b";
