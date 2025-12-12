# RollbackCouponEffect.php

**Path**: `src\TalonOne\Core\DTO\Effect\RollbackCouponEffect.php`

## Summary
This class represents a specific type of effect in the TalonOne promotion engine that handles the rollback/reversal of coupon operations. It extends a base `Effect` class and contains properties specific to coupon rollback actions through the `RollbackCouponEffectProps` object, which likely holds data needed to undo a previously applied coupon (such as coupon code, value to reverse, etc.). This is part of a data transfer object (DTO) pattern used to communicate coupon reversal operations between the application and the TalonOne API, typically needed when transactions are cancelled or refunded.

## Classes
- `RollbackCouponEffect`

