# PaymentUpdaterInterface.php

**Path**: `plugins\PayPalPlugin\src\Updater\PaymentUpdaterInterface.php`

## Summary
This interface defines a contract for updating payment amounts in the Sylius PayPal plugin. It provides a single method to modify the amount of a payment entity, likely used when payment totals need to be adjusted during checkout or order processing within the e-commerce system.

## Function Details

### `updateAmount`

- **Parameters**: `PaymentInterface $payment, int $newAmount`

