# Jialong (Mark) Li — Personal Website

An Astro-based research website designed for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Content

- `src/content/projects/`: papers and research projects, labeled separately in frontmatter
- `src/content/blog/`: Markdown and MDX posts
- `src/content/slides/`: slide metadata
- `public/slides/`: compiled PDF slides
- `src/assets/talks/`: slide cover images (optimized to WebP at build time)
- `src/styles/tokens.css`: the design system — one typeface, four font sizes, spacing and width scales

The homepage is a compact introduction and directory. Research lives on its own `/research/`
page, where publications are separated from research-assistant projects.

Pushing to `astro-redesign` runs a production build without changing the live site. Merging the finished redesign into `master` deploys it through GitHub Pages.

## Publishing a blog post

1. Copy `src/content/blog/_template.mdx` to a descriptive filename.
2. Update the frontmatter and write in Markdown or MDX.
3. Put figures in `public/images/` and use `$...$` or `$$...$$` for LaTeX math.
4. Set `draft: false` to publish.

## Publishing slides

1. Compile the LaTeX/Beamer source locally.
2. Put the PDF in `public/slides/`.
3. Optionally export the first page as a PNG into `src/assets/talks/`.
4. Copy `src/content/slides/_template.md`, update its metadata (set `cover: "../../assets/talks/<name>.png"` if you added one), and set `draft: false`.
