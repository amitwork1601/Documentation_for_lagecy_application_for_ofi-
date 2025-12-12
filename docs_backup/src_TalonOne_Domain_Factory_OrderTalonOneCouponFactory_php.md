# OrderTalonOneCouponFactory.php

**Path**: `src\TalonOne\Domain\Factory\OrderTalonOneCouponFactory.php`

## Summary
This factory class creates and manages `OrderTalonOneCoupon` entities from TalonOne coupon acceptance events. It checks if a coupon already exists on an order, creates a new one if needed (populating it with coupon code, campaign ID, and rule name from the effect), and links the coupon to the triggering discount effect identifier for tracking purposes in the TalonOne integration system.

## Classes
- `OrderTalonOneCouponFactory`

