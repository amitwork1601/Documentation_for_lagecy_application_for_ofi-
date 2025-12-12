# CancelCustomerSession.php

**Path**: `src\TalonOne\Domain\UseCase\CancelCustomerSession.php`

## Summary
This class implements a use case for canceling a customer session in the TalonOne promotion/loyalty platform when an order is canceled or abandoned. It builds a cancellation request using the order data, sends it to TalonOne's Integration API via a client, and handles potential API errors by wrapping them in domain-specific exceptions. This is part of the application's integration with TalonOne's campaign management system to keep customer session states synchronized with order lifecycle changes.

## Classes
- `CancelCustomerSession`

## Function Details

### `execute`

- **Parameters**: `Order $order`

