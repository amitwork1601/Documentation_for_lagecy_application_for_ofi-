# FreeProductsNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Order\FreeProductsNormalizer.php`

## Summary
The `FreeProductsNormalizer` is a Symfony serializer normalizer that enhances Order entity serialization by extracting and adding free product information from order adjustments. It identifies products that were added to orders as promotional/free items (via adjustments) and normalizes them into a dedicated `freeProducts` array in the serialized output, making free promotional products explicitly visible in API responses across various contexts (admin, shop, cart, subscriptions).

## Classes
- `FreeProductsNormalizer`

## Function Details

### `__construct`

- **Parameters**: `ProductVariantRepository $productVariantRepository, ?array $activeSerializationGroup = null`

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

