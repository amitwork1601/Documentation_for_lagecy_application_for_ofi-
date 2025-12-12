# DeleteCoupon.php

**Path**: `src\TalonOne\Domain\UseCase\DeleteCoupon.php`

## Summary
This use case class handles the deletion of coupons from the TalonOne promotional management system. It constructs a delete coupon API request using the builder pattern (via RequestDirector and DeleteCouponRequestBuilder) with the application ID, campaign ID, and coupon ID, then executes the deletion through the TalonOne Management API client.

## Classes
- `DeleteCoupon`

## Function Details

### `execute`

- **Parameters**: `Coupon $coupon`

