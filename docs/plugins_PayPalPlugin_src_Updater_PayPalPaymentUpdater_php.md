# PayPalPaymentUpdater.php

**Path**: `plugins\PayPalPlugin\src\Updater\PayPalPaymentUpdater.php`

## Summary
The `PayPalPaymentUpdater` class is responsible for updating PayPal payment amounts within the Sylius e-commerce framework. It implements the `PaymentUpdaterInterface` and provides a single method to modify a payment's amount and persist the change to the database using Doctrine's ObjectManager. This updater serves as a service layer component for managing payment amount modifications during PayPal transaction processing.

## Classes
- `PayPalPaymentUpdater`

## Function Details

### `__construct`

- **Parameters**: `ObjectManager $paymentManager`

### `updateAmount`

- **Parameters**: `PaymentInterface $payment, int $newAmount`

