# AdminProductTaxonNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Product\AdminProductTaxonNormalizer.php`

## Summary
This normalizer handles the serialization of `ProductTaxon` entities (the relationship between products and taxonomy categories) in the admin API context. Its main purpose is to prevent duplicate product-taxon associations by checking if a relationship already exists in the database before normalization, and if found, using the existing entity's IRI instead of creating a new one.

## Classes
- `AdminProductTaxonNormalizer`

## Function Details

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`

### `isAdminOperation`

- **Parameters**: `array $context`

### `findProductTaxon`

- **Parameters**: `ProductInterface $product, TaxonInterface $taxon`

