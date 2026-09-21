import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-326",
  "inputSha256": "15f839f52f699836cc65cab49e53d5b299205f699b66375b01b2a714a1e603ff",
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
    "requestSha256": "d9f9fc6c33ea10b8b384f2bd767bbdbc131c45e7a3d35ed22eafe8e77d5cc11f",
    "capturedAt": "2026-09-20T23:45:41.669Z",
    "elapsedMs": 154.59104200000002,
    "successfulAttemptElapsedMs": 152.48783399999957,
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
          "noul": 0.25
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.93
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.25
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.19
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.5
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.79
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.47
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.02,
            "sender_supplied": 0.98,
            "mixed_or_unknown": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3805,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "91d341021288f4afb03272349968f1b0edbd61fe0da89d6d1bb7c37091dbedae",
    "capturedAt": "2026-09-21T00:57:28.310Z",
    "elapsedMs": 113.07629100000122,
    "successfulAttemptElapsedMs": 111.51012499999888,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.76,
            "body:10": 0.09,
            "body:1": 0,
            "body:15": 0,
            "body:8": 0,
            "body:12": 0.07,
            "body:2": 0,
            "body:14": 0,
            "body:5": 0,
            "body:9": 0,
            "body:7": 0,
            "body:16": 0,
            "body:11": 0.02,
            "body:6": 0,
            "body:13": 0.06,
            "body:0": 0,
            "body:4": 0
          },
          "confidence": 0.73
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0,
            "body:10": 0.02,
            "body:1": 0,
            "body:15": 0,
            "body:8": 0.01,
            "body:12": 0,
            "body:2": 0,
            "body:14": 0,
            "body:5": 0,
            "body:7": 0,
            "body:16": 0,
            "body:9": 0,
            "body:11": 0,
            "body:13": 0.97,
            "body:6": 0,
            "body:0": 0,
            "body:4": 0
          },
          "confidence": 0.96
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.43,
            "body:10": 0.07,
            "body:1": 0,
            "body:15": 0,
            "body:8": 0.01,
            "body:12": 0.02,
            "body:7": 0,
            "body:14": 0,
            "body:5": 0,
            "body:2": 0,
            "body:9": 0,
            "body:16": 0,
            "body:11": 0.01,
            "body:6": 0,
            "body:13": 0.46,
            "body:0": 0,
            "body:4": 0
          },
          "confidence": 0.42
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:0": 0,
            "body:3": 0.06999999999999999,
            "NONE": 0,
            "body:10": 0.63,
            "body:1": 0,
            "body:15": 0,
            "body:8": 0,
            "body:12": 0.01,
            "body:2": 0.02,
            "body:14": 0,
            "body:5": 0,
            "body:16": 0.01,
            "body:9": 0,
            "body:7": 0,
            "body:11": 0.25,
            "body:6": 0,
            "body:13": 0.01,
            "subject:0": 0,
            "body:4": 0
          },
          "confidence": 0.6
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.61,
            "body:10": 0.15000000000000002,
            "body:1": 0,
            "body:15": 0,
            "body:16": 0,
            "body:12": 0.01,
            "body:2": 0,
            "body:14": 0,
            "body:5": 0,
            "body:9": 0,
            "body:8": 0.01,
            "body:7": 0,
            "body:11": 0.14,
            "body:6": 0,
            "body:13": 0.08,
            "body:0": 0,
            "body:4": 0
          },
          "confidence": 0.58
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.04,
            "body:10": 0.060000000000000005,
            "body:1": 0,
            "body:15": 0,
            "body:16": 0,
            "body:12": 0,
            "body:2": 0,
            "body:14": 0,
            "body:5": 0,
            "body:9": 0,
            "body:8": 0.01,
            "body:7": 0,
            "body:11": 0,
            "body:13": 0.89,
            "body:6": 0,
            "body:0": 0,
            "body:4": 0
          },
          "confidence": 0.88
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:3": 0,
            "NONE": 0.51,
            "body:10": 0.03,
            "body:1": 0,
            "body:15": 0,
            "body:8": 0.38,
            "body:12": 0,
            "body:7": 0.01,
            "body:14": 0,
            "body:5": 0,
            "body:9": 0.01,
            "body:16": 0,
            "body:2": 0,
            "body:11": 0,
            "body:13": 0.06,
            "body:6": 0,
            "subject:0": 0,
            "body:4": 0
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 6864,
        "output_tokens": 1393
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 428.0500839999968,
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
        "status": "none_selected",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:13"
      },
      "unusual_payment_routing": {
        "status": "low_confidence",
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1594,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-326",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:41.516Z",
    "offsetMs": 1.5285830000066198
  },
  {
    "seq": 1595,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-326",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:41.669Z",
    "offsetMs": 154.59291700000176,
    "elapsedMs": 152.48783399999957,
    "outcome": "success"
  },
  {
    "seq": 1596,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-326",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:41.673Z",
    "offsetMs": 159.26716699999815
  },
  {
    "seq": 1597,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-326",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:41.827Z",
    "offsetMs": 313.23458299999766,
    "elapsedMs": 153.4855830000015,
    "outcome": "success"
  },
  {
    "seq": 1598,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-326",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:41.828Z",
    "offsetMs": 313.60958299999766,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2711,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-326",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:28.198Z",
    "offsetMs": 1.8915839999990567
  },
  {
    "seq": 2712,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-326",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:28.310Z",
    "offsetMs": 113.82258399999955,
    "elapsedMs": 111.51012499999888,
    "outcome": "success"
  },
  {
    "seq": 2713,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-326",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:28.310Z",
    "offsetMs": 114.32841699999881,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c18d4fcb6a2d62c128a22db46455659f7ee7972a6c193b2fd6ecfa4d9d4bdcac";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1595},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2712},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2713}} as const;
export const projectionSha256 = "15b4564d09d750649facb5809f35e18d1259ea698257f8136881697c7c7de39c";
