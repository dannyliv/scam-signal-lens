import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-326",
  "inputSha256": "15f839f52f699836cc65cab49e53d5b299205f699b66375b01b2a714a1e603ff",
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
      "end": 26,
      "text": "Fw: Cheque de compensación"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 32,
      "text": "Mi buen amigo, ¿cómo estás hoy? "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 32,
      "end": 71,
      "text": "Espero que tú y tu familia estén bien. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 71,
      "end": 83,
      "text": "Soy la Sra. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 83,
      "end": 183,
      "text": "Carolina Salas, quien se comunicó contigo hace algún tiempo con respecto a mi Fundación de Caridad. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 183,
      "end": 219,
      "text": "Espero que te hayas acordado de mí. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 219,
      "end": 315,
      "text": "Bueno, me complace informarte que logré donar el dinero a la FUNDACIÓN AMIGOS DEL MUNDO ESPAÑA. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 315,
      "end": 430,
      "text": "Mientras tanto, no podía olvidar tu esfuerzo y preocupación anteriores por ayudarme, aunque no lo logramos juntos. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 430,
      "end": 466,
      "text": "Pero tengo buenas noticias para ti. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 466,
      "end": 548,
      "text": "Por la gracia del Señor, quiero compensarte con un cheque de $750,000.00 dólares. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 548,
      "end": 607,
      "text": "Este es mi regalo y mi pequeño apoyo para ti y tu familia. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 607,
      "end": 759,
      "text": "Le he dado el cheque a nuestro párroco, el reverendo padre Rafael Gómez, para que lo envíe a ti para que puedas depositarlo en tu banco para retirarlo. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 759,
      "end": 887,
      "text": "Comunícate con el reverendo padre Rafael Gómez a su dirección de correo electrónico a continuación y dile que le pido a la Sra. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 887,
      "end": 950,
      "text": "Carolina Salas que te ayude a enviar el cheque a tu dirección. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 950,
      "end": 1164,
      "text": "Correo electrónico: rafael.gomez.soporte@iglesia-segura.org Teléfono: +525543210987 Una vez que reciba el cheque y retire el dinero, done $180 000,00 a los menos privilegiados que lo rodean y quédese con el resto. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1164,
      "end": 1297,
      "text": "Esta tarde viajaré a la India para continuar mi tratamiento con un especialista en cáncer recomendado por Trado Medical de la India. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1297,
      "end": 1346,
      "text": "Por favor, siempre oren por mí, Dios la bendiga. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 1346,
      "end": 1383,
      "text": "Su hermana y amiga Sra. carolinasalas"
    }
  ],
  "passA": {
    "requestSha256": "b39a84c0231c20a5d91d95d2dcfc38a99c18fd847d396d293cc6fa7afdb96738",
    "capturedAt": "2026-09-22T03:54:41.608Z",
    "elapsedMs": 712.7617359999567,
    "successfulAttemptElapsedMs": 711.6001679999754,
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
          "noul": 0.28
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.92
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.19
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.28
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.48
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.86
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.49
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
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.9400000000000001,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.06
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 5255,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "bdaf9db14c9996553581d12659f3d1d588d821502e6b532a5adac082818553b5",
    "capturedAt": "2026-09-22T03:54:42.217Z",
    "elapsedMs": 607.0305000000517,
    "successfulAttemptElapsedMs": 605.5113799999817,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:13": 0.09,
            "body:6": 0,
            "body:10": 0.05,
            "body:16": 0,
            "body:8": 0,
            "body:4": 0,
            "body:0": 0,
            "NONE": 0.81,
            "body:12": 0.02,
            "subject:0": 0,
            "body:2": 0,
            "body:1": 0,
            "body:7": 0,
            "body:11": 0.02,
            "body:3": 0,
            "body:14": 0,
            "body:5": 0,
            "body:15": 0
          },
          "confidence": 0.79
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:9": 0,
            "body:6": 0,
            "body:13": 0.97,
            "body:10": 0.02,
            "body:16": 0,
            "body:8": 0.01,
            "body:4": 0,
            "body:0": 0,
            "NONE": 0,
            "body:12": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:1": 0,
            "body:11": 0,
            "body:7": 0,
            "body:3": 0,
            "body:14": 0,
            "body:5": 0,
            "body:15": 0
          },
          "confidence": 0.96
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:6": 0,
            "body:13": 0.06,
            "body:10": 0.02,
            "body:16": 0,
            "body:2": 0,
            "body:4": 0.01,
            "body:0": 0,
            "NONE": 0.71,
            "body:12": 0.01,
            "subject:0": 0,
            "body:8": 0.01,
            "body:1": 0,
            "body:11": 0.07,
            "body:7": 0,
            "body:3": 0,
            "body:14": 0.11,
            "body:5": 0,
            "body:15": 0
          },
          "confidence": 0.69
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:9": 0,
            "body:13": 0.01,
            "body:6": 0,
            "body:10": 0.66,
            "body:16": 0.02,
            "body:2": 0.02,
            "body:4": 0,
            "body:0": 0,
            "NONE": 0,
            "body:12": 0.01,
            "subject:0": 0,
            "body:8": 0,
            "body:1": 0,
            "body:11": 0.16,
            "body:7": 0,
            "body:3": 0.12,
            "body:14": 0,
            "body:5": 0,
            "body:15": 0
          },
          "confidence": 0.63
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:13": 0.24000000000000002,
            "body:6": 0,
            "body:10": 0.17,
            "body:16": 0,
            "body:12": 0.01,
            "body:4": 0,
            "body:0": 0,
            "NONE": 0.43,
            "body:2": 0,
            "subject:0": 0,
            "body:8": 0.01,
            "body:1": 0,
            "body:11": 0.14,
            "body:7": 0,
            "body:3": 0,
            "body:14": 0,
            "body:5": 0,
            "body:15": 0
          },
          "confidence": 0.39
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:9": 0,
            "body:6": 0,
            "body:13": 0.97,
            "body:10": 0.02,
            "body:16": 0,
            "body:8": 0,
            "body:4": 0,
            "body:0": 0,
            "NONE": 0.01,
            "body:12": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:1": 0,
            "body:7": 0,
            "body:11": 0,
            "body:3": 0,
            "body:14": 0,
            "body:5": 0,
            "body:15": 0
          },
          "confidence": 0.96
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0.01,
            "body:6": 0,
            "body:13": 0.1,
            "body:10": 0.04,
            "body:16": 0,
            "body:2": 0,
            "body:4": 0,
            "body:0": 0,
            "NONE": 0.46,
            "body:12": 0,
            "subject:0": 0,
            "body:8": 0.38,
            "body:1": 0,
            "body:11": 0,
            "body:7": 0.01,
            "body:3": 0,
            "body:14": 0,
            "body:5": 0,
            "body:15": 0
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 7583,
        "output_tokens": 1387
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1321.8188789999695,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H2"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "none_selected",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:13"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "none_selected",
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
        "status": "selected",
        "segmentId": "body:13"
      },
      "remote_access_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unrealistic_reward": {
        "status": "low_confidence",
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1592,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-326",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:40.896Z",
    "offsetMs": 0.93964599998435
  },
  {
    "seq": 1593,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-326",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:41.608Z",
    "offsetMs": 712.7628120000008,
    "elapsedMs": 711.6001679999754,
    "outcome": "success"
  },
  {
    "seq": 1594,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-326",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:41.610Z",
    "offsetMs": 715.3127680000034
  },
  {
    "seq": 1595,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-326",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:42.216Z",
    "offsetMs": 1321.2683250000118,
    "elapsedMs": 605.5113799999817,
    "outcome": "success"
  },
  {
    "seq": 1596,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-326",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:42.217Z",
    "offsetMs": 1321.8681310000247,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "225c7bb4f5b471ce4a211e35af0a2584dacb622aeff6a04e635df8fec6a63057";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1593},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1595},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1596}} as const;
export const projectionSha256 = "ea3bfd68f47fbfd06b6303edce1172c513ec413076ccb3b6156e6ed56f76c262";
