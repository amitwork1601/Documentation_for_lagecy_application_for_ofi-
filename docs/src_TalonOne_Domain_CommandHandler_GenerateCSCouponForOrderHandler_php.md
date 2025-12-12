# GenerateCSCouponForOrderHandler.php

**Path**: `src\TalonOne\Domain\CommandHandler\GenerateCSCouponForOrderHandler.php`

## Summary
This handler processes commands to generate Customer Success (CS) coupons for specific orders in the TalonOne promotion system. It retrieves an order, configures coupon attributes (6-month validity, AUTO- prefix, analytics metadata), generates the coupon via TalonOne, assigns it to the order, and handles cleanup of any previous coupons. The handler serves as the orchestration layer between the order system and TalonOne's coupon generation service, specifically for automated customer success promotional workflows.

## Classes
- `GenerateCSCouponForOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `GenerateCSCouponForOrderCommand $command`

