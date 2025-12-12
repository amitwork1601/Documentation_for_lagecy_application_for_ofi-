# customerGetReturnUser.ts

**Path**: `apps\front-ecommerce\middleware\customerGetReturnUser.ts`

## Summary
This Nuxt.js route middleware prevents logged-in customers from accessing pages intended for non-authenticated users (like login/registration pages). When a logged-in customer attempts to access such pages, it redirects them to their account dashboard unless they're already navigating from an account-related page, ensuring proper access control for the e-commerce application's customer-facing routes.

