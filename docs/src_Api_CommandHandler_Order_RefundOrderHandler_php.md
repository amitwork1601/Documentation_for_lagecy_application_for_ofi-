# RefundOrderHandler.php

**Path**: `src\Api\CommandHandler\Order\RefundOrderHandler.php`

## Summary
This command handler processes order refund requests by retrieving an order using its token value and applying a refund transition to the order's payment through a state machine. It serves as the business logic layer for initiating payment refunds in the e-commerce system, delegating the actual state change to Sylius's payment state machine using the `TRANSITION_REFUND` transition.

## Classes
- `RefundOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `RefundOrder $message`

