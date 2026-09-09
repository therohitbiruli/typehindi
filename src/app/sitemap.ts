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
    '/blog',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
    '/mangal-font-typing-test',
    '/shorthand',
    '/shorthand/learn',
    '/shorthand/practice',
    '/shorthand/dictation',
    '/shorthand/tests',
    '/translators',
    // Multilingual Practice Routes
    '/practice/english-typing',
    '/practice/hindi-typing',
    '/practice/marathi-typing',
    '/practice/punjabi-typing',
    '/practice/tamil-typing',
    '/practice/bengali-typing',
    // Multilingual Learn Routes
    '/learn/english-typing',
    '/learn/hindi-typing',
    '/learn/marathi-typing',
    '/learn/punjabi-typing',
    '/learn/tamil-typing',
    '/learn/bengali-typing',
    // Multilingual Test Routes
    '/test/english-typing',
    '/test/hindi-typing',
    '/test/marathi-typing',
    '/test/punjabi-typing',
    '/test/tamil-typing',
    '/test/bengali-typing',
    // Multilingual Keyboard Layout Routes
    '/keyboard-layout/english',
    '/keyboard-layout/hindi',
    '/keyboard-layout/marathi',
    '/keyboard-layout/punjabi',
    '/keyboard-layout/tamil',
    '/keyboard-layout/bengali',
    ...blogs.map(blog => `/blog/${blog.slug}`),
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
