# ShopProductVariantNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\ProductVariant\ShopProductVariantNormalizer.php`

## Summary
This class is a decorator for Sylius's product variant normalizer that customizes the serialization behavior of product variants in the shop API context. It wraps the base `ProductVariantNormalizer` to intercept and modify the normalization process, using a flag (`ALREADY_CALLED`) to prevent infinite recursion while delegating the actual normalization work to the decorated base normalizer. The normalizer integrates with Sylius's section-based architecture to apply context-specific serialization logic for product variants in shop (non-admin) API responses.

## Classes
- `ShopProductVariantNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, $format = null, $context = []`

### `isNotAdminApiSection`


