# UnselectShippingMethodHandler.php

**Path**: `src\Api\CommandHandler\Checkout\UnselectShippingMethodHandler.php`

## Summary
This handler processes a command to unselect a shipping method from a checkout cart in an e-commerce system. It retrieves the cart by token, locks it for processing, transitions the order's checkout state back to "addressed" (removing the selected shipping method), and persists the changes before releasing the lock. This allows customers to go back and change their shipping selection during the checkout process.

## Classes
- `UnselectShippingMethodHandler`

## Function Details

### `__invoke`

- **Parameters**: `UnselectShippingMethod $unselectShippingMethod`

