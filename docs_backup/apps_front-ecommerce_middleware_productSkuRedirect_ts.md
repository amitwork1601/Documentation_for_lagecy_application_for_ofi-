# productSkuRedirect.ts

**Path**: `apps\front-ecommerce\middleware\productSkuRedirect.ts`

## Summary
This middleware intercepts product route navigation and handles SKU-to-slug redirects for e-commerce product URLs. When a numeric product SKU (6-8 digits) is detected in the URL, it fetches the product metadata from the catalog and permanently redirects (301) the user to the SEO-friendly slug-based URL instead, preserving any query parameters from the original request.

