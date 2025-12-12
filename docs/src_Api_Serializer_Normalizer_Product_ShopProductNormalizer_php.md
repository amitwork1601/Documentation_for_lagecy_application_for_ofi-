# ShopProductNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Product\ShopProductNormalizer.php`

## Summary
This class is a decorator for Sylius's product normalizer that enhances product serialization specifically for the shop API context. Its main purpose is to extend the default product normalization behavior by likely adding the default product variant's IRI to the normalized product data, ensuring shop API responses include the necessary variant information for products. It uses section resolution to determine when to apply shop-specific normalization logic and prevents infinite recursion through the ALREADY_CALLED context flag.

## Classes
- `ShopProductNormalizer`

## Function Details

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`

