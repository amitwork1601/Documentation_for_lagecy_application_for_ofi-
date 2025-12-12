# useFetchRecommendation.ts

**Path**: `apps\front-ecommerce\composables\useFetchRecommendation.ts`

## Summary
This composable creates and manages a configured fetch instance specifically for making recommendation API requests to a Pixie service endpoint. It automatically injects the current locale into all requests and provides a reusable fetch function with default POST method and JSON headers, allowing optional response transformation for type-safe recommendation data retrieval in an e-commerce front-end application.

## Function Details

### `useFetchRecommendation`


### `transform`

- **Parameters**: `opts?.transform || ((value: unknown`

