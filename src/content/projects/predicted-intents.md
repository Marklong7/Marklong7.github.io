---
title: "Beyond Black-Box: Structuring Recommender Systems Using Predicted Intents"
order: 2
kind: project
tone: ongoing
impact: >-
  Makes user intent explicit in recommendation models to improve interpretability, accelerate convergence, and deliver more accurate predictions with low latency.
summary: >-
  I built the NetEase experiment using 5.9M impressions from 208K users and organized the codebase on GitHub for review and replication. I led structural modeling with multinomial and nested logit models, treating each minute as a choice among available items or no click and incorporating intent–novelty interactions in utility. I developed DNN, VAE, and heterogeneous HMM benchmarks, with intent-structured DNNs and VAEs improving test AUC by 0.5–2.2%. I designed mechanism checks showing that better intent predictions yield larger recommendation gains and intent-structured models reach baseline accuracy in 3–3.5× fewer epochs. I also supported simulations and the algorithm's approximation analysis.
status: "Research project"
period: "Jan 2026 – Present"
collaborators:
  - Yuyan Wang
tags:
  - RecSys
  - Structural discrete choice models
  - Deep learning
---
