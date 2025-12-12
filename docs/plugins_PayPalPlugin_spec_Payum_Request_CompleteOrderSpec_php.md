# CompleteOrderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Payum\Request\CompleteOrderSpec.php`

## Summary
This is a PHPSpec test specification for a `CompleteOrder` Payum request class in the Sylius PayPal plugin. It verifies that the CompleteOrder request properly extends Payum's Generic request class and correctly stores/retrieves a PayPal order ID (used to identify and complete PayPal payment transactions). The spec ensures the request can be constructed with a payment object and order ID, which are essential for finalizing PayPal orders in the payment processing workflow.

## Classes
- `CompleteOrderSpec`

## Function Details

### `let`

- **Parameters**: `PaymentInterface $payment`

### `it_is_generic_action`


### `it_has_an_order_id`


