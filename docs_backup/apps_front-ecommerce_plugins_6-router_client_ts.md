# 6-router.client.ts

**Path**: `apps\front-ecommerce\plugins\6-router.client.ts`

## Summary
This Nuxt plugin implements custom Vue Router navigation control to manage page transitions by preventing route changes during ongoing page transitions. It tracks a `running` state flag that blocks navigation when false (during transitions) and queues the next route to be executed after the current transition completes. The plugin ensures smooth, non-overlapping page transitions in the e-commerce frontend by coordinating route changes with Nuxt's page lifecycle hooks (`page:start`, `page:transition:finish`, and `page:finish`).

## Interfaces
- `CustomRouter`

## Function Details

### `unregisterFirstPageFinish`

- **Parameters**: `nuxtApp.hook('page:finish', (`

