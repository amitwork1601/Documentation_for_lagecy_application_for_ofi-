# useDate.ts

**Path**: `apps\front-ecommerce\composables\useDate.ts`

## Summary
This composable provides date utility functions for an e-commerce application. Its primary function `toRelative()` converts absolute dates into human-readable relative time strings (e.g., "in 2 days", "3 months ago") using Intl.RelativeTimeFormat with locale support and optional capitalization, while `extractTime()` extracts formatted time (HH:MM) from Date objects. These utilities are likely used for displaying order dates, delivery estimates, or product availability in a user-friendly format.

## Function Details

### `useDate`


### `capitalize`

- **Parameters**: `str: string`

### `extractTime`

- **Parameters**: `date: Date`

