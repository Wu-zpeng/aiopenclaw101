import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aiopenclaw101.com';
  const locales = ['en', 'zh'];
  const routes = ['', '/deploy', '/cases/stock'];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  return sitemap;
}
