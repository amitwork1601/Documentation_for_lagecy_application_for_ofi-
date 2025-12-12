# useServerI18n.ts

**Path**: `apps\front-ecommerce\composables\useServerI18n.ts`

## Summary
This server-side internationalization (i18n) utility loads and flattens JSON translation files for a given locale, providing translation lookup functionality. It offers two main functions: `t()` for basic key-based translation retrieval, and `tUrl()` for generating localized URLs with dynamic parameter substitution and locale-prefixed paths. The code is designed to work in a Nuxt server context where file system access is available, enabling translation management for an e-commerce front-end application.

## Function Details

### `flattenTranslations`

- **Parameters**: `obj: any, prefix?: any, carry?: any`

### `t`

- **Parameters**: `keyPath: string`

### `tUrl`

- **Parameters**: `keyPath: string, params?: { [key: string]: string }`

