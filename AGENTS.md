# Website maintenance rules

- Keep the global navigation limited to Research, Blog, and Talks.
- Do not publish or store Mark's CV in this public repository.
- Store research, blog, and slide metadata in the matching `src/content` collection rather than hard-coding entries into page components.
- Use only colors declared in `src/styles/tokens.css`. Every literal value must come from Mark's `plot_rules.R` palette; do not summarize it as a black/white/grey/blue palette.
- Keep papers (`kind: paper`) separate from research-assistant work (`kind: project`). Never imply that every research project is a publication.
- Keep the homepage as a concise introduction and directory. Put the full research list only on `/research/`.
- Use Zilla Slab selectively for the name and major headings. Use Inter for navigation, body copy, metadata, and blog text.
- Preserve a restrained, spacious design inspired by Dean Eckles's typography and clean layout. Do not copy another researcher's site directly.
- Avoid gradients, heavy shadows, excessive color, decorative animation, and unnecessary page hierarchy.
- Keep formulas compatible with the configured remark-math and KaTeX pipeline.
- Keep compiled slides in `public/slides` and their descriptive metadata in `src/content/slides`.
