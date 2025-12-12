# PayPalPaymentCompleteProcessor.php

**Path**: `plugins\PayPalPlugin\src\Processor\PayPalPaymentCompleteProcessor.php`

## Summary
This class processes the completion of PayPal payments within the Sylius e-commerce framework. It retrieves the PayPal order ID from payment details and uses the Payum payment gateway abstraction to execute a CompleteOrder request, finalizing the transaction with PayPal's API through the configured payment gateway.

## Classes
- `PayPalPaymentCompleteProcessor`

## Function Details

### `__construct`

- **Parameters**: `Payum $payum`

### `completePayment`

- **Parameters**: `PaymentInterface $payment`

