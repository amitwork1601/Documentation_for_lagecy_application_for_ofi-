# ProductTaxon.php

**Path**: `src\Entity\Product\ProductTaxon.php`

## Summary
This class represents the many-to-many relationship between Products and Taxons (taxonomic categories) in a Sylius e-commerce application. It extends the base Sylius ProductTaxon model to store which products belong to which categories, including their position/order within those categories. The custom constructor allows flexible initialization of the relationship, and the `getName()` method provides convenient access to the associated taxon's name.

## Classes
- `ProductTaxon`

## Function Details

### `__construct`

- **Parameters**: `?Product $product = null, ?Taxon $taxon = null, ?int $position = null`

### `getName`


