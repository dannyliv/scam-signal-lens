import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-498",
  "inputSha256": "09484d6b4c67b795aed1832795481779b965f2cd0bb6719ee971b11fe2da8d23",
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
      "end": 35,
      "text": "Fwd: Excursión a Kidzania Cuicuilco"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 362,
      "text": "Forwarded message --------- De: Andrea Sofía García Torres <andrea.garcia@colegioestelar.mx> Date: jue, 15 sep 2022 a la(s) 10:30 Subject: Visita Educativa a Centro de Aprendizaje To: Andrea Sofía García Torres <andrea.garcia@colegioestelar.mx> Cc: Laura Inés Soto Pérez <laura.soto@colegioestelar.mx>, Daniela Méndez Arámbula <daniela.mendez@colegioestelar.mx>\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 362,
      "end": 363,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 363,
      "end": 409,
      "text": "Buenas tardes, Espero se encuentren muy bien. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 409,
      "end": 484,
      "text": "Nos entusiasma mucho anunciarles e invitarlos a nuestra primera excursión. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 484,
      "end": 502,
      "text": "Adjunto circular. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 502,
      "end": 547,
      "text": "Quedo pendiente para aclarar cualquier duda. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 547,
      "end": 563,
      "text": "Un abrazo, Andy\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 563,
      "end": 564,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 564,
      "end": 594,
      "text": "[image: evento_educativo.jpeg]"
    }
  ],
  "passA": {
    "requestSha256": "cb575170c7d335f960f7671a7dd68b1d1765e03d85ccbc3cf4e4c8d27b448446",
    "capturedAt": "2026-09-22T03:58:06.896Z",
    "elapsedMs": 649.6217529999558,
    "successfulAttemptElapsedMs": 647.7075040000491,
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
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.85
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
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0.01,
            "informational": 0.85,
            "active_request": 0.13,
            "educational_or_quoted": 0.01
          },
          "confidence": 0.79
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.01,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.99
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 5083,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "75b446824dde290612247225d10fbcaf056658e0c41900972365acfb16276618",
    "capturedAt": "2026-09-22T03:58:07.486Z",
    "elapsedMs": 589.0888530000811,
    "successfulAttemptElapsedMs": 586.8832069999771,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "body:5": 0.07,
            "body:7": 0,
            "body:4": 0.04,
            "body:2": 0.02,
            "body:3": 0.35,
            "body:6": 0.01,
            "NONE": 0.11,
            "body:0": 0.36,
            "body:1": 0.02,
            "body:8": 0.01
          },
          "confidence": 0.3
        }
      },
      "usage": {
        "input_tokens": 1178,
        "output_tokens": 122
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1240.086207000073,
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
    "seq": 2446,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-498",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:58:06.248Z",
    "offsetMs": 1.5193450000369921
  },
  {
    "seq": 2447,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-498",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:58:06.896Z",
    "offsetMs": 649.6223250000039,
    "elapsedMs": 647.7075040000491,
    "outcome": "success"
  },
  {
    "seq": 2448,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-498",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:58:06.899Z",
    "offsetMs": 652.5427080000518
  },
  {
    "seq": 2449,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-498",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:58:07.486Z",
    "offsetMs": 1239.89744900004,
    "elapsedMs": 586.8832069999771,
    "outcome": "success"
  },
  {
    "seq": 2450,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-498",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:58:07.486Z",
    "offsetMs": 1240.126917000045,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f669b4e51fdbcd0998bd8f457ffb6be283c85c8dd93490d89792948d1c865625";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2447},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2449},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2450}} as const;
export const projectionSha256 = "c4f67e349b87579a7b7b3c8f8f5a7220f057620e3eabb5d0db49d3446fa7e4e1";
