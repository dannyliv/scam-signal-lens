import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-341",
  "inputSha256": "69552a63b3967ceb7b7d05355b26ad2da955af456cedc847eaccd2ec5bcebb77",
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
    "requestSha256": "8252a2284914df48f9d9261acfef3fb75ca9940f9373cc4f3607565401ce4ce7",
    "capturedAt": "2026-09-22T03:55:00.479Z",
    "elapsedMs": 673.5897750000004,
    "successfulAttemptElapsedMs": 672.3352109999978,
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
          "noul": 0.03
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
          "noul": 0.12
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.37,
            "sender_supplied": 0.62,
            "independently_established": 0
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 5468,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "04b1c73f496cc9995a80f9e86bab63e6b76cab81d6d7b3bf2aa275d507c3dc36",
    "capturedAt": "2026-09-22T03:55:01.089Z",
    "elapsedMs": 609.4374490000191,
    "successfulAttemptElapsedMs": 608.2108920000028,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:11": 0,
            "body:10": 0,
            "body:6": 0.6,
            "body:3": 0,
            "NONE": 0,
            "body:5": 0,
            "body:1": 0,
            "body:13": 0,
            "body:0": 0.39,
            "body:7": 0,
            "body:2": 0,
            "body:12": 0,
            "body:8": 0,
            "subject:0": 0.01,
            "body:9": 0,
            "body:4": 0
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 2019,
        "output_tokens": 171
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1284.793902000005,
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
    "seq": 1667,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-341",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:59.806Z",
    "offsetMs": 0.9863210000330582
  },
  {
    "seq": 1668,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-341",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:00.478Z",
    "offsetMs": 673.5908400000189,
    "elapsedMs": 672.3352109999978,
    "outcome": "success"
  },
  {
    "seq": 1669,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-341",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:00.481Z",
    "offsetMs": 675.9485669999849
  },
  {
    "seq": 1670,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-341",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:01.089Z",
    "offsetMs": 1284.5262349999975,
    "elapsedMs": 608.2108920000028,
    "outcome": "success"
  },
  {
    "seq": 1671,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-341",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:01.089Z",
    "offsetMs": 1284.8482100000256,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0acdd0867f2c1c32b5a6f855ddd0de35759f4f18579a54dcc004b62240fff573";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1668},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1670},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1671}} as const;
export const projectionSha256 = "a9539385cdf451fed52b0f3c7c3db62abb9de3ec99b5de5afe88410dff19a89f";
