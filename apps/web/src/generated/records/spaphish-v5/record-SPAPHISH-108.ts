import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-108",
  "inputSha256": "4726bd3f9fab8290c8a2ee0bbd0bc8894fa150b0becd85944a6c1e087b6ee595",
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
      "end": 40,
      "text": "Proceso de Becas ciclo escolar 2021-2022"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 136,
      "text": "Estimadas Familias Oakwood, Adjunto a este correo encontrarán información respecto al proceso de Becas para el ciclo escolar 2021-2022.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 136,
      "end": 137,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 137,
      "end": 140,
      "text": "--\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 140,
      "end": 141,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 141,
      "end": 146,
      "text": "Lic. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 146,
      "end": 168,
      "text": "Sofía Robles Castillo\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 168,
      "end": 169,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 169,
      "end": 190,
      "text": "Oakwood Academy S.C.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 190,
      "end": 191,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 191,
      "end": 209,
      "text": "Dirección General\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 209,
      "end": 210,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 210,
      "end": 239,
      "text": "Tel: (222) 5 67 89 01 / ext. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 239,
      "end": 243,
      "text": "105\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 243,
      "end": 244,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 244,
      "end": 320,
      "text": "Mail: sofia.robles@oakwoodacademy.edu.mx rodrigo.leon@oakwoodacademy.edu.mx\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 320,
      "end": 321,
      "text": "\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 321,
      "end": 352,
      "text": "Web: www.oakwoodacademy.edu.mx\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 352,
      "end": 353,
      "text": "\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 353,
      "end": 393,
      "text": "AVISO DE PRIVACIDAD DE DATOS PERSONALES\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 393,
      "end": 394,
      "text": "\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 394,
      "end": 644,
      "text": "La Ley Federal de Protección de Datos Personales en posesión de los particulares, establece la obligación de poner a su disposición el presente aviso de privacidad, a fin de obtener su conocimiento tácito para el tratamiento de sus datos personales.\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 644,
      "end": 645,
      "text": "\n"
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 645,
      "end": 1195,
      "text": "En cumplimiento a las diversas disposiciones de la Secretaría de Educación Pública y la Ley Federal de Protección de Datos Personales le informamos que los datos que nos proporciona son tratados única y exclusivamente por el personal que labora en Oakwood Academy, S.C., con el propósito de proporcionar los servicios que usted nos solicita, sin que se transfiera a ningún tercero, salvo los actos que por su naturaleza deben ser registrados, comunicados o legalizados ante diversas autoridades, así como informes solicitados por cualquier autoridad."
    }
  ],
  "passA": {
    "requestSha256": "048c0b95d47cec3d57a3cca98150447c1c9bf381f041050d684e5754173735fe",
    "capturedAt": "2026-09-20T23:44:26.188Z",
    "elapsedMs": 142.7416250000024,
    "successfulAttemptElapsedMs": 141.2074999999968,
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
          "noul": 0.06
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.09
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.01,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.99
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.97,
            "independently_established": 0,
            "sender_supplied": 0.03,
            "mixed_or_unknown": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3743,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "7bf012b68d9adc05e637c60454f4b76332ad25c0631af85f11537c03eb57c466",
    "capturedAt": "2026-09-20T23:44:26.319Z",
    "elapsedMs": 129.92137499999808,
    "successfulAttemptElapsedMs": 128.75020800000493,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:17": 0,
            "body:10": 0,
            "body:13": 0,
            "body:11": 0,
            "body:14": 0,
            "body:4": 0.060000000000000005,
            "body:6": 0,
            "body:5": 0.01,
            "body:2": 0,
            "body:7": 0.16,
            "NONE": 0.01,
            "body:16": 0,
            "body:12": 0,
            "body:22": 0.03,
            "body:0": 0.32,
            "body:18": 0,
            "body:19": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:8": 0,
            "body:3": 0,
            "body:15": 0,
            "body:9": 0.39,
            "body:20": 0.01,
            "body:21": 0.01
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 1496,
        "output_tokens": 261
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 274.38874999999825,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 528,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-108",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:26.046Z",
    "offsetMs": 0.964957999996841
  },
  {
    "seq": 529,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-108",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:26.187Z",
    "offsetMs": 142.74404199999844,
    "elapsedMs": 141.2074999999968,
    "outcome": "success"
  },
  {
    "seq": 530,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-108",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:26.190Z",
    "offsetMs": 144.791999999994
  },
  {
    "seq": 531,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-108",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:26.319Z",
    "offsetMs": 274.0363329999964,
    "elapsedMs": 128.75020800000493,
    "outcome": "success"
  },
  {
    "seq": 532,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-108",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:26.319Z",
    "offsetMs": 274.4890829999931,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "bdfd4801dcaf6086c3b380f600f12d7a28f37ddbc79da8610ec2ce4b70670bdd";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":529},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":531},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":532}} as const;
export const projectionSha256 = "f42a23a62919c148961e1bc0a563d3e684c9e4da650eadfe6d250b029ac9cdee";
