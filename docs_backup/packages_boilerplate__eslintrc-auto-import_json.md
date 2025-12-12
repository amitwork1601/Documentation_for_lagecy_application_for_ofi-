# .eslintrc-auto-import.json

**Path**: `packages\boilerplate\.eslintrc-auto-import.json`

## Summary
This ESLint configuration file defines global variables that are auto-imported in a Vue.js project, preventing ESLint from throwing "undefined variable" errors for commonly used APIs. It whitelists Vue 3 composition API functions (like `ref`, `computed`, `watch`), lifecycle hooks, Vue Router composables (`useRoute`, `useRouter`), internationalization utilities (`useI18n`), and testing framework globals, allowing developers to use these without explicit import statements while maintaining proper linting.

