# ProductOptionValueDenormalizer.php

**Path**: `src\Api\Serializer\Denormalizer\ProductOptionValueDenormalizer.php`

## Summary
This denormalizer handles the deserialization of ProductOptionValue entities in an e-commerce API context, specifically for Sylius-based product option values (like size, color variations). It intercepts the denormalization process to properly resolve IRI (Internationalized Resource Identifier) references to existing ProductOptionValue entities from the repository, ensuring that product option values are correctly linked when processing API requests rather than creating duplicate entities.

## Classes
- `ProductOptionValueDenormalizer`

## Function Details

### `denormalize`

- **Parameters**: `mixed $data, string $type, ?string $format = null, array $context = []`

### `supportsDenormalization`

- **Parameters**: `mixed $data, string $type, ?string $format = null`

