import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-135",
  "inputSha256": "e20a750fe84d884ed1ab9581241f15ad23dfc1e68e94e31dcb1dc761dc2f5ac7",
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
      "end": 30,
      "text": "INGRESO CERTIFICACIONES GOOGLE"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 18,
      "text": "Estimado docente:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 18,
      "end": 19,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 19,
      "end": 201,
      "text": "Agradecemos el interés por formar parte de la certificación “Google Cloud Computing Foundations Certificate” y te invitamos a iniciar tu registro en el siguiente enlace electrónico:\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 201,
      "end": 238,
      "text": "https://www.cloudskillsboost.google/\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 238,
      "end": 239,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 239,
      "end": 365,
      "text": "De igual forma, encontrarás un archivo adjunto donde se comparten los pasos a seguir, así como un enlace a un video de apoyo.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 365,
      "end": 366,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 366,
      "end": 510,
      "text": "Te deseamos el mejor de los éxitos y esperamos que los aprendizajes adquiridos contribuyan al fortalecimiento de tus habilidades profesionales.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 510,
      "end": 511,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 511,
      "end": 621,
      "text": "Cualquier duda o comentario, puedes escribirnos al correo electrónico contacto.certificaciones@centrocloud.mx\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 621,
      "end": 622,
      "text": "."
    }
  ],
  "passA": {
    "requestSha256": "c29eb1deb65785640283a3e1f1c9bd7073ffde3803709d52b459e23d02947f27",
    "capturedAt": "2026-09-22T03:50:55.531Z",
    "elapsedMs": 618.2779380000138,
    "successfulAttemptElapsedMs": 617.4042699999991,
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
          "noul": 0.07
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.07
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
            "active_request": 0.99,
            "informational": 0.01
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.23,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.76
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 5033,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "f5fa707f25a1aa1828d0b6623fbcb4491706ba83650bcdcf7d2dc2dc9adbe915",
    "capturedAt": "2026-09-22T03:50:56.105Z",
    "elapsedMs": 572.3003770000068,
    "successfulAttemptElapsedMs": 571.0295510000142,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:10": 0,
            "body:4": 0.01,
            "body:3": 0,
            "NONE": 0.04,
            "body:1": 0,
            "body:5": 0,
            "body:8": 0,
            "subject:0": 0.02,
            "body:7": 0.01,
            "body:0": 0.53,
            "body:2": 0.17,
            "body:6": 0,
            "body:9": 0.22
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 1100,
        "output_tokens": 141
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1192.5416709999845,
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
    "seq": 656,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-135",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:54.913Z",
    "offsetMs": 0.5954609999898821
  },
  {
    "seq": 657,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-135",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:55.531Z",
    "offsetMs": 618.2757730000012,
    "elapsedMs": 617.4042699999991,
    "outcome": "success"
  },
  {
    "seq": 658,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-135",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:55.533Z",
    "offsetMs": 620.789076999994
  },
  {
    "seq": 659,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-135",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:56.105Z",
    "offsetMs": 1192.3274969999911,
    "elapsedMs": 571.0295510000142,
    "outcome": "success"
  },
  {
    "seq": 660,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-135",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:56.105Z",
    "offsetMs": 1192.5941140000068,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8e55b64169edf55101ddee4c4dc45d340f3821aec7a037acd6811c472b521d10";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":657},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":659},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":660}} as const;
export const projectionSha256 = "8b74026ee222632733a724ae40bd469cf6143266e00d036b88c1eb9640b615e3";
