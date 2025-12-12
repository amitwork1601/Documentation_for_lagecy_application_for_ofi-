# useString.ts

**Path**: `packages\utils\src\composables\useString.ts`

## Summary
This TypeScript composable provides utility functions for string transformations and normalization, primarily focused on address handling and internationalization. The main functionality includes capitalizing text, sanitizing newlines, removing locale suffixes (e.g., "_fr"), and critically, normalizing Unicode characters (apostrophes, quotes, dashes, spaces) to ASCII equivalents to prevent cross-platform inconsistencies when processing addresses between mobile and desktop devices.

## Function Details

### `useString`


### `capitalizeFirstLetter`

- **Parameters**: `str: string`

### `sanitize`

- **Parameters**: `str?: string`

### `removeUnderscoreAndLocaleAtTheEndOfString`

- **Parameters**: `str: string`

### `normalizeAddressString`

- **Parameters**: `str?: string | null`

