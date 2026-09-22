import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-258",
  "inputSha256": "c92ffec216ab6280e521f8d0f905047e2c595ec489945211477a5f63ca741f01",
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
    "requestSha256": "8785cfda94c36a48436ecc2831b7ac900bae070e78cbfd3b3936c434190ca63f",
    "capturedAt": "2026-09-22T03:53:19.880Z",
    "elapsedMs": 698.7678119999473,
    "successfulAttemptElapsedMs": 697.7458110000007,
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
          "noul": 0.16
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.09
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.44
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.27
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.16
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
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
            "active_request": 0.91,
            "educational_or_quoted": 0,
            "informational": 0.09
          },
          "confidence": 0.88
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.64,
            "no_sensitive_action": 0.35
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 5000,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "9270f28b9799f02f9542fdf9238cae3b57ad24b0821a708c2419e5f07149582a",
    "capturedAt": "2026-09-22T03:53:20.550Z",
    "elapsedMs": 668.4675730000017,
    "successfulAttemptElapsedMs": 666.9572100000223,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:3": 0.01,
            "body:1": 0.45,
            "subject:0": 0,
            "NONE": 0.01,
            "body:4": 0.06,
            "body:0": 0.32,
            "body:2": 0.15
          },
          "confidence": 0.36
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.01,
            "body:1": 0.18,
            "subject:0": 0,
            "NONE": 0.59,
            "body:4": 0.02,
            "body:0": 0,
            "body:2": 0.2
          },
          "confidence": 0.52
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0,
            "body:1": 0,
            "subject:0": 0,
            "NONE": 0.95,
            "body:4": 0,
            "body:0": 0,
            "body:2": 0.05
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 2074,
        "output_tokens": 254
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1368.8680030000396,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
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
    "seq": 1259,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-258",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:19.182Z",
    "offsetMs": 0.7597899999818765
  },
  {
    "seq": 1260,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-258",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:19.880Z",
    "offsetMs": 698.7677670000121,
    "elapsedMs": 697.7458110000007,
    "outcome": "success"
  },
  {
    "seq": 1261,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-258",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:19.882Z",
    "offsetMs": 701.1186619999935
  },
  {
    "seq": 1262,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-258",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:20.550Z",
    "offsetMs": 1368.6099490000051,
    "elapsedMs": 666.9572100000223,
    "outcome": "success"
  },
  {
    "seq": 1263,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-258",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:20.550Z",
    "offsetMs": 1368.9122230000212,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2f98a17175c6501317196928864c9ada478bea345e4a7b65071afd2e35ae5f6e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1260},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1262},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1263}} as const;
export const projectionSha256 = "cab53a06b6b96c043f40e587bb7f51ac2db7e61d0a6dfe4d901311a5320b5c5b";
