# .eslintrc-auto-import.json

**Path**: `.eslintrc-auto-import.json`

## Summary
This ESLint configuration file defines global variables that are auto-imported and available without explicit import statements in the codebase. It whitelists Vue 3 Composition API functions (ref, computed, lifecycle hooks), Vue Router composables (useRoute, useRouter), testing framework globals (describe, it, expect, beforeEach), and TypeScript type utilities, preventing ESLint from flagging these as undefined variables when they're used via auto-import functionality.

