import { MetadataRoute } from 'next';
import { projects } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rithikavennamaneni.vercel.app';
  
  const staticPages = [
    '',
    '/about',
    '/experience',
    '/projects',
    '/skills',
    '/resume',
    '/contact',
  ];

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const staticSitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' as const : 'monthly' as const,
    priority: page === '' ? 1 : 0.8,
  }));

  return [...staticSitemap, ...projectPages];
}
