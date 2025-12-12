# PaymentRefundProcessorInterface.php

**Path**: `plugins\PayPalPlugin\src\Processor\PaymentRefundProcessorInterface.php`

## Summary
This interface defines a contract for processing PayPal payment refunds in a Sylius e-commerce system. It specifies a single method `refund()` that accepts a Payment object and handles the refund operation, throwing a PayPalOrderRefundException if the refund fails. The interface serves as an abstraction layer between Sylius payment management and PayPal's refund API integration.

## Function Details

### `refund`

- **Parameters**: `PaymentInterface $payment`
- **Description**: @throws PayPalOrderRefundException
/

