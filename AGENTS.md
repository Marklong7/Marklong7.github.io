# Website maintenance rules

- Keep the global navigation limited to Home, Research, Presentations, and Blog.
- Always display the full name as `Jialong (Mark) Li`; do not shorten the site wordmark to `Jialong Li` or `Mark`.
- Do not publish or store Mark's CV in this public repository.
- Store research, blog, and slide metadata in the matching `src/content` collection rather than hard-coding entries into page components.
- Use only colors declared in `src/styles/tokens.css`. Use Mark's `plot_rules.R` palette, with the user-requested darker secondary text color `#48484a`; do not summarize it as a black/white/grey/blue palette.
- Preserve official school colors inside school-logo image assets, but do not reuse those brand colors in the interface.
- Keep papers (`kind: paper`) separate from research-assistant work (`kind: project`). Never imply that every research project is a publication.
- For papers, list every author in `authors` in the paper's exact order, including `Jialong (Mark) Li`, which is rendered in semibold. Research projects list advisors in `collaborators`, rendered under an "Advisor" / "Advisors" label, matching the CV. Use the complete project titles from Mark's CV.
- Keep the homepage as a concise introduction and directory. Put the full research list only on `/research/`.
- Use one typeface everywhere: Inter Variable (`--font-sans`, self-hosted with optical sizing). Do not add serif or other display fonts. A monospace stack is allowed only for code.
- Keep typography to the four size tokens in `src/styles/tokens.css`: `--text-display` (name, page titles), `--text-title` (section and entry titles, wordmark), `--text-body` (paragraphs, navigation, actions), and `--text-small` (metadata, labels, captions, footer). Do not introduce one-off font sizes.
- Use only two weights (`--weight-regular` 400, `--weight-semibold` 600), the three line-height tokens (`--leading-tight`, `--leading-snug`, `--leading-body`), and the two tracking tokens. Do not use uppercase or letter-spaced labels.
- Use the spacing scale (`--space-1` … `--space-8`, plus `--space-section`) for margins, padding, and gaps, and the two width tokens (`--width-page`, `--width-reading`). Avoid raw rem/px spacing values.
- Use two link styles from `src/styles/global.css`: `.text-link` for inline and list links, and `.action-link` for calls to action. Use ↗ for external links and → / ← for internal links.
- Use the shared `.page` wrapper and `PageHeading` (title above a muted description, left-aligned) for every top-level page. Entry summaries use the text color; metadata uses `.meta` (small, muted).
- Preserve a restrained, spacious design inspired by Dean Eckles's typography and clean layout. Do not copy another researcher's site directly.
- Avoid gradients, heavy shadows, excessive color, decorative animation, and unnecessary page hierarchy.
- Keep formulas compatible with the configured remark-math and KaTeX pipeline.
- Keep compiled slides in `public/slides` and their descriptive metadata in `src/content/slides`.

- Store project tags in `tags`, ordered from topic to research approach and specific methods. Render them as one flowing list without a Methods or Keywords heading.
- Preserve complete project titles and substantive summaries, including key design details, results, and Mark's contributions when established.
- Keep Stanford, Northwestern, and UIUC together in the Education section; do not add a separate Research appointment section.

- Label all non-paper entries Research project, including completed projects. Store date ranges in `period` and show them consistently for every Research project. Per Mark’s instruction to use his CV, the three Stanford projects use Aug 2025 – Present and the UIUC project uses Aug 2022 – Jan 2023.
- Use the same blue status indicator for every Research project, including completed projects; do not vary their styling by tone.

- Order the Presentations page by slide metadata `order`: EC, GSB predoc seminar, then Northwestern CS reading group. Preserve the exact event names "Stanford Graduate School of Business Predoc Seminar" and "Northwestern MAGICS Lab PhD Reading Group".
- Show actual first-page PDF covers when available, linked to the slides. Store covers in `src/assets/talks/` and reference them from slide frontmatter with a relative path so Astro serves optimized WebP images. Keep event, topic, and content summary distinct; do not invent covers for notes without a supplied deck.

- On the Presentations page, place text on the left and PDF covers on the right on desktop, with text before the cover on mobile. Use Inter for presentation titles and metadata; keep event names visually secondary to the title, without status dots. Do not display dates on the Presentations page; use the same event → topic → summary → link structure for every entry.

- Keep the shared social preview image at `public/og-image.png` (1200×630, site palette and Inter only), and keep the Person JSON-LD on the homepage in sync with the introduction and education details.
