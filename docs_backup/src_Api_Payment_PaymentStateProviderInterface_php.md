# PaymentStateProviderInterface.php

**Path**: `src\Api\Payment\PaymentStateProviderInterface.php`

## Summary
This interface defines a contract for payment state providers in a Sylius e-commerce application. It enables different payment method implementations to determine and return the current state of a payment (e.g., pending, completed, failed) based on their specific logic, with a `supports()` method to check compatibility with a given payment method and a `provideState()` method to retrieve the actual payment state.

## Function Details

### `supports`

- **Parameters**: `PaymentMethodInterface $paymentMethod`

### `provideState`

- **Parameters**: `PaymentInterface $payment`

