# RejectCouponException.php

**Path**: `src\TalonOne\Domain\Exception\RejectCouponException.php`

## Summary
This exception class handles coupon rejection scenarios in the TalonOne promotion system integration. It stores multiple rejection reasons and formats them into a standardized error message using the pattern `talon_one.coupon.rejected.{reason}`, where the last rejection reason is used in the message while preserving all reasons internally for debugging or reporting purposes.

## Classes
- `RejectCouponException`

## Function Details

### `create`

- **Parameters**: `array $rejectionReasons = []`

