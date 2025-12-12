# GenerateCSCouponForOrderCommand.php

**Path**: `src\TalonOne\Domain\Command\GenerateCSCouponForOrderCommand.php`

## Summary
This command class encapsulates a request to generate a customer support (CS) coupon for a specific order in the TalonOne promotion system. It carries all necessary data including the order token, promotion analytics metadata (category, target, broadcasts), and customer support event attributes that are needed to create and track CS-generated promotional coupons. The class serves as a data transfer object in a CQRS pattern to handle customer support-initiated coupon generation workflows with full analytics tracking.

## Classes
- `GenerateCSCouponForOrderCommand`

## Function Details

### `getAttributes`


### `getOrderTokenValue`


### `getAnalyticCategory`


### `setAnalyticCategory`

- **Parameters**: `PromotionAnalyticCategory $analyticCategory`

### `getAnalyticTarget`


### `setAnalyticTarget`

- **Parameters**: `PromotionAnalyticTarget $analyticTarget`

### `getAnalyticBroadcasts`


### `setAnalyticBroadcasts`

- **Parameters**: `array $analyticBroadcasts`

