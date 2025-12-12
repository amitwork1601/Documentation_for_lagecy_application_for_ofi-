# OrderCheckoutGuardSelectShipping.php

**Path**: `src\StateMachine\Order\OrderCheckoutGuardSelectShipping.php`

## Summary
This class implements a state machine guard that validates whether an order can transition to the shipping selection step in the checkout process. It ensures that before selecting shipping methods, the order must either be past the cart state OR have both billing and shipping addresses properly set, preventing users from skipping the address entry step during checkout.

## Classes
- `OrderCheckoutGuardSelectShipping`

## Function Details

### `isApplicable`

- **Parameters**: `OrderInterface $order`

