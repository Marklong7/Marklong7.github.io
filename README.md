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
3. Copy `src/content/slides/_template.md`, update its metadata, and set `draft: false`.
