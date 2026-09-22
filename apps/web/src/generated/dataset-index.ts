const loadAiModule = () => import('./records/ai-email-200-v1/record-loader');
const loadAiRecord = async (example: CorpusExample) => (await loadAiModule()).loadRecord(example);
const loadAiRun = async () => (await loadAiModule()).loadRun();
const loadSpaModule = () => import('./records/spaphish-v5/record-loader');
const loadSpaRecord = async (example: CorpusExample) => (await loadSpaModule()).loadRecord(example);
const loadSpaRun = async () => (await loadSpaModule()).loadRun();
const loadSpaEsModule = () => import('./records/spaphish-v5-es-questions/record-loader');
const loadSpaEsRecord = async (example: CorpusExample) => (await loadSpaEsModule()).loadRecord(example);
const loadSpaEsRun = async () => (await loadSpaEsModule()).loadRun();

export type CorpusExample = {
  id: string; datasetId: string; title: string; language: 'en' | 'es';
  input: { channel: 'email'; subject: string | null; body: string; userContext: string };
  groundTruth: { label: 'phishing' | 'benign'; labelSource: 'synthetic_author' | 'source_dataset'; rationale?: string };
  provenance: { sourceRecordId?: string; originalSeedIds?: string[] };
};
export type GeneratedDatasetIndex = {
  id: string; name: string; language: string; sampleNote: string; total: number; loadExamples: () => Promise<CorpusExample[]>;
  loadRecord: (example: CorpusExample) => Promise<unknown | null>;
  loadRun: () => Promise<unknown | null>;
};
const unavailable = async () => null;
export const datasets: GeneratedDatasetIndex[] = [
  { id: 'ai-email-200-v1', name: 'AI Email 200', language: 'English', sampleNote: '200 authored emails, balanced by dataset label.', total: 200, loadExamples: async () => (await import('../../../../data/corpora/ai-email-200-v1.json')).default.examples as CorpusExample[], loadRecord: loadAiRecord, loadRun: loadAiRun },
  { id: 'spaphish-v5', name: 'SpaPhish v5', language: 'Spanish', sampleNote: '499-email public subset from SpaPhish v5: 250 benign and 249 phishing labels after one authorized post-capture exclusion.', total: 499, loadExamples: async () => (await import('../../../../data/corpora/spaphish-v5.json')).default.examples as CorpusExample[], loadRecord: loadSpaRecord, loadRun: loadSpaRun },
  { id: 'spaphish-v5-es-questions', name: 'SpaPhish v5 [Spanish Input Questions]', language: 'Spanish · ES questions', sampleNote: 'Same 499-email SpaPhish v5 public subset, recorded with Spanish signal questions under policy-v1-es-exp (YES 0.70).', total: 499, loadExamples: async () => (await import('../../../../data/corpora/spaphish-v5.json')).default.examples as CorpusExample[], loadRecord: loadSpaEsRecord, loadRun: loadSpaEsRun }
];
