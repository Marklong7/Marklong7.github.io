# Website maintenance rules

- Keep the global navigation limited to Research, Blog, and Talks.
- Always display the full name as `Jialong (Mark) Li`; do not shorten the site wordmark to `Jialong Li` or `Mark`.
- Do not publish or store Mark's CV in this public repository.
- Store research, blog, and slide metadata in the matching `src/content` collection rather than hard-coding entries into page components.
- Use only colors declared in `src/styles/tokens.css`. Every literal value must come from Mark's `plot_rules.R` palette; do not summarize it as a black/white/grey/blue palette.
- Preserve official school colors inside school-logo image assets, but do not reuse those brand colors in the interface.
- Keep papers (`kind: paper`) separate from research-assistant work (`kind: project`). Never imply that every research project is a publication.
- Keep the homepage as a concise introduction and directory. Put the full research list only on `/research/`.
- Use the lightweight system editorial serif stack only for the main name, page titles, and research titles. Use Inter for navigation, section headings, body copy, metadata, and blog text.
- Keep typography to the four tokens in `src/styles/tokens.css`: display, heading, body, and metadata. Do not introduce one-off font sizes.
- Preserve a restrained, spacious design inspired by Dean Eckles's typography and clean layout. Do not copy another researcher's site directly.
- Avoid gradients, heavy shadows, excessive color, decorative animation, and unnecessary page hierarchy.
- Keep formulas compatible with the configured remark-math and KaTeX pipeline.
- Keep compiled slides in `public/slides` and their descriptive metadata in `src/content/slides`.
