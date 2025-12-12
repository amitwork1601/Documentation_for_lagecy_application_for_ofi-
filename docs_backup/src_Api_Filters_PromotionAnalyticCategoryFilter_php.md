# PromotionAnalyticCategoryFilter.php

**Path**: `src\Api\Filters\PromotionAnalyticCategoryFilter.php`

## Summary
This filter class enables filtering of Promotion entities based on their associated analytic categories by name. It implements both standard Doctrine ORM QueryBuilder filtering and native SQL query filtering, allowing API consumers to retrieve promotions that belong to specific analytic category names passed as an array parameter. The filter performs a left join on the `analyticCategory` relationship and uses an IN clause to match against the provided category name values.

## Classes
- `PromotionAnalyticCategoryFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`

