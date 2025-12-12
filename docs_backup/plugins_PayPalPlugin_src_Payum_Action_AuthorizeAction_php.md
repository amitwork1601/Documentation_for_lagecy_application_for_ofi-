# AuthorizeAction.php

**Path**: `plugins\PayPalPlugin\src\Payum\Action\AuthorizeAction.php`

## Summary
This class implements a Payum action for handling PayPal payment authorization requests in the Sylius e-commerce platform. When executed, it accepts an `Authorize` request containing a `PaymentInterface` model and sets the payment's details to indicate a "created" status, effectively initializing the payment authorization process. The action validates that requests are specifically `Authorize` instances with valid payment models before processing them.

## Classes
- `AuthorizeAction`

## Function Details

### `execute`

- **Parameters**: `$request`
- **Description**: @param Capture $request */

### `supports`

- **Parameters**: `$request`

