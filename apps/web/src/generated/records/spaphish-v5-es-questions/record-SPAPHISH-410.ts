import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-410",
  "inputSha256": "b72ce99ea18ae2add13cba46d3f77a9ac95e7c1bc4af9f53f2c6b27587ebdd87",
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
      "end": 38,
      "text": "Pablito - Tienes (1) mensaje nuestro. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 38,
      "end": 58,
      "text": "Complete su entrega."
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 58,
      "end": 69,
      "text": "📦 🚚 ..284"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 72,
      "text": "FedEx ® ☰ Fecha de envío: 05-14-2025 ¡Fallo en la entrega para ricardo! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 72,
      "end": 135,
      "text": "Entrega del paquete suspendida ¿Cómo desea recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 135,
      "end": 224,
      "text": "Quiero que me lo entreguen Lo recogeré yo mismo ¿Dónde desea que se entregue el paquete? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 224,
      "end": 593,
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 05-14-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "563a3fa46030db031d4faa4f507d385d3d856a32b322baa4576dd8b14e886e64",
    "capturedAt": "2026-09-22T03:56:21.820Z",
    "elapsedMs": 638.4285830000299,
    "successfulAttemptElapsedMs": 637.0003989999532,
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
          "noul": 0.08
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.31
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.76,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "sender_supplied": 0.22
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 5033,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "1aea281d73970b70c576248f59695e8d8ec38ddfce0bd6c7786d8d6791b2d60e",
    "capturedAt": "2026-09-22T03:56:22.477Z",
    "elapsedMs": 655.6882280000136,
    "successfulAttemptElapsedMs": 653.6059090000344,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.02,
            "body:3": 0.03,
            "NONE": 0.19,
            "body:2": 0,
            "body:1": 0.23,
            "subject:2": 0,
            "subject:1": 0.52
          },
          "confidence": 0.44
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.91,
            "subject:0": 0.01,
            "body:3": 0.01,
            "NONE": 0.060000000000000005,
            "body:2": 0,
            "body:1": 0.01,
            "subject:2": 0,
            "subject:1": 0
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 1624,
        "output_tokens": 187
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1295.514805999992,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 2009,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-410",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:21.183Z",
    "offsetMs": 1.1950539999525063
  },
  {
    "seq": 2010,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-410",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:21.820Z",
    "offsetMs": 638.4296449999674,
    "elapsedMs": 637.0003989999532,
    "outcome": "success"
  },
  {
    "seq": 2011,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-410",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:21.823Z",
    "offsetMs": 641.2892419999698
  },
  {
    "seq": 2012,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-410",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:22.477Z",
    "offsetMs": 1295.276521999971,
    "elapsedMs": 653.6059090000344,
    "outcome": "success"
  },
  {
    "seq": 2013,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-410",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:22.477Z",
    "offsetMs": 1295.559620999964,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "00de8494b46e2db1591ddd0e9bb839abb955a5df8a7ce15a606ccf58ef64d01c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2010},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2012},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2013}} as const;
export const projectionSha256 = "d00da02d11e33adde6308eaeac4c5ab10541e6749f9527ab4a27b5622e575e49";
