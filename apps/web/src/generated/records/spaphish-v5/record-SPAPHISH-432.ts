import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-432",
  "inputSha256": "49453bdbc113e0ad010e56f58b2ab6bcd571281bf7b5ba60d242dfedbba9a0bb",
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
      "end": 38,
      "text": "PAGO DE DÍAS ECONÓMICOS NO DISFRUTADOS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 16,
      "text": "C I R C U L A R\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 16,
      "end": 17,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 17,
      "end": 30,
      "text": "DAF/384/2019\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 30,
      "end": 31,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 31,
      "end": 53,
      "text": "31 DE OCTUBRE DE 2019\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 53,
      "end": 54,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 54,
      "end": 57,
      "text": "**\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 57,
      "end": 58,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 58,
      "end": 138,
      "text": "A TODO EL PERSONAL QUE TIENE DERECHO AL PAGO DE DÍAS ECONÓMICOS NO DISFRUTADOS.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 138,
      "end": 139,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 139,
      "end": 445,
      "text": "Con fundamento en la cláusula 145 fracción IX del Contrato Colectivo de Trabajo, se les comunica que para poder efectuar el cálculo de Días Económicos no Disfrutados en el presente año, se recibirán los permisos hasta el día 08 de noviembre de 2019, no importando que amparen días posteriores a esa fecha.\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 445,
      "end": 446,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 446,
      "end": 449,
      "text": "**\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 449,
      "end": 450,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 450,
      "end": 551,
      "text": "_En el entendido que después del 08 de noviembre de 2019 no se aceptarán permisos por ningún motivo. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 551,
      "end": 553,
      "text": "_\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 553,
      "end": 554,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 554,
      "end": 557,
      "text": "**\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 557,
      "end": 558,
      "text": "\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 558,
      "end": 580,
      "text": "A T E N T A M E N T E\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 580,
      "end": 581,
      "text": "\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 581,
      "end": 586,
      "text": "LIC. "
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 586,
      "end": 613,
      "text": "ROBERTO CARLOS LUNA CUEVAS\n"
    },
    {
      "id": "body:23",
      "source": "body",
      "start": 613,
      "end": 614,
      "text": "\n"
    },
    {
      "id": "body:24",
      "source": "body",
      "start": 614,
      "end": 653,
      "text": "DIRECTOR DE ADMINISTRACIÓN Y FINANZAS**"
    }
  ],
  "passA": {
    "requestSha256": "640da94966df8d3308d417da3959fe1fd730865a3dce858af5ac632caf1c17b8",
    "capturedAt": "2026-09-20T23:46:17.122Z",
    "elapsedMs": 177.65716699999757,
    "successfulAttemptElapsedMs": 175.3980000000156,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.87
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.39,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.61
          },
          "confidence": 0.47
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.99,
            "independently_established": 0.01,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3672,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "30e4dc4c4db572c19ec21386bff0919dcee4600aadd2b79f91cf3cdb722a9d2a",
    "capturedAt": "2026-09-20T23:46:17.233Z",
    "elapsedMs": 108.206749999983,
    "successfulAttemptElapsedMs": 105.95308399997884,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:19": 0,
            "body:22": 0,
            "body:21": 0,
            "body:20": 0,
            "body:6": 0,
            "body:13": 0,
            "body:18": 0,
            "body:9": 0,
            "body:14": 0.38,
            "body:15": 0,
            "body:4": 0,
            "body:1": 0,
            "body:8": 0.01,
            "body:3": 0,
            "body:24": 0,
            "body:7": 0,
            "subject:0": 0,
            "NONE": 0.09999999999999999,
            "body:5": 0,
            "body:0": 0,
            "body:11": 0,
            "body:17": 0,
            "body:16": 0,
            "body:10": 0.51,
            "body:2": 0,
            "body:23": 0,
            "body:12": 0
          },
          "confidence": 0.49
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:24",
          "probabilities": {
            "body:19": 0,
            "body:22": 0.01,
            "body:21": 0.01,
            "body:20": 0,
            "body:6": 0,
            "body:13": 0.01,
            "body:18": 0,
            "body:9": 0,
            "body:15": 0,
            "body:14": 0,
            "body:3": 0,
            "body:1": 0,
            "body:8": 0.01,
            "body:23": 0,
            "body:24": 0.87,
            "body:7": 0,
            "subject:0": 0,
            "NONE": 0.01,
            "body:11": 0,
            "body:0": 0,
            "body:10": 0.08,
            "body:5": 0,
            "body:16": 0,
            "body:2": 0,
            "body:12": 0,
            "body:4": 0,
            "body:17": 0
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 2219,
        "output_tokens": 561
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 288.22916700001224,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:24"
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
    "seq": 2120,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-432",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:16.946Z",
    "offsetMs": 1.765750000020489
  },
  {
    "seq": 2121,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-432",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:17.122Z",
    "offsetMs": 177.65754200000083,
    "elapsedMs": 175.3980000000156,
    "outcome": "success"
  },
  {
    "seq": 2122,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-432",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:17.126Z",
    "offsetMs": 181.16920800000662
  },
  {
    "seq": 2123,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-432",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:17.232Z",
    "offsetMs": 287.73775000000023,
    "elapsedMs": 105.95308399997884,
    "outcome": "success"
  },
  {
    "seq": 2124,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-432",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:17.233Z",
    "offsetMs": 288.3409170000232,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d6eb774c70fa44e5bd227a6eac307b7b28aea105f32e84be2675c0bbca643a37";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2121},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2123},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2124}} as const;
export const projectionSha256 = "3b4787aed36cf255900d3d1152f24ad78fe2cdf8e329cebf766ef07592c9f181";
