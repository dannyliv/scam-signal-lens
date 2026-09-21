import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-258",
  "inputSha256": "c92ffec216ab6280e521f8d0f905047e2c595ec489945211477a5f63ca741f01",
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
      "end": 22,
      "text": "NOTIFICACIÓN DEL FONDO"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 218,
      "text": "Atención, Nos complace anunciar que su fondo aprobado ha sido aprobado oficialmente por el Comité Fiduciario de Gestión de la Fundación Asia en cooperación con la Comisión Económica de las Naciones Unidas para Europa. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 218,
      "end": 311,
      "text": "Para más información y aclaraciones, por favor contacte a nuestro consultor regional, el Sr. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 311,
      "end": 416,
      "text": "Mauricio Delgado es responsable de su pago Correo electrónico: ( unidad.entregas721@consultas-global.org\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 416,
      "end": 423,
      "text": " ) Sr. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 423,
      "end": 496,
      "text": "Ernesto Salinas (Comité de la Fundación Asia) https://asiafoundation.org/"
    }
  ],
  "passA": {
    "requestSha256": "8e720402a85b6c773a72aaa4c83d6ca9e0124a93151163a85af3a6ba1d4e737b",
    "capturedAt": "2026-09-20T23:45:18.081Z",
    "elapsedMs": 547.4354999999923,
    "successfulAttemptElapsedMs": 545.5661250000121,
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
          "noul": 0.11
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.1
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.07
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.32
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.3
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.12
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
            "mixed_or_unclear": 0,
            "active_request": 0.89,
            "informational": 0.11,
            "educational_or_quoted": 0
          },
          "confidence": 0.85
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.72,
            "no_sensitive_action": 0.27
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 3550,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "8f94a6835fe7bc2c29ea206635a101a52a07bbfc25861f75afde644670c419f4",
    "capturedAt": "2026-09-21T00:57:24.928Z",
    "elapsedMs": 163.98441699999967,
    "successfulAttemptElapsedMs": 161.05187500000102,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.02,
            "body:0": 0.77,
            "body:3": 0.01,
            "NONE": 0.01,
            "body:1": 0.13,
            "body:4": 0.06
          },
          "confidence": 0.74
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.08,
            "body:0": 0,
            "NONE": 0.82,
            "body:3": 0,
            "body:1": 0.09,
            "body:4": 0.01
          },
          "confidence": 0.79
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.06,
            "body:0": 0,
            "NONE": 0.93,
            "body:3": 0,
            "body:4": 0,
            "body:1": 0.01
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 1762,
        "output_tokens": 254
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 870.8635830000021,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
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
        "status": "not_requested",
        "segmentId": null
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
        "status": "none_selected",
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
    "seq": 1263,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-258",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:17.535Z",
    "offsetMs": 1.3481250000040745
  },
  {
    "seq": 1264,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-258",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:18.081Z",
    "offsetMs": 547.4372089999961,
    "elapsedMs": 545.5661250000121,
    "outcome": "success"
  },
  {
    "seq": 1265,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-258",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:18.086Z",
    "offsetMs": 552.2824169999949
  },
  {
    "seq": 1266,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-258",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:18.239Z",
    "offsetMs": 705.3062499999942,
    "elapsedMs": 152.1870409999974,
    "outcome": "success"
  },
  {
    "seq": 1267,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-258",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:18.239Z",
    "offsetMs": 705.4739169999957,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2653,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-258",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:24.766Z",
    "offsetMs": 3.268624999998792
  },
  {
    "seq": 2654,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-258",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:24.928Z",
    "offsetMs": 164.93274999999994,
    "elapsedMs": 161.05187500000102,
    "outcome": "success"
  },
  {
    "seq": 2655,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-258",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:24.928Z",
    "offsetMs": 165.35695799999849,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ff00b53aeda1b32e3598ad415d44596f2bea9d15c85278a85e07f1fc0f3d7880";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1264},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2654},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2655}} as const;
export const projectionSha256 = "373f4422d42646a3258ee622f3b855fb29b943dae64eb164ca911982fd72844a";
