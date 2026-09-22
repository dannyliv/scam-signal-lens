import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-147",
  "inputSha256": "4d9cfd3f513602110b42c5d344500c030ecc3400f6fcf76abb44baccdfe0e33e",
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
      "end": 35,
      "text": "Sobre curso de Ataques Cibernéticos"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 15,
      "text": "Hola chicos!!!\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 15,
      "end": 16,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 16,
      "end": 59,
      "text": "Qué gusto volver a tener clases con uds!!! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 59,
      "end": 232,
      "text": "Esta vez estaremos tomando un curso de cibeseguridad, ataques cibernéticos y aunque el temario dice una cosa, tenemos flexibilidad para tocar otros temas que nos interesen.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 232,
      "end": 233,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 233,
      "end": 332,
      "text": "Este correo es, además de para saludarlos, ponernos de acuerdo en qué días podemos tomar la clase. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 332,
      "end": 492,
      "text": "Independientemente del horario que nos asigne la UHISA, por cuestiones de tiempo y demás, debemos organizar entre nosotros un horario que nos funcione a todos. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 492,
      "end": 570,
      "text": "Para esto les pido que creemos un grupo de whatsapp para ponernos de acuerdo. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 570,
      "end": 680,
      "text": "Mi número es 55 1234 5678 y bueno, debemos organizar esto cuanto antes para no perder tiempo y no atrasarnos.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 680,
      "end": 681,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 681,
      "end": 777,
      "text": "Cualquier cosa, me tienen acá en el correo en lo que organizamos el grupo y nos ponemos al día.\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 777,
      "end": 778,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 778,
      "end": 786,
      "text": "Saludos!"
    }
  ],
  "passA": {
    "requestSha256": "c2b8c19a0326b71bbbc3dc25ec144faf55861f9907789202b47ba165fff920ea",
    "capturedAt": "2026-09-22T03:51:08.321Z",
    "elapsedMs": 586.0408830000088,
    "successfulAttemptElapsedMs": 585.2550700000138,
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
          "noul": 0.57
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.3
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
          "noul": 0.11
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
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
            "no_sensitive_action": 0.5,
            "sender_supplied": 0.5,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 5085,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "cc2d833098dacfa3df20e135d422d699f97cfcb09661007989dd891ccd1af49a",
    "capturedAt": "2026-09-22T03:51:08.817Z",
    "elapsedMs": 495.0578819999937,
    "successfulAttemptElapsedMs": 493.38446299999487,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:2": 0,
            "body:6": 0,
            "body:1": 0,
            "body:9": 0,
            "body:8": 0.98,
            "body:4": 0,
            "NONE": 0.02,
            "body:5": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:7": 0,
            "body:11": 0,
            "body:12": 0,
            "body:3": 0,
            "body:10": 0
          },
          "confidence": 0.97
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.03,
            "body:10": 0.01,
            "body:1": 0,
            "body:9": 0,
            "body:8": 0.02,
            "body:4": 0,
            "NONE": 0.5700000000000001,
            "body:5": 0.01,
            "subject:0": 0,
            "body:0": 0,
            "body:7": 0.07,
            "body:11": 0,
            "body:12": 0,
            "body:3": 0.01,
            "body:6": 0.27
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 1968,
        "output_tokens": 317
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1082.4703649999865,
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
        "segmentId": "body:8"
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
    "seq": 713,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-147",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:07.735Z",
    "offsetMs": 0.5614539999805856
  },
  {
    "seq": 714,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-147",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:08.321Z",
    "offsetMs": 586.0407509999932,
    "elapsedMs": 585.2550700000138,
    "outcome": "success"
  },
  {
    "seq": 715,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-147",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:08.323Z",
    "offsetMs": 588.166922000004
  },
  {
    "seq": 716,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-147",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:08.817Z",
    "offsetMs": 1082.2269309999829,
    "elapsedMs": 493.38446299999487,
    "outcome": "success"
  },
  {
    "seq": 717,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-147",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:08.817Z",
    "offsetMs": 1082.515992999979,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8b5789e0c82910032d4b197c875acab3fea6ca71904f80ced3fad9a9a6031733";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":714},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":716},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":717}} as const;
export const projectionSha256 = "78da4c1c4c6dbcea5b550fd1e8f4bae10ecb961834aa32b675b7200e02b44f08";
