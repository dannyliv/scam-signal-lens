import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-192",
  "inputSha256": "defe4e2af1961cfff9270ec783781060923abf52ad15a334d835406fef0b76a8",
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
      "end": 70,
      "text": "Missxtranger, Advertencia final: ¡tu cuenta de Netflix será eliminada!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 56,
      "text": "Ahora puedes ampliar tu suscripción por 90 días gratis. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 56,
      "end": 126,
      "text": "¡Continúa disfrutando de películas, programas de TV y más ilimitados! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 126,
      "end": 145,
      "text": "¿Listo para mirar? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 145,
      "end": 186,
      "text": "N E T F L I X ¡Tu membresía ha caducado! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 186,
      "end": 229,
      "text": "Querido cliente, Su membresía ha caducado. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 229,
      "end": 319,
      "text": "Pero, como parte de nuestro programa de fidelización, ahora puedes ampliarlo por 90 días. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 319,
      "end": 327,
      "text": "GRATIS. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 327,
      "end": 384,
      "text": "Disfrute de películas, programas de TV y más ilimitados. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 384,
      "end": 403,
      "text": "¿Listo para mirar? "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 403,
      "end": 424,
      "text": "Amplíe su membresía. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 424,
      "end": 593,
      "text": "EXTENDER GRATIS -------------------------------------------------------------------------------- Para dejar de recibir correos electrónicos futuros, Darse de baja aquí. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 593,
      "end": 635,
      "text": "El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 635,
      "end": 780,
      "text": "Si prefieres no recibir más comunicaciones, por favor date de baja aquí Ou écrivez à: 909 Avenida Ficticia Ste 101#5050, Ciudad Eterna, AZ, 85002"
    }
  ],
  "passA": {
    "requestSha256": "521d969080db297ab646aea0a24bc059e22426a0609b91c2218dee4c2993f3c9",
    "capturedAt": "2026-09-22T03:51:59.631Z",
    "elapsedMs": 594.3861410000245,
    "successfulAttemptElapsedMs": 593.3636479999986,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.26
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.19
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.86
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.22
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.1
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.06
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
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
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.57,
            "no_sensitive_action": 0.4,
            "mixed_or_unknown": 0.03,
            "independently_established": 0
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 5108,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "fa0658da353734aa6af3774ca10be2c2da237bef43baf2a7061e6cc23c360b9c",
    "capturedAt": "2026-09-22T03:52:00.182Z",
    "elapsedMs": 548.7902579999936,
    "successfulAttemptElapsedMs": 547.6176979999873,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0,
            "body:3": 0,
            "NONE": 0.86,
            "body:8": 0,
            "body:0": 0.01,
            "body:11": 0,
            "subject:0": 0,
            "body:12": 0.01,
            "body:4": 0,
            "body:7": 0,
            "body:2": 0.01,
            "body:6": 0,
            "body:10": 0.03,
            "body:9": 0.08,
            "body:1": 0
          },
          "confidence": 0.84
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:5": 0,
            "body:3": 0.04,
            "NONE": 0.01,
            "body:8": 0,
            "body:0": 0,
            "body:11": 0,
            "subject:0": 0.93,
            "body:12": 0,
            "body:4": 0,
            "body:7": 0,
            "body:2": 0,
            "body:6": 0,
            "body:10": 0,
            "body:9": 0.01,
            "body:1": 0
          },
          "confidence": 0.93
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:5": 0.37,
            "body:3": 0.36,
            "NONE": 0.07,
            "body:8": 0,
            "body:0": 0,
            "subject:0": 0.06,
            "body:11": 0.01,
            "body:12": 0.01,
            "body:7": 0,
            "body:4": 0.09,
            "body:2": 0.01,
            "body:6": 0,
            "body:10": 0,
            "body:9": 0.02,
            "body:1": 0
          },
          "confidence": 0.32
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0,
            "NONE": 0.8,
            "body:3": 0,
            "body:0": 0,
            "body:8": 0,
            "body:11": 0.13,
            "subject:0": 0.01,
            "body:12": 0.03,
            "body:4": 0.01,
            "body:7": 0,
            "body:2": 0,
            "body:6": 0,
            "body:10": 0.01,
            "body:9": 0.01,
            "body:1": 0
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 3628,
        "output_tokens": 632
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1145.3799160000053,
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
        "status": "none_selected",
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
        "segmentId": "subject:0"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 933,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-192",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:59.037Z",
    "offsetMs": 0.7607730000163428
  },
  {
    "seq": 934,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-192",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:59.631Z",
    "offsetMs": 594.3860600000189,
    "elapsedMs": 593.3636479999986,
    "outcome": "success"
  },
  {
    "seq": 935,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-192",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:59.633Z",
    "offsetMs": 596.9728830000095
  },
  {
    "seq": 936,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-192",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:00.181Z",
    "offsetMs": 1145.039264000021,
    "elapsedMs": 547.6176979999873,
    "outcome": "success"
  },
  {
    "seq": 937,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-192",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:00.182Z",
    "offsetMs": 1145.4324150000175,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b0eff5e8ca74793074b37093c6449eca9974ce60fbc724cf0640e8f08212312e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":934},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":936},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":937}} as const;
export const projectionSha256 = "f5afec1f6481d3232b0177d452a96208b1d3470de880d2bebd114c5e2f9e5437";
