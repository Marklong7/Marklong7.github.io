import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site?: URL }) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: "Jialong (Mark) Li — Blog",
    description: "Research notes on experiments, modeling, machine learning, and digital markets.",
    site: context.site ?? new URL("https://marklong7.github.io"),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: `/blog/${post.data.slug}/`,
    })),
  });
}
