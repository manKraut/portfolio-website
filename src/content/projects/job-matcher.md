---
title: Job Matcher
description: A full-stack AI platform where job seekers describe roles in natural language, search listings from extracted preferences, and get concise explanations of why results fit.
date: 2026-03-01
tech: [Python, FastAPI, React, TypeScript, OpenAI, ChromaDB, Docker, Kubernetes]
# repo: https://github.com/manKraut/<repo-name>
---

- Sequential multi-agent backend (preference extraction and match advisor) with evidence-backed prompts from vector retrieval over API docs (`text-embedding-3-small`, ChromaDB).
- Failure-tolerant RAG integration: lazy service init, and it keeps working without context on errors.
- React/TypeScript UI, FastAPI services, Docker images and Kubernetes deployment.
- GitHub Actions CI builds backend and frontend images on every push/PR to `main`.
