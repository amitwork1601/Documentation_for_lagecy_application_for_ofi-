# Product.php

**Path**: `src\TalonOne\Core\DTO\Product.php`

## Summary
This is a Data Transfer Object (DTO) that represents a product for integration with the Talon.One promotion engine system. It converts Sylius product entities into a simplified format containing only the product name (derived from the product code, truncated to 50 characters) for API communication with Talon.One's external service.

## Classes
- `Product`

## Function Details

### `create`

- **Parameters**: `ProductInterface $productEntity`

