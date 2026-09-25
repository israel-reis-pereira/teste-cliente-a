import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  const url = new URL('/', site ?? 'http://localhost:4321').href;
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${url}</loc></url></urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
