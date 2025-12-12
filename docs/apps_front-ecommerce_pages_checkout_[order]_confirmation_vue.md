# confirmation.vue

**Path**: `apps\front-ecommerce\pages\checkout\[order]\confirmation.vue`

## Summary
This is an order confirmation page component for an e-commerce checkout flow that displays after a customer successfully completes their order. It validates that the order is in a completed state (redirecting to the checkout funnel if not), triggers third-party integrations like MentionMe referral tracking with customer and order details, and sends analytics tracking events for the confirmation page view. The page is protected by authentication middleware and handles the final step of the checkout process where customers see their order summary and payment method information.

## Function Details

### `trackingOnPageView`


