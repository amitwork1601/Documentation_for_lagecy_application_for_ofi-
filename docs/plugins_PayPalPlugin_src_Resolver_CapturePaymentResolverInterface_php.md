# CapturePaymentResolverInterface.php

**Path**: `plugins\PayPalPlugin\src\Resolver\CapturePaymentResolverInterface.php`

## Summary
This interface defines a contract for resolving and capturing PayPal payments within the Sylius e-commerce platform. It declares a single method that takes a Payment entity and handles the payment capture process, which is a critical step in completing PayPal transactions after authorization. This resolver pattern allows for different implementations of payment capture logic while maintaining a consistent interface across the PayPal plugin.

## Function Details

### `resolve`

- **Parameters**: `PaymentInterface $payment`

