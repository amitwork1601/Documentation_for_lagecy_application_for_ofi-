# BulkUpdateNextShippingAction.php

**Path**: `src\Api\Controller\SubscriptionOrder\BulkUpdateNextShippingAction.php`

## Summary
This API controller handles bulk updates of the next shipping date for multiple subscription orders. It validates the request payload, retrieves subscription orders based on provided tokens, creates and dispatches a `BulkUpdateNextShipping` command via the message bus, and returns an appropriate HTTP response (204 on success, 409 if no orders provided).

## Classes
- `BulkUpdateNextShippingAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request, ValidatorInterface $validator`

