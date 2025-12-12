# PayPalPaymentCompleteProcessorSpec.php

**Path**: `plugins\PayPalPlugin\spec\Processor\PayPalPaymentCompleteProcessorSpec.php`

## Summary
This is a PHPSpec test specification for the `PayPalPaymentCompleteProcessor` class in a Sylius PayPal plugin. It verifies that the processor correctly completes PayPal payments by extracting the PayPal order ID from payment details, retrieving the appropriate payment gateway, and executing a `CompleteOrder` request through Payum's gateway interface to finalize the transaction with PayPal.

## Classes
- `PayPalPaymentCompleteProcessorSpec`

## Function Details

### `let`

- **Parameters**: `Payum $payum`

### `it_implements_payment_complete_processor_interface`


