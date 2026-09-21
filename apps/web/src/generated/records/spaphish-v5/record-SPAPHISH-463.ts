import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-463",
  "inputSha256": "0d4d2432de95dd80f9d3c25b6a96bfca7d0f9d94058110cfd8e10f6c62f735bf",
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
    "requestSha256": "89404636514db08b0a141bc762ea9ba77472ec1cf0465127d7844505ba62bba1",
    "capturedAt": "2026-09-20T23:46:27.283Z",
    "elapsedMs": 253.48220800000126,
    "successfulAttemptElapsedMs": 251.66674999997485,
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
          "noul": 0.03
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
          "noul": 0.55
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.97,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.03
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.05,
            "no_sensitive_action": 0.75,
            "sender_supplied": 0.19,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 3807,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "6a27bf46833061f916cd0ebb99e3456f4456b63de2cb11ba1d6c6b27f2f00209",
    "capturedAt": "2026-09-20T23:46:27.439Z",
    "elapsedMs": 153.98112500002026,
    "successfulAttemptElapsedMs": 151.45937500000582,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:7": 0,
            "body:1": 0.01,
            "body:4": 0,
            "body:3": 0.03,
            "body:5": 0.24,
            "body:0": 0.6900000000000001,
            "NONE": 0.01,
            "body:8": 0,
            "body:6": 0,
            "body:10": 0,
            "subject:0": 0,
            "body:9": 0,
            "body:2": 0.02
          },
          "confidence": 0.65
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:7": 0,
            "body:1": 0,
            "body:4": 0.74,
            "body:3": 0,
            "NONE": 0.11,
            "body:0": 0,
            "body:5": 0.02,
            "body:8": 0.02,
            "subject:0": 0,
            "body:2": 0.04,
            "body:6": 0.07,
            "body:9": 0,
            "body:10": 0
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 2249,
        "output_tokens": 282
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 410.4690840000112,
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
    "seq": 2274,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-463",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:27.030Z",
    "offsetMs": 1.3169589999888558
  },
  {
    "seq": 2275,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-463",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:27.282Z",
    "offsetMs": 253.48204199998872,
    "elapsedMs": 251.66674999997485,
    "outcome": "success"
  },
  {
    "seq": 2276,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-463",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:27.287Z",
    "offsetMs": 258.06433399999514
  },
  {
    "seq": 2277,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-463",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:27.439Z",
    "offsetMs": 410.1662500000093,
    "elapsedMs": 151.45937500000582,
    "outcome": "success"
  },
  {
    "seq": 2278,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-463",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:27.439Z",
    "offsetMs": 410.53416700000525,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2f5f04cc8a19f32b29a95f6efab12e8bb0eb0b4fdd9a9050d045be28bdf95572";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2275},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2277},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2278}} as const;
export const projectionSha256 = "2854754842c935b859e521a2b799b6ebfef5a8c56da75f817a3ea4820ab3d263";
