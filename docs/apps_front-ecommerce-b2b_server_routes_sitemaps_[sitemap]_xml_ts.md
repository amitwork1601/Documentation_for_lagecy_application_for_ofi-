# [sitemap].xml.ts

**Path**: `apps\front-ecommerce-b2b\server\routes\sitemaps\[sitemap].xml.ts`

## Summary
This is a dynamic sitemap XML generator for a B2B e-commerce application that handles requests for individual sitemap files (e.g., products.xml, categories.xml). It validates the requested sitemap filename against a regex pattern, retrieves the corresponding sitemap data from the `useSitemap` composable, and renders it as properly formatted XML with support for standard sitemap elements (URLs, lastmod dates) and image metadata following the sitemap.org schema specifications.

