# RecommendationsProductCard.vue

**Path**: `apps\front-ecommerce\components\shared\RecommendationsProductCard.vue`

## Summary
This Vue component renders a selectable product card for product recommendations in an e-commerce flow. It manages the selection state of recommended products with a maximum limit, toggling products in/out of a selection list via checkboxes while disabling unselected items once the maximum is reached. The component tracks which products are selected by their variant IDs and provides visual feedback through opacity changes and checkbox states.

## Function Details

### `selectProduct`

- **Parameters**: `variantId: string`

