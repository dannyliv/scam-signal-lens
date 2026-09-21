import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-341",
  "inputSha256": "69552a63b3967ceb7b7d05355b26ad2da955af456cedc847eaccd2ec5bcebb77",
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
      "end": 66,
      "text": "ASUS Service No=N2502025630-0001; ASUS Service No=N2502025630-0001"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 545,
      "text": "Hello Carlos Rivera Pérez, Buen día, espero que esté teniendo un excelente día cliente de ASUS Conforme a su consulta y para brindarle un mejor servicio sobre su inconveniente, por favor apóyeme revisando los siguientes puntos: Le pido me apoye actualizando el siguiente controlador: Link https://support.synthetic-tech.com/supportonly/nuc9988mx/helpdesk_download/ BIOS update 0088 for NUC9988MX / NUC9988PX / NUC9988VX non-vPro series Version 0088 110 MB 2025/11/20 https://dlcdnets.synthetic-tech.com/pub/TECH/NUC_99_Pro_Kit/RVMTL999.0088.zip?"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 545,
      "end": 587,
      "text": "model=NUC9988MX 1) Descargar controlador. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 587,
      "end": 645,
      "text": "2) Descomprimir el controlador si no pasar al paso ( 3 ). "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 645,
      "end": 669,
      "text": "3) Ejecutar aplicación. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 669,
      "end": 737,
      "text": "Seleccionando el archivo/clic derecho /Ejecutar como administrador. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 737,
      "end": 783,
      "text": "4) Seguir los pasos que solicita el programa. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 783,
      "end": 1332,
      "text": "Cómo instalar los controladores descargados del web de soporte de ASUS https://support.synthetic-tech.com/latin/support/FAQ/1045127/ De igual manera si el controlador no cuenta setup o aplicación .exe para su instalación, siga los pasos del siguiente FAQ para instalar el driver ya sea desde el Administrador de dispositivos o mediante Power Shell. https://support.synthetic-tech.com/mx/support/FAQ/1039030/ Cualquier duda quedamos a sus órdenes Best regards, Ana Sofía Morales Soto ASUS Customer Support Chat with Us if you need further support. ​ "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1332,
      "end": 1613,
      "text": "=================================================================================================================================== This email and any attachments to it contain confidential information and are intended solely for the use of the individual to whom it is addressed. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1613,
      "end": 1826,
      "text": "If you are not the intended recipient or receive it accidentally, please immediately notify the sender by e-mail  and delete the message and any attachments from your computer system, and destroy all hard copies. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1826,
      "end": 1979,
      "text": "Please be advised that any unauthorized disclosure, copying, distribution or any action taken or omitted in reliance on this, is illegal and prohibited. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1979,
      "end": 2082,
      "text": "Any  views or opinions expressed are solely those of the author and do not represent those of ASUSTeK. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 2082,
      "end": 2167,
      "text": "For pricing information, ASUS is only entitled to set a recommendation resale price. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 2167,
      "end": 2227,
      "text": "All customers are free to set their own price as they wish. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 2227,
      "end": 2358,
      "text": "==================================================================================================================================="
    }
  ],
  "passA": {
    "requestSha256": "48739635f159e094bb10afc3084be9beda319804b94b1b9a172bca68d01203ce",
    "capturedAt": "2026-09-20T23:45:46.892Z",
    "elapsedMs": 156.25245800000266,
    "successfulAttemptElapsedMs": 154.0796249999985,
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
          "noul": 0.12
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.09
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.77,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.22
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 4018,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "2bf5a62cb0e5c704492a23eb59474c9f80b6ac580d92e7cf763ae26e3106835e",
    "capturedAt": "2026-09-20T23:45:47.053Z",
    "elapsedMs": 158.84762499999488,
    "successfulAttemptElapsedMs": 156.73020800000813,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:12": 0,
            "body:9": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:2": 0,
            "body:3": 0,
            "body:1": 0,
            "body:5": 0,
            "NONE": 0,
            "body:13": 0,
            "body:8": 0,
            "body:6": 0.65,
            "body:10": 0,
            "body:0": 0.35000000000000003,
            "body:11": 0
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 1919,
        "output_tokens": 171
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 317.55220800000825,
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
    "seq": 1669,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-341",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:46.737Z",
    "offsetMs": 1.6191249999974389
  },
  {
    "seq": 1670,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-341",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:46.892Z",
    "offsetMs": 156.25437500000407,
    "elapsedMs": 154.0796249999985,
    "outcome": "success"
  },
  {
    "seq": 1671,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-341",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:46.895Z",
    "offsetMs": 159.7358749999985
  },
  {
    "seq": 1672,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-341",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:47.053Z",
    "offsetMs": 317.1446250000008,
    "elapsedMs": 156.73020800000813,
    "outcome": "success"
  },
  {
    "seq": 1673,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-341",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:47.053Z",
    "offsetMs": 317.6704170000012,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a5edf23e78fd8aa29f43923409e58ab717365cb1c320c15808d292c1bf80514d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1670},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1672},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1673}} as const;
export const projectionSha256 = "13074a780a462105f9c051f07e475bbbda9a16b1ec0d8ca543050c7f162838f1";
