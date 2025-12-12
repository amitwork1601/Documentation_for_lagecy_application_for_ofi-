# CheckCouponAvailability.php

**Path**: `src\TalonOne\Domain\UseCase\CheckCouponAvailability.php`

## Summary
This use case class validates coupon availability and applicability for orders in the TalonOne promotion management system. It performs a dry-run API call to check if a coupon code can be applied to an order, processing the response to handle acceptance, rejection, or custom effects, and throwing appropriate exceptions for various error scenarios. The class acts as a domain orchestrator that coordinates between the TalonOne integration API, order management, and notification systems to verify coupon eligibility before actual application.

## Classes
- `CheckCouponAvailability`

## Function Details

### `execute`

- **Parameters**: `Order $order, ?string $couponCode`

### `checkErrorNotification`

- **Parameters**: `array $effects, Order $order`

### `checkCustomEffect`

- **Parameters**: `array $effects, Order $order`

