# PayPalItemDataProviderInterface.php

**Path**: `plugins\PayPalPlugin\src\Provider\PayPalItemDataProviderInterface.php`

## Summary
This interface defines a contract for providers that convert Sylius order data into PayPal-compatible item data structures. It exists to enable the transformation of e-commerce order items into the format required by PayPal's API for payment processing, allowing different implementations to handle various item data conversion strategies.

## Function Details

### `provide`

- **Parameters**: `OrderInterface $order`

