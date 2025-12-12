# setup.global.ts

**Path**: `test\setup.global.ts`

## Summary
This is a global test configuration file for Vitest that sets up mocks, stubs, and test utilities for a Vue.js/Nuxt application with internationalization (i18n) support. It configures global mocks for Vue Router, i18n translation functions, Nuxt components (like NuxtLink and ClientOnly), and VueUse composables (like useSwipe and useIntervalFn) to enable unit testing without requiring full application context. The file also adds a Vue snapshot serializer for consistent snapshot testing across the test suite.

## Function Details

### `useI18n`

- **Parameters**: `vi.fn((`

### `useLocalePathMock`

- **Parameters**: `vi.fn((`

