# RemovePromotionCoupon.php

**Path**: `src\Validator\Promotion\RemovePromotionCoupon.php`

## Summary
This class defines a custom validation constraint for the promotion domain that prevents deletion of promotion coupons that are currently in use. It's a class-level Symfony validator constraint that will trigger the error message "Cannot delete, promotion coupon is in use" when the associated validation logic (in a separate validator class) determines a coupon cannot be safely removed due to active references or usage.

## Classes
- `RemovePromotionCoupon`

## Function Details

### `getTargets`


