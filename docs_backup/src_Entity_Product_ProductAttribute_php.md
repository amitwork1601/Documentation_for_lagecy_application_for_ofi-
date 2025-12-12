# ProductAttribute.php

**Path**: `src\Entity\Product\ProductAttribute.php`

## Summary
This class extends Sylius's base product attribute model to define custom product attributes (e.g., size, color, material) in an e-commerce system. It overrides the translation creation method to use the application's custom `ProductAttributeTranslation` class, enabling multilingual support for product attribute names and values while maintaining Symfony/Doctrine ORM persistence mapped to the `sylius_product_attribute` table.

## Classes
- `ProductAttribute`

## Function Details

### `createTranslation`


