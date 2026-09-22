import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-372",
  "inputSha256": "4c0a5e88d45ec9bd77d7581f991f0422d8b7e9e3e579a26b8c1b28dead8bdfbf",
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
      "end": 41,
      "text": "VIOLACIÓN DE DERECHOS DE AUTOR - 55955659"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 138,
      "text": "Señores Instituto Aurora Central Campus Villa Aurora: Recientemente recibimos una queja concerniente a una de sus publicaciones/campañas. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 138,
      "end": 263,
      "text": "Otro usuario ha hecho una reclamación de derechos de autor sobre una de las imágenes utilizadas en su muro de publicaciones. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 263,
      "end": 379,
      "text": "Con el fin de evitar el retiro de su contenido, asegúrese de eliminar dicha imagen dentro de los siguientes 2 días. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 379,
      "end": 434,
      "text": "Ver imagen Gracias, Equipo Legal y de Derechos de Autor"
    }
  ],
  "passA": {
    "requestSha256": "6bcf82ac3f65e8507e2127271077e0ab9a5f8cc0a7a4123f65bc5d57216c1ca5",
    "capturedAt": "2026-09-22T03:55:37.663Z",
    "elapsedMs": 598.4118860000162,
    "successfulAttemptElapsedMs": 596.8874250000226,
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
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.32
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
          "noul": 0.04
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
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.02,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.98
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 4990,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "76af55c9a2908934cb06367ee4397aa1c11c2f977521580331313e965780640d",
    "capturedAt": "2026-09-22T03:55:38.201Z",
    "elapsedMs": 536.8067770000198,
    "successfulAttemptElapsedMs": 535.7563979999977,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:3": 0,
            "subject:0": 0,
            "body:1": 0,
            "NONE": 0,
            "body:0": 0,
            "body:2": 1
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:3": 0.96,
            "subject:0": 0,
            "body:1": 0,
            "NONE": 0,
            "body:0": 0.03,
            "body:2": 0.01
          },
          "confidence": 0.94
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.3,
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.7,
            "body:0": 0,
            "body:1": 0
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 1969,
        "output_tokens": 225
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1136.6842729999917,
  "derived": {
    "concern": "verify_first",
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
        "status": "selected",
        "segmentId": "body:2"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:3"
      },
      "verification_bypass": {
        "status": "low_confidence",
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
    "seq": 1821,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-372",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:37.066Z",
    "offsetMs": 0.9339080000063404
  },
  {
    "seq": 1822,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-372",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:37.663Z",
    "offsetMs": 598.4121010000235,
    "elapsedMs": 596.8874250000226,
    "outcome": "success"
  },
  {
    "seq": 1823,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-372",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:37.665Z",
    "offsetMs": 600.4798949999968
  },
  {
    "seq": 1824,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-372",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:38.201Z",
    "offsetMs": 1136.4666380000417,
    "elapsedMs": 535.7563979999977,
    "outcome": "success"
  },
  {
    "seq": 1825,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-372",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:38.202Z",
    "offsetMs": 1136.7277149999863,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "013afcf2b78404c17c2b2c14bdae9f3a9a26e00e4219f6c79dee834bab14d079";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1822},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1824},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1825}} as const;
export const projectionSha256 = "59e3261ecc54ee3cec12bb5bad49c152d0fbf551b572bca46b57dd7050f0fede";
