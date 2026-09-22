import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-347",
  "inputSha256": "bf7fb2bd4607c906f85bd5fcc9fe2df16f6104e3e6774d43ea65a63106a62828",
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
      "end": 61,
      "text": "Firma electrónica de actas finales de evaluación - otoño 2025"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 25,
      "text": "Estimad@s Profesore(a)s,\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 25,
      "end": 26,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 26,
      "end": 284,
      "text": "Esperando se encuentren bien en esta contingencia, por este medio se les recuerda que la validación de evaluaciones finales del periodo de otoño 2020 la harán de forma digital y funcionará a través de PlataformaInterna con su clave de profesor y contraseña.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 284,
      "end": 285,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 285,
      "end": 430,
      "text": "El sistema estará abierto para el registro a partir del lunes 15 de enero a las 8:00 am y concluirá el miércoles 17 de enero, a las 18:00 horas.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 430,
      "end": 431,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 431,
      "end": 618,
      "text": "En caso de existir algún error en la calificación final, se deberá corregir con el proceso de cambio de nota, en las fechas marcadas en el Calendario Académico, 20 y 22 de enero de 2020.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 618,
      "end": 619,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 619,
      "end": 682,
      "text": "Me mantendré atenta a cualquier duda o comentario al respecto.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 682,
      "end": 683,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 683,
      "end": 724,
      "text": "Un abrazo a Tod@s y sigamos cuidándonos,\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 724,
      "end": 725,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 725,
      "end": 729,
      "text": "PD. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 729,
      "end": 819,
      "text": "Se anexa el instructivo para subir las notas y generar las actas de evaluación digitales.\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 819,
      "end": 820,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 820,
      "end": 827,
      "text": "[VCard]"
    }
  ],
  "passA": {
    "requestSha256": "4670ee2893624663f83f9a577c9ec568469372089903e62ec4b5572ffbfa91e2",
    "capturedAt": "2026-09-22T03:55:08.416Z",
    "elapsedMs": 623.8533919999609,
    "successfulAttemptElapsedMs": 622.3639510000357,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.47
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
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
          "noul": 0.34
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.22,
            "educational_or_quoted": 0,
            "active_request": 0.78,
            "mixed_or_unclear": 0
          },
          "confidence": 0.7
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.21,
            "no_sensitive_action": 0.5,
            "independently_established": 0.28
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 5133,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "608f65eceacafb31c19c13e44d29c159db037da01fcdf98d7037411ee096b3ef",
    "capturedAt": "2026-09-22T03:55:08.963Z",
    "elapsedMs": 545.0869260000181,
    "successfulAttemptElapsedMs": 543.3189539999585,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:9": 0,
            "body:8": 0,
            "body:3": 0,
            "body:6": 0.15,
            "body:13": 0,
            "body:1": 0,
            "NONE": 0.06,
            "body:12": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:11": 0,
            "body:15": 0,
            "body:10": 0,
            "body:14": 0,
            "body:2": 0.01,
            "body:7": 0,
            "body:5": 0,
            "body:4": 0.78
          },
          "confidence": 0.76
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:9": 0.01,
            "body:8": 0.19,
            "body:3": 0.01,
            "body:6": 0.01,
            "body:13": 0.02,
            "body:1": 0.01,
            "NONE": 0.06,
            "body:0": 0.17,
            "body:12": 0.01,
            "subject:0": 0.02,
            "body:14": 0,
            "body:15": 0.04,
            "body:10": 0,
            "body:11": 0.01,
            "body:2": 0.44,
            "body:7": 0,
            "body:5": 0,
            "body:4": 0
          },
          "confidence": 0.4
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:9": 0,
            "body:8": 0,
            "body:3": 0,
            "body:6": 0,
            "body:13": 0,
            "body:1": 0,
            "NONE": 0.17,
            "body:12": 0,
            "body:0": 0,
            "body:2": 0.8200000000000001,
            "body:11": 0,
            "body:15": 0,
            "body:10": 0,
            "body:14": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:5": 0,
            "body:4": 0
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 3020,
        "output_tokens": 570
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1171.1674929999863,
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
        "status": "selected",
        "segmentId": "body:4"
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
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 1697,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-347",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:07.793Z",
    "offsetMs": 1.1525179999880493
  },
  {
    "seq": 1698,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-347",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:08.415Z",
    "offsetMs": 623.8525109999464,
    "elapsedMs": 622.3639510000357,
    "outcome": "success"
  },
  {
    "seq": 1699,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-347",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:08.418Z",
    "offsetMs": 626.7313269999577
  },
  {
    "seq": 1700,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-347",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:08.962Z",
    "offsetMs": 1170.7087379999575,
    "elapsedMs": 543.3189539999585,
    "outcome": "success"
  },
  {
    "seq": 1701,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-347",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:08.963Z",
    "offsetMs": 1171.222968999995,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "363909cc6851b54cf789f936c5b78a20bc2b025f8d1400d605a2ae771be4f2cb";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1698},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1700},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1701}} as const;
export const projectionSha256 = "4963c23c0c5ceab4bb8de1b735c5aec4617ec625eaaf3be43e519d6cd199cf2f";
