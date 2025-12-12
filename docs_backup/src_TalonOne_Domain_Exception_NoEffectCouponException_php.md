# NoEffectCouponException.php

**Path**: `src\TalonOne\Domain\Exception\NoEffectCouponException.php`

## Summary
This class defines a custom exception for the TalonOne coupon domain that indicates when a coupon code is applied but produces no effect on the transaction (e.g., no discount or benefit). It extends PHP's base Exception class to provide a specific, semantically meaningful error type that can be caught and handled differently from generic exceptions when coupon validation or application fails to yield results.

## Classes
- `NoEffectCouponException`

