import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-038",
  "inputSha256": "1943a9a3431eb999f1d404d32018aaed8fab9256ccf58915e4826bf127e63a8a",
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
      "text": "CIRCULAR 12 DE OCTUBRE"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 9,
      "text": "CIRCULAR\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 9,
      "end": 10,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 10,
      "end": 14,
      "text": "No. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 14,
      "end": 26,
      "text": "DRH/08/2020\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 26,
      "end": 27,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 27,
      "end": 47,
      "text": "NOVIEMBRE 2 DE 2020\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 47,
      "end": 48,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 48,
      "end": 101,
      "text": "A TODA LA COMUNIDAD DEL Servicios de Tecnología S.A.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 101,
      "end": 102,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 102,
      "end": 336,
      "text": "ME PERMITO COMUNICARLES QUE CON MOTIVO DEL ANIVERSARIO DEL DESCUBRIMIENTO DE AMÉRICA EL LUNES 13 DE OCTUBRE DEL AÑO EN CURSO, SE SUSPENDEN LAS LABORES PARA EL PERSONAL DE BASE, REANUDANDO ACTIVIDADES EL MARTES 14 DEL MISMO MES Y AÑO.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 336,
      "end": 337,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 337,
      "end": 371,
      "text": "ESE DÍA NO HABRÁ SERVICIO MÉDICO.\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 371,
      "end": 372,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 372,
      "end": 385,
      "text": "ATENTAMENTE.\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 385,
      "end": 386,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 386,
      "end": 391,
      "text": "LIC. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 391,
      "end": 416,
      "text": "ROBERTO CARLOS LUNA DÍAZ\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 416,
      "end": 417,
      "text": "\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 417,
      "end": 488,
      "text": "ENCARGADO DEL DESPACHO DE LOS ASUNTOS DE LA DIRECCIÓN DE CAPITAL HUMANO"
    }
  ],
  "passA": {
    "requestSha256": "7e6bdbe2b9db9021247b58ebf6a3a9e3d9c87a8fd4326e0bdcdbb5126143794b",
    "capturedAt": "2026-09-22T03:48:56.738Z",
    "elapsedMs": 724.2042839999995,
    "successfulAttemptElapsedMs": 723.1404780000012,
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
          "noul": 0.03
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
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "sender_supplied": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5071,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "c70ee53903260c8c3f0a9c7de878c2b5eef2ee8402929575d5b2ec7791e15286",
    "capturedAt": "2026-09-22T03:48:57.327Z",
    "elapsedMs": 586.5490940000018,
    "successfulAttemptElapsedMs": 584.9225240000014,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:18",
          "probabilities": {
            "body:12": 0,
            "body:17": 0,
            "body:16": 0,
            "body:6": 0,
            "body:13": 0,
            "body:1": 0,
            "body:11": 0,
            "body:5": 0,
            "body:9": 0.04,
            "NONE": 0.02,
            "body:2": 0,
            "body:15": 0.02,
            "body:7": 0,
            "body:18": 0.92,
            "body:3": 0,
            "body:0": 0,
            "body:8": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:14": 0,
            "body:10": 0
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 1294,
        "output_tokens": 222
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1313.9314920000033,
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
        "segmentId": "body:18"
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
    "seq": 183,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-038",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:56.014Z",
    "offsetMs": 0.655893000002834
  },
  {
    "seq": 184,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-038",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:56.737Z",
    "offsetMs": 724.2064070000051,
    "elapsedMs": 723.1404780000012,
    "outcome": "success"
  },
  {
    "seq": 185,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-038",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:56.741Z",
    "offsetMs": 727.7739290000027
  },
  {
    "seq": 186,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-038",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:57.327Z",
    "offsetMs": 1313.6665600000051,
    "elapsedMs": 584.9225240000014,
    "outcome": "success"
  },
  {
    "seq": 187,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-038",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:57.327Z",
    "offsetMs": 1313.9912479999984,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "94cb0c05d886906a74be8a68330409621a5f260a481629c843c0067685865001";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":184},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":186},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":187}} as const;
export const projectionSha256 = "21c1e2771e110d65d2fabc8a333d21dd7fda0aa91aa09642f23c4fa2801fd082";
