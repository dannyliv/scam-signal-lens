import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-181",
  "inputSha256": "90ba0663d19d9db96674587a796022636b1f3fdebc4e231c0fd2e1f6551c3dad",
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
    "requestSha256": "df5894ee6c052e836284a7e16916edb475af61b7cd60795faa989bd710477263",
    "capturedAt": "2026-09-22T03:51:47.824Z",
    "elapsedMs": 616.0965870000073,
    "successfulAttemptElapsedMs": 614.9889359999797,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.09
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
          "noul": 0.15
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.89,
            "active_request": 0.11,
            "educational_or_quoted": 0
          },
          "confidence": 0.84
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "independently_established": 0.09,
            "sender_supplied": 0.7,
            "no_sensitive_action": 0.19
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 5194,
        "output_tokens": 351
      }
    }
  },
  "passB": {
    "requestSha256": "2e5586dbf93ab24daf5aca1153375e18042617d7b805816753e75ceea4eeff7d",
    "capturedAt": "2026-09-22T03:51:48.321Z",
    "elapsedMs": 495.6867499999935,
    "successfulAttemptElapsedMs": 494.8523940000159,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:10": 0.33,
            "body:2": 0,
            "body:7": 0,
            "body:8": 0,
            "subject:0": 0.02,
            "body:5": 0,
            "body:3": 0,
            "body:4": 0,
            "body:6": 0,
            "body:9": 0.02,
            "NONE": 0.02,
            "body:1": 0,
            "body:0": 0.61
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 1428,
        "output_tokens": 141
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1113.266610999999,
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
    "seq": 880,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-181",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:47.209Z",
    "offsetMs": 0.7153479999979027
  },
  {
    "seq": 881,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-181",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:47.824Z",
    "offsetMs": 616.0973460000241,
    "elapsedMs": 614.9889359999797,
    "outcome": "success"
  },
  {
    "seq": 882,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-181",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:47.826Z",
    "offsetMs": 617.8828680000152
  },
  {
    "seq": 883,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-181",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:48.321Z",
    "offsetMs": 1113.0203370000236,
    "elapsedMs": 494.8523940000159,
    "outcome": "success"
  },
  {
    "seq": 884,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-181",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:48.321Z",
    "offsetMs": 1113.311337000021,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "268950225de7e5493ac41d95f0ec5ab71a84acc4df9af77d1156866d892d0a96";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":881},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":883},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":884}} as const;
export const projectionSha256 = "f8ed22ab3659275f317874251bcb8f6440f7645f428061edb6a3e62548c47829";
