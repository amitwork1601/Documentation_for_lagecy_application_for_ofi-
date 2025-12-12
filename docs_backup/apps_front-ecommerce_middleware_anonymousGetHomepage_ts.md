# anonymousGetHomepage.ts

**Path**: `apps\front-ecommerce\middleware\anonymousGetHomepage.ts`

## Summary
This Nuxt middleware enforces authentication requirements for the homepage by checking if a customer is logged in. If the user is not logged in and attempts to access any route other than the homepage (index), it redirects them to the homepage while preserving query parameters. The middleware only runs on the client-side and prevents unauthorized users from accessing protected routes in the e-commerce application.

