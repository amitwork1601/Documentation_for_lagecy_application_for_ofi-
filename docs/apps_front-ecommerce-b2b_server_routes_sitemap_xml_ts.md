# sitemap.xml.ts

**Path**: `apps\front-ecommerce-b2b\server\routes\sitemap.xml.ts`

## Summary
This server route generates an XML sitemap index at `/sitemap.xml` for a B2B e-commerce application that dynamically creates locale-specific sitemap references based on the current country's available languages. It filters languages against configured available locales, then produces sitemap entries for each language/sitemap type combination (e.g., `/sitemaps/fr/products.xml`), enabling proper SEO indexing across multiple language versions of the site. The route sets appropriate XML content headers and implements caching in production to optimize sitemap delivery for search engine crawlers.

## Type Aliases
- `Countries`

