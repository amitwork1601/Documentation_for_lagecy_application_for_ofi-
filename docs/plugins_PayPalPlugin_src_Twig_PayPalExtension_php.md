# PayPalExtension.php

**Path**: `plugins\PayPalPlugin\src\Twig\PayPalExtension.php`

## Summary
This Twig extension provides a template helper function to check if PayPal is enabled as a payment method in a Sylius e-commerce application. It iterates through available payment methods and returns true if any method uses the 'sylius.pay_pal' gateway factory, allowing templates to conditionally display PayPal-related UI elements or functionality.

## Classes
- `PayPalExtension`

## Function Details

### `getFunctions`


### `isPayPalEnabled`

- **Parameters**: `iterable $paymentMethods`

