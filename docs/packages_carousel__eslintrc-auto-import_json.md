# .eslintrc-auto-import.json

**Path**: `packages\carousel\.eslintrc-auto-import.json`

## Summary
This is an ESLint configuration file that defines global variables for auto-import functionality in a carousel component package. It whitelists Vue 3 composition API functions, Vue Router composables, lifecycle hooks, and testing utilities (like `afterAll`, `beforeEach`, `assert`) so they can be used without explicit imports and won't trigger ESLint's "undefined variable" errors. This configuration enables a more streamlined development experience by allowing developers to use common Vue and testing framework APIs directly without import statements.

