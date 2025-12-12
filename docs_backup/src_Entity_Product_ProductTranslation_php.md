# ProductTranslation.php

**Path**: `src\Entity\Product\ProductTranslation.php`

## Summary
This class extends Sylius's base product translation functionality to handle localized product data (like names and descriptions in different languages). It serves as a Doctrine ORM entity that maps to the `sylius_product_translation` database table and provides a custom constructor to optionally initialize the translatable product and locale during instantiation, enabling multi-language support for product information in the e-commerce system.

## Classes
- `ProductTranslation`

## Function Details

### `__construct`

- **Parameters**: `?Product $translatable = null, ?string $locale = null`

