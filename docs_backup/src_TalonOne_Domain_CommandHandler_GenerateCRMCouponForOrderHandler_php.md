# GenerateCRMCouponForOrderHandler.php

**Path**: `src\TalonOne\Domain\CommandHandler\GenerateCRMCouponForOrderHandler.php`

## Summary
This handler processes commands to generate CRM-specific coupons for orders in the TalonOne promotion system. It retrieves an order by token, creates a coupon with 6-month validity and configurable attributes (prefix "AUTOREMPLA-", analytics tracking), assigns it to the order, and handles cleanup of any existing coupons. The handler serves as the bridge between the order management system and TalonOne's coupon generation API for automated replacement/promotional coupon workflows.

## Classes
- `GenerateCRMCouponForOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `GenerateCRMCouponForOrderCommand $command`

