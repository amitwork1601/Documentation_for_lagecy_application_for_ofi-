# ProductEnabledExtension.php

**Path**: `src\Api\QueryExtension\Shop\Product\ProductEnabledExtension.php`

## Summary
This API Platform query extension filters product queries in the shop API to only return enabled products. It implements both collection and item query extensions for the Sylius e-commerce platform, automatically adding a "WHERE enabled = true" condition to product queries when accessed through the shop-facing API (as opposed to admin API), ensuring customers only see active products.

## Classes
- `ProductEnabledExtension`

## Function Details

### `__construct`

- **Parameters**: `private SectionProviderInterface $sectionProvider`

### `addWhere`

- **Parameters**: `QueryBuilder $queryBuilder, string $resourceClass`

