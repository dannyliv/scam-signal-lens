import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-337",
  "inputSha256": "ff504985612834d457320a452425d8260709faa7abbb7e81a03579df16d5e468",
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
      "end": 60,
      "text": "Invitación ceremonia del XLVIII aniversario, 8 de noviembre."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 57,
      "text": "Lunaria Alta, Territorio Aurora — 1 de noviembre de 2019\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 57,
      "end": 58,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 58,
      "end": 137,
      "text": "A toda la comunidad del Instituto Celeste de Investigación Astronómica (ICIA):\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 137,
      "end": 138,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 138,
      "end": 351,
      "text": "Con motivo de las celebraciones del XLVIII Aniversario del Instituto Celeste de Investigación Astronómica y del LXXVII Aniversario del Observatorio Estelar de Lunaria (OELU), así como del homenaje póstumo al Ing. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 351,
      "end": 360,
      "text": "Darío L. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 360,
      "end": 594,
      "text": "Arcaya Menéndez, me permito extenderles una atenta invitación a la ceremonia conmemorativa que se llevará a cabo el viernes 8 de noviembre, a partir de las 11:00 horas, en el Auditorio del Centro de Documentación Científica del ICIA.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 594,
      "end": 595,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 595,
      "end": 773,
      "text": "Asimismo, se invita a toda la comunidad a la comida tradicional que, como cada año, se ofrecerá en los jardines contiguos al Centro de Documentación a partir de las 13:30 horas.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 773,
      "end": 774,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 774,
      "end": 787,
      "text": "Atentamente,\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 787,
      "end": 791,
      "text": "Dr. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 791,
      "end": 800,
      "text": "Elías V. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 800,
      "end": 811,
      "text": "Montemayor\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 811,
      "end": 837,
      "text": "Director General Interino\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 837,
      "end": 883,
      "text": "Instituto Celeste de Investigación Astronómica"
    }
  ],
  "passA": {
    "requestSha256": "dadac61a5499ce1a5762f35012e9c763f03d626139d102c499105e3cd66ea1cd",
    "capturedAt": "2026-09-20T23:45:45.515Z",
    "elapsedMs": 129.2298340000125,
    "successfulAttemptElapsedMs": 127.0834579999937,
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.63,
            "educational_or_quoted": 0,
            "informational": 0.37,
            "mixed_or_unclear": 0
          },
          "confidence": 0.5
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "no_sensitive_action": 1,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3694,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "eb3aefdb7c64f95827fd0da5020ee911ba670d48c46bdb3541f9e0d4a45a9a87",
    "capturedAt": "2026-09-21T00:57:29.053Z",
    "elapsedMs": 151.20037500000035,
    "successfulAttemptElapsedMs": 148.60583299999962,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:14",
          "probabilities": {
            "body:13": 0,
            "body:8": 0,
            "body:12": 0,
            "body:0": 0,
            "body:4": 0,
            "body:11": 0.03,
            "body:6": 0.14,
            "body:3": 0,
            "body:1": 0,
            "NONE": 0,
            "body:10": 0,
            "body:7": 0,
            "body:2": 0.01,
            "body:5": 0,
            "subject:0": 0,
            "body:9": 0,
            "body:14": 0.74,
            "body:15": 0.08
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 1297,
        "output_tokens": 192
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 510.0307090000024,
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
        "segmentId": "body:14"
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
    "seq": 1649,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-337",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:45.387Z",
    "offsetMs": 1.60995900000853
  },
  {
    "seq": 1650,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-337",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:45.515Z",
    "offsetMs": 129.2324590000062,
    "elapsedMs": 127.0834579999937,
    "outcome": "success"
  },
  {
    "seq": 1651,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-337",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:45.518Z",
    "offsetMs": 132.5086250000022
  },
  {
    "seq": 1652,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-337",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:45.742Z",
    "offsetMs": 356.9289589999971,
    "elapsedMs": 223.7514999999985,
    "outcome": "success"
  },
  {
    "seq": 1653,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-337",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:45.743Z",
    "offsetMs": 357.1316250000091,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2726,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-337",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:28.903Z",
    "offsetMs": 3.230999999999767
  },
  {
    "seq": 2727,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-337",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:29.052Z",
    "offsetMs": 152.41691700000047,
    "elapsedMs": 148.60583299999962,
    "outcome": "success"
  },
  {
    "seq": 2728,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-337",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:29.053Z",
    "offsetMs": 152.7535000000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "df223d8e9ef7ecacd3e14c64697bd331401cafeff3390d3c011c9892fdd2fd60";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1650},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2727},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2728}} as const;
export const projectionSha256 = "3bc6bcc73761a78e928a45589a9605b593e6b6e050da44175707f4c9d5d110ca";
