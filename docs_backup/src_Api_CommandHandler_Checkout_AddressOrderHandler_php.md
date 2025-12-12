# AddressOrderHandler.php

**Path**: `src\Api\CommandHandler\Checkout\AddressOrderHandler.php`

## Summary
The `AddressOrderHandler` class processes the address step of the checkout workflow for e-commerce orders. It handles customer creation/association (either guest or registered user), validates order state transitions, assigns billing/shipping addresses to the order, and advances the order through the checkout state machine using locks to prevent concurrent modifications. This is a critical component of the multi-step checkout process that bridges the cart state to the addressed state before payment.

## Classes
- `AddressOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `AddressOrder $addressOrder`

### `provideCustomerByEmail`

- **Parameters**: `?string $email`

