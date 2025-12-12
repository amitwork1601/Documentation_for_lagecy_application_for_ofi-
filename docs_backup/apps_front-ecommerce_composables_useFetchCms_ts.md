# useFetchCms.ts

**Path**: `apps\front-ecommerce\composables\useFetchCms.ts`

## Summary
This composable provides a custom fetch wrapper for making HTTP requests to a CMS (Content Management System) API in a Nuxt e-commerce application. It implements client-side caching using Nuxt's payload system to avoid redundant API calls, stores successful GET requests in cache by key, and supports optional data transformation before returning results. The fetcher is configured with a base URL from runtime config and includes performance monitoring capabilities.

## Function Details

### `useFetchCms`


### `transform`

- **Parameters**: `opts?.transform || ((value: any`

