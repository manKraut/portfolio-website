---
title: SkyScribe-CLI
description: A multi-agent Python CLI that turns live forecast data into short, actionable weather briefs (temperature ranges, rain windows, wind, practical tips) for travelers and daily planning.
date: 2026-01-01
tech: [Python, Typer, httpx, Hugging Face, PEFT, LoRA]
repo: https://github.com/manKraut/skyscribe-cli
# link: https://skyscribe-cli.YOUR-DOMAIN.com   # <- LATER: uncomment + set your subdomain; the whole card will then open it instead of GitHub
---

- Uses the Open-Meteo APIs for live forecast data.
- Fine-tuned TinyLlama with LoRA adapters (Transformers + PEFT): train and ship small adapters instead of full weights.
- Supervised pairs with prompt-token label masking, optional 4-bit QLoRA for GPU-efficient training, and adapter hot-loading at inference via env config.
