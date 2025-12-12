# ProductDenormalizer.php

**Path**: `src\Api\Serializer\Denormalizer\ProductDenormalizer.php`

## Summary
The `ProductDenormalizer` class is a custom Symfony serializer denormalizer that handles the conversion of incoming API data into `Product` entities for an e-commerce system built with Sylius. It manages product deserialization by either retrieving existing products from IRIs (Internationalized Resource Identifiers), populating existing product objects, or creating new product instances using a factory, while preventing circular denormalization calls through a context flag mechanism.

## Classes
- `ProductDenormalizer`

## Function Details

### `denormalize`

- **Parameters**: `mixed $data, string $type, ?string $format = null, array $context = []`

### `supportsDenormalization`

- **Parameters**: `mixed $data, string $type, ?string $format = null, array $context = []`

