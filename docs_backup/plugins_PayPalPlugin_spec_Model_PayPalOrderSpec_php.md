# PayPalOrderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Model\PayPalOrderSpec.php`

## Summary
This is a PHPSpec specification file that tests the `PayPalOrder` model class in the Sylius PayPal plugin. It verifies that the PayPalOrder class correctly constructs and returns PayPal API order data by combining Sylius order information (including shipping addresses) with PayPal purchase unit details (amounts, taxes, discounts) in the proper format for PayPal payment processing.

## Classes
- `PayPalOrderSpec`

## Function Details

### `let`

- **Parameters**: `OrderInterface $order, PayPalPurchaseUnit $payPalPurchaseUnit`

