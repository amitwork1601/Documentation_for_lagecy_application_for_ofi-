# isWebViewAllowed.ts

**Path**: `apps\front-ecommerce\middleware\isWebViewAllowed.ts`

## Summary
This Nuxt middleware restricts route access exclusively to mobile app WebView contexts (iOS and Android in-app browsers). It detects whether the user is accessing the app through a native mobile WebView or PWA standalone mode, and returns a 404 error for standard browser access, effectively creating a mobile-app-only entry point for the e-commerce application.

## Interfaces
- `NavigatorWithStandalone`

