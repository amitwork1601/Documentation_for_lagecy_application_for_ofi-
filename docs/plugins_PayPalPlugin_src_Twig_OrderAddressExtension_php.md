# OrderAddressExtension.php

**Path**: `plugins\PayPalPlugin\src\Twig\OrderAddressExtension.php`

## Summary
This Twig extension provides functionality to detect incomplete billing addresses in PayPal orders. Specifically, it checks if an order doesn't require shipping and has an empty billing address (missing street, postcode, and city), which is useful for handling PayPal checkout scenarios where billing information may be incomplete or bypassed.

## Classes
- `OrderAddressExtension`

## Function Details

### `getFunctions`


### `isBillingAddressMissing`

- **Parameters**: `OrderInterface $order`

