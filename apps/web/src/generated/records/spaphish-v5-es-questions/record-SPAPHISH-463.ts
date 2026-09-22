import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-463",
  "inputSha256": "0d4d2432de95dd80f9d3c25b6a96bfca7d0f9d94058110cfd8e10f6c62f735bf",
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
      "end": 36,
      "text": "No puedo iniciar sesión en mi cuenta"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 178,
      "text": "ENVIADO No puedo iniciar sesión en mi cuenta Hola Patricio, bienvenido al soporte de MoviTaxi, mi nombre es Ricardo y será todo un placer ayudarte el día de hoy en tu solicitud. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 178,
      "end": 387,
      "text": "Comprendo la situación que presentas al no poder solicitar viajes, por lo que debido a la que me informas he realizado una detallada revisión en tu cuenta y te comento que todo se encuentra en perfecto orden. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 387,
      "end": 943,
      "text": "Sin embargo, sé lo importante que es para ti hacer uso de tu aplicación en este momento, por lo que te brindaré algunas opciones que te puedan servir: Primero y antes que todo elimina y reinstalar la aplicación MoviTaxi Después de eso actualiza el software de tu dispositivo Dirígete a la App de descargas de tu dispositivo y actualiza la aplicación MoviTaxi Por último reiniciar tu dispositivo Después de que realices estos pasos intenta nuevamente usar la aplicación, ten en cuenta que las actualizaciones pueden tardar hasta 1 hora en hacerse efectiva. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 943,
      "end": 1027,
      "text": "Desde el equipo de soporte te pedimos disculpas por los inconvenientes presentados. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 1027,
      "end": 1218,
      "text": "No olvides que en el momento que presentes dudas o problemas sobre tu aplicación no dudes en contactarnos desde el apartado de ayuda que se ubica en tu aplicación y con gusto te asistiremos. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 1218,
      "end": 1302,
      "text": "Ve a la conversación El mensaje lo envió Ricardo del equipo de soporte de MoviTaxi. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 1302,
      "end": 1409,
      "text": "Para continuar con esta conversación, responde a este correo electrónico o haz clic en el botón de arriba. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1409,
      "end": 1428,
      "text": "¿Tienes preguntas? "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1428,
      "end": 1461,
      "text": "Visita nuestro Centro de ayuda . "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1461,
      "end": 1546,
      "text": "Centro de ayuda Términos Privacidad Preferencias de correo electrónico MoviTaxi S.A. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1546,
      "end": 1612,
      "text": "Camino del Molino 123, 1011 XX Rótterdam, Netherlands MoviTaxi.com"
    }
  ],
  "passA": {
    "requestSha256": "630067e0496e88c853f1bb39952bbb7bfa4ceb86fa4791b1b3c7460f571127cf",
    "capturedAt": "2026-09-22T03:57:24.149Z",
    "elapsedMs": 606.1654630000703,
    "successfulAttemptElapsedMs": 604.0416060000425,
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
          "noul": 0.03
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
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.44
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.06,
            "active_request": 0.94,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.91
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.09,
            "no_sensitive_action": 0.87,
            "mixed_or_unknown": 0.01,
            "independently_established": 0.03
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 5257,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "dc69bd01c37757bb70433a8cce2fd1d099f9d4f1963f64a16c8430442798b7a5",
    "capturedAt": "2026-09-22T03:57:24.689Z",
    "elapsedMs": 538.4581620000536,
    "successfulAttemptElapsedMs": 536.42644499999,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:7": 0,
            "body:3": 0.01,
            "body:0": 0.84,
            "body:8": 0,
            "body:6": 0,
            "body:1": 0.01,
            "body:5": 0.12,
            "body:4": 0,
            "subject:0": 0,
            "body:9": 0,
            "NONE": 0.01,
            "body:2": 0.01,
            "body:10": 0
          },
          "confidence": 0.82
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:7": 0,
            "body:3": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:6": 0.12,
            "body:1": 0,
            "body:5": 0.01,
            "body:4": 0.7,
            "body:8": 0.04,
            "body:9": 0,
            "NONE": 0.09,
            "body:2": 0.04,
            "body:10": 0
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 2453,
        "output_tokens": 282
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1146.2932400000282,
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
        "status": "selected",
        "segmentId": "body:4"
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
    "seq": 2273,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-463",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:23.544Z",
    "offsetMs": 1.7710639999713749
  },
  {
    "seq": 2274,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-463",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:24.148Z",
    "offsetMs": 606.1664289999753,
    "elapsedMs": 604.0416060000425,
    "outcome": "success"
  },
  {
    "seq": 2275,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-463",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:24.151Z",
    "offsetMs": 609.1890670000575
  },
  {
    "seq": 2276,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-463",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:24.688Z",
    "offsetMs": 1146.037245000014,
    "elapsedMs": 536.42644499999,
    "outcome": "success"
  },
  {
    "seq": 2277,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-463",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:24.689Z",
    "offsetMs": 1146.348515000078,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f0d67ba86d2cabb9dab4b28a0df7707990df2cd8e5b183b5aef9a0a45ef420cf";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2274},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2276},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2277}} as const;
export const projectionSha256 = "6c53ca64e2428964aa00bc8fda428bb99114d789741c5481f99fe4cd6225fa14";
