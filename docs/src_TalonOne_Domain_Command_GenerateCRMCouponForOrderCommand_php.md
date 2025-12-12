# GenerateCRMCouponForOrderCommand.php

**Path**: `src\TalonOne\Domain\Command\GenerateCRMCouponForOrderCommand.php`

## Summary
This command class encapsulates the request to generate a CRM coupon for a specific order in the TalonOne promotional system. It carries the order token identifier along with promotional analytics metadata (category, target, broadcasts) and CRM event attributes that will be used to trigger coupon generation. The command serves as a data transfer object in a CQRS pattern, bundling all necessary information to process coupon creation while tracking promotional campaign analytics for marketing purposes.

## Classes
- `GenerateCRMCouponForOrderCommand`

## Function Details

### `getAttributes`


### `getAnalyticCategory`


### `setAnalyticCategory`

- **Parameters**: `PromotionAnalyticCategory $analyticCategory`

### `getAnalyticTarget`


### `setAnalyticTarget`

- **Parameters**: `PromotionAnalyticTarget $analyticTarget`

### `getAnalyticBroadcasts`


### `setAnalyticBroadcasts`

- **Parameters**: `array $analyticBroadcasts`

