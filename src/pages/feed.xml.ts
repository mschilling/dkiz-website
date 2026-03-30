import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { DateTime } from 'luxon';

function parseDate(dateStr: string): Date {
  // Parse with explicit CET timezone to avoid environment-dependent results
  const dt = DateTime.fromISO(dateStr, { zone: 'Europe/Amsterdam' });
  return dt.toJSDate();
}

export async function GET(context: APIContext) {
  const artikelen = await getCollection('artikelen');
  const articles = await getCollection('articles');

  const allPosts = [
    ...artikelen.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? '',
      pubDate: parseDate(post.data.publishDate),
      link: `/artikelen/${post.id}/`,
    })),
    ...articles.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? '',
      pubDate: parseDate(post.data.publishDate),
      link: `/articles/${post.id}/`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Dat Kan Ik Zelf . nl',
    description: 'De doe-het-zelf website voor slimme mensen',
    site: context.site!,
    items: allPosts,
    customData: '<language>nl-NL</language>',
  });
}
