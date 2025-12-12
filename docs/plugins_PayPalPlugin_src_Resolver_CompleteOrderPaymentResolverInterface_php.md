# CompleteOrderPaymentResolverInterface.php

**Path**: `plugins\PayPalPlugin\src\Resolver\CompleteOrderPaymentResolverInterface.php`

## Summary
This interface defines a contract for resolving and completing PayPal payment transactions in a Sylius e-commerce system. It requires implementers to provide a `resolve` method that processes a payment entity using a PayPal order ID, likely handling the finalization of payment state after PayPal transaction completion.

## Function Details

### `resolve`

- **Parameters**: `PaymentInterface $payment, string $payPalOrderId`

