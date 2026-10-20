// Single place for all personal info. Edit this file to update the site text.
// (Projects are NOT here - they are Markdown files in src/content/projects/)

export const profile = {
  name: 'Manos Adamopoulos',
  role: 'AI Engineer',
  tagline: 'LLM, Data & ML systems',
  intro:
    'I architect, ship and operate reliable AI and ML systems on the cloud, owning the full lifecycle from requirements to CI/CD, deployment and monitoring.',
  summary: [
    'Senior AI Engineer with 5+ years architecting and shipping reliable AI and ML systems on Cloud, owning the full lifecycle from requirements through CI/CD, deployment, and monitoring. Two MSc degrees in Software and Engineering, both with honors.',
    'I have worked mostly with startups within ambiguous and fast-moving environments. Currently building agent skills and RAG systems at the core of GWI’s AI transformation, and a member of the AI Enablement team defining agentic engineering standards across the organisation.',
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
    title: 'Sr. AI Engineer',
    company: 'GWI',
    period: 'Oct 2023 – Present',
    brief:
      'I build and run the AI backends and cloud infrastructure behind GWI’s LLM-driven products, from synthetic survey generation to ML segmentation pipelines, and help set agentic engineering standards across the company.',
    sections: [
      {
        heading: 'Lynx – Synthetic Survey Generation Agent (RAG)',
        highlights: [
          'Architected and shipped in 3 months a production AI orchestration backend (Python, Django, DRF, Argo Workflows) that produces synthetic survey data from a user hypothesis. A high-end product that cuts survey generation from a month to 5 minutes, serving ~12K requests at peak hour.',
          'Deployed and operated cloud-native infrastructure on GKE via custom Helm charts and Terraform/Terragrunt.',
          'Built an LLM synthetic-respondent engine with two-stage RAG (OpenAI embeddings, cosine top-k) that grounds survey drafting in curated example questions and each simulated respondent’s answers in real prior survey responses.',
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
    title: 'MLOps Engineer',
    company: 'Linked Business',
    period: 'Mar 2021 – Oct 2023',
    brief:
      'I built the automated data and ML pipelines and services behind a market and credit intelligence platform used by banks and sales teams.',
    sections: [
      {
        highlights: [
          'Architected and built two automated pipelines: batch (Airflow-orchestrated, for quarterly releases) and streaming (event-driven, with scheduled pollers detecting source changes), replacing a manual data-retrieval process, saving 3 engineer-days per quarter and moving data freshness from monthly to near real-time.',
          'Built and deployed ML-driven insight services on Vertex AI (online real-time inference) and Cloud Run. Python FastAPI services retrieved and cleansed source data, which was preprocessed, deduplicated and loaded into BigQuery; a calculation engine then turned model outputs into lead-generation and onboarding insights for banks and sales teams.',
          'Productionized the platform with MLOps best practices: Dockerized services, CI/CD pipelines for automated testing and deployment, and a highly available Kubernetes cluster for zero-downtime releases and resilient data processing.',
        ],
      },
    ],
  },
  {
    title: 'Data Scientist',
    company: 'Sociality co-op',
    period: 'Dec 2019 – Mar 2021',
    brief:
      'I built analytics pipelines and models on website activity data and advised community-driven projects on data science.',
    sections: [
      {
        highlights: [
          'Built an end-to-end analytics pipeline on website activity data (Python, SQL, dbt, Airflow), using behavioral segmentation and lead-scoring models (scikit-learn, XGBoost) to surface high-potential leads and shape company strategy, with insights delivered through interactive dashboards (Power BI/Streamlit).',
          'Advised EU-funded, community-driven projects on data science implementation, turning local social data into actionable, evidence-based decisions.',
        ],
      },
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'HTML/CSS'] },
  {
    group: 'Backend & APIs',
    items: ['FastAPI', 'Django REST Framework', 'REST API design', 'Event-driven microservices (Pub/Sub)', 'PostgreSQL', 'Redis'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['GCP (Cloud Run, GKE, Cloud Build, Artifact Registry, Secret Manager, GCS, BigQuery)', 'Docker', 'Kubernetes / Helm', 'Argo Workflows', 'Terraform', 'GitHub Actions'],
  },
  {
    group: 'Reliability & security',
    items: ['Secret Manager / SOPS', 'Signed URLs', 'Sentry', 'Structured logging', 'pytest', 'Playwright'],
  },
  {
    group: 'ML / LLM',
    items: ['LightGBM', 'scikit-learn', 'SHAP', 'RAG', 'Embeddings', 'ChromaDB', 'Hugging Face / PEFT'],
  },
  { group: 'Frontend', items: ['React', 'Tailwind'] },
];

export const education = [
  { degree: 'MSc in Software Development & AI', school: 'University of Piraeus', grade: '9.8/10' },
  { degree: 'MSc in Civil Engineering (5-year)', school: 'Democritus University of Thrace', grade: '7.04/10' },
];
