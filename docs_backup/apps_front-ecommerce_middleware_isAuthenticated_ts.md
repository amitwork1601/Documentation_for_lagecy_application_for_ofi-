# isAuthenticated.ts

**Path**: `apps\front-ecommerce\middleware\isAuthenticated.ts`

## Summary
This Nuxt.js route middleware protects authenticated routes in an e-commerce application by checking if a customer is logged in before allowing navigation. If the user is not authenticated, it stores their intended destination, aborts the navigation, and redirects them to the login page (unless they're already navigating from a login page to prevent redirect loops). The middleware only runs on the client-side and integrates with the customer store to manage authentication state.

