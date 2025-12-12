# EffectNotificationManager.php

**Path**: `src\TalonOne\Domain\Manager\EffectNotificationManager.php`

## Summary
The `EffectNotificationManager` class manages promotional notifications from the TalonOne loyalty/promotion system by extracting and organizing notification effects associated with coupons and orders. It provides functionality to retrieve notifications filtered by coupon ID or notification type, and additionally updates order adjustment labels with corresponding notification messages when processing type-sorted notifications.

## Classes
- `EffectNotificationManager`

## Function Details

### `getNotificationByCouponId`

- **Parameters**: `int $couponId, array $effects`
- **Description**: @param Effect[] $effects
/

### `getNotificationByTypeSortedByCouponId`

- **Parameters**: `NotificationType $type, array $effects, Order $order`

