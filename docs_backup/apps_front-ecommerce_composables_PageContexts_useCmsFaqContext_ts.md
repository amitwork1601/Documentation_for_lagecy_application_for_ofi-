# useCmsFaqContext.ts

**Path**: `apps\front-ecommerce\composables\PageContexts\useCmsFaqContext.ts`

## Summary
This code provides a composable for managing FAQ page contexts in an e-commerce CMS system, handling both the main FAQ index page and individual FAQ subject pages. It defines two context classes (`CmsFaqContext` and `CmsFaqSubjectContext`) that extend the base CMS page context and override canonical URL building logic to generate proper routes for FAQ pages. The `useCmsFaqContext` composable exposes factory methods to create these context instances by fetching page metadata from Strapi CMS and associating them with FAQ tracking events.

## Classes
- `CmsFaqContext`
- `CmsFaqSubjectContext`

## Function Details

### `useCmsFaqContext`


### `createIndexContext`


