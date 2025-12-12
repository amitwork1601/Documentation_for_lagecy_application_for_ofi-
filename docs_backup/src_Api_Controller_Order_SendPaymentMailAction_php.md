# SendPaymentMailAction.php

**Path**: `src\Api\Controller\Order\SendPaymentMailAction.php`

## Summary
This controller handles API requests to send payment-related email notifications for orders. It extracts an order token from the request, dispatches an `OrderPaymentEmailNotification` command via the message bus to trigger the email sending process, and returns a 204 No Content response on success or throws a 404 exception if the token is missing or the handler fails.

## Classes
- `SendPaymentMailAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

