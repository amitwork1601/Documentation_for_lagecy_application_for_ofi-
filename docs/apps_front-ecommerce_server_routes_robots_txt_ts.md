# robots.txt.ts

**Path**: `apps\front-ecommerce\server\routes\robots.txt.ts`

## Summary
This server route dynamically generates a `robots.txt` file for an e-commerce application, controlling search engine crawler access based on SEO configuration and internationalization settings. It creates differentiated rules for various bots (Googlebot, AI crawlers like GPTBot/ChatGPT, etc.), allowing full access to Google's commercial bots while blocking AI training bots, and adjusts indexability based on the `seo.indexable` configuration flag. The handler also sets appropriate caching headers for production and includes sitemap references to support search engine discovery.

