# AfterCheckoutOrderPaymentProcessorSpec.php

**Path**: `plugins\PayPalPlugin\spec\Processor\AfterCheckoutOrderPaymentProcessorSpec.php`

## Summary
This is a PHPSpec test specification for an order payment processor decorator in the Sylius PayPal plugin. It verifies that the processor conditionally delegates to a base payment processor only when an order has reached the completed checkout state, preventing payment processing for orders in intermediate states like "addressed". The decorator pattern ensures payment processing logic is only executed after checkout completion, which is critical for PayPal payment flows.

## Classes
- `AfterCheckoutOrderPaymentProcessorSpec`

## Function Details

### `let`

- **Parameters**: `OrderProcessorInterface $baseOrderPaymentProcessor`

### `it_implements_order_processor_interface`


