# ResendOrderConfirmationEmailAction.php

**Path**: `src\Api\Controller\Order\ResendOrderConfirmationEmailAction.php`

## Summary
This API controller action handles the resending of order confirmation emails by looking up an order using a token value from the request and dispatching an email notification command through the message bus. It serves as an endpoint for customers or admins to trigger a re-send of the order confirmation email when the original email was not received or needs to be resent, returning a 204 No Content response on success or throwing appropriate exceptions if the order is not found or the email fails to send.

## Classes
- `ResendOrderConfirmationEmailAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

