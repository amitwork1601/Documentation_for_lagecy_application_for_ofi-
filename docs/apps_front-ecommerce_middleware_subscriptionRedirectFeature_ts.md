# subscriptionRedirectFeature.ts

**Path**: `apps\front-ecommerce\middleware\subscriptionRedirectFeature.ts`

## Summary
This Nuxt middleware automatically redirects users to their subscription details page when they have exactly one active subscription. It fetches the customer's subscriptions, filters for active ones, and if only a single active subscription exists, it bypasses the subscription listing page and navigates directly to that subscription's detail view to streamline the user experience.

## Function Details

### `abortAndRedirect`

- **Parameters**: `subscriptionCode: string`

