# ProductAttributeValue.php

**Path**: `src\Entity\Product\ProductAttributeValue.php`

## Summary
This class represents a Product Attribute Value entity in a Sylius e-commerce application, extending the base Sylius product attribute value model. It stores the actual values assigned to product attributes (e.g., "Red" for a "Color" attribute) and provides a custom constructor that allows optional initialization of the product, attribute definition, and locale code for internationalization support.

## Classes
- `ProductAttributeValue`

## Function Details

### `__construct`

- **Parameters**: `?Product $product = null, ?ProductAttribute $productAttribute = null, ?string $localeCode = null`

