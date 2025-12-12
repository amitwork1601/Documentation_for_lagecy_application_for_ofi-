# CreatePromotionCouponHandler.php

**Path**: `src\Api\CommandHandler\Promotion\CreatePromotionCouponHandler.php`

## Summary
This command handler creates a new promotion coupon for an existing promotion in an e-commerce system. It retrieves a promotion by code, instantiates a coupon with specified properties (code, usage limits, expiration date, and reusability rules), associates it with the promotion, and returns the updated promotion entity for persistence.

## Classes
- `CreatePromotionCouponHandler`

## Function Details

### `__invoke`

- **Parameters**: `CreatePromotionCoupon $command`

