# UpdBackendIdentifierNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Order\UpdBackendIdentifierNormalizer.php`

## Summary
This normalizer adds a UPD backend identifier to serialized Order objects when specific serialization groups are active (admin order views and webmethod order reads). It decorates the standard normalization process by injecting the configured `updBackendIdentifier` value into the output data, with error handling to gracefully omit the field if a channel context cannot be established.

## Classes
- `UpdBackendIdentifierNormalizer`

## Function Details

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`
- **Description**: @throws \Symfony\Component\Serializer\Exception\ExceptionInterface
/

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

