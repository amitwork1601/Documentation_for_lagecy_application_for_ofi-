# useNuxtPayload.ts

**Path**: `apps\front-ecommerce\composables\useNuxtPayload.ts`

## Summary
This composable provides a utility wrapper around Nuxt's payload state management system for server-side rendering (SSR) data caching. It enables checking, getting, and setting cached data in the Nuxt payload (with `setCachedData` only writing on the server), and retrieving all keys with optional prefix filtering. The purpose is to facilitate data sharing between server and client during SSR hydration in an e-commerce application.

## Interfaces
- `INuxtPayloadComposable`

## Function Details

### `getKeys`

- **Parameters**: `prefix?: string`

