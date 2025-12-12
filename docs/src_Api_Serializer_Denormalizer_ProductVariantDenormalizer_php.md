# ProductVariantDenormalizer.php

**Path**: `src\Api\Serializer\Denormalizer\ProductVariantDenormalizer.php`

## Summary
This is a Symfony serializer denormalizer that handles the conversion of API request data into ProductVariant entities for an e-commerce system built on Sylius. It manages the creation and updating of product variants by processing incoming data, resolving entity relationships (like channels, tax categories, and shipping categories) through IRI references, and ensures proper entity state management. The denormalizer acts as a custom deserialization layer to bridge API Platform's data handling with Sylius's product variant domain logic, preventing infinite recursion through a context flag.

## Classes
- `ProductVariantDenormalizer`

## Function Details

### `denormalize`

- **Parameters**: `mixed $data, string $type, ?string $format = null, array $context = []`

### `supportsDenormalization`

- **Parameters**: `mixed $data, string $type, ?string $format = null, array $context = []`

