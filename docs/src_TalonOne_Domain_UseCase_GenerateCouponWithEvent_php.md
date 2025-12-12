# GenerateCouponWithEvent.php

**Path**: `src\TalonOne\Domain\UseCase\GenerateCouponWithEvent.php`

## Summary
This use case class handles the generation of promotional coupons through the TalonOne promotion management platform by triggering a customer event. It builds a coupon creation request for a specific customer, executes it via the TalonOne Integration API, and returns a deserialized Coupon DTO from the API response, with error handling for both technical and API-specific exceptions.

## Classes
- `GenerateCouponWithEvent`

## Function Details

### `execute`

- **Parameters**: `Customer $customer, array $payload = []`

