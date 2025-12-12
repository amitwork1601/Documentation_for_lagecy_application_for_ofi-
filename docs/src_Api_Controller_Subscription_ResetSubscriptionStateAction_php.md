# ResetSubscriptionStateAction.php

**Path**: `src\Api\Controller\Subscription\ResetSubscriptionStateAction.php`

## Summary
This API controller action resets a subscription's state from ERROR back to ACTIVE, but only if the subscription exists, is currently in an ERROR state, and either has no draft order or the draft order is not in an error state. It serves as a recovery mechanism for subscriptions that encountered errors but can be safely reactivated, returning a 204 No Content response on success or a 404 if the subscription doesn't exist or isn't in an error state.

## Classes
- `ResetSubscriptionStateAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request, string $code`

