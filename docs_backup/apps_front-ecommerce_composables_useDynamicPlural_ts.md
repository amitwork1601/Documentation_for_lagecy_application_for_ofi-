# useDynamicPlural.ts

**Path**: `apps\front-ecommerce\composables\useDynamicPlural.ts`

## Summary
This composable provides dynamic pluralization functionality for internationalized text in an e-commerce application. It creates a temporary i18n context on-the-fly to pluralize a given string based on a cardinal number, without requiring pre-defined translation keys in message files. This is useful for handling pluralization rules dynamically at runtime when the exact translation keys aren't known in advance.

## Function Details

### `useDynamicPlural`


### `pluralize`

- **Parameters**: `source: string, cardinal: number`

