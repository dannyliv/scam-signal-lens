import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-181",
  "inputSha256": "90ba0663d19d9db96674587a796022636b1f3fdebc4e231c0fd2e1f6551c3dad",
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
      "end": 48,
      "text": "Datos de acceso cuenta institucional - CINVESTAV"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 226,
      "text": "Estimado(a) Ricardo Martínez Lozano Estos son los datos de acceso de la cuenta de correo electrónico solicitada por medio del reporte de la mesa de ayuda de la CGSTIC: Dirección de acceso y ayuda: http://webmail.innovatec.edu\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 226,
      "end": 299,
      "text": " Nombre de usuario / dirección de correo: ricardo.martinez@innovatec.edu\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 299,
      "end": 323,
      "text": " Contraseña: Vp#82LsQ9! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 323,
      "end": 416,
      "text": "En el sitio de ayuda encontrará guías de configuración de su PC, laptop o dispositivo móvil. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 416,
      "end": 518,
      "text": "Su cuenta de correo electrónico es su responsabilidad y deberá cuidar que no se haga mal uso de ella. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 518,
      "end": 793,
      "text": "Si tiene algún problema con su cuenta y no encuentra la solución en el sitio de ayuda, comuníquese con el administrador del servicio de correo electrónico que le corresponda de acuerdo a la lista encontrada en la dirección: https://webmail.innovatec.edu/Administradores.aspx\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 793,
      "end": 796,
      "text": " . "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 796,
      "end": 979,
      "text": "Esta cuenta de correo institicional es propiedad del Instituto Tecnológico Innovatec y su uso está sujeto a los términos de uso publicados en la página: https://webmail.innovatec.edu\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 979,
      "end": 982,
      "text": " . "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 982,
      "end": 1006,
      "text": "Quedamos a sus órdenes. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1006,
      "end": 1178,
      "text": "Coordinación General de Servicios de Tecnologías de la Información y las Comunicaciones (CGSTIC) Instituto Tecnológico Innovatec Ext. 6842, 6820 http://cgstic.innovatec.edu"
    }
  ],
  "passA": {
    "requestSha256": "78980488d567a1e6f05c3f8e6ef4f1d618566933289e948f781449e7a866b262",
    "capturedAt": "2026-09-20T23:44:49.563Z",
    "elapsedMs": 158.28504199999588,
    "successfulAttemptElapsedMs": 156.5620409999974,
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
          "noul": 0.04
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
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.1
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
          "noul": 0.12
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.1,
            "informational": 0.89,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.86
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.16,
            "independently_established": 0.04,
            "sender_supplied": 0.77,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 3744,
        "output_tokens": 351
      }
    }
  },
  "passB": {
    "requestSha256": "cb035161f845d25a6a0b3d2c2e0ff31d12d76e159b0c99377ec483b52d0b23da",
    "capturedAt": "2026-09-20T23:44:49.753Z",
    "elapsedMs": 189.25362499999756,
    "successfulAttemptElapsedMs": 187.71424999999726,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "NONE": 0.01,
            "body:7": 0.01,
            "body:1": 0,
            "body:9": 0.01,
            "body:6": 0,
            "subject:0": 0.03,
            "body:0": 0.65,
            "body:8": 0,
            "body:3": 0,
            "body:5": 0.01,
            "body:4": 0,
            "body:10": 0.28
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 1328,
        "output_tokens": 141
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 349.50379200000316,
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
    "seq": 886,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-181",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:49.405Z",
    "offsetMs": 1.160250000000815
  },
  {
    "seq": 887,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-181",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:49.562Z",
    "offsetMs": 158.28654200000165,
    "elapsedMs": 156.5620409999974,
    "outcome": "success"
  },
  {
    "seq": 888,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-181",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:49.565Z",
    "offsetMs": 160.83229199999914
  },
  {
    "seq": 889,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-181",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:49.753Z",
    "offsetMs": 349.1979580000043,
    "elapsedMs": 187.71424999999726,
    "outcome": "success"
  },
  {
    "seq": 890,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-181",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:49.754Z",
    "offsetMs": 349.59300000000076,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0e75711ada26ab215165dfc0516c4cb801b5390338ef7a43a98f376467b45646";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":887},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":889},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":890}} as const;
export const projectionSha256 = "e5ba04a1047438f6393d5f4cc481c3b3bcd24aca8d4bddafe7a0511fb1cbaad2";
