import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-176",
  "inputSha256": "aae12644307b0ea3f940e4a00945080cc33bf11fa1446bde943a53b02c222528",
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
    "requestSha256": "60118579e3367ce088d3542ee4fb41ff8fc870844e18be48e0b61f07198ee6a0",
    "capturedAt": "2026-09-20T23:44:47.658Z",
    "elapsedMs": 192.5917499999996,
    "successfulAttemptElapsedMs": 191.2890830000033,
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
          "noul": 0.03
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 1,
            "active_request": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3545,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "0df0679fbced3a38502e71a7800d69e394ad78da3d7d0c53b3a78df05d937639",
    "capturedAt": "2026-09-20T23:44:47.797Z",
    "elapsedMs": 136.05741699999635,
    "successfulAttemptElapsedMs": 133.98329200000444,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:12",
          "probabilities": {
            "body:9": 0,
            "body:8": 0,
            "NONE": 0.02,
            "body:4": 0.02,
            "body:5": 0,
            "body:3": 0,
            "body:11": 0.02,
            "body:6": 0.01,
            "body:7": 0,
            "body:0": 0.01,
            "body:10": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:12": 0.92,
            "body:1": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 957,
        "output_tokens": 162
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 331.85966599999665,
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
    "seq": 861,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-176",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:47.466Z",
    "offsetMs": 0.8070829999996931
  },
  {
    "seq": 862,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-176",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:47.658Z",
    "offsetMs": 192.591207999998,
    "elapsedMs": 191.2890830000033,
    "outcome": "success"
  },
  {
    "seq": 863,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-176",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:47.662Z",
    "offsetMs": 196.71287499999744
  },
  {
    "seq": 864,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-176",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:47.797Z",
    "offsetMs": 331.52116599999863,
    "elapsedMs": 133.98329200000444,
    "outcome": "success"
  },
  {
    "seq": 865,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-176",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:47.797Z",
    "offsetMs": 331.9503330000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7eacff2e18b190b35c1e35b19569910cad3b51c061ca3a6d694ca1c413d07f69";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":862},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":864},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":865}} as const;
export const projectionSha256 = "9982c79648f667897bd1d4a0f9d1a2b78662f6ffc8ed023ff6e158b955144d4f";
