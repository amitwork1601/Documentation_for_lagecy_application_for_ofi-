# redirectTrailingSlash.ts

**Path**: `modules\nuxt-ecommerce\src\runtime\middleware\redirectTrailingSlash.ts`

## Summary
This Nuxt middleware enforces trailing slashes on all routes by redirecting URLs without trailing slashes to their trailing-slash equivalents using a 301 permanent redirect. It makes exceptions for paths that end with `.xml` or `.txt` extensions (likely for sitemaps and robots.txt), preserving query parameters and hash fragments during the redirect to maintain proper SEO and URL consistency across the e-commerce application.

