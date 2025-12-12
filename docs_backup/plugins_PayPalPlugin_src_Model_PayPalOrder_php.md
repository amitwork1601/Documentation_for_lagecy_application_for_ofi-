# PayPalOrder.php

**Path**: `plugins\PayPalPlugin\src\Model\PayPalOrder.php`

## Summary
The `PayPalOrder` class represents a PayPal order structure for the Sylius e-commerce platform's PayPal integration. It encapsulates order data including payment intent, purchase units, and payment methods, and converts them into an array format compatible with PayPal's API requirements. The class handles shipping preference logic by determining whether to use provided addresses, retrieve from PayPal, or skip shipping based on the order's requirements.

## Classes
- `PayPalOrder`

## Function Details

### `toArray`


### `getShippingPreference`


