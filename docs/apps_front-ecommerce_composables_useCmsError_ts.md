# useCmsError.ts

**Path**: `apps\front-ecommerce\composables\useCmsError.ts`

## Summary
This composable provides error handling for CMS content loading operations in an e-commerce frontend application. It wraps CMS object promises and catches any loading failures, automatically converting them into 404 "Not Found" errors that are displayed to the user via Nuxt's `showError` function. This ensures that when CMS content fails to load (e.g., missing pages, products, or content blocks), users see a consistent 404 error page rather than an unhandled exception.

## Interfaces
- `CmsLoadedObject`

