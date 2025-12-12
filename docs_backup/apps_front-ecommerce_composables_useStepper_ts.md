# useStepper.ts

**Path**: `apps\front-ecommerce\composables\useStepper.ts`

## Summary
This composable manages a multi-step user guide wizard for nutrition-related flows in an e-commerce application. It tracks the current step, determines the guide type (short/full BI nutrition vs. default), calculates the maximum number of steps based on the guide variant, and provides navigation path resolution for entrance, guide steps, and result pages. The composable centralizes stepper logic for different nutrition guide workflows while handling route-based state management.

## Function Details

### `useStepper`


### `getPathName`

- **Parameters**: `condition?: 'entrance' | 'result'`

### `isBiNutrition`

- **Parameters**: `computed<TUserGuideMenuLayout | undefined>((`

### `maxNumberOfSteps`

- **Parameters**: `computed((`

