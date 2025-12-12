# maintenance.global.ts

**Path**: `apps\front-ecommerce\middleware\maintenance.global.ts`

## Summary
This Nuxt middleware intercepts route navigation to redirect users to a maintenance page when they attempt to access routes that are currently under maintenance. It reads a comma-separated list of maintenance route names from the runtime configuration, checks if the target route matches any of them, and if so, redirects the user to a dedicated maintenance page while preventing further navigation.

