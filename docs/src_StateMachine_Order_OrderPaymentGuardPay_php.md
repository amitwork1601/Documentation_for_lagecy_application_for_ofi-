# OrderPaymentGuardPay.php

**Path**: `src\StateMachine\Order\OrderPaymentGuardPay.php`

## Summary
This guard class controls whether an order's payment transition to "pay" state is allowed within a state machine workflow. It blocks the payment transition specifically when the order uses an "upcoming_payment" gateway (identified by either gateway name or factory name), allowing all other payment methods to proceed normally. This prevents premature payment processing for orders configured with future or placeholder payment gateways in a Sylius e-commerce system.

## Classes
- `OrderPaymentGuardPay`

## Function Details

### `isAllowed`

- **Parameters**: `OrderInterface $order`

