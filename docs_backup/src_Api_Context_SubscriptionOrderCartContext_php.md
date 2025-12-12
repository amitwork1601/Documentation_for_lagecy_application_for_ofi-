# SubscriptionOrderCartContext.php

**Path**: `src\Api\Context\SubscriptionOrderCartContext.php`

## Summary
This class implements a Sylius cart context specifically for subscription-based orders in an API environment. It retrieves a draft order (cart) associated with an active subscription by looking up the subscription code from the API request attributes, throwing a `CartNotFoundException` if the subscription doesn't exist, is stopped, or has no draft order. The class serves as a prioritized cart resolution strategy (-335 priority) that enables subscription management workflows to access and manipulate the appropriate order cart through Sylius's cart context system.

## Classes
- `SubscriptionOrderCartContext`

## Function Details

### `getCart`


### `hasCart`


### `checkApiRequest`

- **Parameters**: `Request $request`

