# ProductAssociationType.php

**Path**: `src\Entity\Product\ProductAssociationType.php`

## Summary
This entity class extends Sylius's base ProductAssociationType to define types of relationships between products (e.g., "related products", "accessories", "cross-sells"). It configures the Doctrine ORM mapping to the `sylius_product_association_type` database table and overrides the translation creation method to use the application's custom ProductAssociationTypeTranslation class for multi-language support of association type names and descriptions.

## Classes
- `ProductAssociationType`

## Function Details

### `createTranslation`


