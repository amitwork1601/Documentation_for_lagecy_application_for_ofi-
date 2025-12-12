# CompleteOrderPaymentResolverSpec.php

**Path**: `plugins\PayPalPlugin\spec\Resolver\CompleteOrderPaymentResolverSpec.php`

## Summary
This is a PHPSpec test specification for the `CompleteOrderPaymentResolver` class in the Sylius PayPal plugin. It verifies that the resolver correctly executes a PayPal order completion action by retrieving the appropriate payment gateway based on the payment method's configuration and dispatching a `CompleteOrder` request with the payment model and PayPal order ID. The test ensures proper integration between Sylius payment processing and PayPal's order completion workflow.

## Classes
- `CompleteOrderPaymentResolverSpec`

## Function Details

### `let`

- **Parameters**: `Payum $payum`

### `it_is_an_complete_order_payment_resolver`


