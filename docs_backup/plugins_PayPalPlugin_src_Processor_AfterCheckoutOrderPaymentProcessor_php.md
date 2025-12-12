# AfterCheckoutOrderPaymentProcessor.php

**Path**: `plugins\PayPalPlugin\src\Processor\AfterCheckoutOrderPaymentProcessor.php`

## Summary
This class is a decorator for the order payment processor in the PayPal plugin that ensures payment processing only occurs for completed checkout orders. It wraps the base after-checkout payment processor and adds a guard condition to verify the order's checkout state is "completed" before delegating to the underlying processor, preventing premature payment processing during incomplete checkout flows.

## Classes
- `AfterCheckoutOrderPaymentProcessor`

## Function Details

### `__construct`

- **Parameters**: `OrderProcessorInterface $baseAfterCheckoutOrderPaymentProcessor`

### `process`

- **Parameters**: `OrderInterface $order`
- **Description**: @var CoreOrderInterface */

