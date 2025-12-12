# CompletePaymentHandler.php

**Path**: `src\Api\CommandHandler\Payment\CompletePaymentHandler.php`

## Summary
This handler processes payment completion commands in an e-commerce order flow. It validates that a payment exists and is attached to an order, acquires a lock on that order, then applies state machine transitions to both the payment (marking it complete) and the order checkout process (advancing it through checkout stages). The handler ensures thread-safe payment completion by using order locking and manages the critical business logic of finalizing payments and progressing orders to completion.

## Classes
- `CompletePaymentHandler`

## Function Details

### `__invoke`

- **Parameters**: `CompletePayment $command`

