# datadog.ts

**Path**: `modules\nuxt-ecommerce\src\runtime\plugins\datadog.ts`

## Summary
This Nuxt plugin initializes Datadog Real User Monitoring (RUM) for an e-commerce application when enabled via configuration. It sets up client-side monitoring with session tracking, resource monitoring, and session replay capabilities, while configuring allowed tracing URLs for backend, CMS, and Pixie services. The plugin masks user input by default for privacy and tracks 100% of sessions for comprehensive monitoring of the application's performance and user experience.

