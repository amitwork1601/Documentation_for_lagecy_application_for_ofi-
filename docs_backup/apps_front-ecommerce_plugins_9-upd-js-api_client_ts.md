# 9-upd-js-api.client.ts

**Path**: `apps\front-ecommerce\plugins\9-upd-js-api.client.ts`

## Summary
This Nuxt plugin creates a global JavaScript API (`window._upd`) that exposes external interfaces for third-party integrations and marketing tools in an e-commerce application. It provides programmatic access to features like Pixie analytics emulation, marketing popup controls (exit intent tracking, exit popups, top header banners), and SSO authentication callbacks (Google Identity), all implemented through Nuxt's internal hook system to trigger actions across the application.

## Type Aliases
- `TWindow`

## Function Details

### `externalApi`

- **Parameters**: `nuxtApp: { $hooks: TNuxtCustomHooks<unknown> }`

