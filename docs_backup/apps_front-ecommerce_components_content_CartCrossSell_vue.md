# CartCrossSell.vue

**Path**: `apps\front-ecommerce\components\content\CartCrossSell.vue`

## Summary
This Vue component displays cross-sell product recommendations on the shopping cart page. It dynamically fetches personalized product suggestions either from a recommendation engine (based on cart items) or falls back to a CMS-defined cross-sell list based on the cart's classification (e.g., "cross_sell_panier_[classification]"). The component tracks the recommendation source for analytics purposes and renders the suggestions using a reusable CrossSell component.

## Function Details

### `crossSellName`

- **Parameters**: `computed((`

### `cartItemsForRecommendation`

- **Parameters**: `computed((`

### `crossSellParams`

- **Parameters**: `computedAsync(async (`

