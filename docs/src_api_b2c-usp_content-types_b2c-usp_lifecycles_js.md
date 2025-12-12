# lifecycles.js

**Path**: `src\api\b2c-usp\content-types\b2c-usp\lifecycles.js`

## Summary
This code defines lifecycle hooks for a B2C USP (Unique Selling Point) content type in Strapi that automatically synchronizes product attribute data across multiple systems. When a B2C USP entry is created or updated, it triggers a chain of operations: updating Akeneo PIM attributes, localizing the imported data, and syncing attributes to a B2C feed service. This ensures that product selling points remain consistent across the e-commerce ecosystem whenever changes are made in the CMS.

