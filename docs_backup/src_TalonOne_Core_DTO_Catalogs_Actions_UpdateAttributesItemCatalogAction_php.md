# UpdateAttributesItemCatalogAction.php

**Path**: `src\TalonOne\Core\DTO\Catalogs\Actions\UpdateAttributesItemCatalogAction.php`

## Summary
This Data Transfer Object (DTO) represents an action to update or create product catalog items in the TalonOne loyalty/promotion platform. It encapsulates product variant data from the e-commerce system (including SKU, attributes, and product details) and uses a factory method to transform ProductVariant entities into a format suitable for TalonOne API integration, with automatic creation enabled if the item doesn't exist in their catalog.

## Classes
- `UpdateAttributesItemCatalogAction`

## Function Details

### `create`

- **Parameters**: `ProductVariant $productVariant`

