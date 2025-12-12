# [sitemap].xml.ts

**Path**: `apps\front-ecommerce-b2b\server\routes\sitemaps\[sitemapindexlocalized]\[sitemap].xml.ts`

## Summary
This API route handler generates localized XML sitemaps for specific content sections (e.g., 'core', 'products') within a B2B e-commerce application. It validates the URL structure `/{locale}/{sub-content}.xml`, checks if the requested locale is available for the current country configuration, and returns a 404 error if the locale or sitemap structure is invalid. The purpose is to provide search engines with properly localized sitemap files segmented by content type for better SEO crawling.

## Type Aliases
- `Countries`

