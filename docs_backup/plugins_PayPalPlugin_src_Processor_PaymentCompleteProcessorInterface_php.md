# PaymentCompleteProcessorInterface.php

**Path**: `plugins\PayPalPlugin\src\Processor\PaymentCompleteProcessorInterface.php`

## Summary
This interface defines a contract for processors that handle the completion of PayPal payments within the Sylius e-commerce platform. It requires implementing classes to provide a `completePayment()` method that finalizes a payment transaction, likely updating payment status and triggering any necessary post-payment workflows after successful PayPal payment processing.

## Function Details

### `completePayment`

- **Parameters**: `PaymentInterface $payment`

