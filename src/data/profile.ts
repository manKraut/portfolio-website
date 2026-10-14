// Single place for all personal info. Edit this file to update the site text.
// (Projects are NOT here - they are Markdown files in src/content/projects/)

export const profile = {
  name: 'Manos Adamopoulos',
  role: 'Data / AI Engineer',
  tagline: 'LLM, Data & ML systems',
  intro:
    'I design, ship and operate Python backends and ML/LLM systems on Google Cloud, owning everything from requirements to CI/CD, deployment and monitoring.',
  summary: [
    'Software Engineer with <strong>4 years</strong> building production Python services and ML/LLM systems on <strong>Google Cloud</strong> (Cloud Run, Kubernetes). Two MSc degrees in STEM, both with honors.',
    'I have spent <strong>6+ years</strong> working directly with clients in startups, turning real business problems into high-impact technical solutions. Today I build <strong>AI Agents you can trust</strong>, at the core of GWI’s AI transformation, and I am part of the <strong>AI Enablement team</strong> defining agentic engineering standards across the organisation.',
  ],
  email: 'man.adamopoulos@gmail.com',
  github: 'https://github.com/manKraut',
  // Add more links here (e.g. linkedin: 'https://linkedin.com/in/...'); they appear in the contact section.
  linkedin: '' as string,
  cv: '/Manos_Adamopoulos_CV.pdf',
  // Optional portrait: put a file in public/ (e.g. public/me.jpg) and set photo: '/me.jpg'
  photo: '' as string,
};

export type Job = {
  title: string;
  company: string;
  period: string;
  // optional one-liner about the company
  blurb?: string;
  // short pitch always visible on the card
  brief: string;
  // shown when the card is expanded; `heading` is optional (use it to group bullets by project)
  sections: { heading?: string; highlights: string[] }[];
};

export const experience: Job[] = [
  {
    title: 'AI Cloud Engineer',
    company: 'GWI',
    period: 'Oct 2024 – Present',
    brief:
      'I build and run the AI backends and cloud infrastructure behind GWI’s LLM-driven products, from synthetic survey generation to ML segmentation pipelines, and help set agentic engineering standards across the company.',
    sections: [
      {
        heading: 'Lynx – Synthetic Survey Generation Agent (RAG)',
        highlights: [
          'Architected and shipped a production AI orchestration backend (Python/Django, DRF) for an LLM-driven synthetic survey platform: FSM-based job lifecycle with row-level concurrency control and idempotent retries; parallelized the respondent batch-generation pipeline with a Redis-backed async worker tier and graceful long-job shutdowns, cutting end-to-end runtime by ~94% (77+ PRs, ~400 commits).',
          'Deployed and operated cloud-native infrastructure on GKE via custom Helm charts and Terraform/Terragrunt: Workload Identity, KMS-encrypted secrets, Cloud SQL, multi-env (staging/prod) with HPA, PDBs and Prometheus alerting; automated object-storage → BigQuery ingestion feeding the company’s data platform.',
          'Built an LLM synthetic-respondent engine: semantic few-shot retrieval over a 483-question, 1,536-dim embedding index, Big5-persona-conditioned generation, largest-remainder demographic quota sampling, and parallel batch execution; created an evaluation harness benchmarking synthetic vs. real respondents across 5 metric families.',
        ],
      },
      {
        heading: 'Segmentation Integration Automation (SIA) – ML pipeline predicting custom audience segments on GWI’s Core dataset',
        highlights: [
          'Engineered and productionized an event-driven ML post-processing microservice on GCP (Cloud Run, Pub/Sub, Docker, Terraform) that rebalances weighted audience distributions for tens of thousands of respondents per run, guaranteeing convergence within 0.5% of market targets via a deterministic, parallelized iterative optimizer with early stopping.',
          'Designed a novel LLM-agent optimizer (GPT-4o function-calling loop, 3 custom domain tools) that autonomously measures distribution divergence and reweights segment assignments; extended the engine to multilabel segmentation and achieved 100% ground-truth respondent retention, fixing a production-critical reassignment defect.',
        ],
      },
      {
        heading: 'Platform and company-wide initiatives',
        highlights: [
          'Led adoption of engineering standards for the department as DevOps Champion, driving AI agentic engineering harness adoption via the AI Enablement team and migrating department infrastructure into GWI’s central Terraform repo with resource labelling that enabled per-product cost attribution.',
          'Drive AI literacy across the organisation: speak at public discussions and run an AI News Forum that keeps teams informed on developments and encourages adoption.',
        ],
      },
    ],
  },
  {
    title: 'Data Engineer',
    company: 'GWI',
    period: 'Oct 2023 – Oct 2024',
    brief:
      'I modernised GWI’s data processing and connected its ML pipeline to product APIs, replacing slow legacy workflows with versioned, automated ones.',
    sections: [
      {
        highlights: [
          'Integrated the ML pipeline with the product team’s Segmentation API over authenticated REST calls, decoupling GCS file I/O from the workflow engine.',
          'Replaced legacy SPSS processing with a BigQuery ETL pipeline, consolidating 3 data sources into one version-controlled transformation layer. The pipeline cut its runtime from 12 hours to 1 hour (~90% reduction).',
        ],
      },
    ],
  },
  {
    title: 'Solutions Engineer',
    company: 'Linked Business',
    period: 'Mar 2021 – Oct 2023',
    blurb: 'Market and credit intelligence (KYC) platform covering 800K+ Greek companies; clients include systemic banks and credit-servicing firms.',
    brief:
      'I was the technical link between the platform and its banking clients: scoping integrations, fixing recurring pain points, and turning client feedback into shipped features.',
    sections: [
      {
        highlights: [
          'Owned technical relationships with systemic banks and credit servicers, leading integration scoping, security reviews, and go-live of KYC onboarding and credit-check workflows; turned client pain points into prioritised roadmap fixes.',
          'Cut authentication tickets 40% in one quarter via root-cause analysis of recurring login failures; shipped the fix with Playwright regression tests in CI/CD so the failure class cannot silently return.',
          'Drove 50% API usage growth in 6 months: turned client interviews into a prioritised roadmap item, then scoped and delivered a bulk Excel export endpoint.',
        ],
      },
    ],
  },
  {
    title: 'Technical Project Manager',
    company: 'Sociality co-op',
    period: 'Dec 2019 – Mar 2021',
    brief:
      'I led a small engineering team building web platforms for a cooperative, from planning through delivery.',
    sections: [
      {
        highlights: [
          'Led a team of 6 developers to deliver web platforms, including a unified CMS, member portal and ticketing system (TypeScript, React, Node.js, PostgreSQL), driving a 40% increase in ticket sales within one quarter.',
        ],
      },
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'HTML/CSS'] },
  {
    group: 'Backend & APIs',
    items: ['FastAPI', 'Django REST Framework', 'REST API design', 'Pub/Sub', 'PostgreSQL', 'Redis'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['GCP (Cloud Run, GKE, BigQuery, GCS)', 'Docker', 'Kubernetes / Helm', 'Argo Workflows', 'Terraform', 'GitHub Actions'],
  },
  {
    group: 'ML / LLM',
    items: ['RAG', 'Embeddings', 'ChromaDB', 'LightGBM', 'scikit-learn', 'SHAP', 'Hugging Face / PEFT'],
  },
  {
    group: 'Reliability & security',
    items: ['Secret Manager / SOPS', 'Sentry', 'Structured logging', 'pytest', 'Playwright'],
  },
  { group: 'Frontend', items: ['React', 'Tailwind'] },
];

export const education = [
  { degree: 'MSc in Software Development & AI', school: 'University of Piraeus', grade: '9.8/10' },
  { degree: 'MSc in Civil Engineering (5-year)', school: 'Democritus University of Thrace', grade: '7.04/10' },
];
