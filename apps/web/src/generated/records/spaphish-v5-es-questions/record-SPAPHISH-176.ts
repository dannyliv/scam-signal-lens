import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-176",
  "inputSha256": "aae12644307b0ea3f940e4a00945080cc33bf11fa1446bde943a53b02c222528",
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
      "end": 18,
      "text": "SERVICIO EN CASETA"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 84,
      "text": "Apreciables Residentes Privada Del Valle Fraccionamiento Las Lomas P R E S E N T E.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 84,
      "end": 85,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 85,
      "end": 100,
      "text": "Buenas tardes:\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 100,
      "end": 101,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 101,
      "end": 180,
      "text": "Les informamos que el día de mañana, será a cuenta de vacaciones para Gabriel.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 180,
      "end": 181,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 181,
      "end": 302,
      "text": "Sin embargo, el servicio estará cubierto hasta las 13:00 hrs. por una servidora y el resto del turno, nos apoyará el Sr. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 302,
      "end": 309,
      "text": "Jorge.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 309,
      "end": 310,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 310,
      "end": 342,
      "text": "Gracias por su atención y apoyo\n"
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
      "end": 349,
      "text": "Atte. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 349,
      "end": 390,
      "text": "Diana Soto R. y Mesa Directiva- DEL VALLE"
    }
  ],
  "passA": {
    "requestSha256": "018478338a31f8d5771a6b0f8c7c9194a28b0d863c85aed507c2ff46dd74321e",
    "capturedAt": "2026-09-22T03:51:41.982Z",
    "elapsedMs": 608.6747259999975,
    "successfulAttemptElapsedMs": 607.082081999979,
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
          "noul": 0.02
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 1,
            "active_request": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 4995,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "e5b3f771dd8fcc323f020326cf391b715079d9673e51e70ed43cc1fafb33f41e",
    "capturedAt": "2026-09-22T03:51:42.486Z",
    "elapsedMs": 502.80574399998295,
    "successfulAttemptElapsedMs": 501.7045689999941,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:12",
          "probabilities": {
            "body:9": 0,
            "NONE": 0.060000000000000005,
            "body:0": 0,
            "body:7": 0,
            "body:5": 0,
            "body:6": 0.02,
            "body:11": 0.02,
            "body:2": 0,
            "body:3": 0,
            "subject:0": 0.01,
            "body:4": 0.03,
            "body:1": 0,
            "body:8": 0,
            "body:12": 0.86,
            "body:10": 0
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 1057,
        "output_tokens": 162
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1113.5800469999958,
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
        "status": "selected",
        "segmentId": "body:12"
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
    "seq": 855,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-176",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:41.374Z",
    "offsetMs": 1.0145230000198353
  },
  {
    "seq": 856,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-176",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:41.981Z",
    "offsetMs": 608.675539000018,
    "elapsedMs": 607.082081999979,
    "outcome": "success"
  },
  {
    "seq": 857,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-176",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:41.984Z",
    "offsetMs": 611.235868000018
  },
  {
    "seq": 858,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-176",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:42.486Z",
    "offsetMs": 1113.321224000014,
    "elapsedMs": 501.7045689999941,
    "outcome": "success"
  },
  {
    "seq": 859,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-176",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:42.486Z",
    "offsetMs": 1113.636280000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "98f943af61c0a9651572d9887e1b5fa7f7885301b4732ab9c3e8e542870077e1";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":856},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":858},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":859}} as const;
export const projectionSha256 = "9da5cac46f50870e87be1752c6696bfcb670d0fcee83bb3a2c818ad85f4bcff3";
