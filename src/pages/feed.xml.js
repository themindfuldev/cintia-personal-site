import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('work');
  return rss({
    title: 'Cintia Romero',
    description: "I'm Cintia Romero (she/her)! I craft inclusive digital experiences that make everyday life easier. Currently, I'm a Senior Staff Designer at Adobe, part of the Product Equity team with a focus on accessibility and inclusive design.",
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/work/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
    canonicalUrl: 'https://cintiaromero.com',
  });
}
