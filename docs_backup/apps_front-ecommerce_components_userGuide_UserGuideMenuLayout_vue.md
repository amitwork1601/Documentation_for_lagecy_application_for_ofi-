# UserGuideMenuLayout.vue

**Path**: `apps\front-ecommerce\components\userGuide\UserGuideMenuLayout.vue`

## Summary
This Vue component provides a navigational menu layout for a user guide system, specifically handling different layouts for bi-nutrition workflows and general user guides. It dynamically generates step buttons based on the menu layout type (EDIT, VALID_BI_NUTRITION, BI_NUTRITION_FULL, or default), with each layout displaying a different number of steps and potentially skipping certain steps (e.g., VALID_BI_NUTRITION skips step 1). The component manages step progression through click events and visually indicates the current, completed, and disabled steps through conditional styling.

## Function Details

### `layoutButtons`

- **Parameters**: `computed<number[]>((`

### `computedLabelButton`

- **Parameters**: `computed((`

