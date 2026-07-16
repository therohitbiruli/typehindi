import { MetadataRoute } from 'next';
import { blogs } from '../data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://typehindi.in';
  
  const routes = [
    '',
    '/practice',
    '/learn',
    '/game',
    '/test',
    '/keyboard-layout',
    '/resources',
    '/blog',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
    '/mangal-font-typing-test',
    ...blogs.map(blog => `/blog/${blog.slug}`),
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
