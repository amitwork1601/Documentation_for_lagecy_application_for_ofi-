# GenerateCRMCouponForCustomerHandler.php

**Path**: `src\TalonOne\Domain\CommandHandler\GenerateCRMCouponForCustomerHandler.php`

## Summary
This handler processes commands to generate CRM coupons for customers in a Talon.One integration system. It retrieves a customer, configures coupon attributes (validity dates, prefix/suffix, analytics metadata), and delegates to a use case to create the coupon with a 6-month validity period and analytics tracking for promotional campaigns.

## Classes
- `GenerateCRMCouponForCustomerHandler`

## Function Details

### `__invoke`

- **Parameters**: `GenerateCRMCouponForCustomerCommand $command`

