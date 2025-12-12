# SubscriptionOrdersAction.php

**Path**: `src\Api\Controller\SubscriptionOrder\SubscriptionOrdersAction.php`

## Summary
This API controller retrieves processed subscription orders for a specific subscription identified by a code parameter. It queries the database for subscription orders with a 'processed' draft state, filtering by the subscription matching the provided code, and returns them ordered by checkout completion date in descending order. The controller serves as an endpoint to fetch the order history for a particular subscription.

## Classes
- `SubscriptionOrdersAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

