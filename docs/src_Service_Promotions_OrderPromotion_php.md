# OrderPromotion.php

**Path**: `src\Service\Promotions\OrderPromotion.php`

## Summary
The `OrderPromotion` service manages order-specific promotions in an e-commerce system by creating custom promotions tied to individual orders and customers. It generates single-use coupon codes, configures promotion properties (exclusive mode, reusability), applies promotional actions (like shipping discounts), and processes the order to reflect the promotion. This enables functionality like creating personalized discount coupons for specific customers or orders that can be automatically generated and applied.

## Classes
- `OrderPromotion`

## Function Details

### `createOrderSpecificPromotion`

- **Parameters**: `OrderInterface $order, ?Promotion $promotion`

### `isPromotionAllowedToDisplay`

- **Parameters**: `Promotion $promotion`

