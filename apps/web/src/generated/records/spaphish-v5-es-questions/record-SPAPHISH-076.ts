import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-076",
  "inputSha256": "e7c755b73b0445820897a7e3aecc5c113e09e00ea8259c8713389f762e2d26fc",
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
      "end": 67,
      "text": "Pancracio ¡Has ganado un paquete de San Valentín de Rituals GRATIS!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 8,
      "text": "Roberto\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 8,
      "end": 58,
      "text": "Tenemos una sorpresa para los clientes de Rituals\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 58,
      "end": 69,
      "text": "RITUALS...\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 69,
      "end": 101,
      "text": "Estimado cliente, ¡Felicidades! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 101,
      "end": 261,
      "text": "Como parte de nuestra promoción del Día de San Valentín, nos gustaría ofrecerle una oportunidad única para recibir un nuevo Paquete de San Valentín de Rituals. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 261,
      "end": 386,
      "text": "Para reclamarlo, simplemente complete esta breve encuesta sobre su opinión acerca de las ofertas de San Valentín en Rituals. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 386,
      "end": 413,
      "text": "Su opinión es muy valiosa.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 413,
      "end": 451,
      "text": "Haga clic en CONTINUAR para comenzar.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 451,
      "end": 475,
      "text": "[Botón negro] Continuar\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 475,
      "end": 539,
      "text": "Darse de baja click here to remove yourself from our emails list"
    }
  ],
  "passA": {
    "requestSha256": "46a784a2d6b32f60c584de028fb01499b0657e3b0f79985dba1f9465bd3b11be",
    "capturedAt": "2026-09-22T03:49:43.345Z",
    "elapsedMs": 643.5313769999921,
    "successfulAttemptElapsedMs": 642.5418520000094,
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
          "noul": 0.13
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.15
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.8
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.06
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.49,
            "no_sensitive_action": 0.5,
            "independently_established": 0
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 5030,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "cb72a73b4b4a02e24596ef61a93e7ee3811e1abedae969dc626bb9917baccf76",
    "capturedAt": "2026-09-22T03:49:43.928Z",
    "elapsedMs": 581.5336659999884,
    "successfulAttemptElapsedMs": 580.5366139999969,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.04,
            "subject:0": 0.01,
            "body:3": 0.14,
            "body:0": 0,
            "body:8": 0.01,
            "body:1": 0.09,
            "body:9": 0.01,
            "body:6": 0.01,
            "NONE": 0.34,
            "body:4": 0.25,
            "body:5": 0.09,
            "body:7": 0.01
          },
          "confidence": 0.27
        }
      },
      "usage": {
        "input_tokens": 1083,
        "output_tokens": 129
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1226.7010960000043,
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
    "seq": 370,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-076",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:42.702Z",
    "offsetMs": 0.690056999999797
  },
  {
    "seq": 371,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-076",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:43.345Z",
    "offsetMs": 643.5331750000041,
    "elapsedMs": 642.5418520000094,
    "outcome": "success"
  },
  {
    "seq": 372,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-076",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:43.347Z",
    "offsetMs": 645.5584360000066
  },
  {
    "seq": 373,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-076",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:43.928Z",
    "offsetMs": 1226.4541630000022,
    "elapsedMs": 580.5366139999969,
    "outcome": "success"
  },
  {
    "seq": 374,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-076",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:43.928Z",
    "offsetMs": 1226.758839999995,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "02128e07681b31eec2d7519af89160637127ad2d3af9e75c2c0359ff66726286";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":371},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":373},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":374}} as const;
export const projectionSha256 = "bc47161041082f9326424891cc2d3564a7777dba121bec55fa244ca7204f08b7";
