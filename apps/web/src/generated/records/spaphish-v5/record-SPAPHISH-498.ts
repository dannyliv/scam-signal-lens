import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-498",
  "inputSha256": "09484d6b4c67b795aed1832795481779b965f2cd0bb6719ee971b11fe2da8d23",
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
    "requestSha256": "6c71ed8355f65469c61fbef6c2ad928b09798c17c25c2482eb0c34b0f87cf6c1",
    "capturedAt": "2026-09-20T23:46:39.018Z",
    "elapsedMs": 150.3131670000148,
    "successfulAttemptElapsedMs": 147.84570899998653,
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
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
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
            "informational": 0.84,
            "active_request": 0.13,
            "educational_or_quoted": 0.02,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.78
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "mixed_or_unknown": 0,
            "sender_supplied": 0,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3633,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "8ca6838cc6c6db04bdb0c8f1b5c6f158be6b1e2e34678d06f8ef49d8e0b62480",
    "capturedAt": "2026-09-20T23:46:39.153Z",
    "elapsedMs": 133.23312499999884,
    "successfulAttemptElapsedMs": 130.56566699998803,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.01,
            "body:6": 0.01,
            "body:5": 0.02,
            "body:8": 0.01,
            "subject:0": 0.01,
            "NONE": 0.11,
            "body:7": 0,
            "body:4": 0.06,
            "body:3": 0.35,
            "body:1": 0.01,
            "body:0": 0.41000000000000003
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 1078,
        "output_tokens": 122
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 285.51291700001457,
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
    "seq": 2447,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-498",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:38.870Z",
    "offsetMs": 1.9458330000052229
  },
  {
    "seq": 2448,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-498",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:39.018Z",
    "offsetMs": 150.31541700000525,
    "elapsedMs": 147.84570899998653,
    "outcome": "success"
  },
  {
    "seq": 2449,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-498",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:39.022Z",
    "offsetMs": 154.1882920000062
  },
  {
    "seq": 2450,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-498",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:39.153Z",
    "offsetMs": 285.35537500001374,
    "elapsedMs": 130.56566699998803,
    "outcome": "success"
  },
  {
    "seq": 2451,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-498",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:39.153Z",
    "offsetMs": 285.5560420000111,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "4d3db70c5604ef15aef1dda207057dc5b355ac31dba90ee5fd87adfc39bfd8f8";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2448},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2450},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2451}} as const;
export const projectionSha256 = "d024377599e3c8913a47d2dccfafd6c1fa8ab39d8eb327455781c2466d2af9ce";
