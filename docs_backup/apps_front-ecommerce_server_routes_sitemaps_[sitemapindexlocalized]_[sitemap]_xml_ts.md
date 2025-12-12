# [sitemap].xml.ts

**Path**: `apps\front-ecommerce\server\routes\sitemaps\[sitemapindexlocalized]\[sitemap].xml.ts`

## Summary
This is a server route handler that generates localized XML sitemaps for specific sub-content sections (e.g., 'core', 'faq') within a multi-language e-commerce application. It validates the route format `{locale}/{sub-content}.xml`, ensures the requested locale is available for the current country, and dynamically generates sitemap entries for that locale-specific content section. The handler includes error handling for invalid sitemap paths and filters available languages based on both the country configuration and build-time available locales.

## Type Aliases
- `Countries`

