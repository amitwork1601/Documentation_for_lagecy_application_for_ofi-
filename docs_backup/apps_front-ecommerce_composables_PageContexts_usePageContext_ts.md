# usePageContext.ts

**Path**: `apps\front-ecommerce\composables\PageContexts\usePageContext.ts`

## Summary
# Summary

This file defines a `PageContext` class that serves as a central configuration object for managing SEO and metadata across e-commerce pages. It stores and provides access to page-level attributes like title, indexing directives, canonical URLs, hreflang tags, microdata, and tracking information, while also acting as a wrapper for router and i18n functionality. The class uses a Map-based attribute storage system with getter/setter methods to allow flexible configuration of page metadata that can be consumed by Nuxt's head management and analytics tracking systems.

## Classes
- `PageContext`

## Function Details

### `usePageContext`


### `loadPageContext`

- **Parameters**: `context: PageContext`

