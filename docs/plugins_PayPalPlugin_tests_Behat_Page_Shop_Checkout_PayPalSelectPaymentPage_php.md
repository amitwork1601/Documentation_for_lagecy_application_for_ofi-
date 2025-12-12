# PayPalSelectPaymentPage.php

**Path**: `plugins\PayPalPlugin\tests\Behat\Page\Shop\Checkout\PayPalSelectPaymentPage.php`

## Summary
This is a Behat test page object for PayPal plugin checkout testing in Sylius e-commerce platform. It extends the standard checkout payment selection page and adds functionality to verify if a specific payment method (particularly PayPal) is currently selected by checking the 'checked' attribute of the payment method radio button element.

## Classes
- `PayPalSelectPaymentPage`

## Function Details

### `hasPaymentMethodSelected`

- **Parameters**: `string $paymentMethodName`

