# PointNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\PointNormalizer.php`

## Summary
The `PointNormalizer` class is a Symfony serializer component that converts spatial `Point` objects (from the LongitudeOne library) into normalized array representations for API responses. It extracts the X and Y coordinates from a Point object and maps them to `latitude` and `longitude` keys respectively, enabling geographic point data to be properly serialized in API outputs.

## Classes
- `PointNormalizer`

## Function Details

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`

### `hasCacheableSupportsMethod`


