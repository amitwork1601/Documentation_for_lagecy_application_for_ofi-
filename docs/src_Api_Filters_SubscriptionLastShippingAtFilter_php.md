# SubscriptionLastShippingAtFilter.php

**Path**: `src\Api\Filters\SubscriptionLastShippingAtFilter.php`

## Summary
This filter enables API Platform to filter subscription orders based on the last shipping date of their associated subscriptions. It works by creating a subquery that finds the maximum `checkoutCompletedAt` date for each subscription (excluding draft orders), then applies date range filters to those calculated last shipping dates. This allows API consumers to query subscription orders by when their parent subscription last shipped an order, supporting date comparison operators like before/after/between.

## Classes
- `SubscriptionLastShippingAtFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`

