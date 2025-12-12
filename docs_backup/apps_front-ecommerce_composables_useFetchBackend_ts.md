# useFetchBackend.ts

**Path**: `apps\front-ecommerce\composables\useFetchBackend.ts`

## Summary
This composable provides a centralized HTTP client for making authenticated API requests to the e-commerce backend (Sylius). It configures a custom `$fetch` instance with automatic channel/locale query parameters, JWT authentication headers, and support for JSON-LD and JSON Merge Patch content types. The file also defines an `HttpError` class for structured error handling of backend API responses.

## Classes
- `HttpError`

## Function Details

### `useFetchBackend`


### `transform`

- **Parameters**: `opts?.transform || ((value: any`

