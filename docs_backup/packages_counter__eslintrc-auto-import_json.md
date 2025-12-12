# .eslintrc-auto-import.json

**Path**: `packages\counter\.eslintrc-auto-import.json`

## Summary
This is an ESLint configuration file that defines global variables for auto-import functionality in a Vue 3 project. It whitelists Vue composition API functions, Vue Router utilities, i18n composables, and testing framework globals (like `afterAll`, `assert`) so they can be used without explicit imports while avoiding ESLint's "no-undef" errors. This configuration enables a cleaner development experience by allowing developers to use these common Vue and testing utilities directly without import statements.

