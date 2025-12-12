# GetPayzenFormTokenAction.php

**Path**: `src\Api\Controller\Order\GetPayzenFormTokenAction.php`

## Summary
This controller action generates a Payzen payment form token for subscription orders. It validates that the order has a valid Payzen payment method, delegates to the PayzenService to create the form token, and returns it as a JSON response for client-side payment form initialization.

## Classes
- `GetPayzenFormTokenAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

