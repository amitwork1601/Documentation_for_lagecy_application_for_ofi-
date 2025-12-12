# DeleteCouponsAction.php

**Path**: `src\TalonOne\Controller\DeleteCouponsAction.php`

## Summary
This Symfony controller handles HTTP DELETE requests to remove coupons from the TalonOne promotional system. It accepts customer ID, campaign ID, and coupon ID as route parameters, constructs a Coupon DTO, executes the deletion through a use case service, and returns either a 204 No Content response on success or a 500 error response with exception details on failure.

## Classes
- `DeleteCouponsAction`

## Function Details

### `__invoke`

- **Parameters**: `$customerId, $campaignId, $couponId`

