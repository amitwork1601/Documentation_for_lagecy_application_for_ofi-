# PaymentProviderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Provider\PaymentProviderSpec.php`

## Summary
This is a PhpSpec test specification for a PayPal payment provider class in a Sylius e-commerce plugin. It tests the functionality of retrieving payment entities by their associated PayPal order ID from the payment repository, including verifying that it correctly finds payments matching a given PayPal order ID and throws a `PaymentNotFoundException` when no matching payment exists.

## Classes
- `PaymentProviderSpec`

## Function Details

### `let`

- **Parameters**: `PaymentRepositoryInterface $paymentRepository`

### `it_implements_payment_provider_interface`


