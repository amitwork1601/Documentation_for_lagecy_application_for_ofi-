# SubscriptionOrderInvalidPromotionProcessor.php

**Path**: `src\Order\Processor\SubscriptionOrderInvalidPromotionProcessor.php`

## Summary
This processor handles subscription orders that are in an `INVALID_PROMOTION` state by attempting to revalidate their promotions and coupons. When processing, it updates the customer session with the promotion system (TalonOne), checks if any coupons are inactive, and transitions the order out of the error state if the promotion issues are resolved. This ensures subscription orders with previously invalid promotions can be automatically corrected when promotion eligibility changes.

## Classes
- `SubscriptionOrderInvalidPromotionProcessor`

## Function Details

### `process`

- **Parameters**: `OrderInterface $order`

### `canBeProcessed`

- **Parameters**: `OrderInterface $order`

