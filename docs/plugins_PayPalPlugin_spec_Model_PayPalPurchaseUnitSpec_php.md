# PayPalPurchaseUnitSpec.php

**Path**: `plugins\PayPalPlugin\spec\Model\PayPalPurchaseUnitSpec.php`

## Summary
This is a PHPSpec specification file that tests the `PayPalPurchaseUnit` model class, which represents a purchase unit in PayPal payment transactions within the Sylius e-commerce framework. The spec verifies that the model correctly converts order data (including amounts, shipping address, items, and merchant information) into a properly formatted array structure that matches PayPal's API requirements for processing payments.

## Classes
- `PayPalPurchaseUnitSpec`

## Function Details

### `let`

- **Parameters**: `AddressInterface $shippingAddress`

### `it_returns_proper_paypal_purchase_unit`

- **Parameters**: `AddressInterface $shippingAddress`

### `it_returns_proper_paypal_purchase_unit_if_shipping_is_not_required`

- **Parameters**: `AddressInterface $shippingAddress`

### `it_returns_proper_paypal_purchase_unit_if_shipping_is_not_set`


