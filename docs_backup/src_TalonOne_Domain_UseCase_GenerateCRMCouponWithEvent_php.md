# GenerateCRMCouponWithEvent.php

**Path**: `src\TalonOne\Domain\UseCase\GenerateCRMCouponWithEvent.php`

## Summary
This use case class generates CRM coupons in the TalonOne loyalty/promotion platform by sending a coupon creation event for a specific customer. It builds a tracking event request using the customer data and payload, executes it through the TalonOne Integration API, and deserializes the response into a Coupon DTO object, throwing specific exceptions if the API call fails or no coupon is created.

## Classes
- `GenerateCRMCouponWithEvent`

## Function Details

### `execute`

- **Parameters**: `Customer $customer, array $payload = []`

