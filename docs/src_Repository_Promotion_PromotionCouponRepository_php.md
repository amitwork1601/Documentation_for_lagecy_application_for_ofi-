# PromotionCouponRepository.php

**Path**: `src\Repository\Promotion\PromotionCouponRepository.php`

## Summary
This repository extends Sylius's base promotion coupon repository to manage promotion coupons with custom filtering logic based on their active/expired status. It provides methods to retrieve active coupons (excluding those that have reached their usage limit or expiration date) and expired coupons for a given promotion, using Doctrine ORM query builders to handle complex date and usage-based expiration conditions.

## Classes
- `PromotionCouponRepository`

## Function Details

### `__construct`

- **Parameters**: `EntityManagerInterface $em, ClassMetadata $class`

### `findActiveByPromotion`

- **Parameters**: `Promotion $promotion`

### `findExpiredByPromotion`

- **Parameters**: `Promotion $promotion`

### `getQueryForExpiredCoupons`

- **Parameters**: `Promotion $promotion`

