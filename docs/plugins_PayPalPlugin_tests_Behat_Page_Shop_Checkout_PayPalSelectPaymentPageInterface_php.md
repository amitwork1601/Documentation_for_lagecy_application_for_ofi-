# PayPalSelectPaymentPageInterface.php

**Path**: `plugins\PayPalPlugin\tests\Behat\Page\Shop\Checkout\PayPalSelectPaymentPageInterface.php`

## Summary
This interface extends Sylius's checkout payment selection page to add PayPal-specific functionality for Behat testing. It adds a single method to verify whether a specific payment method (by name) is currently selected on the checkout page, enabling automated tests to validate PayPal payment method selection during the checkout process.

## Function Details

### `hasPaymentMethodSelected`

- **Parameters**: `string $name`

