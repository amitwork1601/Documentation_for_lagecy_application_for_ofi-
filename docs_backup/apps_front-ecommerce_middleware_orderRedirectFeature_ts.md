# orderRedirectFeature.ts

**Path**: `apps\front-ecommerce\middleware\orderRedirectFeature.ts`

## Summary
This Nuxt route middleware checks if a customer has only a single order and automatically redirects them to that order's detail page instead of showing an order listing. It fetches the customer's order history, caches it in the application state, and performs the redirect when exactly one order exists, streamlining the user experience by skipping unnecessary navigation steps in the e-commerce order management flow.

## Function Details

### `abortAndRedirect`

- **Parameters**: `orderCode: string`

