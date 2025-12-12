# useABTestsEngine.ts

**Path**: `modules\nuxt-ecommerce\src\runtime\composables\useABTestsEngine.ts`

## Summary
This composable manages A/B testing experiments for an e-commerce application by storing test configurations and user segment assignments in session storage. It provides functions to add/remove A/B tests, track which variant a user is assigned to, and check if a user is in a specific test segment (variant vs control), enabling controlled feature rollouts and experimentation across the platform.

## Function Details

### `useABTestsEngine`


### `addABTests`

- **Parameters**: `newAbTests: PixieResponseConfigABTest`

### `addABTest`

- **Parameters**: `newAbTest: PixieABTest`

### `removeABTest`

- **Parameters**: `abTestToRemove: PixieABTest`

### `inABTestTarget`

- **Parameters**: `name: string, target = 'variant'`

### `abTest`

- **Parameters**: `abTests.value.find((abTest`

