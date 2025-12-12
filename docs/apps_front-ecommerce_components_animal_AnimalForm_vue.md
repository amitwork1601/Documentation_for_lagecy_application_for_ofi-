# AnimalForm.vue

**Path**: `apps\front-ecommerce\components\animal\AnimalForm.vue`

## Summary
This Vue component serves as a multi-step animal/pet information form for an e-commerce nutrition guide system. It orchestrates different step components (BiNutrition or UserGuide flows) based on the configuration, manages form state and validation through the `usePet` composable, and handles navigation between steps with conditional back button logic. The component supports both full and short nutrition assessment workflows, integrates with customer authentication state, and can load existing animal data or submit results to generate product recommendations.

## Function Details

### `getStepComponent`


### `disabledBackButton`

- **Parameters**: `computed((`

