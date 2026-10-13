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
  blurb?: string;
  highlights: string[];
};

export const experience: Job[] = [
  {
    title: 'AI Cloud Engineer',
    company: 'GWI',
    period: 'Oct 2024 – Present',
    highlights: [
      'Architected a production AI orchestration backend (Python/Django) for an LLM-driven synthetic survey platform; parallelised batch generation with a Redis-backed worker tier, cutting end-to-end runtime by ~94%.',
      'Operate cloud-native infrastructure on GKE with Helm, Terraform/Terragrunt, HPA and Prometheus alerting; built the RAG-based synthetic-respondent engine and an evaluation harness benchmarking synthetic vs. real respondents.',
      'Productionised an event-driven ML microservice on GCP (Cloud Run, Pub/Sub) and designed a GPT-4o function-calling agent that autonomously rebalances audience segments.',
      'DevOps Champion and AI Enablement member: drive agentic engineering standards, per-product cost attribution, and AI literacy across the company.',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'GWI',
    period: 'Oct 2023 – Oct 2024',
    highlights: [
      'Replaced legacy SPSS processing with a BigQuery ETL pipeline, cutting runtime from 12 hours to 1 hour (~90%).',
      'Integrated the ML pipeline with the Segmentation API over authenticated REST, decoupling file I/O from the workflow engine.',
    ],
  },
  {
    title: 'Solutions Engineer',
    company: 'Linked Business',
    period: 'Mar 2021 – Oct 2023',
    blurb: 'KYC and credit-intelligence platform covering 800K+ Greek companies.',
    highlights: [
      'Owned technical relationships with systemic banks and credit servicers: integration scoping, security reviews and go-lives.',
      'Cut authentication tickets by 40% in a quarter and shipped Playwright regression tests in CI/CD.',
      'Drove 50% API usage growth in 6 months by delivering a bulk Excel export endpoint from client interviews.',
    ],
  },
  {
    title: 'Technical Project Manager',
    company: 'Sociality co-op',
    period: 'Dec 2019 – Mar 2021',
    highlights: [
      'Led a team of 6 developers delivering a CMS, member portal and ticketing system (TypeScript, React, Node.js, PostgreSQL), driving a 40% increase in ticket sales in one quarter.',
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
