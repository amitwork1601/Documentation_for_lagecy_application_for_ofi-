# OrderPaymentProcessorSpec.php

**Path**: `plugins\PayPalPlugin\spec\Processor\OrderPaymentProcessorSpec.php`

## Summary
This is a PHPSpec specification file that tests the `OrderPaymentProcessor` class, which is a decorator pattern implementation for processing PayPal payments in Sylius e-commerce. The processor intercepts order payment processing to handle special PayPal-specific logic, specifically preventing reprocessing of orders that already have captured PayPal payments in "processing" state, while delegating other cases to the base order processor.

## Classes
- `OrderPaymentProcessorSpec`

## Function Details

### `let`

- **Parameters**: `OrderProcessorInterface $baseOrderProcessor, FactoryInterface $stateMachineFactory`

### `it_implements_order_processor_interface`


