# Website maintenance rules

- Keep the global navigation limited to Home, Research, Talk, and Blog.
- Always display the full name as `Jialong (Mark) Li`; do not shorten the site wordmark to `Jialong Li` or `Mark`.
- Do not publish or store Mark's CV in this public repository.
- Store research, blog, and slide metadata in the matching `src/content` collection rather than hard-coding entries into page components.
- Use only colors declared in `src/styles/tokens.css`. Use Mark's `plot_rules.R` palette, with the user-requested darker secondary text color `#48484a`; do not summarize it as a black/white/grey/blue palette.
- Preserve official school colors inside school-logo image assets, but do not reuse those brand colors in the interface.
- Keep papers (`kind: paper`) separate from research-assistant work (`kind: project`). Never imply that every research project is a publication.
- Keep the homepage as a concise introduction and directory. Put the full research list only on `/research/`.
- Use the lightweight system editorial serif stack only for the main name, page titles, and research titles. Use Inter for navigation, section headings, body copy, metadata, and blog text.
- Keep typography to the three tokens in `src/styles/tokens.css`: display, heading, and body. Do not introduce one-off font sizes.
- Preserve a restrained, spacious design inspired by Dean Eckles's typography and clean layout. Do not copy another researcher's site directly.
- Avoid gradients, heavy shadows, excessive color, decorative animation, and unnecessary page hierarchy.
- Keep formulas compatible with the configured remark-math and KaTeX pipeline.
- Keep compiled slides in `public/slides` and their descriptive metadata in `src/content/slides`.

- Store project tags in `tags`, ordered from topic to research approach and specific methods. Render them as one flowing list without a Methods or Keywords heading.
- Preserve complete project titles and substantive summaries, including key design details, results, and Mark's contributions when established.
- Keep Stanford, Northwestern, and UIUC together in the Education section; do not add a separate Research appointment section.

- Label all non-paper entries Research project, including completed projects. Store date ranges in `period` and show them consistently for every Research project. Per Mark’s instruction to use his CV, the three Stanford projects use Aug 2025 – Present and the UIUC project uses Aug 2022 – Jan 2023.
- Use the same blue status indicator for every Research project, including completed projects; do not vary their styling by tone.
