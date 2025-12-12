# HasSubscriptionFilter.php

**Path**: `src\Api\Filters\Customer\HasSubscriptionFilter.php`

## Summary
This filter allows API consumers to query Customer entities based on whether they have active subscriptions. When applied with a boolean value, it constructs a subquery that either includes (true) or excludes (false) customers who have at least one active subscription, enabling efficient filtering of customers by their subscription status in the API Platform-based application.

## Classes
- `HasSubscriptionFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`

