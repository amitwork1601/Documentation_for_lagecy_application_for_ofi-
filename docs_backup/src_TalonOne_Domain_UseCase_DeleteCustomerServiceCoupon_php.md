# DeleteCustomerServiceCoupon.php

**Path**: `src\TalonOne\Domain\UseCase\DeleteCustomerServiceCoupon.php`

## Summary
This use case class handles the deletion of customer service coupons from the TalonOne promotion management system when they are removed from an order. It removes the coupon association from the order entity, validates whether the coupon should be auto-deleted, and if so, constructs and executes a delete request through TalonOne's Management API using the configured application and campaign IDs.

## Classes
- `DeleteCustomerServiceCoupon`

## Function Details

### `execute`

- **Parameters**: `Order $order, OrderTalonOneCoupon $orderTalonCoupon`

### `validateDelete`

- **Parameters**: `Order $order, OrderTalonOneCoupon $coupon`

