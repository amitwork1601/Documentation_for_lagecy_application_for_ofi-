# PersistProcessor.php

**Path**: `src\Api\StateProcessor\Admin\Product\PersistProcessor.php`

## Summary
This API Platform state processor handles the persistence of Product entities for admin users with API access. Its main functionality is to prevent duplicate ProductTaxon associations by checking if a product-taxon relationship already exists before persisting new ones, removing duplicates from the product's collection before delegating to the standard Doctrine persist processor.

## Classes
- `PersistProcessor`

## Function Details

### `process`

- **Parameters**: `mixed $data, Operation $operation, array $uriVariables = [], array $context = []`

### `findProductTaxon`

- **Parameters**: `ProductInterface $product, TaxonInterface $taxon`

