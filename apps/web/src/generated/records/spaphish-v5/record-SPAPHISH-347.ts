import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-347",
  "inputSha256": "bf7fb2bd4607c906f85bd5fcc9fe2df16f6104e3e6774d43ea65a63106a62828",
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
    "requestSha256": "a631d9ef44fcac769c8f3ebb6ef21f7f38891cf8c6acc121c553737b48b38402",
    "capturedAt": "2026-09-20T23:45:49.272Z",
    "elapsedMs": 165.19783299999835,
    "successfulAttemptElapsedMs": 163.25529200000165,
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
          "noul": 0.05
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
          "noul": 0.7
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.59
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0.23,
            "active_request": 0.77
          },
          "confidence": 0.69
        },
        "request_route": {
          "type": "choice",
          "choice": "independently_established",
          "probabilities": {
            "mixed_or_unknown": 0.03,
            "independently_established": 0.53,
            "no_sensitive_action": 0.36,
            "sender_supplied": 0.08
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 3683,
        "output_tokens": 353
      }
    }
  },
  "passB": {
    "requestSha256": "8a05b7e0cd984c8ebe14860aa5d83bc0f96fbfcfc0b558935be4ee3eed7838f0",
    "capturedAt": "2026-09-20T23:45:49.437Z",
    "elapsedMs": 162.9835829999938,
    "successfulAttemptElapsedMs": 160.66716699999233,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:1": 0,
            "body:15": 0,
            "body:0": 0,
            "body:14": 0,
            "subject:0": 0,
            "body:8": 0,
            "body:2": 0.01,
            "body:11": 0,
            "body:9": 0,
            "body:12": 0,
            "body:13": 0,
            "NONE": 0.04,
            "body:5": 0,
            "body:4": 0.71,
            "body:3": 0,
            "body:6": 0.24000000000000002,
            "body:7": 0,
            "body:10": 0
          },
          "confidence": 0.69
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0.01,
            "body:14": 0,
            "body:0": 0.2,
            "body:15": 0.04,
            "subject:0": 0.03,
            "body:8": 0.16,
            "body:2": 0.37,
            "body:11": 0.01,
            "body:12": 0.02,
            "body:9": 0.01,
            "body:13": 0.03,
            "NONE": 0.08,
            "body:5": 0,
            "body:4": 0,
            "body:6": 0.01,
            "body:3": 0.01,
            "body:7": 0.01,
            "body:10": 0.01
          },
          "confidence": 0.35
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0,
            "body:15": 0.01,
            "body:0": 0,
            "body:14": 0,
            "body:13": 0,
            "body:8": 0.01,
            "body:2": 0.89,
            "body:11": 0,
            "body:12": 0,
            "body:9": 0,
            "subject:0": 0,
            "NONE": 0.08,
            "body:5": 0,
            "body:4": 0,
            "body:6": 0.01,
            "body:3": 0,
            "body:7": 0,
            "body:10": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 2714,
        "output_tokens": 570
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 330.4324579999957,
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
    "seq": 1699,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-347",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:49.108Z",
    "offsetMs": 1.4170000000012806
  },
  {
    "seq": 1700,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-347",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:49.272Z",
    "offsetMs": 165.1999999999971,
    "elapsedMs": 163.25529200000165,
    "outcome": "success"
  },
  {
    "seq": 1701,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-347",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:49.275Z",
    "offsetMs": 168.67899999998917
  },
  {
    "seq": 1702,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-347",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:49.437Z",
    "offsetMs": 330.11599999999453,
    "elapsedMs": 160.66716699999233,
    "outcome": "success"
  },
  {
    "seq": 1703,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-347",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:49.437Z",
    "offsetMs": 330.5105419999891,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c389afd1be5bcfa1d1369b43bef44e0c4eb585b7402c399603aab26ab6de6a5b";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1700},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1702},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1703}} as const;
export const projectionSha256 = "9ef1ff49ffb314e18eaf1192234136dc47fc85fa9befa1c33327b72b07e124df";
