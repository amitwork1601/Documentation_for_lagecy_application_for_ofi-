# UpsellNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Upsell\UpsellNormalizer.php`

## Summary
The `UpsellNormalizer` is a Symfony serializer component that handles the normalization (serialization) of `UpSell` entities into array/JSON format for API responses. Its main functionality is to delegate to the standard normalizer while ensuring the `availableVariants` field is converted from an associative array to a numerically-indexed array, preventing potential issues with JSON serialization where numeric keys might be exposed as object properties instead of arrays.

## Classes
- `UpsellNormalizer`

## Function Details

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`

