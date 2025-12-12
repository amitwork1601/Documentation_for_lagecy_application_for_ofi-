# isAnonymous.ts

**Path**: `apps\front-ecommerce\middleware\isAnonymous.ts`

## Summary
This middleware enforces anonymous-only access by preventing logged-in customers from accessing certain routes in the e-commerce front-end. When a logged-in user attempts to access a protected route (like login or registration pages), it redirects them to their account menu page instead, unless they're already navigating from within the account menu section. The middleware ensures authenticated users cannot view pages intended only for unauthenticated visitors.

