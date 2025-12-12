# useABTests.ts

**Path**: `modules\nuxt-ecommerce\src\runtime\composables\useABTests.ts`

## Summary
This composable manages A/B test variant assignment for e-commerce experiments by checking if a user belongs to a specific test target group. It initializes the variant status on component mount and watches for changes in A/B test data (likely from a service called "Pixie"), automatically updating the variant assignment when test configurations change. The composable provides reactive variant state and target checking functionality to components that need to conditionally render content based on active A/B tests.

## Function Details

### `setABTestVariant`


