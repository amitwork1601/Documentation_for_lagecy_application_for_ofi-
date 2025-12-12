# FrequencyModal.vue

**Path**: `apps\front-ecommerce\components\shared\FrequencyModal.vue`

## Summary
This Vue component implements a frequency selection modal for e-commerce subscription products. It allows users to choose how often they want to receive a product (e.g., every 30 days, 60 days) or opt for no subscription, with the ability to display a recommended frequency based on product characteristics. The component manages the frequency options fetched from the cart store, handles user selection, and emits the chosen frequency back to the parent component for cart/product configuration.

## Function Details

### `setRecommendedFrequency`

- **Parameters**: `code: string`

