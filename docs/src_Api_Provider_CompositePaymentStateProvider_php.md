# CompositePaymentStateProvider.php

**Path**: `src\Api\Provider\CompositePaymentStateProvider.php`

## Summary
The `CompositePaymentStateProvider` implements a chain-of-responsibility pattern to determine the current state of a payment by delegating to specialized payment state handlers. It iterates through a collection of `PaymentStateProviderInterface` implementations, finds the first handler that supports the payment's method, and uses it to provide the payment state, returning null if no suitable handler is found.

## Classes
- `CompositePaymentStateProvider`

## Function Details

### `__construct`

- **Parameters**: `iterable $apiPaymentStateHandlers`

### `provide`

- **Parameters**: `PaymentInterface $payment`

