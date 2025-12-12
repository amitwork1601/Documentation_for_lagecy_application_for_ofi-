# AddItemCatalogAction.php

**Path**: `src\TalonOne\Core\DTO\Catalogs\Actions\AddItemCatalogAction.php`

## Summary
This Data Transfer Object (DTO) represents an action to add or update a product item in a TalonOne catalog integration. It creates a catalog action from a Sylius ProductVariant by mapping the SKU, price, and product details, with the ability to replace existing items if they already exist in the TalonOne promotional engine system.

## Classes
- `AddItemCatalogAction`

## Function Details

### `create`

- **Parameters**: `ProductVariant $productVariant, Channel $channel`

