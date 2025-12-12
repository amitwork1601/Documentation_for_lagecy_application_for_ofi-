# CompleteOrderHandler.php

**Path**: `src\Api\CommandHandler\Checkout\CompleteOrderHandler.php`

## Summary
This handler processes the completion of an order checkout in an e-commerce system. It validates the order exists, applies checkout state transitions, handles order locking to prevent concurrent modifications, and integrates with PayPal payment processing. The handler serves as the command execution layer for finalizing orders, managing notes, and coordinating between the order repository, state machine transitions, and payment services.

## Classes
- `CompleteOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `CompleteOrder $completeOrder`

### `canOrderCheckoutComplete`

- **Parameters**: `Order $cart`

