# PromotionGenericFilter.php

**Path**: `src\Api\Filters\PromotionGenericFilter.php`

## Summary
This filter implements a generic search functionality for Promotion entities in an API Platform application. It enables searching across multiple promotion fields (name, description, and associated coupon codes) using a single search term, while also supporting direct lookup by promotion ID or customer ID. The filter uses Doctrine ORM QueryBuilder with left joins to include coupon data in the search scope.

## Classes
- `PromotionGenericFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`

