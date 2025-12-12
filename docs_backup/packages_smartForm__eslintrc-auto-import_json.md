# .eslintrc-auto-import.json

**Path**: `packages\smartForm\.eslintrc-auto-import.json`

## Summary
This is an ESLint configuration file that defines global variables for auto-import functionality in the smartForm package. It whitelists common Vue 3 APIs (composition API functions, lifecycle hooks, component types), Vue Router composables, i18n utilities, and testing framework globals (like `afterAll`, `assert`) so they can be used without explicit import statements while avoiding ESLint's "no-undef" errors.

