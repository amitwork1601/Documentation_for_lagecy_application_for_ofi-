# EnableSellerAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\EnableSellerAction.php`

## Summary
The `EnableSellerAction` controller handles the enabling of PayPal payment methods for sellers in a Sylius e-commerce system. It retrieves a payment method by ID from the request, attempts to enable it via a payment method enabler service, and handles exceptions by adding appropriate flash messages and redirecting back to the referrer page if enablement fails due to configuration issues or invalid webhook URLs.

## Classes
- `EnableSellerAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

