# .eslintrc-auto-import.json

**Path**: `packages\accordionFold\.eslintrc-auto-import.json`

## Summary
This is an ESLint configuration file that defines auto-imported global variables for the accordionFold package, preventing linting errors when these identifiers are used without explicit imports. It primarily whitelists Vue 3 composition API functions (like `ref`, `computed`, `onMounted`), Vue Router hooks (`useRoute`, `useRouter`), testing utilities (Vitest functions like `afterAll`, `assert`), and internationalization helpers (`useI18n`), enabling developers to use these common framework functions directly without import statements.

