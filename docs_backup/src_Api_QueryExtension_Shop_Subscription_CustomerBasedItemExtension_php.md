# CustomerBasedItemExtension.php

**Path**: `src\Api\QueryExtension\Shop\Subscription\CustomerBasedItemExtension.php`

## Summary
This Doctrine ORM query extension restricts access to Subscription entity items based on the authenticated user's role and customer association. Shop users can only retrieve their own subscriptions by automatically filtering queries to match their customer ID, while admin users have unrestricted access. The extension integrates with API Platform to enforce customer-based data isolation at the query level for subscription resources.

## Classes
- `CustomerBasedItemExtension`

## Function Details

### `__construct`

- **Parameters**: `private UserContextInterface $userContext`

