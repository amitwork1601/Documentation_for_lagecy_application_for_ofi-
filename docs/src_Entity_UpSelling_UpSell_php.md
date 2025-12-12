# UpSell.php

**Path**: `src\Entity\UpSelling\UpSell.php`

## Summary
The `UpSell` entity represents an upselling offer in an e-commerce system, allowing merchants to promote additional product variants to customers during cart checkout or subscription flows. It manages a collection of `UpSellVariant` items with configurable pricing strategies (fixed or percentage discounts), typology classification, and supports both GraphQL queries and standard Sylius resource operations for creating targeted cross-sell and upsell campaigns.

## Classes
- `UpSell`

## Function Details

### `__construct`


### `__clone`


### `getId`


### `getName`


### `setName`

- **Parameters**: `string $name`

### `isEnabled`


### `setEnabled`

- **Parameters**: `bool $enabled`

### `getTypology`


### `setTypology`

- **Parameters**: `?string $typology`

### `getClassification`


### `setClassification`

- **Parameters**: `?string $classification`

### `getVariants`


### `getAvailableVariants`


### `addVariant`

- **Parameters**: `UpSellVariant $variant`

### `removeVariant`

- **Parameters**: `UpSellVariant $variant`

### `getVariant`

- **Parameters**: `int $upsellVariantId`

### `getUpsellVariantFromProductVariant`

- **Parameters**: `ProductVariant $productVariant`

