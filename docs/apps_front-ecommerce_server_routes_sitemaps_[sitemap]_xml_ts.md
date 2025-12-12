# [sitemap].xml.ts

**Path**: `apps\front-ecommerce\server\routes\sitemaps\[sitemap].xml.ts`

## Summary
This server route handler dynamically generates XML sitemap files for an e-commerce application based on the requested sitemap filename (e.g., "products.xml", "categories.xml"). It validates the sitemap name against available sitemaps from the `useSitemap` composable, then constructs a standards-compliant XML sitemap document with URL entries including support for image metadata, last modification dates, and change frequencies for SEO purposes.

