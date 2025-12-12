# .eslintrc-auto-import.json

**Path**: `packages\youtube\.eslintrc-auto-import.json`

## Summary
This is an ESLint configuration file that defines global variables for auto-import functionality in a YouTube package. It whitelists Vue 3 composition API functions, Vue Router hooks, internationalization utilities (i18n), and testing framework globals (like `afterAll`, `assert`) so they can be used without explicit imports and won't trigger ESLint's "no-undef" rule. This configuration enables a more streamlined development experience by allowing developers to use common Vue and testing utilities directly without import statements.

