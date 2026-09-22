import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-377",
  "inputSha256": "350564a7129743c62b8aad237bd260ad6faecdc63a035e9d730e736eb723dc63",
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
      "end": 21,
      "text": "Tiene nuevos mensajes"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 36,
      "text": "Hola, ricardo@empresa.ficticia.com:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 36,
      "end": 37,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 37,
      "end": 171,
      "text": "Usted tiene nuevas notificaciones importantes de servicio relacionadas con su correo electrónico que requieren su atención inmediata. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 171,
      "end": 240,
      "text": "Se requiere que siga los pasos necesarios usando el siguiente botón.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 240,
      "end": 241,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 241,
      "end": 259,
      "text": "Leer este mensaje\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 259,
      "end": 260,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 260,
      "end": 356,
      "text": "Estamos trabajando constantemente para prestarle un excelente servicio en todas nuestras redes. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 356,
      "end": 432,
      "text": "Si no sigue los pasos, podría estar en riesgo de perder todos sus mensajes.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 432,
      "end": 433,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 433,
      "end": 477,
      "text": "Atentamente, Equipo de servicios de correo ="
    }
  ],
  "passA": {
    "requestSha256": "8007de1632ac391205f8ae8f59a0a3b7883f22e93529bbc68497979c3df8d5d8",
    "capturedAt": "2026-09-22T03:55:43.552Z",
    "elapsedMs": 593.6703790000174,
    "successfulAttemptElapsedMs": 592.3209810000262,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.2
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.18
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.51
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
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
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.78,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.2,
            "independently_established": 0
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 4971,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "35e93241e9ef060b30428221823631fd1c25a9f07a9765285d86331d1d1f1c10",
    "capturedAt": "2026-09-22T03:55:44.267Z",
    "elapsedMs": 714.4767669999856,
    "successfulAttemptElapsedMs": 713.0664220000035,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:2": 0.08,
            "body:8": 0.92,
            "body:10": 0,
            "body:6": 0,
            "body:3": 0,
            "NONE": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:1": 0,
            "body:9": 0,
            "body:4": 0,
            "body:7": 0,
            "body:0": 0
          },
          "confidence": 0.91
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:2": 0.1,
            "body:8": 0,
            "body:10": 0.8200000000000001,
            "body:6": 0,
            "body:3": 0.01,
            "NONE": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:1": 0,
            "body:0": 0,
            "body:4": 0,
            "body:7": 0.06,
            "body:9": 0
          },
          "confidence": 0.79
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:8": 0.06,
            "body:10": 0,
            "body:6": 0,
            "body:3": 0.23,
            "NONE": 0.67,
            "subject:0": 0,
            "body:5": 0.02,
            "body:1": 0.01,
            "body:9": 0,
            "body:4": 0,
            "body:7": 0,
            "body:0": 0
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 2166,
        "output_tokens": 418
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1309.8281900000293,
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
        "segmentId": "body:8"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:10"
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
    "seq": 1846,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-377",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:42.959Z",
    "offsetMs": 1.042210999992676
  },
  {
    "seq": 1847,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-377",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:43.551Z",
    "offsetMs": 593.6708780000336,
    "elapsedMs": 592.3209810000262,
    "outcome": "success"
  },
  {
    "seq": 1848,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-377",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:43.554Z",
    "offsetMs": 596.0490040000295
  },
  {
    "seq": 1849,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-377",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:44.267Z",
    "offsetMs": 1309.5695689999848,
    "elapsedMs": 713.0664220000035,
    "outcome": "success"
  },
  {
    "seq": 1850,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-377",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:44.267Z",
    "offsetMs": 1309.8780550000374,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "29163b046742be6e1c7ef253de1ab79bdc932ba48b45d423d602ae740fe5610f";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1847},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1849},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1850}} as const;
export const projectionSha256 = "a2c1ebfae649f0956bc831ec47463ac960bdab90a13c99cffc1d95fc7cae51b4";
