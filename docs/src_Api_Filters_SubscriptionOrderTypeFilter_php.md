# SubscriptionOrderTypeFilter.php

**Path**: `src\Api\Filters\SubscriptionOrderTypeFilter.php`

## Summary
This filter enables API Platform to query orders based on their subscription status by checking if order items have a subscription interval. It specifically filters orders into subscription-related categories (creation, iteration, or none) by joining with order items and evaluating whether a `subscriptionInterval` field is null or not, supporting both regular Orders and SubscriptionOrders in an e-commerce subscription system.

## Classes
- `SubscriptionOrderTypeFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`

### `normalizeValues`

- **Parameters**: `array $values, string $property`

