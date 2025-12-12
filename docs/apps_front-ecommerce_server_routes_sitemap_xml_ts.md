# sitemap.xml.ts

**Path**: `apps\front-ecommerce\server\routes\sitemap.xml.ts`

## Summary
This server route handler generates a sitemap index XML file for an e-commerce application that supports multiple countries and languages. It filters available languages based on the current country's configuration and the `BUILD_AVAILABLE_LOCALES` environment variable, then dynamically creates sitemap references for each language/sitemap combination (e.g., `/sitemaps/fr/products.xml`, `/sitemaps/en/categories.xml`). The generated XML follows the sitemapindex schema and includes caching headers in production to optimize SEO performance across different locales.

## Type Aliases
- `Countries`

