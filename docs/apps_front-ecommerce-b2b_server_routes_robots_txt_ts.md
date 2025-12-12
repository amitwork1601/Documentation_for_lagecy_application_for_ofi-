# robots.txt.ts

**Path**: `apps\front-ecommerce-b2b\server\routes\robots.txt.ts`

## Summary
This server route handler dynamically generates a `robots.txt` file for a B2B e-commerce application, controlling search engine crawler access based on the site's indexability configuration. It customizes crawl permissions per user-agent (allowing Google bots while blocking AI crawlers like GPTBot and cocolyzebot), pulls localized allow/disallow rules from i18n translations, and includes sitemap references. The generated rules adapt between development and production environments, with special handling to exclude certain paths from Googlebot restrictions while maintaining broader disallow rules for other crawlers.

